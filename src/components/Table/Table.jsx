import React, { Fragment, useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import { columns } from './columns';
import { fetchArticleById, cleanupshowArticle, deleteArticleById } from '../../redux/actions';
import { selectshowArticle  } from '../../redux/selectors';
import ShowRowModal from '../ShowRowModal/ShowRowModal' ;

export default function MaterialTable({ news }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const showArticle = useSelector(selectshowArticle);
  const [showArticleId, setShowArticleId] = useState('');
  const [deleteArticleId, setDeleteArticleId] = useState('');
  

  const shouldDisplayshowArticle = Object.keys(showArticle).length && showArticleId !== '';


  useEffect(() => {
    if (showArticleId) {
      dispatch(fetchArticleById(showArticleId))
    } else {
      dispatch(cleanupshowArticle());
    }
  }, [dispatch, showArticleId]);


  useEffect(() => {
    if (deleteArticleId) {
      dispatch(deleteArticleById(deleteArticleId))
      setShowArticleId('');
    }
  }, [dispatch, deleteArticleId]);


  return (
    <Fragment>
      <ShowRowModal open={shouldDisplayshowArticle} handleClose={() => setShowArticleId('')} showArticle={showArticle} />
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {news.map((element) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={element.id} >
                    {columns.map((column) => {
                      const columnId = column.id;
                      const elementId = element.objectID;
                      const isActiveSelection = showArticleId === element.objectID; // display loading indicator IF we press the see details eye. I noticed API is very slow sometimes

                      return (
                        <TableCell key={elementId + columnId} align={column.align}>
                          {columnId !== "actions" ? element[column.id] :
                            <Fragment>
                              {isActiveSelection ?
                                <span data-testid={"loadingIcon"}> <ClipLoader size={20} color={"black"} /> </span>
                                :
                                <VisibilityIcon onClick={() => setShowArticleId(elementId)} data-testid={"eyeIcon"} />
                              }
                              <DeleteIcon onClick={() => setDeleteArticleId(elementId)} data-testid={"deleteIcon"} /> </Fragment>}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Fragment>
  );
}
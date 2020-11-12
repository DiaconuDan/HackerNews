import React, { Fragment } from 'react';
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
import { fetchArticle, clearActiveArticle, deleteArticle } from '../../redux/actions';
import { selectActiveArticle, selectLoadingShowArticleID, selectLoadingDeleteArticleID } from '../../redux/selectors';
import ShowRowModal from '../ShowRowModal/ShowRowModal';

export default function MaterialTable({ news }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const loadingDeleteArticleId = useSelector(selectLoadingDeleteArticleID);
  const loadingShowArticleID = useSelector(selectLoadingShowArticleID);
  const activeArticle = useSelector(selectActiveArticle);

  const shouldDisplayArticle = activeArticle && Object.keys(activeArticle).length && loadingShowArticleID !== '' ;

  return (
    <Fragment>
      <ShowRowModal open={shouldDisplayArticle} handleClose={() => dispatch(clearActiveArticle())} activeArticle={activeArticle} />
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
                      const isActiveEyeSelection = loadingShowArticleID === element.objectID; // display loading indicator IF we press the see details eye. I noticed API is very slow sometimes
                      // const isActiveDeleteSelection = loadingDeleteArticleId === element.objectID; // same for delete. But right now there is no API call

                      return (
                        <TableCell key={elementId + columnId} align={column.align}>
                          {columnId !== "actions" ? element[column.id] :
                            <Fragment>
                              {isActiveEyeSelection ?
                                <span data-testid={"loadingIcon"}> <ClipLoader size={20} color={"black"} /> </span>
                                :
                                <VisibilityIcon onClick={() => dispatch(fetchArticle(elementId))} data-testid={"eyeIcon"} />
                              }
                              
                                <DeleteIcon onClick={() => dispatch(deleteArticle(elementId))} data-testid={"deleteIcon"} />


                            </Fragment>}
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
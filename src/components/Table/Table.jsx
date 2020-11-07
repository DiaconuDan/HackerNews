import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {useStyles} from './styles' ;
import {columns} from './columns' ;
import { Pagination } from '@material-ui/lab';

export default function MaterialTable({ news }) {
  const classes = useStyles();

 
  return (
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
                <TableRow hover role="checkbox" tabIndex={-1} >
                  {columns.map((column) => {
                    return (
                      <TableCell key={column.id} align={column.align} onClick={() => alert('sal')}>
                        {column.format && typeof value === 'number' ? column.format(element[column.id]) : element[column.id]}
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
  );
}
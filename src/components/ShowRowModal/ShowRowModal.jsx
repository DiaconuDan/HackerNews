import React, { Fragment } from 'react';
import Modal from '@material-ui/core/Modal';
import { Wrapper } from '../Table/styles';
import { useStyles } from './styles';

export default function ShowRowModal({ open, handleClose, activeArticle }) {
  const classes = useStyles();

  if (!open) {
    return <Fragment />
  }

  return (
    <Wrapper>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 >Full details of "{activeArticle.title}" by {activeArticle.author} </h2>
          <p>
            {JSON.stringify(activeArticle)}
          </p>
        </div>
      </Modal>
    </Wrapper>
  );
}


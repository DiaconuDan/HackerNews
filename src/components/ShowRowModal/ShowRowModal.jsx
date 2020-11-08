import React, { Fragment } from 'react';
import Modal from '@material-ui/core/Modal';
import { Wrapper } from '../Table/styles';
import { useStyles } from './styles';


export default function ShowRowModal({ open, handleClose, showArticle }) {
  const classes = useStyles();

  if (!open) {
    return <Fragment />
  }

  return (
    <Wrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Full details of "{showArticle.title}" by {showArticle.author} </h2>
          <p id="simple-modal-description">
            {JSON.stringify(showArticle)}
          </p>
        </div>
      </Modal>
    </Wrapper>
  );
}
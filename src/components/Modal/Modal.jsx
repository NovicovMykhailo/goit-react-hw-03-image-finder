import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

export default class Modal extends Component {
  modalRoot = document.querySelector('#modal-root');

  render() {
    return createPortal(
      <div className={css.Overlay}>
        <div className={css.Modal}>{this.props.children}</div>
      </div>,
      this.modalRoot
    );
  }
}

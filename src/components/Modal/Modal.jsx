import { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default class Modal extends PureComponent {
  modalRoot = document.querySelector('#modal-root');

  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEsc);
  }

  closeOnEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  onClickClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.onClickClose}>
        <div className={css.Modal}>{this.props.children}</div>
      </div>,
      this.modalRoot
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

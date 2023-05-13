import { Component } from 'react';
import css from './Button.module.css'
import PropTypes from 'prop-types';


export default class Button extends Component {
  render() {
    return (
      <button type="button" className={css.Button} onClick={this.props.onClick}>
        Load More
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
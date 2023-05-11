import { Component } from 'react';
import css from './Button.module.css'

export default class Button extends Component {
  // this.props.onSubmit
  state = {};

  render() {
    return (
      <button type="button" className={css.Button}>
        Load More
      </button>
    );
  }
}

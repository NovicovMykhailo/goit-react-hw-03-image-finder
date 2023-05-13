import css from './ImageGalleyItem.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';


export default class ImageGalleyItem extends Component {

  onClick = () => {
    return this.props.onClick({
      largerImage: this.props.largerImage,
      alt: this.props.alt,
    })
  };


  render() {
    const { src, alt } = this.props;

    return (
      <li className={css.ImageGalleryItem}>
        <img src={src} alt={alt} onClick={this.onClick} />
      </li>
    );
  }
}


ImageGalleyItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largerImage: PropTypes.string.isRequired,
};
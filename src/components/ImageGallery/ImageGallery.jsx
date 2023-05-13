import { Component } from 'react';
import ImageGalleyItem from 'components/ImageGalleryItem/ImageGalleyItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types'



export default class ImageGallery extends Component {
  state = {
    gallery: [],
  };

  onClick = ({ largerImage, alt }) => {
    this.props.modalImage({
      largerImage: largerImage,
      alt: alt,
    });
    this.props.openModal();
  };

  render() {
    const { images } = this.props;

    return (
      <ul className={css.ImageGallery}>
        {images.map(image => {
          return (
            <ImageGalleyItem
              onClick={this.onClick}
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              largerImage={image.largeImageURL}
            />
          );
        })}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  modalImage: PropTypes.func.isRequired,
};
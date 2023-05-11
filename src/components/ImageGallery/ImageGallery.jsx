import { Component } from 'react';
import ImageGalleyItem from 'components/ImageGalleryItem/ImageGalleyItem';
import css from './ImageGallery.module.css';
// import Loader from '../Loader/Loader';



export default class ImageGallery extends Component {
  //this.props => response Jseon parse
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
        {images.hits.map(image => {
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

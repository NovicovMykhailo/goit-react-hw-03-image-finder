import ImageGalleyItem from 'components/ImageGalleryItem/ImageGalleyItem';
import css from './ImageGallery.module.css';
import { Component } from 'react';

export default class ImageGallery extends Component {
  //this.props => response Jseon parse
  state = {
    gallery: [],
  };

  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.props.map(image => {
          console.log(image);
          // return <ImageGalleyItem src={image.src} alt={image.alt} />;
          return <ImageGalleyItem />;
        })}
      </ul>
    );
  }
}

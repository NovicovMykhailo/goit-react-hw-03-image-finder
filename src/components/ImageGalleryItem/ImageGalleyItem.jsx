import css from './ImageGalleyItem.module.css';
import { Component } from 'react';
import Loader from '../Loader/Loader';


export default class ImageGalleyItem extends Component {
  state = {
    showLoader: null,
  };
  onClick = () => {
    return this.props.onClick({
      largerImage: this.props.largerImage,
      alt: this.props.alt,
    });
  };

  // componentDidUpdate() {
  //   this.setState({ showLoader: !this.state.showLoader });
  // }
  // componentDidMount() {
  //   this.setState({ showLoader: !this.state.showLoader });
  // }

  render() {
    const { src, alt } = this.props;

    return (
      <li className={css.ImageGalleryItem}>
        {this.showLoader && <Loader />}
        <img src={src} alt={alt} onClick={this.onClick} />
      </li>
    );
  }
}

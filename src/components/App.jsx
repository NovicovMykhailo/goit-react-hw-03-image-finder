import { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
// import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Response from '../response.json';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  state = {
    foundImages: Response,
    searchItem: '',
    showModal: false,
    showLoader: false,
    largerImage: null,
    alt: null,
  };

  setSearchItem = data => {
    this.setState({ searchItem: data });
  };

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  modalImage = ({ alt, largerImage }) => {
    this.setState({
      largerImage: largerImage,
      alt: alt,
    });
  };

  render() {
    const { showModal, foundImages, largerImage, alt } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.setSearchItem} />
        <ImageGallery
          images={foundImages}
          openModal={this.toggleModal}
          modalImage={this.modalImage}
        />
        <Button />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            children={<img src={largerImage} alt={alt} />}
          />
        )}
      </div>
    );
  }
}

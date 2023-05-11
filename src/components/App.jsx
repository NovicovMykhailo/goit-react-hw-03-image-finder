import { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Response from '../response.json';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  #KEY = '34707727-e20630cf7e49276d83ab15980';
  #URL = 'https://pixabay.com/api/?';
  #initialSearch = {
    // q: this.state.searchItem,
    // page: this.state.page,
    key: this.#KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page:12
  };

  state = {
    foundImages: Response,
    searchItem: '',
    showModal: false,
    showLoader: false,
    page: 1,
    largerImage: null,
    alt: null,
  };

  




  setSearchItem = data => {
    this.setState({ searchItem: data });
    //fetch data
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

  onLoadMore = data => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    //  console.log(data);
    //  fetching page
  };

  render() {
    const { showModal, foundImages, largerImage, alt, showLoader } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.setSearchItem} />
        {showLoader && <Loader />}
        {foundImages && (
          <ImageGallery
            images={foundImages}
            openModal={this.toggleModal}
            modalImage={this.modalImage}
          />
        )}
        {foundImages && <Button onClick={this.onLoadMore} />}
        {showModal && (
          <Modal onClose={this.toggleModal} children={<img src={largerImage} alt={alt} />} />
        )}
      </div>
    );
  }
}

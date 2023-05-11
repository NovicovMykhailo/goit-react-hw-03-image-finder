import { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
// import Response from '../response.json';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  #KEY = '34707727-e20630cf7e49276d83ab15980';
  #URL = 'https://pixabay.com/api/?';

  options = new URLSearchParams([
    ['orientation', 'horizontal'],
    ['safesearch', 'true'],
    ['per_page', 12],
    ['image_type', 'photo'],
  ]);

  state = {
    foundImages: null,
    searchItem: '',
    showModal: false,
    showLoader: false,
    page: 1,
    largerImage: null,
    alt: null,
    error: null,
    status: 'idle', //'penging', 'rejected', 'resolved'
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchItem;
    const nextSearch = this.state.searchItem;
    const page = this.state.page;

    if (prevSearch !== nextSearch) {
      this.setState({ status: 'pending' });

      fetch(
        `${this.#URL}q=${this.state.searchItem}&key=${this.#KEY}&page=${page}&${
          this.options
        }`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error('Oops Something Went Wrong'));
        })
        .then(foundImages => this.setState({ foundImages, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

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

  onLoadMore = data => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    //  fetching page
  };

  render() {
    const { showModal, foundImages, largerImage, alt, error, status } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.setSearchItem} />
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <ImageGallery
            images={foundImages}
            openModal={this.toggleModal}
            modalImage={this.modalImage}
          />
        )}
        {status === 'rejected' && <h1>{error.message}</h1>}
        {status === 'resolved' && <Button onClick={this.onLoadMore} />}
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

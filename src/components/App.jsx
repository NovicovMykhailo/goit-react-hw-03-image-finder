import { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { fetchByName, pagination } from '../services/pixabay-api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  state = {
    foundImages: null,
    searchItem: '',
    showModal: false,
    showLoader: false,
    nextPage: 1,
    largerImage: null,
    alt: null,
    error: null,
    status: 'idle',
    showButton: true,
    total: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchItem;
    const nextSearch = this.state.searchItem;

    if (prevSearch !== nextSearch) {
      this.setState({ status: 'pending', nextPage: 2 });

      fetchByName(nextSearch)
        .then(foundImages => {
          if (foundImages.total !== 0) {
            this.setState({
              foundImages: foundImages.hits,
              status: 'resolved',
              error: null,
              total: foundImages.total,
              showButton: true,
            });
          } else {
            this.setState({
              status: 'rejected',
              error: new Error(`Cannot find photos for ${nextSearch} category`),
            });
          }
        })
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

  onLoadMore = () => {
    const { searchItem, nextPage } = this.state;

    pagination(searchItem, nextPage)
      .then(newImages => {
        this.setState(({ foundImages, nextPage }) => ({
          foundImages: [...foundImages, ...newImages.hits],
          status: 'resolved',
          nextPage: nextPage + 1,
        }));
        if (this.state.foundImages.length + 12 >= this.state.total) {
          this.setState({ showButton: false });
        }
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    const { showModal, foundImages, largerImage, alt, error, status, showButton } =
      this.state;
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
        {status === 'rejected' && (
          <div className={css.error}>
            <h1>{error.message}</h1>
          </div>
        )}
        {status === 'resolved' && showButton && <Button onClick={this.onLoadMore} />}
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

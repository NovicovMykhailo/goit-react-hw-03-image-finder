import { Component } from 'react';
import Loader from './Loader/Loader';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
  }



  toggleModal = () => {
    const {showModal} = this.state
    this.setState({ showModal: !showModal });
  }

  render() {
    return (
      <div className={css.app}>
        <Searchbar/>
        {/* <Loader />
        <Modal childern={<div><h1>тут будет модалка</h1></div>} /> */}
      </div>
    );
  }
}

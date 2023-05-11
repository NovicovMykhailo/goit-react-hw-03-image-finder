import { Component } from "react";
import css from './Searchbar.module.css'


export default class Searchbar extends Component{
    state = {
        itemToSearch: ''
    }
    onSubmit = (e) => {
      e.preventDefault()
      this.props.onSubmit(this.state.itemToSearch);
      this.setState({ itemToSearch: '' });
    }
    onChange = (e) => {
        this.setState({ itemToSearch: e.target.value });
    }

    render() {
        return (
          <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={this.onSubmit}>
              <button type="submit" className={css.SearchFormButton}>
                <span className={css.SearchFormButtonLabel}>Search</span>
              </button>

              <input onChange={this.onChange}
                className={css.SearchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={this.state.itemToSearch}
              />
            </form>
          </header>
        );
    }
}






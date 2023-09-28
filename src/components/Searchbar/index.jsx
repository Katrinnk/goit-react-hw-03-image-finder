import { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  render() {
    const onSubmit = this.props.onSubmit;
    return (
      <header className="Searchbar">
        <form
          className="SearchForm"
          onSubmit={this.props.onSubmit(this.state.searchQuery)}
        >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={({ target: { value } }) => {
              this.setState({ searchQuery: value });
            }}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;

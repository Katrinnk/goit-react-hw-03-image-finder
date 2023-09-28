import { getImages } from 'api/images';
import { Component } from 'react';
import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    images: [],
    page: 1,
    totalPages: 0,
  };

  onSubmit = searchQuery => {
    getImages(searchQuery, this.state.page)
      .then(data => {
        if (data.hits.length === 0) {
          alert('Images not found');
        }
        this.setState({
          images: data.hits,
          totalPages: data.totalHits / 12,
          searchQuery: searchQuery,
        });

        console.log('data', data);
      })
      .catch(e => {
        alert(e);
      });
  };

  loadMore = () => {
    <Loader />;

    getImages(this.state.searchQuery, this.state.page);
    this.setState(prev => {
      prev.page++;
    });

    console.log('page', this.state.page);
  };

  render() {
    console.log('this.state', this.state);
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.totalPages / this.state.page !== 0 && (
          <Button loadMore={this.loadMore} />
        )}
      </>
    );
  }
}
export default App;

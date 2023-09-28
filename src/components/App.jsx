import { getImages } from 'api/images';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    images: [],
  };

  updateImages = () => {
    getImages().then(data => {
      this.setState({ images: data.hits });
    });
  };

  onSubmit = (e, searchQuery) => {
    e.preventDefault();
    console.log('searchQuery', searchQuery);
    console.log('hello');
  };

  render() {
    this.updateImages();
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {/* <ImageGallery images={this.state.images} /> */}
      </>
    );
  }
}
export default App;

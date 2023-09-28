import axios from 'axios';

const API_KEY = '38756326-a9c3d4d4b95b73173c7191d42';
const searchQuery = 'sea';
axios.defaults.baseURL = `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export const getImages = async () => {
  const { data } = await axios();
  return data;
};

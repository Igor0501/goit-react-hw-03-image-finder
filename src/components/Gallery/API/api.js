import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '33634172-69812b587cbe0ba586ff0443e';

const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};

export default fetchImages;

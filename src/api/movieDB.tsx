import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '3aa44005fd6042c68d1b2e81d8ffd42b',
    language: 'es-ES'
  }
});

export default movieDB;

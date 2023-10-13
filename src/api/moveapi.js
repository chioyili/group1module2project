import axios from 'axios';

const BASE_URL = 'http://www.omdbapi.com';
const movieAPI = axios.create({baseURL: BASE_URL});

export default movieAPI
import axios from 'axios';

const BASE_URL = 'https://www.omdbapi.com';
const movieAPI = axios.create({baseURL: BASE_URL});

export default movieAPI
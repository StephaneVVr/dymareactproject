import * as axios from 'axios';

const apiToken = process.env.REACT_APP_API_TOKEN;

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4',
    headers: {
      Authorization: `Bearer ${apiToken}`
    }
})

export default apiMovie;
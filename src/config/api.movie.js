import * as axios from 'axios';

const apiToken = process.env.REACT_APP_API_TOKEN;

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4',
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
})

export default apiMovie;

export const apiMovieMap = (movie) => ({
  img: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
  title: movie.title,
  details: `${ movie.release_date } | ${ movie.vote_average }/10 (${ movie.vote_count })`,
  description: movie.overview
})
import React, { Component } from 'react';
import Films from './features/movies/Films'
import apiMovie, { apiMovieMap } from './config/api.movie';

import { Header } from './components';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false
    }
  }

  updateSelectMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  componentDidMount() {
    apiMovie.get('/discover/movie', {
    })
      .then( response => response.data.results)
      .then( moviesApi => {
        const movies = moviesApi.map(apiMovieMap)
        this.updateMovies(movies)
      })
      .catch( error => console.log(error));
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: true
    })
  }

  render() {
    const { loaded, movies, selectedMovie } = this.state
    return (
      <>
        <Header />
        <Films 
          loaded={ loaded }
          updateMovies={ this.updateMovies }
          updateSelectMovie={ this.updateSelectMovie }
          movies={ movies }
          selectedMovie={ selectedMovie }
        />
      </>
    );
  }
}

export default App;

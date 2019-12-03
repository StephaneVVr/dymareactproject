import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import apiMovie, { apiMovieMap } from './config/api.movie';

import { Header, MovieDetails, MovieList, Loading, SearchBar } from './components';

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
    const { movies, selectedMovie } = this.state
    return (
      <>
        <Header />
        <SearchBar updateMovies={ this.updateMovies }/>
        { this.state.loaded ? (
          <Grid columns={2} width={16}>
            <Grid.Column width={11}>
              <MovieList movie={movies} updateSelectedMovie={this.updateSelectMovie} />
            </Grid.Column>
            <Grid.Column width={5} stretched>
              <MovieDetails movie={movies[selectedMovie]} />
            </Grid.Column>
          </Grid>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default App;

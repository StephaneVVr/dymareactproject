import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 

import Films from './features/movies/Films';
import Bookmark from './features/bookmark/Bookmark';
import apiMovie, { apiMovieMap } from './config/api.movie';
import { Header } from './components';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
      bookmark: []
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

  addBookmark = (title) => {
    const bookmark = this.state.bookmark.slice();
    const movie = this.state.movies.find( m => m.title === title );
    bookmark.push(movie);
    this.setState({
      bookmark
    })
  }

  removeBookmark = (title) => {
    const bookmark = this.state.bookmark.slice();
    const index = this.state.bookmark.findIndex( b => b.title === title );
    bookmark.splice(index, 1);
    this.setState({
      bookmark
    })
  }

  render() {
    const { loaded, movies, selectedMovie, bookmark } = this.state
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/films" render={ (props) => { 
            return (
              <Films 
                { ...props }
                loaded={ loaded }
                updateMovies={ this.updateMovies }
                updateSelectMovie={ this.updateSelectMovie }
                movies={ movies }
                selectedMovie={ selectedMovie }
                addBookmark= { this.addBookmark }
                removeBookmark={ this.removeBookmark }
                bookmark={ bookmark.map( b => b.title ) }
              />
            )
          }}/>
          <Route path="/favoris" render={ () => {
            return (
              <Bookmark
                bookmark={ this.state.bookmark }
                removeBookmark={ this.removeBookmark }
              />
            )
          }} />
          <Redirect to="/films" />
        </Switch>
      </Router>
    );
  }
}

export default App;

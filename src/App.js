import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 

import Films from './features/movies/Films';
import Bookmark from './features/bookmark/Bookmark';
import apiMovie, { apiMovieMap } from './config/api.movie';
import apiFirebase from './config/api.firebase';
import { Header } from './components';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
      bookmark: null
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

    apiFirebase.get('bookmark.json')
      .then( response => {
        let bookmark = response.data ? response.data : [];
        this.updateBookmark(bookmark)
      })
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: this.state.bookmark ? true : false
    })
  }

  updateBookmark = (bookmark) => {
    this.setState({
      bookmark,
      loaded: this.state.movies ? true : false
    })
  }

  
  addBookmark = (title) => {
    const bookmark = this.state.bookmark.slice();
    const movie = this.state.movies.find( m => m.title === title );
    bookmark.push(movie);
    this.setState({
      bookmark
    }, () => {    
      this.saveBookmark(); 
    })
  }
  
  removeBookmark = (title) => {
    const bookmark = this.state.bookmark.slice();
    const index = this.state.bookmark.findIndex( b => b.title === title );
    bookmark.splice(index, 1);
    this.setState({
      bookmark
    }, () => {    
      this.saveBookmark(); 
    })
  }
  
  saveBookmark = () => {
    const { bookmark } = this.state;
    apiFirebase.put('bookmark.json', bookmark);
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
                bookmark={ bookmark }
              />
            )
          }}/>
          <Route path="/favoris" render={ (props) => {
            return (
              <Bookmark
                { ...props }
                loaded={ loaded }
                bookmark={ bookmark }
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

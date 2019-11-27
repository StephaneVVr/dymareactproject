import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import apiMovie from './config/api.movie';

import { Header, MovieDetails, MovieList, Loading } from "./components";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false
    }

    setTimeout( () => {
      this.setState({
        movies: [
          {
          title: 'Test movie',
          img: 'https://images-na.ssl-images-amazon.com/images/I/914kjq3ecQL._SY606_.jpg',
          details: '155 min // Action, adventure',
          description: 'Quo cognito Constantius ultra mortalem modum exarsit ac nequo casu idem Gallus de futuris.'
        },
        {
          title: 'Test movie 002',
          img: 'https://images-na.ssl-images-amazon.com/images/I/510P76z5sdL._SY355_.jpg',
          details: '160 min // Action, adventure, drame',
          description: 'Quo cognito Constantius ultra mortalem modum exarsit ac nequo casu idem Gallus de futuris.'
        },
        {
          title: 'Test movie 003',
          img: 'https://media.senscritique.com/media/000009573873/source_big/The_Big_Bang_Theory.jpg',
          details: '160 min // Action, adventure, drame',
          description: 'Quo cognito Constantius ultra mortalem modum exarsit ac nequo casu idem Gallus de futuris.'
        }
        ],
        loaded: true
      })
    }, 2000)
  }

  updateSelectMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  componentDidMount() {
    apiMovie.get('/discover/movie', {
    })
      .then( response => console.log(response))
      .then( error => console.log(error));
  }

  render() { 
    const { movies, selectedMovie } = this.state
  return (
    <>
      <Header />
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

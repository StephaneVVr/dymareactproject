import React, { Component } from "react";
import { Grid } from "semantic-ui-react"

import { Header, MovieDetails, MovieList } from "./components";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      selectedMovie: 0
    }
  }
  
  updateSelectMovie = (title) => {
    const index = this.state.movies.findIndex((m) => {
      return title === m.title
    })
    this.setState({
      selectedMovie: index
    })
  }

  render() { 
    const { movies, selectedMovie } = this.state
  return (
    <>
      <Header />
      <Grid columns={2} width={16}>
        <Grid.Column width={11}>
        <MovieList movie={movies} updateSelectedMovie={this.updateSelectMovie} />
      </Grid.Column>
      <Grid.Column width={5} stretched>
        <MovieDetails movie={movies[selectedMovie]} />
      </Grid.Column>
      </Grid>
      </>
  );
  }
}

export default App;

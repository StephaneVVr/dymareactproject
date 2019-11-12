import React, { Component } from "react";
import MovieElement from "./MovieElement";
import { Card } from "semantic-ui-react";
import _ from 'lodash'

export default class MovieList extends Component {

  renderMovie = () => {
    const { movie, updateSelectedMovie } = this.props

    if (!_.isNil(movie)) {
      return (
      <Card.Group>
        {movie.map((movie, index) => (
            <MovieElement key={index} movie={movie} updateSelectedMovie={updateSelectedMovie} />
          ))}
      </Card.Group>
      )
    }
  }

  render() {
    return (
      <>
        {this.renderMovie()}
      </>
    );
  }
}

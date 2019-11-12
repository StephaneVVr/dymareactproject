import React, { Component } from "react";
import MovieElement from "./MovieElement";
import { Card } from "semantic-ui-react";

export default class MovieList extends Component {
  render() {
    return (
      <Card.Group>
        <MovieElement movie={this.props.movie[0]} updateSelectedMovie={this.props.updateSelectedMovie} />
        <MovieElement movie={this.props.movie[1]} updateSelectedMovie={this.props.updateSelectedMovie} />
        <MovieElement movie={this.props.movie[2]} updateSelectedMovie={this.props.updateSelectedMovie} />
        <MovieElement movie={this.props.movie[0]} updateSelectedMovie={this.props.updateSelectedMovie} />
        <MovieElement movie={this.props.movie[1]} updateSelectedMovie={this.props.updateSelectedMovie} />
        <MovieElement movie={this.props.movie[2]} updateSelectedMovie={this.props.updateSelectedMovie} />
      </Card.Group>
    );
  }
}

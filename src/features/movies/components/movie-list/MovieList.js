import React, { Component } from 'react';
import MovieElement from './MovieElement';
import { Card } from 'semantic-ui-react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default class MovieList extends Component {

  componentDidMount = () => {
    console.log(this.props)
  }

  renderMovie = () => {
    const { movie, updateSelectedMovie, bookmark, addBookmark, removeBookmark } = this.props

    if (!_.isNil(movie)) {
      return (
        <Card.Group>
          {movie.map((movie, index) => (
            <MovieElement 
              key={index} 
              movie={movie}
              isBookmark={bookmark.includes(movie.title)}
              addBookmark={ addBookmark }
              removeBookmark={ removeBookmark } 
              updateSelectedMovie={ () => {updateSelectedMovie(index)}} />
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

MovieList.propTypes = {
  movie: PropTypes.array,
  updateSelectedMovie: PropTypes.func,
  bookmark: PropTypes.array,
  addBookmark: PropTypes.func,
  removeBookmark: PropTypes.func
}

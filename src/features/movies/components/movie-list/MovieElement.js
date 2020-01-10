import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types'; 

export default class MovieElement extends Component {

  mouseEnter = () => {
    this.props.updateSelectedMovie(this.props.movie.title)
  }

  render() {
    const { movie, isBookmark, removeBookmark, addBookmark } = this.props
    return (
      <Card color='blue' onClick={this.mouseEnter}>
        <Image src={movie.img} />
        <Card.Content>
          <Card.Header>{movie.title}</Card.Header>
          <Card.Description>
            {movie.details}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          { isBookmark ? (
            <Button 
              color="red"
              onClick={ () => {removeBookmark(movie.title)}}>
              Remove
            </Button>
          ) : (
            <Button 
              color="green"
              onClick={ () => {addBookmark(movie.title)}}>
              Add
            </Button>
          )}
        </Card.Content>
      </Card>
    );
  }
}

MovieElement.propTypes = {
  movie: PropTypes.object,
  updateSelectedMovie: PropTypes.func,
  removeBookmark: PropTypes.func,
  addBookmark: PropTypes.func,
  isBookmark: PropTypes.bool
}


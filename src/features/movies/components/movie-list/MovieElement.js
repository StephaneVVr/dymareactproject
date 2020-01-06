import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types'; 

export default class MovieElement extends Component {

  mouseEnter = () => {
    this.props.updateSelectedMovie(this.props.movie.title)
  }

  render() {
    const { movie } = this.props
    return (
      <Card color='blue' onClick={this.mouseEnter}>
        <Image src={movie.img} />
        <Card.Content>
          <Card.Header>{movie.title}</Card.Header>
          <Card.Description>
            {movie.details}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

MovieElement.propTypes = {
  movie: PropTypes.object,
  updateSelectedMovie: PropTypes.func
}


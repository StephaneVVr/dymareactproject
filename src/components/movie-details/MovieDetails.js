import React, { Component } from "react";
import { Segment, Image } from "semantic-ui-react"

export default class MovieDetails extends Component {
  render() {
    const { movie } = this.props
    return (  
      <Segment>
        <h5>{movie.title}</h5>
        <Image src={movie.img} />
        <span className='text-secondary'>{movie.details}</span>
        <span>{movie.description}</span>
      </Segment>
    )
  }
}

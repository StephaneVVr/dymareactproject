import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types'; 

export default class BookmarkElement extends Component {
  render() {
    const { bookmark, removeBookmark } = this.props
    return (
      <Card color='blue'>
        <Image src={bookmark.img} />
        <Card.Content>
          <Card.Header>{bookmark.title}</Card.Header>
          <Card.Description>
            {bookmark.details}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Button 
            color="red"
            onClick={ () => {removeBookmark(bookmark.title)}}>
              Remove
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

BookmarkElement.propTypes = {
  bookmark: PropTypes.object,
  removeBookmark: PropTypes.func,
}


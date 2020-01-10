import React, { Component } from 'react';
import BookmarkElement from './BookmarkElement';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class BookmarkList extends Component {
  render() { 
    return (
      <Card.Group>
        {this.props.bookmark.map((bookmark, index) => (
          <BookmarkElement 
            key={index} 
            bookmark={bookmark}
            removeBookmark={ this.props.removeBookmark } 
          />
        ))}
      </Card.Group>
    )
  }
}


BookmarkList.propTypes = {
  movie: PropTypes.array,
  updateSelectedBookmark: PropTypes.func,
  bookmark: PropTypes.array,
  addBookmark: PropTypes.func,
  removeBookmark: PropTypes.func
}

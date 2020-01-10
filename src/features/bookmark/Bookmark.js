import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import BookmarkList from './components/bookmark-list/BookmarkList';
import Loading from '../../components/utils/Loading';

const Bookmark = (props) => {
  return (
    <>
      { props.loaded ? (
        <Grid columns={1} width={16}>
          <Grid.Column width={16}>
            <BookmarkList 
              bookmark={props.bookmark}
              removeBookmark={props.removeBookmark}
            />
          </Grid.Column>
        </Grid>
      ) : (
        <Loading />
      )}
    </>
  )
}

Bookmark.propTypes = {
  bookmark: PropTypes.array,
  removeBookmark: PropTypes.func,
  loaded: PropTypes.bool
}

export default Bookmark;
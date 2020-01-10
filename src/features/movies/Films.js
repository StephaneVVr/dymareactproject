import React from 'react';
import { MovieList, MovieDetails, SearchBar } from './components';
import Loading from '../../components/utils/Loading';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Films = (props) => {
  return (
    <>
      <SearchBar updateMovies={ props.updateMovies }/>
      { props.loaded ? (
        <Grid columns={2} width={16}>
          <Grid.Column width={11}>
            <MovieList 
              movie={props.movies} 
              updateSelectedMovie={props.updateSelectMovie} 
              bookmark={props.bookmark.map( b => b.title )}
              removeBookmark={props.removeBookmark}
              addBookmark={props.addBookmark}
            />
          </Grid.Column>
          <Grid.Column width={5} stretched>
            <MovieDetails movie={props.movies[props.selectedMovie]} />
          </Grid.Column>
        </Grid>
      ) : (
        <Loading />
      )}
    </>
  )
}

Films.propTypes = {
  updateMovies: PropTypes.func,
  loaded: PropTypes.bool,
  movies: PropTypes.array,
  updateSelectMovie: PropTypes.func,
  selectedMovie: PropTypes.number,
  removeBookmark: PropTypes.func,
  addBookmark: PropTypes.func,
  bookmark: PropTypes.array
};

export default Films;




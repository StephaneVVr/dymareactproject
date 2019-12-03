import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

import apiMovie, { apiMovieMap } from '../../config/api.movie'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

    submit = (values, actions) => {
      const query = '?' + Object.keys(values).map(key => `${key}=${values[key]}&`).join('')
      apiMovie.get('/search/movie' + query)
        .then( response => response.data.results)
        .then( moviesApi => {
          const movies = moviesApi.map(apiMovieMap)
          this.props.updateMovies(movies)
          actions.setSubmitting(false)
        })
        .catch( error => console.log(error));
    }

    render() { 
      return (  
        <Formik 
          onSubmit={this.submit}
          initialValues={{ query: '', language: 'en-US' }}
        >
          { ({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
            <form onSubmit={ handleSubmit }>
              <input name='query' placeholder="Searchbar..." onChange={ handleChange } onBlur={ handleBlur } />
              <select name='language' onChange={ handleChange } onBlur={ handleBlur }>
                <option value='en-US'>Anglais</option>
                <option value='fr-FR'>Francais</option>
              </select>
              <button type="submit" disabled={ isSubmitting }>Submit</button>
            </form>
          )}

        </Formik>
      );
    }
}

SearchBar.propTypes = {
  updateMovies: PropTypes.func
}
 
export default SearchBar;
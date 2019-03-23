import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPopularMovies } from '../actions/movieActions'
import MovietvItem from './MovietvItem'
import MoviesTopRated from './MoviesTopRated'
import Spinner from './Spinner'

class Movies extends Component {
  componentDidMount () {
    this.props.getPopularMovies()
  }

  render () {
    const { popularMovies, loading } = this.props.movies
    let movie
    if (
      popularMovies === null ||
      loading ||
      Object.keys(popularMovies).length === 0
    ) {
      movie = <Spinner />
    } else {
      movie = popularMovies['results']
        .slice(0, 12)
        .map(item => <MovietvItem movietv={item} key={item.id} />)
    }
    return (
      <div className='Movies'>
        <div className='container'>
          <div className='mt-3'>
            <h3>Popular Movies</h3>
          </div>
          <div className='row mt-2'>{movie}</div>
          <hr className='mt-3' />
        </div>
        <MoviesTopRated />
      </div>
    )
  }
}

Movies.propTypes = {
  getPopularMovies: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(
  mapStateToProps,
  { getPopularMovies }
)(Movies)

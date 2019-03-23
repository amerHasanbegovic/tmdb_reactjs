import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTopRatedMovies } from '../actions/movieActions'
import Spinner from './Spinner'


class MoviesTopRated extends Component {
  componentDidMount () {
    this.props.getTopRatedMovies()
  }

  render () {
    const { topRatedMovies, loading } = this.props.movies
    let top
    if(topRatedMovies === null || loading || Object.keys(topRatedMovies).length === 0)
    {top = <Spinner/>} else{
      top = topRatedMovies['results'].slice(0, 12).map(item => (
        <Link to={`/movies/${item.id}`} style={{color: 'black', textDecorationStyle: 'none', textDecorationColor: 'red', textAlign: 'center'}} key={item.id} className='col-lg-2 col-md-4 col-sm-6'>
          <div className='p-2'>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              height='100%'
              width='100%'
              alt=''
              title="Click for more info"
              style={{ borderRadius: '5px' }}
            />{' '}
          </div>
          <div className='p-1'>
            <h5>{item.title}</h5>
          </div>
        </Link>
      ))
    }
    return (
      <div className='MoviesTopRated'>
        <div className='container mt-3 p-1'>
          <h1 className='p-1 mb-3 text-center'>
            Some Of The Top Rated Movies Of All Time
          </h1>
          <hr className='mb-3' />
          <div className='row'>{top}</div>
        </div>
      </div>
    )
  }
}

MoviesTopRated.propTypes = {
  getTopRatedMovies: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(
  mapStateToProps,
  { getTopRatedMovies }
)(MoviesTopRated)

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HomeNowPlaying extends Component {
  render () {
    const { movie, tvshow } = this.props
    if (movie) {
      return (
        <div className='col-md-2 p-0'>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt='poster'
            height='100%'
            width='100%'
          />
        </div>
      )
    }
    if (tvshow) {
      return (
        <div className='col-md-2 p-0'>
          <img
            src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
            alt='poster'
            height='100%'
            width='100%'
          />
        </div>
      )
    }
  }
}

HomeNowPlaying.propTypes = {
  movie: PropTypes.object,
  tvshow: PropTypes.object
}
export default HomeNowPlaying

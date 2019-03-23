import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './MovietvItem.css'

class MovietvItem extends Component {
  render () {
    const { movietv } = this.props
    if (movietv.title) {
      return (
        <Link className='movie p-1 col-xl-1 col-lg-1 col-sm-3 col-4' to={`/movies/${movietv.id}`}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movietv.poster_path}`}
              alt='Movie poster'
              height='100%'
              width='100%'
              title={movietv.title}
            />
          </div>
        </Link>
      )
    } else {
      return (
        <Link className='movie p-1 col-xl-1 col-lg-1 col-sm-3 col-4' to={`/tvshows/${movietv.id}`}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movietv.poster_path}`}
              alt='Tv Show poster'
              height='100%'
              width='100%'
              title={movietv.name}
            />
          </div>
        </Link>
      )
    }
  }
}

MovietvItem.propTypes = {
  movietv: PropTypes.object.isRequired
}

export default MovietvItem

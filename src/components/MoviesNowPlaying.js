import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getNowPlayingMovies } from '../actions/movieActions'

class MoviesNowPlaying extends Component {
  componentDidMount () {
    this.props.getNowPlayingMovies()
  }

  render () {
    const { nowPlayingMovies } = this.props.movies
    let item
    if (nowPlayingMovies !== null) {
      item = nowPlayingMovies['results'].slice(0, 12).map(item => (
        <div key={item.id} className="col-lg-2">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            height='100%'
            width='100%'
            alt='img'
          />
        </div>
      ))
    }

    return (
      <div className='MoviesNowPlaying'>
        <div className='container'>
          <div className='row'>
            <div className='d-flex flex-wrap'>{item}</div>
          </div>
        </div>
      </div>
    )
  }
}

MoviesNowPlaying.propTypes = {
  getNowPlayingMovies: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  movies: state.movies
})
export default connect(
  mapStateToProps,
  { getNowPlayingMovies }
)(MoviesNowPlaying)

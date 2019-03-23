import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSingleMovie } from '../actions/movieActions'
import ReactPlayer from 'react-player'

class MovieDetails extends Component {
  componentDidMount () {
    this.props.getSingleMovie(this.props.match.params.id)
  }
  render () {
    const { movie } = this.props.movie
    return (
      <div className='MovieDetails'>
        {movie && (
          <div className='container pt-4 pb-4'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-3 col-md-4 col-sm-12 col-12'>
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${
                        movie.poster_path
                      }`}
                      height='100%'
                      width='100%'
                      alt=''
                      style={{ borderRadius: '5px' }}
                    />
                  ) : (
                    <p>Movie poster not available</p>
                  )}
                </div>

                <div className='col-lg-9 col-md-4 col-sm-12 col-12 pt-3'>
                  <h1>
                    <b>{movie.title}</b>
                  </h1>
                  <hr />
                  <p>{movie.overview}</p>
                  <hr />
                  <div>
                    {' '}
                    <span
                      style={{ borderRight: '1px solid black', padding: '4px' }}
                    >
                      Runtime:{' '}
                      <span className='text-danger'>{movie.runtime} min.</span>
                    </span>
                    <span
                      style={{ borderRight: '1px solid black', padding: '4px' }}
                    >
                      Rating:{' '}
                      <span className='text-danger'>{movie.vote_average}</span>
                    </span>
                    <span style={{ padding: '4px' }}>
                      {movie.genres.map(genre => (
                        <span key={genre.id} className='text-danger'>
                          {genre.name}{' '}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>

                <div className='col-lg-12 mt-3'>
                  {movie.videos['results'].length > 0 ? (
                    <ReactPlayer
                    width='100%'
                    height="580px"
                      url={`https://www.youtube.com/watch?v=${
                        movie.videos['results'][0].key
                      }`}
                    />
                  ) : (
                    <p>Trailer not available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

MovieDetails.propTypes = {
  getSingleMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  movie: state.movies
})
export default connect(
  mapStateToProps,
  { getSingleMovie }
)(MovieDetails)

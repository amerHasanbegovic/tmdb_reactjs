import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSingleTvShow } from '../actions/tvshowActions'
import ReactPlayer from 'react-player'

class TvShowDetails extends Component {
  componentDidMount () {
    this.props.getSingleTvShow(this.props.match.params.id)
  }
  render () {
    const { tvshow } = this.props.tvshow
    return (
      <div className='TvShowDetails'>
        {tvshow && (
          <div className='container pt-4 pb-4'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-3 col-md-4 col-sm-12 col-12'>
                  {tvshow.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${
                        tvshow.poster_path
                      }`}
                      height='100%'
                      width='100%'
                      alt=''
                      style={{ borderRadius: '5px' }}
                    />
                  ) : (
                    <p>Tv show poster not available</p>
                  )}
                </div>

                <div className='col-lg-9 col-md-8 col-sm-12 col-12 pt-3'>
                  <h1>
                    <b>{tvshow.name}</b>
                  </h1>
                  <hr />
                  <p>{tvshow.overview}</p>
                  <hr />
                  <div>
                    {' '}
                    <span
                      style={{ borderRight: '1px solid black', padding: '4px' }}
                    >
                      Status:{' '}
                      <span className='text-danger'>{tvshow.status}</span>
                    </span>
                    <span
                      style={{ borderRight: '1px solid black', padding: '4px' }}
                    >
                      Rating:{' '}
                      <span className='text-danger'>{tvshow.vote_average}</span>
                    </span>
                    <span style={{ padding: '4px' }}>
                      {tvshow.genres.map(genre => (
                        <span key={genre.id} className='text-danger'>
                          {genre.name}{' '}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>

                <div className='col-lg-12 mt-3'>
                  {tvshow.videos['results'].length > 0 ? (
                    <ReactPlayer
                    width='100%'
                    height='580px'
                      url={`https://www.youtube.com/watch?v=${
                        tvshow.videos['results'][0].key
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

TvShowDetails.propTypes = {
  getSingleTvShow: PropTypes.func.isRequired,
  tvshow: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  tvshow: state.tvshows
})
export default connect(
  mapStateToProps,
  { getSingleTvShow }
)(TvShowDetails)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTopRatedTvshows } from '../actions/tvshowActions'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'

class TvShowsTopRated extends Component {
  componentDidMount () {
    this.props.getTopRatedTvshows()
  }
  render () {
    const { topRatedTvshows, loading } = this.props.tvshows
    let top
    if (
      topRatedTvshows === null ||
      loading ||
      Object.keys(topRatedTvshows).length === 0
    ) {
      top = <Spinner />
    } else {
      top = topRatedTvshows['results'].slice(0, 12).map(item => (
        <Link to={`/tvshows/${item.id}`} style={{color: 'black', textDecorationStyle: 'none', textDecorationColor: 'red', textAlign: 'center'}} key={item.id} className='col-lg-2 col-md-4 col-sm-6'>
          <div className='p-2'>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              height='100%'
              width='100%'
              title="Click for more info"
              alt=""
              style={{ borderRadius: '5px' }}
            />{' '}
          </div>
          <div className='p-1'>
            <h5>{item.name}</h5>
          </div>
        </Link>
      ))
    }
    return (
      <div className='TvShowsTopRated'>
        <div className='container mt-3 p-1'>
          <h2 className='p-1 mb-3 text-center'>
            Some Of The Top Rated Tv Shows Of All Time
          </h2>
          <hr className='mb-3' />
          <div className='row'>{top}</div>
        </div>
      </div>
    )
  }
}

TvShowsTopRated.propTypes = {
  getTopRatedTvshows: PropTypes.func.isRequired,
  tvshows: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  tvshows: state.tvshows
})

export default connect(
  mapStateToProps,
  { getTopRatedTvshows }
)(TvShowsTopRated)

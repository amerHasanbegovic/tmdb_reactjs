import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPopularTvshows } from '../actions/tvshowActions'
import MovietvItem from './MovietvItem'
import TvShowsTopRated from './TvShowsTopRated'
import Spinner from './Spinner'

class Tvshows extends Component {
  componentDidMount () {
    this.props.getPopularTvshows()
  }

  render () {
    const { popularTvshows, loading } = this.props.tvshows
    let tv
    if (
      popularTvshows === null ||
      loading ||
      Object.keys(popularTvshows).length === 0
    ) {
      tv = <Spinner />
    } else {
      tv = popularTvshows['results']
        .slice(0, 12)
        .map(item => <MovietvItem movietv={item} key={item.id} />)
    }
    return (
      <div className='Movies'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='mt-3'>
              <h3>Popular TV Shows</h3>
            </div>
            <div className='row mt-2'>{tv}</div>
            <hr className='mt-3' />
          </div>
          <TvShowsTopRated />
        </div>
      </div>
    )
  }
}

Tvshows.propTypes = {
  getPopularTvshows: PropTypes.func.isRequired,
  tvshows: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  tvshows: state.tvshows
})

export default connect(
  mapStateToProps,
  { getPopularTvshows }
)(Tvshows)

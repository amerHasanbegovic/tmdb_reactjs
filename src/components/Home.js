import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getNowPlayingMovies } from '../actions/movieActions'
import { getOnTheAirTvshows } from '../actions/tvshowActions'
import HomeNowPlaying from './HomeNowPlaying'
import Spinner from './Spinner'

class Home extends Component {
  componentDidMount () {
    this.props.getNowPlayingMovies()
    this.props.getOnTheAirTvshows()
  }

  render () {
    const { nowPlayingMovies, loading } = this.props.movies
    const { onTheAirTvshows } = this.props.tvshows
    let movie, tvshow

    if (
      nowPlayingMovies === null ||
      loading ||
      Object.keys(nowPlayingMovies).length === 0
    ) {
      movie = <Spinner />
    } else {
      movie = nowPlayingMovies['results']
        .slice(0, 12)
        .map(item => <HomeNowPlaying movie={item} key={item.id} />)
    }

    if (
      onTheAirTvshows === null ||
      loading ||
      Object.keys(onTheAirTvshows).length === 0
    ) {
      tvshow = <Spinner />
    } else {
      tvshow = onTheAirTvshows['results']
        .slice(0, 12)
        .map(item => <HomeNowPlaying tvshow={item} key={item.id} />)
    }

    return (
      <div className='col-lg-12'>
        <div className='Home'>
          <div className='container mt-5'>
            <h1 className='text-center display-3'>We Have All The Movies</h1>
            <p className='lead text-center mt-3'>
              Feel free to explore and search for you favourite movies and tv
              shows. Also check for new and upcoming movies/tvshows on our page.
              Enjoy.
            </p>
            <div className='d-table mr-auto ml-auto mt-1'>
              <a
                href='https://www.themoviedb.org/'
                className='btn btn-secondary btn-lg'
                target='_blank'
                rel='noopener noreferrer'
                title='Visit The Movie Database for even more!'
              >
                TMDb
              </a>
            </div>
            <hr className='my-2 mt-5' />
          </div>
        </div>

        <div className='container mt-5 mb-5'>
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <h4>In Cinemas</h4>
              <div className='d-flex flex-row flex-xl-wrap flex-lg-wrap flex-md-wrap flex-sm-wrap mt-3'>
                {movie}
              </div>
              <div className='text-justify mt-1'>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </small>
              </div>
              <Link to='/movies' className='btn btn-secondary mt-3'>
                More info
              </Link>
            </div>
            <div className='col-md-6 mb-3'>
              <h4>On TV</h4>
              <div className='d-flex flex-row flex-xl-wrap flex-lg-wrap flex-md-wrap flex-sm-wrap mt-3'>
                {tvshow}
              </div>
              <div className='text-justify mt-1'>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </small>
              </div>
              <Link to='/tvshows' className='btn btn-secondary mt-3'>
                More info
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
Home.propTypes = {
  getNowPlayingMovies: PropTypes.func.isRequired,
  getOnTheAirTvshows: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  tvshows: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies,
  tvshows: state.tvshows
})
export default connect(
  mapStateToProps,
  { getNowPlayingMovies, getOnTheAirTvshows }
)(Home)

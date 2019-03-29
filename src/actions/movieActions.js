import axios from 'axios'
import {
  GET_SINGLE_MOVIE,
  GET_TOP_RATED_MOVIES,
  GET_POPULAR_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  MOVIE_LOADING,
  MOVIES_LOADING,
} from './types'

// loading
export const loadingMovies = () => {
  return {
    type: MOVIES_LOADING
  }
}
export const loadingMovie = () => {
  return {
    type: MOVIE_LOADING
  }
}

export const getTopRatedMovies = () => dispatch => {
  dispatch(loadingMovies())
  axios
    .get("https://api.themoviedb.org/3/movie/top_rated?api_key=300e528256846427957c1b1f398931b8&language=en-US")
    .then(res => dispatch({
      type: GET_TOP_RATED_MOVIES,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_TOP_RATED_MOVIES,
        data: null
      })
    )
}
export const getPopularMovies = () => dispatch => {
  dispatch(loadingMovies())
  axios
    .get("https://api.themoviedb.org/3/movie/popular?api_key=300e528256846427957c1b1f398931b8&language=en-US")
    .then(res => dispatch({
      type: GET_POPULAR_MOVIES,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_POPULAR_MOVIES,
        data: null
      })
    )
}
export const getNowPlayingMovies = () => dispatch => {
  dispatch(loadingMovies())
  axios
    .get("https://api.themoviedb.org/3/movie/now_playing?api_key=300e528256846427957c1b1f398931b8&language=en-US")
    .then(res => dispatch({
      type: GET_NOW_PLAYING_MOVIES,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_NOW_PLAYING_MOVIES,
        data: null
      })
    )
}

export const getSingleMovie = id => dispatch => {
  dispatch(loadingMovie())
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=300e528256846427957c1b1f398931b8&language=en-US&append_to_response=videos,details`)
    .then(res => dispatch({
      type: GET_SINGLE_MOVIE,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_SINGLE_MOVIE,
        data: null
      })
    )
}

import axios from 'axios'
import {
  GET_MOVIE,
  GET_MOVIES,
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

// get Movies
export const getLatestMovies = () => dispatch => {
  dispatch(loadingMovies())
  axios
    .get("https://api.themoviedb.org/3/movie/latest?api_key=300e528256846427957c1b1f398931b8&language=en-US")
    .then(res => dispatch({
      type: GET_MOVIES,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_MOVIES,
        data: null
      })
    )
}
export const getTopRatedtMovies = () => dispatch => {
  dispatch(loadingMovies())
  axios
    .get("https://api.themoviedb.org/3/movie/top_rated?api_key=300e528256846427957c1b1f398931b8&language=en-US")
    .then(res => dispatch({
      type: GET_MOVIES,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_MOVIES,
        data: null
      })
    )
}
export const getPopularMovies = () => dispatch => {
  dispatch(loadingMovies())
  axios
    .get("https://api.themoviedb.org/3/movie/popular?api_key=300e528256846427957c1b1f398931b8&language=en-US")
    .then(res => dispatch({
      type: GET_MOVIES,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_MOVIES,
        data: null
      })
    )
}
export const getUpcomingMovies = () => dispatch => {
  dispatch(loadingMovies())
  axios
    .get("https://api.themoviedb.org/3/movie/upcoming?api_key=300e528256846427957c1b1f398931b8&language=en-US")
    .then(res => dispatch({
      type: GET_MOVIES,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_MOVIES,
        data: null
      })
    )
}
export const getMovie = url => dispatch => {
  dispatch(loadingMovie())
  axios
    .get(url)
    .then(res => dispatch({
      type: GET_MOVIE,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_MOVIE,
        data: null
      })
    )
}

import axios from 'axios'
import {
  GET_MOVIE,
  GET_MOVIES,
  MOVIE_LOADING,
  MOVIES_LOADING,
  GET_ERRORS
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
export const getMovies = url => dispatch => {
  dispatch(loadingMovies())
  axios
    .get(url)
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

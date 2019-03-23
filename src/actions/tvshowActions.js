import axios from 'axios'
import {
  GET_TVSHOW,
  GET_LATEST_TVSHOWS,
  GET_TOP_RATED_TVSHOWS,
  GET_POPULAR_TVSHOWS,
  GET_ON_THE_AIR_TVSHOWS,
  TVSHOW_LOADING,
  TVSHOWS_LOADING,
} from './types'

// loading
export const loadingTvshows = () => {
  return {
    type: TVSHOWS_LOADING
  }
}
export const loadingTvshow = () => {
  return {
    type: TVSHOW_LOADING
  }
}

export const getLatestTvshows = () => dispatch => {
  dispatch(loadingTvshows())
  axios
    .get("https://api.themoviedb.org/3/tv/latest?api_key=300e528256846427957c1b1f398931b8&language=en-US")
    .then(res => dispatch({
      type: GET_LATEST_TVSHOWS,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_LATEST_TVSHOWS,
        data: null
      })
    )
}
export const getTopRatedTvshows = () => dispatch => {
  dispatch(loadingTvshows())
  axios
    .get("https://api.themoviedb.org/3/tv/top_rated?api_key=300e528256846427957c1b1f398931b8&language=en-US")
    .then(res => dispatch({
      type: GET_TOP_RATED_TVSHOWS,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_TOP_RATED_TVSHOWS,
        data: null
      })
    )
}
export const getPopularTvshows = () => dispatch => {
  dispatch(loadingTvshows())
  axios
    .get("https://api.themoviedb.org/3/tv/popular?api_key=300e528256846427957c1b1f398931b8&language=en-US")
    .then(res => dispatch({
      type: GET_POPULAR_TVSHOWS,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_POPULAR_TVSHOWS,
        data: null
      })
    )
}
export const getOnTheAirTvshows = () => dispatch => {
  dispatch(loadingTvshows())
  axios
    .get("https://api.themoviedb.org/3/tv/on_the_air?api_key=300e528256846427957c1b1f398931b8&language=en-US")
    .then(res => dispatch({
      type: GET_ON_THE_AIR_TVSHOWS,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_ON_THE_AIR_TVSHOWS,
        data: null
      })
    )
}
export const getSingleTvShow = id => dispatch => {
  dispatch(loadingTvshow())
  axios
    .get(`https://api.themoviedb.org/3/tv/${id}?api_key=300e528256846427957c1b1f398931b8&language=en-US&append_to_response=details,videos`)
    .then(res => dispatch({
      type: GET_TVSHOW,
      data: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_TVSHOW,
        data: null
      })
    )
}

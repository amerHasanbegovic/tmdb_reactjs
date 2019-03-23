import {
  GET_LATEST_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_POPULAR_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_SINGLE_MOVIE,
  MOVIE_LOADING,
  MOVIES_LOADING
} from '../actions/types'

const initialState = {
  movies: null,
  upcomingMovies: null,
  topRatedMovies: null,
  popularMovies: null,
  nowPlayingMovies: null,
  latestMovies: null,
  movie: null,
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case MOVIE_LOADING:
      return { ...state, loading: true }
    case MOVIES_LOADING:
      return { ...state, loading: true }
    case GET_UPCOMING_MOVIES:
      return { ...state, upcomingMovies: action.data, loading: false }
    case GET_TOP_RATED_MOVIES:
      return { ...state, topRatedMovies: action.data, loading: false }
    case GET_LATEST_MOVIES:
      return { ...state, latestMovies: action.data, loading: false }
    case GET_POPULAR_MOVIES:
      return { ...state, popularMovies: action.data, loading: false }
    case GET_NOW_PLAYING_MOVIES:
      return { ...state, nowPlayingMovies: action.data, loading: false }
    case GET_SINGLE_MOVIE:
      return { ...state, movie: action.data, loading: false }
    default:
      return state
  }
}

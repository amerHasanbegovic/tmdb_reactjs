import {
  GET_MOVIES,
  GET_MOVIE,
  MOVIE_LOADING,
  MOVIES_LOADING,
} from '../actions/types'

const initialState = {
  movies: [],
  movie: {},
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case MOVIE_LOADING:
      return { ...state, loading: true }
    case MOVIES_LOADING:
      return { ...state, loading: true }
    case GET_MOVIES:
      return { ...state, movies: action.data, loading: false }
    case GET_MOVIE:
      return { ...state, movie: action.data, loading: false }
    default:
      return state
  }
}

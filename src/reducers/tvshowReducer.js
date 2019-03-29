import {
  GET_SINGLE_TVSHOW,
  TVSHOW_LOADING,
  TVSHOWS_LOADING,
  GET_ON_THE_AIR_TVSHOWS,
  GET_POPULAR_TVSHOWS,
  GET_TOP_RATED_TVSHOWS
} from '../actions/types'

const initialState = {
  popularTvshows: null,
  topRatedTvshows: null,
  onTheAirTvshows: null,
  tvshow: null,
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TVSHOW_LOADING:
      return { ...state, loading: true }
    case TVSHOWS_LOADING:
      return { ...state, loading: true }
    case GET_POPULAR_TVSHOWS:
      return { ...state, popularTvshows: action.data, loading: false }
    case GET_TOP_RATED_TVSHOWS:
      return { ...state, topRatedTvshows: action.data, loading: false }
    case GET_ON_THE_AIR_TVSHOWS:
      return { ...state, onTheAirTvshows: action.data, loading: false }
    case GET_SINGLE_TVSHOW:
      return { ...state, tvshow: action.data, loading: false }
    default:
      return state
  }
}

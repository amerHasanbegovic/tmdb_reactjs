import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import tvshowReducer from './tvshowReducer'

export default combineReducers({
    movies: movieReducer,
    tvshows: tvshowReducer,
})
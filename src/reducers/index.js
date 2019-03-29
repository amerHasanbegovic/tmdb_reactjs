import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import tvshowReducer from './tvshowReducer'
import peopleReducer from './peopleReducer'

export default combineReducers({
    movies: movieReducer,
    tvshows: tvshowReducer,
    people: peopleReducer
})
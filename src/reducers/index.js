import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import errorReducer from './errorReducer'

export default combineReducers({
    movie: movieReducer,
    error: errorReducer
})
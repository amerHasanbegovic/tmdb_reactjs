import {
    GET_POPULAR_PEOPLE,
    PEOPLE_LOADING,
    SEARCHING_PEOPLE
  } from '../actions/types'
  
  const initialState = {
    popularPeople: null,
    searchResults: null,
    loading: false
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case PEOPLE_LOADING:
        return { ...state, loading: true }
      case GET_POPULAR_PEOPLE:
        return { ...state, popularPeople: action.data, loading: false }
      case SEARCHING_PEOPLE: 
        return {...state, searchResults: action.data, loading: false}
      default:
        return state
    }
  }
  
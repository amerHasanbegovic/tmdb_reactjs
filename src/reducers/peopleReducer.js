import {
    GET_POPULAR_PEOPLE,
    GET_SINGLE_PERSON,
    PERSON_LOADING,
    PEOPLE_LOADING,
    SEARCHING_PEOPLE
  } from '../actions/types'
  
  const initialState = {
    person: null,
    popularPeople: null,
    searchResults: null,
    loading: false
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case PERSON_LOADING:
        return { ...state, loading: true }
      case PEOPLE_LOADING:
        return { ...state, loading: true }
      case GET_POPULAR_PEOPLE:
        return { ...state, popularPeople: action.data, loading: false }
      case GET_SINGLE_PERSON:
        return { ...state, person: action.data, loading: false }
      case SEARCHING_PEOPLE: 
        return {...state, searchResults: action.data, loading: false}
      default:
        return state
    }
  }
  
import axios from 'axios'
import {
  GET_SINGLE_PERSON,
  GET_POPULAR_PEOPLE,
  PERSON_LOADING,
  PEOPLE_LOADING,
  SEARCHING_PEOPLE
} from './types'

// loading
export const loadingPeople = () => {
  return {
    type: PEOPLE_LOADING
  }
}
export const loadingPerson = () => {
  return {
    type: PERSON_LOADING
  }
}

// get popular people
export const getPopularPeople = pageNum => dispatch => {
  dispatch(loadingPeople())
  axios
    .get(
      `https://api.themoviedb.org/3/person/popular?api_key=300e528256846427957c1b1f398931b8&language=en-US&page=${pageNum}`
    )
    .then(res =>
      dispatch({
        type: GET_POPULAR_PEOPLE,
        data: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POPULAR_PEOPLE,
        data: null
      })
    )
}

// search people
export const searchPeople = query => dispatch => {
  dispatch(loadingPeople())
  axios
    .get(
      `https://api.themoviedb.org/3/search/person?api_key=300e528256846427957c1b1f398931b8&language=en-US&page=1&include_adult=false&query=${query}`
    )
    .then(res =>
      dispatch({
        type: SEARCHING_PEOPLE,
        data: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: SEARCHING_PEOPLE,
        data: null
      })
    )
}

export const getSinglePerson = id => dispatch => {
  dispatch(loadingPerson())
  axios
    .get(
      `https://api.themoviedb.org/3/person/${id}?api_key=300e528256846427957c1b1f398931b8&language=en-US`
    )
    .then(res =>
      dispatch({
        type: GET_SINGLE_PERSON,
        data: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SINGLE_PERSON,
        data: null
      })
    )
}

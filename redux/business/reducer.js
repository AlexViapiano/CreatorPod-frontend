import { actionTypes } from './action'

const initialState = {
  business: {},
  jobs: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RECEIVE_BUSINESS:
      return {
        ...state,
        business: action.payload.res,
      }
    case actionTypes.RECEIVE_CREATE_BUSINESS:
      return {
        ...state,
        business: action.payload.res,
      }
    case actionTypes.RECEIVE_UPDATE_BUSINESS:
      return {
        ...state,
        business: action.payload.res,
      }
    case actionTypes.RECEIVE_JOBS:
      return {
        ...state,
        jobs: action.payload.res,
      }
    default:
      return state
  }
}

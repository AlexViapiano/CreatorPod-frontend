import { API_URL, APP_URL } from '../api'
import axios from 'axios'

export const actionTypes = {
  REQUEST_BUSINESS: 'REQUEST_BUSINESS',
  RECEIVE_BUSINESS: 'RECEIVE_BUSINESS',
  REQUEST_CREATE_BUSINESS: 'REQUEST_CREATE_BUSINESS',
  RECEIVE_CREATE_BUSINESS: 'RECEIVE_CREATE_BUSINESS',
  REQUEST_UPDATE_BUSINESS: 'REQUEST_UPDATE_BUSINESS',
  RECEIVE_UPDATE_BUSINESS: 'RECEIVE_UPDATE_BUSINESS',
  REQUEST_JOBS: 'REQUEST_JOBS',
  RECEIVE_JOBS: 'RECEIVE_JOBS',
  REQUEST_POST_JOB: 'REQUEST_POST_JOB',
  RECEIVE_POST_JOB: 'RECEIVE_POST_JOB',
  REQUEST_DELETE_JOB: 'REQUEST_DELETE_JOB',
  RECEIVE_DELETE_JOB: 'RECEIVE_DELETE_JOB',
}

export const getBusiness = (businessId, userId) => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_BUSINESS })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    return fetch(`${API_URL}/businesses/${businessId}?user=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          dispatch({
            type: actionTypes.RECEIVE_BUSINESS,
            payload: { res },
          })
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const createBusiness = (userId, data) => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_CREATE_BUSINESS })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    return fetch(`${API_URL}/businesses?user=${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          dispatch({
            type: actionTypes.RECEIVE_CREATE_BUSINESS,
            payload: { res },
          })
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const updateBusiness = (businessId, data, userId) => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_UPDATE_BUSINESS })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    return fetch(`${API_URL}/businesses/${businessId}?user=${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          dispatch({
            type: actionTypes.RECEIVE_UPDATE_BUSINESS,
            payload: { res },
          })
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const getJobs = business_user => {
  var businessId = business_user
  if (business_user?.id) businessId = business_user.id
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_JOBS })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var bearerToken = 'Bearer ' + jwt
    return fetch(`${API_URL}/jobs?business=` + businessId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          dispatch({
            type: actionTypes.RECEIVE_JOBS,
            payload: { res },
          })
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const postJob = (name, category, description, businessUserId) => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_POST_JOB })
    var data = {
      name: name,
      category: category,
      description: description,
      business: businessUserId,
    }

    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt

    return fetch(`${API_URL}/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          dispatch({
            type: actionTypes.RECEIVE_POST_JOB,
            payload: { res },
          })
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const deleteJob = jobId => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_DELETE_JOB })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var bearerToken = 'Bearer ' + jwt
    return fetch(`${API_URL}/jobs/` + jobId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          dispatch({
            type: actionTypes.RECEIVE_DELETE_JOB,
            payload: { res },
          })
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

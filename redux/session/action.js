import { API_URL, APP_URL } from '../api'
import axios from 'axios'

export const actionTypes = {
  CHANGE_LOCALE: 'CHANGE_LOCALE',
  CHANGE_DELIVERY_COUNTRY: 'CHANGE_DELIVERY_COUNTRY',
  REQUEST_GET_USER: 'REQUEST_GET_USER',
  RECIEVE_GET_USER: 'RECIEVE_GET_USER',
  REQUEST_UPLOAD: 'REQUEST_UPLOAD',
  RECIEVE_UPLOAD: 'RECIEVE_UPLOAD',
  REQUEST_UPDATE_USER: 'REQUEST_UPDATE_USER',
  RECIEVE_UPDATE_USER: 'RECIEVE_UPDATE_USER',
  REQUEST_LOGIN: 'REQUEST_LOGIN',
  RECIEVE_LOGIN: 'RECIEVE_LOGIN',
  REQUEST_SIGNUP: 'REQUEST_SIGNUP',
  RECIEVE_SIGNUP: 'RECIEVE_SIGNUP',
  REQUEST_FORGOT_PASSWORD: 'REQUEST_FORGOT_PASSWORD',
  RECIEVE_FORGOT_PASSWORD: 'RECIEVE_FORGOT_PASSWORD',
  REQUEST_RESET_PASSWORD: 'REQUEST_RESET_PASSWORD',
  RECIEVE_RESET_PASSWORD: 'RECIEVE_RESET_PASSWORD',
  LOGOUT: 'LOGOUT',
  REQUEST_GET_STRIPE_CUSTOMER: 'REQUEST_GET_STRIPE_CUSTOMER',
  RECIEVE_GET_STRIPE_CUSTOMER: 'RECIEVE_GET_STRIPE_CUSTOMER',
  REQUEST_CREATE_STRIPE_CUSTOMER: 'REQUEST_CREATE_STRIPE_CUSTOMER',
  RECIEVE_CREATE_STRIPE_CUSTOMER: 'RECIEVE_CREATE_STRIPE_CUSTOMER',
  REQUEST_UPDATE_STRIPE_CUSTOMER: 'REQUEST_UPDATE_STRIPE_CUSTOMER',
  RECIEVE_UPDATE_STRIPE_CUSTOMER: 'RECIEVE_UPDATE_STRIPE_CUSTOMER',
  REQUEST_SUBSCRIPTIONS: 'REQUEST_SUBSCRIPTIONS',
  RECIEVE_SUBSCRIPTIONS: 'RECIEVE_SUBSCRIPTIONS',
  REQUEST_SUBSCRIBE: 'REQUEST_SUBSCRIBE',
  RECIEVE_SUBSCRIBE: 'RECIEVE_SUBSCRIBE',
  REQUEST_CREATE_CHECKOUT_SESSION: 'REQUEST_CREATE_CHECKOUT_SESSION',
  RECIEVE_CREATE_CHECKOUT_SESSION: 'RECIEVE_CREATE_CHECKOUT_SESSION',
  REQUEST_CREATE_BILLING_PORTAL_SESSION: 'REQUEST_CREATE_BILLING_PORTAL_SESSION',
  RECIEVE_CREATE_BILLING_PORTAL_SESSION: 'RECIEVE_CREATE_BILLING_PORTAL_SESSION',
  REQUEST_CUSTOMER_CARDS: 'REQUEST_CUSTOMER_CARDS',
  RECIEVE_CUSTOMER_CARDS: 'RECIEVE_CUSTOMER_CARDS',
  REQUEST_PAYMENT_METHODS: 'REQUEST_PAYMENT_METHODS',
  RECIEVE_PAYMENT_METHODS: 'RECIEVE_PAYMENT_METHODS',
  SET_POPUP_TRIGGERED: 'SET_POPUP_TRIGGERED',
  SET_UTM: 'SET_UTM',
  REQUEST_GENERATE_LEAD: 'REQUEST_GENERATE_LEAD',
  RECEIVE_GENERATE_LEAD: 'RECEIVE_GENERATE_LEAD',
}

export const changeLocale = newLocale => async (dispatch, getState) => {
  return dispatch({ type: actionTypes.CHANGE_LOCALE, payload: { locale: newLocale } })
}

export const changeCountry = (newCountry, updateCart) => async (dispatch, getState) => {
  const { session } = getState()
  const { country } = session
  if (country != newCountry) {
    localStorage.setItem('country', newCountry)
    dispatch({
      type: actionTypes.CHANGE_DELIVERY_COUNTRY,
      payload: { country: newCountry },
    })
  } else return
}

export const getUser = () => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_GET_USER })
    var localJwt = localStorage.getItem('jwt')
    if (localJwt == 'undefined') return
    var jwt = JSON.parse(localJwt)
    var token = 'Bearer ' + jwt

    return fetch(`${API_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          var res = { user: res, jwt: jwt }
          dispatch({
            type: actionTypes.RECIEVE_GET_USER,
            payload: { res },
          })
        }
        dispatch(getStripeCustomer(res.user.id))
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const getGoogleUser = access_token => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_LOGIN })
    return fetch(`${API_URL}/auth/google/callback?access_token=` + access_token, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          localStorage.setItem('jwt', JSON.stringify(res.jwt))
          dispatch({
            type: actionTypes.RECIEVE_LOGIN,
            payload: { res },
          })
          dispatch(getStripeCustomer(res.user.id))
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const uploadPicture = image => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_UPLOAD })

    const data = new FormData()
    data.append('files', image)

    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    return axios({
      method: 'POST',
      url: `${API_URL}/upload`,
      data,
      headers: {
        Authorization: token,
      },
    }).then(res => {
      dispatch({
        type: actionTypes.RECIEVE_UPLOAD,
      })
      return res
    })
  }
}

export const updateUser = (userId, data) => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_UPDATE_USER })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    return fetch(`${API_URL}/users?user=` + userId, {
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
          var res = { user: res }
          dispatch({
            type: actionTypes.RECIEVE_UPDATE_USER,
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

export const login = creds => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_LOGIN })
    var loginInfo = {
      identifier: creds.email,
      password: creds.password,
    }
    return fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginInfo),
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          localStorage.setItem('jwt', JSON.stringify(res.jwt))
          dispatch({
            type: actionTypes.RECIEVE_LOGIN,
            payload: { res },
          })
          dispatch(getStripeCustomer(res.user.id))
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const signup = creds => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_SIGNUP })
    var loginInfo = {
      username: creds.username,
      first_name: creds.first_name,
      last_name: creds.last_name,
      email: creds.email,
      password: creds.password,
      phone_number: creds.phone_number,
    }
    return fetch(`${API_URL}/auth/local/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginInfo),
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          localStorage.setItem('jwt', JSON.stringify(res.jwt))
          dispatch({
            type: actionTypes.RECIEVE_SIGNUP,
            payload: { res },
          })
          dispatch(createStripeCustomer(res.user.id))
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const forgotPassword = email => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_FORGOT_PASSWORD })
    var forgotPasswordRequirements = {
      email: email,
      url: 'http://localhost:3000/password-reset',
    }
    return fetch(`${API_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(forgotPasswordRequirements),
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          dispatch({
            type: actionTypes.RECIEVE_FORGOT_PASSWORD,
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

export const resetPassword = (code, newPassowrd, passwordConfirmation) => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_RESET_PASSWORD })
    var resetPasswordRequirements = {
      code: code,
      password: newPassowrd,
      passwordConfirmation: passwordConfirmation,
    }
    return fetch(`${API_URL}/auth/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resetPasswordRequirements),
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          localStorage.setItem('jwt', JSON.stringify(res.jwt))
          dispatch({
            type: actionTypes.RECIEVE_RESET_PASSWORD,
            payload: { res },
          })
          dispatch(getStripeCustomer(res.user.id))
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('jwt', '')
    dispatch({ type: actionTypes.LOGOUT })
    return
  }
}

export const getStripeCustomer = userId => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_GET_STRIPE_CUSTOMER })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    return fetch(`${API_URL}/users/stripeCustomer?user=` + userId, {
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
            type: actionTypes.RECIEVE_GET_STRIPE_CUSTOMER,
            payload: { res },
          })
          //dispatch(changeCountry(res.shipping.address.country))
          dispatch(getSubscriptions(userId))
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const createStripeCustomer = userId => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_CREATE_STRIPE_CUSTOMER })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    return fetch(`${API_URL}/users/stripeCustomer?user=` + userId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          dispatch({
            type: actionTypes.RECIEVE_CREATE_STRIPE_CUSTOMER,
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

export const updateStripeCustomer = (userId, data) => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_UPDATE_STRIPE_CUSTOMER })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    return fetch(`${API_URL}/users/stripeCustomer?user=` + userId, {
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
            type: actionTypes.RECIEVE_UPDATE_STRIPE_CUSTOMER,
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

export const getSubscriptions = userId => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_SUBSCRIPTIONS })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    return fetch(`${API_URL}/users/subscriptions?user=` + userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(res => {
        dispatch({
          type: actionTypes.RECIEVE_SUBSCRIPTIONS,
          payload: { res },
        })
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const updateSubscription = (userId, subscriptionId, metadata) => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_SUBSCRIPTIONS })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    return fetch(`${API_URL}/users/subscriptions/` + subscriptionId + `?user=${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(metadata),
    })
      .then(response => response.json())
      .then(res => {
        getSubscriptions(userId)
        // dispatch({
        //   type: actionTypes.RECIEVE_SUBSCRIPTIONS,
        //   payload: { res },
        // })
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const subscribe = (userId, price) => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_SUBSCRIBE })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    var data = {
      price: 'TEST',
    }
    return fetch(`${API_URL}/users/subscribe?user=` + userId, {
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
          dispatch({ type: actionTypes.RECIEVE_SUBSCRIBE })
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const createCheckoutSession = (userId, price, metadata, quantity, tax_rates) => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_CREATE_CHECKOUT_SESSION })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    var data = {
      return_url: `${APP_URL}/account/subscriptions`,
      cancel_url: `${APP_URL}/subscribe`,
      price: price,
      metadata: metadata,
      tax_rates: tax_rates,
      quantity: quantity,
    }
    return fetch(`${API_URL}/users/createCheckoutSession?user=` + userId, {
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
          dispatch({ type: actionTypes.RECIEVE_CREATE_CHECKOUT_SESSION })
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const createBillingPortalSession = userId => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_CREATE_BILLING_PORTAL_SESSION })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    var data = {
      return_url: `${APP_URL}/account/subscription`,
    }
    return fetch(`${API_URL}/users/billingPortal?user=` + userId, {
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
          dispatch({ type: actionTypes.RECIEVE_CREATE_BILLING_PORTAL_SESSION })
        }
        return res
      })
      .catch(err => {
        console.error('err', err)
        return err
      })
  }
}

export const getCustomerCards = userId => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_CUSTOMER_CARDS })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    return fetch(`${API_URL}/users/customerCards?user=` + userId, {
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
            type: actionTypes.RECIEVE_CUSTOMER_CARDS,
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

export const getPaymentMethods = userId => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_PAYMENT_METHODS })
    var jwt = JSON.parse(localStorage.getItem('jwt'))
    var token = 'Bearer ' + jwt
    return fetch(`${API_URL}/users/paymentMethods?user=` + userId, {
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
            type: actionTypes.RECIEVE_PAYMENT_METHODS,
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

export function setPopupTriggered() {
  return {
    type: actionTypes.SET_POPUP_TRIGGERED,
  }
}

export const setUTM = (utm_source, utm_medium, utm_campaign) => {
  return {
    type: actionTypes.SET_UTM,
    data: {
      utm_source,
      utm_medium,
      utm_campaign,
    },
  }
}

export const joinWaitlist = (endpoint, creds) => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_SIGNUP })
    var loginInfo = {
      firstname: creds.first_name,
      lastname: creds.last_name,
      email: creds.email,
      phone_number: creds.phone_number,
      company: creds.company,
      website: creds.website,
    }
    return fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginInfo),
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          dispatch({
            type: actionTypes.RECIEVE_SIGNUP,
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

export const generateLead = page => {
  return dispatch => {
    dispatch({ type: actionTypes.REQUEST_GENERATE_LEAD })
    var data = {
      Page: page,
    }
    return fetch(`${API_URL}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(res => {
        if (!res.error) {
          dispatch({
            type: actionTypes.RECEIVE_GENERATE_LEAD,
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

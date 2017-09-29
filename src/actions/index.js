import { existsAuth } from '../modules/auth'

export const fetchUser = params => dispatch => {
  dispatch(requestFetchUser())
  const body = JSON.stringify(params)
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    // mode: 'cors',
    body: body
  }
  fetch(`http://localhost:3000/auth/sign_in`, options).then(
    handleResponse
  ).then(
    prepareSignIn
  ).then(
    data => { dispatch(signIn(data)) }
  ).catch(
    error => {
      console.log('Fetch Error')
      console.log(error.message)
      dispatch(failedSignIn(error.message))
    }
  )
}

export const checkAuth = () => {
  return existsAuth() ? fetchingUser() : failFetchingUser()
}

export const clickSignOut = () => {
  localStorage.removeItem('uid')
  localStorage.removeItem('client')
  localStorage.removeItem('access-token')
  return {
    type: 'SIGN_OUT'
  }
}

const handleResponse = response => {
  console.log('HandleError')
  if (!response.ok) {
    return response.json().then(
      error => { throw Error(error.errors) }
    )
  } else {
    return response
  }
}

const prepareSignIn = response => {
  console.log('PrepareSignIn')
  console.log(response.headers.get('client'))
  localStorage.setItem('uid', response.headers.get('uid'))
  localStorage.setItem('client', response.headers.get('client'))
  localStorage.setItem('access-token', response.headers.get('access-token'))
  return response.json()
}

const requestFetchUser = () => ({
  type: 'REQUEST_FETCH_USER'
})

const signIn = payload => ({
  type: 'SIGN_IN',
  payload
})

const failedSignIn = message => ({
  type: 'FAILED_SIGN_IN',
  message
})

const fetchingUser = () => ({
  type: 'FETCHING_USER'
})

const failFetchingUser = () => ({
  type: 'FAIL_FETCHING_USER'
})

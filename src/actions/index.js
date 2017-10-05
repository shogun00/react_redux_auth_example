import { getClient, getUid, getAccessToken, existsAuth } from '../modules/auth'

export const fetchUser = params => dispatch => {
  dispatch(requestFetchUser())
  const body = JSON.stringify(params)
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
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
      dispatch(failedSignIn(error.message))
    }
  )
}

export const checkAuth = () => dispatch => {
  if (existsAuth()) {
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'client': getClient(),
        'uid': getUid(),
        'access-token': getAccessToken()
      }
    }
    fetch(`http://localhost:3000/api/v1/user`, options).then(
      res => {
        return res.json()
      }
    ).then(
      data => { dispatch(fetchingUser(data)) }
    ).catch(
      error => {
        console.log(error.message)
        failFetchingUser()
      }
    )
  } else {
    failFetchingUser()
  }
}

export const signOut = () => {
  localStorage.removeItem('uid')
  localStorage.removeItem('client')
  localStorage.removeItem('access-token')
  return {
    type: 'SIGN_OUT'
  }
}

const handleResponse = response => {
  if (!response.ok) {
    return response.json().then(
      error => { throw Error(error.errors) }
    )
  } else {
    return response
  }
}

const prepareSignIn = response => {
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

const fetchingUser = user => ({
  type: 'FETCHING_USER',
  user
})

const failFetchingUser = () => ({
  type: 'FAIL_FETCHING_USER'
})

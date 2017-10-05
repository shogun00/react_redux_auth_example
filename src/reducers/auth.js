const initialState = {
  auth: {
    isPrepared: false,
    isLoggedIn: false,
    user: {
      id: undefined,
      name: undefined,
      email: undefined
    },
    isFetching: false,
    error: undefined,
  }
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_FETCH_USER':
      console.log('request fetch user')
      return Object.assign({}, state, {
        auth: {
          isFetching: true,
          error: undefined
        }
      })
    case 'SIGN_IN':
      const data = action.payload.data
      return Object.assign({}, state, {
        auth: {
          isPrepared: true,
          isLoggedIn: true,
          user: {
            id: data.id,
            name: data.name,
            email: data.email
          },
          isFetching: false,
          error: undefined,
        }
      })
    case 'FAILED_SIGN_IN':
      return Object.assign({}, state, {
        auth: {
          isFetching: false,
          error: action.message
        }
      })
    case 'FETCHING_USER':
      return Object.assign({}, state, {
        auth: {
          isPrepared: true,
          isLoggedIn: true,
          user: {
            id: action.user.id,
            name: action.user.name,
            email: action.user.email
          },
          isFetching: false,
          error: undefined
        }
      })
    case 'FAIL_FETCHING_USER':
      return initialState
    case 'SIGN_OUT':
      return initialState
    default:
      return state
  }
}

export default auth

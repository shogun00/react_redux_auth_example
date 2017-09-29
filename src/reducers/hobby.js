const initialState = {
  hobbies: []
}

const hobby = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HOBBIES':
      return Object.assign({}, state, {
        hobbies: action.hobbies
      })
    default:
      return state
  }
}

export default hobby

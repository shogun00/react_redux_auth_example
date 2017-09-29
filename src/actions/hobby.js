import { getClient, getUid, getAccessToken } from '../modules/auth'

export const fetchHobbies = () => dispatch => {
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
  fetch(`http://localhost:3000/hobbies`, options).then(
    res => { return res.json() }
  ).then(
    data => { dispatch(getHobbies(data)) }
  ).catch(
    () => { console.log('fail fetch Hobbies')}
  )
}

const getHobbies = hobbies => ({
  type: 'GET_HOBBIES',
  hobbies
})

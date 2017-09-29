export const getClient = () => {
  return localStorage.getItem('client')
}

export const getUid = () => {
  return localStorage.getItem('uid')
}

export const getAccessToken = () => {
  return localStorage.getItem('access-token')
}

export const existsAuth = () => {
  return (getClient() && getUid() && getAccessToken())
}
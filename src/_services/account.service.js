import Axios from './caller.service'
let login = (credentials) => {
  return Axios.post('/auth/login', credentials)
}

let register = (credentials) => {
  return Axios.post('/auth/register', credentials)
}

let logout = () => {
  localStorage.removeItem('token')
}

let saveToken = (token, id) => {
  localStorage.setItem('token', token)
  localStorage.setItem('id', id)
}

let getId = () => {
  return parseInt(localStorage.getItem('id'), 10)
}

let getToken = () => {
  return localStorage.getItem('token')
}

let isLogged = () => {
  let token = localStorage.getItem('token')
  return !!token
}

export const accountService = {
  login,
  register,
  logout,
  saveToken,
  getToken,
  getId,
  isLogged
}

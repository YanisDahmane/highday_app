import Axios from './caller.service'

let getAll = () => {
  return Axios.get('/events').then(res => res.data)
}

let create = (event) => {
  return Axios.post('/events', event).then(res => res.data)
}

export const eventService = {
  getAll,
  create
}
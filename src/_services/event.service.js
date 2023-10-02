import Axios from './caller.service'

let getAll = (date = null) => {
  if (date) {
    return Axios.get(`/events?date=${date}`).then(res => res.data)
  } else {
    return Axios.get(`/events`).then(res => res.data)
  }
}

let create = (event) => {
  return Axios.post('/events', event).then(res => res.data)
}

export const eventService = {
  getAll,
  create
}
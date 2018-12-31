import api from './api/spotify'
import tokenService from './authentication'

const trackService = {}

api.before((config) => {
  const access_token = window.localStorage.access_token
  if (access_token) {
    config.headers['Authorization'] = `Bearer ${access_token}`
  }
  return config
})

const fullfillMiddleware = (res) => {
  const token = localStorage.refresh_token
  if (token) {
    tokenService.refresh_token(token).then(res => {
      window.localStorage.access_token = res.access_token
    })
  }
  return res
}

const rejectMiddleware = (err) => {
  window.localStorage.clear()
  return Promise.reject(err)
}

api.after(fullfillMiddleware, rejectMiddleware)

const finallyMiddleware = (config, url) => {
  console.log('The End')
}

api.finally(finallyMiddleware)

trackService.search = function (q, offset = 0) {
  const type = 'track'
  return api.get('/search', {
    params: { q, type, offset }
  }).then(res => res.data)
}

trackService.getById = (id) => {
  return api.get(`/tracks/${id}`).then(res => res.data)
}

trackService.getUserInfo = function (q, offset = 0) {
  return api.get('/me', {
  }).then(res => res.data)
}

export default trackService

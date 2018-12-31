import api from './api/adc-music'

const tokenService = {}

tokenService.authenticate = (code) => {
  return api.get(`/callback?code=${code}`)
    .then(res => res.data)
}

tokenService.refresh_token = (token) => {
  return api.get(`/refresh_token/${token}`)
    .then(res => res.data)
}

export default tokenService

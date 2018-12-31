import trae from 'trae'
import config from '../config'

const platziMusicApi = trae.create({
  baseUrl: config.platzi
})

export default platziMusicApi

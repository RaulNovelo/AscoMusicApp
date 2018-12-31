import trae from 'trae'
import config from '../config'

const adcMusicApi = trae.create({
  baseUrl: config.api
})

export default adcMusicApi

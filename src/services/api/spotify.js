import trae from 'trae'
import config from '../config'

const spotifyApi = trae.create({
  baseUrl: config.spotify
})

export default spotifyApi

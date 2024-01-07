import Configuration from '../configuration/Configuration'
import axios from 'axios'

const FISHES_API_BASE_URL = Configuration.BACKEND_API_BASE_URL + 'fishes'

class fishesApi {
  getFishes() {
    return axios.get(FISHES_API_BASE_URL)
  }
    
  deleteAllFishes() {
    return axios.delete(FISHES_API_BASE_URL)
  }
}

export default new fishesApi()

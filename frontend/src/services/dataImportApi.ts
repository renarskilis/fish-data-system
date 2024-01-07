import Configuration from '../configuration/Configuration'
import axios from 'axios'

const DATA_IMPORT_API_BASE_URL = Configuration.BACKEND_API_BASE_URL + 'importData'

class dataImportApi {
  importData() {
    return axios.get(DATA_IMPORT_API_BASE_URL)
  }
}

export default new dataImportApi()
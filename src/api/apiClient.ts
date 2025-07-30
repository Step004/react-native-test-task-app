import axios from 'axios'
import { API_URL } from '@env'

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
})

export { apiClient }

import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.52.197.122:3333',
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export { api }

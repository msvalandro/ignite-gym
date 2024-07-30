import { AppError } from '@utils/AppError'
import axios, { AxiosInstance } from 'axios'

type SignOut = () => void

interface APIInstanceProps extends AxiosInstance {
  registerInterceptTokenManager: (signOut: SignOut) => () => void
}

const api = axios.create({
  baseURL: 'http://10.52.197.122:3333',
}) as APIInstanceProps

api.registerInterceptTokenManager = (signOut) => {
  const interceptTokenManager = api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.message))
      }

      return Promise.reject(error)
    },
  )

  return () => {
    api.interceptors.response.eject(interceptTokenManager)
  }
}

export { api }

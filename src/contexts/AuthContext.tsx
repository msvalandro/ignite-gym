import { UserDTO } from '@dtos/UserDTO'
import { api } from '@services/api'
import { storageAuthTokenSave } from '@storage/storageAuthToken'
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from '@storage/storageUser'
import { createContext, PropsWithChildren, useEffect, useState } from 'react'

export interface AuthContextDataProps {
  user: UserDTO
  isLoadingUserStorageData: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

interface AuthContextProviderProps extends PropsWithChildren {}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true)

  async function storageUserAndToken(user: UserDTO, token: string) {
    try {
      setIsLoadingUserStorageData(true)

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      await storageUserSave(user)
      await storageAuthTokenSave(token)

      setUser(user)
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }

  async function signIn(email: string, password: string) {
    const { data } = await api.post('/sessions', { email, password })

    if (data.user && data.token) {
      await storageUserAndToken(data.user, data.token)
    }
  }

  async function signOut() {
    try {
      setIsLoadingUserStorageData(true)
      setUser({} as UserDTO)

      await storageUserRemove()
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }

  async function loadUserData() {
    try {
      const loggedUser = await storageUserGet()

      if (loggedUser) {
        setUser(loggedUser)
      }
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, isLoadingUserStorageData, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

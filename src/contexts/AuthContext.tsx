import { UserDTO } from '@dtos/UserDTO'
import { api } from '@services/api'
import { storageUserGet, storageUserSave } from '@storage/storageUser'
import { createContext, PropsWithChildren, useEffect, useState } from 'react'

export interface AuthContextDataProps {
  user: UserDTO
  signIn: (email: string, password: string) => Promise<void>
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

interface AuthContextProviderProps extends PropsWithChildren {}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  async function signIn(email: string, password: string) {
    const { data } = await api.post('/sessions', { email, password })

    if (data.user) {
      setUser(data.user)
      await storageUserSave(data.user)
    }
  }

  async function loadUserData() {
    const loggedUser = await storageUserGet()

    if (loggedUser) {
      setUser(loggedUser)
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

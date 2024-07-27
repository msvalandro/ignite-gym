import { UserDTO } from '@dtos/UserDTO'
import { createContext, PropsWithChildren, useState } from 'react'

export interface AuthContextDataProps {
  user: UserDTO
  signIn: (email: string, password: string) => void
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

interface AuthContextProviderProps extends PropsWithChildren {}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    id: '1',
    name: 'Matheus Valandro',
    email: 'msvalandro@proton.me',
    avatar: 'msvalandro.png',
  })

  function signIn(email: string, password: string) {
    setUser({ id: '', name: '', email, avatar: '' })
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

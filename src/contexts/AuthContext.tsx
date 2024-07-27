import { UserDTO } from '@dtos/UserDTO'
import { createContext, PropsWithChildren } from 'react'

export interface AuthContextDataProps {
  user: UserDTO
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

interface AuthContextProviderProps extends PropsWithChildren {}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: '1',
          name: 'Matheus Valandro',
          email: 'msvalandro@proton.me',
          avatar: 'msvalandro.png',
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

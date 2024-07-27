import { UserDTO } from '@dtos/UserDTO'
import { createContext } from 'react'

export interface AuthContextDataProps {
  user: UserDTO
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

import { createContext, ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

interface AuthContextType {
  user: string
  error: string
  register: (user: string) => Promise<void>
  login: ({ email: identifier, password }) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  error: null,
  register: async (user) => {
    console.log(user)
  },
  login: async ({ email: identifier, password }) => {
    console.log({ identifier, password })
  },
  logout: async () => {
    console.log('Logout')
  },
})

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  // Register user
  const register = async (user) => {
    console.log(user)
  }

  // Login user
  const login = async ({ email: identifier, password }) => {
    console.log({ identifier, password })
  }

  // Logout user
  const logout = async () => {
    console.log('Logout')
  }

  // Check if user is logged in
  // const checkUserLoggedIn = async (user) => {
  // console.log('Check')
  // }

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

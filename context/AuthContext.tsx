import { createContext, ReactNode, useState } from 'react'
import { NEXT_URL } from '@/config/index'

interface Props {
  children: ReactNode
}

interface AuthContextType {
  user: string
  error: string
  register: ({ user, email: identifier, password }) => Promise<void>
  login: ({ email: identifier, password }) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  error: null,
  register: async ({ user, email: identifier, password }) => {
    console.log({ user, identifier, password })
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
    // console.log({ identifier, password })
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    })

    const data = await res.json()

    console.log(data)

    if (res.ok) {
      setUser(data.user)
    } else {
      setError(data.message)
      setError(null)
    }
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
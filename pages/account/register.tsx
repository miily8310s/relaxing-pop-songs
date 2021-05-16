import { FaUserAlt } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { ChangeEvent, FormEvent, useContext, useState, useEffect } from 'react'
import Link from 'next/link'

import Layout from '@/components/Layout'
import { AuthContext } from '@/context/AuthContext'

import styles from '@/styles/AuthForm.module.scss'

export const RegisterPage = (): JSX.Element => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const { register, error } = useContext(AuthContext)

  useEffect(() => {
    const toastError = () => {
      error && toast.error(error)
    }
    toastError()
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      toast.error('Password do not match')
      return
    }

    register({ user, email, password })
  }

  return (
    <Layout title="User Registration">
      <div className={styles.auth}>
        <h1>
          <FaUserAlt /> Register
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className={styles.auth__bottom}>
            <label htmlFor="user">Username</label>
            <input
              type="text"
              id="user"
              value={user}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUser(e.target.value)
              }
            />
          </div>
          <div className={styles.auth__bottom}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className={styles.auth__bottom}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <div className={styles.auth__bottom}>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPasswordConfirm(e.target.value)
              }
            />
          </div>
          <input type="submit" value="Login" className="btn" />
        </form>
        <p>
          Already have an account? <Link href="/account/login">Login</Link>
        </p>
      </div>
    </Layout>
  )
}

export default RegisterPage

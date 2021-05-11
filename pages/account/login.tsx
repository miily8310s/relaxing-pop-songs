import { FaUserAlt } from 'react-icons/fa'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import Link from 'next/link'

import Layout from '@/components/Layout'
import { AuthContext } from '@/context/AuthContext'

import styles from '@/styles/AuthForm.module.scss'

export const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useContext(AuthContext)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <Layout title="User Login">
      <div className={styles.auth}>
        <h1>
          <FaUserAlt /> Login
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit} className={styles.form}>
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
          <input type="submit" value="Login" className="btn" />
        </form>
        <p>
          Don't you have an account?{' '}
          <Link href="/account/register">Register</Link>
        </p>
      </div>
    </Layout>
  )
}

export default LoginPage

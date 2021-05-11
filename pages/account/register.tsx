import { FaUserAlt } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Link from 'next/link'

import Layout from '@/components/Layout'

import styles from '@/styles/AuthForm.module.scss'

export const RegisterPage = (): JSX.Element => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      toast.error('Password do not match')
      return
    }

    console.log({ username, email, password })
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
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

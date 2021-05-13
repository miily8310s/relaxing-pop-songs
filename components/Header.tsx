import { FaSignInAlt } from 'react-icons/fa'
import { useContext } from 'react'
import Link from 'next/link'
import Search from '@/components/Search'
import {AuthContext} from '@/context/AuthContext'
import styles from '@/styles/Header.module.scss'

export const Header = (): JSX.Element => {
  const { user, logout } = useContext(AuthContext)
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Relaxing Songs</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Search />
          </li>
          <li>
            <Link href="/songs">Songs</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/songs/add">
                  <a>Add Song</a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
                >
                  <FaSignInAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon">
                    <FaSignInAlt /> Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header

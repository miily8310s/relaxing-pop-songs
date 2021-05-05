import Link from 'next/link'
import styles from '../../styles/Header.module.scss'

export const Header = (): JSX.Element => {
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
            <Link href="/songs">Songs</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

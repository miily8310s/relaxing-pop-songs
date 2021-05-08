import Link from 'next/link'
import Search from '@/components/Search'
import styles from '@/styles/Header.module.scss'

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
            <Search />
          </li>
          <li>
            <Link href="/songs">Songs</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

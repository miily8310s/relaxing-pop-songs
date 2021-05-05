import Link from 'next/link'
import styles from '../../styles/Footer.module.scss'

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <p>This is an app to find the relaxing pop songs...</p>
      <p>
        <Link href="/about">About This Project</Link>
      </p>
    </footer>
  )
}

export default Footer

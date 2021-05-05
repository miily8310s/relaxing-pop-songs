import { FaExclamation } from 'react-icons/fa'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.scss'

export const NotFoundPage = (): JSX.Element => {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamation /> 404
        </h1>
        <h3>There is bad problem...</h3>
        <Link href="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage

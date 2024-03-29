import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import styles from '@/styles/Layout.module.scss'

interface LayoutProps {
  title?: string
  keywords?: string
  description?: string
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  title = 'Relaxing Pop Songs | Find the relaxing songs',
  keywords = 'music, pop, alternative, relaxing, song',
  description = 'Find the relaxing Songs',
  children,
}: LayoutProps) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout

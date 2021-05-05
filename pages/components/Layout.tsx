import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '../../styles/Layout.module.scss'

interface LayoutProps {
  title: string
  keywords: string
  description: string
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps & Layout.defaultProps> = ({
  title,
  keywords,
  description,
  children,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'Relaxing Pop Songs | Find the relaxing songs',
  description: 'Find the relaxing Songs',
  keywords: 'music, pop, alternative, relaxing, song',
}

export default Layout

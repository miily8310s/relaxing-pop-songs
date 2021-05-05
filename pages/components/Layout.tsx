import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

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
      <div>{children}</div>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm, events',
}

export default Layout

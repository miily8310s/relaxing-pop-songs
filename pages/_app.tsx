import { AppProps } from 'next/app'
import { AuthProvider } from '@/context/AuthContext'
import '../styles/globals.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />{' '}
    </AuthProvider>
  )
}

export default MyApp

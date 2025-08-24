import type { AppProps } from 'next/app'
import '../styles/globals.css'
import EnhancedLayout from '../components/layout/EnhancedLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EnhancedLayout>
      <Component {...pageProps} />
    </EnhancedLayout>
  )
}

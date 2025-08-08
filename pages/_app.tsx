import type { AppProps } from 'next/app'
import EnhancedLayout from '../components/layout/EnhancedLayout'
import { UserProvider } from '../providers/UserProvider'
import { ToastProvider } from '../components/ui/ToastProvider'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ToastProvider>
        <EnhancedLayout>
          <Component {...pageProps} />
        </EnhancedLayout>
      </ToastProvider>
    </UserProvider>
  )
}

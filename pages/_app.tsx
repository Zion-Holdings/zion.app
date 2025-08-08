import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

const ChatbotWidget = dynamic(() => import('../components/ui/ChatbotWidget'), { ssr: false })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ChatbotWidget />
    </>
  )
}

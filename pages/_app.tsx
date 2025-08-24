import type { AppProps } from 'next/app'
import '../styles/globals.css'
import AnimatedBackground from '../components/AnimatedBackground'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatedBackground />
      <Component {...pageProps} />
    </>
  )
}
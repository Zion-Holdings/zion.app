import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zion Tech Group - Pioneering the Future of Technology',
  description: 'Cutting-edge solutions, quantum computing, and AI-driven innovation for tomorrow\'s challenges.',
  keywords: 'technology, AI, quantum computing, innovation, Zion Tech Group, blockchain, Web3, artificial intelligence',
  authors: [{ name: 'Zion Tech Group' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - Pioneering the Future of Technology',
    description: 'Cutting-edge solutions, quantum computing, and AI-driven innovation for tomorrow\'s challenges.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Pioneering the Future of Technology',
    description: 'Cutting-edge solutions, quantum computing, and AI-driven innovation for tomorrow\'s challenges.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
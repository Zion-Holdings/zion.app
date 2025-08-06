import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col">
      <Head>
        <title>Zion • Technology & Innovation Partner</title>
        <meta
          name="description"
          content="Zion is your full–stack technology partner. Discover our services, read insights, and explore how we can super-charge your digital transformation."
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
            >
              Zion
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <Link href="/services" className="hover:text-purple-300">
                Services
              </Link>
              <Link href="/blog" className="hover:text-purple-300">
                Blog
              </Link>
              <Link href="/about" className="hover:text-purple-300">
                About
              </Link>
              <Link href="/contact" className="hover:text-purple-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col justify-center items-center text-center px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Building the Future
          </span>{' '}
          of Digital Experiences
        </h1>
        <p className="max-w-2xl text-gray-300 mb-10 text-lg md:text-xl">
          We craft scalable, delightful software solutions using cutting-edge technologies – from AI & Blockchain
          to Cloud & Mobile. Partner with Zion to transform your ideas into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/services"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Explore Services
          </Link>
          <Link
            href="/blog"
            className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Read Insights
          </Link>
        </div>
      </header>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Zion. All rights reserved.
      </footer>
    </div>
  )
}

export default HomePage


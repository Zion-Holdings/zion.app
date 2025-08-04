import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import PageLayout from '../components/layout/PageLayout'

const Https___ziontechgroup_netlify_app_aboutPage: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about our company, mission, and values" />
        <meta name="keywords" content="https://ziontechgroup.netlify.app/about, Zion, AI marketplace" />
      </Head>

      {/* Main Content */}
      <main className="flex-1">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
          
          <div className="section-padding-lg">
            <div className="text-center">
              <div className="mb-8">
                <h1 className="text-responsive-4xl font-bold text-white mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    About Us - Zion Tech Group
                  </span>
                </h1>
                <p className="text-responsive-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Learn about our company, mission, and values
                </p>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-responsive-base font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover-responsive touch-target">
                  Explore Marketplace
                </Link>
                <Link href="/auth/signup" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-responsive-base font-semibold transition-all duration-300 hover-responsive touch-target">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}

export default Https___ziontechgroup_netlify_app_aboutPage
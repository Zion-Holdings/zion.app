import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bolt.new Zion App</title>
        <meta name="description" content="Bolt.new Zion Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Bolt.new Zion App
          </h1>
          <p className="text-lg text-gray-600">
            Your application is running successfully!
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home 
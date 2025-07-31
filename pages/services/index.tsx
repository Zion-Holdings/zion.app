
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Services: NextPage = () => {
  const categories = [
  {
    "id": "ai-development",
    "name": "AI Development",
    "description": "Custom AI solutions and machine learning applications",
    "services": [
      "Machine Learning Models",
      "Deep Learning Systems",
      "Natural Language Processing",
      "Computer Vision",
      "AI Integration",
      "Custom AI Solutions"
    ]
  },
  {
    "id": "cloud-services",
    "name": "Cloud Services",
    "description": "Cloud infrastructure and platform solutions",
    "services": [
      "AWS Setup & Configuration",
      "Azure Cloud Services",
      "Google Cloud Platform",
      "Cloud Migration",
      "DevOps Automation",
      "Serverless Architecture"
    ]
  },
  {
    "id": "blockchain",
    "name": "Blockchain Solutions",
    "description": "Decentralized applications and smart contracts",
    "services": [
      "Smart Contract Development",
      "DApp Development",
      "DeFi Integration",
      "NFT Marketplaces",
      "Blockchain Consulting",
      "Security Audits"
    ]
  },
  {
    "id": "data-analytics",
    "name": "Data Analytics",
    "description": "Data processing and business intelligence",
    "services": [
      "Data Pipeline Development",
      "Business Intelligence",
      "Predictive Analytics",
      "Data Visualization",
      "ETL Processes",
      "Big Data Solutions"
    ]
  }
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Services - Zion</title>
        <meta name="description" content="Comprehensive IT services, AI development, cloud solutions, and blockchain technology" />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Marketplace
              </Link>
              <Link href="/services" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions powered by cutting-edge technology and expert teams
          </p>
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">{category.name}</h3>
              <p className="text-gray-300 mb-6">{category.description}</p>
              <div className="space-y-2">
                {category.services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
              <Link href={`/services/${category.id}`} className="mt-6 inline-block text-purple-400 hover:text-purple-300">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services

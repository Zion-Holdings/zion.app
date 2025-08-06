import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const ProductsPage: NextPage = () => {
  const products = [
    {
      id: 'ai-platform',
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced machine learning platform for business intelligence and predictive analytics',
      features: ['Real-time data processing', 'Predictive modeling', 'Custom dashboards', 'API integration'],
      category: 'AI & Analytics'
    },
    {
      id: 'cloud-suite',
      title: 'Enterprise Cloud Suite',
      description: 'Comprehensive cloud infrastructure and management solution for enterprises',
      features: ['Multi-cloud management', 'Auto-scaling', 'Security compliance', 'Cost optimization'],
      category: 'Cloud Infrastructure'
    },
    {
      id: 'mobile-platform',
      title: 'Cross-Platform Mobile Platform',
      description: 'Native mobile development platform for iOS and Android applications',
      features: ['Cross-platform development', 'Native performance', 'Offline capabilities', 'Push notifications'],
      category: 'Mobile Development'
    },
    {
      id: 'security-suite',
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solution for enterprise threat detection and prevention',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      category: 'Security'
    },
    {
      id: 'data-platform',
      title: 'Data Pipeline Platform',
      description: 'End-to-end data engineering and analytics platform for big data processing',
      features: ['ETL/ELT processing', 'Real-time streaming', 'Data warehousing', 'Business intelligence'],
      category: 'Data Engineering'
    },
    {
      id: 'devops-platform',
      title: 'DevOps Automation Platform',
      description: 'Complete CI/CD and infrastructure automation platform for modern development teams',
      features: ['Automated deployments', 'Infrastructure as code', 'Monitoring & alerting', 'Team collaboration'],
      category: 'DevOps'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Head>
        <title>Products • Zion Technology</title>
        <meta
          name="description"
          content="Discover Zion's comprehensive product suite - from AI platforms to cloud infrastructure solutions designed for enterprise success."
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
              <Link href="/products" className="text-purple-300">
                Products
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
      <header className="text-center px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Enterprise
          </span>{' '}
          Product Suite
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 mb-10 text-lg md:text-xl">
          Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
        </p>
      </header>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">
                  {product.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{product.title}</h3>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`/products/${product.id}`}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors duration-200"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our product suite can accelerate your digital transformation and drive measurable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Zion. All rights reserved.
      </footer>
    </div>
  )
}

export default ProductsPage

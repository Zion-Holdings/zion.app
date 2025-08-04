import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Sitemap: NextPage = () => {
  const sitemapData = {
    main: [
      { name: 'Home', href: '/', description: 'Zion homepage and main landing page' },
      { name: 'About', href: '/about', description: 'Learn about Zion and our mission' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with our team' },
      { name: 'Privacy Policy', href: '/privacy-policy', description: 'Our privacy policy and data protection' },
      { name: 'Terms of Service', href: '/terms-of-service', description: 'Platform terms and conditions' }
    ],
    marketplace: [
      { name: 'Marketplace', href: '/marketplace', description: 'Main marketplace hub' },
      { name: 'Services', href: '/services', description: 'Browse IT and AI services' },
      { name: 'Talents', href: '/talents', description: 'Find AI and tech talent' },
      { name: 'Equipment', href: '/equipment', description: 'High-performance computing equipment' },
      { name: 'Products', href: '/products', description: 'Innovation and technology products' },
      { name: 'Service Categories', href: '/service-categories', description: 'Organized service categories' },
      { name: 'Marketplace Pricing', href: '/marketplace-pricing', description: 'Pricing and commission structure' }
    ],
    aiServices: [
      { name: 'AI Service Matcher', href: '/ai-service-matcher', description: 'AI-powered service matching' },
      { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', description: 'Intelligent AI-powered recommendations' },
      { name: 'AI Portfolio Builder', href: '/ai-portfolio-builder', description: 'AI-powered portfolio generation' },
      { name: 'AI Contract Generator', href: '/ai-contract-generator', description: 'AI-powered contract generation' },
      { name: 'AI Invoice Generator', href: '/ai-invoice-generator', description: 'AI-powered invoice generation' },
      { name: 'AI Virtual Assistant', href: '/ai-virtual-assistant', description: 'AI assistant and chatbot' },
      { name: 'AI Project Management', href: '/ai-project-management', description: 'AI-powered project management' },
      { name: 'AI Analytics Dashboard', href: '/analytics-dashboard', description: 'Business intelligence and analytics' },
      { name: 'AI Data Analytics', href: '/ai-powered-data-analytics', description: 'Advanced data analytics' },
      { name: 'AI Predictive Analytics', href: '/ai-powered-predictive-analytics-machine-learning', description: 'Predictive analytics and ML' }
    ],
    advancedFeatures: [
      { name: 'Advanced Search', href: '/advanced-search', description: 'Advanced search and filtering' },
      { name: 'Real-time Chat', href: '/real-time-chat', description: 'Live communication system' },
      { name: 'Notifications', href: '/notifications', description: 'Smart notification system' },
      { name: 'Inbox', href: '/inbox', description: 'Unified messaging center' },
      { name: 'User Profiles', href: '/user-profiles', description: 'User profile management' },
      { name: 'Review System', href: '/review-system', description: 'Reviews and ratings' }
    ],
    businessTools: [
      { name: 'Executive Dashboard', href: '/executive-dashboard', description: 'C-level executive insights' },
      { name: 'Analytics', href: '/analytics', description: 'Business analytics and reporting' },
      { name: 'Webhook Management', href: '/webhook-management', description: 'API and webhook management' },
      { name: 'Workflow Designer', href: '/workflow-designer', description: 'Visual workflow builder' },
      { name: 'Data Warehouse ETL', href: '/data-warehouse-etl', description: 'Data integration platform' },
      { name: 'Help Desk Support', href: '/help-desk-support', description: 'Customer support system' }
    ],
    security: [
      { name: 'Compliance & Governance', href: '/compliance-governance', description: 'Regulatory compliance' },
      { name: 'Escrow Services', href: '/escrow-services', description: 'Secure transaction protection' },
      { name: 'Warranty Protection', href: '/warranty-protection', description: 'Extended warranty coverage' },
      { name: 'Dispute Resolution', href: '/dispute-resolution', description: 'Conflict resolution system' },
      { name: 'Payment Processing', href: '/payment-processing', description: 'Secure payment handling' },
      { name: 'Invoice & Billing', href: '/invoice-billing', description: 'Professional billing system' }
    ],
    specialized: [
      { name: 'Investor Matchmaking', href: '/investor-matchmaking', description: 'Startup-investor matching' },
      { name: 'Skill Verification', href: '/skill-verification', description: 'Professional skill assessment' },
      { name: 'Multi-language Support', href: '/multi-language', description: 'Global language support' },
      { name: 'Mobile Responsive', href: '/mobile-responsive', description: 'Mobile optimization' },
      { name: 'SEO Optimization', href: '/seo-optimization', description: 'Search engine optimization' },
      { name: 'Referral & Affiliate', href: '/referral-affiliate', description: 'Referral program' }
    ],
    aiPowered: [
      { name: 'AI Autonomous Vehicles', href: '/ai-autonomous-vehicle-transportation', description: 'Autonomous transportation' },
      { name: 'AI Smart City', href: '/ai-smart-city-management', description: 'Smart city solutions' },
      { name: 'AI Immersive Marketplace', href: '/ai-immersive-marketplace', description: 'VR/AR marketplace' },
      { name: 'AI Quantum Computing', href: '/ai-powered-quantum-computing', description: 'Quantum computing solutions' },
      { name: 'AI Blockchain', href: '/ai-powered-blockchain', description: 'Blockchain integration' },
      { name: 'AI Cybersecurity', href: '/ai-powered-security-cybersecurity', description: 'AI security solutions' }
    ],
    blog: [
      { name: 'Blog', href: '/blog', description: 'Latest insights and articles' },
      { name: '5G Networks', href: '/blog/5g-networks-and-iot-integration', description: '5G and IoT integration' },
      { name: 'AI Marketplaces', href: '/blog/ai-powered-marketplaces-the-future-of-digital-commerce', description: 'Future of digital commerce' },
      { name: 'Cybersecurity Trends', href: '/blog/cybersecurity-trends-for-2024-and-beyond', description: 'Security trends 2024' },
      { name: 'Machine Learning', href: '/blog/machine-learning-applications-in-enterprise-software', description: 'ML in enterprise' },
      { name: 'Edge Computing', href: '/blog/the-rise-of-edge-computing-in-iot-applications', description: 'Edge computing trends' }
    ],
    auth: [
      { name: 'Login', href: '/auth/login', description: 'User login page' },
      { name: 'Sign Up', href: '/auth/signup', description: 'User registration' },
      { name: 'Forgot Password', href: '/auth/forgot-password', description: 'Password recovery' },
      { name: 'Reset Password', href: '/auth/reset-password', description: 'Password reset' },
      { name: 'Email Verification', href: '/auth/verify', description: 'Email verification' }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Sitemap - Zion</title>
        <meta name="description" content="Complete sitemap of Zion's AI-powered marketplace - Find all pages and sections easily." />
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
            <div className="flex items-center space-x-6">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Marketplace
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Sitemap</h1>
          <p className="text-xl text-gray-300">
            Complete overview of all pages and sections on Zion's AI-powered marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Main Pages</h2>
            <div className="space-y-3">
              {sitemapData.main.map((item, index) => (
                <Link key={index} href={item.href} className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="text-white font-medium">{item.name}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Marketplace */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Marketplace</h2>
            <div className="space-y-3">
              {sitemapData.marketplace.map((item, index) => (
                <Link key={index} href={item.href} className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="text-white font-medium">{item.name}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">AI Services</h2>
            <div className="space-y-3">
              {sitemapData.aiServices.map((item, index) => (
                <Link key={index} href={item.href} className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="text-white font-medium">{item.name}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Advanced Features */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Advanced Features</h2>
            <div className="space-y-3">
              {sitemapData.advancedFeatures.map((item, index) => (
                <Link key={index} href={item.href} className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="text-white font-medium">{item.name}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Business Tools */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Business Tools</h2>
            <div className="space-y-3">
              {sitemapData.businessTools.map((item, index) => (
                <Link key={index} href={item.href} className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="text-white font-medium">{item.name}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Security & Compliance</h2>
            <div className="space-y-3">
              {sitemapData.security.map((item, index) => (
                <Link key={index} href={item.href} className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="text-white font-medium">{item.name}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Specialized Services */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Specialized Services</h2>
            <div className="space-y-3">
              {sitemapData.specialized.map((item, index) => (
                <Link key={index} href={item.href} className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="text-white font-medium">{item.name}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* AI-Powered Solutions */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">AI-Powered Solutions</h2>
            <div className="space-y-3">
              {sitemapData.aiPowered.map((item, index) => (
                <Link key={index} href={item.href} className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="text-white font-medium">{item.name}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Blog & Content */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Blog & Content</h2>
            <div className="space-y-3">
              {sitemapData.blog.map((item, index) => (
                <Link key={index} href={item.href} className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="text-white font-medium">{item.name}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Authentication */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Authentication</h2>
            <div className="space-y-3">
              {sitemapData.auth.map((item, index) => (
                <Link key={index} href={item.href} className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="text-white font-medium">{item.name}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-4">Platform Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-gray-300">Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">20+</div>
              <div className="text-gray-300">AI Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">10+</div>
              <div className="text-gray-300">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">100%</div>
              <div className="text-gray-300">Secure</div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sitemap 
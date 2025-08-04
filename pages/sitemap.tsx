import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Sitemap: NextPage = () => {
  const sitemapData = {
    main: [
      { name: 'Home', href: '/', description: 'Zion homepage and main landing page' },
      { name: 'About', href: '/about', description: 'Learn about Zion and our mission' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with our team' },
      { name: 'Privacy Policy', href: '/privacy-policy', description: 'Our privacy policy and data protection' },
      { name: 'Terms of Service', href: '/terms-of-service', description: 'Platform terms and conditions' },
      { name: 'Accessibility', href: '/accessibility', description: 'Accessibility information and features' }
    ],
    marketplace: [
      { name: 'Marketplace', href: '/marketplace', description: 'Main marketplace hub' },
      { name: 'Services', href: '/services', description: 'Browse IT and AI services' },
      { name: 'Talents', href: '/talents', description: 'Find AI and tech talent' },
      { name: 'Equipment', href: '/equipment', description: 'High-performance computing equipment' },
      { name: 'Products', href: '/products', description: 'Innovation and technology products' },
      { name: 'Service Categories', href: '/service-categories', description: 'Organized service categories' },
      { name: 'Talent Directory', href: '/talent-directory', description: 'Comprehensive talent directory' },
      { name: 'Marketplace Pricing', href: '/marketplace-pricing', description: 'Pricing and commission structure' }
    ],
    aiServices: [
      { name: 'AI Service Matcher', href: '/ai-service-matcher', description: 'AI-powered service matching' },
      { name: 'AI Analytics', href: '/ai-powered-analytics', description: 'Advanced AI analytics platform' },
      { name: 'AI Automation', href: '/ai-powered-automation', description: 'Intelligent automation solutions' },
      { name: 'Data Analytics', href: '/ai-powered-data-analytics', description: 'Predictive analytics and ML' },
      { name: 'Cybersecurity', href: '/ai-powered-security-cybersecurity', description: 'AI-powered security solutions' },
      { name: 'Education & Training', href: '/ai-powered-education-training', description: 'AI-enhanced learning' },
      { name: 'Legal & Contracts', href: '/ai-powered-contract-legal', description: 'AI contract generation' },
      { name: 'Customer Support', href: '/ai-powered-customer-support', description: 'AI customer service' },
      { name: 'Identity Verification', href: '/ai-powered-identity-verification', description: 'Biometric authentication' },
      { name: 'AI Testing', href: '/ai-powered-testing', description: 'Automated testing solutions' },
      { name: 'AI HR Management', href: '/ai-powered-hr-management', description: 'Talent acquisition and employee management' },
      { name: 'AI Vendor Management', href: '/ai-powered-vendor-management', description: 'Vendor relationship and performance management' },
      { name: 'AI Facility Management', href: '/ai-powered-facility-management', description: 'Facility operations and maintenance management' },
      { name: 'AI Change Management', href: '/ai-powered-change-management', description: 'Organizational change and transformation management' }
    ],
    businessTools: [
      { name: 'Executive Dashboard', href: '/executive-dashboard', description: 'C-level executive insights' },
      { name: 'Analytics Dashboard', href: '/analytics-dashboard', description: 'Business analytics and reporting' },
      { name: 'Project Management', href: '/project-management', description: 'Project management tools' },
      { name: 'AI Project Management', href: '/ai-project-management', description: 'AI-enhanced project management' },
      { name: 'Webhook Management', href: '/webhook-management', description: 'API and webhook management' },
      { name: 'Workflow Designer', href: '/workflow-designer', description: 'Visual workflow builder' },
      { name: 'Data Warehouse ETL', href: '/data-warehouse-etl', description: 'Data integration platform' },
      { name: 'Help Desk Support', href: '/help-desk-support', description: 'Customer support system' },
      { name: 'Advanced Search', href: '/advanced-search', description: 'Advanced search and filtering' }
    ],
    security: [
      { name: 'Compliance & Governance', href: '/compliance-governance', description: 'Regulatory compliance' },
      { name: 'Escrow Services', href: '/escrow-services', description: 'Secure transaction protection' },
      { name: 'Warranty Protection', href: '/warranty-protection', description: 'Extended warranty coverage' },
      { name: 'Dispute Resolution', href: '/dispute-resolution', description: 'Conflict resolution system' },
      { name: 'Payment Processing', href: '/payment-processing', description: 'Secure payment handling' },
      { name: 'Invoice & Billing', href: '/invoice-billing', description: 'Professional billing system' },
      { name: 'Skill Verification', href: '/skill-verification', description: 'Talent skill verification' }
    ],
    communication: [
      { name: 'Inbox', href: '/inbox', description: 'Unified messaging center' },
      { name: 'Real-time Chat', href: '/real-time-chat', description: 'Live communication system' },
      { name: 'Notifications', href: '/notifications', description: 'Smart notification system' },
      { name: 'Referral System', href: '/referral-affiliate', description: 'Referral and affiliate program' },
      { name: 'Multi-language', href: '/multi-language', description: 'Multi-language support' }
    ],
    immersive: [
      { name: 'Immersive Marketplace', href: '/ai-immersive-marketplace', description: 'VR/AR marketplace experience' },
      { name: 'Mixed Reality', href: '/ai-powered-mixed-reality-spatial-computing', description: 'Spatial computing solutions' },
      { name: 'Augmented Reality', href: '/ai-powered-augmented-reality', description: 'AR applications and tools' },
      { name: 'Team Collaboration', href: '/ai-powered-collaboration-team', description: 'AI-enhanced team collaboration' }
    ],
    transportation: [
      { name: 'Autonomous Vehicles', href: '/ai-powered-autonomous-vehicle-transportation', description: 'Self-driving vehicle solutions' },
      { name: 'Drone Delivery', href: '/ai-powered-autonomous-drone-delivery-logistics', description: 'Drone logistics and delivery' },
      { name: 'Supply Chain', href: '/ai-powered-inventory-supply-chain', description: 'Inventory and supply chain management' },
      { name: 'Pricing Estimation', href: '/ai-powered-pricing-estimation', description: 'AI-powered pricing tools' }
    ],
    legal: [
      { name: 'Contract Generator', href: '/ai-contract-generator', description: 'AI contract generation' },
      { name: 'Invoice Generator', href: '/ai-invoice-generator', description: 'Automated invoice creation' },
      { name: 'Biometric Authentication', href: '/ai-powered-biometric-authentication', description: 'Secure biometric systems' },
      { name: 'Quantum Cryptography', href: '/ai-powered-quantum-cryptography-secure-communication', description: 'Quantum security solutions' }
    ],
    quantum: [
      { name: 'Quantum Computing', href: '/ai-powered-quantum-computing', description: 'Quantum computing solutions' },
      { name: 'Quantum Machine Learning', href: '/ai-powered-quantum-machine-learning-neural-networks', description: 'Quantum ML algorithms' },
      { name: 'Quantum Teleportation', href: '/ai-powered-quantum-entanglement-teleportation', description: 'Quantum communication' }
    ],
    specialized: [
      { name: 'Space Exploration', href: '/ai-powered-space-exploration-satellite-management', description: 'Satellite and space tech' },
      { name: 'Underwater Exploration', href: '/ai-powered-underwater-exploration-marine-research', description: 'Marine research and exploration' },
      { name: 'Climate Change', href: '/ai-powered-climate-change-environmental-sustainability', description: 'Environmental sustainability' },
      { name: 'Precision Agriculture', href: '/ai-powered-precision-agriculture-smart-farming', description: 'Smart farming solutions' },
      { name: 'Healthcare', href: '/ai-powered-healthcare-medical-diagnostics', description: 'Medical AI diagnostics' },
      { name: 'Energy Management', href: '/ai-powered-energy-management-renewable-energy', description: 'Renewable energy solutions' },
      { name: 'Manufacturing', href: '/ai-powered-manufacturing-industrial-automation', description: 'Industrial automation' },
      { name: 'Finance & Banking', href: '/ai-powered-finance-banking', description: 'Financial technology solutions' },
      { name: 'Retail & E-commerce', href: '/ai-powered-retail-ecommerce', description: 'Retail technology' },
      { name: 'Entertainment & Gaming', href: '/ai-powered-entertainment-gaming', description: 'Gaming and entertainment' },
      { name: 'Social Media', href: '/ai-powered-social-media-community', description: 'Social media solutions' },
      { name: 'Smart Infrastructure', href: '/ai-powered-urban-development-smart-infrastructure', description: 'Urban development tech' }
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
      { name: 'User Profiles', href: '/user-profiles', description: 'User profile management' },
      { name: 'Review System', href: '/review-system', description: 'Reviews and ratings' }
    ],
    resources: [
      { name: 'Investor Matchmaking', href: '/investor-matchmaking', description: 'Connect with investors' },
      { name: 'AI Portfolio Builder', href: '/ai-portfolio-builder', description: 'Build AI portfolios' },
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-dashboard', description: 'Business intelligence tools' }
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
          <h1 className="text-4xl font-bold text-white mb-4">
            Complete Sitemap
          </h1>
          <p className="text-xl text-gray-300">
            Find all pages and features of Zion's AI-powered marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.entries(sitemapData).map(([category, pages]) => (
            <div key={category} className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-purple-400 mb-4 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h2>
              <ul className="space-y-3">
                {pages.map((page) => (
                  <li key={page.href}>
                    <Link 
                      href={page.href} 
                      className="text-gray-300 hover:text-white transition-colors block group"
                    >
                      <div className="font-medium group-hover:text-purple-400 transition-colors">
                        {page.name}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {page.description}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/marketplace" className="text-gray-300 hover:text-white transition-colors text-center p-3 bg-black/20 rounded-lg hover:bg-black/40">
              Marketplace
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-center p-3 bg-black/20 rounded-lg hover:bg-black/40">
              Services
            </Link>
            <Link href="/talents" className="text-gray-300 hover:text-white transition-colors text-center p-3 bg-black/20 rounded-lg hover:bg-black/40">
              Talents
            </Link>
            <Link href="/equipment" className="text-gray-300 hover:text-white transition-colors text-center p-3 bg-black/20 rounded-lg hover:bg-black/40">
              Equipment
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-white transition-colors text-center p-3 bg-black/20 rounded-lg hover:bg-black/40">
              Products
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-center p-3 bg-black/20 rounded-lg hover:bg-black/40">
              Blog
            </Link>
            <Link href="/auth/login" className="text-gray-300 hover:text-white transition-colors text-center p-3 bg-black/20 rounded-lg hover:bg-black/40">
              Login
            </Link>
            <Link href="/auth/signup" className="text-gray-300 hover:text-white transition-colors text-center p-3 bg-black/20 rounded-lg hover:bg-black/40">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sitemap
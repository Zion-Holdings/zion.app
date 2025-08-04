import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              The First Free AI-Powered Marketplace connecting businesses with cutting-edge technology solutions, talent, and equipment.
            </p>
            <div className="flex space-x-4">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Marketplace & Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Marketplace</h4>
            <ul className="space-y-2">
              <li><Link href="/marketplace" className="text-gray-400 hover:text-white transition-colors">Main Marketplace</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link href="/talents" className="text-gray-400 hover:text-white transition-colors">AI Talents</Link></li>
              <li><Link href="/equipment" className="text-gray-400 hover:text-white transition-colors">Equipment</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/service-categories" className="text-gray-400 hover:text-white transition-colors">Service Categories</Link></li>
              <li><Link href="/talent-directory" className="text-gray-400 hover:text-white transition-colors">Talent Directory</Link></li>
              <li><Link href="/ai-service-matcher" className="text-gray-400 hover:text-white transition-colors">AI Service Matcher</Link></li>
            </ul>
          </div>

          {/* AI-Powered Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">AI Services</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-powered-analytics" className="text-gray-400 hover:text-white transition-colors">AI Analytics</Link></li>
              <li><Link href="/ai-powered-automation" className="text-gray-400 hover:text-white transition-colors">AI Automation</Link></li>
              <li><Link href="/ai-powered-data-analytics" className="text-gray-400 hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link href="/ai-powered-security-cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link href="/ai-powered-education-training" className="text-gray-400 hover:text-white transition-colors">Education & Training</Link></li>
              <li><Link href="/ai-powered-contract-legal" className="text-gray-400 hover:text-white transition-colors">Legal & Contracts</Link></li>
              <li><Link href="/ai-powered-customer-support" className="text-gray-400 hover:text-white transition-colors">Customer Support</Link></li>
              <li><Link href="/ai-powered-identity-verification" className="text-gray-400 hover:text-white transition-colors">Identity Verification</Link></li>
            </ul>
          </div>

          {/* Business Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Business Tools</h4>
            <ul className="space-y-2">
              <li><Link href="/executive-dashboard" className="text-gray-400 hover:text-white transition-colors">Executive Dashboard</Link></li>
              <li><Link href="/analytics-dashboard" className="text-gray-400 hover:text-white transition-colors">Analytics Dashboard</Link></li>
              <li><Link href="/project-management" className="text-gray-400 hover:text-white transition-colors">Project Management</Link></li>
              <li><Link href="/ai-project-management" className="text-gray-400 hover:text-white transition-colors">AI Project Management</Link></li>
              <li><Link href="/webhook-management" className="text-gray-400 hover:text-white transition-colors">Webhook Management</Link></li>
              <li><Link href="/workflow-designer" className="text-gray-400 hover:text-white transition-colors">Workflow Designer</Link></li>
              <li><Link href="/data-warehouse-etl" className="text-gray-400 hover:text-white transition-colors">Data Warehouse ETL</Link></li>
              <li><Link href="/help-desk-support" className="text-gray-400 hover:text-white transition-colors">Help Desk Support</Link></li>
            </ul>
          </div>

          {/* Security & Payments */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Security & Payments</h4>
            <ul className="space-y-2">
              <li><Link href="/escrow-services" className="text-gray-400 hover:text-white transition-colors">Escrow Services</Link></li>
              <li><Link href="/warranty-protection" className="text-gray-400 hover:text-white transition-colors">Warranty Protection</Link></li>
              <li><Link href="/payment-processing" className="text-gray-400 hover:text-white transition-colors">Payment Processing</Link></li>
              <li><Link href="/invoice-billing" className="text-gray-400 hover:text-white transition-colors">Invoice & Billing</Link></li>
              <li><Link href="/dispute-resolution" className="text-gray-400 hover:text-white transition-colors">Dispute Resolution</Link></li>
              <li><Link href="/compliance-governance" className="text-gray-400 hover:text-white transition-colors">Compliance & Governance</Link></li>
              <li><Link href="/skill-verification" className="text-gray-400 hover:text-white transition-colors">Skill Verification</Link></li>
              <li><Link href="/marketplace-pricing" className="text-gray-400 hover:text-white transition-colors">Marketplace Pricing</Link></li>
            </ul>
          </div>

          {/* Communication & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Communication</h4>
            <ul className="space-y-2">
              <li><Link href="/inbox" className="text-gray-400 hover:text-white transition-colors">Inbox</Link></li>
              <li><Link href="/real-time-chat" className="text-gray-400 hover:text-white transition-colors">Real-time Chat</Link></li>
              <li><Link href="/notifications" className="text-gray-400 hover:text-white transition-colors">Notifications</Link></li>
              <li><Link href="/advanced-search" className="text-gray-400 hover:text-white transition-colors">Advanced Search</Link></li>
              <li><Link href="/referral-affiliate" className="text-gray-400 hover:text-white transition-colors">Referral System</Link></li>
              <li><Link href="/ai-powered-testing" className="text-gray-400 hover:text-white transition-colors">AI Testing</Link></li>
              <li><Link href="/multi-language" className="text-gray-400 hover:text-white transition-colors">Multi-language</Link></li>
            </ul>
          </div>

          {/* Immersive & VR */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Immersive & VR</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-immersive-marketplace" className="text-gray-400 hover:text-white transition-colors">Immersive Marketplace</Link></li>
              <li><Link href="/ai-powered-mixed-reality-spatial-computing" className="text-gray-400 hover:text-white transition-colors">Mixed Reality</Link></li>
              <li><Link href="/ai-powered-augmented-reality" className="text-gray-400 hover:text-white transition-colors">Augmented Reality</Link></li>
              <li><Link href="/ai-powered-collaboration-team" className="text-gray-400 hover:text-white transition-colors">Team Collaboration</Link></li>
            </ul>
          </div>

          {/* Transportation & Logistics */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Transportation</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-powered-autonomous-vehicle-transportation" className="text-gray-400 hover:text-white transition-colors">Autonomous Vehicles</Link></li>
              <li><Link href="/ai-powered-autonomous-drone-delivery-logistics" className="text-gray-400 hover:text-white transition-colors">Drone Delivery</Link></li>
              <li><Link href="/ai-powered-inventory-supply-chain" className="text-gray-400 hover:text-white transition-colors">Supply Chain</Link></li>
              <li><Link href="/ai-powered-pricing-estimation" className="text-gray-400 hover:text-white transition-colors">Pricing Estimation</Link></li>
            </ul>
          </div>

          {/* Legal & Contracts */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Legal & Contracts</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-contract-generator" className="text-gray-400 hover:text-white transition-colors">Contract Generator</Link></li>
              <li><Link href="/ai-invoice-generator" className="text-gray-400 hover:text-white transition-colors">Invoice Generator</Link></li>
              <li><Link href="/ai-powered-biometric-authentication" className="text-gray-400 hover:text-white transition-colors">Biometric Auth</Link></li>
              <li><Link href="/ai-powered-quantum-cryptography-secure-communication" className="text-gray-400 hover:text-white transition-colors">Quantum Cryptography</Link></li>
            </ul>
          </div>

          {/* Specialized AI */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Specialized AI</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-powered-quantum-computing" className="text-gray-400 hover:text-white transition-colors">Quantum Computing</Link></li>
              <li><Link href="/ai-powered-quantum-machine-learning-neural-networks" className="text-gray-400 hover:text-white transition-colors">Quantum ML</Link></li>
              <li><Link href="/ai-powered-quantum-entanglement-teleportation" className="text-gray-400 hover:text-white transition-colors">Quantum Teleportation</Link></li>
              <li><Link href="/ai-powered-space-exploration-satellite-management" className="text-gray-400 hover:text-white transition-colors">Space Exploration</Link></li>
              <li><Link href="/ai-powered-underwater-exploration-marine-research" className="text-gray-400 hover:text-white transition-colors">Underwater Exploration</Link></li>
              <li><Link href="/ai-powered-climate-change-environmental-sustainability" className="text-gray-400 hover:text-white transition-colors">Climate Change</Link></li>
              <li><Link href="/ai-powered-precision-agriculture-smart-farming" className="text-gray-400 hover:text-white transition-colors">Precision Agriculture</Link></li>
              <li><Link href="/ai-powered-healthcare-medical-diagnostics" className="text-gray-400 hover:text-white transition-colors">Healthcare</Link></li>
            </ul>
          </div>

          {/* Industry Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Industry Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-powered-energy-management-renewable-energy" className="text-gray-400 hover:text-white transition-colors">Energy Management</Link></li>
              <li><Link href="/ai-powered-manufacturing-industrial-automation" className="text-gray-400 hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link href="/ai-powered-finance-banking" className="text-gray-400 hover:text-white transition-colors">Finance & Banking</Link></li>
              <li><Link href="/ai-powered-retail-ecommerce" className="text-gray-400 hover:text-white transition-colors">Retail & E-commerce</Link></li>
              <li><Link href="/ai-powered-entertainment-gaming" className="text-gray-400 hover:text-white transition-colors">Entertainment & Gaming</Link></li>
              <li><Link href="/ai-powered-social-media-community" className="text-gray-400 hover:text-white transition-colors">Social Media</Link></li>
              <li><Link href="/ai-powered-urban-development-smart-infrastructure" className="text-gray-400 hover:text-white transition-colors">Smart Infrastructure</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">Accessibility</Link></li>
              <li><Link href="/investor-matchmaking" className="text-gray-400 hover:text-white transition-colors">Investor Matchmaking</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Account</h4>
            <ul className="space-y-2">
              <li><Link href="/auth/login" className="text-gray-400 hover:text-white transition-colors">Login</Link></li>
              <li><Link href="/auth/signup" className="text-gray-400 hover:text-white transition-colors">Sign Up</Link></li>
              <li><Link href="/auth/forgot-password" className="text-gray-400 hover:text-white transition-colors">Forgot Password</Link></li>
              <li><Link href="/user-profiles" className="text-gray-400 hover:text-white transition-colors">User Profiles</Link></li>
              <li><Link href="/review-system" className="text-gray-400 hover:text-white transition-colors">Review System</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              &copy; 2024 Zion. All rights reserved. | The First Free AI-Powered Marketplace
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
              Accessibility
            </Link>
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="Back to top"
            >
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
    </footer>
  )
}

export default Footer 
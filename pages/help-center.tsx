import type { NextPage }  from 'next';
import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Home, Search, User }  from 'lucide-react';

const HelpCenter: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState('general')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'general', name: 'General', icon: '🏠' },
    { id: 'marketplace', name: 'Marketplace', icon: '🛒' },
    { id: 'services', name: 'Services', icon: '🔧' },
    { id: 'account', name: 'Account', icon: '👤' },
    { id: 'billing', name: 'Billing', icon: '💳' },
    { id: 'technical', name: 'Technical', icon: '⚙️' }
  ]

  const faqs = {
    general: [
      {
        question: "What is Zion?",
        answer: "Zion is the first free AI-powered marketplace for high-tech products, on-demand IT services, AI talents, innovation, and equipment. We connect businesses with cutting-edge technology solutions and expert professionals."
      },
      {
        question: "How do I get started on Zion?",
        answer: "Getting started is easy! Simply create an account, browse our marketplace for services, products, or talents, and connect with providers. You can also list your own services or products to start earning."
      },
      {
        question: "Is Zion really free to use?",
        answer: "Yes! Zion is completely free to use. We believe in democratizing access to technology and innovation. There are no hidden fees or subscription costs for basic marketplace access."
      }
    ],
    marketplace: [
      {
        question: "How do I find the right service or product?",
        answer: "Use our advanced search filters to narrow down by category, location, price range, and ratings. You can also browse by categories like AI services, IT consulting, equipment, or products."
      },
      {
        question: "How do I contact a service provider?",
        answer: "Once you find a service or product you're interested in, click on the listing to view details and use the contact form or messaging system to reach out directly to the provider."
      },
      {
        question: "What if I'm not satisfied with a service?",
        answer: "We have a comprehensive review and rating system. If you're not satisfied, please contact our support team and we'll help resolve the issue according to our service guarantee policies."
      }
    ],
    services: [
      {
        question: "What types of services are available?",
        answer: "We offer a wide range of services including AI development, IT consulting, cybersecurity, cloud solutions, data analytics, web development, mobile apps, and much more. New categories are added regularly."
      },
      {
        question: "How do I list my services on Zion?",
        answer: "Create an account, complete your profile, and use our service listing form to describe your offerings, set pricing, and upload relevant documentation or portfolios."
      },
      {
        question: "How are service providers verified?",
        answer: "We have a thorough verification process including identity verification, skill assessments, portfolio reviews, and background checks to ensure quality and reliability."
      }
    ],
    account: [
      {
        question: "How do I create an account?",
        answer: "Click the 'Sign Up' button in the top navigation, fill in your details, verify your email, and you'll be ready to start using Zion's marketplace."
      },
      {
        question: "How do I update my profile?",
        answer: "Go to your dashboard, click on 'Profile Settings', and you can update your personal information, business details, skills, and portfolio."
      },
      {
        question: "How do I reset my password?",
        answer: "Click 'Login' then 'Forgot Password', enter your email address, and follow the instructions sent to your email to reset your password."
      }
    ],
    billing: [
      {
        question: "How does payment work?",
        answer: "Zion uses secure payment processing. Payments are held in escrow until service completion, ensuring both parties are protected. We support major credit cards and digital wallets."
      },
      {
        question: "Are there any transaction fees?",
        answer: "Zion is free to use, but there may be small processing fees for payments, similar to other marketplace platforms. These fees are clearly displayed before any transaction."
      },
      {
        question: "How do I get a refund?",
        answer: "Refund requests are handled through our support system. Contact us with your order details and reason for the refund, and we'll process it according to our refund policy."
      }
    ],
    technical: [
      {
        question: "What browsers are supported?",
        answer: "Zion works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience."
      },
      {
        question: "How do I report a technical issue?",
        answer: "Use our contact form or email support@ziontechgroup.com with details about the issue, including your browser, device, and steps to reproduce the problem."
      },
      {
        question: "Is my data secure?",
        answer: "Yes, we use industry-standard encryption and security measures to protect your personal and business data. We never share your information with third parties without consent."
      }
    ]
  }

  const filteredFAQs = faqs[activeCategory as keyof typeof faqs] || []

  return (
    <div>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>Help Center - Zion</title>
        <meta name="description" content="Get help and support for using Zion's AI-powered marketplace. Find answers to frequently asked questions and tutorials." />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8"">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/marketplace" className="text-gray-300 hover text-white transition-colors">
                Marketplace
              </Link>
              <Link href="/about" className="text-gray-300 hover text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover text-white transition-colors">
                Contact
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover text-white transition-colors">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-4 py-4 rounded-lg transition-all duration-200">
                Join Zion Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-32">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md text-5xl font-bold text-white mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Find answers to your questions and learn how to make the most of Zion's AI-powered marketplace
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent backdrop-blur-sm"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3" lg grid-cols-6 gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="font-medium">{category.name}</div>
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-white mb-2">Contact Support</h3>
            <p className="text-gray-300 mb-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Link href="/contact" className="text-purple-400 hover text-purple-300 font-medium">
              Get in touch →
            </Link>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-white mb-2">Documentation</h3>
            <p className="text-gray-300 mb-4">
              Detailed guides and tutorials for using Zion's features effectively.
            </p>
            <Link href="/blog" className="text-purple-400 hover text-purple-300 font-medium">
              Read guides →
            </Link>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
            <p className="text-gray-300 mb-4">
              Connect with other users and share tips in our community forum.
            </p>
            <Link href="/marketplace" className="text-purple-400 hover text-purple-300 font-medium">
              Join community →
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Zion. All rights reserved. | The First Free AI-Powered Marketplace</p>
          </div>
        </div>
      </footer>
    
        {/* Mobile Navigation */}
        <div className="lg hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50">
          <div className="flex justify-around items-center py-2">
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white">
              <Home className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white">
              <Search className="w-5 h-5" />
              <span className="text-xs">Search</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white">
              <User className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </div>
  
  </div>

  </div>

  </div>
)
};

export default HelpCenter 
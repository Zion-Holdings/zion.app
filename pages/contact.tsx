import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from 'lucide-react'

const Contact: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Contact Zion - Get in Touch with Our Team</title>
        <meta name="description" content="Contact Zion's team for support, partnerships, or any questions about our AI-powered marketplace." />
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
              <Link href="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about Zion? Need support? Want to partner with us? We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Bug Report</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">support@ziontechgroup.com</p>
                    <p className="text-gray-300">partnerships@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">Available 24/7 for urgent support</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Website</h3>
                    <p className="text-gray-300">https://ziontechgroup.netlify.app</p>
                    <p className="text-gray-300">Live chat available on our platform</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Support Hours</h3>
                    <p className="text-gray-300">24/7 Technical Support</p>
                    <p className="text-gray-300">Business Hours: Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Support */}
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Support</h2>
              <div className="space-y-4">
                <Link href="/help-desk-support" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span>Help Desk & Support Center</span>
                </Link>
                <Link href="/real-time-chat" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span>Live Chat Support</span>
                </Link>
                <Link href="/notifications" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span>Notification Center</span>
                </Link>
                <Link href="/sitemap" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span>Site Map</span>
                </Link>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-gray-300 mb-4">
                Check out our comprehensive help center for answers to common questions.
              </p>
              <Link href="/help-desk-support" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-block">
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 text-center">
              <MessageSquare className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
              <p className="text-gray-300 mb-4">
                Get instant help with our 24/7 live chat support system.
              </p>
              <Link href="/real-time-chat" className="text-purple-400 hover:text-purple-300 transition-colors">
                Start Chat →
              </Link>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 text-center">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Email Support</h3>
              <p className="text-gray-300 mb-4">
                Send us a detailed message and we'll respond within 24 hours.
              </p>
              <a href="mailto:support@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                Send Email →
              </a>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 text-center">
              <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Phone Support</h3>
              <p className="text-gray-300 mb-4">
                Call us directly for urgent issues or complex technical support.
              </p>
              <a href="tel:+15551234567" className="text-purple-400 hover:text-purple-300 transition-colors">
                Call Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
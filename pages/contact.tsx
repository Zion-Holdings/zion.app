import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Mail, Phone, MapPin, ArrowRight, MessageSquare, 
  Clock, Globe, Building, Users, Award, Shield
} from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Zion Tech Group | Get in Touch for Technology Solutions</title>
        <meta name="description" content="Contact Zion Tech Group for revolutionary quantum AI solutions, autonomous systems, and cutting-edge technology platforms. Get expert consultation today." />
        <meta name="keywords" content="contact Zion Tech Group, technology consultation, AI solutions, quantum computing, autonomous systems" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors">
                    Zion Tech Group
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                  <Link href="/zion-tech-group" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>
                  <Link href="/contact" className="text-purple-300 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with revolutionary technology? Our team of experts is here to help you navigate the future.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Send us a Message
              </h2>
              
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your first name"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Technology Consultation</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="other">Other</option>
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Multiple Ways to Connect
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the method that works best for you. Our team is available through various channels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
                <p className="text-gray-300 mb-4">
                  Send us a detailed message and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:info@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-medium">
                  info@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
                <p className="text-gray-300 mb-4">
                  Speak directly with our technology experts for immediate assistance.
                </p>
                <a href="tel:+1-800-ZION-TECH" className="text-purple-400 hover:text-purple-300 font-medium">
                  +1 (800) ZION-TECH
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
                <p className="text-gray-300 mb-4">
                  Schedule an in-person meeting at our headquarters or satellite offices.
                </p>
                <p className="text-purple-400 font-medium">
                  Global Headquarters<br />
                  Innovation District
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Global Presence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We operate worldwide to serve our global client base with local expertise and global reach.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-purple-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">North America</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Headquarters and primary research facilities<br />
                  <strong>Address:</strong> Innovation District, Tech Valley<br />
                  <strong>Phone:</strong> +1 (800) ZION-TECH
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-purple-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Europe</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  European innovation center<br />
                  <strong>Address:</strong> Tech Hub, Innovation Quarter<br />
                  <strong>Phone:</strong> +44 (0) 20 ZION-TECH
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-purple-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Asia Pacific</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  APAC regional headquarters<br />
                  <strong>Address:</strong> Innovation Tower, Tech City<br />
                  <strong>Phone:</strong> +65 ZION-TECH
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Zion Tech Group can transform your business with revolutionary technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/zion-tech-group" className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                Learn About Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/" className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/40 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-gray-300">
                  Leading the future of technology with revolutionary quantum AI and autonomous systems.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Quantum AI Systems</li>
                  <li>Autonomous Platforms</li>
                  <li>Cloud Infrastructure</li>
                  <li>Cybersecurity</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>News</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="mailto:info@ziontechgroup.com" className="text-gray-300 hover:text-purple-400">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="tel:+1-800-ZION-TECH" className="text-gray-300 hover:text-purple-400">
                    <Phone className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-purple-400">
                    <MapPin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
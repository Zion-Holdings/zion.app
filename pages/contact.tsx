import React from 'react';
import Layout from '../components/layout/Layout';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
                <MessageCircle className="w-4 h-4" />
                Get In Touch
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Ready to transform your business with revolutionary technology? 
                Let's discuss how Zion Tech Group can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
                  <p className="text-gray-400 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

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
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your last name"
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-consciousness">AI Consciousness Evolution</option>
                      <option value="quantum-cybersecurity">Quantum Cybersecurity</option>
                      <option value="space-technology">Space Technology</option>
                      <option value="enterprise-solutions">Enterprise Solutions</option>
                      <option value="consulting">Consulting Services</option>
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                  <p className="text-gray-400 mb-8">
                    We're here to help you navigate the future of technology. 
                    Reach out to us through any of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-white/5 border border-white/10 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-3">
                      <Phone className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                      <p className="text-cyan-400 text-lg font-medium">+1 302 464 0950</p>
                      <p className="text-gray-400 text-sm">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white/5 border border-white/10 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-3">
                      <Mail className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <p className="text-purple-400 text-lg font-medium">kleber@ziontechgroup.com</p>
                      <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white/5 border border-white/10 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 p-3">
                      <MapPin className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Office</h3>
                      <p className="text-green-400 text-lg font-medium">364 E Main St STE 1008</p>
                      <p className="text-gray-400 text-sm">Middletown, DE 19709, United States</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white/5 border border-white/10 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 p-3">
                      <Clock className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                      <p className="text-orange-400 text-lg font-medium">Monday - Friday</p>
                      <p className="text-gray-400 text-sm">9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-400 text-sm">Weekend consultations available by appointment</p>
                    </div>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">Quick Response Guarantee</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    We guarantee a response within 24 hours for all business inquiries. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how our revolutionary technology solutions can transform your business 
              and help you stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                View Our Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Mail, Phone, MapPin, ArrowRight, MessageSquare,
  Clock, Globe, Building, Users, Award, Shield, Home, ChevronRight, Brain
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

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                  <Link href="/zion-tech-group" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>
                  <Link href="/contact" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="bg-black/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <div>
                    <Link href="/" className="text-gray-300 hover:text-white">
                      <Home className="h-4 w-4" />
                      <span className="sr-only">Home</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <span className="ml-4 text-sm font-medium text-white">Contact</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Get in Touch</span>
                <span className="block text-purple-400">With Our Team</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Ready to transform your business with revolutionary quantum AI solutions? Our team of experts is here to help you navigate the future of technology.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                      >
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-12 lg:mt-0 lg:col-span-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                          <Phone className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Phone</h3>
                        <p className="text-gray-300">+1 (302) 464-0950</p>
                        <p className="text-sm text-gray-400">Available 24/7 for urgent matters</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Email</h3>
                        <p className="text-gray-300">kleber@ziontechgroup.com</p>
                        <p className="text-sm text-gray-400">We respond within 2 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Address</h3>
                        <p className="text-gray-300">364 E Main St STE 1008</p>
                        <p className="text-gray-300">Middletown, DE 19709</p>
                        <p className="text-sm text-gray-400">United States</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Business Hours</h3>
                        <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p className="text-sm text-gray-400">Weekend consultations by appointment</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact Options */}
                  <div className="mt-8 pt-8 border-t border-gray-700">
                    <h3 className="text-lg font-medium text-white mb-4">Quick Contact Options</h3>
                    <div className="space-y-3">
                      <Link href="tel:+13024640950" className="flex items-center justify-center w-full px-4 py-2 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-400 hover:text-white transition-colors">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Link>
                      <Link href="mailto:kleber@ziontechgroup.com" className="flex items-center justify-center w-full px-4 py-2 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-400 hover:text-white transition-colors">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another technology company. We're the architects of tomorrow, building solutions that will define the next decade of innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">
                  Our team consists of industry experts with decades of experience in quantum computing, AI, and emerging technologies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
                <p className="text-gray-300">
                  We've successfully delivered cutting-edge solutions to Fortune 500 companies and innovative startups alike.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
                <p className="text-gray-300">
                  All our solutions are built with enterprise-grade security and compliance standards in mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to Start Your Project?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-purple-100">
              Let's discuss how our revolutionary technology solutions can transform your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/zion-tech-group" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href="tel:+13024640950" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-purple-700">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/40">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-gray-300 text-base">
                  Leading the future with revolutionary quantum AI solutions and autonomous systems.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Quantum AI
                        </Link>
                      </li>
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Autonomous Systems
                        </Link>
                      </li>
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Technology Platforms
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8">
              <p className="text-base text-gray-400 xl:text-center">
                &copy; 2025 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

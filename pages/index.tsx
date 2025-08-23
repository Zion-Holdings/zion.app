import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp, 
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  Building, Award, Lock, Server, Network, Monitor
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group | Revolutionary Quantum AI & Autonomous Systems</title>
        <meta name="description" content="Zion Tech Group leads the future with revolutionary quantum AI solutions, autonomous systems, and cutting-edge technology platforms. Transform your business with next-generation technology." />
        <meta name="keywords" content="Zion Tech Group, quantum AI, autonomous systems, technology solutions, AI consulting, quantum computing" />
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
                  <h1 className="text-2xl font-bold text-white">Zion Tech Group</h1>
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
                  <Link href="/contact" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-purple-600/20 rounded-full">
                  <Brain className="h-16 w-16 text-purple-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                The Future of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Zion Tech Group leads the revolution in quantum AI, autonomous systems, and next-generation technology platforms. 
                Transform your business with cutting-edge solutions that define tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/zion-tech-group" className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                  Discover More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cutting-edge platforms and systems deliver unprecedented capabilities across industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all">
                <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum AI Systems</h3>
                <p className="text-gray-300">
                  Revolutionary artificial intelligence powered by quantum computing principles, delivering unprecedented processing capabilities.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all">
                <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Rocket className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Autonomous Platforms</h3>
                <p className="text-gray-300">
                  Self-managing systems that operate independently, continuously learning and optimizing performance without human intervention.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all">
                <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Advanced Security</h3>
                <p className="text-gray-300">
                  Next-generation cybersecurity solutions with quantum-resistant encryption and AI-powered threat detection.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all">
                <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Server className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300">
                  Scalable, high-performance cloud solutions designed for the most demanding applications and workloads.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all">
                <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Network className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">IoT Integration</h3>
                <p className="text-gray-300">
                  Seamless connectivity solutions for the Internet of Things, enabling smart environments and automated systems.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all">
                <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Monitor className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Analytics & Insights</h3>
                <p className="text-gray-300">
                  Advanced data analytics and business intelligence tools powered by machine learning and predictive modeling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Global Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the future of technology with Zion Tech Group. Our revolutionary solutions are waiting to propel your business to new heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/zion-tech-group" className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-colors">
                Learn More
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
                  <a href="#" className="text-gray-300 hover:text-purple-400">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-purple-400">
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
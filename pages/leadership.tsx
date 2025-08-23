import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Users, Award, Target, TrendingUp, Globe, Shield, 
  Mail, Phone, MapPin, ArrowRight, Star, CheckCircle, 
  Rocket, Brain, Zap, Cpu, Database, Network, 
  Monitor, Settings, RefreshCw, Play, Pause, 
  AlertTriangle, CheckCircle2, Building, Wifi, 
  HardDrive, Cloud, Smartphone, Link, Blocks,
  Wallet, CreditCard, PiggyBank, Building2, Activity,
  Waves, BrainCircuit, CpuIcon, MonitorHeart,
  Film, Headphones, Camera, Gamepad2, Tv, Radio,
  Factory, Cog, Gauge, Wrench, Settings2, CpuIcon2,
  Calendar, Clock, Target, Users2, FileText2, PieChart,
  User, Search, Eye, Heart, ShoppingCart, Code,
  MessageSquare, Image, Video, Music, Palette, Type
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Leadership Team | Zion Tech Group',
  description: 'Meet the visionary leaders driving innovation and transformation at Zion Tech Group.',
  keywords: 'leadership, executive team, Zion Tech Group, innovation, technology leadership',
  openGraph: {
    title: 'Leadership Team | Zion Tech Group',
    description: 'Meet the visionary leaders driving innovation and transformation at Zion Tech Group.',
    url: 'https://ziontechgroup.com/leadership',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-leadership.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group Leadership Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leadership Team | Zion Tech Group',
    description: 'Meet the visionary leaders driving innovation and transformation at Zion Tech Group.',
    images: ['https://ziontechgroup.com/og-image-leadership.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/leadership',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function Leadership() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
              <Users className="w-4 h-4 mr-2" />
              Visionary Leadership
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Leadership Team
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Meet the visionary leaders who are driving innovation, transformation, and 
              technological advancement at Zion Tech Group.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#team" 
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-xl font-semibold text-blue-300 hover:bg-blue-500/10 transition-all duration-300"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Leadership Philosophy
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe in leading through innovation, empowering our teams, and driving 
              transformative change in the technology landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-400">
                We prioritize cutting-edge innovation and creative problem-solving in everything we do.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">People-Centric</h3>
              <p className="text-gray-400">
                Our leadership focuses on empowering teams and fostering a culture of growth and collaboration.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
              <p className="text-gray-400">
                We maintain a laser focus on delivering exceptional results and exceeding client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section id="team" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Executive Leadership
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the visionary executives who are shaping the future of technology and business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kleber</h3>
                <p className="text-blue-400 font-medium">Chief Executive Officer</p>
              </div>
              <p className="text-gray-400 text-center mb-4">
                Visionary leader driving strategic innovation and business transformation across all sectors.
              </p>
              <div className="text-center">
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </div>
            </div>

            {/* CTO */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-12 h-12 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technology Leadership</h3>
                <p className="text-indigo-400 font-medium">Chief Technology Officer</p>
              </div>
              <p className="text-gray-400 text-center mb-4">
                Leading technological innovation and driving cutting-edge solutions across all platforms.
              </p>
              <div className="text-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </div>
            </div>

            {/* Innovation Director */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation Team</h3>
                <p className="text-purple-400 font-medium">Director of Innovation</p>
              </div>
              <p className="text-gray-400 text-center mb-4">
                Spearheading breakthrough innovations and emerging technology research and development.
              </p>
              <div className="text-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Core Leadership Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide our leadership decisions and shape our organizational culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Excellence</h3>
              <p className="text-gray-400 text-sm">
                We strive for excellence in every project, solution, and interaction.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Integrity</h3>
              <p className="text-gray-400 text-sm">
                We maintain the highest standards of ethical behavior and transparency.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Growth</h3>
              <p className="text-gray-400 text-sm">
                We foster continuous learning and development for our teams and clients.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Impact</h3>
              <p className="text-gray-400 text-sm">
                We focus on creating meaningful, lasting impact for our clients and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Vision Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Vision for the Future
              </h2>
              <p className="text-xl text-gray-400 mb-6">
                At Zion Tech Group, we envision a future where technology seamlessly integrates 
                with human potential, creating unprecedented opportunities for growth and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">AI-Powered Transformation</h3>
                    <p className="text-gray-400">Leading the charge in AI-driven business transformation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Global Innovation Hub</h3>
                    <p className="text-gray-400">Creating a center for technological innovation and collaboration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Sustainable Growth</h3>
                    <p className="text-gray-400">Building a future that balances innovation with environmental responsibility</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold mb-4">Strategic Priorities</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Expanding AI capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Global market expansion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Talent development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Innovation partnerships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Sustainable practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to work with visionary leaders who are transforming the future of technology?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-xl font-semibold text-blue-300 hover:bg-blue-500/10 transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Leadership
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Connect with Leadership</h2>
              <p className="text-gray-400 mb-8">
                Our leadership team is always accessible and ready to discuss your technology needs 
                and strategic initiatives.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4">Leadership Consultation</h3>
              <p className="text-gray-400 mb-6">
                Schedule a direct consultation with our executive team to discuss strategic 
                technology initiatives and partnership opportunities.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                Schedule Meeting
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
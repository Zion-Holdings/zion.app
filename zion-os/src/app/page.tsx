import Link from 'next/link';
import { ArrowRight, Brain, Rocket, Shield, Globe, Zap, Users, Target, Star, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Pioneering the future of AI-powered business transformation and autonomous systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI technologies designed for the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Autonomous Systems</h3>
              <p className="text-gray-600 mb-4">
                Self-managing AI systems that operate independently across your business operations
              </p>
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Advanced analytics and insights powered by machine learning and AI
              </p>
              <Link href="/services" className="text-purple-600 hover:text-purple-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">
                AI-powered security solutions protecting your digital assets and infrastructure
              </p>
              <Link href="/services" className="text-green-600 hover:text-green-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quantum Computing</h3>
              <p className="text-gray-600 mb-4">
                Next-generation computing solutions for complex problem-solving
              </p>
              <Link href="/services" className="text-orange-600 hover:text-orange-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Zion OS Platform */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Zion OS Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch sovereign AI-powered digital economies with one click
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Deploy Digital Economies</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our unified deployment protocol creates complete Zion ecosystems with marketplace, 
                governance, identity, and AI-powered tools.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Marketplace & Jobs Platform</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>AI Governance (DAO)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Token Systems & Economics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Identity & KYC Solutions</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link 
                  href="/multiverse/launch" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Launch Your Economy
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Platform Features</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold">Fast Deployment</div>
                  <div className="text-sm text-gray-600">Launch in minutes</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">Secure</div>
                  <div className="text-sm text-gray-600">Enterprise-grade</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold">Scalable</div>
                  <div className="text-sm text-gray-600">Grow with you</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold">Customizable</div>
                  <div className="text-sm text-gray-600">Tailored solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge AI to enhance your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ZionGPT</h3>
              <p className="text-gray-600 mb-6">
                Advanced AI assistant for business intelligence and decision-making
              </p>
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resume AI</h3>
              <p className="text-gray-600 mb-6">
                Intelligent resume analysis and candidate matching system
              </p>
              <Link href="/services" className="text-purple-600 hover:text-purple-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Analytics</h3>
              <p className="text-gray-600 mb-6">
                Predictive analytics and business intelligence platform
              </p>
              <Link href="/services" className="text-green-600 hover:text-green-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-300">Our impact in transforming businesses with AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">AI Systems Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join the AI revolution and discover how our solutions can drive growth and innovation
          </p>
          
          {/* Contact Details */}
          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <span>📱</span>
                <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>📍</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
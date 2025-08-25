import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Phone, Mail, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of businesses that have already revolutionized their operations with our AI-powered solutions. 
              Let's discuss how we can help you achieve your technology goals.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/services"
                className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group hover:scale-105"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-cyan-600/20 rounded-full group-hover:bg-cyan-600/30 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400 mb-3">Speak with our experts</p>
                <a 
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  +1 (302) 464-0950
                </a>
              </div>

              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400 mb-3">Send us a message</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>

              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-600/20 rounded-full group-hover:bg-purple-600/30 transition-colors duration-300">
                    <Calendar className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Schedule a Demo</h3>
                <p className="text-gray-400 mb-3">See our solutions in action</p>
                <Link 
                  to="/contact"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                >
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 pt-8 border-t border-gray-700/50">
              <div className="text-gray-400 mb-4">Why businesses choose Zion Tech Group:</div>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Free Consultation
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  No Setup Fees
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  30-Day Money Back
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Enterprise Security
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
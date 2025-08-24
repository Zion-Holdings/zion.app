import React from 'react';
import { Mail, Phone, MapPin, Globe, Sparkles, Send, Clock, Users } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-zion-cyan" />
            <span className="text-zion-cyan text-sm font-medium">Let's Connect</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Get in
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Contact our team to discuss your needs 
            and discover how our innovative solutions can drive your success.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Phone */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-zion-cyan/25">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Call Us</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-zion-cyan hover:text-zion-cyan-dark transition-colors text-lg font-medium">
                {contactInfo.phone}
              </a>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Available 24/7</p>
            </div>

            {/* Email */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-zion-purple/25">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Email Us</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-zion-cyan hover:text-zion-cyan-dark transition-colors text-lg font-medium">
                {contactInfo.email}
              </a>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Quick response</p>
            </div>

            {/* Address */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-zion-blue/25">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Visit Us</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                {contactInfo.address}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Middletown, DE</p>
            </div>

            {/* Website */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-green to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-zion-green/25">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Website</h3>
              <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-dark transition-colors text-lg font-medium">
                {contactInfo.website}
              </a>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Learn more</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours. 
                For urgent matters, please call us directly.
              </p>
            </div>
            
            <form className="space-y-8 bg-white dark:bg-slate-800 rounded-2xl p-8 lg:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 hover:border-zion-cyan/50"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 hover:border-zion-cyan/50"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 hover:border-zion-cyan/50"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 hover:border-zion-cyan/50"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 hover:border-zion-cyan/50"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Service of Interest
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 hover:border-zion-cyan/50"
                >
                  <option value="">Select a service</option>
                  <option value="ai-services">AI Services</option>
                  <option value="it-services">IT Services</option>
                  <option value="micro-saas">Micro SAAS</option>
                  <option value="development">Development</option>
                  <option value="analytics">Analytics</option>
                  <option value="security">Security</option>
                  <option value="automation">Automation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 hover:border-zion-cyan/50 resize-none"
                  placeholder="Tell us about your project, requirements, or questions..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/30 text-lg"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We're committed to delivering exceptional service and innovative solutions 
              that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Fast Response</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Get a response within 24 hours for all inquiries and urgent support when you need it most.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Expert Team</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Our experienced professionals are dedicated to understanding your needs and delivering tailored solutions.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Innovation First</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

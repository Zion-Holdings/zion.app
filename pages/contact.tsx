import React, { useState } from 'react';
import Head from 'next/head';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, Globe, Shield, Users, CheckCircle, ArrowRight, Building, Award, Star, Zap, Bot, Cpu, Database, Cloud, Smartphone, Palette, Search, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Crown, Gem, Sparkle, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, CheckCircle2, XCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const services = [
    'AI Content Generator Elite',
    'AI Customer Service Automation',
    'AI Sales Automation Platform',
    'AI Data Analytics Platform',
    'AI Legal Contract Analyzer',
    'AI HR Recruitment Platform',
    'AI Market Research Platform',
    'AI Video Editing Platform',
    'AI SEO Optimization Platform',
    'AI Blockchain Analytics Platform',
    'AI IoT Platform',
    'Custom AI Solution',
    'Other'
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const supportFeatures = [
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and customer success management'
    },
    {
      icon: <Users className="w-6 h-6 text-fuchsia-400" />,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Secure Communication',
      description: 'Enterprise-grade security for all communications'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Global Reach',
      description: 'Support available worldwide with local expertise'
    }
  ];

  return (
    <UltraFuturisticBackground variant="quantum-holographic-advanced" className="min-h-screen">
      <Head>
        <title>Contact Zion Tech Group | Get in Touch for AI-Powered Solutions</title>
        <meta name="description" content="Contact Zion Tech Group for AI-powered micro SaaS solutions. Get expert support, custom solutions, and start your free trial today." />
        <meta name="keywords" content="contact Zion Tech Group, AI services contact, micro SaaS support, Zion Tech Group contact" />
        <meta property="og:title" content="Contact Zion Tech Group | Get in Touch for AI-Powered Solutions" />
        <meta property="og:description" content="Contact us for AI-powered micro SaaS solutions and expert support" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business with AI-powered solutions? Our team is here to help you get started and answer any questions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard variant="quantum" className="h-full text-center p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <p className="text-gray-300 mb-4">Available 24/7 for urgent matters</p>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{contactInfo.mobile}</div>
                  <p className="text-sm text-gray-400">Call us anytime for immediate assistance</p>
                </UltraFuturisticCard>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard variant="holographic-advanced" className="h-full text-center p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-300 mb-4">Response within 2 hours</p>
                  </div>
                  <div className="text-lg font-bold text-fuchsia-400 mb-2 break-all">{contactInfo.email}</div>
                  <p className="text-sm text-gray-400">Send us a detailed message</p>
                </UltraFuturisticCard>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard variant="quantum-cyberpunk" className="h-full text-center p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                    <p className="text-gray-300 mb-4">Global headquarters</p>
                  </div>
                  <div className="text-sm font-bold text-orange-400 mb-2 leading-relaxed">{contactInfo.address}</div>
                  <p className="text-sm text-gray-400">Visit our headquarters</p>
                </UltraFuturisticCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form & Office Hours */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard variant="quantum-advanced" className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                  
                  {submitSuccess ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-300 mb-4">We'll get back to you within 2 hours.</p>
                      <Button
                        onClick={() => setSubmitSuccess(false)}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            placeholder="Enter company name"
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
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Tell us about your project or questions..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </UltraFuturisticCard>
              </motion.div>

              {/* Office Hours & Support */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Office Hours */}
                <UltraFuturisticCard variant="holographic-advanced" className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Office Hours</h2>
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700/50">
                        <span className="text-gray-300 font-medium">{schedule.day}</span>
                        <span className="text-cyan-400">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <strong>Note:</strong> For urgent matters outside office hours, please call our 24/7 support line.
                    </p>
                  </div>
                </UltraFuturisticCard>

                {/* Support Features */}
                <UltraFuturisticCard variant="quantum-cyberpunk" className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our Support?</h2>
                  <div className="space-y-4">
                    {supportFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                        <div>
                          <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                          <p className="text-gray-300 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </UltraFuturisticCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Contact Methods */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Other Ways to Connect
              </h2>
              <p className="text-lg text-gray-300">
                Choose the communication method that works best for you
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
                  title: 'Live Chat',
                  description: 'Chat with our support team in real-time',
                  action: 'Start Chat',
                  color: 'from-cyan-500 to-blue-600'
                },
                {
                  icon: <Mail className="w-8 h-8 text-fuchsia-400" />,
                  title: 'Email Support',
                  description: 'Send us a detailed message anytime',
                  action: 'Send Email',
                  color: 'from-fuchsia-500 to-purple-600'
                },
                {
                  icon: <Phone className="w-8 h-8 text-green-400" />,
                  title: 'Phone Support',
                  description: 'Speak directly with our experts',
                  action: 'Call Now',
                  color: 'from-green-500 to-emerald-600'
                },
                {
                  icon: <Globe className="w-8 h-8 text-orange-400" />,
                  title: 'Visit Website',
                  description: 'Explore our services and solutions',
                  action: 'Visit Site',
                  color: 'from-orange-500 to-red-600'
                }
              ].map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard variant="quantum-advanced" className="h-full text-center p-6">
                    <div className="mb-4">{method.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                    <Button
                      className={`w-full bg-gradient-to-r ${method.color} hover:from-opacity-80 hover:to-opacity-80 text-white`}
                      onClick={() => {
                        switch (index) {
                          case 0: // Live Chat
                            // Implement live chat functionality
                            break;
                          case 1: // Email
                            window.open(`mailto:${contactInfo.email}`, '_blank');
                            break;
                          case 2: // Phone
                            window.open(`tel:${contactInfo.mobile}`, '_blank');
                            break;
                          case 3: // Website
                            window.open(contactInfo.website, '_blank');
                            break;
                        }
                      }}
                    >
                      {method.action}
                    </Button>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI-powered solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
                  onClick={() => window.open('/services', '_blank')}
                >
                  View Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
                  onClick={() => window.open('/pricing', '_blank')}
                >
                  View Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="mt-8 text-gray-400">
                <p className="mb-2">
                  <Phone className="inline w-4 h-4 mr-2" />
                  {contactInfo.mobile} | 
                  <Mail className="inline w-4 h-4 mx-2" />
                  {contactInfo.email}
                </p>
                <p className="text-sm">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  {contactInfo.address}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}
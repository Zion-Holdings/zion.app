import React, { useState } from 'react';
import Head from 'next/head';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, AlertCircle, Building, Globe, Users, Award, Sparkle, ArrowRight, ExternalLink, Linkedin, Twitter, Facebook, Instagram, Youtube, Github, ChevronRight, Star, Shield, Zap, Rocket, Brain, Factory, FlaskConical, Rocket as RocketIcon, Truck, MessageSquare as MessageSquareIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    responseTime: 'Within 2 hours during business hours'
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/ziontechgroup', color: 'hover:text-cyan-400' },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: 'https://youtube.com/@ziontechgroup', color: 'hover:text-red-400' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' }
  ];

  const serviceCategories = [
    {
      name: 'Quantum AI & Computing',
      description: 'Revolutionary quantum AI solutions',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Autonomous Systems',
      description: 'Next-generation robotics & automation',
      icon: <Factory className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Biotechnology',
      description: 'AI-powered biomedical research',
      icon: <FlaskConical className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Space Technology',
      description: 'Satellite & space exploration',
      icon: <RocketIcon className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Supply Chain',
      description: 'Intelligent logistics optimization',
      icon: <Truck className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Content & Marketing',
      description: 'AI-powered creation & automation',
      icon: <MessageSquareIcon className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const timelineOptions = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Extended (6+ months)',
    'Ongoing partnership'
  ];

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
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Contact Us - Zion Tech Group | Get Expert Consultation</title>
        <meta name="description" content="Contact Zion Tech Group for expert consultation on our 400+ revolutionary micro SaaS services. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact Zion Tech Group, micro SaaS consultation, AI services support, quantum computing experts" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get expert consultation on our revolutionary micro SaaS services" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>

      {/* Enhanced Futuristic Background */}
      <QuantumHolographicBackground>
        <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Sparkle className="w-4 h-4 mr-2" />
              Get Expert Consultation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-6">
              Let's Build the
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
                Future Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Ready to transform your business with our revolutionary micro SaaS services? 
              Our team of experts is here to help you find the perfect solution and guide you through implementation.
            </p>
            
            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                href={`tel:${contactInfo.mobile}`}
                variant="primary"
                size="lg"
                className="group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {contactInfo.mobile}
              </Button>
              <Button
                href={`mailto:${contactInfo.email}`}
                variant="secondary"
                size="lg"
                className="group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
                <a 
                  href={`tel:${contactInfo.mobile}`} 
                  className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors mb-2 block"
                >
                  {contactInfo.mobile}
                </a>
                <p className="text-gray-400 text-sm mb-4">{contactInfo.hours}</p>
                <p className="text-gray-300 text-sm">Response time: {contactInfo.responseTime}</p>
              </Card>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="text-xl font-bold text-purple-400 hover:text-purple-300 transition-colors mb-2 block break-all"
                >
                  {contactInfo.email}
                </a>
                <p className="text-gray-400 text-sm mb-4">24/7 support available</p>
                <p className="text-gray-300 text-sm">We respond within 2 hours</p>
              </Card>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {contactInfo.address}
                </p>
                <p className="text-gray-400 text-sm">Headquarters</p>
                <p className="text-gray-300 text-sm">Global operations</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Get Your Free Consultation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tell us about your project and we'll provide a personalized solution tailored to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">Thank you for contacting us. We'll get back to you within 2 hours.</p>
                    <Button
                      onClick={() => setSubmitStatus('idle')}
                      variant="primary"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="">Select a service category</option>
                        {serviceCategories.map((category, index) => (
                          <option key={index} value={category.name}>{category.name}</option>
                        ))}
                        <option value="Custom Solution">Custom Solution</option>
                        <option value="Multiple Services">Multiple Services</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range, index) => (
                            <option key={index} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Service Categories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Service Categories</h3>
                  <p className="text-gray-300 mb-6">
                    Explore our comprehensive range of revolutionary micro SaaS services across multiple industries and technologies.
                  </p>
                </div>

                <div className="space-y-4">
                  {serviceCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                        <div className="text-white">
                          {category.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">{category.name}</h4>
                        <p className="text-gray-400 text-sm">{category.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3">Why Choose Zion Tech Group?</h4>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      <span>400+ revolutionary micro SaaS services</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>Enterprise-grade security & compliance</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      <span>21-day free trials on all services</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      <span>24/7 expert support & consultation</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media & Additional Contact */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Follow us on social media for the latest updates, insights, and industry news.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Social Media Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Social Media</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform ${social.color}`}>
                      {social.icon}
                    </div>
                    <div>
                      <div className="font-medium text-white">{social.name}</div>
                      <div className="text-sm text-gray-400">Follow us</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Additional Ways to Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-3">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Live Chat</div>
                    <div className="text-sm text-gray-400">Available on our website</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Partner Program</div>
                    <div className="text-sm text-gray-400">Become a reseller</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-3">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Enterprise Solutions</div>
                    <div className="text-sm text-gray-400">Custom enterprise packages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your business. Contact us today and discover how our revolutionary micro SaaS services can drive unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`tel:${contactInfo.mobile}`}
                variant="primary"
                size="lg"
                className="group"
              >
                Call Now: {contactInfo.mobile}
                <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                href={`mailto:${contactInfo.email}`}
                variant="secondary"
                size="lg"
                className="group"
              >
                Send Email
                <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
            
            <div className="mt-8 text-gray-400">
              <p>Response guaranteed within 2 hours during business hours</p>
            </div>
          </motion.div>
        </div>
      </section>
        </div>
      </QuantumHolographicBackground>
    </div>
  );
}
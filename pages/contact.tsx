export default function Page(){return null}
=======
=======
import React from 'react';
=======
import React, { useState } from 'react';
import Head from 'next/head';
import React from 'react';
import SEO from '../components/SEO';
=======
import { 
  Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare, CheckCircle, 
  ArrowRight, Star, Users, Shield, Zap, Brain, Factory, FlaskConical, 
  DollarSign, Rocket, Truck, GraduationCap, Check, ExternalLink, TrendingUp,
  Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon,
  Brain as BrainIcon, Factory as FactoryIcon, Shield as ShieldIcon, 
  FlaskConical as FlaskIcon, DollarSign as DollarIcon, Rocket as RocketIcon, Truck as TruckIcon, 
  GraduationCap as GraduationCapIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    }, 2000);
  };

  const contactMethods = [
    {
      title: "📱 Phone",
      value: "+1 302 464 0950",
      description: "Call us directly for immediate assistance",
      action: "Call Now",
      link: "tel:+13024640950"
    },
    {
      title: "✉️ Email",
      value: "kleber@ziontechgroup.com",
      description: "Send us an email for detailed inquiries",
      action: "Send Email",
      link: "mailto:kleber@ziontechgroup.com"
    },
    {
      title: "📍 Office",
      value: "364 E Main St STE 1008\nMiddletown DE 19709",
      description: "Visit our office for in-person meetings",
      action: "Get Directions",
      link: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    }
  ];

  const services = [
    "AI Development",
    "Cloud Services",
    "Web Development",
    "Mobile Development",
    "Data Analytics",
    "Cybersecurity",
    "Blockchain Solutions",
    "IoT Development",
    "Digital Transformation",
    "Custom Software",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for technology solutions, consultations, and project inquiries. Get in touch with our experts today." />
        <meta name="keywords" content="contact Zion Tech Group, technology consulting, AI development, cloud services, get quote" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with innovative technology solutions? 
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you for your message! We'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                There was an error sending your message. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project, requirements, and goals..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get in touch with us through any of these methods. We're here to help 
                you find the right technology solution for your business.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-3 whitespace-pre-line">
                    {method.value}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {method.description}
                  </p>
                  <a
                    href={method.link}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    {method.action}
                  </a>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🕒 Business Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Emergency support available 24/7 for existing clients
              </p>
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Other Ways to Connect
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Chat with our team in real-time during business hours
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Start Chat
              </button>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule Meeting</h3>
              <p className="text-gray-600 mb-4">
                Book a consultation call at your convenience
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Book Meeting
              </button>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with latest tech trends and insights
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How quickly can you start working on my project?
              </h3>
              <p className="text-gray-600">
                We typically begin projects within 1-2 weeks of contract signing. For urgent projects, 
                we can expedite the process and start within a few days.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is your typical project timeline?
              </h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity. Simple projects take 4-8 weeks, 
                while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during consultation.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-gray-600">
                Yes, we offer various support packages including maintenance, updates, and 24/7 monitoring. 
                We can also provide training for your team.
              </p>
            </div>
            <div className="pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can you work with my existing technology stack?
              </h3>
              <p className="text-gray-600">
                Absolutely! We specialize in integrating with existing systems and can work with 
                any technology stack. We'll assess your current setup and recommend the best approach.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Don't wait to transform your business. Contact us today and let's discuss 
            how we can help you achieve your technology goals.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </main>
    </div>
=======
import { useState } from 'react';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    { name: 'Quantum Computing & AI', icon: <BrainIcon className="w-6 h-6" />, count: 15, color: 'from-purple-600 to-indigo-700' },
    { name: 'Manufacturing & Industry 4.0', icon: <FactoryIcon className="w-6 h-6" />, count: 12, color: 'from-orange-500 to-red-600' },
    { name: 'Healthcare & Biotechnology', icon: <FlaskIcon className="w-6 h-6" />, count: 14, color: 'from-blue-600 to-cyan-700' },
    { name: 'Cybersecurity', icon: <ShieldIcon className="w-6 h-6" />, count: 18, color: 'from-green-600 to-emerald-700' },
    { name: 'Financial Technology', icon: <DollarIcon className="w-6 h-6" />, count: 16, color: 'from-yellow-500 to-amber-600' },
    { name: 'Logistics & Supply Chain', icon: <TruckIcon className="w-6 h-6" />, count: 11, color: 'from-teal-500 to-green-600' },
    { name: 'Space Technology', icon: <RocketIcon className="w-6 h-6" />, count: 8, color: 'from-indigo-600 to-purple-700' },
    { name: 'Education Technology', icon: <GraduationCapIcon className="w-6 h-6" />, count: 13, color: 'from-blue-500 to-indigo-600' }
  ];

  const popularServices = enhancedRealMicroSaasServices
    .filter(service => service.popular)
    .slice(0, 6);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Get in touch with our team',
      contact: 'kleber@ziontechgroup.com',
      color: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: '📱',
      title: 'Phone',
      description: 'Speak with an expert',
      contact: '+1 302 464 0950',
      color: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office Address',
      value: '364 E Main St STE 1008',
      description: 'Middletown DE 19709, United States',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-600/10'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      value: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/10 to-orange-600/10'
    }
  ];

  const whyChooseUs = [
    {
      city: 'Middletown',
      country: 'United States',
      address: '364 E Main St STE 1008, Middletown, DE 19709',
      icon: '🏢',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      city: 'Global Support',
      country: 'Worldwide',
      address: '24/7 Remote Support & Consulting Available',
      icon: '🌍',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      city: 'Cloud Operations',
      country: 'Multi-Region',
      address: 'AWS, Azure, GCP Infrastructure Worldwide',
      icon: '☁️',
      gradient: 'from-green-400 to-teal-500',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: '500+ Services',
      description: 'Access to revolutionary micro SaaS services with up to 5000% ROI'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Dedicated Support',
      description: 'Personal account manager for enterprise clients'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Head>
        <title>Contact Us - Zion Tech Group | Get Started with Revolutionary Micro SaaS Services</title>
        <meta name="description" content="Contact Zion Tech Group to get started with our revolutionary micro SaaS services. Get a free consultation and discover how our AI and quantum computing solutions can transform your business." />
        <meta name="keywords" content="contact Zion Tech Group, micro SaaS consultation, AI services consultation, quantum computing services, business transformation" />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get started with our revolutionary micro SaaS services. Free consultation available." />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>

      <UltraFuturisticBackground>
        {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Let's Transform Your Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to leverage the power of AI, quantum computing, and cutting-edge technology? 
              Contact us today for a free consultation and discover how our revolutionary micro SaaS services can accelerate your growth.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/70 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                  Get Free Consultation
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300 mb-6">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                    <div className="text-sm text-gray-400">
                      <p>✓ Free consultation scheduled</p>
                      <p>✓ Service recommendations prepared</p>
                      <p>✓ ROI analysis in progress</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="Enter company name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Service Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        >
                          <option value="">Select a service category</option>
                          {serviceCategories.map((category) => (
                            <option key={category.name} value={category.name}>
                              {category.name} ({category.count} services)
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        >
                          <option value="">Select budget range</option>
                          <option value="0-1000">$0 - $1,000/month</option>
                          <option value="1000-5000">$1,000 - $5,000/month</option>
                          <option value="5000-10000">$5,000 - $10,000/month</option>
                          <option value="10000+">$10,000+/month</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (within 1 month)</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6months+">6+ months</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full group relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Primary Contact Info */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                      <PhoneIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                      <p className="text-cyan-400 text-lg font-semibold">{contactInfo.mobile}</p>
                      <p className="text-gray-400 text-sm">Available 24/7 for urgent inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                      <MailIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                      <p className="text-purple-400 text-lg font-semibold">{contactInfo.email}</p>
                      <p className="text-gray-400 text-sm">Quick response guaranteed within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                      <MapPinIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                      <p className="text-green-400 text-sm font-semibold leading-relaxed">{contactInfo.address}</p>
                      <p className="text-gray-400 text-sm">Global operations and remote support available</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Website</h4>
                      <a 
                        href={contactInfo.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 text-lg font-semibold hover:text-blue-300 transition-colors flex items-center gap-2"
                      >
                        {contactInfo.website}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <p className="text-gray-400 text-sm">Explore our services and solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours & Support */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Business Hours & Support</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-semibold">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-semibold">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-semibold">By appointment</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-2 text-green-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm font-semibold">24/7 AI Support Available</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm font-semibold">Emergency Support Hotline</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
              Popular Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our most popular micro SaaS services that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard
                  variant={service.variant}
                  className="h-full group hover:scale-105 transition-transform duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      <span className="text-sm font-semibold text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.tagline}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xl font-bold text-cyan-400">
                        {service.price}
                        <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm ml-1">{service.rating}</span>
                      </div>
                    </div>
                    
                    <Button
                      href={service.link}
                      variant="primary"
                      size="sm"
                      className="w-full group"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      service: 'general'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us — Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for cutting-edge technology solutions and innovation consulting." />
        <meta property="og:title" content="Contact Us — Zion Tech Group" />
        <meta property="og:description" content="Get in touch with Zion Tech Group for cutting-edge technology solutions and innovation consulting." />
      </Head>

      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s Build the{' '}
            <span className="gradient-text">Future</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? 
            Our team of experts is here to help you innovate and succeed.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Whether you have a project in mind or just want to learn more about our services, 
                  we&apos;d love to hear from you. Let&apos;s discuss how we can help your business grow.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-white/70">hello@ziontech.group</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Office</h3>
                    <p className="text-white/70">Innovation District, Tech City, TC 12345</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:border-cyan-400/50">
                    <span className="text-lg">𝕏</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:border-cyan-400/50">
                    <span className="text-lg">💼</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:border-cyan-400/50">
                    <span className="text-lg">🐙</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-white/80 text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-white/80 text-sm font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="ai-automation">AI & Automation</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="digital-transformation">Digital Transformation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
=======
      {/* CTA Section */}
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="Contact | Zion Tech Group" description="Contact Zion Tech Group" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
        <p className="text-gray-300 mb-6">We would love to hear from you. Reach out to discuss how we can help.</p>
        <div className="space-y-3 text-gray-200">
          <a href="tel:+13024640950" className="block hover:text-cyan-400">+1 302 464 0950</a>
          <a href="mailto:kleber@ziontechgroup.com" className="block hover:text-purple-400">kleber@ziontechgroup.com</a>
        </div>
      </div>
=======
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your business. Contact us today for a free consultation 
              and discover how our revolutionary micro SaaS services can accelerate your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                href="/services" 
                variant="primary" 
                size="lg"
                className="group relative overflow-hidden"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                href="/pricing" 
                variant="secondary" 
                size="lg"
                className="group relative overflow-hidden"
              >
                View Pricing
                <DollarSign className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <div className="text-sm text-gray-400 space-y-2">
              <p>✓ Free consultation and ROI analysis</p>
              <p>✓ 30-day free trial on all services</p>
              <p>✓ 24/7 AI support and emergency hotline</p>
              <p>✓ Custom implementation and training</p>
            </div>
          </motion.div>
        </div>
      </section>
      </UltraFuturisticBackground>
    </div>
  );
}

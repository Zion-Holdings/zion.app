import React, { useState } from 'react';
import Head from 'next/head';
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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
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
    }, 5000);
  };

  const stats = [
    { value: '500+', label: 'Micro SaaS Services', icon: <Zap className="w-6 h-6" />, color: 'text-cyan-400' },
    { value: '99.99%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" />, color: 'text-fuchsia-400' },
    { value: '30', label: 'Day Free Trials', icon: <Star className="w-6 h-6" />, color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', icon: <Brain className="w-6 h-6" />, color: 'text-green-400' },
    { value: '$1B+', label: 'Market Value', icon: <DollarSign className="w-6 h-6" />, color: 'text-yellow-400' },
    { value: '2500%+', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6" />, color: 'text-purple-400' }
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

      {/* CTA Section */}
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
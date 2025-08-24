import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
=======
import Link from 'next/link';
import { useState } from 'react';
<<<<<<< HEAD
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. We're here to help you transform your business with cutting-edge technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Get In Touch
            </h1>
                          <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to transform your business? Let&apos;s discuss how our cutting-edge technology solutions can help you achieve your goals.
              </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8 backdrop-blur-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    service: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'email',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'AI & Machine Learning Solutions',
    'Cloud Migration & Optimization',
    'Cybersecurity & Compliance',
    'Custom Software Development',
    'Data Analytics & Business Intelligence',
    'DevOps & Infrastructure Automation',
    'Digital Transformation Consulting',
    'IoT & Smart Manufacturing',
    'Mobile App Development',
    'Web Application Development',
    'Other (Please specify)'
  ];

  const projectTypes = [
    'New Project Development',
    'Existing System Enhancement',
    'System Integration',
    'Consulting & Strategy',
    'Training & Support',
    'Maintenance & Updates',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    'Over $500,000'
  ];

  const timelineOptions = [
    'Immediate (1-2 months)',
    'Short-term (3-6 months)',
    'Medium-term (6-12 months)',
    'Long-term (1+ years)',
    'Flexible'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        service: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        preferredContact: 'email',
        newsletter: false
      });
    }, 5000);
  };

  const contactMethods = [
    {
      title: 'Phone',
      value: '+1 302 464 0950',
      icon: '📞',
      description: 'Call us directly for immediate assistance',
      available: 'Mon-Fri 9AM-6PM EST'
    },
    {
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      icon: '✉️',
      description: 'Send us a detailed message',
      available: '24/7 response within 4 hours'
    },
    {
      title: 'Office',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      icon: '🏢',
      description: 'Visit our headquarters',
      available: 'By appointment only'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const responseTimes = [
    { type: 'Phone Calls', time: 'Immediate' },
    { type: 'Emails', time: 'Within 4 hours' },
    { type: 'Contact Form', time: 'Within 2 hours' },
    { type: 'Emergency Support', time: 'Within 30 minutes' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Contact Us - Zion Tech Group | Get Started with Your Project</title>
        <meta name="description" content="Contact Zion Tech Group to discuss your technology needs. Get expert consultation, project estimates, and start your digital transformation journey today." />
        <meta name="keywords" content="contact Zion Tech Group, technology consultation, project quote, AI solutions, cloud computing, cybersecurity, software development" />
      </Head>

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let&apos;s Build Something Amazing Together
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Ready to transform your business with cutting-edge technology? 
            Get in touch with our experts and let&apos;s discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🚀 Free Consultation</span>
            <span>💡 Expert Advice</span>
            <span>⚡ Fast Response</span>
            <span>🤝 Partnership Approach</span>
          </div>
        </div>

        {/* Contact Methods */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <div className="text-lg font-semibold text-blue-600 mb-2">{method.value}</div>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <div className="text-sm text-gray-500">{method.available}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form and Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your Project</h2>
            
<<<<<<< HEAD
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-green-600 text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">
                  Your message has been sent successfully. We&apos;ll get back to you within 2 hours.
                </p>
=======
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
>>>>>>> a8f0f845e290c358af6875dc27c33d0b4e7e2446
                <div>
<<<<<<< HEAD
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
=======
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a href="/tel:+13024640950" className="text-blue-600 hover:text-blue-700 text-lg">
                    +1 302 464 0950
                  </a>
                  <p className="text-gray-600 text-sm">Available Monday - Friday, 9 AM - 6 PM EST</p>
                </div>
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map(budget => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Preferences */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        Phone
                      </label>
                    </div>
                  </div>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600">
                      Subscribe to our newsletter for industry insights and updates
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Business Hours</h3>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Times */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Response Times</h3>
              <div className="space-y-3">
                {responseTimes.map((response, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{response.type}</span>
                    <span className="text-green-600 font-semibold">{response.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Why Choose Zion Tech Group?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Free initial consultation
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Expert technical team
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Proven track record
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Competitive pricing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Ongoing support
                </li>
              </ul>
            </div>
          </div>
        </div>

<<<<<<< HEAD
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project or how we can help"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  We&apos;re here to help you succeed. Reach out to us through any of the channels below, and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-white/70">contact@ziontechgroup.com</p>
                    <p className="text-white/50 text-sm">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                    <p className="text-white/50 text-sm">Available Monday-Friday, 9AM-6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Office</h3>
                    <p className="text-white/70">San Francisco, CA</p>
                    <p className="text-white/50 text-sm">Visit by appointment only</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Response Time</h3>
                    <p className="text-white/70">Within 24 hours</p>
                    <p className="text-white/50 text-sm">For urgent matters, call us directly</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Why Choose Zion Tech Group?</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span>
                    Enterprise-grade security and compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span>
                    24/7 technical support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span>
                    Proven track record with Fortune 500 companies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span>
                    Custom solutions tailored to your needs
                  </li>
                </ul>
              </div>
<<<<<<< HEAD
            </motion.div>
=======

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project, requirements, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
=======
        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don&apos;t wait to transform your business. Contact us today and let&apos;s discuss 
              how we can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
>>>>>>> a8f0f845e290c358af6875dc27c33d0b4e7e2446
              >
<<<<<<< HEAD
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
=======
                Send Message
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                By submitting this form, you agree to our{' '}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>
              </p>
            </div>
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <EnhancedFooter />
    </>
=======
        {/* Additional Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Consultation</h3>
            <p className="text-gray-600 mb-4">Get a free 30-minute consultation to discuss your project requirements</p>
            <a href="/tel:+13024640950" className="text-blue-600 hover:text-blue-700 font-medium">
              Schedule Now →
            </a>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Quote</h3>
            <p className="text-gray-600 mb-4">Receive a detailed project quote within 24 hours</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 font-medium">
              Get Quote →
            </a>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Support</h3>
            <p className="text-gray-600 mb-4">24/7 emergency support for enterprise clients</p>
            <a href="/tel:+13024640950" className="text-blue-600 hover:text-blue-700 font-medium">
              Call Now →
            </a>
          </div>
        </div>
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
      </main>

      <Footer />
    </div>
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
  );
<<<<<<< HEAD
}
=======
};

export default Contact;
>>>>>>> a8f0f845e290c358af6875dc27c33d0b4e7e2446

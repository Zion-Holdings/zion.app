import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
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
    'AI & Machine Learning',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Digital Transformation',
    'Web Development',
    'Mobile Apps',
    'Data Analytics',
    'IoT Solutions',
    'Blockchain',
    'Custom Software'
  ];

  const projectTypes = [
    'New Development',
    'Enhancement',
    'Migration',
    'Consultation',
    'Support & Maintenance',
    'Training'
  ];

  const budgets = [
    '$5K - $25K',
    '$25K - $100K',
    '$100K - $500K',
    '$500K+',
    'To be discussed'
  ];

  const timelines = [
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'To be discussed'
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
    
    setSubmitSuccess(true);
    setIsSubmitting(false);
    
    // Reset form after 5 seconds
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
      value: '+1 (302) 464-0950',
      icon: Phone,
      description: 'Call us directly for immediate assistance'
    },
    {
      title: 'Email',
      value: 'hello@ziontechgroup.com',
      icon: Mail,
      description: 'Send us a detailed message'
    },
    {
      title: 'Office',
      value: 'Wilmington, DE',
      icon: MapPin,
      description: 'Visit our headquarters'
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
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. We're here to help you transform your business with cutting-edge technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
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
                Ready to transform your business? Let's discuss how our cutting-edge technology solutions can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8 backdrop-blur-xl"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Start Your Project</h2>
                
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/80">We'll get back to you within 2 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-white/80 mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="CTO, Manager, etc."
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-slate-800 text-white">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-white/80 mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type} className="bg-slate-800 text-white">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          {budgets.map((budget) => (
                            <option key={budget} value={budget} className="bg-slate-800 text-white">
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-white/80 mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline} value={timeline} className="bg-slate-800 text-white">
                              {timeline}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your project, goals, and requirements..."
                      />
                    </div>

                    <div className="flex items-center space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-sm text-white/80">Subscribe to our newsletter</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactMethods.map((method) => (
                      <div key={method.title} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                          <method.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                          <p className="text-blue-300 font-medium">{method.value}</p>
                          <p className="text-white/60 text-sm">{method.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    {businessHours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between items-center">
                        <span className="text-white/80">{schedule.day}</span>
                        <span className="text-white font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">Response Times</h3>
                  <div className="space-y-3">
                    {responseTimes.map((response) => (
                      <div key={response.type} className="flex justify-between items-center">
                        <span className="text-white/80">{response.type}</span>
                        <span className="text-white font-medium">{response.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Why Choose Zion Tech Group?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span>Cutting-edge AI & ML solutions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span>Proven track record of success</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span>24/7 technical support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span>Scalable enterprise solutions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span>Competitive pricing & flexible terms</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and explore how our innovative solutions can drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: +1 (302) 464-0950</span>
                </a>
                <a
                  href="mailto:hello@ziontechgroup.com"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    setSubmitSuccess(true);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      title: 'General Inquiries',
      email: 'info@ziontechgroup.com',
      phone: '+1 (302) 464-0950',
      description: 'For general questions about our services and company'
    },
    {
      title: 'Sales & Partnerships',
      email: 'sales@ziontechgroup.com',
      phone: '+1 (302) 464-0951',
      description: 'For sales inquiries, pricing, and partnership opportunities'
    },
    {
      title: 'Technical Support',
      email: 'support@ziontechgroup.com',
      phone: '+1 (302) 464-0952',
      description: 'For technical support and implementation assistance'
    },
    {
      title: 'Media & Press',
      email: 'press@ziontechgroup.com',
      phone: '+1 (302) 464-0953',
      description: 'For media inquiries, press releases, and interviews'
    }
  ];

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 AI Innovation Drive, San Francisco, CA 94105',
      phone: '+1 (415) 555-0100'
    },
    {
      city: 'New York',
      address: '456 Quantum Avenue, New York, NY 10001',
      phone: '+1 (212) 555-0200'
    },
    {
      city: 'London',
      address: '789 Tech Square, London, UK EC1A 1BB',
      phone: '+44 20 7123 4567'
    },
    {
      city: 'Singapore',
      address: '321 Innovation Hub, Singapore 018956',
      phone: '+65 6789 0123'
    }
  ];

  if (submitSuccess) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-green-900/20 border border-green-500/20 rounded-2xl p-12">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
            <p className="text-xl text-gray-300 mb-8">
              Your message has been sent successfully. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Let's discuss how our cutting-edge solutions 
            can drive innovation and growth for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-white font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-white font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-white font-medium mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="ai-autonomous-systems">AI Autonomous Systems</option>
                  <option value="quantum-computing">Quantum Computing</option>
                  <option value="enterprise-ai">Enterprise AI Solutions</option>
                  <option value="research-development">Research & Development</option>
                  <option value="consulting">AI Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-black/20 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{info.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-purple-400">
                        <span className="mr-2">📧</span>
                        <a href={`mailto:${info.email}`} className="hover:text-purple-300 transition-colors duration-200">
                          {info.email}
                        </a>
                      </div>
                      <div className="flex items-center text-blue-400">
                        <span className="mr-2">📞</span>
                        <a href={`tel:${info.phone}`} className="hover:text-blue-300 transition-colors duration-200">
                          {info.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Office Locations</h2>
              <div className="space-y-4">
                {officeLocations.map((office, index) => (
                  <div key={index} className="bg-black/20 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-2">{office.city}</h3>
                    <p className="text-gray-300 text-sm mb-2">{office.address}</p>
                    <div className="flex items-center text-blue-400">
                      <span className="mr-2">📞</span>
                      <a href={`tel:${office.phone}`} className="hover:text-blue-300 transition-colors duration-200">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Response Time</h3>
              <p className="text-gray-300 text-sm">
                We typically respond to all inquiries within <span className="text-purple-400 font-semibold">24 hours</span>. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
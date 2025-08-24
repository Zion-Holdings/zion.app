'use client';

import { useState } from 'react';

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  const contactMethods = [
    {
      title: "Phone",
      value: "+1 (302) 464-0950",
      icon: "📞",
      description: "Call us directly for immediate assistance"
    },
    {
      title: "Email",
      value: "kleber@ziontechgroup.com",
      icon: "✉️",
      description: "Send us a detailed message"
    },
    {
      title: "Office Hours",
      value: "Mon-Fri: 9AM-6PM EST",
      icon: "🕒",
      description: "Available during business hours"
    },
    {
      title: "Location",
      value: "United States",
      icon: "📍",
      description: "Serving clients globally"
    }
  ];

  const services = [
    "AI Business Intelligence",
    "Autonomous Systems",
    "Digital Transformation",
    "AI Development",
    "Healthcare AI",
    "Financial AI",
    "Manufacturing AI",
    "Other"
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how our solutions 
            can help you achieve your goals and drive innovation.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6">
                <p className="text-green-400 text-center">
                  Thank you for your message! We'll get back to you within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project or how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{method.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {method.title}
                    </h3>
                    <p className="text-blue-400 font-medium mb-1">
                      {method.value}
                    </p>
                    <p className="text-slate-300 text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">
                Why Choose Zion Tech Group?
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Proven track record in AI implementation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Industry-specific expertise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>End-to-end solution delivery</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Ongoing support and maintenance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Measurable ROI and business impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 mt-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300">
              Common questions about our AI solutions and services.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
              <h3 className="text-xl font-semibold text-white mb-3">
                How quickly can you implement AI solutions?
              </h3>
              <p className="text-slate-300">
                Implementation timelines vary based on complexity, but we typically deliver initial results within 4-8 weeks. 
                Our agile approach ensures rapid deployment and continuous improvement.
              </p>
            </div>
            
            <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
              <h3 className="text-xl font-semibold text-white mb-3">
                What industries do you specialize in?
              </h3>
              <p className="text-slate-300">
                We have expertise across healthcare, finance, manufacturing, retail, and education. 
                Our solutions are adaptable to any industry that can benefit from AI automation.
              </p>
            </div>
            
            <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
              <h3 className="text-xl font-semibold text-white mb-3">
                Do you provide ongoing support after implementation?
              </h3>
              <p className="text-slate-300">
                Yes, we offer comprehensive support packages including maintenance, updates, 
                and continuous optimization to ensure your AI solutions remain effective.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
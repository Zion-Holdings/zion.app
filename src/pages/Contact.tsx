import React, { useState } from 'react';
import { SEO } from '@/components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactMethods = [
    {
      title: 'General Inquiries',
      description: 'For general questions about our services',
      email: 'info@ziontechgroup.com',
      phone: '+1 (234) 567-890',
      icon: '📧'
    },
    {
      title: 'Sales & Business',
      description: 'For sales inquiries and business development',
      email: 'sales@ziontechgroup.com',
      phone: '+1 (234) 567-891',
      icon: '💼'
    },
    {
      title: 'Technical Support',
      description: 'For technical questions and support',
      email: 'support@ziontechgroup.com',
      phone: '+1 (234) 567-892',
      icon: '🔧'
    },
    {
      title: 'Partnerships',
      description: 'For partnership and collaboration opportunities',
      email: 'partnerships@ziontechgroup.com',
      phone: '+1 (234) 567-893',
      icon: '🤝'
    }
  ];

  const officeLocations = [
    {
      city: 'New York',
      country: 'United States',
      address: '123 Tech Plaza, Suite 500',
      cityState: 'New York, NY 10001',
      phone: '+1 (234) 567-890',
      email: 'nyc@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      icon: '🗽'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '456 Innovation Street, Floor 3',
      cityState: 'London, EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT',
      icon: '🇬🇧'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '789 Digital Hub, Level 4',
      cityState: 'Singapore 018956',
      phone: '+65 6789 0123',
      email: 'singapore@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT',
      icon: '🇸🇬'
    },
    {
      city: 'Toronto',
      country: 'Canada',
      address: '321 Tech Avenue, Suite 200',
      cityState: 'Toronto, ON M5V 2H1',
      phone: '+1 (416) 234-5678',
      email: 'toronto@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      icon: '🍁'
    }
  ];

  const socialMedia = [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/ziontechgroup',
      icon: '💼',
      handle: '@ziontechgroup'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/ziontechgroup',
      icon: '🐦',
      handle: '@ziontechgroup'
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/ziontechgroup',
      icon: '📘',
      handle: 'Zion Tech Group'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/ziontechgroup',
      icon: '📷',
      handle: '@ziontechgroup'
    }
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
        subject: '',
        message: '',
        preferredContact: 'email'
      });
    }, 5000);
  };

  const faqs = [
    {
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer comprehensive IT solutions including web development, mobile apps, cloud migration, cybersecurity, data analytics, AI/ML solutions, and Green IT services.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex enterprise solutions can take 3-6 months or more. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer various support packages including maintenance, updates, monitoring, and 24/7 support depending on your needs.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work across industries including healthcare, finance, manufacturing, retail, education, and government, with specialized solutions for each sector.'
    }
  ];

  if (submitSuccess) {
    return (
      <>
        <SEO 
          title="Message Sent - Contact Zion Tech Group"
          description="Thank you for your message. We'll get back to you soon."
          canonical="/contact"
        />
        
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-12">
                <div className="text-6xl mb-6">✅</div>
                <h1 className="text-4xl font-bold text-white mb-6">
                  Message Sent Successfully!
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Thank you for reaching out to Zion Tech Group. We've received your message 
                  and will respond within 24 hours during business days.
                </p>
                <div className="space-y-4 text-blue-200">
                  <p>What happens next:</p>
                  <ul className="text-left max-w-md mx-auto space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      We'll review your message
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Route to appropriate team member
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Send detailed response
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Follow up if needed
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <a
                    href="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Return to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Contact Us - Get in Touch - Zion Tech Group"
        description="Contact Zion Tech Group for IT solutions, support, or business inquiries. Reach our expert team through multiple channels and locations worldwide."
        canonical="/contact"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Ready to transform your business with cutting-edge technology solutions? 
                Contact our expert team today. We're here to help you succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-white font-medium mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-white font-medium mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="What is this about?"
                        />
                      </div>
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
                        rows={6}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your project, question, or how we can help..."
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-3">
                        Preferred Contact Method
                      </label>
                      <div className="flex space-x-6">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="text-blue-200 text-sm">Email</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="text-blue-200 text-sm">Phone</span>
                        </label>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white py-4 px-8 rounded-lg font-medium transition-colors duration-200 text-lg disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Contact Methods
                  </h3>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="border-b border-white/10 pb-3 last:border-b-0">
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{method.icon}</div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium text-sm">
                              {method.title}
                            </h4>
                            <p className="text-blue-200 text-xs mb-2">
                              {method.description}
                            </p>
                            <div className="space-y-1">
                              <p className="text-blue-300 text-xs">
                                📧 <a href={`mailto:${method.email}`} className="hover:text-blue-200">
                                  {method.email}
                                </a>
                              </p>
                              <p className="text-blue-300 text-xs">
                                📞 <a href={`tel:${method.phone}`} className="hover:text-blue-200">
                                  {method.phone}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Follow Us
                  </h3>
                  <div className="space-y-3">
                    {socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                      >
                        <div className="text-2xl">{social.icon}</div>
                        <div>
                          <p className="text-white font-medium text-sm">
                            {social.platform}
                          </p>
                          <p className="text-blue-200 text-xs">
                            {social.handle}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="mt-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Our Global Offices
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {officeLocations.map((office, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4 text-center">{office.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">
                      {office.city}
                    </h3>
                    <p className="text-blue-200 text-sm text-center mb-4">
                      {office.country}
                    </p>
                    <div className="space-y-3 text-sm">
                      <p className="text-blue-100">
                        📍 {office.address}<br />
                        {office.cityState}
                      </p>
                      <p className="text-white">
                        📞 <a href={`tel:${office.phone}`} className="text-blue-300 hover:text-blue-200">
                          {office.phone}
                        </a>
                      </p>
                      <p className="text-white">
                        📧 <a href={`mailto:${office.email}`} className="text-blue-300 hover:text-blue-200">
                          {office.email}
                        </a>
                      </p>
                      <p className="text-blue-200 text-xs">
                        🕒 {office.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mt-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-blue-200 text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg border border-blue-500/30 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Let's discuss your project and how we can help you achieve your goals. 
                  Contact us today for a free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/request-quote"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Request a Quote
                  </a>
                  <a
                    href="/services"
                    className="border border-blue-500/50 hover:bg-blue-500/20 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    View Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;

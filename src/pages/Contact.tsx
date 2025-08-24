import { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      title: 'General Inquiries',
      description: 'For general questions about our services',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      icon: '📧',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Sales & Business',
      description: 'For sales inquiries and business development',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      icon: '💼',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'Technical Support',
      description: 'For technical questions and support',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      icon: '🔧',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Partnerships',
      description: 'For partnership and collaboration opportunities',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      icon: '🤝',
      color: 'from-orange-500/20 to-red-500/20'
    }
  ];

  const officeLocations = [
    {
      city: 'Middletown',
      country: 'United States',
      address: '364 E Main St STE 1008',
      cityState: 'Middletown, DE 19709',
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      icon: '🗽',
      color: 'from-blue-500/20 to-indigo-500/20'
    }
  ];

  const socialMedia = [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/ziontechgroup',
      icon: '💼',
      handle: '@ziontechgroup',
      color: 'from-blue-600 to-blue-700'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/ziontechgroup',
      icon: '🐦',
      handle: '@ziontechgroup',
      color: 'from-sky-500 to-sky-600'
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/ziontechgroup',
      icon: '📘',
      handle: '@ziontechgroup',
      color: 'from-blue-600 to-blue-700'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/ziontechgroup',
      icon: '📷',
      handle: '@ziontechgroup',
      color: 'from-pink-500 to-purple-600'
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

  const handleContactMethod = (method: string, value: string) => {
    if (method === 'email') {
      window.open(`mailto:${value}`, '_blank');
    } else if (method === 'phone') {
      window.open(`tel:${value}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Zion Tech Group. We're here to help with your technology needs, from AI services to custom development solutions."
        keywords="contact, support, inquiry, Zion Tech Group, technology services, AI services"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Get In Touch
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? Let's discuss your project and find the perfect solution together.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "24/7", label: "Support Available", icon: "🔄" },
                { number: "< 2hrs", label: "Response Time", icon: "⚡" },
                { number: "100%", label: "Client Satisfaction", icon: "😊" },
                { number: "500+", label: "Projects Delivered", icon: "🚀" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-2 animate-bounce">{stat.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs. Our team is ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${method.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm">{method.description}</p>
                  
                  <div className="space-y-3">
                    <button
                      onClick={() => handleContactMethod('email', method.email)}
                      className="w-full bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-400 transition-colors font-medium text-sm"
                    >
                      Send Email
                    </button>
                    <button
                      onClick={() => handleContactMethod('phone', method.phone)}
                      className="w-full bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors font-medium text-sm"
                    >
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 2 hours. Let's start building something amazing together.
            </p>
          </div>

          {submitSuccess ? (
            <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-bold text-green-400 mb-4">Message Sent Successfully!</h3>
              <p className="text-green-300 text-lg">
                Thank you for reaching out. We've received your message and will get back to you within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
                    placeholder="Enter your company name"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
                    placeholder="What is this about?"
                  />
                </div>
              </div>

              <div className="mb-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm resize-none"
                  placeholder="Tell us about your project, requirements, or any questions you have..."
                />
              </div>

              <div className="mb-8">
                <label className="block text-white font-medium mb-3">
                  Preferred Contact Method
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                      className="mr-2 text-cyan-500 focus:ring-cyan-500"
                    />
                    <span className="text-white">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleInputChange}
                      className="mr-2 text-cyan-500 focus:ring-cyan-500"
                    />
                    <span className="text-white">Phone</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Located in the heart of Delaware, our office is easily accessible and ready to welcome you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {officeLocations.map((location, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${location.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {location.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{location.city}, {location.country}</h3>
                      <p className="text-gray-300 mb-4">{location.address}</p>
                      <p className="text-gray-300 mb-6">{location.cityState}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Contact</h4>
                          <p className="text-gray-300 text-sm">{location.phone}</p>
                          <p className="text-gray-300 text-sm">{location.email}</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Hours</h4>
                          <p className="text-gray-300 text-sm">{location.hours}</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => handleContactMethod('phone', location.phone)}
                          className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-400 transition-colors font-medium"
                        >
                          Call Office
                        </button>
                        <button
                          onClick={() => handleContactMethod('email', location.email)}
                          className="bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-colors font-medium"
                        >
                          Send Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow us on social media for the latest updates, insights, and technology trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMedia.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-r ${platform.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{platform.platform}</h3>
                  <p className="text-white/80 text-sm">{platform.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Don't wait to transform your business. Get in touch today and let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

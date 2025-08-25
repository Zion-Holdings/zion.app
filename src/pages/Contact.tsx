import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
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
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      description: 'Get a quick response within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (302) 464-0950',
      link: 'tel:+13024640950',
      description: 'Available Monday-Friday, 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '364 E Main St STE 1008, Middletown, DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      description: 'Main office location'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      link: null,
      description: 'Weekend support available for urgent matters'
    }
  ];

  const services = [
    'Custom Software Development',
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Cybersecurity',
    'Digital Transformation',
    'Data Analytics',
    'Mobile App Development',
    'Enterprise Solutions',
    'IT Consulting',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Ready to transform your business? Let's discuss how our technology 
              solutions can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Multiple ways to reach us. We're here to help with all your technology needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <info.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {info.title}
                </h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-zion-cyan hover:text-zion-cyan-light font-medium mb-2 block transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-zion-slate font-medium mb-2">
                    {info.value}
                  </p>
                )}
                <p className="text-zion-slate-light text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-zion-slate max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours. 
                Let's discuss your project requirements and how we can help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zion-blue-dark mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                  placeholder="Tell us about your project or how we can help..."
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800">
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Prefer a different approach? We offer multiple ways to get in touch and start your project.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">
                Live Chat
              </h3>
              <p className="text-zion-slate mb-6">
                Get instant answers to your questions with our live chat support during business hours.
              </p>
              <button className="px-6 py-2 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors">
                Start Chat
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">
                Schedule a Call
              </h3>
              <p className="text-zion-slate mb-6">
                Book a convenient time for a detailed discussion about your project requirements.
              </p>
              <Link 
                to="/request-quote"
                className="inline-block px-6 py-2 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Book Call
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">
                Request Quote
              </h3>
              <p className="text-zion-slate mb-6">
                Get a detailed quote for your specific project requirements and timeline.
              </p>
              <Link 
                to="/request-quote"
                className="inline-block px-6 py-2 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Quick answers to common questions about working with Zion Tech Group.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-zinc-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                How quickly do you respond to inquiries?
              </h3>
              <p className="text-zion-slate">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, we can provide faster response times.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                Do you offer free consultations?
              </h3>
              <p className="text-zion-slate">
                Yes, we offer free initial consultations to discuss your project requirements 
                and determine how we can best help you achieve your goals.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                What industries do you specialize in?
              </h3>
              <p className="text-zion-slate">
                We work across multiple industries including healthcare, finance, manufacturing, 
                retail, education, government, and technology. Our solutions are adaptable to any sector.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                How do you ensure project quality and security?
              </h3>
              <p className="text-zion-slate">
                We follow industry best practices, conduct thorough testing, implement security 
                measures, and provide ongoing support to ensure your solutions are robust and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Don't wait to transform your business. Contact us today and let's discuss 
            how our technology solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Get Free Quote
            </Link>
            <a 
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

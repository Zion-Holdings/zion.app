import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const ContactPage: NextPage = () => {
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
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
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
  );
};

export default ContactPage;
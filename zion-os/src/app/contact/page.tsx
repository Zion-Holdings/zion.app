import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact Us - Zion Tech Group',
  description: 'Get in touch with Zion Tech Group. Contact our team for AI solutions, consultations, and support.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'General Inquiries',
      email: 'info@ziontechgroup.com',
      phone: '+1 (555) 123-4567',
      description: 'For general questions about our services and company'
    },
    {
      title: 'Sales & Business Development',
      email: 'sales@ziontechgroup.com',
      phone: '+1 (555) 123-4568',
      description: 'Discuss partnership opportunities and business development'
    },
    {
      title: 'Technical Support',
      email: 'support@ziontechgroup.com',
      phone: '+1 (555) 999-8888',
      description: 'Get help with our products and technical issues'
    },
    {
      title: 'Research Collaborations',
      email: 'research@ziontechgroup.com',
      phone: '+1 (555) 123-4569',
      description: 'Explore research partnerships and academic collaborations'
    }
  ];

  const officeLocations = [
    {
      city: 'San Francisco, CA',
      address: '123 Innovation Drive, Suite 100',
      zip: '94105',
      country: 'United States',
      type: 'Headquarters'
    },
    {
      city: 'New York, NY',
      address: '456 Tech Avenue, Floor 15',
      zip: '10001',
      country: 'United States',
      type: 'East Coast Office'
    },
    {
      city: 'London, UK',
      address: '789 Innovation Street',
      zip: 'EC1A 1BB',
      country: 'United Kingdom',
      type: 'European Office'
    }
  ];

  const faqs = [
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including financial services, healthcare, manufacturing, retail, and technology. Our AI solutions are designed to be adaptable across different business domains.'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation timelines vary depending on the complexity of the solution. Simple AI integrations can take 4-8 weeks, while comprehensive enterprise solutions may take 3-6 months. We provide detailed project timelines during the planning phase.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we provide comprehensive ongoing support including 24/7 technical support, regular updates, performance monitoring, and continuous improvement services. We offer various support packages to meet your needs.'
    },
    {
      question: 'What makes your AI solutions different?',
      answer: 'Our AI solutions are built on cutting-edge research in artificial consciousness and autonomous systems. We focus on creating AI that works alongside humans, not just automation, but intelligent collaboration that enhances human capabilities.'
    },
    {
      question: 'Can you work with existing systems?',
      answer: 'Absolutely. We specialize in integrating our AI solutions with existing enterprise systems. Our team conducts thorough assessments to ensure seamless integration while maintaining your current workflows and data security.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch with our team 
            of experts to discuss your needs and explore solutions.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{info.description}</p>
                    <div className="space-y-2">
                      <a
                        href={`mailto:${info.email}`}
                        className="block text-blue-600 hover:text-blue-700 font-medium"
                      >
                        📧 {info.email}
                      </a>
                      <a
                        href={`tel:${info.phone}`}
                        className="block text-blue-600 hover:text-blue-700 font-medium"
                      >
                        📞 {info.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p className="text-gray-700 mb-2">Saturday: 10:00 AM - 2:00 PM PST</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                  <p className="text-sm text-gray-500 mt-3">
                    Emergency support available 24/7 for critical issues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our global locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-2xl">📍</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{office.city}</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {office.type}
                  </span>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-700 mb-1">{office.address}</p>
                  <p className="text-gray-700 mb-1">{office.city}, {office.zip}</p>
                  <p className="text-gray-700">{office.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our services and company
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait to transform your business with AI. Contact us today to 
            schedule a consultation and explore how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-555-123-4567"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
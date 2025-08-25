import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe,
  MessageSquare,
  Send,
  CheckCircle,
  Star,
  Users,
  Award,
  Zap
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        message: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 302 464 0950",
      link: "tel:+13024640950",
      description: "Call us directly for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com",
      description: "Send us an email for detailed inquiries"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      link: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      description: "Visit our office for in-person meetings"
    },
    {
      icon: Globe,
      title: "Website",
      value: "https://ziontechgroup.com",
      link: "https://ziontechgroup.com",
      description: "Explore our services and solutions"
    }
  ];

  const services = [
    "AI Workflow Automation",
    "Quantum Computing as a Service",
    "AI Cybersecurity Platform",
    "Edge Computing Platform",
    "Micro SAAS Solutions",
    "AI Business Intelligence",
    "Cloud & DevOps",
    "Enterprise Solutions",
    "Digital Transformation",
    "Custom Development"
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
  ];

  const responseTimes = [
    { type: "Phone Calls", time: "Immediate" },
    { type: "Emails", time: "Within 2 hours" },
    { type: "Contact Form", time: "Within 4 hours" },
    { type: "Support Tickets", time: "Within 24 hours" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Contact Us - Zion Tech Group" 
        description="Get in touch with Zion Tech Group. Contact us for AI solutions, micro SAAS services, and innovative technology consulting. Call +1 302 464 0950 or email kleber@ziontechgroup.com"
        keywords="contact Zion Tech Group, AI consulting, micro SAAS services, technology consulting, Delaware tech company"
        canonical="https://ziontechgroup.com/contact"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-2xl text-zion-cyan mb-4 font-semibold">
            Let's Build Something Amazing Together
          </p>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge AI solutions, micro SAAS services, 
            and innovative technology? Contact us today and let's discuss how we can help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Multiple ways to reach us. We're here to help you succeed with innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {info.title}
                </h3>
                <a 
                  href={info.link} 
                  target={info.title === "Website" ? "_blank" : "_self"}
                  rel={info.title === "Website" ? "noopener noreferrer" : ""}
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold transition-colors block mb-2"
                >
                  {info.value}
                </a>
                <p className="text-zion-slate text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Response Times */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div>
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-zion-cyan" />
                Business Hours
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-zion-blue-light last:border-b-0">
                    <span className="font-semibold text-zion-blue-dark">{schedule.day}</span>
                    <span className="text-zion-slate">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Times */}
            <div>
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-zion-cyan" />
                Response Times
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                {responseTimes.map((response, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-zion-blue-light last:border-b-0">
                    <span className="font-semibold text-zion-blue-dark">{response.type}</span>
                    <span className="text-zion-cyan font-semibold">{response.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-zion-slate max-w-3xl mx-auto">
                Tell us about your project or inquiry. We'll get back to you within 4 hours 
                with a personalized response and next steps.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-green-700">
                  Thank you for contacting Zion Tech Group. We'll get back to you within 4 hours 
                  with a detailed response and next steps for your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-zion-blue-light rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-zion-blue-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-zion-blue-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-zion-blue-dark mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-zion-blue-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-semibold text-zion-blue-dark mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-semibold text-zion-blue-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
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
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Expert Team
              </h3>
              <p className="text-zion-slate">
                Our team of AI experts, software engineers, and business consultants bring 
                decades of combined experience to every project.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Proven Results
              </h3>
              <p className="text-zion-slate">
                We've helped hundreds of businesses achieve their digital transformation 
                goals with measurable ROI and lasting impact.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Innovation First
              </h3>
              <p className="text-zion-slate">
                We stay ahead of technology trends, ensuring your business benefits from 
                the latest innovations and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Don't wait to transform your business. Contact us today and let's discuss 
            how we can help you achieve your technology goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+13024640950"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-all flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
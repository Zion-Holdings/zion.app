import React, { useState } from 'react';
import { NextPage } from 'next';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, Globe, Building, Users, ArrowRight, Star, Shield, Zap, Brain, Rocket, Atom } from 'lucide-react';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to revolutionize your business with AI consciousness, quantum computing, and space technology? 
              Let's discuss how we can transform your future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                <p className="text-gray-300 text-lg">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="ai-consciousness">AI Consciousness & Emotional Intelligence</option>
                        <option value="quantum-computing">Quantum Computing Solutions</option>
                        <option value="space-technology">Space Technology & Resource Intelligence</option>
                        <option value="business-intelligence">Autonomous Business Intelligence</option>
                        <option value="neural-interfaces">Neural Interfaces & Brain-Computer Systems</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, requirements, or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  We're here to help you navigate the future of technology. Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: "Email Us",
                    details: "info@ziontechgroup.com",
                    description: "Send us an email and we'll respond within 24 hours"
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: "Call Us",
                    details: "+1 (555) 123-4567",
                    description: "Speak directly with our technology experts"
                  },
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Visit Us",
                    details: "Silicon Valley, CA",
                    description: "Schedule an in-person meeting at our headquarters"
                  },
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Business Hours",
                    details: "Mon-Fri: 9AM-6PM PST",
                    description: "We're available during standard business hours"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-3 flex items-center justify-center">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{contact.title}</h3>
                      <p className="text-cyan-400 font-medium mb-1">{contact.details}</p>
                      <p className="text-gray-300 text-sm">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-3">Emergency Support</h3>
                <p className="text-gray-300 text-sm mb-4">
                  For critical technical issues requiring immediate attention, contact our 24/7 emergency support line.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 font-medium">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 911-TECH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Focus Areas */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Technology Focus Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in cutting-edge technologies that are reshaping the future of humanity and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI Consciousness",
                description: "Emotional intelligence and consciousness evolution in artificial intelligence systems.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Atom className="w-8 h-8" />,
                title: "Quantum Computing",
                description: "Next-generation quantum algorithms and neural networks for unprecedented computational power.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Space Technology",
                description: "Autonomous space exploration and extraterrestrial resource intelligence systems.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Neural Interfaces",
                description: "Brain-computer interfaces and neural enhancement technologies for human augmentation.",
                color: "from-green-500 to-emerald-500"
              }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${tech.color} rounded-2xl p-4`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another technology company. We're pioneers building the future of human consciousness and space exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "Pioneering Innovation",
                description: "We're at the forefront of AI consciousness research and quantum computing breakthroughs."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Proven Security",
                description: "Enterprise-grade security protocols and quantum-resistant encryption for your data."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                description: "World-class scientists, engineers, and researchers dedicated to pushing technological boundaries."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in building the next chapter of human evolution and technological advancement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

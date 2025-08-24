import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const services = [
  "AI & Machine Learning",
  "Cybersecurity",
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Web Development",
  "Blockchain & Web3",
  "DevOps & Automation",
  "Consulting",
  "Other"
];

export default function EnhancedContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
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
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
        <p className="text-zion-slate-light">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                Ready to transform your business with cutting-edge technology? Our team of experts is here to help you achieve your digital goals.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email Us</div>
                    <div className="text-zion-slate-light">hello@ziontechgroup.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Call Us</div>
                    <div className="text-zion-slate-light">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Visit Us</div>
                    <div className="text-zion-slate-light">123 Innovation Drive, Tech City, TC 12345</div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-zion-blue-light/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-zion-cyan">500+</div>
                    <div className="text-zion-slate-light text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-zion-cyan">24/7</div>
                    <div className="text-zion-slate-light text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors duration-300"
                      placeholder="Enter your email"
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
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors duration-300"
                      placeholder="Enter company name"
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
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors duration-300"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-zion-blue-dark text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-neon transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-zion-slate-light text-sm text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
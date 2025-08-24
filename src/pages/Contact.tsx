import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      alert("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      name: "Headquarters",
      address: "364 E Main St STE 1008 Middletown DE 19709",
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    },
    {
      name: "Support Office",
      address: "364 E Main St STE 1008 Middletown DE 19709",
      phone: "+1 302 464 0950", 
      email: "support@ziontechgroup.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zion-blue mb-8">Contact Us</h1>
        <p className="text-lg text-zion-slate-light mb-8">
          Get in touch with our team for any questions or support.
        </p>
        
        <div className="max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-zion-slate mb-2">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-zion-slate mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-zion-slate mb-2">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate"
                placeholder="Subject"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>
            
            <div>
              <label className="block text-zion-slate mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate h-32"
                placeholder="Your message..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-zion-blue hover:bg-zion-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Office Information */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-zion-blue mb-8">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-zion-blue-dark p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">{office.name}</h3>
                <div className="space-y-2 text-zion-slate-light">
                  <p>{office.address}</p>
                  <p>Phone: {office.phone}</p>
                  <p>Email: {office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-slate-light mb-4">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex items-center gap-4 text-zion-slate-light">
                <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-zion-slate-light">
                <p>📱 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2">
                <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Comprehensive Services
                </a>
                <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  AI Services
                </a>
                <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Enterprise Solutions
                </a>
                <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Micro SAAS Services
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
            <p className="text-zion-slate-light text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
              <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

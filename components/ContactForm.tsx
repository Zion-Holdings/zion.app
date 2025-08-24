import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const validateField = useCallback((name: keyof ContactFormData, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Name is required';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return value.trim() ? (emailRegex.test(value) ? '' : 'Please enter a valid email') : 'Email is required';
      case 'company':
        return value.trim() ? '' : 'Company is required';
      case 'phone':
        return value.trim() ? '' : 'Phone is required';
      case 'service':
        return value.trim() ? '' : 'Please select a service';
      case 'message':
        return value.trim() ? (value.length >= 10 ? '' : 'Message must be at least 10 characters') : 'Message is required';
      default:
        return '';
    }
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors({ ...errors, [name]: '' });
    }
  }, [errors, formData]);

  const handleBlur = useCallback((name: keyof ContactFormData) => {
    const error = validateField(name, formData[name]);
    setErrors({ ...errors, [name]: error });
  }, [validateField, formData, errors]);

  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof ContactFormData;
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validateField]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm]);

  const inputClasses = "w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300";
  const errorClasses = "text-red-400 text-sm mt-1 flex items-center gap-2";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: isReducedMotion ? 0.1 : 0.6 }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Ready to transform your business with cutting-edge technology? Our experts are here to help you navigate the future.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center gap-3 text-gray-300">
          <Phone className="w-5 h-5 text-cyan-400" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <Mail className="w-5 h-5 text-cyan-400" />
          <span>contact@ziontechgroup.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <MapPin className="w-5 h-5 text-cyan-400" />
          <span>San Francisco, CA</span>
        </div>
      </div>

      {/* Business Hours */}
      <div className="flex items-center gap-3 text-gray-300 mb-8 justify-center">
        <Clock className="w-5 h-5 text-cyan-400" />
        <span>Mon-Fri: 9:00 AM - 6:00 PM PST</span>
      </div>

      {/* Form */}
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
              onChange={handleInputChange}
              onBlur={() => handleBlur('name')}
              className={inputClasses}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <div className={errorClasses}>
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </div>
            )}
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
              onChange={handleInputChange}
              onBlur={() => handleBlur('email')}
              className={inputClasses}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <div className={errorClasses}>
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              onBlur={() => handleBlur('company')}
              className={inputClasses}
              placeholder="Enter your company name"
            />
            {errors.company && (
              <div className={errorClasses}>
                <AlertCircle className="w-4 h-4" />
                {errors.company}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={() => handleBlur('phone')}
              className={inputClasses}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <div className={errorClasses}>
                <AlertCircle className="w-4 h-4" />
                {errors.phone}
              </div>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
            Service Interest *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            onBlur={() => handleBlur('service')}
            className={inputClasses}
          >
            <option value="">Select a service</option>
            <option value="ai-solutions">AI & Machine Learning</option>
            <option value="quantum-computing">Quantum Computing</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="cloud-solutions">Cloud Solutions</option>
            <option value="consulting">Technology Consulting</option>
            <option value="other">Other</option>
          </select>
          {errors.service && (
            <div className={errorClasses}>
              <AlertCircle className="w-4 h-4" />
              {errors.service}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={() => handleBlur('message')}
            rows={5}
            className={inputClasses}
            placeholder="Tell us about your project or how we can help..."
          />
          {errors.message && (
            <div className={errorClasses}>
              <AlertCircle className="w-4 h-4" />
              {errors.message}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-cyan-600 hover:to-blue-700'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
          >
            <AlertCircle className="w-5 h-5" />
            <span>Something went wrong. Please try again or contact us directly.</span>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
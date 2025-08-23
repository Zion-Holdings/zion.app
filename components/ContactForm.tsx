import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Building, MessageSquare, Send, CheckCircle, XCircle } from 'lucide-react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  budget: string;
  timeline: string;
}

interface ContactFormProps {
  className?: string;
  showServiceSelection?: boolean;
  showBudgetTimeline?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  className = '', 
  showServiceSelection = true,
  showBudgetTimeline = true 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const services = [
    { value: 'ai-consciousness', label: 'AI Consciousness Evolution', icon: '🧠' },
    { value: 'quantum-cybersecurity', label: 'Quantum Cybersecurity', icon: '🛡️' },
    { value: 'autonomous-content', label: 'AI Content Factory', icon: '🏭' },
    { value: 'quantum-supply-chain', label: 'Quantum Supply Chain', icon: '🚚' },
    { value: 'space-technology', label: 'Space Technology Solutions', icon: '🚀' },
    { value: 'custom', label: 'Custom Solution', icon: '⚡' }
  ];

  const budgets = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: 'over-500k', label: 'Over $500,000' }
  ];

  const timelines = [
    { value: 'immediate', label: 'Immediate (1-2 months)' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: '12-plus-months', label: '12+ months' }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (showServiceSelection && !formData.service) newErrors.service = 'Please select a service';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const InputField = ({ 
    label, 
    field, 
    type = 'text', 
    placeholder, 
    required = false,
    icon: Icon
  }: {
    label: string;
    field: keyof ContactFormData;
    type?: string;
    placeholder: string;
    required?: boolean;
    icon?: React.ComponentType<{ className?: string }>;
  }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        )}
        <input
          type={type}
          value={formData[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 ${
            Icon ? 'pl-10' : ''
          } ${errors[field] ? 'border-red-400' : 'border-gray-600'}`}
        />
      </div>
      {errors[field] && (
        <p className="text-sm text-red-400 flex items-center gap-2">
          <XCircle className="w-4 h-4" />
          {errors[field]}
        </p>
      )}
    </div>
  );

  const SelectField = ({ 
    label, 
    field, 
    options, 
    placeholder, 
    required = false 
  }: {
    label: string;
    field: keyof ContactFormData;
    options: Array<{ value: string; label: string; icon?: string }>;
    placeholder: string;
    required?: boolean;
  }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <select
        value={formData[field]}
        onChange={(e) => handleInputChange(field, e.target.value)}
        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 ${
          errors[field] ? 'border-red-400' : 'border-gray-600'
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-gray-800 text-white">
            {option.icon && `${option.icon} `}{option.label}
          </option>
        ))}
      </select>
      {errors[field] && (
        <p className="text-sm text-red-400 flex items-center gap-2">
          <XCircle className="w-4 h-4" />
          {errors[field]}
        </p>
      )}
    </div>
  );

  return (
    <div className={`bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700 rounded-2xl p-8 ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4"
        >
          <MessageSquare className="w-8 h-8 text-white" />
        </motion.div>
        <h2 className="text-3xl font-bold text-white mb-2">Get Started Today</h2>
        <p className="text-gray-300 max-w-md mx-auto">
          Ready to transform your business? Let's discuss how our cutting-edge technology solutions can drive your success.
        </p>
      </div>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span className="text-green-400">Thank you! We'll get back to you within 24 hours.</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg flex items-center gap-3"
        >
          <XCircle className="w-5 h-5 text-red-400" />
          <span className="text-red-400">Something went wrong. Please try again or contact us directly.</span>
        </motion.div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="First Name"
            field="firstName"
            placeholder="Enter your first name"
            required
            icon={Mail}
          />
          <InputField
            label="Last Name"
            field="lastName"
            placeholder="Enter your last name"
            required
            icon={Mail}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Email"
            field="email"
            type="email"
            placeholder="your.email@company.com"
            required
            icon={Mail}
          />
          <InputField
            label="Phone"
            field="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            icon={Phone}
          />
        </div>

        <InputField
          label="Company"
          field="company"
          placeholder="Your company name"
          required
          icon={Building}
        />

        {showServiceSelection && (
          <SelectField
            label="Service Interest"
            field="service"
            options={services}
            placeholder="Select a service that interests you"
            required
          />
        )}

        {showBudgetTimeline && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="Budget Range"
              field="budget"
              options={budgets}
              placeholder="Select your budget range"
            />
            <SelectField
              label="Timeline"
              field="timeline"
              options={timelines}
              placeholder="Select your timeline"
            />
          </div>
        )}

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="Tell us about your project, challenges, and goals..."
            rows={4}
            className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 ${
              errors.message ? 'border-red-400' : 'border-gray-600'
            }`}
          />
          {errors.message && (
            <p className="text-sm text-red-400 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 ${
            isSubmitting 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg hover:shadow-cyan-500/25'
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
      </form>

      {/* Contact Information */}
      <div className="mt-8 pt-8 border-t border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-white font-medium">+1 302 464 0950</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white font-medium">kleber@ziontechgroup.com</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-white font-medium">Middletown, DE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
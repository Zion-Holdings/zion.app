import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Shield, Zap, Target, Award, Globe, Users, Calculator, DollarSign, Clock, CheckCircle, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import Layout from '../components/layout/Layout';

const serviceCategories = [
  {
    id: 'ai-consciousness',
    name: 'AI & Consciousness',
    description: 'AI consciousness, emotional intelligence, and autonomous systems',
    icon: <Brain className="w-8 h-8" />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    services: [
      'AI Customer Success Platform',
      'AI Sales Intelligence',
      'AI Financial Planning',
      'AI Decision Engine',
      'AI Content Automation',
      'AI HR Analytics'
    ]
  },
  {
    id: 'quantum-tech',
    name: 'Quantum & Emerging Tech',
    description: 'Quantum computing, space technology, and breakthrough innovations',
    icon: <Rocket className="w-8 h-8" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    services: [
      'Quantum Cybersecurity Platform',
      'Space Resource Mining',
      'Quantum Internet Security',
      'Brain-Computer Interface',
      'Quantum Energy Platform',
      'AI-Powered Space Technology'
    ]
  },
  {
    id: 'enterprise-it',
    name: 'Enterprise IT',
    description: 'Advanced infrastructure, security, and automation solutions',
    icon: <Shield className="w-8 h-8" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    services: [
      'Zero Trust Security',
      'Autonomous IT Operations',
      'Edge Computing Orchestration',
      'AI-Powered DevOps',
      'Quantum Cloud Infrastructure',
      'Blockchain Infrastructure'
    ]
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    description: 'Innovative business tools and automation platforms',
    icon: <Zap className="w-8 h-8" />,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    services: [
      'Supply Chain Optimization',
      'CRM Intelligence Suite',
      'Content Automation Platform',
      'SEO Automation Suite',
      'IT Asset Discovery Agent',
      'Managed Postgres HA'
    ]
  }
];

const projectTypes = [
  {
    id: 'new-implementation',
    name: 'New Implementation',
    description: 'Starting from scratch with our services',
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 'integration',
    name: 'Integration',
    description: 'Integrating with existing systems',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 'upgrade',
    name: 'Upgrade/Migration',
    description: 'Upgrading or migrating existing solutions',
    icon: <ArrowRight className="w-6 h-6" />
  },
  {
    id: 'consulting',
    name: 'Consulting',
    description: 'Strategic advice and planning',
    icon: <Users className="w-6 h-6" />
  }
];

const timelineOptions = [
  { value: '1-3 months', label: '1-3 months' },
  { value: '3-6 months', label: '3-6 months' },
  { value: '6-12 months', label: '6-12 months' },
  { value: '12+ months', label: '12+ months' },
  { value: 'flexible', label: 'Flexible timeline' }
];

const budgetRanges = [
  { value: 'under-50k', label: 'Under $50K' },
  { value: '50k-100k', label: '$50K - $100K' },
  { value: '100k-250k', label: '$100K - $250K' },
  { value: '250k-500k', label: '$250K - $500K' },
  { value: '500k-1m', label: '$500K - $1M' },
  { value: 'over-1m', label: 'Over $1M' },
  { value: 'custom', label: 'Custom budget' }
];

export default function Quote() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: '',
    selectedServices: [],
    selectedCategories: []
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCategoryToggle = (categoryId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(categoryId)
        ? prev.selectedCategories.filter(id => id !== categoryId)
        : [...prev.selectedCategories, categoryId]
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to thank you page
    window.location.href = '/thank-you';
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Basic Information</h3>
        <p className="text-gray-300 mb-6">Tell us about yourself and your company</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-300 mb-2">First Name *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Last Name *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-300 mb-2">Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Company *</label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
          placeholder="Enter your company name"
          required
        />
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Project Details</h3>
        <p className="text-gray-300 mb-6">Tell us about your project requirements</p>
      </div>

      <div>
        <label className="block text-gray-300 mb-4">Project Type *</label>
        <div className="grid md:grid-cols-2 gap-4">
          {projectTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => handleInputChange('projectType', type.id)}
              className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                formData.projectType === type.id
                  ? 'border-cyan-500 bg-cyan-500/10'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-cyan-400">{type.icon}</div>
                <div>
                  <div className="font-semibold text-white">{type.name}</div>
                  <div className="text-sm text-gray-400">{type.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-300 mb-2">Timeline *</label>
          <select
            value={formData.timeline}
            onChange={(e) => handleInputChange('timeline', e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            required
          >
            <option value="">Select timeline</option>
            {timelineOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Budget Range *</label>
          <select
            value={formData.budget}
            onChange={(e) => handleInputChange('budget', e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            required
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Project Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
          placeholder="Describe your project, goals, and requirements..."
        />
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Service Categories</h3>
        <p className="text-gray-300 mb-6">Select the categories that interest you</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {serviceCategories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryToggle(category.id)}
            className={`p-6 border rounded-xl cursor-pointer transition-all duration-300 ${
              formData.selectedCategories.includes(category.id)
                ? 'border-cyan-500 bg-cyan-500/10'
                : 'border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`${category.bgColor} w-12 h-12 rounded-xl flex items-center justify-center`}>
                <div className={category.color}>{category.icon}</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{category.name}</h4>
                <p className="text-sm text-gray-400">{category.description}</p>
              </div>
            </div>
            
            {formData.selectedCategories.includes(category.id) && (
              <div className="space-y-2">
                <p className="text-sm text-cyan-400 font-medium">Available Services:</p>
                <div className="grid grid-cols-1 gap-2">
                  {category.services.map((service, index) => (
                    <div
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceToggle(service);
                      }}
                      className={`flex items-center gap-2 p-2 rounded text-sm cursor-pointer transition-colors ${
                        formData.selectedServices.includes(service)
                          ? 'bg-cyan-500/20 text-cyan-300'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      <CheckCircle className={`w-4 h-4 ${
                        formData.selectedServices.includes(service) ? 'text-cyan-400' : 'text-gray-500'
                      }`} />
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderStep4 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Review & Submit</h3>
        <p className="text-gray-300 mb-6">Review your information before submitting</p>
      </div>

      <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-white mb-4">Project Summary</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div>
              <span className="text-gray-400">Name:</span>
              <span className="text-white ml-2">{formData.firstName} {formData.lastName}</span>
            </div>
            <div>
              <span className="text-gray-400">Company:</span>
              <span className="text-white ml-2">{formData.company}</span>
            </div>
            <div>
              <span className="text-gray-400">Email:</span>
              <span className="text-white ml-2">{formData.email}</span>
            </div>
            <div>
              <span className="text-gray-400">Project Type:</span>
              <span className="text-white ml-2">{projectTypes.find(t => t.id === formData.projectType)?.name}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <span className="text-gray-400">Timeline:</span>
              <span className="text-white ml-2">{timelineOptions.find(t => t.value === formData.timeline)?.label}</span>
            </div>
            <div>
              <span className="text-gray-400">Budget:</span>
              <span className="text-white ml-2">{budgetRanges.find(b => b.value === formData.budget)?.label}</span>
            </div>
            <div>
              <span className="text-gray-400">Categories:</span>
              <span className="text-white ml-2">{formData.selectedCategories.length} selected</span>
            </div>
            <div>
              <span className="text-gray-400">Services:</span>
              <span className="text-white ml-2">{formData.selectedServices.length} selected</span>
            </div>
          </div>
        </div>

        {formData.description && (
          <div className="mt-6 pt-6 border-t border-gray-700">
            <span className="text-gray-400">Description:</span>
            <p className="text-white mt-2">{formData.description}</p>
          </div>
        )}
      </div>

      <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <Calculator className="w-6 h-6 text-cyan-400" />
          <h4 className="text-lg font-semibold text-white">What Happens Next?</h4>
        </div>
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>We'll review your request within 24 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Receive a detailed proposal and quote</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Schedule a consultation call to discuss details</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            <span>Begin your transformation journey</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Get Your Quote
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business with revolutionary AI consciousness, quantum computing, 
                and autonomous systems? Let's discuss your project and provide a customized quote.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-black/40 border border-gray-800 rounded-2xl p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                        step <= currentStep
                          ? 'bg-cyan-500 text-black'
                          : 'bg-gray-700 text-gray-400'
                      }`}>
                        {step}
                      </div>
                      {step < 4 && (
                        <div className={`w-16 h-1 mx-2 ${
                          step < currentStep ? 'bg-cyan-500' : 'bg-gray-700'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center text-sm text-gray-400">
                  Step {currentStep} of 4
                </div>
              </div>

              {/* Form Steps */}
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
                {currentStep === 4 && renderStep4()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300"
                    >
                      Previous
                    </button>
                  )}
                  
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Need Immediate Assistance?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is ready to help you get started on your transformation journey.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
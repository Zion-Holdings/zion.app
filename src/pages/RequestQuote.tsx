import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  companySize: string;
  industry: string;
  projectType: string[];
  budget: string;
  timeline: string;
  description: string;
  preferredContact: string;
  urgency: string;
}

const RequestQuote = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    projectType: [],
    budget: '',
    timeline: '',
    description: '',
    preferredContact: 'email',
    urgency: 'medium'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Non-profit',
    'Real Estate',
    'Other'
  ];

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'Cloud Migration',
    'IT Infrastructure',
    'Cybersecurity',
    'Data Analytics',
    'AI/ML Solutions',
    'Green IT Solutions',
    'Digital Transformation',
    'Custom Software',
    'Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000+'
  ];

  const timelineOptions = [
    'ASAP',
    '1-2 weeks',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low', description: 'Planning phase, no immediate deadline', color: 'from-green-500/20 to-emerald-500/20' },
    { value: 'medium', label: 'Medium', description: 'Standard project timeline', color: 'from-yellow-500/20 to-orange-500/20' },
    { value: 'high', label: 'High', description: 'Urgent, need to start soon', color: 'from-orange-500/20 to-red-500/20' },
    { value: 'critical', label: 'Critical', description: 'Emergency, immediate attention required', color: 'from-red-500/20 to-pink-500/20' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof FormData]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      projectType: checked
        ? [...prev.projectType, value]
        : prev.projectType.filter(type => type !== value)
    }));
    
    // Clear error when user makes selection
    if (formErrors.projectType) {
      setFormErrors(prev => ({
        ...prev,
        projectType: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) errors.company = 'Company name is required';
    if (!formData.companySize) errors.companySize = 'Company size is required';
    if (!formData.industry) errors.industry = 'Industry is required';
    if (formData.projectType.length === 0) errors.projectType = 'Please select at least one project type';
    if (!formData.budget) errors.budget = 'Budget range is required';
    if (!formData.timeline) errors.timeline = 'Timeline is required';
    if (!formData.description.trim()) errors.description = 'Project description is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        companySize: '',
        industry: '',
        projectType: [],
        budget: '',
        timeline: '',
        description: '',
        preferredContact: 'email',
        urgency: 'medium'
      });
      setFormErrors({});
      setCurrentStep(1);
    }, 5000);
  };

  const whyChooseZion = [
    {
      title: 'Expert Team',
      description: 'Experienced developers and consultants with proven track records',
      icon: '👥',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored approaches that fit your specific business needs',
      icon: '🎯',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes',
      icon: '✅',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous support and maintenance after project completion',
      icon: '🔄',
      color: 'from-orange-500/20 to-red-500/20'
    }
  ];

  const nextSteps = [
    {
      step: '1',
      title: 'Submit Quote Request',
      description: 'Fill out the form below with your project details',
      icon: '📝'
    },
    {
      step: '2',
      title: 'Consultation Call',
      description: 'We\'ll schedule a call to discuss your requirements in detail',
      icon: '📞'
    },
    {
      step: '3',
      title: 'Custom Proposal',
      description: 'Receive a detailed proposal tailored to your specific needs',
      icon: '📋'
    },
    {
      step: '4',
      title: 'Project Kickoff',
      description: 'Begin your project with our expert team',
      icon: '🚀'
    }
  ];

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4">
        <SEO 
          title="Quote Request Submitted - Zion Tech Group"
          description="Thank you for your quote request. We'll get back to you soon with a custom proposal."
        />
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-500/20 backdrop-blur-sm rounded-2xl border border-green-500/50 p-12">
            <div className="text-6xl mb-6 animate-bounce">🎉</div>
            <h1 className="text-4xl font-bold text-green-400 mb-6">
              Quote Request Submitted Successfully!
            </h1>
            <p className="text-xl text-green-300 mb-8">
              Thank you for reaching out to Zion Tech Group. We've received your project details 
              and will respond within 2 hours with a custom proposal.
            </p>
            
            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-white font-semibold mb-4">What happens next:</h3>
              <div className="space-y-3 text-left max-w-md mx-auto">
                {[
                  'We\'ll review your project requirements',
                  'Schedule a consultation call within 24 hours',
                  'Prepare a custom proposal and timeline',
                  'Discuss pricing and next steps'
                ].map((step, index) => (
                  <div key={index} className="flex items-center text-green-300">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
              >
                Return to Home
              </a>
              <a
                href="/contact"
                className="border border-green-500 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <SEO 
        title="Request a Quote - Zion Tech Group"
        description="Get a custom quote for your technology project. Our experts will provide a detailed proposal tailored to your specific needs."
        keywords="quote request, project proposal, custom development, IT services, AI services, technology consulting"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Get Your Custom Quote
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? Let's discuss your project 
              and create a custom solution that fits your budget and timeline.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "2hrs", label: "Response Time", icon: "⚡" },
                { number: "100%", label: "Custom Proposals", icon: "📋" },
                { number: "Free", label: "Consultation", icon: "💬" },
                { number: "500+", label: "Projects Delivered", icon: "🚀" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-2 animate-bounce">{stat.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zion Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseZion.map((reason, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${reason.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                  <p className="text-gray-300 text-sm">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, transparent process from initial contact to project completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nextSteps.map((step, index) => (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {step.step}
                </div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request Your Custom Quote
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 2 hours with a detailed proposal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-cyan-400 mr-3">👤</span>
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-white font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm ${
                      formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your first name"
                  />
                  {formErrors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-white font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm ${
                      formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your last name"
                  />
                  {formErrors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {formErrors.email && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-cyan-400 mr-3">🏢</span>
                Company Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm ${
                      formErrors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your company name"
                  />
                  {formErrors.company && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.company}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="companySize" className="block text-white font-medium mb-2">
                    Company Size *
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm ${
                      formErrors.companySize ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select company size</option>
                    {companySizes.map((size, index) => (
                      <option key={index} value={size}>{size}</option>
                    ))}
                  </select>
                  {formErrors.companySize && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.companySize}</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="industry" className="block text-white font-medium mb-2">
                  Industry *
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm ${
                    formErrors.industry ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select your industry</option>
                  {industries.map((industry, index) => (
                    <option key={index} value={industry}>{industry}</option>
                  ))}
                </select>
                {formErrors.industry && (
                  <p className="text-red-400 text-sm mt-1">{formErrors.industry}</p>
                )}
              </div>
            </div>

            {/* Project Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-cyan-400 mr-3">🚀</span>
                Project Information
              </h3>
              
              <div className="mb-6">
                <label className="block text-white font-medium mb-3">
                  Project Type(s) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {projectTypes.map((type, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        value={type}
                        checked={formData.projectType.includes(type)}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 border-gray-300 rounded"
                      />
                      <span className="text-white text-sm">{type}</span>
                    </label>
                  ))}
                </div>
                {formErrors.projectType && (
                  <p className="text-red-400 text-sm mt-1">{formErrors.projectType}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-white font-medium mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm ${
                      formErrors.budget ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((budget, index) => (
                      <option key={index} value={budget}>{budget}</option>
                    ))}
                  </select>
                  {formErrors.budget && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.budget}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-white font-medium mb-2">
                    Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm ${
                      formErrors.timeline ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                  {formErrors.timeline && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.timeline}</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="description" className="block text-white font-medium mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm resize-none ${
                    formErrors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Describe your project requirements, goals, and any specific features you need..."
                />
                {formErrors.description && (
                  <p className="text-red-400 text-sm mt-1">{formErrors.description}</p>
                )}
              </div>
            </div>

            {/* Additional Preferences */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-cyan-400 mr-3">⚙️</span>
                Additional Preferences
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-cyan-500 focus:ring-cyan-500"
                      />
                      <span className="text-white">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-cyan-500 focus:ring-cyan-500"
                      />
                      <span className="text-white">Phone</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-3">
                    Project Urgency
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {urgencyLevels.map((level, index) => (
                      <label key={index} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value={level.value}
                          checked={formData.urgency === level.value}
                          onChange={handleInputChange}
                          className="mr-2 text-cyan-500 focus:ring-cyan-500"
                        />
                        <span className="text-white text-sm">{level.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Request...
                  </span>
                ) : (
                  'Submit Quote Request'
                )}
              </button>
              
              <p className="text-gray-400 text-sm mt-4">
                We'll get back to you within 2 hours with a custom proposal.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-4xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Don't wait to transform your business. Submit your quote request today and let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;
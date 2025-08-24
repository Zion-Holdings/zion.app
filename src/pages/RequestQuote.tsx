import { useState } from 'react';
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
    { value: 'low', label: 'Low', description: 'Planning phase, no immediate deadline' },
    { value: 'medium', label: 'Medium', description: 'Standard project timeline' },
    { value: 'high', label: 'High', description: 'Urgent, need to start soon' },
    { value: 'critical', label: 'Critical', description: 'Emergency, immediate attention required' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      projectType: checked
        ? [...prev.projectType, value]
        : prev.projectType.filter(type => type !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    }, 5000);
  };

  const whyChooseZion = [
    {
      title: 'Expert Team',
      description: 'Experienced developers and consultants with proven track records',
      icon: '👥'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored approaches that fit your specific business needs',
      icon: '🎯'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes',
      icon: '✅'
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous support and maintenance after project completion',
      icon: '🔄'
    }
  ];

  const nextSteps = [
    {
      step: '1',
      title: 'Submit Quote Request',
      description: 'Fill out the form below with your project details'
    },
    {
      step: '2',
      title: 'Consultation Call',
      description: 'We\'ll schedule a call to discuss your requirements in detail'
    },
    {
      step: '3',
      title: 'Custom Proposal',
      description: 'Receive a detailed proposal tailored to your specific needs'
    },
    {
      step: '4',
      title: 'Project Kickoff',
      description: 'Begin your project with our expert team'
    }
  ];

  if (submitSuccess) {
    return (
      <>
        <SEO 
          title="Quote Request Submitted - Zion Tech Group"
          description="Thank you for your quote request. We'll be in touch soon with a custom proposal for your project."
          canonical="/request-quote"
        />
        
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-12">
                <div className="text-6xl mb-6">✅</div>
                <h1 className="text-4xl font-bold text-white mb-6">
                  Quote Request Submitted!
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Thank you for your interest in Zion Tech Group. We've received your quote request 
                  and will review it carefully. Our team will be in touch within 24-48 hours to 
                  discuss your project requirements and provide a custom proposal.
                </p>
                <div className="space-y-4 text-blue-200">
                  <p>What happens next:</p>
                  <ul className="text-left max-w-md mx-auto space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Initial review of your requirements
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Consultation call to discuss details
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Custom proposal and timeline
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Project planning and kickoff
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <a
                    href="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Return to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Request a Quote - Custom IT Solutions - Zion Tech Group"
        description="Get a custom quote for your IT project. Our expert team will provide a detailed proposal tailored to your specific business needs and requirements."
        canonical="/request-quote"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Request a Quote
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Ready to transform your business with custom IT solutions? Get a detailed quote 
                tailored to your specific needs. Our expert team will analyze your requirements 
                and provide a comprehensive proposal.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Project Details
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your first name"
                        />
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-white font-medium mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter company name"
                        />
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select company size</option>
                          {companySizes.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your email"
                        />
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="industry" className="block text-white font-medium mb-2">
                          Industry *
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select your industry</option>
                          {industries.map((industry, index) => (
                            <option key={index} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="urgency" className="block text-white font-medium mb-2">
                          Project Urgency *
                        </label>
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {urgencyLevels.map((level, index) => (
                            <option key={index} value={level.value}>{level.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
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
                              className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <span className="text-blue-200 text-sm">{type}</span>
                          </label>
                        ))}
                      </div>
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((budget, index) => (
                            <option key={index} value={budget}>{budget}</option>
                          ))}
                        </select>
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((timeline, index) => (
                            <option key={index} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Describe your project requirements, goals, and any specific features or functionality you need..."
                      />
                    </div>

                    {/* Preferred Contact */}
                    <div>
                      <label className="block text-white font-medium mb-3">
                        Preferred Contact Method
                      </label>
                      <div className="flex space-x-6">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="text-blue-200 text-sm">Email</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="text-blue-200 text-sm">Phone</span>
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white py-4 px-8 rounded-lg font-medium transition-colors duration-200 text-lg disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Why Choose Zion */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Why Choose Zion?
                  </h3>
                  <div className="space-y-4">
                    {whyChooseZion.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h4 className="text-white font-medium text-sm">
                            {item.title}
                          </h4>
                          <p className="text-blue-200 text-xs">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    What Happens Next?
                  </h3>
                  <div className="space-y-4">
                    {nextSteps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-sm">
                            {step.title}
                          </h4>
                          <p className="text-blue-200 text-xs">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Need Immediate Help?
                  </h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-blue-200">
                      For urgent inquiries or to speak with our team directly:
                    </p>
                    <div className="space-y-2">
                      <p className="text-white">
                        📧 <a href="mailto:info@ziontechgroup.com" className="text-blue-300 hover:text-blue-200">
                          info@ziontechgroup.com
                        </a>
                      </p>
                      <p className="text-white">
                        📞 <a href="tel:+1234567890" className="text-blue-300 hover:text-blue-200">
                          +1 (234) 567-890
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default RequestQuote;
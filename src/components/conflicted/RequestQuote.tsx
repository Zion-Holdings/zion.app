import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Send,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Zap,
  Shield,
  Brain,
  Cloud,
  Smartphone,
  Globe,
  Database,
  Lock,
  BarChart3,
  Palette,
  Code,
  Server,
  Wifi,
  FileText,
  Briefcase
} from 'lucide-react';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    urgency: 'medium'
  });

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const projectTypes = [
    { value: 'web-development', label: 'Web Development', icon: Globe, description: 'Custom websites and web applications' },
    { value: 'mobile-app', label: 'Mobile App Development', icon: Smartphone, description: 'iOS and Android applications' },
    { value: 'ai-ml', label: 'AI & Machine Learning', icon: Brain, description: 'Intelligent automation and analytics' },
    { value: 'cloud-infrastructure', label: 'Cloud Infrastructure', icon: Cloud, description: 'AWS, Azure, GCP solutions' },
    { value: 'cybersecurity', label: 'Cybersecurity', icon: Shield, description: 'Security audits and implementation' },
    { value: 'data-analytics', label: 'Data Analytics', icon: BarChart3, description: 'Business intelligence and reporting' },
    { value: 'ui-ux-design', label: 'UI/UX Design', icon: Palette, description: 'User interface and experience design' },
    { value: 'software-development', label: 'Custom Software', icon: Code, description: 'Enterprise software solutions' },
    { value: 'devops', label: 'DevOps & CI/CD', icon: Server, description: 'Automation and deployment pipelines' },
    { value: 'network-infrastructure', label: 'Network Infrastructure', icon: Wifi, description: 'Network design and setup' },
    { value: 'database-design', label: 'Database Design', icon: Database, description: 'Database architecture and optimization' },
    { value: 'consulting', label: 'IT Consulting', icon: Briefcase, description: 'Strategic technology guidance' }
  ];

  const budgetRanges = [
    { value: 'under-10k', label: 'Under $10,000', description: 'Small projects and MVPs' },
    { value: '10k-25k', label: '$10,000 - $25,000', description: 'Medium-sized applications' },
    { value: '25k-50k', label: '$25,000 - $50,000', description: 'Complex applications' },
    { value: '50k-100k', label: '$50,000 - $100,000', description: 'Enterprise solutions' },
    { value: '100k-plus', label: '$100,000+', description: 'Large-scale projects' },
    { value: 'custom', label: 'Custom Pricing', description: 'Let\'s discuss your needs' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP', description: 'Immediate start required' },
    { value: '1-2-weeks', label: '1-2 Weeks', description: 'Quick turnaround needed' },
    { value: '1-month', label: '1 Month', description: 'Standard project timeline' },
    { value: '2-3-months', label: '2-3 Months', description: 'Complex project timeline' },
    { value: '3-plus-months', label: '3+ Months', description: 'Long-term project' },
    { value: 'flexible', label: 'Flexible', description: 'Timeline can be discussed' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low', description: 'No immediate deadline', color: 'text-green-400' },
    { value: 'medium', label: 'Medium', description: 'Standard project timeline', color: 'text-yellow-400' },
    { value: 'high', label: 'High', description: 'Urgent delivery needed', color: 'text-orange-400' },
    { value: 'critical', label: 'Critical', description: 'Emergency situation', color: 'text-red-400' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setSubmissionStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          description: '',
          urgency: 'medium'
        });
        setSubmissionStatus('idle');
      }, 3000);
    }, 2000);
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.projectType;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl p-4 mb-8">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Request a Quote
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Get a personalized quote for your project. Our team will analyze your requirements 
              and provide a detailed estimate within 24 hours.
            </p>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center justify-center space-x-3 text-white/80"
              >
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>24-Hour Response</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center space-x-3 text-white/80"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Free Consultation</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center justify-center space-x-3 text-white/80"
              >
                <Calculator className="w-5 h-5 text-purple-400" />
                <span>Detailed Estimate</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <h2 className="text-3xl font-bold text-white mb-8">Project Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-white font-medium mb-4">Project Type *</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projectTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`flex items-start p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                            formData.projectType === type.value
                              ? 'border-cyan-400 bg-cyan-400/20'
                              : 'border-white/20 hover:border-cyan-400/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type.value}
                            checked={formData.projectType === type.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <type.icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-medium">{type.label}</div>
                              <div className="text-white/60 text-sm">{type.description}</div>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget and Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-4">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((budget) => (
                          <option key={budget.value} value={budget.value}>
                            {budget.label} - {budget.description}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-4">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((timeline) => (
                          <option key={timeline.value} value={timeline.value}>
                            {timeline.label} - {timeline.description}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="block text-white font-medium mb-4">Project Urgency</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {urgencyLevels.map((level) => (
                        <label
                          key={level.value}
                          className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                            formData.urgency === level.value
                              ? 'border-cyan-400 bg-cyan-400/20'
                              : 'border-white/20 hover:border-cyan-400/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="urgency"
                            value={level.value}
                            checked={formData.urgency === level.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="text-center w-full">
                            <div className={`font-medium ${level.color}`}>{level.label}</div>
                            <div className="text-white/60 text-xs">{level.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-white font-medium mb-2">Project Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!isFormValid || submissionStatus === 'submitting'}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                      !isFormValid || submissionStatus === 'submitting'
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-700 hover:shadow-lg hover:shadow-cyan-400/25'
                    }`}
                  >
                    {submissionStatus === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : submissionStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Quote Requested!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Request Quote</span>
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submissionStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-green-400">
                        Thank you! We've received your quote request and will respond within 24 hours.
                      </span>
                    </motion.div>
                  )}

                  {submissionStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                      <span className="text-red-400">
                        Something went wrong. Please try again or contact us directly.
                      </span>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center text-white/80 hover:text-cyan-400 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                    +1 (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center text-white/80 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3 text-purple-400" />
                    kleber@ziontechgroup.com
                  </a>
                  <div className="flex items-start text-white/80">
                    <MapPin className="w-5 h-5 mr-3 text-green-400 mt-1" />
                    <span>Delaware, United States</span>
                  </div>
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Expert Team</div>
                      <div className="text-white/60 text-sm">Certified professionals</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Proven Track Record</div>
                      <div className="text-white/60 text-sm">500+ successful projects</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Fast Delivery</div>
                      <div className="text-white/60 text-sm">Quick turnaround times</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Quality Guarantee</div>
                      <div className="text-white/60 text-sm">100% satisfaction</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-4">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black text-xs font-bold mr-3 mt-1">1</div>
                    <div>
                      <div className="text-white font-medium">Quote Request</div>
                      <div className="text-white/60 text-sm">Submit your requirements</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-black text-xs font-bold mr-3 mt-1">2</div>
                    <div>
                      <div className="text-white font-medium">Analysis</div>
                      <div className="text-white/60 text-sm">We review your needs</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-black text-xs font-bold mr-3 mt-1">3</div>
                    <div>
                      <div className="text-white font-medium">Detailed Quote</div>
                      <div className="text-white/60 text-sm">Get comprehensive estimate</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black text-xs font-bold mr-3 mt-1">4</div>
                    <div>
                      <div className="text-white font-medium">Project Start</div>
                      <div className="text-white/60 text-sm">Begin development</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


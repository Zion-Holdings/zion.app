import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  TrendingUp, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Play,
  Code,
  Database,
  Cloud,
  BarChart3,
  MessageSquare,
  Phone,
  Mail,
  Shield,
  Cpu,
  HardDrive,
  Wifi,
  Key,
  Fingerprint,
  Lightbulb,
  Target,
  Clock,
  DollarSign
} from 'lucide-react';

export default function DigitalTransformation() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [selectedService, setSelectedService] = useState(0);

  const transformationPhases = [
    {
      title: 'Assessment & Strategy',
      description: 'Evaluate current state and develop transformation roadmap',
      icon: Target,
      activities: ['Current State Analysis', 'Gap Identification', 'Strategy Development', 'ROI Planning'],
      deliverables: ['Transformation Roadmap', 'Technology Assessment', 'Change Management Plan', 'Budget Estimation']
    },
    {
      title: 'Design & Planning',
      description: 'Design new processes and technology architecture',
      icon: Lightbulb,
      activities: ['Process Redesign', 'Technology Selection', 'Architecture Planning', 'Risk Assessment'],
      deliverables: ['Process Maps', 'Technology Architecture', 'Implementation Plan', 'Risk Mitigation Strategy']
    },
    {
      title: 'Implementation & Deployment',
      description: 'Execute transformation plan with minimal disruption',
      icon: Zap,
      activities: ['Technology Implementation', 'Process Changes', 'Training & Change Management', 'Testing & Validation'],
      deliverables: ['New Systems & Processes', 'Training Materials', 'Performance Metrics', 'Go-Live Support']
    },
    {
      title: 'Optimization & Scale',
      description: 'Monitor performance and optimize for continuous improvement',
      icon: TrendingUp,
      activities: ['Performance Monitoring', 'Process Optimization', 'Continuous Improvement', 'Scaling Success'],
      deliverables: ['Performance Reports', 'Optimization Recommendations', 'Best Practices', 'Scaling Roadmap']
    }
  ];

  const transformationServices = [
    {
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions',
      icon: Zap,
      features: ['Workflow Automation', 'RPA Implementation', 'Business Process Management', 'Integration Services'],
      benefits: ['Increased Efficiency', 'Reduced Errors', 'Cost Savings', 'Improved Compliance']
    },
    {
      title: 'Data & Analytics',
      description: 'Transform data into actionable business insights',
      icon: BarChart3,
      features: ['Data Strategy', 'Analytics Implementation', 'Business Intelligence', 'Predictive Analytics'],
      benefits: ['Better Decision Making', 'Improved Customer Experience', 'Operational Insights', 'Competitive Advantage']
    },
    {
      title: 'Cloud Migration',
      description: 'Modernize infrastructure with cloud-first approach',
      icon: Cloud,
      features: ['Cloud Strategy', 'Migration Planning', 'Infrastructure Modernization', 'Multi-Cloud Management'],
      benefits: ['Scalability', 'Cost Optimization', 'Improved Performance', 'Enhanced Security']
    },
    {
      title: 'Digital Workplace',
      description: 'Enable modern collaboration and productivity tools',
      icon: Users,
      features: ['Collaboration Tools', 'Remote Work Solutions', 'Digital Communication', 'Productivity Apps'],
      benefits: ['Improved Collaboration', 'Increased Productivity', 'Better Employee Experience', 'Reduced Costs']
    },
    {
      title: 'Customer Experience',
      description: 'Transform customer interactions with digital solutions',
      icon: Globe,
      features: ['Digital Channels', 'Customer Journey Mapping', 'Personalization', 'Omnichannel Strategy'],
      benefits: ['Enhanced Customer Satisfaction', 'Increased Loyalty', 'Higher Conversion Rates', 'Better Brand Perception']
    },
    {
      title: 'Change Management',
      description: 'Ensure successful adoption of new technologies and processes',
      icon: Users,
      features: ['Stakeholder Engagement', 'Training Programs', 'Communication Strategy', 'Resistance Management'],
      benefits: ['Faster Adoption', 'Reduced Resistance', 'Better Outcomes', 'Sustained Change']
    }
  ];

  const successMetrics = [
    { title: 'Efficiency Gains', description: '20-40% improvement in operational efficiency', icon: TrendingUp },
    { title: 'Cost Reduction', description: '15-30% reduction in operational costs', icon: DollarSign },
    { title: 'Customer Satisfaction', description: '25-35% increase in customer satisfaction scores', icon: Users },
    { title: 'Time to Market', description: '30-50% faster product and service delivery', icon: Clock },
    { title: 'Employee Productivity', description: '20-30% increase in employee productivity', icon: Zap },
    { title: 'Innovation Capacity', description: 'Enhanced ability to innovate and adapt', icon: Lightbulb }
  ];

  const industries = [
    { name: 'Healthcare', description: 'Digital health solutions and patient care optimization', icon: Shield },
    { name: 'Finance', description: 'Fintech innovation and regulatory compliance', icon: DollarSign },
    { name: 'Manufacturing', description: 'Industry 4.0 and smart manufacturing', icon: Cpu },
    { name: 'Retail', description: 'E-commerce and omnichannel retail solutions', icon: Globe },
    { name: 'Education', description: 'EdTech and digital learning platforms', icon: Users },
    { name: 'Government', description: 'Digital government and citizen services', icon: Shield }
  ];

  const stats = [
    { number: '85%', label: 'Success Rate', icon: CheckCircle },
    { number: '40%', label: 'Efficiency Gain', icon: TrendingUp },
    { number: '30%', label: 'Cost Reduction', icon: DollarSign },
    { number: '6-12', label: 'Months ROI', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                {' '}That Drives{' '}
              </span>
              Business Growth
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge digital solutions that modernize operations, 
              enhance customer experience, and drive sustainable growth in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20">
                <Play className="w-5 h-5 mr-2" />
                View Case Studies
              </button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Transformation Phases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Transformation Methodology</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven, structured approach to digital transformation that ensures success at every stage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Phase Navigation */}
            <div className="space-y-4">
              {transformationPhases.map((phase, index) => (
                <motion.button
                  key={phase.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedPhase(index)}
                  className={`w-full p-6 text-left rounded-lg transition-all duration-200 ${
                    selectedPhase === index
                      ? 'bg-gradient-to-r from-green-400/20 to-green-600/20 border-green-400/50'
                      : 'bg-white/10 hover:bg-white/20 border-white/20'
                  } border`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedPhase === index
                        ? 'bg-gradient-to-br from-green-400 to-green-600'
                        : 'bg-white/20'
                    }`}>
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                      <p className="text-sm text-gray-300">{phase.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Phase Details */}
            <motion.div
              key={selectedPhase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-4">{transformationPhases[selectedPhase].title}</h3>
                <p className="text-gray-300 mb-6">{transformationPhases[selectedPhase].description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-green-400 mr-2" />
                    Key Activities
                  </h4>
                  <ul className="space-y-2">
                    {transformationPhases[selectedPhase].activities.map((activity, index) => (
                      <li key={index} className="text-gray-300 text-sm">• {activity}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {transformationPhases[selectedPhase].deliverables.map((deliverable, index) => (
                      <li key={index} className="text-gray-300 text-sm">• {deliverable}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transformation Services Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Transformation Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital transformation solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-green-400/50 transition-all duration-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-300">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-300">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Expected Outcomes</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Measurable results that demonstrate the value of digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-green-400/50 transition-all duration-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{metric.title}</h3>
                <p className="text-gray-300">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven digital transformation expertise across diverse industry sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-green-400/50 transition-all duration-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400/20 to-green-600/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how digital transformation can modernize your operations and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">Delaware, United States</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
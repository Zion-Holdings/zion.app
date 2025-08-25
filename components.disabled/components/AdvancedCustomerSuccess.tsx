import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Star, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin,
  Building,
  Globe,
  Zap,
  Rocket,
  Shield,
  Brain,
  Cloud,
  Code,
  Smartphone,
  Database,
  Clock,
  Heart
} from 'lucide-react';

interface CustomerSuccess {
  id: string;
  company: string;
  industry: string;
  logo: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
    icon: React.ReactNode;
  }[];
  testimonial: string;
  contact: string;
  position: string;
  projectDuration: string;
  technologies: string[];
  category: 'startup' | 'enterprise' | 'scaleup' | 'government' | 'nonprofit';
  featured: boolean;
}

const customerSuccesses: CustomerSuccess[] = [
  {
    id: '1',
    company: 'TechFlow Solutions',
    industry: 'SaaS Platform',
    logo: 'TF',
    challenge: 'Legacy system causing 40% downtime and poor user experience',
    solution: 'Modernized architecture with microservices, implemented CI/CD pipeline, and added real-time monitoring',
    results: [
      {
        metric: 'Uptime',
        value: '99.9%',
        improvement: '+59.9%',
        icon: <Shield className="w-5 h-5" />
      },
      {
        metric: 'User Engagement',
        value: '85%',
        improvement: '+45%',
        icon: <Users className="w-5 h-5" />
      },
      {
        metric: 'Revenue Growth',
        value: '$2.4M',
        improvement: '+180%',
        icon: <DollarSign className="w-5 h-5" />
      }
    ],
    testimonial: "Zion Tech Group transformed our platform from a liability to our biggest competitive advantage. The results exceeded our expectations.",
    contact: "Sarah Chen",
    position: "CTO",
    projectDuration: "6 months",
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
    category: 'scaleup',
    featured: true
  },
  {
    id: '2',
    company: 'GreenEnergy Corp',
    industry: 'Renewable Energy',
    logo: 'GE',
    challenge: 'Manual processes limiting scalability and increasing operational costs',
    solution: 'Built comprehensive IoT platform for real-time monitoring, automated reporting, and predictive maintenance',
    results: [
      {
        metric: 'Operational Efficiency',
        value: '78%',
        improvement: '+58%',
        icon: <Zap className="w-5 h-5" />
      },
      {
        metric: 'Cost Reduction',
        value: '$850K',
        improvement: '-35%',
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        metric: 'Scalability',
        value: '10x',
        improvement: '+900%',
        icon: <Rocket className="w-5 h-5" />
      }
    ],
    testimonial: "The IoT platform revolutionized our operations. We can now monitor and optimize our entire energy grid in real-time.",
    contact: "Michael Rodriguez",
    position: "Operations Director",
    projectDuration: "8 months",
    technologies: ['Python', 'IoT', 'Machine Learning', 'Azure', 'React Native'],
    category: 'enterprise',
    featured: true
  },
  {
    id: '3',
    company: 'HealthTech Innovations',
    industry: 'Healthcare Technology',
    logo: 'HT',
    challenge: 'Patient data scattered across multiple systems with no unified view',
    solution: 'Developed integrated healthcare platform with secure data sharing, AI-powered diagnostics, and patient portal',
    results: [
      {
        metric: 'Patient Satisfaction',
        value: '94%',
        improvement: '+32%',
        icon: <Star className="w-5 h-5" />
      },
      {
        metric: 'Diagnostic Accuracy',
        value: '96%',
        improvement: '+18%',
        icon: <Brain className="w-5 h-5" />
      },
      {
        metric: 'Processing Time',
        value: '2.3 min',
        improvement: '-67%',
        icon: <Clock className="w-5 h-5" />
      }
    ],
    testimonial: "Zion Tech Group delivered a healthcare platform that truly puts patients first. The AI integration has been a game-changer.",
    contact: "Dr. Emily Watson",
    position: "Chief Medical Officer",
    projectDuration: "12 months",
    technologies: ['React', 'Python', 'AI/ML', 'HIPAA', 'AWS'],
    category: 'enterprise',
    featured: false
  },
  {
    id: '4',
    company: 'EduTech Startup',
    industry: 'Education Technology',
    logo: 'ET',
    challenge: 'Need to scale from 1,000 to 100,000 users while maintaining performance',
    solution: 'Built scalable microservices architecture, implemented CDN, and optimized database performance',
    results: [
      {
        metric: 'User Capacity',
        value: '100K+',
        improvement: '+9,900%',
        icon: <Users className="w-5 h-5" />
      },
      {
        metric: 'Page Load Speed',
        value: '1.2s',
        improvement: '-70%',
        icon: <Zap className="w-5 h-5" />
      },
      {
        metric: 'Funding Raised',
        value: '$5.2M',
        improvement: '+420%',
        icon: <DollarSign className="w-5 h-5" />
      }
    ],
    testimonial: "Zion Tech Group helped us scale our platform to handle explosive growth without compromising user experience.",
    contact: "Alex Thompson",
    position: "Founder & CEO",
    projectDuration: "4 months",
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'CDN'],
    category: 'startup',
    featured: false
  },
  {
    id: '5',
    company: 'CitySmart Solutions',
    industry: 'Government Technology',
    logo: 'CS',
    challenge: 'Citizen services fragmented across 15 different departments',
    solution: 'Created unified citizen portal with single sign-on, automated workflows, and mobile-first design',
    results: [
      {
        metric: 'Service Completion',
        value: '87%',
        improvement: '+42%',
        icon: <CheckCircle className="w-5 h-5" />
      },
      {
        metric: 'Processing Time',
        value: '3.5 days',
        improvement: '-65%',
        icon: <Clock className="w-5 h-5" />
      },
      {
        metric: 'Citizen Satisfaction',
        value: '91%',
        improvement: '+38%',
        icon: <Star className="w-5 h-5" />
      }
    ],
    testimonial: "The citizen portal has transformed how we serve our community. Citizens can now access services 24/7 with ease.",
    contact: "Jennifer Martinez",
    position: "Digital Services Director",
    projectDuration: "10 months",
    technologies: ['React', 'Java', 'Oracle', 'Mobile First', 'Accessibility'],
    category: 'government',
    featured: false
  },
  {
    id: '6',
    company: 'EcoCharity Foundation',
    industry: 'Nonprofit',
    logo: 'EC',
    challenge: 'Limited donor engagement and inefficient fundraising processes',
    solution: 'Built donor management platform with automated campaigns, social media integration, and impact tracking',
    results: [
      {
        metric: 'Donor Retention',
        value: '78%',
        improvement: '+45%',
        icon: <Users className="w-5 h-5" />
      },
      {
        metric: 'Funds Raised',
        value: '$2.8M',
        improvement: '+156%',
        icon: <DollarSign className="w-5 h-5" />
      },
      {
        metric: 'Campaign Efficiency',
        value: '92%',
        improvement: '+67%',
        icon: <Target className="w-5 h-5" />
      }
    ],
    testimonial: "Zion Tech Group helped us leverage technology to amplify our impact and connect with donors more effectively.",
    contact: "Robert Kim",
    position: "Executive Director",
    projectDuration: "6 months",
    technologies: ['React', 'Node.js', 'Stripe', 'Social APIs', 'Analytics'],
    category: 'nonprofit',
    featured: false
  }
];

const categories = [
  { id: 'all', label: 'All Industries', icon: <Globe className="w-4 h-4" /> },
  { id: 'startup', label: 'Startups', icon: <Rocket className="w-4 h-4" /> },
  { id: 'enterprise', label: 'Enterprise', icon: <Building className="w-4 h-4" /> },
  { id: 'scaleup', label: 'Scale-ups', icon: <TrendingUp className="w-4 h-4" /> },
  { id: 'government', label: 'Government', icon: <Shield className="w-4 h-4" /> },
  { id: 'nonprofit', label: 'Nonprofit', icon: <Heart className="w-4 h-4" /> }
];

const AdvancedCustomerSuccess: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSuccess, setSelectedSuccess] = useState<CustomerSuccess | null>(null);

  const filteredSuccesses = selectedCategory === 'all' 
    ? customerSuccesses 
    : customerSuccesses.filter(success => success.category === selectedCategory);

  const featuredSuccesses = filteredSuccesses.filter(success => success.featured);
  const regularSuccesses = filteredSuccesses.filter(success => !success.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Customer Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients. Discover how Zion Tech Group has transformed businesses 
            across industries with innovative technology solutions and measurable outcomes.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 border border-gray-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Success Stories */}
        {featuredSuccesses.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-400" />
              Featured Success Stories
              <Trophy className="w-6 h-6 text-yellow-400" />
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredSuccesses.map((success) => (
                <motion.div
                  key={success.id}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  onClick={() => setSelectedSuccess(success)}
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500">
                    {/* Header */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                            {success.logo}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white mb-1">{success.company}</h4>
                            <p className="text-gray-400 text-sm">{success.industry}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="text-yellow-400 text-sm font-medium">Featured</span>
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <h5 className="text-gray-300 font-semibold mb-2">Challenge:</h5>
                          <p className="text-gray-400 text-sm leading-relaxed">{success.challenge}</p>
                        </div>
                        <div>
                          <h5 className="text-gray-300 font-semibold mb-2">Solution:</h5>
                          <p className="text-gray-400 text-sm leading-relaxed">{success.solution}</p>
                        </div>
                      </div>

                      {/* Key Results */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        {success.results.map((result, index) => (
                          <div key={index} className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                            <div className="flex items-center justify-center mb-2 text-blue-400">
                              {result.icon}
                            </div>
                            <div className="text-white font-bold text-lg">{result.value}</div>
                            <div className="text-gray-400 text-xs">{result.metric}</div>
                            <div className="text-green-400 text-xs font-medium">{result.improvement}</div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {success.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Info */}
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {success.projectDuration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {success.industry}
                        </span>
                      </div>
                    </div>

                    {/* Testimonial Preview */}
                    <div className="p-6 bg-gray-800/30 border-t border-gray-700/50">
                                           <blockquote className="text-gray-300 italic text-sm leading-relaxed">
                       &ldquo;{success.testimonial.substring(0, 120)}...&rdquo;
                     </blockquote>
                      <div className="flex items-center justify-between mt-4">
                        <div>
                          <p className="text-white font-medium text-sm">{success.contact}</p>
                          <p className="text-gray-400 text-xs">{success.position}</p>
                        </div>
                        <motion.div
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Success Stories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">More Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularSuccesses.map((success) => (
              <motion.div
                key={success.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => setSelectedSuccess(success)}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500">
                  {/* Header */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        {success.logo}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{success.company}</h4>
                        <p className="text-gray-400 text-xs">{success.industry}</p>
                      </div>
                    </div>

                    {/* Challenge Preview */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {success.challenge.substring(0, 100)}...
                    </p>

                                         {/* Key Result */}
                     {success.results.length > 0 && success.results[0] && (
                       <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30 mb-4">
                         <div className="text-white font-bold text-lg">{success.results[0].value}</div>
                         <div className="text-gray-400 text-xs">{success.results[0].metric}</div>
                         <div className="text-green-400 text-xs font-medium">{success.results[0].improvement}</div>
                       </div>
                     )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {success.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {success.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50">
                          +{success.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{success.projectDuration}</span>
                      <span>{success.industry}</span>
                    </div>
                  </div>

                  {/* Testimonial Preview */}
                  <div className="p-4 bg-gray-800/30 border-t border-gray-700/50">
                                         <blockquote className="text-gray-300 italic text-xs leading-relaxed mb-3">
                       &ldquo;{success.testimonial.substring(0, 80)}...&rdquo;
                     </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium text-xs">{success.contact}</p>
                        <p className="text-gray-400 text-xs">{success.position}</p>
                      </div>
                      <motion.div
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        whileHover={{ x: 3 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group transform your business with innovative technology solutions 
              and deliver measurable results that drive growth and success.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Success Story Modal */}
      <AnimatePresence>
        {selectedSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSuccess(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                      {selectedSuccess.logo}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedSuccess.company}</h3>
                      <p className="text-gray-400 text-lg">{selectedSuccess.industry}</p>
                      {selectedSuccess.featured && (
                        <div className="flex items-center gap-2 mt-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="text-yellow-400 text-sm font-medium">Featured Success Story</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSuccess(null)}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    ×
                  </button>
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-red-400" />
                      The Challenge
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{selectedSuccess.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Our Solution
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{selectedSuccess.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-6 text-center">Measurable Results</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedSuccess.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50"
                      >
                        <div className="flex items-center justify-center mb-4 text-blue-400">
                          {result.icon}
                        </div>
                        <div className="text-white font-bold text-3xl mb-2">{result.value}</div>
                        <div className="text-gray-400 text-lg mb-2">{result.metric}</div>
                        <div className="text-green-400 text-lg font-medium">{result.improvement}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedSuccess.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-white font-medium">Project Duration</div>
                    <div className="text-gray-400">{selectedSuccess.projectDuration}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                    <Building className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-white font-medium">Industry</div>
                    <div className="text-gray-400">{selectedSuccess.industry}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                    <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-white font-medium">Team Size</div>
                    <div className="text-gray-400">5-8 Developers</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-6 border border-blue-500/20">
                                     <blockquote className="text-gray-300 italic text-lg leading-relaxed mb-4">
                     &ldquo;{selectedSuccess.testimonial}&rdquo;
                   </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-lg">{selectedSuccess.contact}</p>
                      <p className="text-gray-400">{selectedSuccess.position}</p>
                    </div>
                    <motion.a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Similar Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AdvancedCustomerSuccess;
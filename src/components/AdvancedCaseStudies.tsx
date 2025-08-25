import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  ExternalLink,
  Star,
  Award,
  Zap,
  Shield,
  Cloud,
  Brain,
  BarChart3,
  Smartphone,
  Rocket,
  Target,
  Lightbulb
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
    icon: React.ReactNode;
    color: string;
  }[];
  timeline: string;
  investment: string;
  roi: string;
  technologies: string[];
  teamSize: number;
  testimonial: string;
  clientRole: string;
  clientName: string;
  rating: number;
  image: string;
  category: string;
  featured: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'fintech-automation',
    title: 'AI-Powered Financial Process Automation',
    client: 'GlobalFin Solutions',
    industry: 'Financial Services',
    challenge: 'Manual processing of 50,000+ daily transactions causing delays, errors, and compliance risks. Team spending 80% of time on repetitive tasks.',
    solution: 'Implemented comprehensive AI automation platform with machine learning algorithms for transaction processing, fraud detection, and regulatory compliance. Integrated with existing core banking systems.',
    results: [
      {
        metric: 'Processing Speed',
        value: '95%',
        improvement: 'Faster',
        icon: <Zap className="w-5 h-5" />,
        color: 'text-yellow-400'
      },
      {
        metric: 'Error Reduction',
        value: '99.7%',
        improvement: 'Accuracy',
        icon: <CheckCircle className="w-5 h-5" />,
        color: 'text-green-400'
      },
      {
        metric: 'Cost Savings',
        value: '$2.4M',
        improvement: 'Annually',
        icon: <DollarSign className="w-5 h-5" />,
        color: 'text-green-400'
      },
      {
        metric: 'ROI',
        value: '450%',
        improvement: 'First Year',
        icon: <TrendingUp className="w-5 h-5" />,
        color: 'text-purple-400'
      }
    ],
    timeline: '6 months',
    investment: '$850,000',
    roi: '450% in first year',
    technologies: ['Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
    teamSize: 8,
    testimonial: 'Zion Tech Group transformed our entire operations. The AI automation platform not only saved us millions but also improved our compliance score to 99.9%. Our team can now focus on strategic initiatives instead of manual processing.',
    clientRole: 'CTO',
    clientName: 'Sarah Johnson',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=300',
    category: 'AI & Automation',
    featured: true
  },
  {
    id: 'healthcare-security',
    title: 'Healthcare Cybersecurity & Compliance Platform',
    client: 'MedTech Innovations',
    industry: 'Healthcare',
    challenge: 'Critical patient data security vulnerabilities, HIPAA compliance gaps, and increasing cyber threats targeting healthcare systems. Needed 24/7 threat monitoring and automated incident response.',
    solution: 'Developed comprehensive cybersecurity platform with advanced threat detection, automated compliance monitoring, and real-time incident response. Implemented zero-trust security architecture and AI-powered threat intelligence.',
    results: [
      {
        metric: 'Security Score',
        value: '99.9%',
        improvement: 'Compliance',
        icon: <Shield className="w-5 h-5" />,
        color: 'text-blue-400'
      },
      {
        metric: 'Threat Detection',
        value: '100%',
        improvement: 'Success Rate',
        icon: <Target className="w-5 h-5" />,
        color: 'text-green-400'
      },
      {
        metric: 'Incident Response',
        value: '2 minutes',
        improvement: 'Average Time',
        icon: <Clock className="w-5 h-5" />,
        color: 'text-purple-400'
      },
      {
        metric: 'Cost Avoidance',
        value: '$5.2M',
        improvement: 'Potential Breaches',
        icon: <DollarSign className="w-5 h-5" />,
        color: 'text-red-400'
      }
    ],
    timeline: '8 months',
    investment: '$1.2M',
    roi: 'Preventive (saves $5M+ annually)',
    technologies: ['Python', 'Elasticsearch', 'AWS Security', 'Machine Learning', 'GraphQL', 'Redis'],
    teamSize: 12,
    testimonial: 'Zion Tech Group\'s cybersecurity platform has given us peace of mind. We\'re now 100% HIPAA compliant and have prevented multiple sophisticated attacks. The automated threat response is incredible.',
    clientRole: 'Chief Security Officer',
    clientName: 'Michael Chen',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1576091160395-3516efdfd817?auto=format&fit=crop&w=400&h=300',
    category: 'Cybersecurity',
    featured: true
  },
  {
    id: 'retail-transformation',
    title: 'E-commerce Digital Transformation',
    client: 'RetailPlus Corp',
    industry: 'Retail & E-commerce',
    challenge: 'Outdated legacy systems, poor customer experience, limited mobile capabilities, and inability to scale during peak seasons. Losing market share to digital-native competitors.',
    solution: 'Complete digital transformation including modern e-commerce platform, mobile apps, AI-powered recommendation engine, and cloud infrastructure. Implemented microservices architecture for scalability.',
    results: [
      {
        metric: 'Online Sales',
        value: '340%',
        improvement: 'Increase',
        icon: <TrendingUp className="w-5 h-5" />,
        color: 'text-green-400'
      },
      {
        metric: 'Mobile Revenue',
        value: '65%',
        improvement: 'Of Total Sales',
        icon: <Smartphone className="w-5 h-5" />,
        color: 'text-blue-400'
      },
      {
        metric: 'Customer Satisfaction',
        value: '4.8/5',
        improvement: 'Rating',
        icon: <Star className="w-5 h-5" />,
        color: 'text-yellow-400'
      },
      {
        metric: 'Peak Performance',
        value: '10x',
        improvement: 'Traffic Handling',
        icon: <Rocket className="w-5 h-5" />,
        color: 'text-purple-400'
      }
    ],
    timeline: '10 months',
    investment: '$2.1M',
    roi: '320% in first year',
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
    teamSize: 15,
    testimonial: 'Zion Tech Group transformed our business from a traditional retailer to a digital-first company. Our online sales have skyrocketed, and we can now handle 10x more traffic during peak seasons.',
    clientRole: 'CEO',
    clientName: 'Emily Rodriguez',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&h=300',
    category: 'Digital Transformation',
    featured: false
  },
  {
    id: 'manufacturing-analytics',
    title: 'Manufacturing IoT & Analytics Platform',
    client: 'Manufacturing Plus',
    industry: 'Manufacturing',
    challenge: 'Limited visibility into production processes, equipment failures causing downtime, quality control issues, and inability to predict maintenance needs. Losing $500K monthly to inefficiencies.',
    solution: 'Built comprehensive IoT platform with real-time monitoring, predictive analytics, and automated quality control. Implemented machine learning for predictive maintenance and process optimization.',
    results: [
      {
        metric: 'Downtime Reduction',
        value: '78%',
        improvement: 'Less Downtime',
        icon: <Clock className="w-5 h-5" />,
        color: 'text-green-400'
      },
      {
        metric: 'Quality Improvement',
        value: '95%',
        improvement: 'Defect Rate',
        icon: <CheckCircle className="w-5 h-5" />,
        color: 'text-blue-400'
      },
      {
        metric: 'Cost Savings',
        value: '$3.8M',
        improvement: 'Annually',
        icon: <DollarSign className="w-5 h-5" />,
        color: 'text-green-400'
      },
      {
        metric: 'Efficiency Gain',
        value: '42%',
        improvement: 'Production',
        icon: <TrendingUp className="w-5 h-5" />,
        color: 'text-purple-400'
      }
    ],
    timeline: '12 months',
    investment: '$1.8M',
    roi: '380% in first year',
    technologies: ['Python', 'TensorFlow', 'AWS IoT', 'InfluxDB', 'Grafana', 'Kubernetes'],
    teamSize: 10,
    testimonial: 'The IoT platform has revolutionized our manufacturing operations. We can now predict equipment failures before they happen and optimize our production processes in real-time. The ROI has been incredible.',
    clientRole: 'Operations Director',
    clientName: 'David Thompson',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=300',
    category: 'IoT & Analytics',
    featured: false
  },
  {
    id: 'startup-platform',
    title: 'Startup MVP to Scale Platform',
    client: 'InnovateHealth',
    industry: 'Healthcare Technology',
    challenge: 'Startup with innovative health monitoring concept but no technical team. Needed MVP development, user validation, and scalable architecture to secure Series A funding.',
    solution: 'Rapid MVP development with React Native mobile app, Node.js backend, and AWS infrastructure. Implemented user analytics, A/B testing, and scalable architecture for future growth.',
    results: [
      {
        metric: 'Development Time',
        value: '6 weeks',
        improvement: 'MVP Launch',
        icon: <Clock className="w-5 h-5" />,
        color: 'text-green-400'
      },
      {
        metric: 'User Growth',
        value: '15,000+',
        improvement: 'Active Users',
        icon: <Users className="w-5 h-5" />,
        color: 'text-blue-400'
      },
      {
        metric: 'Funding Secured',
        value: '$8.5M',
        improvement: 'Series A',
        icon: <DollarSign className="w-5 h-5" />,
        color: 'text-green-400'
      },
      {
        metric: 'App Rating',
        value: '4.9/5',
        improvement: 'Store Rating',
        icon: <Star className="w-5 h-5" />,
        color: 'text-yellow-400'
      }
    ],
    timeline: '6 weeks',
    investment: '$89,000',
    roi: '9,500% (funding secured)',
    technologies: ['React Native', 'Node.js', 'AWS', 'MongoDB', 'Firebase', 'Analytics'],
    teamSize: 6,
    testimonial: 'Zion Tech Group delivered our MVP in record time, helping us secure Series A funding. The platform is scalable and user-friendly. They truly understand startup needs.',
    clientRole: 'CEO',
    clientName: 'Lisa Wang',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300',
    category: 'Startup Development',
    featured: false
  }
];

const categories = ['All', 'AI & Automation', 'Cybersecurity', 'Digital Transformation', 'IoT & Analytics', 'Startup Development'];

export function AdvancedCaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedCategory === 'All' || study.category === selectedCategory
  );

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Success Stories & Case Studies
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real results from real clients. Discover how Zion Tech Group has transformed businesses across industries with innovative technology solutions.
          </p>
        </motion.div>

        {/* Featured Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-yellow-400" />
            Featured Success Stories
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedCaseStudy(study)}
              >
                <div className="relative">
                  <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded">{study.industry}</span>
                    <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded">{study.category}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{study.title}</h4>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{study.challenge}</p>
                  
                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-lg font-bold ${result.color}`}>{result.value}</div>
                        <div className="text-xs text-white/60">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(study.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1 text-sm">
                      Read More <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter & View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                    : 'bg-white/10 border-white/20 text-white/80 hover:border-cyan-400/30 hover:text-cyan-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg border transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                  : 'bg-white/10 border-white/20 text-white/80 hover:border-cyan-400/30'
              }`}
            >
              <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
              </div>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg border transition-all duration-300 ${
                viewMode === 'list'
                  ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                  : 'bg-white/10 border-white/20 text-white/80 hover:border-cyan-400/30'
              }`}
            >
              <div className="w-4 h-4 space-y-1">
                <div className="w-full h-1 bg-current rounded-sm"></div>
                <div className="w-full h-1 bg-current rounded-sm"></div>
                <div className="w-full h-1 bg-current rounded-sm"></div>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Case Studies Grid/List */}
        <div className="mb-16">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedCaseStudy(study)}
                >
                  <div className="relative">
                    <img src={study.image} alt={study.title} className="w-full h-40 object-cover" />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded">
                      {study.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">{study.title}</h4>
                    <p className="text-white/70 text-sm mb-3 line-clamp-2">{study.challenge}</p>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="text-center">
                        <div className="text-sm font-bold text-green-400">{study.results[0].value}</div>
                        <div className="text-xs text-white/60">{study.results[0].metric}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-blue-400">{study.timeline}</div>
                        <div className="text-xs text-white/60">Timeline</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-white/60">{study.client}</div>
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCaseStudy(study)}
                >
                  <div className="flex items-start gap-6">
                    <img src={study.image} alt={study.title} className="w-32 h-24 object-cover rounded-lg" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded">{study.industry}</span>
                        <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded">{study.category}</span>
                        <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded">{study.timeline}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">{study.title}</h4>
                      <p className="text-white/70 text-sm mb-3">{study.challenge}</p>
                      
                      {/* Results Summary */}
                      <div className="grid grid-cols-4 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center">
                            <div className={`text-lg font-bold ${result.color}`}>{result.value}</div>
                            <div className="text-xs text-white/60">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400 mb-1">{study.roi}</div>
                      <div className="text-xs text-white/60">ROI</div>
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm mt-2">
                        View Details →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Let Zion Tech Group transform your business with the same innovative technology solutions 
              that have delivered exceptional results for our clients.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 mx-auto">
              <Lightbulb className="w-5 h-5" />
              Start Your Success Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 border border-white/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={selectedCaseStudy.image} alt={selectedCaseStudy.title} className="w-full h-64 object-cover" />
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">{selectedCaseStudy.industry}</span>
                  <span className="text-sm text-cyan-400 bg-cyan-500/20 px-3 py-1 rounded-full">{selectedCaseStudy.category}</span>
                  <span className="text-sm text-green-400 bg-green-500/20 px-3 py-1 rounded-full">{selectedCaseStudy.timeline}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{selectedCaseStudy.title}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                    <p className="text-white/80">{selectedCaseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                    <p className="text-white/80">{selectedCaseStudy.solution}</p>
                  </div>
                </div>
                
                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Results & Impact</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedCaseStudy.results.map((result, idx) => (
                      <div key={idx} className="text-center bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className={`text-2xl font-bold ${result.color} mb-1`}>{result.value}</div>
                        <div className="text-sm text-white/70 mb-1">{result.metric}</div>
                        <div className="text-xs text-white/50">{result.improvement}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Additional Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Investment & ROI</h4>
                    <div className="space-y-2 text-sm text-white/80">
                      <div><strong>Investment:</strong> {selectedCaseStudy.investment}</div>
                      <div><strong>ROI:</strong> {selectedCaseStudy.roi}</div>
                      <div><strong>Team Size:</strong> {selectedCaseStudy.teamSize} developers</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCaseStudy.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded border border-cyan-400/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Client Feedback</h4>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(selectedCaseStudy.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-white/80 italic">"{selectedCaseStudy.testimonial}"</p>
                    <div className="text-sm text-cyan-400 mt-2">
                      {selectedCaseStudy.clientName}, {selectedCaseStudy.clientRole}
                    </div>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="text-center">
                  <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 mx-auto">
                    <ArrowRight className="w-5 h-5" />
                    Start Similar Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
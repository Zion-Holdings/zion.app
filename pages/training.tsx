import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Clock, 
  Star, 
  Award, 
  BookOpen, 
  Video, 
  Code,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Database,
  Cpu,
  Zap,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const TrainingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" /> }
  ];

  const trainingPrograms = [
    {
      id: 1,
      title: 'AI Consciousness & Neural Networks',
      description: 'Comprehensive training on AI consciousness systems, neural network architecture, and ethical AI development.',
      category: 'ai',
      duration: '5 days',
      level: 'Advanced',
      format: 'Instructor-led',
      price: '$2,999',
      location: 'Virtual & On-site',
      nextSession: '2025-02-15',
      instructor: 'Dr. Sarah Chen',
      certification: 'AI Consciousness Specialist',
      featured: true,
      topics: ['Neural Network Design', 'AI Ethics', 'Consciousness Algorithms', 'Model Training']
    },
    {
      id: 2,
      title: 'Quantum Computing Fundamentals',
      description: 'Learn the basics of quantum computing, quantum algorithms, and quantum-resistant security.',
      category: 'quantum',
      duration: '4 days',
      level: 'Intermediate',
      format: 'Instructor-led',
      price: '$2,499',
      location: 'Virtual & On-site',
      nextSession: '2025-02-22',
      instructor: 'Prof. Michael Rodriguez',
      certification: 'Quantum Computing Practitioner',
      featured: false,
      topics: ['Quantum Bits', 'Quantum Gates', 'Quantum Algorithms', 'Quantum Security']
    },
    {
      id: 3,
      title: 'Space Technology & Resource Intelligence',
      description: 'Training on satellite technology, space data processing, and resource intelligence applications.',
      category: 'space',
      duration: '3 days',
      level: 'Intermediate',
      format: 'Instructor-led',
      price: '$1,999',
      location: 'Virtual & On-site',
      nextSession: '2025-03-01',
      instructor: 'Dr. Emily Watson',
      certification: 'Space Technology Specialist',
      featured: false,
      topics: ['Satellite Systems', 'Data Processing', 'Resource Intelligence', 'Mission Planning']
    },
    {
      id: 4,
      title: 'Advanced Cybersecurity & Zero Trust',
      description: 'Comprehensive security training covering zero trust architecture, threat detection, and incident response.',
      category: 'security',
      duration: '5 days',
      level: 'Advanced',
      format: 'Instructor-led',
      price: '$2,799',
      location: 'Virtual & On-site',
      nextSession: '2025-03-08',
      instructor: 'Security Team',
      certification: 'Cybersecurity Expert',
      featured: true,
      topics: ['Zero Trust Architecture', 'Threat Detection', 'Incident Response', 'Compliance']
    },
    {
      id: 5,
      title: 'Cloud-Native Development & DevOps',
      description: 'Modern cloud development practices, microservices architecture, and DevOps automation.',
      category: 'cloud',
      duration: '4 days',
      level: 'Intermediate',
      format: 'Instructor-led',
      price: '$2,299',
      location: 'Virtual & On-site',
      nextSession: '2025-03-15',
      instructor: 'Engineering Team',
      certification: 'Cloud-Native Developer',
      featured: false,
      topics: ['Microservices', 'DevOps Automation', 'Cloud Platforms', 'Container Orchestration']
    },
    {
      id: 6,
      title: 'AI-Powered Business Process Automation',
      description: 'Learn how to implement AI-driven automation in business processes and workflows.',
      category: 'ai',
      duration: '3 days',
      level: 'Intermediate',
      format: 'Instructor-led',
      price: '$1,799',
      location: 'Virtual & On-site',
      nextSession: '2025-03-22',
      instructor: 'Dr. Alex Thompson',
      certification: 'AI Automation Specialist',
      featured: false,
      topics: ['Process Analysis', 'AI Integration', 'Workflow Automation', 'ROI Measurement']
    }
  ];

  const filteredPrograms = trainingPrograms.filter(program => 
    selectedCategory === 'all' || program.category === selectedCategory
  );

  const benefits = [
    'Expert instructors with real-world experience',
    'Hands-on practical exercises and projects',
    'Industry-recognized certifications',
    'Flexible virtual and on-site options',
    'Ongoing support and community access',
    'Custom training programs for organizations'
  ];

  return (
    <Layout>
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Professional training and certification programs in AI consciousness, quantum computing, space technology, cybersecurity, and cloud development. Expert-led workshops with hands-on experience."
        keywords={["training", "certification", "AI training", "quantum computing training", "cybersecurity training", "cloud training", "professional development", "Zion Tech Group"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Training & Certification
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Professional training programs and certifications in cutting-edge technologies, 
                led by industry experts with hands-on experience.
              </p>
              
              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 max-w-3xl mx-auto">
                <p className="text-lg text-gray-300 mb-6">
                  Ready to advance your skills? Contact us to book your training session.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="inline-flex items-center px-6 py-3 border-2 border-cyan-400 rounded-lg font-semibold text-white hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                      : 'border-gray-700 text-gray-300 hover:border-gray-600'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Training Programs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of training programs designed to advance your career 
                in cutting-edge technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    program.featured ? 'border-cyan-400/50' : 'border-gray-700 hover:border-cyan-400/50'
                  }`}
                >
                  {program.featured && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-2" />
                      Featured
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{program.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-sm">
                      <div className="text-gray-400 mb-1">Duration</div>
                      <div className="text-white font-semibold">{program.duration}</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-400 mb-1">Level</div>
                      <div className="text-white font-semibold">{program.level}</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-400 mb-1">Format</div>
                      <div className="text-white font-semibold">{program.format}</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-400 mb-1">Price</div>
                      <div className="text-white font-semibold">{program.price}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      {program.instructor}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Award className="w-4 h-4 mr-2" />
                      {program.certification}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      Next: {new Date(program.nextSession).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Enroll Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose Our Training?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our training programs are designed to provide maximum value and practical skills.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Advance Your Career?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss your training needs and book your next session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Training Information
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TrainingPage;
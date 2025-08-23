import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Heart, 
  Zap, 
  Brain, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Clock,
  TrendingUp,
  Code,
  Cloud
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Lead the development of our AI consciousness platform',
      requirements: ['PhD in AI/ML', '5+ years experience', 'Python, TensorFlow', 'Research background'],
      icon: <Brain className="w-8 h-8" />,
      href: '/careers/senior-ai-engineer',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Research',
      location: 'Remote / Boston',
      type: 'Full-time',
      description: 'Advance our quantum computing capabilities',
      requirements: ['PhD in Physics', '3+ years experience', 'Qiskit, Cirq', 'Quantum algorithms'],
      icon: <Zap className="w-8 h-8" />,
      href: '/careers/quantum-computing-specialist',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Build scalable web applications and APIs',
      requirements: ['3+ years experience', 'React, Node.js', 'TypeScript', 'Cloud platforms'],
      icon: <Code className="w-8 h-8" />,
      href: '/careers/full-stack-developer',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Austin',
      type: 'Full-time',
      description: 'Manage and optimize our cloud infrastructure',
      requirements: ['4+ years experience', 'AWS, Kubernetes', 'CI/CD', 'Monitoring tools'],
      icon: <Cloud className="w-8 h-8" />,
      href: '/careers/devops-engineer',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Remote / Seattle',
      type: 'Full-time',
      description: 'Protect our systems and data from threats',
      requirements: ['3+ years experience', 'Security tools', 'Incident response', 'Compliance'],
      icon: <Shield className="w-8 h-8" />,
      href: '/careers/cybersecurity-analyst',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Los Angeles',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap',
      requirements: ['5+ years experience', 'Product management', 'AI/ML knowledge', 'User research'],
      icon: <TrendingUp className="w-8 h-8" />,
      href: '/careers/product-manager',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const companyBenefits = [
    {
      title: 'Competitive Salary',
      description: 'Above-market compensation with equity options',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Remote First',
      description: 'Work from anywhere with flexible hours',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities and career development',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const cultureValues = [
    { label: 'Team Members', value: '200+', icon: <Users className="w-6 h-6" /> },
    { label: 'Countries', value: '25+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Remote Work', value: '100%', icon: <Star className="w-6 h-6" /> },
    { label: 'Growth Rate', value: '300%', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Careers - Zion Tech Group | Join Our Team of Innovators" 
          description="Join Zion Tech Group's team of innovators and help us revolutionize technology. Explore open positions, learn about our culture, and discover opportunities for growth." 
          canonical="https://ziontechgroup.com/company/careers/" 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join Our Team
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Help us revolutionize technology and shape the future. Join a team of innovators, problem-solvers, and visionaries.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {cultureValues.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Work at Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're building the future of technology, and we need brilliant minds to help us get there.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {companyBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role for your skills and passion.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300`}>
                      {position.icon}
                    </div>
                    <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {position.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                  <p className="text-gray-400 mb-4">{position.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-400">
                      <span className="text-cyan-400">Department:</span> {position.department}
                    </div>
                    <div className="text-sm text-gray-400">
                      <span className="text-cyan-400">Location:</span> {position.location}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Requirements:</h4>
                    {position.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {req}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <a
                      href={position.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Application Process</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our streamlined application process ensures you can focus on what matters most.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Submit Application</h3>
                  <p className="text-gray-400">Complete our online application with your resume and cover letter.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Initial Review</h3>
                  <p className="text-gray-400">Our team reviews your application within 48 hours.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Technical Assessment</h3>
                  <p className="text-gray-400">Complete a technical assessment relevant to your role.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Team Interviews</h3>
                  <p className="text-gray-400">Meet with team members and discuss your potential role.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Offer & Onboarding</h3>
                  <p className="text-gray-400">Receive your offer and begin your journey with us.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Mission?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Submit General Application
                </a>
                <a
                  href="/company/about"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default CareersPage;
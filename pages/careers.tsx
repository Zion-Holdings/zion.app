import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Rocket, 
  Brain, 
  Atom, 
  Zap, 
  Globe, 
  Heart, 
  ArrowRight, 
  CheckCircle,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Shield,
  Sparkles
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

const CareersPage: React.FC = () => {
  const benefits = [
    { title: 'Competitive Salary', icon: <DollarSign className="w-6 h-6" />, description: 'Above-market compensation with performance bonuses' },
    { title: 'Remote Work', icon: <Globe className="w-6 h-6" />, description: 'Work from anywhere in the world' },
    { title: 'Learning Budget', icon: <GraduationCap className="w-6 h-6" />, description: '$5,000 annual budget for courses and conferences' },
    { title: 'Health Benefits', icon: <Heart className="w-6 h-6" />, description: 'Comprehensive health, dental, and vision coverage' },
    { title: 'Flexible Hours', icon: <Clock className="w-6 h-6" />, description: 'Work when you are most productive' },
    { title: 'Stock Options', icon: <Award className="w-6 h-6" />, description: 'Ownership stake in the company' }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Artificial Intelligence',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['PhD in Computer Science or related field', 'Expertise in TensorFlow/PyTorch', 'Experience with large language models', 'Strong research background'],
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technologies',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop quantum algorithms and quantum-classical hybrid solutions.',
      requirements: ['MS/PhD in Physics or Computer Science', 'Experience with Qiskit/Cirq', 'Knowledge of quantum algorithms', 'Strong mathematical background'],
      icon: <Atom className="w-8 h-8" />
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and microservices architecture.',
      requirements: ['React/Next.js expertise', 'Node.js/Python experience', 'Database design skills', 'API development experience'],
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage cloud infrastructure and implement CI/CD pipelines.',
      requirements: ['AWS/Azure expertise', 'Kubernetes experience', 'Terraform knowledge', 'Monitoring and logging skills'],
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const values = [
    { title: 'Innovation First', description: 'We push the boundaries of what is possible', icon: <Sparkles className="w-8 h-8" /> },
    { title: 'Excellence', description: 'We strive for perfection in everything we do', icon: <Award className="w-8 h-8" /> },
    { title: 'Collaboration', description: 'Great ideas come from working together', icon: <Users className="w-8 h-8" /> },
    { title: 'Impact', description: 'We solve real-world problems that matter', icon: <Rocket className="w-8 h-8" /> }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Careers - Zion Tech Group | Join Our Revolutionary Technology Team</title>
          <meta name="description" content="Join Zion Tech Group's team of innovators. Explore career opportunities in AI, quantum computing, and emerging technologies. Remote work, competitive benefits, and cutting-edge projects." />
        </Head>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join Our Mission
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Help us revolutionize the future of technology. Work on cutting-edge AI, quantum computing, and emerging technology solutions that will shape tomorrow's world.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#open-positions"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We believe in taking care of our team members
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our team of innovators and problem solvers
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        {position.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                        <p className="text-cyan-400 mb-1">{position.department}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{position.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{position.type}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Award className="w-4 h-4" />
                            <span>{position.experience}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2"
              >
                <span>Send Your Resume</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
};

export default CareersPage;
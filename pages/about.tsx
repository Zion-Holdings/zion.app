import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Star, 
  Zap, 
  Brain, 
  Atom, 
  Rocket, 
  Shield, 
  Cloud, 
  TrendingUp,
  CheckCircle,
  Globe,
  Award,
  Heart,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology',
      icon: <Zap className="w-8 h-8 text-yellow-500" />
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service',
      icon: <Star className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical business practices',
      icon: <CheckCircle className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to achieve greatness',
      icon: <Users className="w-8 h-8 text-blue-500" />
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize technology'
    },
    {
      year: '2022',
      title: 'AI Breakthrough',
      description: 'Launched our first AI consciousness platform'
    },
    {
      year: '2023',
      title: 'Quantum Leap',
      description: 'Introduced quantum computing services'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded services to international markets'
    },
    {
      year: '2025',
      description: 'Pioneering the future of technology with revolutionary solutions'
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader driving innovation and growth',
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'AI Team',
      role: 'AI Research & Development',
      description: 'Experts in artificial intelligence and consciousness',
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Quantum Team',
      role: 'Quantum Computing',
      description: 'Pioneers in quantum technology and algorithms',
      icon: <Atom className="w-6 h-6" />
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity',
      description: 'Protecting digital assets with advanced security',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, values, and commitment to revolutionizing technology"
      canonicalUrl="https://ziontechgroup.com/about"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {' '}Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/mission"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Our Mission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/team"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Meet Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  To accelerate human progress through revolutionary technology solutions 
                  that solve the world's most complex challenges.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  We believe that technology should serve humanity, not replace it. 
                  Our AI consciousness platforms, quantum computing solutions, and 
                  autonomous systems are designed to augment human capabilities and 
                  create a better future for all.
                </p>
                <a
                  href="/mission"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Learn More About Our Mission
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
                  <Target className="w-24 h-24 mx-auto mb-6 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Vision 2045
                  </h3>
                  <p className="text-gray-300">
                    Leading the technological revolution with AI consciousness, 
                    quantum supremacy, and autonomous intelligence.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do and shape our company culture.
              </p>
            </motion.div>

          {/* Company History */}
          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Journey</h2>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">2023 - Foundation</h3>
                    <p className="text-white/80">
                      Zion Tech Group was founded with a vision to revolutionize technology through autonomous innovation. 
                      We started with a small team of AI researchers and automation experts.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-fuchsia-400 mb-2">2024 - Breakthrough</h3>
                    <p className="text-white/80">
                      Developed our first autonomous content generation system and launched the initial version of our 
                      cloud-native automation platform. Achieved 99.5% uptime milestone.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-2">2025 - Expansion</h3>
                    <p className="text-white/80">
                      Scaled to 227 active automations, generated over 2,960 pages, and achieved 99.9% system uptime. 
                      Launched advanced monitoring and self-healing capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Future - Innovation</h3>
                    <p className="text-white/80">
                      Continuing to push the boundaries of autonomous technology, developing next-generation AI systems, 
                      and expanding our global reach to serve clients worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Frontend & UI</h3>
                <div className="space-y-2 text-white/70">
                  <div>• Next.js 14 with TypeScript</div>
                  <div>• Tailwind CSS & Framer Motion</div>
                  <div>• React Hooks & Context API</div>
                  <div>• Progressive Web App (PWA)</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-fuchsia-400 mb-4">Backend & APIs</h3>
                <div className="space-y-2 text-white/70">
                  <div>• Node.js & Express.js</div>
                  <div>• GraphQL & REST APIs</div>
                  <div>• WebSocket for real-time data</div>
                  <div>• JWT authentication</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-green-400 mb-4">AI & Machine Learning</h3>
                <div className="space-y-2 text-white/70">
                  <div>• TensorFlow & PyTorch</div>
                  <div>• GPT-4 & Claude integration</div>
                  <div>• Custom ML models</div>
                  <div>• Natural language processing</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Infrastructure</h3>
                <div className="space-y-2 text-white/70">
                  <div>• Kubernetes & Docker</div>
                  <div>• AWS, Azure, GCP support</div>
                  <div>• CI/CD with GitHub Actions</div>
                  <div>• Monitoring with Prometheus</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Databases</h3>
                <div className="space-y-2 text-white/70">
                  <div>• PostgreSQL & MongoDB</div>
                  <div>• Redis for caching</div>
                  <div>• Elasticsearch for search</div>
                  <div>• Time-series databases</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">DevOps & Security</h3>
                <div className="space-y-2 text-white/70">
                  <div>• Terraform & Ansible</div>
                  <div>• OAuth 2.0 & OIDC</div>
                  <div>• Automated security scanning</div>
                  <div>• Compliance monitoring</div>
                </div>
              </div>
            </div>
          </section>

          {/* Team & Leadership */}
          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">CEO & Founder</h3>
                <p className="text-cyan-400 mb-3">Visionary Leader</p>
                <p className="text-white/70 text-sm">
                  Leading the company's strategic direction and driving innovation in autonomous technology.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👩‍💻</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">CTO</h3>
                <p className="text-fuchsia-400 mb-3">Technology Architect</p>
                <p className="text-white/70 text-sm">
                  Overseeing all technical operations and ensuring our platform remains cutting-edge.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👨‍🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Head of AI Research</h3>
                <p className="text-green-400 mb-3">AI Pioneer</p>
                <p className="text-white/70 text-sm">
                  Leading breakthrough research in autonomous systems and machine learning.
                </p>
              </div>
            </div>
          </section>

          {/* Achievements & Recognition */}
          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Achievements & Recognition</h2>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Industry Awards</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-400">🏆</span>
                      <span>Best AI Innovation 2024</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-400">🥇</span>
                      <span>Top Automation Platform</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-400">🌟</span>
                      <span>Excellence in Cloud Technology</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-fuchsia-400 mb-4">Certifications</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">✅</span>
                      <span>SOC 2 Type II Compliance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">✅</span>
                      <span>ISO 27001 Security</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">✅</span>
                      <span>GDPR Compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
              <p className="text-xl text-white/80 mb-8">
                Be part of the future of autonomous technology. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                  Get in Touch
                </a>
                <a href="/features" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-all duration-300">
                  Explore Our Platform
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the brilliant minds behind our revolutionary technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
                    <div className="text-purple-400">
                      {member.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Us in Shaping the Future
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of the technological revolution that's transforming 
                the world as we know it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Join Our Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;

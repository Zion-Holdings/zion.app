import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Globe, Award, Heart, Rocket, Star } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible in technology.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Customer Success',
      description: 'Your success is our mission. We\'re here to help you thrive.',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Creating solutions that make a difference worldwide.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'CEO & Founder',
      description: 'Visionary leader driving innovation and growth.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Leadership Team',
      role: 'Executive Leadership',
      description: 'Experienced professionals guiding our mission.',
      image: '/api/placeholder/150/150'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                <span>About Zion Tech Group</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  About
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                We are a forward-thinking technology company dedicated to revolutionizing 
                industries through cutting-edge AI, quantum computing, and innovative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  To empower businesses and organizations with next-generation technology 
                  solutions that drive innovation, efficiency, and growth in an ever-evolving digital landscape.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  We believe in creating technology that not only solves today's challenges 
                  but anticipates tomorrow's opportunities, ensuring our clients stay ahead of the curve.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Innovation Driven</h3>
                    <p className="text-gray-300">
                      We're constantly exploring new frontiers in technology to deliver 
                      solutions that transform industries and create lasting impact.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
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
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">227</div>
                  <div className="text-sm text-white/70">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fuchsia-400">2,960+</div>
                  <div className="text-sm text-white/70">Pages Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-white/70">Monitoring</div>
                </div>
              </div>
            </div>
          </section>

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
                Our Leadership Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Meet the visionaries and experts driving innovation at Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-500/30">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                      <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                      <p className="text-gray-300 leading-relaxed">{member.description}</p>
                    </div>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Work with Us?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how Zion Tech Group can help transform your business 
                with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Get in Touch
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

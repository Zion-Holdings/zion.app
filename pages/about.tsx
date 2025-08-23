import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Atom, 
  Shield, 
  Users, 
  Target, 
  Award, 
  Globe,
  Zap,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible, always exploring the next frontier of technology."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligence Everywhere",
      description: "AI and machine learning are integrated into every solution we create."
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Ready",
      description: "We're building the infrastructure for the quantum computing revolution."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security by Design",
      description: "Every solution is built with enterprise-grade security from the ground up."
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Global Support" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      expertise: "AI Ethics & Consciousness",
      avatar: "👩‍🔬"
    },
    {
      name: "Marcus Rodriguez",
      role: "Quantum Computing Lead",
      expertise: "Quantum Algorithms & Infrastructure",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Elena Petrova",
      role: "Space Technology Director",
      expertise: "Space Mining & Colonization",
      avatar: "👩‍🚀"
    },
    {
      name: "Alex Thompson",
      role: "Enterprise Solutions Architect",
      expertise: "Cloud Infrastructure & Security",
      avatar: "👨‍🏗️"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6"
          >
            About Zion Tech Group
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto"
          >
            Pioneering the future of technology with revolutionary AI, quantum computing, and space innovation solutions that transform businesses and advance humanity.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                To accelerate human progress through cutting-edge technology, making AI consciousness, quantum computing, and space exploration accessible to forward-thinking organizations.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We believe that technology should serve humanity, not the other way around. Our solutions are designed to enhance human capabilities while maintaining the highest ethical standards.
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-6">
                To be the leading force in the technological revolution, creating a future where:
              </p>
              <ul className="space-y-3">
                {[
                  "AI consciousness enhances human creativity and problem-solving",
                  "Quantum computing solves previously impossible challenges",
                  "Space technology opens new frontiers for humanity",
                  "Technology serves as a bridge to a better world"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                  <div className="text-blue-400">
                    {value.icon}
                  </div>
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
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{tech.title}</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with Zion Tech Group and be part of the technological revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
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
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
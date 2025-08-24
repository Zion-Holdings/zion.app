import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Zap, Shield, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches."
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Enterprise-grade security is built into everything we do, ensuring your data and systems are protected."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We measure success by the tangible impact our solutions have on your business outcomes."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We work as an extension of your team, deeply understanding your challenges and goals."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      expertise: "AI/ML, Quantum Computing",
      image: "/team/sarah-chen.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Engineering",
      expertise: "Cloud Architecture, DevOps",
      image: "/team/marcus-rodriguez.jpg"
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director",
      expertise: "Quantum Algorithms, Cryptography",
      image: "/team/emily-watson.jpg"
    },
    {
      name: "Alex Thompson",
      role: "Security Lead",
      expertise: "Cybersecurity, Compliance",
      image: "/team/alex-thompson.jpg"
    }
  ];

  const technologies = [
    "Artificial Intelligence & Machine Learning",
    "Quantum Computing & Cryptography",
    "Cloud-Native Architecture",
    "Blockchain & Web3",
    "Internet of Things (IoT)",
    "Cybersecurity & Zero Trust",
    "Edge Computing & 5G",
    "Sustainable Tech Solutions"
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Zion Tech Group's mission to transform businesses through cutting-edge technology solutions and innovation."
        keywords="about, mission, team, technology, innovation, Zion Tech Group"
      />
      
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We're a team of innovators, engineers, and visionaries dedicated to transforming businesses through cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-zion-blue">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                At Zion Tech Group, we believe that technology should be a force for good, driving innovation and creating value for businesses and society. Our mission is to democratize access to cutting-edge technology solutions, making them accessible to organizations of all sizes.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                We're committed to building solutions that not only solve today's challenges but also anticipate tomorrow's opportunities. Through our expertise in AI, quantum computing, cybersecurity, and digital transformation, we help businesses stay ahead of the curve and achieve sustainable growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Why We Exist</h3>
              <ul className="space-y-3 text-zion-slate-light">
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan mt-1">•</span>
                  <span>To bridge the gap between cutting-edge research and practical business applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan mt-1">•</span>
                  <span>To make advanced technology accessible and affordable for all businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan mt-1">•</span>
                  <span>To drive sustainable innovation that benefits society and the environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan mt-1">•</span>
                  <span>To build a future where technology empowers human potential</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              These principles guide everything we do, from how we develop solutions to how we interact with our clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-zion-purple to-zion-cyan">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-zion-blue">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our diverse team brings together expertise from leading tech companies, research institutions, and innovative startups.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-zion-cyan font-medium mb-2">{member.role}</p>
                <p className="text-zion-slate-light text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Technologies We Master</h2>
              <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
                Our expertise spans the full spectrum of cutting-edge technologies, from established platforms to emerging innovations that will define the future.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span className="text-zion-slate-light">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Research & Innovation</h4>
                    <p className="text-zion-slate-light text-sm">We stay at the forefront of technology trends and breakthroughs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Application</h4>
                    <p className="text-zion-slate-light text-sm">We translate cutting-edge research into practical business solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Continuous Evolution</h4>
                    <p className="text-zion-slate-light text-sm">We continuously evolve our solutions based on real-world feedback</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our team can help you achieve your technology goals and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

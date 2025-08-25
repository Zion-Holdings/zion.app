import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Zap, ArrowRight, CheckCircle, Star, Rocket, Shield, Cpu, Brain } from 'lucide-react';
import { SEO } from '@/components/SEO';

const values = [
  {
    title: "Innovation First",
    description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches.",
    icon: Zap,
    color: "text-zion-cyan"
  },
  {
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering solutions that drive real business value.",
    icon: Target,
    color: "text-zion-purple"
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards of quality in everything we do, from code to customer service.",
    icon: Award,
    color: "text-green-400"
  },
  {
    title: "Global Impact",
    description: "We believe technology should make the world better, more connected, and more sustainable.",
    icon: Globe,
    color: "text-blue-400"
  }
];

const team = [
  {
    name: "Kleber Santos",
    role: "Founder & CEO",
    description: "Visionary leader with 15+ years in technology and business transformation.",
    expertise: ["AI & Machine Learning", "Digital Transformation", "Strategic Planning"]
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    description: "Technology expert specializing in cloud architecture and emerging technologies.",
    expertise: ["Cloud Computing", "DevOps", "Emerging Tech"]
  },
  {
    name: "Michael Rodriguez",
    role: "VP of Engineering",
    description: "Engineering leader focused on scalable solutions and technical excellence.",
    expertise: ["Software Architecture", "Team Leadership", "Quality Assurance"]
  }
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Zion Tech Group established with a vision to transform businesses through technology."
  },
  {
    year: "2021",
    title: "First AI Solutions",
    description: "Successfully deployed our first AI-powered business solutions for enterprise clients."
  },
  {
    year: "2022",
    title: "Cloud Platform Launch",
    description: "Launched our comprehensive cloud and DevOps platform serving 100+ clients."
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded operations internationally, serving clients across 15+ countries."
  },
  {
    year: "2024",
    title: "Innovation Leader",
    description: "Recognized as a leader in emerging technology solutions and digital transformation."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="About Us - Zion Tech Group" 
        description="Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions, AI, and digital transformation."
        keywords="about us, Zion Tech Group, company history, team, mission, values, technology company"
        canonical="https://ziontechgroup.com/about"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              About
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              We're a forward-thinking technology company dedicated to transforming businesses through 
              innovative AI solutions, cloud computing, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/careers"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Join Our Team
                <Users className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our Mission
            </h2>
            <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
              To democratize cutting-edge technology and make AI, cloud computing, and digital transformation 
              accessible to businesses of all sizes. We believe that every organization deserves access to 
              the tools and expertise needed to thrive in the digital age.
            </p>
            <p className="text-lg text-zion-slate-light leading-relaxed">
              Through our innovative solutions and dedicated team, we're helping companies across industries 
              transform their operations, enhance customer experiences, and achieve sustainable growth.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
                  <div className="text-zion-slate-light">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-purple mb-2">200+</div>
                  <div className="text-zion-slate-light">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                  <div className="text-zion-slate-light">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                  <div className="text-zion-slate-light">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Core Values
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            The principles that guide everything we do and shape our company culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-zion-purple/20 rounded-lg ${value.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Experienced professionals passionate about technology and committed to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <div className="text-zion-cyan font-medium">{member.role}</div>
              </div>
              <p className="text-zion-slate-light mb-6 text-center">{member.description}</p>
              <div>
                <h4 className="text-white font-semibold mb-3">Expertise:</h4>
                <ul className="space-y-2">
                  {member.expertise.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Journey
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Key milestones that have shaped our company and our impact on the technology industry.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-zion-cyan/30 h-full"></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300">
                  <div className="text-zion-cyan font-bold text-lg mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-zion-slate-light">{milestone.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already transformed their business with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your Project
                <Rocket className="w-5 h-5" />
              </Link>
              <Link
                to="/careers"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Users className="w-5 h-5" />
                Join Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

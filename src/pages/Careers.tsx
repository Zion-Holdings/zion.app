import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Zap, ArrowRight, CheckCircle, Star, Rocket, Shield, Cpu, Brain, Mail, MapPin, Phone } from 'lucide-react';
import { SEO } from '@/components/SEO';

const openPositions = [
  {
    title: "Senior AI Engineer",
    department: "AI & Machine Learning",
    location: "Remote / Middletown, DE",
    type: "Full-time",
    experience: "5+ years",
    description: "Join our AI team to develop cutting-edge machine learning models and AI solutions for enterprise clients.",
    requirements: [
      "Strong background in machine learning and deep learning",
      "Experience with Python, TensorFlow, PyTorch",
      "Knowledge of cloud platforms (AWS, Azure, GCP)",
      "Experience with MLOps and model deployment"
    ]
  },
  {
    title: "Cloud DevOps Engineer",
    department: "Cloud & DevOps",
    location: "Remote / Middletown, DE",
    type: "Full-time",
    experience: "3+ years",
    description: "Help us build scalable cloud infrastructure and automate deployment processes for our clients.",
    requirements: [
      "Experience with AWS, Azure, or Google Cloud",
      "Knowledge of Kubernetes and Docker",
      "Experience with CI/CD pipelines",
      "Infrastructure as Code (Terraform, CloudFormation)"
    ]
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote / Middletown, DE",
    type: "Full-time",
    experience: "3+ years",
    description: "Build modern web applications and microservices that power our technology platform.",
    requirements: [
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with modern web technologies",
      "Knowledge of database design and APIs",
      "Understanding of cloud-native development"
    ]
  },
  {
    title: "Digital Transformation Consultant",
    department: "Consulting",
    location: "Remote / Middletown, DE",
    type: "Full-time",
    experience: "5+ years",
    description: "Guide clients through their digital transformation journey with strategic planning and implementation.",
    requirements: [
      "Experience in business transformation projects",
      "Knowledge of emerging technologies",
      "Strong consulting and communication skills",
      "Project management experience"
    ]
  }
];

const benefits = [
  {
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours and a supportive remote environment",
    icon: Globe,
    color: "text-zion-cyan"
  },
  {
    title: "Professional Growth",
    description: "Continuous learning opportunities, conferences, and career development programs",
    icon: Brain,
    color: "text-zion-purple"
  },
  {
    title: "Innovation Projects",
    description: "Work on cutting-edge technology projects that shape the future of business",
    icon: Zap,
    color: "text-green-400"
  },
  {
    title: "Competitive Benefits",
    description: "Health insurance, 401k, unlimited PTO, and equity participation",
    icon: Award,
    color: "text-blue-400"
  }
];

const values = [
  {
    title: "Innovation",
    description: "We encourage creative thinking and experimentation with new technologies."
  },
  {
    title: "Collaboration",
    description: "Teamwork and knowledge sharing are at the heart of our success."
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we deliver."
  },
  {
    title: "Growth",
    description: "Continuous learning and personal development are core to our culture."
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Careers - Join Zion Tech Group" 
        description="Join our team of innovators and technology experts. Explore career opportunities at Zion Tech Group."
        keywords="careers, jobs, employment, Zion Tech Group, technology careers, remote jobs"
        canonical="https://ziontechgroup.com/careers"
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
              Join Our
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Be part of a team that's shaping the future of technology. Work on cutting-edge projects, 
              learn from experts, and grow your career with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Contact Us
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Work With Us?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Join a company that values innovation, growth, and making a real impact in the technology world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-zion-purple/20 rounded-lg ${benefit.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Company Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Company Values
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            These principles guide our work and shape our company culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 text-center"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-zion-slate-light text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Open Positions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Explore our current job openings and find the perfect role for your skills and career goals.
          </p>
        </motion.div>

        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-semibold text-white">{position.title}</h3>
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-zion-slate-light">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {position.department}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {position.experience}
                    </div>
                  </div>
                  
                  <p className="text-zion-slate-light mb-4">{position.description}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement) => (
                        <li key={requirement} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="lg:text-right">
                  <a
                    href="mailto:careers@ziontechgroup.com?subject=Application for ${position.title}"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Email Us</div>
                <a href="mailto:careers@ziontechgroup.com" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  careers@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Call Us</div>
                <a href="tel:+13024640950" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Visit Us</div>
                <div className="text-zion-slate-light">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com?subject=General Application"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Send Your Resume
                <Rocket className="w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <CheckCircle className="w-5 h-5" />
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
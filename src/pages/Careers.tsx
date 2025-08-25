import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Eye, Heart, Award, CheckCircle, Star, Globe, Zap, Shield, Cpu, Cloud, Brain, Rocket, MapPin, Clock, DollarSign, Briefcase } from 'lucide-react';
import { SEO } from '@/components/SEO';

const Careers = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Lead AI/ML initiatives and develop cutting-edge machine learning solutions for enterprise clients.",
      requirements: [
        "Advanced degree in Computer Science, AI, or related field",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with large-scale ML systems",
        "Strong problem-solving and communication skills"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $140,000",
      description: "Build and maintain scalable cloud infrastructure and CI/CD pipelines for our clients.",
      requirements: [
        "Experience with AWS, Azure, or GCP",
        "Knowledge of Docker, Kubernetes, Terraform",
        "CI/CD pipeline development experience",
        "Strong scripting skills (Python, Bash)"
      ]
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$80,000 - $130,000",
      description: "Develop modern web applications and microservices using cutting-edge technologies.",
      requirements: [
        "Proficiency in React, Node.js, TypeScript",
        "Experience with cloud platforms and databases",
        "Understanding of microservices architecture",
        "Agile development experience"
      ]
    },
    {
      title: "Digital Transformation Consultant",
      department: "Consulting",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      salary: "$100,000 - $160,000",
      description: "Guide clients through digital transformation initiatives and technology modernization.",
      requirements: [
        "Experience in technology consulting or digital transformation",
        "Strong business acumen and client relationship skills",
        "Knowledge of emerging technologies and trends",
        "Project management and change management experience"
      ]
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages with performance bonuses and equity options",
      icon: DollarSign,
      color: "text-green-400"
    },
    {
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible scheduling and work-life balance",
      icon: Globe,
      color: "text-blue-400"
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities, certifications, and career advancement",
      icon: Rocket,
      color: "text-purple-400"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs",
      icon: Heart,
      color: "text-red-400"
    }
  ];

  const culture = [
    {
      title: "Innovation-Driven",
      description: "We encourage experimentation and pushing boundaries in everything we do",
      icon: Brain,
      color: "text-cyan-400"
    },
    {
      title: "Collaborative",
      description: "Teamwork and knowledge sharing are at the heart of our success",
      icon: Users,
      color: "text-green-400"
    },
    {
      title: "Client-Focused",
      description: "We measure our success by our clients' success and satisfaction",
      icon: Target,
      color: "text-blue-400"
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and development",
      icon: Award,
      color: "text-yellow-400"
    }
  ];

  return (
    <>
      <SEO 
        title="Careers | Zion Tech Group"
        description="Join our team of technology innovators. Explore career opportunities at Zion Tech Group and be part of transforming businesses through technology."
        keywords="careers, jobs, employment, Zion Tech Group, technology jobs, remote work"
      />
      
      <div className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-20"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                Join Our Team
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Build the Future with
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Join our team of technology innovators and help transform businesses through 
                cutting-edge AI, cloud solutions, and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#open-positions"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Culture & Values */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Culture & Values
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                We foster an environment where innovation thrives, collaboration is celebrated, and every team member can grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {culture.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                We offer competitive benefits and a supportive environment where you can thrive and grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Join our team and help us build the future of technology solutions.
              </p>
            </motion.div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {position.title}
                      </h3>
                      <p className="text-zion-slate-light mb-4">
                        {position.description}
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Briefcase className="w-4 h-4 text-zion-cyan" />
                          {position.department}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <MapPin className="w-4 h-4 text-zion-cyan" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Clock className="w-4 h-4 text-zion-cyan" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Users className="w-4 h-4 text-zion-cyan" />
                          {position.experience}
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="text-zion-cyan font-semibold">Salary: {position.salary}</span>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                              <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:flex-shrink-0">
                      <button className="w-full lg:w-auto px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Don't See the Right Fit?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Send Resume
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Eye, Heart, Award, CheckCircle, Star, Globe, Zap, Shield, Cpu, Cloud, Brain, Rocket, MapPin, Clock, DollarSign, Briefcase } from 'lucide-react';

const Careers: React.FC = () => {
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
        "Strong problem-solving and collaboration skills"
      ]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      salary: "$100,000 - $150,000",
      description: "Protect our clients' digital assets and implement robust security solutions.",
      requirements: [
        "Certifications in CISSP, CISM, or equivalent",
        "Experience with security frameworks and compliance",
        "Knowledge of threat detection and response",
        "Strong analytical and communication skills"
      ]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      salary: "$110,000 - $160,000",
      description: "Drive product strategy and lead cross-functional teams to deliver innovative solutions.",
      requirements: [
        "Experience in B2B SaaS or enterprise software",
        "Strong analytical and strategic thinking",
        "Excellent stakeholder management skills",
        "Background in technology or engineering"
      ]
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$85,000 - $140,000",
      description: "Bridge the gap between technical solutions and business needs for enterprise clients.",
      requirements: [
        "Technical background in software or IT",
        "Strong presentation and communication skills",
        "Experience with enterprise sales cycles",
        "Ability to understand complex technical concepts"
      ]
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Remote First",
      description: "Work from anywhere with our distributed team culture"
    },
    {
      icon: Zap,
      title: "Flexible Hours",
      description: "Choose your schedule and work-life balance"
    },
    {
      icon: Shield,
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision coverage"
    },
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Above-market compensation with equity options"
    },
    {
      icon: Brain,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and certifications"
    },
    {
      icon: Users,
      title: "Team Events",
      description: "Regular team building and networking opportunities"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies"
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Our clients' success is our primary mission"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do"
    },
    {
      icon: Star,
      title: "Growth Mindset",
      description: "Continuous learning and personal development"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's innovative team. Explore career opportunities in AI, cybersecurity, software development, and emerging technologies." />
        <meta name="keywords" content="careers, jobs, employment, Zion Tech Group, AI engineer, DevOps, cybersecurity, software development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Join Our Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Be part of a team that's shaping the future of technology. Work on cutting-edge AI, 
              cybersecurity, and digital transformation projects that make a real impact.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg font-medium transition-all duration-300">
                Learn About Culture
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Company Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-300">
              We invest in our team's success and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300">
              Join our mission to transform the future of technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-gray-400 text-sm">{position.department}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full border border-green-500/30">
                    {position.type}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    {position.experience}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <DollarSign className="w-4 h-4" />
                    {position.salary}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Briefcase className="w-4 h-4" />
                    {position.department}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="container mx-auto px-4 py-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/30">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume 
              and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Send Resume
              </button>
              <button className="px-8 py-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg font-medium transition-all duration-300">
                Contact HR Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Careers;
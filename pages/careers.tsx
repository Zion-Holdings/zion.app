import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Briefcase, Globe, Brain, Zap, Shield, 
  CheckCircle, ArrowRight, MapPin, Clock, DollarSign
} from 'lucide-react';

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Research Engineer",
      department: "AI Research",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Lead research in artificial intelligence, machine learning, and autonomous systems. Develop cutting-edge AI solutions for enterprise applications.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "Expertise in deep learning, neural networks, and ML frameworks",
        "Experience with large language models and AI ethics",
        "Strong publication record in top-tier conferences"
      ],
      responsibilities: [
        "Lead AI research projects and initiatives",
        "Develop novel machine learning algorithms",
        "Collaborate with cross-functional teams",
        "Mentor junior researchers and engineers"
      ]
    },
    {
      id: 2,
      title: "Quantum Computing Software Engineer",
      department: "Quantum Computing",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100,000 - $150,000",
      description: "Develop quantum computing software and algorithms. Work on quantum-classical hybrid systems and quantum applications.",
      requirements: [
        "MS/PhD in Physics, Computer Science, or related field",
        "Experience with quantum programming languages (Qiskit, Cirq)",
        "Knowledge of quantum algorithms and quantum mechanics",
        "Strong software engineering skills"
      ],
      responsibilities: [
        "Develop quantum computing applications",
        "Implement quantum algorithms",
        "Optimize quantum-classical workflows",
        "Contribute to quantum software architecture"
      ]
    },
    {
      id: 3,
      title: "Cybersecurity Architect",
      department: "Cybersecurity",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "7+ years",
      salary: "$130,000 - $200,000",
      description: "Design and implement enterprise cybersecurity solutions. Lead security architecture for AI and quantum systems.",
      requirements: [
        "BS/MS in Cybersecurity, Computer Science, or related field",
        "Expertise in zero-trust architecture and security frameworks",
        "Experience with AI-powered security solutions",
        "Certifications: CISSP, CISM, or equivalent"
      ],
      responsibilities: [
        "Design security architecture for enterprise systems",
        "Implement zero-trust security frameworks",
        "Lead security assessments and audits",
        "Develop security policies and procedures"
      ]
    },
    {
      id: 4,
      title: "Space Technology Engineer",
      department: "Space Technology",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110,000 - $160,000",
      description: "Develop space technology solutions including satellite operations, space resource mining, and orbital analytics.",
      requirements: [
        "BS/MS in Aerospace Engineering, Physics, or related field",
        "Experience with satellite systems and orbital mechanics",
        "Knowledge of space technology and exploration",
        "Programming skills in Python, C++, or similar"
      ],
      responsibilities: [
        "Design satellite systems and operations",
        "Develop space resource mining technologies",
        "Implement orbital analytics platforms",
        "Collaborate with space industry partners"
      ]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $140,000",
      description: "Build and maintain cloud infrastructure, CI/CD pipelines, and automation systems for our technology platforms.",
      requirements: [
        "BS in Computer Science or related field",
        "Experience with AWS, Azure, or GCP",
        "Expertise in Docker, Kubernetes, and Terraform",
        "Strong scripting skills (Python, Bash, PowerShell)"
      ],
      responsibilities: [
        "Manage cloud infrastructure and services",
        "Build and maintain CI/CD pipelines",
        "Implement infrastructure as code",
        "Monitor system performance and reliability"
      ]
    },
    {
      id: 6,
      title: "Product Manager - AI Solutions",
      department: "Product Management",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      salary: "$100,000 - $150,000",
      description: "Lead product strategy and development for AI-powered enterprise solutions. Drive product vision and roadmap.",
      requirements: [
        "BS/MS in Business, Engineering, or related field",
        "Experience in AI/ML product management",
        "Strong analytical and strategic thinking skills",
        "Experience with enterprise software products"
      ],
      responsibilities: [
        "Define product strategy and roadmap",
        "Gather and prioritize customer requirements",
        "Work with engineering teams on product development",
        "Drive product launches and go-to-market strategies"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with our distributed team approach."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities and access to cutting-edge technologies."
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Collaborative Environment",
      description: "Work with brilliant minds across diverse disciplines and backgrounds."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Innovation Focus",
      description: "Contribute to revolutionary technologies that shape the future."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs for you and your family."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-teal-400" />,
      title: "Career Growth",
      description: "Clear career progression paths and opportunities for advancement."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Build the future with Zion Tech Group. Join our team of innovators, 
                researchers, and engineers revolutionizing technology.
              </p>
              <div className="mt-8">
                <a 
                  href="#openings"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Join Zion Tech Group?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're building the future of technology. Join us in creating revolutionary 
                AI, quantum computing, and autonomous systems.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gray-700/50 rounded-xl">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for your skills and career goals.
              </p>
            </motion.div>

            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-gray-400 mb-2">{job.department}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <a 
                        href={`/careers/${job.id}`}
                        className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Application Process</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our streamlined application process ensures a smooth experience for all candidates.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Apply", description: "Submit your application with resume and cover letter" },
                { step: "2", title: "Review", description: "Our team reviews your application and qualifications" },
                { step: "3", title: "Interview", description: "Multi-round interviews with team members and leaders" },
                { step: "4", title: "Offer", description: "Receive your offer and join our amazing team" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our team of innovators and help us revolutionize technology 
                through AI, quantum computing, and autonomous systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact?service=Careers"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Our Team
                </a>
                <a 
                  href="/about"
                  className="px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
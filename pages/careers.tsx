import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Target, 
  Briefcase, GraduationCap, Heart, Lightbulb,
  Clock, DollarSign, Globe2, Users2,
  Users, Award, Globe, MapPin, CheckCircle, Star
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Positions', icon: Briefcase, color: 'from-cyan-500 to-blue-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-cyan-500' },
    { id: 'engineering', name: 'Engineering', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'business', name: 'Business & Sales', icon: Target, color: 'from-emerald-500 to-teal-500' },
    { id: 'research', name: 'Research & Development', icon: Rocket, color: 'from-indigo-500 to-purple-500' }
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior AI Consciousness Engineer",
      category: "ai",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      salary: "$150K - $200K",
      description: "Lead the development of next-generation AI consciousness platforms and emotional intelligence systems.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "Experience with neural networks and consciousness research",
        "Strong background in machine learning and deep learning",
        "Experience with quantum computing concepts",
        "Leadership experience in AI research teams"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Flexible remote work environment",
        "Cutting-edge technology access",
        "Professional development opportunities",
        "Health, dental, and vision coverage"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Quantum Computing Research Scientist",
      category: "quantum",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$130K - $180K",
      description: "Research and develop quantum computing algorithms and quantum-resistant security solutions.",
      requirements: [
        "PhD in Physics, Computer Science, or related field",
        "Experience with quantum algorithms and quantum mechanics",
        "Knowledge of quantum error correction",
        "Experience with quantum programming languages",
        "Strong mathematical and analytical skills"
      ],
      benefits: [
        "Access to quantum computing resources",
        "Collaboration with leading researchers",
        "Conference attendance and publications",
        "Competitive benefits package",
        "Innovation-focused work environment"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Senior Full-Stack Engineer",
      category: "engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      salary: "$120K - $160K",
      description: "Build scalable web applications and platforms for our revolutionary technology services.",
      requirements: [
        "Strong experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of microservices architecture",
        "Experience with database design and optimization",
        "DevOps and CI/CD experience"
      ],
      benefits: [
        "Modern tech stack and tools",
        "Remote-first work culture",
        "Professional development budget",
        "Flexible working hours",
        "Competitive salary and benefits"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      id: 4,
      title: "AI Business Development Manager",
      category: "business",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100K - $140K + Commission",
      description: "Drive business growth by identifying opportunities and building relationships with enterprise clients.",
      requirements: [
        "Experience in B2B sales or business development",
        "Knowledge of AI and technology solutions",
        "Strong communication and presentation skills",
        "Experience with enterprise sales cycles",
        "Track record of meeting sales targets"
      ],
      benefits: [
        "Uncapped commission structure",
        "Professional development opportunities",
        "Flexible work environment",
        "Travel opportunities",
        "Performance-based bonuses"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 5,
      title: "Space Technology Research Lead",
      category: "research",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "6+ years",
      salary: "$160K - $220K",
      description: "Lead research initiatives in AI-powered space resource intelligence and autonomous exploration systems.",
      requirements: [
        "PhD in Aerospace Engineering, Physics, or related field",
        "Experience with space technology and satellite systems",
        "Knowledge of AI and machine learning applications",
        "Experience leading research teams",
        "Publications in relevant scientific journals"
      ],
      benefits: [
        "Cutting-edge space technology access",
        "Collaboration with space agencies",
        "Research publication support",
        "Competitive salary and equity",
        "Innovation-focused environment"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "AI Ethics & Governance Specialist",
      category: "ai",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110K - $150K",
      description: "Develop and implement ethical frameworks for AI consciousness and autonomous systems.",
      requirements: [
        "Advanced degree in Ethics, Philosophy, or related field",
        "Experience with AI ethics and governance",
        "Knowledge of regulatory frameworks",
        "Strong analytical and communication skills",
        "Experience in policy development"
      ],
      benefits: [
        "Impact on AI development direction",
        "Collaboration with ethicists and policymakers",
        "Professional development opportunities",
        "Competitive benefits package",
        "Meaningful work with global impact"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const companyCulture = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We encourage creative thinking and breakthrough ideas that push the boundaries of what's possible.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with brilliant minds from diverse backgrounds in an inclusive and supportive culture.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement in cutting-edge technology fields.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options to maintain your well-being.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Globe2,
      title: "Global Impact",
      description: "Your work contributes to revolutionary technologies that benefit humanity worldwide.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Competitive compensation, equity options, and recognition for outstanding contributions.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Above-market compensation with equity options",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work when you're most productive",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Remote Work",
      description: "Work from anywhere in the world",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "Annual budget for courses and conferences",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Users2,
      title: "Team Events",
      description: "Regular team building and social activities",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Time",
      description: "Dedicated time for personal projects",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? openPositions 
    : openPositions.filter(job => job.category === selectedCategory);

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Join Our Revolution
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Help us build the future of AI consciousness, quantum computing, and autonomous technology. 
                Join a team of visionaries transforming the world.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#open-positions"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Culture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We foster an environment where innovation thrives, collaboration flourishes, and every team member can make a meaningful impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyCulture.map((culture, index) => (
                <motion.div
                  key={culture.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${culture.color} p-4`}>
                    <culture.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{culture.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{culture.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We believe in taking care of our team with comprehensive benefits and perks that support your growth and well-being.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${benefit.color} p-4`}>
                    <benefit.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our revolutionary team and help shape the future of technology
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {jobCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${job.color} p-3`}>
                          <Briefcase className="w-full h-full text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
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
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300">
                                <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:flex-shrink-0">
                      <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 p-6">
                  <Briefcase className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No positions available</h3>
                <p className="text-gray-300 mb-6">
                  We don't have any open positions in this category at the moment.
                </p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  View All Positions
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't See the Right Fit?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our revolutionary mission.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Send Your Resume
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CareersPage;
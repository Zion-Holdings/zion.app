import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Heart, Star, Award, Globe, 
  ArrowRight, CheckCircle, TrendingUp, Infinity, 
  Eye, Sparkles, Clock, Zap, Lightbulb,
  Coffee, Gamepad2, BookOpen, Music, Camera,
  Palette, Dumbbell, TreePine, Globe2
} from 'lucide-react';
import Link from 'next/link';

const CulturePage: React.FC = () => {
  const culturePillars = [
    {
      icon: Heart,
      title: "People First",
      description: "We believe that our people are our greatest asset. We invest in their growth, well-being, and success.",
      color: "from-red-500 to-pink-500",
      examples: [
        "Comprehensive health and wellness programs",
        "Flexible work arrangements and remote options",
        "Mental health support and counseling services",
        "Family-friendly policies and benefits"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      description: "We foster an environment where creativity thrives and innovative ideas are celebrated and nurtured.",
      color: "from-yellow-500 to-orange-500",
      examples: [
        "20% time for personal projects and innovation",
        "Regular hackathons and innovation challenges",
        "Creative spaces and collaboration areas",
        "Recognition for breakthrough ideas"
      ]
    },
    {
      icon: Globe2,
      title: "Diversity & Inclusion",
      description: "We celebrate diversity and create an inclusive environment where everyone feels valued and heard.",
      color: "from-green-500 to-emerald-500",
      examples: [
        "Diverse hiring practices and inclusive policies",
        "Employee resource groups and communities",
        "Cultural awareness and sensitivity training",
        "Equal opportunities for growth and advancement"
      ]
    },
    {
      icon: Users,
      title: "Collaboration & Teamwork",
      description: "We believe that the best results come from working together and supporting each other.",
      color: "from-blue-500 to-cyan-500",
      examples: [
        "Cross-functional project teams",
        "Regular team building activities",
        "Open communication and feedback culture",
        "Mentorship and knowledge sharing programs"
      ]
    }
  ];

  const workLifeBalance = [
    {
      icon: Coffee,
      title: "Flexible Work Hours",
      description: "Work when you're most productive, with flexible start and end times"
    },
    {
      icon: Globe,
      title: "Remote Work Options",
      description: "Work from anywhere with our global remote work policies"
    },
    {
      icon: Dumbbell,
      title: "Wellness Programs",
      description: "Gym memberships, fitness classes, and wellness challenges"
    },
    {
      icon: TreePine,
      title: "Unlimited PTO",
      description: "Take time off when you need it to recharge and stay balanced"
    }
  ];

  const funActivities = [
    {
      icon: Gamepad2,
      title: "Gaming & Entertainment",
      description: "Game rooms, VR setups, and regular gaming tournaments"
    },
    {
      icon: Music,
      title: "Music & Arts",
      description: "Music rooms, art supplies, and creative expression spaces"
    },
    {
      icon: Camera,
      title: "Photography & Media",
      description: "Photo walks, video projects, and creative media workshops"
    },
    {
      icon: Palette,
      title: "Creative Workshops",
      description: "Regular art, craft, and creative skill-building sessions"
    }
  ];

  const growthOpportunities = [
    {
      icon: BookOpen,
      title: "Learning & Development",
      description: "Continuous learning opportunities, courses, and certifications"
    },
    {
      icon: Star,
      title: "Career Advancement",
      description: "Clear career paths and promotion opportunities"
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Regular recognition programs and performance rewards"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Formal and informal mentorship programs"
    }
  ];

  const teamQuotes = [
    {
      quote: "Zion Tech Group isn't just a company—it's a family. The support and encouragement I've received here have been incredible.",
      author: "Sarah Chen",
      role: "Senior AI Engineer",
      avatar: "/images/team/sarah-chen.jpg"
    },
    {
      quote: "The culture here encourages innovation and risk-taking. I've never felt more empowered to push boundaries and create something amazing.",
      author: "Marcus Rodriguez",
      role: "Quantum Computing Specialist",
      avatar: "/images/team/marcus-rodriguez.jpg"
    },
    {
      quote: "Work-life balance is real here. I can pursue my passion for technology while maintaining a healthy personal life.",
      author: "Emily Watson",
      role: "Space Technology Lead",
      avatar: "/images/team/emily-watson.jpg"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Our Culture
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Life at Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover what makes Zion Tech Group an extraordinary place to work, grow, and innovate. 
                Our culture is built on trust, creativity, and a shared passion for transforming the future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Culture Pillars */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Culture Pillars</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These fundamental principles guide everything we do and shape our workplace culture.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {culturePillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${pillar.color} mr-6`}>
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                  </div>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">{pillar.description}</p>
                  <div className="space-y-3">
                    {pillar.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{example}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work-Life Balance */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Work-Life Balance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We believe that happy, balanced employees are the most productive and innovative.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workLifeBalance.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                    <benefit.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fun & Activities */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Fun & Activities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Work hard, play hard! We believe in having fun and building strong relationships outside of work.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {funActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                    <activity.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Opportunities */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Growth & Development</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your success is our success. We provide numerous opportunities for professional and personal growth.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {growthOpportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
                    <opportunity.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{opportunity.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{opportunity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Quotes */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Team Says</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear directly from our team members about their experience working at Zion Tech Group.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamQuotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-4">
                      <Users className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic mb-6 leading-relaxed">
                    "{quote.quote}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-white">{quote.author}</div>
                    <div className="text-sm text-gray-400">{quote.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                If our culture resonates with you and you're excited about the opportunity to work with 
                revolutionary technology, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  <Award className="w-5 h-5 mr-2" />
                  View Open Positions
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CulturePage;
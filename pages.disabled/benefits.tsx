import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Heart, Shield, DollarSign, GraduationCap, Globe, 
  ArrowRight, CheckCircle, TrendingUp, Infinity, 
  Eye, Sparkles, Clock, Zap, Users, Award,
  Coffee, Dumbbell, TreePine, Home, Car, Plane,
  BookOpen, Monitor, Smartphone, Wifi, Utensils
} from 'lucide-react';

const BenefitsPage: React.FC = () => {
  const benefitCategories = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage and wellness programs to keep you healthy and happy',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      benefits: [
        {
          name: 'Medical, Dental & Vision',
          description: '100% employer-paid premium coverage for you and your family',
          details: ['Comprehensive medical coverage', 'Dental and vision plans', 'Prescription drug coverage', 'Mental health services']
        },
        {
          name: 'Wellness Programs',
          description: 'Gym memberships, fitness classes, and wellness challenges',
          details: ['Free gym memberships', 'On-site fitness classes', 'Wellness challenges and rewards', 'Health coaching services']
        },
        {
          name: 'Mental Health Support',
          description: 'Professional counseling and mental health resources',
          details: ['Employee assistance program', 'Mental health counseling', 'Stress management workshops', 'Meditation and mindfulness programs']
        }
      ]
    },
    {
      title: 'Financial Security',
      description: 'Competitive compensation and financial benefits to secure your future',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      benefits: [
        {
          name: 'Competitive Salary',
          description: 'Above-market compensation with regular performance reviews',
          details: ['Market-leading base salaries', 'Performance-based bonuses', 'Annual salary reviews', 'Equity participation']
        },
        {
          name: '401(k) & Retirement',
          description: 'Generous retirement savings with employer matching',
          details: ['401(k) with 6% employer match', 'Roth 401(k) options', 'Financial planning services', 'Retirement education']
        },
        {
          name: 'Stock Options & Equity',
          description: 'Ownership in the company through stock options and equity grants',
          details: ['Stock option grants', 'Restricted stock units', 'Performance equity awards', 'Employee stock purchase plan']
        }
      ]
    },
    {
      title: 'Learning & Development',
      description: 'Continuous learning opportunities to advance your career and skills',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        {
          name: 'Professional Development',
          description: 'Courses, certifications, and learning resources',
          details: ['Unlimited learning budget', 'Professional certifications', 'Conference attendance', 'Online learning platforms']
        },
        {
          name: 'Tuition Reimbursement',
          description: 'Support for advanced degrees and continuing education',
          details: ['Graduate degree support', 'Course reimbursement', 'Professional development', 'Industry certifications']
        },
        {
          name: 'Internal Training',
          description: 'Company-sponsored training and skill development',
          details: ['Technical workshops', 'Leadership training', 'Soft skills development', 'Cross-functional training']
        }
      ]
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and time off to maintain work-life harmony',
      icon: Clock,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        {
          name: 'Flexible Work Arrangements',
          description: 'Remote work options and flexible scheduling',
          details: ['100% remote work option', 'Flexible start/end times', 'Hybrid work models', 'Work from anywhere']
        },
        {
          name: 'Unlimited PTO',
          description: 'Take time off when you need it to recharge',
          details: ['Unlimited paid time off', 'Sick leave coverage', 'Personal days', 'Mental health days']
        },
        {
          name: 'Family-Friendly Policies',
          description: 'Support for families and life events',
          details: ['Paid parental leave', 'Family medical leave', 'Childcare support', 'Elder care resources']
        }
      ]
    },
    {
      title: 'Office & Perks',
      description: 'Modern office amenities and daily perks to enhance your work experience',
      icon: Coffee,
      color: 'from-orange-500 to-red-500',
      benefits: [
        {
          name: 'Modern Office Spaces',
          description: 'Beautiful, well-equipped offices with modern amenities',
          details: ['Open concept workspaces', 'Private meeting rooms', 'Collaboration areas', 'Quiet zones']
        },
        {
          name: 'Daily Perks',
          description: 'Free meals, snacks, and beverages throughout the day',
          details: ['Free breakfast and lunch', 'Unlimited snacks', 'Premium coffee and tea', 'Healthy food options']
        },
        {
          name: 'Technology & Equipment',
          description: 'Latest technology and equipment to do your best work',
          details: ['Latest laptops and devices', 'Dual monitors', 'Ergonomic furniture', 'Mobile phone plans']
        }
      ]
    },
    {
      title: 'Community & Culture',
      description: 'Team building, social events, and a supportive community',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      benefits: [
        {
          name: 'Team Building',
          description: 'Regular team events and social activities',
          details: ['Team offsites', 'Social events', 'Holiday parties', 'Team building activities']
        },
        {
          name: 'Employee Resource Groups',
          description: 'Connect with colleagues who share your interests',
          details: ['Diversity groups', 'Professional networks', 'Interest-based clubs', 'Mentorship programs']
        },
        {
          name: 'Recognition Programs',
          description: 'Celebrate achievements and contributions',
          details: ['Employee of the month', 'Performance awards', 'Innovation recognition', 'Peer recognition']
        }
      ]
    }
  ];

  const additionalPerks = [
    {
      icon: Plane,
      title: 'Travel & Transportation',
      description: 'Commuter benefits, travel allowances, and transportation support'
    },
    {
      icon: Home,
      title: 'Home Office Setup',
      description: 'Ergonomic furniture and equipment for remote work'
    },
    {
      icon: Car,
      title: 'Transportation Benefits',
      description: 'Commuter passes, parking, and ride-sharing credits'
    },
    {
      icon: Wifi,
      title: 'Internet & Utilities',
      description: 'Home internet and utility reimbursements'
    }
  ];

  const totalCompensation = [
    { label: 'Base Salary', value: 'Competitive' },
    { label: 'Performance Bonus', value: 'Up to 25%' },
    { label: 'Equity Value', value: '$50K-$200K' },
    { label: 'Benefits Value', value: '$15K-$25K' }
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
                <Award className="w-4 h-4 mr-2" />
                Employee Benefits
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Comprehensive Benefits
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We believe in taking care of our people. Our comprehensive benefits package is designed to support 
                your health, wealth, growth, and well-being both inside and outside of work.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Total Compensation Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Total Compensation Package</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our benefits add significant value to your total compensation, making Zion Tech Group 
                one of the most attractive employers in the technology industry.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {totalCompensation.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-4">
                    <DollarSign className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{item.value}</div>
                  <div className="text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Benefits by Category</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive benefits organized by category to understand how we support 
                every aspect of your professional and personal life.
              </p>
            </motion.div>
            
            <div className="space-y-16">
              {benefitCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mr-6`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                      <p className="text-lg text-gray-400 mt-2">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                        <h4 className="text-xl font-bold text-white mb-3">{benefit.name}</h4>
                        <p className="text-gray-400 mb-4 leading-relaxed">{benefit.description}</p>
                        <div className="space-y-2">
                          {benefit.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                              <span className="text-gray-300">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Perks */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Additional Perks & Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Beyond our core benefits, we offer additional perks that make working at Zion Tech Group 
                even more rewarding and enjoyable.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalPerks.map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                    <perk.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{perk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Comparison */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Our Benefits Stand Out</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our benefits package is designed to be comprehensive, competitive, and genuinely supportive 
                of our employees' needs and aspirations.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: '100% Employer Paid',
                  description: 'Most of our benefits are fully employer-paid, reducing your out-of-pocket costs'
                },
                {
                  icon: Globe,
                  title: 'Global Coverage',
                  description: 'Benefits that work for you regardless of where you live and work'
                },
                {
                  icon: Zap,
                  title: 'Above Market',
                  description: 'Our benefits package exceeds industry standards and competitor offerings'
                },
                {
                  icon: Users,
                  title: 'Family Inclusive',
                  description: 'Comprehensive coverage for your entire family, not just you'
                },
                {
                  icon: Clock,
                  title: 'Immediate Eligibility',
                  description: 'Most benefits start from day one, no waiting periods'
                },
                {
                  icon: Award,
                  title: 'Regular Updates',
                  description: 'We continuously improve our benefits based on employee feedback'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
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
                Ready to Experience These Benefits?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join our team and start enjoying these comprehensive benefits from day one. 
                We're looking for talented individuals who are excited about our mission.
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
                  href="/culture"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Learn About Our Culture
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BenefitsPage;
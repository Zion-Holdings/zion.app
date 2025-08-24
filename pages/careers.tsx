import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Users, Zap, Globe, Shield, Heart, Award, Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const CareersPage = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'San Francisco, CA (Hybrid)',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models and NLP',
        'Strong background in machine learning algorithms'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible work arrangements',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud & Infrastructure',
      location: 'Remote (US)',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud architectures for enterprise applications and services.',
      requirements: [
        'AWS, Azure, or GCP certifications',
        'Experience with microservices and containerization',
        'Knowledge of DevOps practices and CI/CD',
        'Strong understanding of security and compliance'
      ],
      benefits: [
        'Remote-first culture',
        'Annual conference attendance',
        'Home office setup allowance',
        '401(k) with company match'
      ]
    },
    {
      title: 'Full-Stack Developer',
      department: 'Web Development',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build modern, responsive web applications using React, Next.js, and Node.js.',
      requirements: [
        'Proficiency in React, TypeScript, and Node.js',
        'Experience with modern web technologies',
        'Understanding of responsive design principles',
        'Knowledge of testing and deployment practices'
      ],
      benefits: [
        'Flexible work hours',
        'Learning and development opportunities',
        'Team building events',
        'Comprehensive health benefits'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Austin, TX (On-site)',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets through comprehensive security assessments and implementations.',
      requirements: [
        'Certifications in CISSP, CEH, or similar',
        'Experience with penetration testing tools',
        'Knowledge of security frameworks and compliance',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Professional certification support',
        'Security conference attendance',
        'Competitive compensation package',
        'Work-life balance focus'
      ]
    }
  ];

  const companyValues = [
    {
      icon: Heart,
      title: 'People First',
      description: 'We believe our team is our greatest asset and invest in their growth and well-being.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We work on projects that make a difference in the world.'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: Briefcase,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance focus.'
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, conference attendance, and skill development.'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and activities.'
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'Work with international clients and potentially relocate to our global offices.'
    }
  ];

  const culture = [
    {
      title: 'Innovation Lab',
      description: 'Dedicated time and resources for exploring new technologies and ideas.'
    },
    {
      title: 'Knowledge Sharing',
      description: 'Regular tech talks, workshops, and knowledge exchange sessions.'
    },
    {
      title: 'Mentorship Program',
      description: 'Structured mentorship to help you grow in your career.'
    },
    {
      title: 'Open Communication',
      description: 'Transparent communication and feedback culture at all levels.'
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group team. Explore exciting career opportunities in AI, cloud computing, web development, and cybersecurity. Be part of a team that's transforming businesses through technology." />
        <meta name="keywords" content="careers, jobs, Zion Tech Group, technology jobs, AI engineer, cloud architect, developer positions" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a team that's transforming businesses through cutting-edge technology. 
            Work on challenging projects, learn from experts, and grow your career with us.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Company Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core values guide everything we do and shape our workplace culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer comprehensive benefits and a supportive environment to help you thrive 
              both professionally and personally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We foster a collaborative, innovative, and inclusive environment where 
              every team member can thrive and contribute to our success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for your skills and career goals.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {position.experience}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{position.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-gray-400 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-gray-400 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Application Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We've streamlined our hiring process to make it efficient and transparent for all candidates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Apply</h3>
              <p className="text-gray-400">Submit your application with resume and cover letter</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Review</h3>
              <p className="text-gray-400">Our team reviews your application within 48 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Interview</h3>
              <p className="text-gray-400">Technical and cultural fit interviews with our team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Offer</h3>
              <p className="text-gray-400">Receive your offer and join our amazing team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't see the perfect role? Send us your resume and we'll keep you in mind 
            for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <span>Contact Us</span>
            </Link>
            <a 
              href="mailto:careers@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <span>Send Resume</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
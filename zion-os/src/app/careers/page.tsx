import Link from 'next/link';

export const metadata = {
  title: 'Careers - Zion Tech Group',
  description: 'Join our team of innovators at Zion Tech Group. Explore exciting career opportunities in AI, quantum computing, and technology solutions.',
};

export default function CareersPage() {
  const openPositions = [
    {
      id: 'ai-research-scientist',
      title: 'Senior AI Research Scientist',
      department: 'Research & Development',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our cutting-edge AI consciousness research team. You\'ll work on developing autonomous AI systems and exploring the frontiers of artificial intelligence.',
      responsibilities: [
        'Lead research initiatives in AI consciousness and autonomous systems',
        'Develop and implement novel machine learning algorithms',
        'Publish research findings in top-tier conferences and journals',
        'Collaborate with cross-functional teams on product development',
        'Mentor junior researchers and engineers'
      ],
      requirements: [
        'Ph.D. in Computer Science, AI, or related field',
        'Strong background in machine learning, neural networks, and AI research',
        'Experience with autonomous systems and consciousness research',
        'Proven track record of research publications',
        'Excellent problem-solving and analytical skills'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible work arrangements',
        'Professional development opportunities',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ]
    },
    {
      id: 'quantum-computing-engineer',
      title: 'Quantum Computing Engineer',
      department: 'Quantum Solutions',
      location: 'Palo Alto, CA / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help us build the future of quantum computing. You\'ll develop quantum algorithms and solutions for complex optimization problems.',
      responsibilities: [
        'Design and implement quantum algorithms for optimization problems',
        'Develop quantum machine learning solutions',
        'Work with quantum hardware and simulators',
        'Collaborate with research teams on quantum applications',
        'Optimize quantum circuits and algorithms'
      ],
      requirements: [
        'M.S. or Ph.D. in Physics, Computer Science, or related field',
        'Experience with quantum computing frameworks (Qiskit, Cirq, etc.)',
        'Knowledge of quantum algorithms and quantum mechanics',
        'Programming experience in Python, C++, or similar',
        'Strong mathematical and analytical skills'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Access to cutting-edge quantum computing resources',
        'Conference attendance and training opportunities',
        'Comprehensive health benefits',
        'Flexible work schedule'
      ]
    },
    {
      id: 'full-stack-developer',
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build our next-generation AI platforms and applications. You\'ll work on both frontend and backend systems that power our AI solutions.',
      responsibilities: [
        'Develop and maintain web applications and APIs',
        'Build responsive and accessible user interfaces',
        'Implement AI/ML features and integrations',
        'Optimize application performance and scalability',
        'Collaborate with design and product teams'
      ],
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Experience with React, Node.js, and modern web technologies',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with databases and API design',
        'Understanding of AI/ML concepts and applications'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote-first work environment',
        'Latest development tools and equipment',
        'Health and wellness benefits',
        'Professional development budget'
      ]
    },
    {
      id: 'data-scientist',
      title: 'Senior Data Scientist',
      department: 'Data & Analytics',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Transform data into actionable insights that drive business decisions. You\'ll work with large datasets and develop predictive models.',
      responsibilities: [
        'Analyze complex datasets to identify patterns and trends',
        'Develop machine learning models for business applications',
        'Create data visualizations and reports',
        'Collaborate with business teams on data-driven solutions',
        'Mentor junior data scientists and analysts'
      ],
      requirements: [
        'M.S. or Ph.D. in Statistics, Data Science, or related field',
        'Experience with Python, R, SQL, and data science tools',
        'Knowledge of machine learning algorithms and statistical methods',
        'Experience with big data technologies (Spark, Hadoop)',
        'Strong business acumen and communication skills'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Access to cutting-edge data science tools',
        'Conference attendance and training opportunities',
        'Comprehensive health benefits',
        'Flexible work arrangements'
      ]
    },
    {
      id: 'cybersecurity-architect',
      title: 'Cybersecurity Architect',
      department: 'Security',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design and implement secure systems that protect our AI platforms and client data. You\'ll be at the forefront of AI-powered security.',
      responsibilities: [
        'Design secure architecture for AI systems and platforms',
        'Implement security controls and monitoring systems',
        'Develop security policies and procedures',
        'Conduct security assessments and penetration testing',
        'Stay current with emerging security threats and technologies'
      ],
      requirements: [
        'Bachelor\'s degree in Computer Science, Cybersecurity, or related field',
        'Experience with cloud security and zero-trust architecture',
        'Knowledge of AI/ML security considerations',
        'Experience with security frameworks and compliance',
        'Relevant certifications (CISSP, CISM, etc.) preferred'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Latest security tools and technologies',
        'Professional certification support',
        'Comprehensive health benefits',
        'Flexible work schedule'
      ]
    },
    {
      id: 'product-manager',
      title: 'Product Manager - AI Solutions',
      department: 'Product',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive the development of our AI products and solutions. You\'ll work closely with engineering, design, and business teams.',
      responsibilities: [
        'Define product vision and strategy for AI solutions',
        'Gather and prioritize product requirements',
        'Work with engineering teams on product development',
        'Analyze market trends and competitive landscape',
        'Collaborate with sales and marketing teams'
      ],
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        'Experience in product management or related roles',
        'Understanding of AI/ML technologies and applications',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Professional development opportunities',
        'Health and wellness benefits',
        'Flexible work arrangements',
        'Performance-based bonuses'
      ]
    }
  ];

  const departments = [
    {
      name: 'Research & Development',
      description: 'Push the boundaries of AI and quantum computing',
      positions: 8,
      icon: '🔬'
    },
    {
      name: 'Engineering',
      description: 'Build scalable platforms and applications',
      positions: 12,
      icon: '⚙️'
    },
    {
      name: 'Data & Analytics',
      description: 'Transform data into actionable insights',
      positions: 6,
      icon: '📊'
    },
    {
      name: 'Product',
      description: 'Shape the future of AI solutions',
      positions: 5,
      icon: '🎯'
    },
    {
      name: 'Security',
      description: 'Protect our systems and client data',
      positions: 4,
      icon: '🔒'
    },
    {
      name: 'Sales & Marketing',
      description: 'Bring AI solutions to the world',
      positions: 7,
      icon: '🚀'
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health, dental, and vision insurance',
        'Mental health support and counseling services',
        'Fitness and wellness programs',
        'Flexible spending accounts (FSA)',
        'Health savings accounts (HSA)'
      ]
    },
    {
      category: 'Financial',
      items: [
        'Competitive salary with equity options',
        '401(k) with company match',
        'Performance-based bonuses',
        'Professional development budget',
        'Conference attendance support'
      ]
    },
    {
      category: 'Work-Life Balance',
      items: [
        'Flexible work arrangements',
        'Unlimited paid time off',
        'Parental leave programs',
        'Remote work options',
        'Flexible scheduling'
      ]
    },
    {
      category: 'Growth & Development',
      items: [
        'Professional development opportunities',
        'Mentorship programs',
        'Internal training and workshops',
        'Conference attendance',
        'Advanced degree support'
      ]
    },
    {
      category: 'Culture & Community',
      items: [
        'Inclusive and diverse workplace',
        'Team building activities',
        'Community service opportunities',
        'Employee resource groups',
        'Regular team events and celebrations'
      ]
    },
    {
      category: 'Technology & Tools',
      items: [
        'Latest development tools and equipment',
        'Access to cutting-edge AI and quantum resources',
        'Cloud computing credits',
        'Software licenses and subscriptions',
        'Home office setup support'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI, quantum computing, 
            and technology solutions. Help us transform industries and change the world.
          </p>
          <div className="mt-8">
            <Link
              href="#open-positions"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We foster an environment of innovation, collaboration, and continuous learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation First</h3>
              <p className="text-gray-600">We encourage creative thinking and bold ideas that push the boundaries of what's possible.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">We believe the best solutions come from diverse perspectives working together.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-gray-600">We invest in your growth with ongoing education and development opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600">We focus on creating meaningful, real-world impact through our technology.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">We operate with honesty, transparency, and ethical principles.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">We maintain the highest standards of quality in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect role in one of our specialized departments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{dept.positions} open positions</span>
                  <Link
                    href="#open-positions"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View Positions →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take care of our team with comprehensive benefits and perks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <span className="text-blue-600 text-sm">✓</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current openings and find your next opportunity
            </p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={position.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{position.department}</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">{position.location}</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">{position.type}</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">{position.experience}</span>
                    </div>
                  </div>
                  <Link
                    href={`/careers/${position.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>
                
                <p className="text-gray-600 mb-6">{position.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start space-x-2">
                          <span className="text-blue-600 text-sm">•</span>
                          <span className="text-gray-700 text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <span className="text-blue-600 text-sm">•</span>
                          <span className="text-gray-700 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to join our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600">Submit your application with resume and cover letter</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Review</h3>
              <p className="text-gray-600">Our team reviews your application and experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Technical and cultural fit discussions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Offer</h3>
              <p className="text-gray-600">Welcome to the Zion Tech Group team!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for talented individuals 
            to join our team. Send us your resume and let's explore opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Us
            </Link>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Send Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
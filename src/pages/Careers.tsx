import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Join our engineering team to build scalable web applications and innovative AI solutions.',
      requirements: [
        'Strong experience with React, Node.js, and modern web technologies',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of database design and optimization',
        'Experience with CI/CD pipelines and DevOps practices',
        'Familiarity with AI/ML frameworks and APIs',
        'Experience with microservices architecture'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget ($5,000/year)',
        '401(k) with company match',
        'Unlimited PTO and flexible hours'
      ],
      tags: ['React', 'Node.js', 'AWS', 'AI/ML', 'Microservices'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130,000 - $200,000',
      description: 'Drive innovation in AI and machine learning solutions for our clients.',
      requirements: [
        'Advanced degree in Computer Science, Mathematics, or related field',
        'Strong experience with Python, TensorFlow, PyTorch, and scikit-learn',
        'Experience with natural language processing and computer vision',
        'Knowledge of MLOps and model deployment',
        'Experience with cloud AI services (AWS SageMaker, Azure ML)',
        'Strong mathematical and statistical background'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget ($7,500/year)',
        '401(k) with company match',
        'Conference and training opportunities'
      ],
      tags: ['Python', 'TensorFlow', 'NLP', 'Computer Vision', 'MLOps'],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$80,000 - $130,000',
      description: 'Create beautiful and intuitive user experiences for our products and client projects.',
      requirements: [
        'Proficiency in Figma, Sketch, and Adobe Creative Suite',
        'Experience with user research and usability testing',
        'Strong portfolio showcasing web and mobile design work',
        'Knowledge of design systems and component libraries',
        'Experience with prototyping tools and user journey mapping',
        'Understanding of accessibility and inclusive design'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget ($3,000/year)',
        '401(k) with company match',
        'Latest design tools and software'
      ],
      tags: ['Figma', 'UX Research', 'Prototyping', 'Design Systems', 'Accessibility'],
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110,000 - $170,000',
      description: 'Drive data-driven insights and build machine learning models for our clients.',
      requirements: [
        'Advanced degree in Statistics, Computer Science, or related field',
        'Experience with Python, R, and machine learning frameworks',
        'Knowledge of statistical analysis and predictive modeling',
        'Experience with big data technologies (Spark, Hadoop)',
        'Strong SQL skills and experience with data visualization',
        'Experience with A/B testing and experimental design'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget ($6,000/year)',
        '401(k) with company match',
        'Access to cutting-edge data tools'
      ],
      tags: ['Python', 'R', 'Machine Learning', 'Big Data', 'Statistics'],
      color: 'from-orange-500/20 to-red-500/20'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100,000 - $160,000',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Experience with AWS, Docker, and Kubernetes',
        'Knowledge of CI/CD tools and practices',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Strong scripting skills (Python, Bash)',
        'Experience with monitoring and logging tools',
        'Knowledge of security best practices'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget ($4,000/year)',
        '401(k) with company match',
        'Latest cloud tools and certifications'
      ],
      tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      color: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Lead product strategy and development for our AI-powered solutions.',
      requirements: [
        'Experience in product management for technology products',
        'Strong analytical and strategic thinking skills',
        'Experience with agile methodologies and product development',
        'Knowledge of AI/ML technologies and market trends',
        'Experience with user research and market analysis',
        'Strong communication and stakeholder management skills'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget ($5,000/year)',
        '401(k) with company match',
        'Product management tools and resources'
      ],
      tags: ['Product Strategy', 'Agile', 'AI/ML', 'User Research', 'Analytics'],
      color: 'from-indigo-500/20 to-purple-500/20'
    }
  ];

  const companyValues = [
    {
      value: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to solve complex problems.',
      icon: '🚀',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      value: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to customer service.',
      icon: '⭐',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      value: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to achieve great results.',
      icon: '🤝',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      value: 'Growth',
      description: 'We invest in our people and encourage continuous learning and development.',
      icon: '📈',
      color: 'from-orange-500/20 to-red-500/20'
    }
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      items: ['Comprehensive health insurance', 'Dental and vision coverage', 'Mental health support', 'Wellness programs'],
      icon: '🏥',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'Work-Life Balance',
      items: ['Unlimited PTO', 'Flexible work hours', 'Remote work options', 'Paid parental leave'],
      icon: '⚖️',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Professional Development',
      items: ['Learning budget', 'Conference attendance', 'Certification programs', 'Mentorship opportunities'],
      icon: '📚',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Financial Security',
      items: ['Competitive salaries', 'Equity options', '401(k) matching', 'Performance bonuses'],
      icon: '💰',
      color: 'from-orange-500/20 to-red-500/20'
    }
  ];

  const departments = [
    { id: 'all', label: 'All Departments', icon: '🏢' },
    { id: 'Engineering', label: 'Engineering', icon: '⚙️' },
    { id: 'AI Solutions', label: 'AI Solutions', icon: '🤖' },
    { id: 'Design', label: 'Design', icon: '🎨' },
    { id: 'Analytics', label: 'Analytics', icon: '📊' },
    { id: 'Product', label: 'Product', icon: '📋' }
  ];

  // Filter positions based on search term and active department
  const filteredPositions = openPositions.filter(position => {
    if (activeDepartment !== 'all' && position.department !== activeDepartment) {
      return false;
    }
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        position.title.toLowerCase().includes(searchLower) ||
        position.description.toLowerCase().includes(searchLower) ||
        position.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <SEO 
        title="Careers - Join Zion Tech Group"
        description="Join our team of innovators and help shape the future of technology. Explore career opportunities at Zion Tech Group."
        keywords="careers, jobs, employment, Zion Tech Group, technology jobs, AI jobs, remote work"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Join Our Team
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Help us shape the future of technology. Join a team of innovators, problem-solvers, 
              and creative thinkers who are passionate about building solutions that make a difference.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search job titles, skills, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>

              {/* Department Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setActiveDepartment(dept.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                      activeDepartment === dept.id
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                    }`}
                  >
                    <span>{dept.icon}</span>
                    {dept.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${value.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.value}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in taking care of our team. Here's what we offer to help you thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${benefit.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-300 text-sm">
                        <span className="text-cyan-400 mr-2 mt-1">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredPositions.length > 0 
                ? `We have ${filteredPositions.length} exciting opportunities waiting for you.`
                : 'No positions match your current search criteria. Try adjusting your filters.'
              }
            </p>
          </div>

          {filteredPositions.length > 0 ? (
            <div className="space-y-6">
              {filteredPositions.map((position, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${position.color} rounded-2xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="px-3 py-1 bg-white/20 rounded-full text-white">
                            {position.department}
                          </span>
                          <span className="px-3 py-1 bg-white/20 rounded-full text-white">
                            {position.location}
                          </span>
                          <span className="px-3 py-1 bg-white/20 rounded-full text-white">
                            {position.type}
                          </span>
                          <span className="px-3 py-1 bg-white/20 rounded-full text-white">
                            {position.experience}
                          </span>
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                            {position.salary}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {position.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {position.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Requirements and Benefits */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start text-gray-300 text-sm">
                              <span className="text-cyan-400 mr-2 mt-1">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start text-gray-300 text-sm">
                              <span className="text-green-400 mr-2 mt-1">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="mt-6 text-center">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No positions found</h3>
              <p className="text-gray-300 mb-8">
                Try adjusting your search terms or department filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveDepartment('all');
                }}
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
              >
                View All Positions
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-4xl font-bold mb-4">
              Don't See the Right Fit?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume 
              and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Send Resume
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
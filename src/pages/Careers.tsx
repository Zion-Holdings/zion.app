import React from 'react';
import { SEO } from '@/components/SEO';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our engineering team to build scalable web applications and innovative solutions.',
      requirements: [
        'Strong experience with React, Node.js, and modern web technologies',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of database design and optimization',
        'Experience with CI/CD pipelines and DevOps practices'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget'
      ]
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful and intuitive user experiences for our products and client projects.',
      requirements: [
        'Proficiency in Figma, Sketch, and Adobe Creative Suite',
        'Experience with user research and usability testing',
        'Strong portfolio showcasing web and mobile design work',
        'Knowledge of design systems and component libraries'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget'
      ]
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive data-driven insights and build machine learning models for our clients.',
      requirements: [
        'Advanced degree in Statistics, Computer Science, or related field',
        'Experience with Python, R, and machine learning frameworks',
        'Knowledge of statistical analysis and predictive modeling',
        'Experience with big data technologies (Spark, Hadoop)'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Experience with AWS, Docker, and Kubernetes',
        'Knowledge of CI/CD tools and practices',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Strong scripting skills (Python, Bash)'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget'
      ]
    }
  ];

  const companyValues = [
    {
      value: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to solve complex problems.',
      icon: '🚀'
    },
    {
      value: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to customer service.',
      icon: '⭐'
    },
    {
      value: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to achieve great results.',
      icon: '🤝'
    },
    {
      value: 'Growth',
      description: 'We invest in our people and encourage continuous learning and development.',
      icon: '📈'
    },
    {
      value: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical business practices.',
      icon: '🔒'
    },
    {
      value: 'Impact',
      description: 'We focus on creating meaningful solutions that make a difference for our clients.',
      icon: '💡'
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health, dental, and vision insurance',
        'Mental health support and counseling services',
        'Fitness and wellness program reimbursements',
        'Flexible work arrangements and remote options'
      ]
    },
    {
      category: 'Professional Development',
      items: [
        'Annual learning and development budget',
        'Conference attendance and training opportunities',
        'Mentorship programs and career coaching',
        'Internal knowledge sharing sessions'
      ]
    },
    {
      category: 'Work-Life Balance',
      items: [
        'Unlimited paid time off',
        'Flexible working hours',
        'Parental leave and family support',
        'Company-wide holidays and team events'
      ]
    },
    {
      category: 'Financial Benefits',
      items: [
        'Competitive salary and equity options',
        '401(k) with company matching',
        'Performance bonuses and incentives',
        'Stock option plans'
      ]
    }
  ];

  const applicationProcess = [
    {
      step: '1',
      title: 'Application',
      description: 'Submit your resume and cover letter through our careers portal'
    },
    {
      step: '2',
      title: 'Initial Review',
      description: 'Our team reviews your application and qualifications'
    },
    {
      step: '3',
      title: 'Technical Assessment',
      description: 'Complete a technical challenge or coding exercise'
    },
    {
      step: '4',
      title: 'Interviews',
      description: 'Meet with team members and stakeholders'
    },
    {
      step: '5',
      title: 'Final Decision',
      description: 'Receive an offer and join the Zion Tech Group team'
    }
  ];

  return (
    <>
      <SEO 
        title="Careers - Join Zion Tech Group"
        description="Explore exciting career opportunities at Zion Tech Group. Join our team of innovators and help shape the future of technology."
        canonical="/careers"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                At Zion Tech Group, we're building the future of technology. Join our team of 
                passionate innovators, problem-solvers, and creators who are making a difference 
                in the world.
              </p>
            </div>

            {/* Company Values */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {companyValues.map((value, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {value.value}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Why Work With Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {benefit.category}
                    </h3>
                    <ul className="space-y-2">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-blue-200 text-sm flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Open Positions */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Open Positions
              </h2>
              <div className="space-y-8 max-w-6xl mx-auto">
                {openPositions.map((position, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 hover:bg-white/20 transition-colors duration-200">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-blue-200 text-sm">
                          <span>🏢 {position.department}</span>
                          <span>📍 {position.location}</span>
                          <span>⏱️ {position.type}</span>
                          <span>📚 {position.experience}</span>
                        </div>
                      </div>
                      <button className="mt-4 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                        Apply Now
                      </button>
                    </div>
                    
                    <p className="text-blue-100 mb-6">
                      {position.description}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-blue-200 text-sm flex items-start">
                              <span className="text-blue-400 mr-2 mt-1">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((ben, benIndex) => (
                            <li key={benIndex} className="text-blue-200 text-sm flex items-start">
                              <span className="text-green-400 mr-2 mt-1">✓</span>
                              {ben}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Process */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Application Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                {applicationProcess.map((step, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 mt-4">
                      {step.title}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Ready to Join Our Team?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Don't see a position that fits? We're always looking for talented individuals 
                  to join our team. Send us your resume and let's discuss opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Contact Us
                  </a>
                  <a
                    href="mailto:careers@ziontechgroup.com"
                    className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Send Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Careers;
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI & Automation',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our AI team to develop cutting-edge machine learning models and autonomous systems.',
      requirements: [
        'Strong background in machine learning and deep learning',
        'Experience with Python, TensorFlow, PyTorch',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with large language models and RAG systems'
      ]
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help protect our clients with advanced cybersecurity solutions and threat detection systems.',
      requirements: [
        'Experience with security tools and frameworks',
        'Knowledge of threat detection and response',
        'Familiarity with compliance standards (SOC2, GDPR)',
        'Experience with SIEM and security monitoring'
      ]
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain scalable infrastructure and deployment pipelines.',
      requirements: [
        'Experience with Kubernetes and Docker',
        'Knowledge of cloud infrastructure (AWS, Azure)',
        'Experience with CI/CD pipelines',
        'Infrastructure as Code (Terraform, Ansible)'
      ]
    },
    {
      id: 4,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful and responsive user interfaces for our AI-powered applications.',
      requirements: [
        'Strong React/Next.js experience',
        'Proficiency in TypeScript and modern CSS',
        'Experience with responsive design',
        'Knowledge of UI/UX best practices'
      ]
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'AI & Automation',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Transform data into actionable insights and build predictive models.',
      requirements: [
        'Strong statistical and analytical skills',
        'Experience with Python data science stack',
        'Knowledge of SQL and data warehousing',
        'Experience with machine learning pipelines'
      ]
    },
    {
      id: 6,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and development for our AI automation platform.',
      requirements: [
        'Experience in B2B SaaS product management',
        'Knowledge of AI/ML technologies',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with equity options and performance bonuses.',
      icon: '💰'
    },
    {
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and a supportive remote environment.',
      icon: '🏠'
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, conferences, and career development programs.',
      icon: '📚'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and mental health support.',
      icon: '🏥'
    },
    {
      title: 'Innovation Time',
      description: 'Dedicated time for personal projects and exploring new technologies.',
      icon: '💡'
    },
    {
      title: 'Team Events',
      description: 'Regular team building activities, virtual events, and company retreats.',
      icon: '🎉'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of innovators and help shape the future of AI and automation. Explore exciting career opportunities at Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Help us build the future of AI and automation. Join a team of passionate innovators who are transforming how businesses operate in the digital age.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Culture */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
              <p className="text-white/80 text-lg mb-6">
                At Zion Tech Group, we believe in fostering an environment where innovation thrives, collaboration is encouraged, and every team member has the opportunity to make a meaningful impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Innovation-driven environment</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Flexible work arrangements</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Continuous learning opportunities</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Diverse and inclusive team</span>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-white mb-4">Shape the Future</h3>
              <p className="text-white/80">
                Join us in building the next generation of AI-powered solutions that will transform industries and improve lives around the world.
              </p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={position.id} className="p-6 rounded-xl bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-white/60 mb-4">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.experience}</span>
                    </div>
                    <p className="text-white/70 mb-4">
                      {position.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-white font-medium text-sm mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2 text-sm text-white/70">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <Link 
                      href={`/careers/${position.id}`}
                      className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors text-center"
                    >
                      Apply Now
                    </Link>
                    <button className="w-full px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors mt-3">
                      Save Position
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Application Process</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Submit Application</h3>
                  <p className="text-white/70">
                    Complete our online application form with your resume, cover letter, and portfolio if applicable.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Initial Review</h3>
                  <p className="text-white/70">
                    Our talent team reviews your application and reaches out within 48 hours if there's a match.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Technical Assessment</h3>
                  <p className="text-white/70">
                    Complete a technical assessment relevant to the role you're applying for.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Team Interviews</h3>
                  <p className="text-white/70">
                    Meet with team members and managers to discuss your experience and fit for the role.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Final Decision</h3>
                  <p className="text-white/70">
                    We make a decision and extend an offer to join our team.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Welcome Aboard</h3>
                  <p className="text-white/70">
                    Join our team and start making an impact from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* No Matching Position */}
        <div className="mb-20">
          <div className="text-center p-8 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Don't See a Perfect Match?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors"
              >
                Send Resume
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Mission?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Help us build the future of AI and automation. Apply today and become part of a team that's changing the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#open-positions" 
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
            >
              View Open Positions
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

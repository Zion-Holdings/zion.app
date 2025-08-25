<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';

export default function Placeholder() {
  return (
    <main className="min-h-screen p-8">
      <Head>
        <title>Careers - Placeholder</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-2">Careers</h1>
        <p className="text-gray-600 mb-6">Auto-generated placeholder for missing route: <code>/careers</code>.</p>
        <Link href="/"><a className="text-blue-600 hover:underline">Back to Home</a></Link>
      </div>
    </main>
  );
}
=======
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Careers: NextPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const jobOpenings = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Join our AI team to develop cutting-edge machine learning models and AI solutions that transform businesses across industries.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        '5+ years experience in machine learning and AI development',
        'Expertise in Python, TensorFlow, PyTorch, and cloud platforms',
        'Experience with large language models and computer vision',
        'Strong problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and implement AI/ML solutions for client projects',
        'Lead technical architecture decisions for AI systems',
        'Mentor junior engineers and conduct code reviews',
        'Collaborate with cross-functional teams on AI initiatives',
        'Stay current with latest AI research and technologies'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Remote work', 'Professional development'],
      featured: true,
      postedDate: '2024-01-15'
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Solutions Architect',
      department: 'Cloud & Infrastructure',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '7+ years',
      salary: '$140,000 - $200,000',
      description: 'Lead cloud architecture design and implementation for enterprise clients, ensuring scalability, security, and cost optimization.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture and design',
        'Expertise in AWS, Azure, and Google Cloud platforms',
        'Experience with Kubernetes, Docker, and infrastructure as code',
        'Strong understanding of security and compliance requirements'
      ],
      responsibilities: [
        'Design scalable cloud architectures for enterprise clients',
        'Lead cloud migration and optimization projects',
        'Develop infrastructure as code and automation solutions',
        'Provide technical leadership and mentorship',
        'Collaborate with sales and delivery teams'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work', 'Certification support'],
      featured: true,
      postedDate: '2024-01-14'
    },
    {
      id: 'cybersecurity-specialist',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100,000 - $150,000',
      description: 'Protect our clients from evolving cyber threats by implementing advanced security solutions and conducting security assessments.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity operations',
        'Certifications: CISSP, CEH, or equivalent',
        'Experience with SIEM, EDR, and security tools',
        'Knowledge of compliance frameworks (SOC2, ISO27001)'
      ],
      responsibilities: [
        'Conduct security assessments and penetration testing',
        'Implement and manage security monitoring solutions',
        'Develop security policies and procedures',
        'Respond to security incidents and threats',
        'Provide security consulting to clients'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Security training', 'Conference attendance'],
      featured: false,
      postedDate: '2024-01-13'
    },
    {
      id: 'frontend-developer',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$90,000 - $140,000',
      description: 'Build beautiful, responsive user interfaces and create exceptional user experiences for our web applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years experience in frontend development',
        'Expertise in React, Next.js, TypeScript, and Tailwind CSS',
        'Strong understanding of responsive design and accessibility',
        'Experience with modern build tools and testing frameworks'
      ],
      responsibilities: [
        'Develop responsive and accessible user interfaces',
        'Collaborate with designers and backend developers',
        'Write clean, maintainable, and well-tested code',
        'Optimize applications for performance and SEO',
        'Mentor junior developers and conduct code reviews'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Latest equipment', 'Learning budget'],
      featured: false,
      postedDate: '2024-01-12'
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$85,000 - $130,000',
      description: 'Automate and optimize our development and deployment processes to ensure fast, reliable, and secure software delivery.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in DevOps and automation',
        'Experience with CI/CD pipelines, Docker, and Kubernetes',
        'Knowledge of cloud platforms and infrastructure as code',
        'Strong scripting skills (Python, Bash, PowerShell)'
      ],
      responsibilities: [
        'Design and implement CI/CD pipelines',
        'Manage and optimize cloud infrastructure',
        'Automate deployment and monitoring processes',
        'Ensure system reliability and performance',
        'Collaborate with development and operations teams'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible work', 'Certification support', 'Home office setup'],
      featured: false,
      postedDate: '2024-01-11'
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      department: 'AI & Machine Learning',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$95,000 - $150,000',
      description: 'Transform raw data into actionable insights and develop predictive models that drive business decisions.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years experience in data analysis and modeling',
        'Expertise in Python, R, SQL, and data visualization tools',
        'Experience with machine learning algorithms and statistical analysis',
        'Strong business acumen and communication skills'
      ],
      responsibilities: [
        'Analyze complex datasets and identify patterns',
        'Develop predictive models and algorithms',
        'Create data visualizations and reports',
        'Collaborate with business stakeholders',
        'Stay current with data science trends and tools'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Conference attendance', 'Research opportunities'],
      featured: false,
      postedDate: '2024-01-10'
    }
  ];

  const departments = ['All', 'AI & Machine Learning', 'Cloud & Infrastructure', 'Security', 'Engineering'];
  const locations = ['All', 'Remote', 'Hybrid', 'On-site'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });

  const featuredJobs = jobOpenings.filter(job => job.featured);

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and explore cutting-edge technologies to solve complex business challenges.',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Excellence in Delivery',
      description: 'We maintain the highest standards in every project, ensuring exceptional quality and client satisfaction.',
      icon: '🏆',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth with ongoing training, certifications, and learning opportunities.',
      icon: '📚',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Collaboration & Teamwork',
      description: 'We believe in the power of diverse perspectives and collaborative problem-solving.',
      icon: '🤝',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: ['Comprehensive health insurance', 'Dental and vision coverage', 'Mental health support', 'Wellness programs']
    },
    {
      category: 'Work-Life Balance',
      items: ['Flexible work arrangements', 'Unlimited PTO', 'Paid parental leave', 'Remote work options']
    },
    {
      category: 'Professional Growth',
      items: ['Learning and development budget', 'Conference attendance', 'Certification support', 'Career advancement paths']
    },
    {
      category: 'Financial Benefits',
      items: ['Competitive salaries', 'Stock options', '401(k) matching', 'Performance bonuses']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Careers - Zion Tech Group | Join Our Team of Innovators</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's transforming businesses through innovative technology solutions. Explore career opportunities in AI, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="careers, job opportunities, technology jobs, AI engineer, cloud architect, cybersecurity specialist, Zion Tech Group careers" />
      </Head>



      <main className="container mx-auto px-4 py-16 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Team of Innovators
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Be part of a company that&apos;s revolutionizing technology solutions and transforming businesses worldwide. 
            Work with cutting-edge AI, cloud computing, and emerging technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🚀 Innovation-Driven</span>
            <span>🌍 Global Impact</span>
            <span>💡 Problem Solvers</span>
            <span>🤝 Collaborative Culture</span>
          </div>
        </div>

        {/* Company Culture */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Company Culture</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{benefit.category}</h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-3">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Job Openings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Opportunities</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-l-4 border-blue-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{job.department}</span>
                      <span>📍 {job.location}</span>
                      <span>⏰ {job.type}</span>
                    </div>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-2">Experience</div>
                    <div className="text-gray-600">{job.experience}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-2">Salary Range</div>
                    <div className="text-green-600 font-medium">{job.salary}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Key Requirements:</div>
                  <ul className="space-y-1">
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                    {job.requirements.length > 3 && (
                      <li className="text-sm text-blue-600">
                        +{job.requirements.length - 3} more requirements
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </div>
                  <Link
                    href={`/careers/${job.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Department Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Department</label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {departments.map(department => (
                    <option key={department} value={department}>{department}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredJobs.length}</span> job openings
            {selectedDepartment !== 'All' && ` in ${selectedDepartment}`}
            {selectedLocation !== 'All' && ` at ${selectedLocation}`}
          </p>
        </div>

        {/* All Job Openings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Open Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                <div className="mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {job.department}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">📍</span>
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">⏰</span>
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">💼</span>
                    {job.experience}
                  </div>
                  <div className="flex items-center text-sm text-green-600 font-medium">
                    <span className="mr-2">💰</span>
                    {job.salary}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </div>
                  <Link
                    href={`/careers/${job.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Don&apos;t See the Perfect Role?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals to join our team. 
              Send us your resume and let&apos;s discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Send Your Resume
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default Careers;

>>>>>>> a4b0ef56a21d1919a0e2729e4ba64fbc8c4b3f44

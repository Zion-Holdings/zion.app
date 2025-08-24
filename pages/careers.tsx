<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Star, ExternalLink, Filter, Search, Briefcase, GraduationCap, Zap } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  featured: boolean;
  postedDate: string;
}

const jobOpenings: JobOpening[] = [
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
    description: 'Build exceptional user experiences with modern web technologies and contribute to our product development efforts.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '4+ years experience in frontend development',
      'Expertise in React, TypeScript, and modern CSS',
      'Experience with state management and testing frameworks',
      'Strong understanding of web performance and accessibility'
    ],
    responsibilities: [
      'Develop responsive and accessible user interfaces',
      'Collaborate with designers and backend developers',
      'Write clean, maintainable, and testable code',
      'Optimize applications for performance and SEO',
      'Mentor junior developers and conduct code reviews'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Flexible hours'],
    featured: false,
    postedDate: '2024-01-12'
  }
];

const departments = ['All', 'AI & Machine Learning', 'Cloud & Infrastructure', 'Security', 'Engineering', 'Product', 'Sales'];
const locations = ['All', 'Remote', 'Hybrid', 'On-site'];
const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship'];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    const matchesType = selectedType === 'All' || job.type === selectedType;
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesDepartment && matchesLocation && matchesType && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <SEO
        title="Careers"
        description="Join our team of innovators and help build the future of technology. Explore exciting career opportunities at Zion Tech Group."
        keywords="careers, jobs, employment, Zion Tech Group, technology jobs, AI jobs, remote work"
      />
      
      <Header />
      
      <main className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
                Join Our Team
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Help us build the future of technology. Join a team of innovators, engineers, and visionaries 
                dedicated to transforming businesses through cutting-edge solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-zion-slate-light">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-zion-cyan" />
                  50+ Team Members
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  Remote & Hybrid
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-zion-cyan" />
                  Competitive Benefits
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-zion-cyan" />
                  Growth Opportunities
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-16 px-6 bg-zion-blue">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
            >
              <div className="grid md:grid-cols-5 gap-6">
                {/* Search */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Search Jobs</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                    <input
                      type="text"
                      placeholder="Search by title, description, or department..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
                  </div>
                </div>

                {/* Department Filter */}
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Department</label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                {/* Job Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Job Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20 px-6 bg-zion-blue-dark">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Discover exciting opportunities to grow your career and make an impact in the technology industry.
              </p>
            </motion.div>

            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Job Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {job.featured && (
                          <span className="bg-zion-cyan text-white text-xs px-2 py-1 rounded-full">Featured</span>
                        )}
                        <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full">{job.type}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-zion-slate-light text-sm">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          Posted {formatDate(job.postedDate)}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">{job.salary}</div>
                      <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-3 px-6 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center gap-2">
                        <span>Apply Now</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Job Description */}
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Job Details Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Requirements */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-zion-slate-light flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-zion-slate-light flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.benefits.map((benefit, idx) => (
                        <span key={idx} className="bg-white/10 text-zion-slate-light text-sm px-3 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredJobs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="text-zion-slate-light text-lg mb-4">No jobs found matching your criteria</div>
                  <button
                    onClick={() => {
                      setSelectedDepartment('All');
                      setSelectedLocation('All');
                      setSelectedType('All');
                      setSearchTerm('');
                    }}
                    className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-dark transition-colors"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-zion-purple to-zion-cyan">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Don't See the Right Role?</h2>
              <p className="text-xl text-white/90 mb-8">
                We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Contact Us</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Resume</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
=======
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
>>>>>>> d0d58136d327183e53cdbb308d5ed67246f24274
  );
}

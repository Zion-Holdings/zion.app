import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Users, 
  Zap, 
  Brain, 
  Globe, 
  Rocket, 
  Heart, 
  Star,
  ArrowRight,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Award,
  Shield
} from 'lucide-react';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Briefcase },
    { id: 'engineering', name: 'Engineering', icon: Zap },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'sales', name: 'Sales & Business Development', icon: Users },
    { id: 'marketing', name: 'Marketing', icon: Globe },
    { id: 'operations', name: 'Operations', icon: Rocket }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: MapPin },
    { id: 'remote', name: 'Remote', icon: Globe },
    { id: 'middletown', name: 'Middletown, DE', icon: MapPin },
    { id: 'newyork', name: 'New York, NY', icon: MapPin },
    { id: 'sanfrancisco', name: 'San Francisco, CA', icon: MapPin }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-ml',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Experience with deep learning frameworks (TensorFlow, PyTorch)',
        'Strong Python programming skills',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of MLOps and model deployment'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ]
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'cybersecurity',
      location: 'middletown',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Implement and maintain security protocols for client infrastructure.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary',
        'Professional certification support',
        'Health insurance',
        'Paid time off',
        'Career growth opportunities'
      ]
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications using modern technologies.',
      requirements: [
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms and databases',
        'Knowledge of DevOps practices',
        'Strong problem-solving abilities',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary',
        'Remote work flexibility',
        'Professional development opportunities',
        'Health benefits',
        'Flexible working hours'
      ]
    },
    {
      id: 4,
      title: 'Business Development Manager',
      department: 'sales',
      location: 'newyork',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive business growth through strategic partnerships and client acquisition.',
      requirements: [
        'Proven track record in B2B sales',
        'Experience in technology or consulting services',
        'Strong networking and relationship-building skills',
        'Understanding of AI and emerging technologies',
        'Excellent communication and presentation skills'
      ],
      benefits: [
        'Base salary + commission structure',
        'Performance bonuses',
        'Health and dental insurance',
        'Professional development budget',
        'Travel opportunities'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'sanfrancisco',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Optimize deployment pipelines and infrastructure automation.',
      requirements: [
        'Experience with Docker, Kubernetes, and CI/CD',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with infrastructure as code (Terraform)',
        'Strong scripting skills (Python, Bash)',
        'Understanding of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary with equity',
        'Health, dental, and vision insurance',
        'Professional development support',
        'Flexible work arrangements',
        '401(k) with company match'
      ]
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const deptMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
    return deptMatch && locationMatch;
  });

  const companyValues = [
    {
      icon: Innovation,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to solve complex problems.'
    },
    {
      icon: Collaboration,
      title: 'Collaborative Excellence',
      description: 'Great achievements come from great teamwork and diverse perspectives.'
    },
    {
      icon: Integrity,
      title: 'Integrity & Trust',
      description: 'We build lasting relationships through transparency and ethical practices.'
    },
    {
      icon: Growth,
      title: 'Continuous Growth',
      description: 'We invest in our people and encourage lifelong learning and development.'
    }
  ];

  const perks = [
    'Flexible remote work policy',
    'Competitive salary and equity options',
    'Comprehensive health benefits',
    'Professional development budget',
    '401(k) with company match',
    'Unlimited PTO',
    'Regular team events and activities',
    'Latest technology and tools',
    'Career advancement opportunities',
    'Work-life balance focus'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Mission
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us transform businesses through innovative AI and technology solutions. 
              Join a team of passionate professionals shaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300">
                Learn About Culture
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These core values guide everything we do and shape our company culture
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-xl bg-cyan-500/20 mb-6">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Perks & Benefits */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Perks & Benefits</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We believe in taking care of our team with comprehensive benefits and perks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, index) => (
            <div key={index} className="flex items-center space-x-3 bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-gray-300">{perk}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Job Listings */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find the perfect role for your skills and career goals
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <div className="flex items-center space-x-2">
            <Briefcase className="w-5 h-5 text-cyan-400" />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
            >
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
            >
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id}>{loc.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{departments.find(d => d.id === job.department)?.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{locations.find(l => l.id === job.location)?.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>
                <button className="mt-4 lg:mt-0 inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              
              <p className="text-gray-300 mb-4">{job.description}</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No positions found matching your criteria.</p>
            <p className="text-gray-500">Try adjusting your filters or check back later for new opportunities.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Fit?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Submit General Application
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
            >
              Contact Recruiting
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Icon components for company values
function Innovation(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  );
}

function Collaboration(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function Integrity(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function Growth(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Zap, 
  Globe, 
  Heart, 
  Award, 
  BookOpen,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const departments = [
    'all',
    'Engineering',
    'Design',
    'Product',
    'Sales',
    'Marketing',
    'Operations',
    'AI & ML'
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'We\'re looking for a Senior Full Stack Developer to join our growing engineering team. You\'ll work on cutting-edge projects using modern technologies like React, Node.js, and cloud platforms.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of microservices architecture',
        'Experience with CI/CD pipelines and DevOps practices',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'AI & ML',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$130k - $200k',
      description: 'Join our AI team to develop cutting-edge machine learning models and AI solutions that transform businesses. Work on projects involving computer vision, NLP, and predictive analytics.',
      requirements: [
        'MS/PhD in Computer Science, ML, or related field',
        'Experience with PyTorch, TensorFlow, or similar frameworks',
        'Strong Python programming skills',
        'Experience with MLOps and model deployment',
        'Knowledge of cloud ML platforms'
      ],
      benefits: [
        'Competitive salary and equity',
        'Access to latest AI/ML tools and infrastructure',
        'Conference attendance and research opportunities',
        'Health, dental, and vision insurance',
        'Flexible work arrangements'
      ]
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90k - $140k',
      description: 'Create beautiful and intuitive user experiences for our products. Work closely with product managers and engineers to design solutions that users love.',
      requirements: [
        'Strong portfolio showcasing web and mobile design work',
        'Experience with Figma, Sketch, or similar tools',
        'Understanding of user research and usability principles',
        'Experience with design systems and component libraries',
        'Collaboration with cross-functional teams'
      ],
      benefits: [
        'Competitive salary and equity',
        'Latest design tools and software',
        'Creative freedom and ownership',
        'Health, dental, and vision insurance',
        'Professional development opportunities'
      ]
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110k - $160k',
      description: 'Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes. Help us scale our systems and ensure high availability.',
      requirements: [
        'Experience with AWS, Azure, or GCP',
        'Knowledge of Kubernetes and containerization',
        'Experience with Terraform or CloudFormation',
        'Strong scripting skills (Python, Bash)',
        'Experience with monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Latest cloud tools and certifications',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget'
      ]
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100k - $150k',
      description: 'Drive product strategy and execution for our AI-powered solutions. Work with customers, stakeholders, and engineering teams to deliver exceptional products.',
      requirements: [
        'Experience in B2B SaaS product management',
        'Strong analytical and strategic thinking',
        'Experience with agile development methodologies',
        'Excellent communication and stakeholder management',
        'Technical background or strong technical aptitude'
      ],
      benefits: [
        'Competitive salary and equity',
        'Product ownership and strategic impact',
        'Customer interaction and market research',
        'Health, dental, and vision insurance',
        'Professional development opportunities'
      ]
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const companyValues = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new technologies to solve complex problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Great ideas come from diverse teams working together towards common goals.'
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Everything we do is driven by our commitment to customer success.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We build solutions that make a difference in businesses worldwide.'
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Above-market salaries, equity, and performance bonuses'
    },
    {
      icon: BookOpen,
      title: 'Learning & Development',
      description: 'Unlimited learning budget, conferences, and certifications'
    },
    {
      icon: Users,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and locations'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Build the future of technology with us. Join a team of innovators, 
              problem-solvers, and visionaries transforming businesses worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#open-positions"
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                View Open Positions
              </a>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Work at Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We're building more than just technology - we're building a culture 
              of innovation, collaboration, and continuous growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-zion-slate">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We believe in taking care of our team. Here's what we offer to support 
              your professional and personal growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-zinc-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Find the perfect role for your skills and career goals. 
              Join us in building the future of technology.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zion-blue-dark mb-2">
                  Search Positions
                </label>
                <input
                  type="text"
                  placeholder="Search by title, skills, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zion-blue-dark mb-2">
                  Department
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-zion-slate text-lg">
                  No positions match your current search criteria. 
                  Please try different keywords or check back later for new opportunities.
                </p>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-zion-slate">
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
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <button className="px-6 py-2 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-zion-slate mb-4">
                    {job.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-zion-blue-dark mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-sm text-zion-slate">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zion-blue-dark mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-zion-slate">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Application Process
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our streamlined application process ensures you can focus on what matters most - 
              showcasing your skills and passion for technology.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  Apply Online
                </h3>
                <p className="text-zion-slate text-sm">
                  Submit your application through our online portal with resume and cover letter
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  Initial Review
                </h3>
                <p className="text-zion-slate text-sm">
                  Our team reviews your application and reaches out within 48 hours
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  Technical Interview
                </h3>
                <p className="text-zion-slate text-sm">
                  Demonstrate your skills through technical assessments and coding challenges
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  Final Interview
                </h3>
                <p className="text-zion-slate text-sm">
                  Meet the team and discuss your role, culture fit, and career goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Don't see the perfect role? We're always looking for talented individuals 
            to join our team. Send us your resume and let's discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:careers@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Send Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
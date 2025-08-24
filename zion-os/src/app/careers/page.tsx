import { 
  Briefcase, 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Heart,
  ArrowRight,
  CheckCircle,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react';

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI algorithms and autonomous systems that power our next-generation solutions.",
      requirements: [
        "PhD in Computer Science, Machine Learning, or related field",
        "5+ years experience in AI/ML development",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with large language models and neural networks",
        "Strong background in mathematics and statistics"
      ],
      benefits: ["Competitive salary", "Equity options", "Flexible work arrangements", "Professional development"]
    },
    {
      title: "AI Solutions Architect",
      department: "Solutions",
      location: "Remote (US)",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement AI-powered solutions for enterprise clients, ensuring scalability, security, and performance.",
      requirements: [
        "7+ years in software architecture and design",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of AI/ML technologies and frameworks",
        "Strong client-facing and presentation skills",
        "Experience with enterprise software integration"
      ],
      benefits: ["Competitive salary", "Performance bonuses", "Remote work options", "Travel opportunities"]
    },
    {
      title: "Quantum Computing Researcher",
      department: "Research",
      location: "Boston, MA (On-site)",
      type: "Full-time",
      experience: "3+ years",
      description: "Pioneer quantum computing algorithms and applications that solve complex problems beyond classical computing capabilities.",
      requirements: [
        "PhD in Physics, Computer Science, or related field",
        "3+ years in quantum computing research",
        "Experience with quantum programming languages",
        "Publications in top-tier journals",
        "Knowledge of quantum algorithms and error correction"
      ],
      benefits: ["Research funding", "Conference attendance", "Publication support", "Collaboration opportunities"]
    },
    {
      title: "AI Ethics & Governance Specialist",
      department: "Compliance",
      location: "New York, NY (Hybrid)",
      type: "Full-time",
      experience: "4+ years",
      description: "Ensure our AI systems are developed and deployed responsibly, ethically, and in compliance with regulations.",
      requirements: [
        "Advanced degree in Ethics, Law, or related field",
        "4+ years in AI ethics, governance, or compliance",
        "Understanding of AI regulations and frameworks",
        "Experience with bias detection and fairness metrics",
        "Strong analytical and communication skills"
      ],
      benefits: ["Competitive salary", "Professional certifications", "Industry networking", "Policy influence"]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Above-market salaries with equity options and performance bonuses"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage, mental health support, and wellness programs"
    },
    {
      icon: Clock,
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and unlimited PTO"
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Continuous learning, conference attendance, and career development"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with regular team events and activities"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Work on cutting-edge technology that transforms industries worldwide"
    }
  ];

  const values = [
    "Innovation at the core of everything we do",
    "Continuous learning and personal growth",
    "Collaboration and knowledge sharing",
    "Ethical AI development and deployment",
    "Customer success and satisfaction",
    "Diversity, equity, and inclusion"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Help us build the future of AI technology and transform how businesses operate
          </p>
          <div className="mt-8">
            <a 
              href="#open-positions" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work at Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that's pushing the boundaries of what's possible with AI technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-xl text-gray-600 mb-8">
                At Zion Tech Group, we foster an environment of innovation, collaboration, and continuous learning. Our team members are passionate about technology and its potential to solve real-world problems.
              </p>
              
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Makes Us Different</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cutting-Edge Technology</h4>
                    <p className="text-gray-600 text-sm">Work with the latest AI and quantum computing technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Learn from industry leaders and researchers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Impact</h4>
                    <p className="text-gray-600 text-sm">Your work will affect businesses and societies worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our mission to democratize AI technology and create solutions that transform businesses
            </p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{position.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{benefit}</span>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">
              Simple steps to join our team and start making an impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">Submit your application and portfolio</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">Technical and cultural fit discussions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical</h3>
              <p className="text-gray-600 text-sm">Skills assessment and problem-solving</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Offer</h3>
              <p className="text-gray-600 text-sm">Welcome to the Zion Tech Group family!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Help us build the future of AI technology and make a global impact
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#open-positions" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View All Positions
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
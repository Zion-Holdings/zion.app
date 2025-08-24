import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award, 
  ArrowRight, 
  MapPin, 
  Clock, 
  DollarSign,
  CheckCircle,
  Star,
  TrendingUp,
  Brain,
  Shield
} from 'lucide-react';

const CareersPage = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$150K - $200K",
      description: "Lead the development of cutting-edge AI solutions and autonomous systems.",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Cloud Computing"]
    },
    {
      id: 2,
      title: "Quantum Computing Researcher",
      department: "Quantum Technology",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$130K - $180K",
      description: "Research and develop quantum algorithms and quantum computing infrastructure.",
      skills: ["Quantum Mechanics", "Qiskit", "Python", "Linear Algebra", "Quantum Algorithms"]
    },
    {
      id: 3,
      title: "Cybersecurity Architect",
      department: "Security",
      location: "New York, NY",
      type: "Full-time",
      experience: "7+ years",
      salary: "$160K - $220K",
      description: "Design and implement zero-trust security architectures for enterprise clients.",
      skills: ["Zero Trust", "Network Security", "IAM", "Compliance", "Threat Modeling"]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      experience: "4+ years",
      salary: "$120K - $160K",
      description: "Build and maintain scalable infrastructure and CI/CD pipelines.",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins"]
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$110K - $150K",
      description: "Extract insights from complex data sets and build predictive models.",
      skills: ["Python", "R", "SQL", "Machine Learning", "Statistics"]
    },
    {
      id: 6,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$140K - $190K",
      description: "Drive product strategy and roadmap for AI-powered enterprise solutions.",
      skills: ["Product Strategy", "User Research", "Agile", "Data Analysis", "Stakeholder Management"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage, mental health support, and wellness programs"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and unlimited PTO"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Impact",
      description: "Work on cutting-edge technology that transforms industries worldwide"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Career Growth",
      description: "Continuous learning, mentorship, and advancement opportunities"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Diverse Team",
      description: "Collaborate with brilliant minds from around the world"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Innovation",
      description: "Be at the forefront of AI, quantum computing, and emerging technologies"
    }
  ];

  const values = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Innovation First",
      description: "We push boundaries and embrace bold ideas that challenge the status quo"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Integrity",
      description: "We build trust through transparency, honesty, and ethical practices"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We believe the best solutions come from diverse teams working together"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code to customer experience"
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            Join Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Help us shape the future of technology. We're building the next generation of AI, 
            quantum computing, and cybersecurity solutions that will transform the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="#open-positions">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                View Open Positions
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Work at Zion Tech Group?</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We're not just building technology—we're building the future. Join a team that values 
              innovation, collaboration, and making a real impact on the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-zion-blue-light/10 p-6 rounded-xl border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="text-zion-cyan mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="text-zion-cyan mb-4 mx-auto">{value.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-zion-slate-light text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready to join our team? Explore our current openings and find the perfect role for your skills and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-zion-blue-dark p-6 rounded-xl border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-zion-cyan">{position.title}</h3>
                  <span className="bg-zion-purple/20 text-zion-purple-light px-3 py-1 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-zion-slate-light" />
                    <span className="text-zion-slate-light">{position.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4 text-zion-slate-light" />
                    <span className="text-zion-slate-light">{position.department}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-zion-slate-light" />
                    <span className="text-zion-slate-light">{position.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-zion-slate-light" />
                    <span className="text-zion-slate-light">{position.salary}</span>
                  </div>
                </div>

                <p className="text-zion-slate-light mb-4">{position.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-slate-light mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, index) => (
                      <span key={index} className="bg-zion-blue-light/20 text-zion-slate-light px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-zion-slate-light mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals!
            </p>
            <Link to="/contact">
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Send Us Your Resume
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our hiring process is designed to be transparent, efficient, and focused on finding 
              the right fit for both you and our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Application</h3>
              <p className="text-zion-slate-light">Submit your resume and cover letter through our portal</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Screening</h3>
              <p className="text-zion-slate-light">Initial review and phone screening with our team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Interview</h3>
              <p className="text-zion-slate-light">Technical assessment and team interviews</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Offer</h3>
              <p className="text-zion-slate-light">Welcome to the Zion Tech Group family!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-purple-dark via-zion-blue to-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make History?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join us in building the future of technology. Your next adventure starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="#open-positions">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Browse Openings
              </button>
            </Link>
            <Link to="/about">
              <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;

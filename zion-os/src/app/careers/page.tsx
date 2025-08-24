import Link from 'next/link';
import { Users, Heart, Zap, Globe, Award, TrendingUp, Lightbulb, Shield, Star, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "Careers - Zion Tech Group",
  description: "Join Zion Tech Group and be part of the AI revolution. Explore career opportunities in AI research, development, and business transformation.",
};

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs"
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and unlimited PTO"
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Work with teams across the world and travel to our global offices"
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Continuous learning, conferences, and career development programs"
  },
  {
    icon: TrendingUp,
    title: "Competitive Compensation",
    description: "Above-market salaries, equity, and performance bonuses"
  },
  {
    icon: Lightbulb,
    title: "Innovation Time",
    description: "20% time for personal projects and research initiatives"
  }
];

const openPositions = [
  {
    title: "Senior AI Research Engineer",
    department: "AI Research",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead cutting-edge research in artificial consciousness and autonomous decision-making systems.",
    requirements: [
      "PhD in Computer Science, AI, or related field",
      "Experience with large language models and neural networks",
      "Published research in top AI conferences",
      "Strong Python and PyTorch skills"
    ]
  },
  {
    title: "Quantum Computing Specialist",
    department: "Quantum Division",
    location: "London, UK",
    type: "Full-time",
    experience: "3+ years",
    description: "Develop quantum algorithms and solutions for complex optimization problems.",
    requirements: [
      "MSc/PhD in Physics, Computer Science, or Mathematics",
      "Experience with quantum programming languages (Qiskit, Cirq)",
      "Knowledge of quantum algorithms and quantum machine learning",
      "Strong mathematical and analytical skills"
    ]
  },
  {
    title: "AI Solutions Architect",
    department: "Professional Services",
    location: "Remote",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement AI solutions for enterprise clients across industries.",
    requirements: [
      "Experience designing AI/ML systems for enterprise",
      "Strong understanding of cloud platforms (AWS, Azure, GCP)",
      "Excellent communication and client relationship skills",
      "Background in software architecture and system design"
    ]
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "3+ years",
    description: "Build beautiful, responsive user interfaces for our AI-powered applications.",
    requirements: [
      "Strong React/Next.js experience",
      "Proficiency in TypeScript and modern CSS",
      "Experience with design systems and component libraries",
      "Passion for user experience and accessibility"
    ]
  }
];

const culture = [
  {
    title: "Innovation First",
    description: "We encourage experimentation and pushing boundaries in everything we do."
  },
  {
    title: "Collaboration",
    description: "Cross-functional teams work together to solve complex problems."
  },
  {
    title: "Continuous Learning",
    description: "We invest in your growth with learning budgets and development programs."
  },
  {
    title: "Impact-Driven",
    description: "Every project has the potential to transform industries and improve lives."
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Be part of the AI revolution that's transforming how businesses operate and how humans interact with technology
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building more than just AI systems - we're building a future where technology serves humanity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team so they can focus on building the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team of AI pioneers, researchers, and innovators
            </p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <Link 
                    href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mt-4 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
                
                <p className="text-gray-600 mb-6">{position.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse minds from around the world, united by a passion for AI and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <Users className="w-16 h-16 text-blue-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Global Team</h3>
                <p className="text-blue-600 font-medium mb-3">15+ Countries</p>
                <p className="text-gray-600 text-sm">Team members from diverse backgrounds and cultures</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <Users className="w-16 h-16 text-purple-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Research Focus</h3>
                <p className="text-purple-600 font-medium mb-3">60% PhDs</p>
                <p className="text-gray-600 text-sm">Leading researchers in AI and related fields</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <Users className="w-16 h-16 text-green-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Experience</h3>
                <p className="text-green-600 font-medium mb-3">8+ Years Avg</p>
                <p className="text-gray-600 text-sm">Deep expertise across multiple domains</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                <Users className="w-16 h-16 text-orange-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Innovation</h3>
                <p className="text-orange-600 font-medium mb-3">100+ Patents</p>
                <p className="text-gray-600 text-sm">Pioneering new technologies and approaches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Simple steps to join our team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600">Submit your application and portfolio</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Technical and cultural fit discussions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Challenge</h3>
              <p className="text-gray-600">Real-world problem-solving exercise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Offer</h3>
              <p className="text-gray-600">Welcome to the team!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Be part of the team that's shaping the future of AI and business transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get in Touch
            </Link>
            <a 
              href="mailto:careers@ziontechgroup.com" 
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Email Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from 'next/link';
import { Users, Target, Zap, Globe, Award, TrendingUp, Lightbulb, Shield } from 'lucide-react';

export const metadata = {
  title: "About Us - Zion Tech Group",
  description: "Learn about Zion Tech Group's mission to pioneer AI-powered business transformation and autonomous systems for the future.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push the boundaries of what's possible with AI and emerging technologies"
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Building secure, reliable systems that protect our clients' most valuable assets"
  },
  {
    icon: Users,
    title: "Human-Centric AI",
    description: "AI that enhances human capabilities, not replaces them"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Creating solutions that benefit humanity across all borders and industries"
  }
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Zion Tech Group established with a vision to democratize AI technology"
  },
  {
    year: "2021",
    title: "First AI System Deployed",
    description: "Successfully launched autonomous business management system for enterprise clients"
  },
  {
    year: "2022",
    title: "Quantum Computing Division",
    description: "Expanded into quantum computing research and development"
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Opened offices in Europe and Asia, serving clients worldwide"
  },
  {
    year: "2024",
    title: "AI Consciousness Research",
    description: "Pioneering research into artificial consciousness and autonomous decision-making"
  },
  {
    year: "2025",
    title: "Future Vision",
    description: "Leading the charge toward a fully autonomous, AI-powered future"
  }
];

const team = [
  {
    name: "Dr. Kleber Santos",
    role: "Founder & CEO",
    description: "AI researcher and entrepreneur with 15+ years in autonomous systems",
    image: "/team/kleber.jpg"
  },
  {
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    description: "Quantum computing expert and former research lead at major tech companies",
    image: "/team/sarah.jpg"
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of AI Research",
    description: "Leading researcher in artificial consciousness and autonomous decision-making",
    image: "/team/marcus.jpg"
  },
  {
    name: "Dr. Elena Petrova",
    role: "Chief Security Officer",
    description: "Cybersecurity expert specializing in AI-powered threat detection",
    image: "/team/elena.jpg"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Pioneering the future of AI-powered business transformation and autonomous systems
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-6">
                To democratize artificial intelligence and autonomous systems, making cutting-edge technology accessible to businesses of all sizes while ensuring responsible and ethical development.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that AI should enhance human capabilities, not replace them. Our solutions are designed to work alongside your team, automating routine tasks and providing insights that drive innovation and growth.
              </p>
              <Link 
                href="/services" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision for 2030</h3>
              <p className="text-gray-700 mb-4">
                By 2030, we envision a world where:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Every business has access to AI-powered automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>AI systems work autonomously and ethically</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Human creativity is amplified by AI assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Technology serves humanity's greatest challenges</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to revolutionize business with AI
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries and experts driving innovation at Zion Tech Group
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <Users className="w-16 h-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-300">Our impact in transforming businesses with AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">AI Systems Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
          <p className="text-xl mb-8 text-blue-100">
            Be part of the AI revolution that's transforming how businesses operate
          </p>
          
          {/* Contact Details */}
          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <span>📱</span>
                <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>📍</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get in Touch
            </Link>
            <Link 
              href="/careers" 
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";

import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  experience: string;
  education: string;
  avatar: string;
}

interface Technology {
  name: string;
  description: string;
  icon: string;
  category: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Kleber Santos",
    role: "Founder & CEO",
    expertise: ["AI/ML", "Blockchain", "Cloud Architecture", "Digital Transformation"],
    experience: "15+ years in technology leadership and innovation",
    education: "MSc Computer Science, Stanford University",
    avatar: "👨‍💼"
  },
  {
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    expertise: ["Machine Learning", "Data Science", "AI Ethics", "Research & Development"],
    experience: "12+ years in AI research and enterprise solutions",
    education: "PhD AI/ML, MIT",
    avatar: "👩‍🔬"
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Engineering",
    expertise: ["Full-Stack Development", "DevOps", "Cloud Infrastructure", "System Architecture"],
    experience: "10+ years in scalable software engineering",
    education: "BSc Computer Engineering, UC Berkeley",
    avatar: "👨‍💻"
  },
  {
    name: "Lisa Thompson",
    role: "VP of Business Development",
    expertise: ["Strategic Partnerships", "Enterprise Sales", "Industry Solutions", "Client Relations"],
    experience: "8+ years in B2B technology sales and partnerships",
    education: "MBA, Harvard Business School",
    avatar: "👩‍💼"
  }
];

const technologies: Technology[] = [
  {
    name: "Artificial Intelligence",
    description: "Advanced ML models, NLP, computer vision, and predictive analytics",
    icon: "🤖",
    category: "AI/ML"
  },
  {
    name: "Blockchain & Web3",
    description: "Smart contracts, DeFi protocols, DAO governance, and decentralized applications",
    icon: "⛓️",
    category: "Blockchain"
  },
  {
    name: "Cloud Computing",
    description: "Multi-cloud architecture, serverless computing, and infrastructure automation",
    icon: "☁️",
    category: "Cloud"
  },
  {
    name: "Cybersecurity",
    description: "Zero-trust security, threat detection, compliance, and penetration testing",
    icon: "🔒",
    category: "Security"
  },
  {
    name: "Data Analytics",
    description: "Big data processing, real-time analytics, and business intelligence",
    icon: "📊",
    category: "Analytics"
  },
  {
    name: "DevOps & Automation",
    description: "CI/CD pipelines, infrastructure as code, and automated deployment",
    icon: "⚡",
    category: "DevOps"
  }
];

const achievements = [
  {
    number: "500+",
    label: "Projects Delivered",
    description: "Successfully completed projects across various industries"
  },
  {
    number: "50+",
    label: "Industries Served",
    description: "From healthcare to manufacturing, we've got you covered"
  },
  {
    number: "99.9%",
    label: "Client Satisfaction",
    description: "Consistently high satisfaction ratings from our clients"
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock technical support and maintenance"
  },
  {
    number: "$50M+",
    label: "Client ROI Generated",
    description: "Measurable value delivered to our clients"
  },
  {
    number: "15+",
    label: "Years Experience",
    description: "Decades of combined expertise in technology"
  }
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"mission" | "team" | "expertise" | "values">("mission");

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">About Zion Tech Group</h1>
        <p className="text-xl opacity-80 max-w-4xl mx-auto leading-relaxed">
          Pioneering the future of digital transformation through innovative AI, blockchain, and cloud solutions. 
          We empower businesses to thrive in the digital age with cutting-edge technology and unparalleled expertise.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Middletown, DE</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🌍</span>
            <span>Global Reach</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🚀</span>
            <span>Innovation First</span>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="opacity-90 text-lg">Ready to transform your business? Let's discuss your project.</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span>📱</span>
              <a href="tel:+13024640950" className="hover:underline text-lg">+1 302 464 0950</a>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:underline text-lg">kleber@ziontechgroup.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span className="text-lg">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
          <div className="text-center space-y-4">
            <span className="text-4xl">🎯</span>
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-zinc-400 leading-relaxed">
              To democratize access to cutting-edge technology and empower businesses of all sizes to achieve 
              digital transformation success. We believe that innovation should be accessible, scalable, and 
              transformative for every organization.
            </p>
          </div>
        </div>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
          <div className="text-center space-y-4">
            <span className="text-4xl">🔮</span>
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="text-zinc-400 leading-relaxed">
              To be the global leader in AI-powered digital transformation, creating a world where every business 
              can leverage the power of artificial intelligence, blockchain, and cloud computing to achieve 
              unprecedented growth and success.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            <span className="text-3xl mb-4 block">💡</span>
            <h4 className="font-semibold mb-2">Innovation</h4>
            <p className="text-sm text-zinc-400">Constantly pushing boundaries and exploring new technologies</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            <span className="text-3xl mb-4 block">🤝</span>
            <h4 className="font-semibold mb-2">Partnership</h4>
            <p className="text-sm text-zinc-400">Building long-term relationships based on trust and mutual success</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            <span className="text-3xl mb-4 block">🔒</span>
            <h4 className="font-semibold mb-2">Security</h4>
            <p className="text-sm text-zinc-400">Prioritizing data protection and cybersecurity in everything we do</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            <span className="text-3xl mb-4 block">📈</span>
            <h4 className="font-semibold mb-2">Excellence</h4>
            <p className="text-sm text-zinc-400">Delivering exceptional quality and results in every project</p>
          </div>
        </div>
      </div>

      {/* Technology Expertise */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Technology Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{tech.icon}</span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
                  {tech.category}
                </span>
              </div>
              <h4 className="font-semibold mb-2">{tech.name}</h4>
              <p className="text-sm text-zinc-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{member.avatar}</span>
                <div>
                  <h4 className="text-xl font-semibold">{member.name}</h4>
                  <p className="text-blue-400 font-medium">{member.role}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-sm mb-2">Expertise:</h5>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-zinc-800 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-1">Experience:</h5>
                  <p className="text-sm text-zinc-400">{member.experience}</p>
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-1">Education:</h5>
                  <p className="text-sm text-zinc-400">{member.education}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{achievement.number}</div>
              <div className="font-medium text-sm mb-1">{achievement.label}</div>
              <div className="text-xs text-zinc-400">{achievement.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Company History */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Company History</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">2009</div>
            <h4 className="font-semibold mb-2">Founded</h4>
            <p className="text-sm text-zinc-400">
              Zion Tech Group was established with a vision to democratize technology access
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">2015</div>
            <h4 className="font-semibold mb-2">AI Revolution</h4>
            <p className="text-sm text-zinc-400">
              Launched our first AI-powered solutions and began our machine learning journey
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">2024</div>
            <h4 className="font-semibold mb-2">Global Expansion</h4>
            <p className="text-sm text-zinc-400">
              Serving clients across 50+ industries with cutting-edge digital solutions
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-6 py-8">
        <h2 className="text-3xl font-semibold">Ready to Work with Us?</h2>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Join hundreds of successful organizations that have transformed their business with Zion Tech Group. 
          Let's discuss how we can help you achieve your digital transformation goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Partnership Inquiry"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
          >
            Start Partnership
          </a>
          <a
            href="tel:+13024640950"
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
          >
            Schedule Call
          </a>
        </div>
      </div>
    </div>
  );
}
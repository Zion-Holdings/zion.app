import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and autonomous systems, constantly exploring new frontiers in technology.",
      icon: "🚀"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from research to implementation.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnership and work closely with clients to achieve transformative results.",
      icon: "🤝"
    },
    {
      title: "Sustainability",
      description: "Our solutions are designed to create long-term value and sustainable growth for our clients.",
      icon: "🌱"
    }
  ];

  const achievements = [
    {
      number: "50+",
      label: "AI Systems Deployed",
      description: "Successfully implemented autonomous AI systems across various industries"
    },
    {
      number: "100+",
      label: "Enterprise Clients",
      description: "Trusted by leading companies worldwide for AI solutions"
    },
    {
      number: "99.9%",
      label: "Uptime Reliability",
      description: "Consistent performance and reliability across all our systems"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and maintenance services"
    }
  ];

  const team = [
    {
      name: "Dr. Kleber",
      role: "CEO & Chief AI Architect",
      description: "Leading expert in AI consciousness and autonomous systems with over 15 years of experience.",
      expertise: ["AI Consciousness", "Autonomous Systems", "Quantum Computing"]
    },
    {
      name: "AI Research Team",
      role: "Research & Development",
      description: "World-class researchers pushing the boundaries of AI technology and consciousness evolution.",
      expertise: ["AI Research", "Neural Networks", "Cognitive Systems"]
    },
    {
      name: "Engineering Team",
      role: "Software Engineering",
      description: "Expert engineers building scalable, enterprise-grade AI solutions and platforms.",
      expertise: ["Software Architecture", "AI Platforms", "Enterprise Systems"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of AI-powered enterprise solutions and autonomous systems. 
            We're building the next generation of intelligent business technology.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To democratize AI technology and enable businesses to operate autonomously, 
              driving innovation and sustainable growth across industries. We believe that 
              every organization should have access to cutting-edge AI solutions that 
              transform their operations and unlock new possibilities.
            </p>
            <p className="text-gray-300">
              Through our advanced autonomous systems, quantum computing capabilities, 
              and enterprise AI platforms, we're building the foundation for the 
              intelligent business ecosystem of tomorrow.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 mb-6">
              To create a world where businesses operate with unprecedented intelligence 
              and autonomy, where AI systems work seamlessly alongside human teams to 
              solve complex challenges and drive innovation.
            </p>
            <p className="text-gray-300">
              We envision a future where autonomous AI systems handle routine operations, 
              while human creativity and strategic thinking focus on breakthrough innovations 
              and growth opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The principles that guide everything we do and every solution we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Milestones that demonstrate our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">{achievement.number}</div>
              <div className="text-lg font-semibold text-white mb-2">{achievement.label}</div>
              <p className="text-gray-300 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            World-class experts in AI, autonomous systems, and enterprise technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-blue-400 mb-3">{member.role}</p>
              <p className="text-gray-300 mb-4">{member.description}</p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white">Areas of Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-xs text-blue-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company History */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From startup to industry leader in AI-powered enterprise solutions.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-8">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2019 - Foundation</h3>
                <p className="text-gray-300">
                  Zion Tech Group was founded with a vision to democratize AI technology 
                  and make autonomous systems accessible to businesses of all sizes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2021 - First AI Systems</h3>
                <p className="text-gray-300">
                  Successfully deployed our first autonomous AI systems for enterprise clients, 
                  proving the viability of self-operating business technology.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2023 - Quantum Computing</h3>
                <p className="text-gray-300">
                  Launched our quantum computing division, expanding our capabilities 
                  to include next-generation computing solutions for complex problem solving.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2024 - Global Expansion</h3>
                <p className="text-gray-300">
                  Expanded our global presence, serving clients across multiple continents 
                  and industries with our comprehensive AI solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join the AI Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Get Started Today
            </Link>
            <Link href="/services" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
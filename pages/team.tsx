import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      bio: 'Visionary leader with over 15 years of experience in technology innovation and AI development. Passionate about creating autonomous systems that transform business operations.',
      expertise: ['AI & Machine Learning', 'Strategic Leadership', 'Technology Innovation'],
      image: '👨‍💼'
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'Technology expert specializing in cloud architecture, cybersecurity, and emerging technologies. Leads our technical strategy and innovation initiatives.',
      expertise: ['Cloud Architecture', 'Cybersecurity', 'Emerging Tech'],
      image: '👩‍💻'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of AI & Automation',
      bio: 'AI specialist with deep expertise in machine learning, neural networks, and autonomous systems. Drives our AI innovation and product development.',
      expertise: ['Machine Learning', 'Neural Networks', 'Autonomous Systems'],
      image: '🧠'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief Research Officer',
      bio: 'Research scientist focused on quantum computing, advanced algorithms, and cutting-edge technology research. Leads our R&D initiatives.',
      expertise: ['Quantum Computing', 'Algorithm Research', 'R&D Strategy'],
      image: '🔬'
    },
    {
      name: 'Alex Thompson',
      role: 'Head of Infrastructure',
      bio: 'Infrastructure expert specializing in enterprise systems, cloud solutions, and scalable architecture. Ensures our solutions are robust and scalable.',
      expertise: ['Enterprise Systems', 'Cloud Solutions', 'Scalable Architecture'],
      image: '🏗️'
    },
    {
      name: 'Lisa Park',
      role: 'Head of Cybersecurity',
      bio: 'Security specialist with expertise in threat detection, compliance, and enterprise security solutions. Protects our clients\' digital assets.',
      expertise: ['Threat Detection', 'Compliance', 'Enterprise Security'],
      image: '🛡️'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible, embracing cutting-edge technologies and novel approaches.',
      icon: '🚀'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex challenges.',
      icon: '🤝'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay ahead of the curve by continuously learning and adapting to new technologies and methodologies.',
      icon: '📚'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Our Team | Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, cybersecurity, infrastructure, and innovation are driving the future of technology." />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            The brilliant minds behind Zion Tech Group. Our diverse team of experts brings together decades of experience in AI, cybersecurity, infrastructure, and innovation to deliver cutting-edge solutions.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-6 rounded-xl bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3">{member.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-medium">{member.role}</p>
                </div>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="space-y-2">
                  <h4 className="text-white font-medium text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-white/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Team Highlights</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-white/70">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">25+</div>
              <div className="text-white/70">Countries Represented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-white/70">Projects Delivered</div>
            </div>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="mb-20">
          <div className="text-center p-8 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and innovation. Join us in shaping the future of AI and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/careers" 
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
              >
                View Open Positions
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Culture Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Culture</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Innovation-Driven Environment</h3>
              <p className="text-white/80 text-lg mb-6">
                At Zion Tech Group, we foster a culture of continuous innovation and learning. Our team members are encouraged to explore new ideas, experiment with cutting-edge technologies, and push the boundaries of what's possible.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Flexible work environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Continuous learning opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Innovation time and resources</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Diversity & Inclusion</h3>
              <p className="text-white/80 text-lg mb-6">
                We believe that diverse perspectives drive better innovation. Our team represents different backgrounds, experiences, and viewpoints, creating a rich environment for creative problem-solving.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Inclusive workplace policies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Equal opportunity employer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Diverse hiring practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work with Us?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Our team is ready to help you transform your business with cutting-edge technology solutions. Let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

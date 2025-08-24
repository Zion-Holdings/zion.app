import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  const companyStats = [
    { number: '10+', label: 'Years of Experience', icon: '🎓' },
    { number: '500+', label: 'Projects Delivered', icon: '✅' },
    { number: '99.9%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '24/7', label: 'Support Available', icon: '🔄' },
    { number: '50+', label: 'Team Members', icon: '👥' },
    { number: '15+', label: 'Technology Partners', icon: '🤝' }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the impact we create for our clients.',
      icon: '🎯',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring exceptional quality and reliability.',
      icon: '🏆',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay ahead of the curve by continuously learning and adapting to new technologies and methodologies.',
      icon: '📚',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const expertise = [
    {
      category: 'Artificial Intelligence & Machine Learning',
      technologies: ['GPT-4', 'Computer Vision', 'Natural Language Processing', 'Predictive Analytics', 'Neural Networks'],
      icon: '🤖',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      category: 'Cloud & Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      icon: '☁️',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      category: 'Cybersecurity',
      technologies: ['Threat Detection', 'Penetration Testing', 'Compliance', 'Security Audits', 'Incident Response'],
      icon: '🛡️',
      color: 'from-red-500 to-pink-600'
    },
    {
      category: 'Web & Mobile Development',
      technologies: ['React', 'Next.js', 'Node.js', 'React Native', 'Flutter', 'Progressive Web Apps'],
      icon: '💻',
      color: 'from-green-500 to-emerald-600'
    },
    {
      category: 'Data & Analytics',
      technologies: ['Big Data', 'Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization'],
      icon: '📊',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      category: 'DevOps & Automation',
      technologies: ['CI/CD', 'Infrastructure as Code', 'Monitoring', 'Automation', 'Performance Optimization'],
      icon: '⚡',
      color: 'from-violet-500 to-purple-600'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Quantum AI Platform Launch',
      description: 'Successfully launched the first quantum-powered AI analytics platform for enterprise clients.'
    },
    {
      year: '2023',
      title: '500+ Projects Milestone',
      description: 'Reached a major milestone of delivering 500+ successful projects across various industries.'
    },
    {
      year: '2022',
      title: 'AI Innovation Award',
      description: 'Received the prestigious AI Innovation Award for our breakthrough in autonomous DevOps.'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 25+ countries with localized solutions.'
    },
    {
      year: '2020',
      title: 'Cybersecurity Excellence',
      description: 'Achieved industry recognition for our advanced cybersecurity threat detection platform.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      expertise: 'AI Strategy, Business Development, Technology Innovation',
      experience: '15+ years in technology leadership',
      avatar: '👨‍💼'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI/ML, Quantum Computing, Research & Development',
      experience: '12+ years in AI research',
      avatar: '👩‍🔬'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Engineering',
      expertise: 'Cloud Architecture, DevOps, System Design',
      experience: '10+ years in software engineering',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Watson',
      role: 'VP of Client Success',
      expertise: 'Client Relations, Project Management, Strategic Consulting',
      experience: '8+ years in client success',
      avatar: '👩‍💼'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, expertise, and commitment to delivering innovative technology solutions. Discover our team, achievements, and core values." />
        <meta name="keywords" content="about Zion Tech Group, technology company, AI experts, cloud specialists, cybersecurity professionals" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            We are a forward-thinking technology company dedicated to transforming businesses through innovative solutions. 
            Our mission is to empower organizations with cutting-edge technology that drives growth and success.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🚀 Innovation-Driven</span>
            <span>💡 Problem Solvers</span>
            <span>🤝 Client-Focused</span>
            <span>🌍 Global Reach</span>
          </div>
        </div>

        {/* Company Stats */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes to leverage 
                the power of AI, cloud computing, and digital transformation to achieve unprecedented growth and success.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">✓</span>
                  Empower businesses with innovative solutions
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">✓</span>
                  Drive digital transformation across industries
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">✓</span>
                  Create sustainable technological advancement
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg mb-6">
                To be the global leader in innovative technology solutions, setting new standards for excellence, 
                innovation, and client success in the digital age.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">→</span>
                  Pioneer next-generation technologies
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">→</span>
                  Transform industries through innovation
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">→</span>
                  Build a sustainable digital future
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${area.color} w-16 h-16 rounded-lg flex items-center justify-center text-2xl text-white mb-4`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Key Achievements
          </h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">
                    {achievement.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.expertise}</p>
                <p className="text-xs text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let&apos;s discuss how our expertise and innovative solutions can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
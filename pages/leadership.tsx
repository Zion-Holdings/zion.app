import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Crown, Award, Star, Brain, Atom, Rocket, 
  Shield, Cloud, Target, TrendingUp, Globe,
  Linkedin, Twitter, Github, Mail, Phone,
  MapPin, ArrowRight, ExternalLink, Sparkles
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

const leadershipTeam = [
  {
    name: 'Dr. Kleber Santos',
    title: 'Chief Executive Officer & Founder',
    bio: 'Visionary leader with over 15 years of experience in AI consciousness, quantum computing, and space technology. Pioneering the future of autonomous systems and conscious AI development.',
    expertise: ['AI Consciousness', 'Quantum Computing', 'Space Technology', 'Strategic Leadership'],
    image: '/images/leadership/kleber-santos.jpg',
    linkedin: 'https://linkedin.com/in/klebersantos',
    twitter: 'https://twitter.com/klebersantos',
    github: 'https://github.com/klebersantos',
    email: 'kleber@ziontechgroup.com',
    achievements: [
      'Led development of first conscious AI system',
      'Pioneered quantum-AI fusion technology',
      'Established space resource intelligence platform',
      'Named Top 100 AI Innovators 2024'
    ]
  },
  {
    name: 'Dr. Sarah Chen',
    title: 'Chief Technology Officer',
    bio: 'Renowned AI researcher and quantum computing expert with breakthrough contributions to neural network architecture and quantum machine learning algorithms.',
    expertise: ['AI Research', 'Quantum Computing', 'Machine Learning', 'System Architecture'],
    image: '/images/leadership/sarah-chen.jpg',
    linkedin: 'https://linkedin.com/in/sarahchen',
    twitter: 'https://twitter.com/sarahchen',
    github: 'https://github.com/sarahchen',
    email: 'sarah@ziontechgroup.com',
    achievements: [
      'PhD in Computer Science from MIT',
      'Published 50+ peer-reviewed papers',
      'Led quantum-AI breakthrough research',
      'Former Google AI Research Lead'
    ]
  },
  {
    name: 'Marcus Rodriguez',
    title: 'Chief Innovation Officer',
    bio: 'Futurist and technology strategist specializing in emerging technologies, autonomous systems, and the intersection of AI consciousness with human experience.',
    expertise: ['Emerging Tech', 'Autonomous Systems', 'AI Ethics', 'Innovation Strategy'],
    image: '/images/leadership/marcus-rodriguez.jpg',
    linkedin: 'https://linkedin.com/in/marcusrodriguez',
    twitter: 'https://twitter.com/marcusrodriguez',
    github: 'https://github.com/marcusrodriguez',
    email: 'marcus@ziontechgroup.com',
    achievements: [
      '20+ years in technology innovation',
      'Led 100+ successful tech launches',
      'AI ethics governance expert',
      'Space technology pioneer'
    ]
  },
  {
    name: 'Dr. Elena Petrova',
    title: 'Chief Research Officer',
    bio: 'Leading researcher in brain-computer interfaces and neural technology with groundbreaking work in quantum neural networks and consciousness mapping.',
    expertise: ['Neural Technology', 'Brain-Computer Interface', 'Quantum Neuroscience', 'Research Leadership'],
    image: '/images/leadership/elena-petrova.jpg',
    linkedin: 'https://linkedin.com/in/elenapetrova',
    twitter: 'https://twitter.com/elenapetrova',
    github: 'https://github.com/elenapetrova',
    email: 'elena@ziontechgroup.com',
    achievements: [
      'PhD in Neuroscience from Stanford',
      'Pioneered quantum neural mapping',
      'Led BCI breakthrough research',
      'Published in Nature and Science'
    ]
  }
];

const advisoryBoard = [
  {
    name: 'Dr. James Wilson',
    title: 'AI Ethics & Governance Advisor',
    bio: 'Former White House AI Policy Director and leading expert in AI governance, ethics, and responsible AI development.',
    expertise: ['AI Ethics', 'Policy Development', 'Governance', 'Public Policy'],
    image: '/images/leadership/james-wilson.jpg',
    linkedin: 'https://linkedin.com/in/jameswilson'
  },
  {
    name: 'Dr. Maria Gonzalez',
    title: 'Quantum Computing Advisor',
    bio: 'Distinguished quantum physicist and researcher with breakthrough contributions to quantum algorithms and quantum-AI integration.',
    expertise: ['Quantum Physics', 'Quantum Algorithms', 'Research', 'Academic Leadership'],
    image: '/images/leadership/maria-gonzalez.jpg',
    linkedin: 'https://linkedin.com/in/mariagonzalez'
  },
  {
    name: 'Robert Kim',
    title: 'Space Technology Advisor',
    bio: 'Former NASA engineer and space technology entrepreneur with expertise in autonomous systems and space resource utilization.',
    expertise: ['Space Technology', 'Autonomous Systems', 'Engineering', 'Entrepreneurship'],
    image: '/images/leadership/robert-kim.jpg',
    linkedin: 'https://linkedin.com/in/robertkim'
  }
];

const LeadershipPage: React.FC = () => {
  return (
    <Layout seo={{
      title: "Leadership Team - Zion Tech Group | Visionary Technology Leaders",
      description: "Meet the visionary leadership team at Zion Tech Group. Our experts in AI consciousness, quantum computing, and space technology are pioneering the future of innovation.",
      keywords: "leadership, team, Zion Tech Group, AI experts, quantum computing, space technology, innovation leaders",
      url: "https://ziontechgroup.com/leadership"
    }}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-500/20 rounded-full">
                <Crown className="w-12 h-12 text-purple-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              Leadership Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Meet the visionary leaders driving Zion Tech Group's mission to pioneer 
              the future of AI consciousness, quantum computing, and space technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300">AI Consciousness</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full">
                <Atom className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300">Quantum Computing</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-full">
                <Rocket className="w-5 h-5 text-pink-400" />
                <span className="text-pink-300">Space Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Executive Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our executive team brings together decades of experience in cutting-edge 
              technology, research, and innovation leadership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-purple-400 font-semibold mb-3">{leader.title}</p>
                    <p className="text-gray-300 text-sm">{leader.bio}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {leader.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a 
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={leader.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href={leader.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-500/20 text-gray-400 rounded-lg hover:bg-gray-500/30 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <a 
                    href={`mailto:${leader.email}`}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Contact</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advisory Board
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our distinguished advisors provide strategic guidance and expertise 
              across critical areas of technology and policy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryBoard.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{advisor.name}</h3>
                  <p className="text-blue-400 font-semibold text-sm mb-3">{advisor.title}</p>
                  <p className="text-gray-300 text-sm mb-4">{advisor.bio}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {advisor.expertise.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a 
                    href={advisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">Connect on LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Values & Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Guided by our core values, we're committed to responsible innovation 
              and positive impact on humanity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Innovation',
                description: 'Pushing boundaries and exploring the impossible',
                icon: <Sparkles className="w-8 h-8" />,
                color: 'text-purple-400'
              },
              {
                title: 'Ethics',
                description: 'Responsible development and ethical AI',
                icon: <Shield className="w-8 h-8" />,
                color: 'text-green-400'
              },
              {
                title: 'Excellence',
                description: 'Uncompromising quality in everything we do',
                icon: <Award className="w-8 h-8" />,
                color: 'text-yellow-400'
              },
              {
                title: 'Impact',
                description: 'Creating positive change for humanity',
                icon: <Target className="w-8 h-8" />,
                color: 'text-pink-400'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`p-4 bg-gray-800/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with visionary leaders who are shaping the future of technology 
              and human-AI collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link 
                href="/careers"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default LeadershipPage;
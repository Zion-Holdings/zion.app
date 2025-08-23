import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, MessageCircle, Globe, Star, Award, BookOpen, 
  Video, Calendar, Heart, Zap, Target, Building, Code
} from 'lucide-react';

const Community: React.FC = () => {
  const communityFeatures = [
    {
      title: 'Developer Forums',
      description: 'Connect with fellow developers and share knowledge',
      icon: <Users className="w-8 h-8 text-blue-400" />,
      features: [
        'Technical Discussions',
        'Code Reviews',
        'Best Practices',
        'Problem Solving'
      "
    },
    {
      title: 'Learning Hub',
      description: 'Access to exclusive training materials and resources',
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
      features: [
        'Online Courses',
        'Webinars',
        'Documentation',
        'Tutorials'
      "
    },
    {
      title: 'Events & Meetups',
      description: 'Join our virtual and in-person community events',
      icon: <Calendar className="w-8 h-8 text-purple-400" />,
      features: [
        'Virtual Conferences',
        'Local Meetups',
        'Hackathons',
        'Networking Events'
      "
    },
    {
      title: 'Innovation Lab',
      description: 'Collaborate on cutting-edge projects and research',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      features: [
        'Open Source Projects',
        'Research Collaboration',
        'Innovation Challenges',
        'Mentorship Programs'
      "
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI & Quantum Computing Summit',
      date: 'September 15-17, 2025',
      type: 'Virtual Conference',
      description: 'Explore the future of AI and quantum computing'
    },
    {
      title: 'Developer Workshop Series',
      date: 'Every Tuesday',
      type: 'Online Workshop',
      description: 'Hands-on coding sessions with experts'
    },
    {
      title: 'Community Hackathon',
      date: 'October 5-7, 2025',
      type: '48-Hour Event',
      description: 'Build innovative solutions together'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Join Our Community
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Connect, learn, and grow with fellow innovators, developers, and technology enthusiasts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Join Community
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Explore Events
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Community Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover what makes our community special and how you can get involved
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-blue-400 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Mark your calendar for these exciting community events
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-purple-400 font-semibold mb-3">{event.date}</p>
                  <p className="text-gray-300">{event.description}</p>
                  <button className="mt-4 w-full px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-lg hover:bg-purple-500/30 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Community Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See the numbers behind our growing global community
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '10,000+', label: 'Members', icon: <Users className="w-8 h-8 text-blue-400" /> },
                { number: '500+', label: 'Projects', icon: <Code className="w-8 h-8 text-green-400" /> },
                { number: '100+', label: 'Events', icon: <Calendar className="w-8 h-8 text-purple-400" /> },
                { number: '50+', label: 'Countries', icon: <Globe className="w-8 h-8 text-yellow-400" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Join?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Become part of our thriving community and start your journey today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Join Now
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Community;
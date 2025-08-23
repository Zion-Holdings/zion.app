import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Play, Star, ArrowRight } from 'lucide-react';

const webinars = [
  {
    id: 1,
    title: "AI-Powered Business Transformation in 2025",
    description: "Learn how artificial intelligence is revolutionizing business operations and discover practical strategies for implementation.",
    date: "2025-02-15",
    time: "2:00 PM EST",
    duration: "60 minutes",
    speaker: "Dr. Sarah Chen, AI Research Director",
    attendees: 1250,
    recording: true,
    category: "AI & Machine Learning"
  },
  {
    id: 2,
    title: "Quantum Computing: From Theory to Practice",
    description: "Explore the current state of quantum computing and its real-world applications in enterprise environments.",
    date: "2025-02-22",
    time: "3:00 PM EST",
    duration: "45 minutes",
    speaker: "Prof. Michael Rodriguez, Quantum Systems Expert",
    attendees: 890,
    recording: true,
    category: "Quantum Technology"
  },
  {
    id: 3,
    title: "Building Scalable Micro SaaS Solutions",
    description: "Discover the secrets to creating and scaling micro SaaS applications that generate consistent revenue.",
    date: "2025-03-01",
    time: "1:00 PM EST",
    duration: "75 minutes",
    speaker: "Alex Thompson, SaaS Entrepreneur",
    attendees: 2100,
    recording: false,
    category: "Micro SaaS"
  },
  {
    id: 4,
    title: "Future of Enterprise IT Infrastructure",
    description: "Explore emerging trends in enterprise IT and learn how to future-proof your technology stack.",
    date: "2025-03-08",
    time: "2:30 PM EST",
    duration: "50 minutes",
    speaker: "Jennifer Kim, CTO at TechCorp",
    attendees: 1500,
    recording: true,
    category: "Enterprise IT"
  }
];

const upcomingWebinars = webinars.filter(w => new Date(w.date) > new Date());
const pastWebinars = webinars.filter(w => new Date(w.date) <= new Date());

const WebinarsPage: React.FC = () => {
  const seoConfig = {
    title: "Technology Webinars & Online Events | Zion Tech Group",
    description: "Join our expert-led webinars on AI, quantum computing, micro SaaS, and enterprise technology. Learn from industry leaders and advance your technical knowledge.",
    keywords: "webinars, technology events, AI training, quantum computing, micro SaaS, enterprise IT, online learning, Zion Tech Group",
    image: "/og-image.svg",
    url: "https://ziontechgroup.com/webinars",
    type: "website"
  };

  return (
    <Layout seo={seoConfig}>
      <div className="min-h-screen bg-gray-900 text-white py-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technology Webinars
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Join industry experts and technology leaders for in-depth discussions on cutting-edge technologies and business strategies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        {upcomingWebinars.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Upcoming Webinars
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingWebinars.map((webinar, index) => (
                  <motion.div
                    key={webinar.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                        {webinar.category}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        Upcoming
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-5 h-5 mr-3 text-cyan-400" />
                        <span>{new Date(webinar.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="w-5 h-5 mr-3 text-cyan-400" />
                        <span>{webinar.time} • {webinar.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="w-5 h-5 mr-3 text-cyan-400" />
                        <span>{webinar.attendees} registered</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm text-gray-400 mb-1">Speaker:</p>
                      <p className="text-white font-semibold">{webinar.speaker}</p>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      Register Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Past Webinars */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Past Webinars & Recordings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {webinar.category}
                    </span>
                    {webinar.recording && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm flex items-center">
                        <Play className="w-3 h-3 mr-1" />
                        Recording
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {webinar.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Star className="w-4 h-4 mr-2 text-purple-400" />
                      <span>{webinar.speaker}</span>
                    </div>
                  </div>
                  
                  {webinar.recording ? (
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Recording
                    </button>
                  ) : (
                    <div className="w-full bg-gray-600 text-gray-300 py-2 px-4 rounded-lg text-center">
                      Recording Unavailable
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Want to Host a Webinar?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Share your expertise with our technology community. Contact us to propose a webinar topic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-500 text-cyan-400 py-3 px-8 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Email Directly
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WebinarsPage;
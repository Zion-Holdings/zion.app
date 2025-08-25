import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Play, Download, ExternalLink, Star, TrendingUp, Video, Headphones } from 'lucide-react';

const Webinars: React.FC = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence: From Data to Decisions",
      description: "Learn how to leverage artificial intelligence and machine learning to transform raw data into actionable business insights.",
      date: "March 20, 2025",
      time: "2:00 PM - 3:30 PM EST",
      duration: "90 minutes",
      speaker: "Dr. Sarah Chen",
      speakerTitle: "AI Research Director",
      attendees: "200+",
      featured: true,
      registrationUrl: "#",
      category: "Artificial Intelligence"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Workforces",
      description: "Essential security protocols and tools to protect your organization's data and systems in the era of remote work.",
      date: "March 27, 2025",
      time: "1:00 PM - 2:30 PM EST",
      duration: "90 minutes",
      speaker: "Michael Rodriguez",
      speakerTitle: "Cybersecurity Expert",
      attendees: "150+",
      featured: false,
      registrationUrl: "#",
      category: "Cybersecurity"
    },
    {
      id: 3,
      title: "Building Scalable Microservices Architecture",
      description: "Comprehensive guide to designing, implementing, and maintaining microservices-based applications for enterprise scale.",
      date: "April 3, 2025",
      time: "3:00 PM - 4:30 PM EST",
      duration: "90 minutes",
      speaker: "Emily Watson",
      speakerTitle: "Senior Software Architect",
      attendees: "180+",
      featured: true,
      registrationUrl: "#",
      category: "Software Development"
    }
  ];

  const onDemandWebinars = [
    {
      id: 4,
      title: "Digital Transformation Strategies for Enterprise",
      description: "Comprehensive overview of digital transformation methodologies, best practices, and implementation strategies.",
      duration: "75 minutes",
      speaker: "Dr. James Wilson",
      speakerTitle: "Digital Transformation Consultant",
      views: "1,200+",
      rating: 4.8,
      category: "Digital Transformation",
      thumbnail: "/api/placeholder/400/250",
      watchUrl: "#",
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "Cloud-Native Development with Kubernetes",
      description: "Deep dive into Kubernetes orchestration, container management, and cloud-native application development.",
      duration: "60 minutes",
      speaker: "Lisa Thompson",
      speakerTitle: "Cloud Infrastructure Specialist",
      views: "950+",
      rating: 4.7,
      category: "Cloud Computing",
      thumbnail: "/api/placeholder/400/250",
      watchUrl: "#",
      downloadUrl: "#"
    },
    {
      id: 6,
      title: "Machine Learning in Production: MLOps Best Practices",
      description: "Learn how to deploy, monitor, and maintain machine learning models in production environments.",
      duration: "80 minutes",
      speaker: "Alex Kumar",
      speakerTitle: "MLOps Engineer",
      views: "800+",
      rating: 4.9,
      category: "Machine Learning",
      thumbnail: "/api/placeholder/400/250",
      watchUrl: "#",
      downloadUrl: "#"
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Cybersecurity", "Software Development", "Digital Transformation", "Cloud Computing", "Machine Learning"];

  return (
    <>
      <Helmet>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's live webinars and access on-demand content covering AI, cybersecurity, software development, and emerging technologies." />
        <meta name="keywords" content="webinars, online learning, AI webinars, cybersecurity training, software development webinars, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Video className="w-20 h-20 text-green-400 mx-auto" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent"
            >
              Webinars & Online Learning
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Join our live webinars with industry experts and access our library of on-demand content 
              covering the latest technologies and industry insights.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Upcoming Webinars Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Upcoming Live Webinars
            </h2>
            <p className="text-xl text-gray-300">
              Register now for these exclusive live sessions with industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 transform hover:scale-105 ${
                  webinar.featured 
                    ? 'border-green-500/50 shadow-lg shadow-green-500/20' 
                    : 'border-gray-700/50 hover:border-green-500/50'
                }`}
              >
                {webinar.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Featured Webinar</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 text-sm rounded-full border ${
                    webinar.category === 'Artificial Intelligence' ? 'bg-blue-600/20 text-blue-400 border-blue-500/30' :
                    webinar.category === 'Cybersecurity' ? 'bg-red-600/20 text-red-400 border-red-500/30' :
                    webinar.category === 'Software Development' ? 'bg-green-600/20 text-green-400 border-green-500/30' :
                    'bg-purple-600/20 text-purple-400 border-purple-500/30'
                  }`}>
                    {webinar.category}
                  </span>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white hover:text-green-400 transition-colors duration-300">
                  {webinar.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {webinar.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {webinar.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {webinar.time} ({webinar.duration})
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    {webinar.attendees} registered
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-1">Speaker:</p>
                  <p className="text-white font-medium">{webinar.speaker}</p>
                  <p className="text-gray-400 text-sm">{webinar.speakerTitle}</p>
                </div>
                
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  <Calendar className="w-4 h-4" />
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* On-Demand Webinars Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              On-Demand Webinars
            </h2>
            <p className="text-xl text-gray-300">
              Watch our recorded webinars anytime, anywhere at your own pace
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {onDemandWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 text-sm rounded-full border ${
                    webinar.category === 'Artificial Intelligence' ? 'bg-blue-600/20 text-blue-400 border-blue-500/30' :
                    webinar.category === 'Cybersecurity' ? 'bg-red-600/20 text-red-400 border-red-500/30' :
                    webinar.category === 'Software Development' ? 'bg-green-600/20 text-green-400 border-green-500/30' :
                    webinar.category === 'Digital Transformation' ? 'bg-purple-600/20 text-purple-400 border-purple-500/30' :
                    webinar.category === 'Cloud Computing' ? 'bg-cyan-600/20 text-cyan-400 border-cyan-500/30' :
                    'bg-orange-600/20 text-orange-400 border-orange-500/30'
                  }`}>
                    {webinar.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white hover:text-green-400 transition-colors duration-300">
                  {webinar.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {webinar.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {webinar.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    {webinar.views} views
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    {webinar.rating}/5.0 rating
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-1">Speaker:</p>
                  <p className="text-white font-medium">{webinar.speaker}</p>
                  <p className="text-gray-400 text-sm">{webinar.speakerTitle}</p>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    <Play className="w-4 h-4" />
                    Watch Now
                  </button>
                  <button className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all duration-300">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="container mx-auto px-4 py-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-3xl p-12 border border-green-500/30">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="inline-block mb-6"
            >
              <Headphones className="w-16 h-16 text-green-400 mx-auto" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Never Miss a Webinar
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our webinar notifications and get early access to registration, 
              exclusive content, and special offers for our premium webinars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Webinars;
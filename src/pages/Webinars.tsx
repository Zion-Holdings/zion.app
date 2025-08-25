import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, ExternalLink, Play, Download, BookOpen, Video, Users2, Zap, Brain, Shield, Globe } from 'lucide-react';

const Webinars = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence: From Data to Decisions",
      date: "2025-02-20",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speakers: ["Dr. Sarah Chen", "Michael Rodriguez"],
      attendees: 650,
      description: "Learn how to leverage AI and machine learning to transform your business intelligence capabilities. Discover practical strategies for implementing AI-driven analytics that drive real business value.",
      topics: [
        "AI-powered data analysis techniques",
        "Real-time business intelligence dashboards",
        "Predictive analytics implementation",
        "ROI measurement for AI initiatives"
      ],
      registrationLink: "/webinars/ai-business-intelligence",
      isLive: true,
      category: "AI & Analytics"
    },
    {
      id: 2,
      title: "Micro SAAS Success: Building Scalable Business Models",
      date: "2025-02-25",
      time: "1:00 PM EST",
      duration: "90 minutes",
      speakers: ["Lisa Anderson", "David Kim"],
      attendees: 420,
      description: "Explore proven strategies for building and scaling micro SAAS businesses. From initial concept to sustainable growth, learn the key principles that drive success in the competitive SAAS landscape.",
      topics: [
        "Market validation strategies",
        "Customer acquisition frameworks",
        "Scaling operations efficiently",
        "Funding and growth strategies"
      ],
      registrationLink: "/webinars/micro-saas-success",
      isLive: true,
      category: "Business Strategy"
    },
    {
      id: 3,
      title: "Cloud Security in 2025: Advanced Threat Protection",
      date: "2025-03-05",
      time: "3:00 PM EST",
      duration: "75 minutes",
      speakers: ["Alex Thompson", "Dr. Emily Watson"],
      attendees: 380,
      description: "Stay ahead of evolving cybersecurity threats with advanced cloud security strategies. Learn about the latest security technologies and best practices for protecting your cloud infrastructure.",
      topics: [
        "Zero-trust security architecture",
        "Cloud-native security tools",
        "Compliance and governance",
        "Incident response planning"
      ],
      registrationLink: "/webinars/cloud-security-2025",
      isLive: true,
      category: "Security"
    }
  ];

  const onDemandWebinars = [
    {
      id: 4,
      title: "Digital Transformation Roadmap: A Practical Guide",
      date: "2025-01-15",
      speakers: ["Dr. Sarah Chen"],
      attendees: 520,
      description: "Comprehensive guide to planning and executing digital transformation initiatives. Learn from real-world case studies and practical implementation strategies.",
      topics: ["Strategy development", "Change management", "Technology selection", "Success metrics"],
      recordingLink: "/webinars/digital-transformation-roadmap",
      slidesLink: "/webinars/digital-transformation-roadmap/slides",
      hasRecording: true,
      hasSlides: true,
      category: "Digital Transformation",
      duration: "80 minutes"
    },
    {
      id: 5,
      title: "DevOps Automation: Streamlining Your Development Pipeline",
      date: "2025-01-10",
      speakers: ["David Kim"],
      attendees: 310,
      description: "Master the art of DevOps automation to accelerate your development cycles and improve code quality. Practical examples and hands-on demonstrations included.",
      topics: ["CI/CD pipeline optimization", "Infrastructure as code", "Monitoring and alerting", "Performance optimization"],
      recordingLink: "/webinars/devops-automation",
      slidesLink: "/webinars/devops-automation/slides",
      hasRecording: true,
      hasSlides: true,
      category: "DevOps",
      duration: "70 minutes"
    },
    {
      id: 6,
      title: "AI Ethics and Responsible Development",
      date: "2025-01-05",
      speakers: ["Michael Rodriguez", "Lisa Anderson"],
      attendees: 450,
      description: "Explore the ethical implications of AI development and learn how to build responsible AI systems. Critical discussion on bias, transparency, and accountability.",
      topics: ["AI bias detection", "Transparency frameworks", "Ethical guidelines", "Stakeholder engagement"],
      recordingLink: "/webinars/ai-ethics",
      slidesLink: "/webinars/ai-ethics/slides",
      hasRecording: true,
      hasSlides: true,
      category: "AI Ethics",
      duration: "90 minutes"
    }
  ];

  const categories = [
    "All Categories",
    "AI & Analytics",
    "Business Strategy",
    "Security",
    "Digital Transformation",
    "DevOps",
    "AI Ethics"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Expert Webinars & Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join industry experts and thought leaders for in-depth webinars covering the latest trends, 
              technologies, and strategies in business transformation and digital innovation.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Webinars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Upcoming Webinars
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingWebinars.map((webinar) => (
            <div key={webinar.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {webinar.category}
                </span>
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                  Live
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {webinar.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {webinar.description}
              </p>
              
              <div className="space-y-2 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(webinar.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {webinar.time} • {webinar.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {webinar.attendees.toLocaleString()} registered
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">What You'll Learn:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  {webinar.topics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Speakers:</h4>
                <div className="flex flex-wrap gap-2">
                  {webinar.speakers.map((speaker, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {speaker}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link
                to={webinar.registrationLink}
                className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors w-full justify-center"
              >
                <ExternalLink className="w-4 h-4" />
                Register for Free
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* On-Demand Webinars */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            On-Demand Webinars
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {onDemandWebinars.map((webinar) => (
              <div key={webinar.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {webinar.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(webinar.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {webinar.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {webinar.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Topics:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {webinar.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {webinar.attendees.toLocaleString()} attendees
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {webinar.duration}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Speakers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {webinar.speakers.map((speaker, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {speaker}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {webinar.hasRecording && (
                    <Link
                      to={webinar.recordingLink}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Watch Now
                    </Link>
                  )}
                  {webinar.hasSlides && (
                    <Link
                      to={webinar.slidesLink}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download Slides
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss a Webinar
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our webinar notifications and get access to exclusive content, 
              expert insights, and practical strategies for your business transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Our Team
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinars;
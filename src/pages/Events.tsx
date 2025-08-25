import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ExternalLink, Play, Download, BookOpen, Video, Users2 } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI in Enterprise: 2025 Trends & Implementation Strategies",
      type: "Webinar",
      date: "2025-02-15",
      time: "2:00 PM EST",
      duration: "90 minutes",
      speakers: ["Dr. Sarah Chen", "Michael Rodriguez"],
      attendees: 450,
      description: "Join industry experts as they discuss the latest AI trends and practical implementation strategies for enterprise organizations.",
      registrationLink: "/events/ai-enterprise-2025",
      isLive: true
    },
    {
      id: 2,
      title: "Micro SAAS Summit: Scaling Strategies for 2025",
      type: "Conference",
      date: "2025-03-20",
      time: "9:00 AM EST",
      duration: "Full Day",
      speakers: ["Lisa Anderson", "David Kim", "Alex Thompson"],
      attendees: 1200,
      description: "A comprehensive one-day conference covering everything you need to know about scaling micro SAAS businesses.",
      registrationLink: "/events/micro-saas-summit-2025",
      isLive: true
    },
    {
      id: 3,
      title: "Cloud-Native Security Workshop",
      type: "Workshop",
      date: "2025-02-28",
      time: "1:00 PM EST",
      duration: "4 hours",
      speakers: ["Dr. Emily Watson"],
      attendees: 200,
      description: "Hands-on workshop covering security best practices for cloud-native applications and infrastructure.",
      registrationLink: "/events/cloud-security-workshop",
      isLive: true
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Digital Transformation in Manufacturing",
      type: "Webinar",
      date: "2025-01-20",
      speakers: ["Dr. Sarah Chen"],
      attendees: 320,
      description: "Exploring how manufacturing companies are leveraging digital technologies to improve efficiency and productivity.",
      recordingLink: "/events/digital-transformation-manufacturing",
      slidesLink: "/events/digital-transformation-manufacturing/slides",
      hasRecording: true,
      hasSlides: true
    },
    {
      id: 5,
      title: "AI Ethics & Responsible Development",
      type: "Panel Discussion",
      date: "2025-01-15",
      speakers: ["Michael Rodriguez", "Lisa Anderson", "Dr. Emily Watson"],
      attendees: 280,
      description: "A thought-provoking discussion on the ethical implications of AI development and deployment.",
      recordingLink: "/events/ai-ethics-panel",
      slidesLink: "/events/ai-ethics-panel/slides",
      hasRecording: true,
      hasSlides: true
    },
    {
      id: 6,
      title: "DevOps Best Practices Workshop",
      type: "Workshop",
      date: "2025-01-10",
      speakers: ["David Kim"],
      attendees: 150,
      description: "Practical workshop covering DevOps implementation strategies and best practices.",
      recordingLink: "/events/devops-workshop",
      slidesLink: "/events/devops-workshop/slides",
      hasRecording: true,
      hasSlides: true
    }
  ];

  const eventTypes = [
    "All Events",
    "Webinars",
    "Conferences",
    "Workshops",
    "Panel Discussions"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Events & Webinars
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join us for insightful events, workshops, and webinars featuring industry experts, 
              thought leaders, and practical insights on the latest technology trends.
            </p>
            
            {/* Event Type Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {eventTypes.map((type, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Upcoming Events
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  event.type === 'Webinar' ? 'bg-blue-100 text-blue-800' :
                  event.type === 'Conference' ? 'bg-purple-100 text-purple-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {event.type}
                </span>
                {event.isLive && (
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                    Live
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {event.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {event.description}
              </p>
              
              <div className="space-y-2 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {event.time} • {event.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {event.attendees.toLocaleString()} registered
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Speakers:</h4>
                <div className="flex flex-wrap gap-2">
                  {event.speakers.map((speaker, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {speaker}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link
                to={event.registrationLink}
                className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors w-full justify-center"
              >
                <ExternalLink className="w-4 h-4" />
                Register Now
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Past Events
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.type === 'Webinar' ? 'bg-blue-100 text-blue-800' :
                    event.type === 'Conference' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {event.type}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Speakers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.speakers.map((speaker, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {speaker}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Users className="w-4 h-4" />
                  {event.attendees.toLocaleString()} attendees
                </div>
                
                <div className="flex gap-2">
                  {event.hasRecording && (
                    <Link
                      to={event.recordingLink}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Watch Recording
                    </Link>
                  )}
                  {event.hasSlides && (
                    <Link
                      to={event.slidesLink}
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
              Stay Connected
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't miss out on our upcoming events! Subscribe to our newsletter to get notified 
              about new webinars, workshops, and conferences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Us
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
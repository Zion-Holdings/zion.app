import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const events = [
    {
      id: 'quantum-ai-summit-2025',
      title: 'Quantum AI Summit 2025',
      type: 'Conference',
      date: 'March 15-17, 2025',
      time: '9:00 AM - 6:00 PM EST',
      location: 'San Francisco, CA + Virtual',
      description: 'Join industry leaders and researchers for three days of insights into the future of quantum computing and AI automation.',
      speakers: [
        'Dr. Sarah Chen - Quantum Computing Pioneer',
        'Marcus Rodriguez - AI Ethics Expert',
        'Dr. Elena Petrov - Autonomous Systems Researcher'
      ],
      topics: ['Quantum Machine Learning', 'Ethical AI Development', 'Autonomous Systems', 'Future of Automation'],
      registration: 'Open',
      capacity: '500 attendees',
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'ai-automation-workshop',
      title: 'AI Automation Implementation Workshop',
      type: 'Workshop',
      date: 'February 28, 2025',
      time: '10:00 AM - 4:00 PM EST',
      location: 'Virtual',
      description: 'Hands-on workshop covering practical implementation of AI automation in enterprise environments.',
      speakers: [
        'Alex Thompson - Senior Automation Engineer',
        'Dr. Maria Santos - AI Implementation Specialist'
      ],
      topics: ['Implementation Strategies', 'Best Practices', 'Case Studies', 'Q&A Session'],
      registration: 'Open',
      capacity: '100 attendees',
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'sustainable-automation-webinar',
      title: 'Sustainable Automation: Building a Greener Future',
      type: 'Webinar',
      date: 'February 15, 2025',
      time: '2:00 PM - 3:30 PM EST',
      location: 'Virtual',
      description: 'Learn how AI automation can drive sustainability initiatives and reduce environmental impact.',
      speakers: [
        'Dr. James Wilson - Sustainability Expert',
        'Lisa Chang - Green Technology Specialist'
      ],
      topics: ['Environmental Impact', 'Sustainable Practices', 'ROI Analysis', 'Implementation Guide'],
      registration: 'Open',
      capacity: '200 attendees',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'cybersecurity-autonomous-systems',
      title: 'Cybersecurity in Autonomous Systems',
      type: 'Webinar',
      date: 'February 22, 2025',
      time: '1:00 PM - 2:30 PM EST',
      location: 'Virtual',
      description: 'Critical insights into securing autonomous systems and protecting against emerging cyber threats.',
      speakers: [
        'Robert Kim - Cybersecurity Expert',
        'Dr. Amanda Foster - Autonomous Systems Security'
      ],
      topics: ['Threat Landscape', 'Security Best Practices', 'Compliance Requirements', 'Risk Mitigation'],
      registration: 'Open',
      capacity: '150 attendees',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'performance-optimization-masterclass',
      title: 'Performance Optimization Masterclass',
      type: 'Masterclass',
      date: 'March 8, 2025',
      time: '11:00 AM - 5:00 PM EST',
      location: 'New York, NY + Virtual',
      description: 'Advanced techniques for optimizing AI automation systems and maximizing performance.',
      speakers: [
        'Dr. Michael Chen - Performance Engineering Expert',
        'Sarah Johnson - Systems Optimization Specialist'
      ],
      topics: ['Performance Metrics', 'Optimization Techniques', 'Scalability', 'Monitoring & Tuning'],
      registration: 'Open',
      capacity: '75 attendees',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'future-of-work-symposium',
      title: 'The Future of Work: Human-AI Collaboration',
      type: 'Symposium',
      date: 'March 22, 2025',
      time: '9:00 AM - 5:00 PM EST',
      location: 'Austin, TX + Virtual',
      description: 'Explore how autonomous systems are reshaping the workplace and enhancing human capabilities.',
      speakers: [
        'Dr. Rachel Green - Future of Work Researcher',
        'David Martinez - Human-AI Interaction Expert',
        'Prof. Jennifer Lee - Organizational Psychology'
      ],
      topics: ['Workplace Transformation', 'Human-AI Collaboration', 'Skills Development', 'Organizational Change'],
      registration: 'Open',
      capacity: '300 attendees',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'startup-automation-hackathon',
      title: 'Startup Automation Hackathon',
      type: 'Hackathon',
      date: 'April 5-7, 2025',
      time: '48 hours continuous',
      location: 'Virtual',
      description: 'Build innovative automation solutions in this intensive hackathon for startups and developers.',
      speakers: [
        'Startup Mentors & Investors',
        'AI Automation Experts',
        'Industry Leaders'
      ],
      topics: ['Innovation', 'Collaboration', 'Problem Solving', 'Networking'],
      registration: 'Open',
      capacity: '200 participants',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'enterprise-automation-forum',
      title: 'Enterprise Automation Forum',
      type: 'Forum',
      date: 'April 12, 2025',
      time: '9:00 AM - 6:00 PM EST',
      location: 'Chicago, IL + Virtual',
      description: 'Exclusive forum for enterprise leaders to discuss automation strategies and share best practices.',
      speakers: [
        'Enterprise CTOs & CIOs',
        'Automation Industry Leaders',
        'Digital Transformation Experts'
      ],
      topics: ['Enterprise Strategy', 'Digital Transformation', 'ROI & Metrics', 'Change Management'],
      registration: 'By Invitation',
      capacity: '150 executives',
      featured: false,
      image: '/api/placeholder/600/400'
    }
  ];

  const eventTypes = ['All', 'Conference', 'Workshop', 'Webinar', 'Masterclass', 'Symposium', 'Hackathon', 'Forum'];

  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => event.type === activeFilter);

  const renderEventCard = (event, index) => (
    <div 
      key={index} 
      className={`bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 ${
        event.featured ? 'ring-2 ring-cyan-400/30' : ''
      }`}
    >
      {event.featured && (
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
            Featured
          </span>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-3">
        <span className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full">
          {event.type}
        </span>
        <span className={`px-3 py-1 text-xs rounded-full ${
          event.registration === 'Open' 
            ? 'bg-green-400/20 text-green-400 border border-green-400/30'
            : 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
        }`}>
          {event.registration}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors mb-3">
        {event.title}
      </h3>
      
      <p className="text-white/80 text-sm mb-4 line-clamp-3">
        {event.description}
      </p>
      
      <div className="space-y-2 mb-4 text-sm text-white/60">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{event.location}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-white mb-2 text-sm">Key Topics</h4>
        <div className="flex flex-wrap gap-1">
          {event.topics.slice(0, 3).map((topic, index) => (
            <span key={index} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full">
              {topic}
            </span>
          ))}
          {event.topics.length > 3 && (
            <span className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full">
              +{event.topics.length - 3} more
            </span>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-4 text-sm text-white/60">
        <span>Capacity: {event.capacity}</span>
        <span>{event.speakers.length} speakers</span>
      </div>
      
      <Link 
        href={`/events/${event.id}`}
        className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 text-sm"
      >
        {event.registration === 'Open' ? 'Register Now' : 'Learn More'}
      </Link>
    </div>
  );

  return (
    <>
      <Head>
        <title>Events | Zion Tech Group - AI & Automation Conferences, Workshops & Webinars</title>
        <meta name="description" content="Join our upcoming events, webinars, and workshops on AI automation. Learn from experts, network with professionals, and stay ahead of the automation curve." />
        <meta property="og:title" content="Events | Zion Tech Group - AI & Automation Conferences, Workshops & Webinars" />
        <meta property="og:description" content="Join our upcoming events, webinars, and workshops on AI automation." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Upcoming Events
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Join industry leaders, researchers, and practitioners for exclusive insights into 
                the future of AI automation and autonomous systems.
              </p>
            </header>
            
            {/* Event Type Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === type
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            
            {/* Featured Events */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Events</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {events.filter(event => event.featured).map((event, index) => renderEventCard(event, index))}
              </div>
            </section>
            
            {/* All Events */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">All Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.filter(event => !event.featured).map((event, index) => renderEventCard(event, index))}
              </div>
            </section>
            
            {/* Event Categories Overview */}
            <section className="mt-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Event Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl border border-cyan-400/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Conferences</h3>
                  <p className="text-white/80 text-sm">
                    Multi-day events with industry leaders and networking opportunities
                  </p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-2xl border border-purple-400/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Workshops</h3>
                  <p className="text-white/80 text-sm">
                    Hands-on learning sessions with practical implementation guidance
                  </p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl border border-green-400/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Webinars</h3>
                  <p className="text-white/80 text-sm">
                    Online sessions covering specific topics and industry insights
                  </p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-2xl border border-yellow-400/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Hackathons</h3>
                  <p className="text-white/80 text-sm">
                    Intensive coding events for building innovative automation solutions
                  </p>
                </div>
              </div>
            </section>
            
            {/* Call to Action */}
            <section className="mt-20 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  We're constantly adding new events and can also create custom events for your organization. 
                  Let us know what you'd like to see!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Request Custom Event
                  </Link>
                  <Link 
                    href="/resources"
                    className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    Browse Resources
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
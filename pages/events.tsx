import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 'ai-automation-summit-2025',
      title: 'AI Automation Summit 2025',
      date: '2025-03-15',
      time: '9:00 AM - 6:00 PM',
      location: 'San Francisco, CA',
      type: 'Conference',
      description: 'Join industry leaders and experts for a comprehensive exploration of AI automation trends, technologies, and implementation strategies.',
      speakers: ['Dr. Sarah Chen - AI Research Director', 'Mark Johnson - Automation Expert', 'Dr. Lisa Rodriguez - Ethics Specialist'],
      topics: ['Edge Computing', 'Autonomous Systems', 'AI Ethics', 'Implementation Strategies'],
      registrationUrl: '#',
      featured: true
    },
    {
      id: 'edge-computing-webinar',
      title: 'Edge Computing for AI: Real-Time Intelligence',
      date: '2025-02-28',
      time: '2:00 PM - 3:30 PM',
      location: 'Virtual',
      type: 'Webinar',
      description: 'Learn how edge computing is revolutionizing AI deployment and enabling real-time decision-making across industries.',
      speakers: ['Alex Thompson - Edge Computing Specialist', 'Dr. Maria Santos - AI Architect'],
      topics: ['Edge AI Deployment', 'Real-time Processing', 'IoT Integration', 'Performance Optimization'],
      registrationUrl: '#',
      featured: false
    },
    {
      id: 'automation-workshop',
      title: 'Hands-on Automation Workshop',
      date: '2025-03-22',
      time: '10:00 AM - 4:00 PM',
      location: 'New York, NY',
      type: 'Workshop',
      description: 'Get hands-on experience with automation tools and technologies in this intensive workshop designed for practitioners.',
      speakers: ['David Kim - Senior Automation Engineer', 'Rachel Green - Process Specialist'],
      topics: ['RPA Implementation', 'Workflow Design', 'Integration Strategies', 'Best Practices'],
      registrationUrl: '#',
      featured: false
    },
    {
      id: 'ai-ethics-symposium',
      title: 'AI Ethics in Practice Symposium',
      date: '2025-04-10',
      time: '9:00 AM - 5:00 PM',
      location: 'Boston, MA',
      type: 'Symposium',
      description: 'Explore the practical implementation of AI ethics frameworks in enterprise environments.',
      speakers: ['Dr. James Wilson - AI Ethics Professor', 'Sarah Martinez - Compliance Director', 'Dr. Robert Chen - Legal Expert'],
      topics: ['Ethical AI Design', 'Compliance Requirements', 'Risk Assessment', 'Implementation Guidelines'],
      registrationUrl: '#',
      featured: false
    },
    {
      id: 'future-of-work-conference',
      title: 'The Future of Work: AI & Automation',
      date: '2025-04-25',
      time: '8:30 AM - 6:00 PM',
      location: 'Austin, TX',
      type: 'Conference',
      description: 'Discover how AI and automation are reshaping the workplace and creating new opportunities for innovation.',
      speakers: ['Dr. Emily Davis - Future of Work Researcher', 'Michael Brown - HR Technology Expert', 'Lisa Wang - Innovation Strategist'],
      topics: ['Workplace Transformation', 'Skill Development', 'Change Management', 'Innovation Strategies'],
      registrationUrl: '#',
      featured: false
    }
  ];

  const pastEvents = [
    {
      id: 'ai-trends-2024',
      title: 'AI Trends 2024: Looking Forward',
      date: '2024-12-15',
      type: 'Webinar',
      description: 'Recap of key AI developments in 2024 and predictions for 2025.',
      recordingUrl: '#',
      slidesUrl: '#'
    },
    {
      id: 'automation-success-stories',
      title: 'Automation Success Stories',
      date: '2024-11-20',
      type: 'Case Study Session',
      description: 'Real-world examples of successful automation implementations across industries.',
      recordingUrl: '#',
      slidesUrl: '#'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Conference': return 'from-blue-500 to-purple-500';
      case 'Webinar': return 'from-green-500 to-blue-500';
      case 'Workshop': return 'from-orange-500 to-red-500';
      case 'Symposium': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <>
      <Head>
        <title>Events | Zion Tech Group - AI & Automation Events</title>
        <meta name="description" content="Join Zion Tech Group at upcoming AI and automation events, conferences, and webinars. Stay updated with the latest trends and technologies." />
        <meta property="og:title" content="Events - Zion Tech Group" />
        <meta property="og:description" content="AI and automation events, conferences, and webinars." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>

            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Upcoming Events
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Join us at industry-leading events, conferences, and webinars to stay ahead of the curve in AI and automation
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Featured Events</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {upcomingEvents.filter(event => event.featured).map(event => (
                  <div key={event.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getEventTypeColor(event.type)} text-white`}>
                        {event.type}
                      </span>
                      <span className="text-cyan-400 font-semibold">{formatDate(event.date)}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white">{event.title}</h3>
                    <p className="text-white/80 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-6 text-sm text-white/70">
                      <div>🕒 {event.time}</div>
                      <div>📍 {event.location}</div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-cyan-400 mb-2">Key Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.topics.map(topic => (
                          <span key={topic} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-fuchsia-400 mb-2">Featured Speakers:</h4>
                      <ul className="text-sm text-white/70 space-y-1">
                        {event.speakers.map(speaker => (
                          <li key={speaker}>• {speaker}</li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      href={event.registrationUrl}
                      className="inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300"
                    >
                      Register Now
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">All Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.filter(event => !event.featured).map(event => (
                  <div key={event.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getEventTypeColor(event.type)} text-white`}>
                        {event.type}
                      </span>
                      <span className="text-cyan-400 text-sm font-semibold">{formatDate(event.date)}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{event.title}</h3>
                    <p className="text-white/80 mb-4 text-sm">{event.description}</p>
                    
                    <div className="space-y-1 mb-4 text-xs text-white/70">
                      <div>🕒 {event.time}</div>
                      <div>📍 {event.location}</div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-cyan-400 mb-2 text-sm">Topics:</h4>
                      <div className="flex flex-wrap gap-1">
                        {event.topics.slice(0, 3).map(topic => (
                          <span key={topic} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                            {topic}
                          </span>
                        ))}
                        {event.topics.length > 3 && (
                          <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/60">
                            +{event.topics.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <Link 
                      href={event.registrationUrl}
                      className="inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300"
                    >
                      Register
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Past Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastEvents.map(event => (
                  <div key={event.id} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-500 text-white">
                        {event.type}
                      </span>
                      <span className="text-white/60 text-sm">{formatDate(event.date)}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{event.title}</h3>
                    <p className="text-white/70 mb-4 text-sm">{event.description}</p>
                    
                    <div className="flex gap-3">
                      <Link 
                        href={event.recordingUrl}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
                      >
                        Watch Recording
                      </Link>
                      <Link 
                        href={event.slidesUrl}
                        className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold"
                      >
                        Download Slides
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">Host Your Own Event</h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Interested in hosting an AI or automation event? Partner with Zion Tech Group to create engaging, 
                informative experiences for your audience.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300"
                >
                  Partner With Us
                </Link>
                <Link 
                  href="/services" 
                  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

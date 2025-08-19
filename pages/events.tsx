import React from 'react';
import Head from 'next/head';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Cloud Automation Summit 2025',
      date: '2025-02-15',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      type: 'Conference',
      description: 'Join industry leaders and experts for a day of insights into the future of cloud automation and AI-driven infrastructure.',
      speakers: ['Dr. Sarah Chen', 'Mark Rodriguez', 'Lisa Thompson'],
      capacity: 500,
      registered: 342
    },
    {
      id: 2,
      title: 'AI Automation Workshop',
      date: '2025-02-22',
      time: '2:00 PM - 6:00 PM',
      location: 'Virtual Event',
      type: 'Workshop',
      description: 'Hands-on workshop covering practical implementation of AI automation in cloud environments.',
      speakers: ['Alex Johnson', 'Maria Garcia'],
      capacity: 100,
      registered: 87
    },
    {
      id: 3,
      title: 'Developer Meetup: Automation Tools',
      date: '2025-03-01',
      time: '6:00 PM - 9:00 PM',
      location: 'New York, NY',
      type: 'Meetup',
      description: 'Network with fellow developers and learn about the latest automation tools and techniques.',
      speakers: ['David Kim', 'Rachel Green'],
      capacity: 150,
      registered: 98
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Zion App Launch Event',
      date: '2025-01-10',
      location: 'Virtual Event',
      type: 'Product Launch',
      description: 'Celebrated the official launch of Zion App with demonstrations and Q&A sessions.',
      attendees: 1200
    },
    {
      id: 5,
      title: 'Automation Best Practices Webinar',
      date: '2025-01-05',
      location: 'Virtual Event',
      type: 'Webinar',
      description: 'Shared insights and best practices for implementing automation in production environments.',
      attendees: 850
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Events - Zion App</title>
        <meta name="description" content="Upcoming events, conferences, and workshops hosted by Zion App" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Events & Meetups
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us for conferences, workshops, and networking events
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8">Upcoming Events</h2>
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="md:flex md:items-start md:justify-between">
                    <div className="md:w-2/3">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          event.type === 'Conference' ? 'bg-purple-500/20 text-purple-400' :
                          event.type === 'Workshop' ? 'bg-green-500/20 text-green-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {event.type}
                        </span>
                        <span className="text-gray-400 text-sm">{event.date}</span>
                        <span className="text-gray-400 text-sm">{event.time}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                        <span>📍 {event.location}</span>
                        <span>👥 {event.registered}/{event.capacity} registered</span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-400 text-sm mb-2">Speakers:</p>
                        <div className="flex flex-wrap gap-2">
                          {event.speakers.map((speaker) => (
                            <span key={speaker} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                              {speaker}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/3 md:text-right mt-4 md:mt-0">
                      <button className="w-full md:w-auto px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors mb-3">
                        Register Now
                      </button>
                      <button className="w-full md:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8">Past Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      event.type === 'Product Launch' ? 'bg-orange-500/20 text-orange-400' :
                          event.type === 'Webinar' ? 'bg-indigo-500/20 text-indigo-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                      {event.type}
                    </span>
                    <span className="text-gray-400 text-sm">{event.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-3">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">📍 {event.location}</span>
                    <span className="text-gray-400">👥 {event.attendees} attendees</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Host an Event with Us
              </h3>
              <p className="text-gray-300 mb-6">
                Interested in hosting a workshop, meetup, or conference? Let's collaborate!
              </p>
              <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
                Get in Touch
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
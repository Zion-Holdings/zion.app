import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const eventCategories = [
    { id: 'all', name: 'All Events', icon: '📅' },
    { id: 'webinars', name: 'Webinars', icon: '💻' },
    { id: 'workshops', name: 'Workshops', icon: '🔧' },
    { id: 'conferences', name: 'Conferences', icon: '🎤' },
    { id: 'meetups', name: 'Meetups', icon: '🤝' }
  ];

  const events = [
    {
      id: 1,
      title: 'Automation Masterclass 2025',
      category: 'webinars',
      date: '2025-02-15',
      time: '14:00 UTC',
      duration: '2 hours',
      description: 'Learn advanced automation techniques and best practices from industry experts.',
      speaker: 'Dr. Sarah Chen',
      attendees: 150,
      status: 'upcoming',
      featured: true
    },
    {
      id: 2,
      title: 'CI/CD Pipeline Workshop',
      category: 'workshops',
      date: '2025-02-20',
      time: '10:00 UTC',
      duration: '4 hours',
      description: 'Hands-on workshop on building robust CI/CD pipelines for modern applications.',
      speaker: 'Mike Rodriguez',
      attendees: 75,
      status: 'upcoming',
      featured: false
    },
    {
      id: 3,
      title: 'DevOps Summit 2025',
      category: 'conferences',
      date: '2025-03-10',
      time: '09:00 UTC',
      duration: '2 days',
      description: 'Join industry leaders for insights into the future of DevOps and automation.',
      speaker: 'Multiple Speakers',
      attendees: 500,
      status: 'upcoming',
      featured: true
    },
    {
      id: 4,
      title: 'Local Developer Meetup',
      category: 'meetups',
      date: '2025-02-08',
      time: '18:00 UTC',
      duration: '3 hours',
      description: 'Network with local developers and share automation experiences.',
      speaker: 'Community Led',
      attendees: 25,
      status: 'upcoming',
      featured: false
    },
    {
      id: 5,
      title: 'Security in Automation',
      category: 'webinars',
      date: '2025-01-25',
      time: '15:00 UTC',
      duration: '1.5 hours',
      description: 'Understanding security implications and best practices in automated systems.',
      speaker: 'Alex Thompson',
      attendees: 200,
      status: 'completed',
      featured: false
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const completedEvents = events.filter(event => event.status === 'completed');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Head>
        <title>Events - bolt.new.zion.app</title>
        <meta name="description" content="Join our events, webinars, workshops, and conferences on automation and development" />
        <meta name="keywords" content="events, webinars, workshops, conferences, meetups, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Events & Learning
            </h1>
            <p className="text-xl text-gray-600">
              Join our community events to learn, network, and stay updated with the latest in automation
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {events.filter(event => event.featured).map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Date:</span>
                      <p className="font-medium">{event.date}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Time:</span>
                      <p className="font-medium">{event.time}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <p className="font-medium">{event.duration}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Attendees:</span>
                      <p className="font-medium">{event.attendees}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Speaker: {event.speaker}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      {event.status === 'upcoming' ? 'Register' : 'View Recording'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {eventCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full capitalize">
                      {event.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      event.status === 'upcoming' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Date:</span>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Time:</span>
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{event.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Speaker: {event.speaker}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      {event.status === 'upcoming' ? 'Register' : 'View Recording'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Event Statistics</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{upcomingEvents.length}</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Upcoming Events</h3>
                <p className="text-gray-600">Join our next sessions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{completedEvents.length}</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Completed Events</h3>
                <p className="text-gray-600">Access recordings and materials</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">1,200+</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Total Attendees</h3>
                <p className="text-gray-600">Join our growing community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const eventCategories = [
    { id: 'all', name: 'All Events', count: 24 },
    { id: 'webinars', name: 'Webinars', count: 8 },
    { id: 'workshops', name: 'Workshops', count: 6 },
    { id: 'conferences', name: 'Conferences', count: 4 },
    { id: 'meetups', name: 'Meetups', count: 3 },
    { id: 'training', name: 'Training Sessions', count: 3 },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Automation Workshop 2025',
      category: 'workshops',
      date: '2025-02-15',
      time: '10:00 AM - 2:00 PM',
      location: 'Virtual + San Francisco',
      description: 'Learn the latest techniques in AI-powered business automation. Hands-on workshop covering machine learning, process optimization, and implementation strategies.',
      speakers: ['Dr. Sarah Chen', 'Mike Rodriguez'],
      capacity: 50,
      registered: 42,
      price: '$299',
      featured: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 2,
      title: 'Cloud Migration Summit',
      category: 'conferences',
      date: '2025-02-20',
      time: '9:00 AM - 5:00 PM',
      location: 'Austin Convention Center',
      description: 'Join industry leaders for a comprehensive exploration of cloud migration strategies, best practices, and real-world case studies.',
      speakers: ['Jenny Thompson', 'Alex Kim', 'Dr. Robert Wilson'],
      capacity: 200,
      registered: 156,
      price: '$599',
      featured: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 3,
      title: 'DevOps Culture Transformation',
      category: 'webinars',
      date: '2025-02-25',
      time: '1:00 PM - 3:00 PM',
      location: 'Virtual',
      description: 'Discover how to build and sustain a successful DevOps culture that drives innovation, collaboration, and continuous improvement.',
      speakers: ['DevOps Team Lead'],
      capacity: 100,
      registered: 78,
      price: 'Free',
      featured: false,
      image: '/api/placeholder/400/250',
    },
    {
      id: 4,
      title: 'Security Best Practices Workshop',
      category: 'training',
      date: '2025-03-01',
      time: '10:00 AM - 4:00 PM',
      location: 'New York Office',
      description: 'Comprehensive security training covering threat detection, incident response, and security architecture best practices.',
      speakers: ['Security Team'],
      capacity: 30,
      registered: 25,
      price: '$199',
      featured: false,
      image: '/api/placeholder/400/250',
    },
    {
      id: 5,
      title: 'Data Analytics Meetup',
      category: 'meetups',
      date: '2025-03-05',
      time: '6:00 PM - 8:00 PM',
      location: 'Seattle Tech Hub',
      description: 'Network with data professionals and learn about the latest trends in analytics, visualization, and data-driven decision making.',
      speakers: ['Community Members'],
      capacity: 50,
      registered: 38,
      price: 'Free',
      featured: false,
      image: '/api/placeholder/400/250',
    },
    {
      id: 6,
      title: 'Product Launch Event',
      category: 'conferences',
      date: '2025-03-10',
      time: '11:00 AM - 3:00 PM',
      location: 'Los Angeles Convention Center',
      description: 'Be the first to see our revolutionary new product line. Live demonstrations, expert panels, and exclusive networking opportunities.',
      speakers: ['Product Team', 'Industry Experts'],
      capacity: 300,
      registered: 267,
      price: '$399',
      featured: true,
      image: '/api/placeholder/400/250',
    },
  ];

  const pastEvents = [
    {
      id: 7,
      title: 'Digital Transformation Conference 2024',
      category: 'conferences',
      date: '2024-12-15',
      location: 'Chicago',
      attendees: 180,
      highlights: ['Keynote presentations', 'Panel discussions', 'Networking sessions'],
      recordings: true,
    },
    {
      id: 8,
      title: 'Automation Workshop Series',
      category: 'workshops',
      date: '2024-11-20',
      location: 'Virtual',
      attendees: 45,
      highlights: ['Hands-on training', 'Case studies', 'Q&A sessions'],
      recordings: true,
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      webinars: 'bg-blue-100 text-blue-800',
      workshops: 'bg-green-100 text-green-800',
      conferences: 'bg-purple-100 text-purple-800',
      meetups: 'bg-orange-100 text-orange-800',
      training: 'bg-red-100 text-red-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryName = (category: string) => {
    const names: { [key: string]: string } = {
      webinars: 'Webinars',
      workshops: 'Workshops',
      conferences: 'Conferences',
      meetups: 'Meetups',
      training: 'Training Sessions',
    };
    return names[category] || category;
  };

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesCategory = activeFilter === 'all' || event.category === activeFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getRegistrationStatus = (event: any) => {
    if (event.registered >= event.capacity) return 'full';
    if (event.registered >= event.capacity * 0.8) return 'limited';
    return 'available';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'full': return 'bg-red-100 text-red-800';
      case 'limited': return 'bg-yellow-100 text-yellow-800';
      case 'available': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'full': return 'Full';
      case 'limited': return 'Limited Spots';
      case 'available': return 'Available';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Events - Zion App</title>
        <meta name="description" content="Join our upcoming events, webinars, workshops, and conferences" />
        <meta name="keywords" content="events, webinars, workshops, conferences, Zion App" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Events & Workshops
            </h1>
            <p className="text-xl text-gray-600">
              Join us for insightful sessions, hands-on workshops, and networking opportunities
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Search
                </button>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {eventCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Featured Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.filter(event => event.featured).map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Featured Event</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                        {getCategoryName(event.category)}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(getRegistrationStatus(event))}`}>
                        {getStatusText(getRegistrationStatus(event))}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <span>📅</span>
                        <span>{new Date(event.date).toLocaleDateString()} • {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>👥</span>
                        <span>{event.registered}/{event.capacity} registered</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>💰</span>
                        <span>{event.price}</span>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Upcoming Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">All Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-40 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">{getCategoryName(event.category)}</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                        {getCategoryName(event.category)}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(getRegistrationStatus(event))}`}>
                        {getStatusText(getRegistrationStatus(event))}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">{event.description}</p>
                    <div className="space-y-1 text-xs text-gray-500 mb-3">
                      <div>📅 {new Date(event.date).toLocaleDateString()} • {event.time}</div>
                      <div>📍 {event.location}</div>
                      <div>👥 {event.registered}/{event.capacity} • 💰 {event.price}</div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                      {getCategoryName(event.category)}
                    </span>
                    <span className="text-gray-500 text-sm">{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h3>
                  <div className="text-sm text-gray-600 mb-3">
                    <div>📍 {event.location}</div>
                    <div>👥 {event.attendees} attendees</div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {event.recordings && (
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Watch Recording →
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-6">
              Get notified about upcoming events, early bird pricing, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Host Your Own Event?</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for partners and speakers. Let's collaborate on creating amazing experiences together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Partner With Us
              </Link>
              <Link href="/speak" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                Become a Speaker
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
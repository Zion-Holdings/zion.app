import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Zion AI Summit 2025",
      date: "2025-02-15",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco, CA",
      description: "Join us for the biggest AI automation event of the year. Learn about the latest trends, network with industry leaders, and see live demonstrations of autonomous systems.",
      type: "Conference",
      attendees: 500,
      registration: "Open"
    },
    {
      id: 2,
      title: "Autonomous Systems Workshop",
      date: "2025-01-25",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual",
      description: "Hands-on workshop on building and deploying autonomous cloud systems. Perfect for developers and DevOps engineers.",
      type: "Workshop",
      attendees: 50,
      registration: "Limited Spots"
    },
    {
      id: 3,
      title: "Cloud Automation Meetup",
      date: "2025-01-30",
      time: "6:00 PM - 8:00 PM",
      location: "New York, NY",
      description: "Monthly meetup for cloud automation enthusiasts. Share experiences, learn from peers, and discover new tools.",
      type: "Meetup",
      attendees: 100,
      registration: "Open"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Zion Launch Event",
      date: "2025-01-10",
      location: "Virtual",
      description: "The official launch of Zion's autonomous cloud automation platform.",
      type: "Launch"
    }
  ];

  return (
    <>
      <Head>
        <title>Events | Zion - AI & Automation Events</title>
        <meta name="description" content="Join Zion at upcoming events, workshops, and conferences focused on AI automation and autonomous systems." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion Events
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join us at conferences, workshops, and meetups focused on the future of autonomous cloud automation
            </p>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {event.type}
                      </span>
                      <span className="text-sm text-gray-500">{event.attendees} attendees</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span>📅 {event.date}</span>
                      <span>🕒 {event.time}</span>
                      <span>📍 {event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div className="text-right mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        event.registration === 'Open' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {event.registration}
                      </span>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Past Events */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-sm p-6">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {event.type}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                  <div className="text-sm text-gray-500">
                    📅 {event.date} • 📍 {event.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Host an Event with Zion
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in hosting a workshop, meetup, or conference? Let's collaborate to bring the future of automation to your community.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
import React from 'react';
import Head from 'next/head';

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI Automation Summit 2025",
      date: "2025-02-15",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual Event",
      type: "Conference",
      description: "Join industry leaders for a comprehensive exploration of AI automation trends, best practices, and future developments.",
      speakers: ["Dr. Sarah Chen", "Marcus Rodriguez", "Dr. Emily Watson"],
      image: "🎯"
    },
    {
      id: 2,
      title: "DevOps Automation Workshop",
      date: "2025-02-22",
      time: "2:00 PM - 6:00 PM",
      location: "San Francisco, CA",
      type: "Workshop",
      description: "Hands-on workshop covering CI/CD automation, infrastructure as code, and deployment strategies.",
      speakers: ["Alex Thompson", "Lisa Park"],
      image: "⚡"
    },
    {
      id: 3,
      title: "Machine Learning in Production",
      date: "2025-03-01",
      time: "10:00 AM - 12:00 PM",
      location: "Virtual Webinar",
      type: "Webinar",
      description: "Learn how to deploy and maintain ML models in production environments with real-world examples.",
      speakers: ["Dr. James Wilson"],
      image: "🧠"
    },
    {
      id: 4,
      title: "Cloud Infrastructure Automation",
      date: "2025-03-08",
      time: "1:00 PM - 3:00 PM",
      location: "New York, NY",
      type: "Seminar",
      description: "Explore advanced cloud automation techniques and tools for scalable infrastructure management.",
      speakers: ["Rachel Green", "David Kim"],
      image: "☁️"
    },
    {
      id: 5,
      title: "AI Ethics & Responsible Development",
      date: "2025-03-15",
      time: "11:00 AM - 1:00 PM",
      location: "Virtual Panel",
      type: "Panel Discussion",
      description: "Critical discussion on ethical AI development and responsible technology practices.",
      speakers: ["Prof. Maria Garcia", "Dr. Robert Chen", "Sarah Johnson"],
      image: "⚖️"
    },
    {
      id: 6,
      title: "Future of Autonomous Systems",
      date: "2025-03-22",
      time: "3:00 PM - 5:00 PM",
      location: "Austin, TX",
      type: "Meetup",
      description: "Local meetup discussing the evolution of autonomous systems and their impact on various industries.",
      speakers: ["Mike Davis", "Jennifer Lee"],
      image: "🤖"
    }
  ];

  const eventTypes = ["All", "Conference", "Workshop", "Webinar", "Seminar", "Panel Discussion", "Meetup"];

  return (
    <>
      <Head>
        <title>Events | Zion Tech Group - AI & Technology Events</title>
        <meta name="description" content="Join Zion Tech Group at upcoming events, conferences, and workshops focused on AI, automation, and technology innovation." />
        <meta property="og:title" content="Events - Zion Tech Group" />
        <meta property="og:description" content="Upcoming AI and technology events, conferences, and workshops." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Upcoming Events
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join us at conferences, workshops, and events focused on AI, automation, and the future of technology
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            {/* Event Type Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                    type === "All"
                      ? "bg-cyan-400 text-white border-cyan-400"
                      : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-cyan-400/50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{event.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          event.type === "Conference" ? "bg-purple-400/20 text-purple-300 border border-purple-400/30" :
                          event.type === "Workshop" ? "bg-green-400/20 text-green-300 border border-green-400/30" :
                          event.type === "Webinar" ? "bg-blue-400/20 text-blue-300 border border-blue-400/30" :
                          event.type === "Seminar" ? "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30" :
                          event.type === "Panel Discussion" ? "bg-pink-400/20 text-pink-300 border border-pink-400/30" :
                          "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                        }`}>
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white hover:text-cyan-400 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-white/70 mb-4 text-sm leading-relaxed">
                        {event.description}
                      </p>
                      <div className="space-y-2 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <span>📅</span>
                          <span>{event.date} at {event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📍</span>
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🎤</span>
                          <span>{event.speakers.join(", ")}</span>
                        </div>
                      </div>
                      <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Host Your Own Event</h2>
                <p className="text-white/70 mb-6">
                  Interested in hosting an event or speaking at one of our conferences? Let's collaborate!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Contact Us
                  </a>
                  <button className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-200">
                    Submit Proposal
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
import Link from "next/link";

export const metadata = {
  title: "Events - Zion Tech Group",
  description: "Join Zion Tech Group at upcoming conferences, workshops, webinars, and technology events focused on AI, quantum computing, and innovation.",
  keywords: "events, conferences, workshops, webinars, AI events, quantum computing events, Zion Tech Group",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join Zion Tech Group at cutting-edge technology events, conferences, and workshops 
            where innovation meets opportunity.
          </p>
        </div>

        {/* Featured Event */}
        <section className="mb-20">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm text-blue-400 mb-2">Featured Event</div>
                <h2 className="text-3xl font-bold mb-4">AI Consciousness Evolution Summit 2025</h2>
                <p className="text-lg text-gray-300 mb-4">
                  Join leading researchers, scientists, and industry experts for a groundbreaking 
                  exploration of artificial consciousness and the future of AI.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-300">March 15-17, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-300">San Francisco, CA & Virtual</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">3 Days</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/events/ai-consciousness-summit-2025" className="btn-primary">
                    Register Now
                  </Link>
                  <Link href="/events/ai-consciousness-summit-2025" className="btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400">AI Research Summit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Computing Workshop */}
            <div className="card group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Neural Network Workshop</h3>
              <p className="text-gray-400 mb-4">
                Hands-on workshop exploring quantum neural networks and their applications in machine learning.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Date:</span> January 20, 2025
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Location:</span> Virtual
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Duration:</span> 4 Hours
                </div>
              </div>
              <Link href="/events/quantum-neural-network-workshop" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Register Now →
              </Link>
            </div>

            {/* Cybersecurity Conference */}
            <div className="card group">
              <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Cybersecurity Summit</h3>
              <p className="text-gray-400 mb-4">
                Conference on the latest developments in AI-driven cybersecurity and threat detection.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Date:</span> February 8-9, 2025
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Location:</span> New York, NY
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Duration:</span> 2 Days
                </div>
              </div>
              <Link href="/events/ai-cybersecurity-summit" className="text-red-400 hover:text-red-300 text-sm font-medium">
                Register Now →
              </Link>
            </div>

            {/* Space Technology Symposium */}
            <div className="card group">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Space Technology Symposium</h3>
              <p className="text-gray-400 mb-4">
                Symposium on AI applications in space technology, satellite systems, and orbital infrastructure.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Date:</span> February 15, 2025
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Location:</span> Houston, TX
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Duration:</span> 1 Day
                </div>
              </div>
              <Link href="/events/space-technology-symposium" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                Register Now →
              </Link>
            </div>

            {/* AI Business Intelligence Webinar */}
            <div className="card group">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Business Intelligence Webinar</h3>
              <p className="text-gray-400 mb-4">
                Webinar on implementing AI-powered business intelligence solutions for enterprise organizations.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Date:</span> January 25, 2025
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Location:</span> Virtual
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Duration:</span> 2 Hours
                </div>
              </div>
              <Link href="/events/ai-business-intelligence-webinar" className="text-green-400 hover:text-green-300 text-sm font-medium">
                Register Now →
              </Link>
            </div>

            {/* Enterprise IT Summit */}
            <div className="card group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise IT Transformation Summit</h3>
              <p className="text-gray-400 mb-4">
                Summit on modernizing enterprise IT infrastructure with AI, cloud, and automation solutions.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Date:</span> March 5-6, 2025
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Location:</span> Austin, TX
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Duration:</span> 2 Days
                </div>
              </div>
              <Link href="/events/enterprise-it-transformation-summit" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Register Now →
              </Link>
            </div>

            {/* Startup Innovation Challenge */}
            <div className="card group">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Startup Innovation Challenge</h3>
              <p className="text-gray-400 mb-4">
                Competition for startups developing innovative AI and quantum computing solutions.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Date:</span> April 10-12, 2025
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Location:</span> San Francisco, CA
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Duration:</span> 3 Days
                </div>
              </div>
              <Link href="/events/startup-innovation-challenge" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                Apply Now →
              </Link>
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Event Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Conferences</h4>
              <p className="text-sm text-gray-400">Multi-day industry events with keynote speakers and networking</p>
            </div>
            <div className="card text-center p-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Workshops</h4>
              <p className="text-sm text-gray-400">Hands-on learning sessions with practical applications</p>
            </div>
            <div className="card text-center p-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Webinars</h4>
              <p className="text-sm text-gray-400">Online educational sessions accessible from anywhere</p>
            </div>
            <div className="card text-center p-6">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Innovation Challenges</h4>
              <p className="text-sm text-gray-400">Competitions and hackathons for creative problem-solving</p>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Past Events Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">AI Innovation Summit 2024</div>
                  <div className="text-sm text-gray-400">November 15-17, 2024</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Our flagship AI event brought together 500+ industry leaders, researchers, and innovators 
                to explore the future of artificial intelligence and its applications.
              </p>
              <Link href="/events/ai-innovation-summit-2024" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View Event Summary →
              </Link>
            </div>
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Quantum Computing Workshop Series</div>
                  <div className="text-sm text-gray-400">October 2024</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                A month-long series of workshops covering quantum computing fundamentals, 
                quantum algorithms, and practical applications in various industries.
              </p>
              <Link href="/events/quantum-computing-workshop-series-2024" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                View Workshop Materials →
              </Link>
            </div>
          </div>
        </section>

        {/* Event Registration */}
        <section className="mb-20">
          <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30 text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated on Events</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our events newsletter to receive early access to registrations and exclusive event updates.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Events?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with industry leaders, learn from experts, and discover the latest innovations in technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events/upcoming" className="btn-primary">
                View All Events
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Event Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
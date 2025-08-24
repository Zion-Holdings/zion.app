import Link from "next/link";

export const metadata = {
  title: "Events - Zion Tech Group | Conferences, Webinars & Workshops",
  description: "Join Zion Tech Group at upcoming technology events, conferences, webinars, and workshops. Network with industry leaders and learn about the latest innovations.",
  keywords: "events, conferences, webinars, workshops, technology events, Zion Tech Group, AI conferences, quantum computing events",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join us at industry-leading events, conferences, and workshops to discover 
            the future of technology and connect with innovation leaders
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                    FEATURED EVENT
                  </span>
                  <span className="text-gray-400 text-sm">January 15-17, 2025</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Zion Tech Summit 2025
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Our flagship annual conference bringing together technology leaders, innovators, 
                  and visionaries to explore the future of AI, quantum computing, and enterprise 
                  technology solutions.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">AI & ML</span>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">Quantum Computing</span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Cybersecurity</span>
                </div>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    San Francisco, CA
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    3 Days
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    1,000+ Attendees
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/events/zion-tech-summit-2025" className="btn-primary">
                    Register Now
                  </Link>
                  <Link href="/events/zion-tech-summit-2025/agenda" className="btn-secondary">
                    View Agenda
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-24 h-24 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Event Types
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover different types of events we host and participate in
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center group hover:bg-blue-500/10 transition-colors">
              <div className="w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Conferences</h3>
              <p className="text-gray-400 mb-4">
                Large-scale industry events featuring keynote speakers, panel discussions, 
                and networking opportunities
              </p>
              <Link href="/events/category/conferences" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View Conferences →
              </Link>
            </div>
            
            <div className="card text-center group hover:bg-purple-500/10 transition-colors">
              <div className="w-20 h-20 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/30">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Webinars</h3>
              <p className="text-gray-400 mb-4">
                Online educational sessions covering specific topics, technologies, 
                and industry trends
              </p>
              <Link href="/events/category/webinars" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                View Webinars →
              </Link>
            </div>
            
            <div className="card text-center group hover:bg-green-500/10 transition-colors">
              <div className="w-20 h-20 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Workshops</h3>
              <p className="text-gray-400 mb-4">
                Hands-on training sessions and interactive learning experiences 
                for practical skill development
              </p>
              <Link href="/events/category/workshops" className="text-green-400 hover:text-green-300 text-sm font-medium">
                View Workshops →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mark your calendar for these exciting upcoming events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="card group">
              <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded-full mr-3">
                  WEBINAR
                </span>
                <span className="text-gray-400 text-sm">January 8, 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                AI in Enterprise: Implementation Strategies
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Learn practical strategies for implementing AI solutions in enterprise 
                environments, including best practices and common pitfalls to avoid.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                60 minutes
              </div>
              <Link href="/events/ai-enterprise-implementation-webinar" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Register Now →
              </Link>
            </div>

            {/* Event 2 */}
            <div className="card group">
              <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-purple-500/20 text-purple-400 text-xs font-bold px-2 py-1 rounded-full mr-3">
                  WORKSHOP
                </span>
                <span className="text-gray-400 text-sm">January 22, 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Quantum Computing Fundamentals
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Hands-on workshop covering the basics of quantum computing, qubits, 
                and quantum algorithms for beginners and intermediate developers.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                4 hours
              </div>
              <Link href="/events/quantum-computing-fundamentals-workshop" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Register Now →
              </Link>
            </div>

            {/* Event 3 */}
            <div className="card group">
              <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full mr-3">
                  CONFERENCE
                </span>
                <span className="text-gray-400 text-sm">February 10-12, 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Cybersecurity Innovation Summit
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Three-day conference focused on emerging cybersecurity threats, 
                AI-powered security solutions, and industry best practices.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                New York, NY
              </div>
              <Link href="/events/cybersecurity-innovation-summit-2025" className="text-green-400 hover:text-green-300 text-sm font-medium">
                Register Now →
              </Link>
            </div>

            {/* Event 4 */}
            <div className="card group">
              <div className="w-full h-48 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded-full mr-3">
                  WORKSHOP
                </span>
                <span className="text-gray-400 text-sm">February 25, 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Space Technology Applications
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Explore practical applications of space technology in telecommunications, 
                Earth observation, and satellite navigation systems.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                6 hours
              </div>
              <Link href="/events/space-technology-applications-workshop" className="text-red-400 hover:text-red-300 text-sm font-medium">
                Register Now →
              </Link>
            </div>

            {/* Event 5 */}
            <div className="card group">
              <div className="w-full h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-indigo-500/20 text-indigo-400 text-xs font-bold px-2 py-1 rounded-full mr-3">
                  WEBINAR
                </span>
                <span className="text-gray-400 text-sm">March 5, 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                AI Content Generation Best Practices
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Learn how to effectively use AI content generation tools while maintaining 
                quality, authenticity, and ethical standards.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                90 minutes
              </div>
              <Link href="/events/ai-content-generation-best-practices" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                Register Now →
              </Link>
            </div>

            {/* Event 6 */}
            <div className="card group">
              <div className="w-full h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded-full mr-3">
                  CONFERENCE
                </span>
                <span className="text-gray-400 text-sm">March 20-22, 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Enterprise IT Transformation
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Conference focused on digital transformation, cloud migration, and modernizing 
                enterprise IT infrastructure for the future.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Austin, TX
              </div>
              <Link href="/events/enterprise-it-transformation-2025" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                Register Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/20 to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Past Events
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Relive the highlights from our previous events and access recorded content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-full h-32 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Ethics Workshop</h3>
              <p className="text-gray-400 text-sm mb-3">December 10, 2024</p>
              <Link href="/events/past/ai-ethics-workshop-december-2024" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View Recording →
              </Link>
            </div>
            
            <div className="card">
              <div className="w-full h-32 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quantum Computing Summit</h3>
              <p className="text-gray-400 text-sm mb-3">November 15-17, 2024</p>
              <Link href="/events/past/quantum-computing-summit-november-2024" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View Highlights →
              </Link>
            </div>
            
            <div className="card">
              <div className="w-full h-32 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cybersecurity Conference</h3>
              <p className="text-gray-400 text-sm mb-3">October 20-22, 2024</p>
              <Link href="/events/past/cybersecurity-conference-october-2024" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View Highlights →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're constantly adding new events. Contact us to suggest topics or 
              request custom workshops for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Contact Us
              </Link>
              <Link href="/events/custom" className="btn-secondary text-lg px-8 py-4">
                Request Custom Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
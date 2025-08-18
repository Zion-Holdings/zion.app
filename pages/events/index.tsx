import Head from 'next/head';
import Link from 'next/link';

export default function EventsIndexPage() {
  const events = [
    {
      id: 'ai-automation-summit-2025',
      title: 'AI Automation Summit 2025',
      excerpt: 'Join industry leaders and experts for a comprehensive exploration of AI automation trends, technologies, and implementation strategies.',
      date: '2025-09-15',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      type: 'Conference',
      featured: true,
      registration: 'Open'
    },
    {
      id: 'cloud-optimization-workshop',
      title: 'Cloud Optimization Workshop',
      excerpt: 'Hands-on workshop covering advanced cloud optimization techniques, cost management, and performance tuning.',
      date: '2025-08-28',
      time: '2:00 PM - 6:00 PM',
      location: 'Virtual Event',
      type: 'Workshop',
      featured: false,
      registration: 'Open'
    },
    {
      id: 'autonomous-systems-webinar',
      title: 'Autonomous Systems Webinar Series',
      excerpt: 'Monthly webinar series exploring the latest developments in autonomous systems and their business applications.',
      date: '2025-08-20',
      time: '1:00 PM - 2:30 PM',
      location: 'Virtual Event',
      type: 'Webinar',
      featured: false,
      registration: 'Open'
    },
    {
      id: 'tech-innovation-meetup',
      title: 'Tech Innovation Meetup',
      excerpt: 'Networking event for technology professionals interested in AI, automation, and digital transformation.',
      date: '2025-08-12',
      time: '6:00 PM - 9:00 PM',
      location: 'New York, NY',
      type: 'Meetup',
      featured: false,
      registration: 'Open'
    },
    {
      id: 'performance-optimization-conference',
      title: 'Performance Optimization Conference',
      excerpt: 'Learn from experts about optimizing system performance, monitoring, and automation strategies.',
      date: '2025-07-30',
      time: '9:00 AM - 4:00 PM',
      location: 'Austin, TX',
      type: 'Conference',
      featured: false,
      registration: 'Closed'
    },
    {
      id: 'security-automation-symposium',
      title: 'Security Automation Symposium',
      excerpt: 'Comprehensive symposium on implementing security automation using AI and autonomous systems.',
      date: '2025-07-15',
      time: '10:00 AM - 6:00 PM',
      location: 'Seattle, WA',
      type: 'Symposium',
      featured: false,
      registration: 'Closed'
    }
  ];

  const eventTypes = ['All', 'Conference', 'Workshop', 'Webinar', 'Meetup', 'Symposium'];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Events | Zion Tech Group - Conferences, Workshops & Webinars</title>
        <meta name="description" content="Join Zion Tech Group at industry events, conferences, workshops, and webinars. Learn about AI automation, cloud optimization, and autonomous systems." />
        <meta name="keywords" content="AI automation events, technology conferences, cloud workshops, Zion Tech Group events, tech meetups" />
        <link rel="canonical" href="https://ziontechgroup.com/events" />
        
        <meta property="og:title" content="Events | Zion Tech Group - Conferences, Workshops & Webinars" />
        <meta property="og:description" content="Join us at industry events, conferences, workshops, and webinars." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/events" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Events | Zion Tech Group" />
        <meta name="twitter:description" content="Conferences, Workshops & Webinars" />
        
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Zion Tech Group Events",
          "description": "Conferences, workshops, webinars, and meetups",
          "url": "https://ziontechgroup.com/events",
          "publisher": { "@type": "Organization", "name": "Zion Tech Group" }
        })}</script>
      </Head>
      
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
            Events
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join Zion Tech Group at industry events, conferences, workshops, and webinars. 
            Connect with experts, learn about the latest technologies, and network with peers.
          </p>
        </section>

        {/* Featured Event */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Event</h2>
          {events.filter(event => event.featured).map((event) => (
            <div key={event.id} className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/30 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-cyan-500/20 text-cyan-400 text-sm px-3 py-1 rounded-full mb-4">
                    {event.type}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">{event.title}</h3>
                  <p className="text-white/80 text-lg mb-6">{event.excerpt}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-white/70">
                      <span className="text-cyan-400">📅</span>
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <span className="text-fuchsia-400">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <span className="text-green-400">🎫</span>
                      <span>Registration: {event.registration}</span>
                    </div>
                  </div>
                  <Link 
                    href={`/events/${event.id}`}
                    className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Register Now →
                  </Link>
                </div>
                <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h4 className="text-xl font-semibold text-white mb-2">AI Automation Summit 2025</h4>
                    <p className="text-white/70 text-sm">
                      The premier event for AI automation professionals
                    </p>
                    <div className="mt-4 p-3 bg-cyan-500/20 rounded-lg">
                      <p className="text-cyan-400 font-semibold text-sm">Early Bird Pricing Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Filter Event Types */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {eventTypes.map((type) => (
              <button
                key={type}
                className="px-4 py-2 rounded-lg border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                {type}
              </button>
            ))}
          </div>
        </section>

        {/* Events Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.filter(event => !event.featured).map((event) => (
              <div key={event.id} className="bg-slate-900/50 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-colors">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                      {event.type}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{event.excerpt}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span>📅</span>
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      event.registration === 'Open' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {event.registration}
                    </span>
                    <Link 
                      href={`/events/${event.id}`}
                      className="text-cyan-400 hover:text-cyan-300 underline text-sm"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Event Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Event Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🎤</div>
              <h3 className="text-lg font-semibold text-white mb-2">Conferences</h3>
              <p className="text-white/60 text-sm">Large-scale events with industry experts and networking opportunities</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Workshops</h3>
              <p className="text-white/60 text-sm">Hands-on learning sessions with practical applications</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-lg font-semibold text-white mb-2">Webinars</h3>
              <p className="text-white/60 text-sm">Virtual events accessible from anywhere in the world</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-white mb-2">Meetups</h3>
              <p className="text-white/60 text-sm">Local networking and knowledge sharing events</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-lg font-semibold text-white mb-2">Symposiums</h3>
              <p className="text-white/60 text-sm">In-depth discussions on specific topics and technologies</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="text-lg font-semibold text-white mb-2">Special Events</h3>
              <p className="text-white/60 text-sm">Unique experiences and exclusive gatherings</p>
            </div>
          </div>
        </section>

        {/* Call for Speakers */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Call for Speakers</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Are you an expert in AI automation, cloud computing, or autonomous systems? 
              We&apos;re always looking for speakers to share their knowledge and insights at our events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Submit a Proposal
              </Link>
              <Link 
                href="/speaker-guidelines"
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Speaker Guidelines
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Get notified about upcoming events, early bird pricing, and exclusive opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-white/20 text-white placeholder-white/50 focus:border-green-400 focus:outline-none"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white/60 text-sm mt-3">
              Never miss an important event or opportunity
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Us?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Whether you&apos;re looking to learn, network, or share your expertise, 
              our events provide the perfect platform for growth and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/about"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

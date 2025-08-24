import Link from "next/link";

export const metadata = {
  title: "Space Technology Solutions - Zion Tech Group | Satellite & Space Services",
  description: "Explore Zion Tech Group's cutting-edge space technology solutions. From satellite communications to space infrastructure, we're advancing the future of space exploration.",
  keywords: "space technology, satellite communications, space infrastructure, Zion Tech Group, space solutions, satellite services",
};

export default function SpaceTechPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Space Technology Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of space exploration and satellite technology. 
            From advanced communications to space infrastructure, we're building 
            the technologies that will connect Earth and beyond.
          </p>
        </div>
      </section>

      {/* Space Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="card bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Advancing Humanity's Reach into Space
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Space technology represents the pinnacle of human innovation and 
                  engineering. Our solutions enable global connectivity, Earth 
                  observation, and the foundation for future space exploration 
                  missions.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Global satellite communications</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Earth observation & monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Space infrastructure development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Next-generation space systems</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary">
                  Explore Space Solutions
                </Link>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Space Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Space Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive space technology solutions for modern applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Satellite Communications */}
            <div className="card group hover:bg-yellow-500/10 transition-colors">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Satellite Communications</h3>
              <p className="text-gray-400 mb-4">
                High-speed satellite internet, global connectivity solutions, 
                and communication infrastructure for remote regions.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• High-speed satellite internet</li>
                <li>• Global connectivity solutions</li>
                <li>• Remote region communications</li>
                <li>• Emergency communications</li>
              </ul>
              <Link href="/space-tech/satellite-communications" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Earth Observation */}
            <div className="card group hover:bg-blue-500/10 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Earth Observation</h3>
              <p className="text-gray-400 mb-4">
                Advanced satellite imaging, environmental monitoring, and 
                data analytics for climate and resource management.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• High-resolution imaging</li>
                <li>• Environmental monitoring</li>
                <li>• Climate change tracking</li>
                <li>• Resource management</li>
              </ul>
              <Link href="/space-tech/earth-observation" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Space Infrastructure */}
            <div className="card group hover:bg-purple-500/10 transition-colors">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Space Infrastructure</h3>
              <p className="text-gray-400 mb-4">
                Development of space stations, orbital platforms, and 
                infrastructure for future space exploration missions.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Space station development</li>
                <li>• Orbital platforms</li>
                <li>• Space habitats</li>
                <li>• Launch infrastructure</li>
              </ul>
              <Link href="/space-tech/space-infrastructure" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Navigation Systems */}
            <div className="card group hover:bg-green-500/10 transition-colors">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Navigation Systems</h3>
              <p className="text-gray-400 mb-4">
                Advanced satellite navigation, positioning systems, and 
                location-based services for global applications.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Satellite navigation</li>
                <li>• Precision positioning</li>
                <li>• Location services</li>
                <li>• Autonomous navigation</li>
              </ul>
              <Link href="/space-tech/navigation-systems" className="text-green-400 hover:text-green-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Space Research */}
            <div className="card group hover:bg-red-500/10 transition-colors">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Space Research</h3>
              <p className="text-gray-400 mb-4">
                Scientific research platforms, space experiments, and 
                technology development for space exploration.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Scientific platforms</li>
                <li>• Space experiments</li>
                <li>• Technology development</li>
                <li>• Research collaboration</li>
              </ul>
              <Link href="/space-tech/space-research" className="text-red-400 hover:text-red-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Space Consulting */}
            <div className="card group hover:bg-indigo-500/10 transition-colors">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Space Strategy Consulting</h3>
              <p className="text-gray-400 mb-4">
                Strategic guidance for space initiatives, regulatory compliance, 
                and space industry partnerships.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Space strategy development</li>
                <li>• Regulatory compliance</li>
                <li>• Industry partnerships</li>
                <li>• Investment guidance</li>
              </ul>
              <Link href="/space-tech/consulting" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600/10 to-orange-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Space technology solutions across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Telecommunications</h3>
              <p className="text-gray-400 mb-4">
                Global internet connectivity, mobile communications, and 
                broadband services for remote and underserved areas.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Use Cases:</strong> Global internet, mobile communications, broadband
              </div>
            </div>
            
            <div className="card">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Environmental Monitoring</h3>
              <p className="text-gray-400 mb-4">
                Climate change tracking, natural disaster monitoring, and 
                environmental impact assessment through satellite data.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Use Cases:</strong> Climate monitoring, disaster response, environmental assessment
              </div>
            </div>
            
            <div className="card">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transportation & Logistics</h3>
              <p className="text-gray-400 mb-4">
                Fleet tracking, route optimization, and autonomous vehicle 
                navigation using satellite positioning systems.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Use Cases:</strong> Fleet management, autonomous navigation, logistics
              </div>
            </div>
            
            <div className="card">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Agriculture</h3>
              <p className="text-gray-400 mb-4">
                Precision farming, crop monitoring, and agricultural 
                optimization through satellite imagery and data.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Use Cases:</strong> Precision farming, crop monitoring, yield optimization
              </div>
            </div>
            
            <div className="card">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Defense & Security</h3>
              <p className="text-gray-400 mb-4">
                National security, border monitoring, and defense 
                applications using advanced space technology.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Use Cases:</strong> National security, border monitoring, defense
              </div>
            </div>
            
            <div className="card">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Research & Development</h3>
              <p className="text-gray-400 mb-4">
                Scientific research, technology development, and 
                innovation in space exploration and applications.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Use Cases:</strong> Scientific research, technology development, innovation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Space Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced technologies and platforms for space applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Satellite Systems</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Low Earth Orbit (LEO) satellites</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Medium Earth Orbit (MEO) satellites</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Geostationary satellites</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">CubeSats & small satellites</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Ground Infrastructure</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Ground stations & antennas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Satellite control centers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Data processing facilities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Launch facilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Space */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/20 to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Future of Space Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Emerging trends and innovations shaping the future of space exploration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Space Tourism</h3>
              <p className="text-gray-400 mb-4">
                Commercial space travel and orbital tourism experiences 
                for private individuals and organizations.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Mars Colonization</h3>
              <p className="text-gray-400 mb-4">
                Long-term human settlement and infrastructure development 
                on Mars and other planetary bodies.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Space Mining</h3>
              <p className="text-gray-400 mb-4">
                Extraction of valuable resources from asteroids, the Moon, 
                and other celestial bodies for Earth use.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Interstellar Travel</h3>
              <p className="text-gray-400 mb-4">
                Advanced propulsion systems and spacecraft designs 
                for travel beyond our solar system.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Space Manufacturing</h3>
              <p className="text-gray-400 mb-4">
                In-space production of materials, components, and 
                structures using microgravity and space resources.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Quantum Communications</h3>
              <p className="text-gray-400 mb-4">
                Quantum satellite networks for ultra-secure 
                communications and quantum internet infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Space Technology Success Metrics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Measurable achievements in space technology and satellite services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100+</div>
              <div className="text-gray-400">Satellites Launched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">1M+</div>
              <div className="text-gray-400">Users Connected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-400">Global Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in advancing the future of space technology. 
              Let's discuss how space solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Launch Your Space Initiative
              </Link>
              <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">
                View Space Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from "next/link";

export const metadata = {
  title: "Space Technology Services - Zion Tech Group",
  description: "Advanced space technology solutions including satellite systems, space analytics, and orbital infrastructure development.",
  keywords: "space technology, satellite systems, space analytics, orbital infrastructure, Zion Tech Group",
};

export default function SpaceTechPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Space Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of space exploration and satellite technology with cutting-edge AI, 
            quantum computing, and advanced engineering solutions.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Next-Generation Space Solutions</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our Space Technology division combines artificial intelligence, quantum computing, and advanced engineering 
                to create innovative solutions for Earth observation, satellite communications, and space exploration.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From satellite constellation management to space debris tracking, we're helping organizations 
                leverage space technology for terrestrial and extraterrestrial applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Explore Space Solutions
                </Link>
                <Link href="/case-studies" className="btn-secondary">
                  View Space Projects
                </Link>
              </div>
            </div>
            <div className="card bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/30 p-8">
              <h3 className="text-2xl font-bold mb-4">Space Capabilities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Satellite systems
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Earth observation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Space analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Orbital infrastructure
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Space Technology Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Satellite Systems */}
            <div className="card group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Satellite Systems</h3>
              <p className="text-gray-400 mb-4">
                Design and development of advanced satellite systems for communication, navigation, and Earth observation.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Communication satellites</li>
                <li>• Navigation systems</li>
                <li>• Earth observation</li>
                <li>• CubeSat development</li>
              </ul>
            </div>

            {/* Earth Observation */}
            <div className="card group">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Earth Observation</h3>
              <p className="text-gray-400 mb-4">
                Advanced remote sensing and Earth observation technologies for environmental monitoring and analysis.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Climate monitoring</li>
                <li>• Environmental tracking</li>
                <li>• Agricultural monitoring</li>
                <li>• Disaster response</li>
              </ul>
            </div>

            {/* Space Analytics */}
            <div className="card group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Space Analytics</h3>
              <p className="text-gray-400 mb-4">
                AI-powered analytics for space data processing, satellite imagery analysis, and orbital calculations.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Satellite data processing</li>
                <li>• Orbital mechanics</li>
                <li>• Space debris tracking</li>
                <li>• Launch optimization</li>
              </ul>
            </div>

            {/* Space Communications */}
            <div className="card group">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Space Communications</h3>
              <p className="text-gray-400 mb-4">
                Advanced communication systems for deep space missions, satellite networks, and interplanetary communication.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Deep space networks</li>
                <li>• Satellite constellations</li>
                <li>• Interplanetary comms</li>
                <li>• Quantum communications</li>
              </ul>
            </div>

            {/* Orbital Infrastructure */}
            <div className="card group">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Orbital Infrastructure</h3>
              <p className="text-gray-400 mb-4">
                Development of orbital platforms, space stations, and infrastructure for long-term space operations.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Space stations</li>
                <li>• Orbital platforms</li>
                <li>• Space habitats</li>
                <li>• Resource utilization</li>
              </ul>
            </div>

            {/* Space Robotics */}
            <div className="card group">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Space Robotics</h3>
              <p className="text-gray-400 mb-4">
                Autonomous robotic systems for space exploration, satellite servicing, and planetary surface operations.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Autonomous rovers</li>
                <li>• Satellite servicing</li>
                <li>• Space assembly</li>
                <li>• Planetary exploration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Space Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Satellite Systems</h4>
              <p className="text-sm text-gray-400">CubeSats, nanosatellites, communication systems</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">AI & ML</h4>
              <p className="text-sm text-gray-400">Computer vision, autonomous navigation, data processing</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Quantum Computing</h4>
              <p className="text-sm text-gray-400">Quantum algorithms, secure communications, optimization</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Advanced Materials</h4>
              <p className="text-sm text-gray-400">Space-grade materials, radiation shielding, thermal management</p>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Space Technology Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-gradient-to-r from-blue-600/20 to-green-600/20 border-blue-500/30">
              <h3 className="text-xl font-bold mb-3">Environmental Monitoring</h3>
              <p className="text-gray-300 text-sm">
                Track climate change, monitor deforestation, and observe natural disasters from space.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
              <h3 className="text-xl font-bold mb-3">Agriculture & Food Security</h3>
              <p className="text-gray-300 text-sm">
                Monitor crop health, predict yields, and optimize agricultural practices using satellite data.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
              <h3 className="text-xl font-bold mb-3">Telecommunications</h3>
              <p className="text-gray-300 text-sm">
                Global internet coverage, emergency communications, and remote area connectivity.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/30">
              <h3 className="text-xl font-bold mb-3">Navigation & Positioning</h3>
              <p className="text-gray-300 text-sm">
                GPS systems, autonomous vehicles, and precision navigation for various applications.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-red-600/20 to-pink-600/20 border-red-500/30">
              <h3 className="text-xl font-bold mb-3">Defense & Security</h3>
              <p className="text-gray-300 text-sm">
                Surveillance, threat detection, and strategic monitoring capabilities.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/30">
              <h3 className="text-xl font-bold mb-3">Scientific Research</h3>
              <p className="text-gray-300 text-sm">
                Astronomy, planetary science, and fundamental physics research in space.
              </p>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Future of Space Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/30">
              <h3 className="text-xl font-bold mb-4">Space Mining & Resources</h3>
              <p className="text-gray-300">
                Extracting valuable resources from asteroids, the Moon, and other celestial bodies to support 
                Earth's growing needs and enable space colonization.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
              <h3 className="text-xl font-bold mb-4">Interplanetary Travel</h3>
              <p className="text-gray-300">
                Advanced propulsion systems, life support technologies, and sustainable habitats for human 
                exploration of Mars and beyond.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-pink-600/20 to-red-600/20 border-pink-500/30">
              <h3 className="text-xl font-bold mb-4">Space Tourism</h3>
              <p className="text-gray-300">
                Commercial space travel, orbital hotels, and suborbital experiences making space accessible 
                to private citizens.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-red-600/20 to-orange-600/20 border-red-500/30">
              <h3 className="text-xl font-bold mb-4">Quantum Space Networks</h3>
              <p className="text-gray-300">
                Quantum entanglement-based communication networks enabling instant, secure communication 
                across vast distances in space.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore the Final Frontier?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in advancing space technology and unlocking the potential of space for humanity's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Explore Space Solutions
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Space Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
import React from 'react';
import UltraFuturisticBackground2026 from './ui/UltraFuturisticBackground2026';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';

const Homepage2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <UltraFuturisticBackground2026 />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Pioneering the future of technology with innovative solutions that drive business transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <UltraFuturisticServiceCard2026
                variant="ai"
                title="AI & Machine Learning"
                description="Advanced artificial intelligence solutions for modern businesses"
                icon="🧠"
                popular={true}
              />
              <UltraFuturisticServiceCard2026
                variant="quantum"
                title="Quantum Computing"
                description="Next-generation computing solutions for complex problems"
                icon="⚛️"
                popular={false}
              />
              <UltraFuturisticServiceCard2026
                variant="automation"
                title="Process Automation"
                description="Intelligent automation to streamline your operations"
                icon="⚡"
                popular={true}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage2025;
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Minimal Header */}
      <header className="bg-zion-blue-dark p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Zion Tech Marketplace</h1>
        </div>
      </header>
      
      {/* Simple Hero Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Zion Tech Marketplace
          </h1>
          <p className="text-xl mb-8">
            The world's first free marketplace dedicated to high-tech and artificial intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold">
              Get Started
            </button>
            <button className="border border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Simple Features Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Zion?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-zion-blue-dark rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Fast & Reliable</h3>
              <p>Quick access to cutting-edge technology solutions</p>
            </div>
            <div className="text-center p-6 bg-zion-blue-dark rounded-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure</h3>
              <p>Enterprise-grade security for your business</p>
            </div>
            <div className="text-center p-6 bg-zion-blue-dark rounded-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Innovative</h3>
              <p>Latest AI and technology innovations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="py-16 bg-zion-blue-dark text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            ✅ App is Working!
          </h2>
          <p className="text-xl mb-8">
            The Zion Tech Marketplace is now loading successfully with minimal functionality.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => window.location.href = '/marketplace'}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Browse Marketplace
            </button>
            <button 
              onClick={() => window.location.href = '/talent'}
              className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-semibold"
            >
              Find Talent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

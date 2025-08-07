import React from 'react';

const FuturisticHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to the Future</h1>
        <p className="text-xl mb-8">Discover innovative solutions for tomorrow's challenges</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FuturisticHero;
import React from 'react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function SustainabilityPage() {
  return (
    <UltraFuturisticBackground variant="holographic" intensity="high">
      <div className="container mx-auto px-4 pt-28 pb-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Sustainability</h1>
        <p className="text-gray-300 max-w-3xl">We apply energy-efficient infra, optimize workloads, and promote remote-first collaboration to reduce carbon footprint.</p>
      </div>
    </UltraFuturisticBackground>
  );
}
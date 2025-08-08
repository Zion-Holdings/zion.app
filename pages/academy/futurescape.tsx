import dynamic from 'next/dynamic';
import React from 'react';

const Simulator = dynamic(() => import('../../components/sim/Simulator'), { ssr: false });

export default function FuturescapePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">ZionGPT Simulation: Futurescape</h1>
      <Simulator routeId="academy/futurescape" />
    </div>
  );
}
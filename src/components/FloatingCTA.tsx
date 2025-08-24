import React from 'react';
import { Button } from '@/components/ui/button';

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark shadow-lg">
        Get Started
      </Button>
    </div>
  );
}
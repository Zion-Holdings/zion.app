import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Spinner() {
  return (
    <div className="flex justify-center py-8" data-testid="spinner">
      <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
    </div>
  );
}

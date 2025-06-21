import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { INTERESTS } from '@/data/interests';

interface InterestSelectionProps {
  onComplete: (interests: string[]) => void;
}

export function InterestSelection({ onComplete }: InterestSelectionProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (interest: string) => {
    setSelected(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Select Your Interests</h3>
        <p className="text-zion-slate-light mt-2">
          Choose topics you're interested in
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {INTERESTS.map((interest) => (
          <label key={interest} className="flex items-center space-x-2 text-white">
            <Checkbox
              checked={selected.includes(interest)}
              onCheckedChange={() => toggle(interest)}
            />
            <span>{interest}</span>
          </label>
        ))}
      </div>
      <Button
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
        onClick={() => onComplete(selected)}
      >
        Continue
      </Button>
    </div>
  );
}

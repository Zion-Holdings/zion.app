import React, { useState, useEffect } from 'react';
import { Popover, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { safeStorage } from '@/utils/safeStorage';

interface Step {
  selector: string;
  content: React.ReactNode;
}

const roleSteps: Record<string, Step[]> = {
  client: [
    {
      selector: '#profile-link',
      content: 'Edit your profile to help others find you.',
    },
    {
      selector: '#community-section',
      content: 'Join the community and collaborate with others.',
    },
  ],
  talent: [
    {
      selector: '#profile-link',
      content: 'Showcase your skills in your profile.',
    },
    {
      selector: '#notifications-link',
      content: 'Check notifications for updates from clients.',
    },
  ],
};

interface GuidedTourProps {
  role: string;
  onFinish?: () => void;
}

export function GuidedTour({ role, onFinish }: GuidedTourProps) {
  const prefKey = `guidedTourPreference:${role}`;
  const stored = safeStorage.getItem(prefKey);
  const [activeStep, setActiveStep] = useState(stored ? -1 : 0);
  const [coords, setCoords] = useState<DOMRect | null>(null);

  const steps = roleSteps[role] || [];
  const step = activeStep >= 0 ? steps[activeStep] : null;

  useEffect(() => {
    if (!step) return;
    const el = document.querySelector(step.selector) as HTMLElement | null;
    if (el) {
      setCoords(el.getBoundingClientRect());
    } else {
      setCoords(null);
    }
  }, [activeStep, step]);

  const finish = () => {
    safeStorage.setItem(prefKey, 'done');
    setActiveStep(-1);
    onFinish?.();
  };

  const next = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      finish();
    }
  };

  if (!step || !coords) return null;

  const style: React.CSSProperties = {
    position: 'absolute',
    top: coords.bottom + window.scrollY + 8,
    left: coords.left + window.scrollX,
    zIndex: 1000,
  };

  return (
    <div style={style}>
      <Popover open>
        <PopoverContent className="max-w-sm">
          <div className="space-y-4 text-sm">
            <div>{step.content}</div>
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="ghost" onClick={finish}>
                Skip
              </Button>
              <Button size="sm" onClick={next}>
                {activeStep < steps.length - 1 ? 'Next' : 'Finish'}
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

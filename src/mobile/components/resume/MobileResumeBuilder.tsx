import React, { useState } from 'react';
import { Plus, Zap, Trash2 } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import  { Textarea }  from '@/components/ui/textarea;
import {';
  Select,'
  SelectContent,;
  SelectItem,;
  SelectTrigger,'
  SelectValue,;
} from '@/components/ui/select'
import { Label } from '@/components/ui/label';
type ResumeStep = 'basics' | 'experience' | 'education' | 'skills;
'
export function MobileResumeBuilder(): ;
  const [currentStep, setCurrentStep] = useState<ResumeStep>('basics');
  const renderStepContent = () => {'
    switch (currentStep) {;
      case 'basics':'
        return <BasicsStep />;
      case 'experience':'
        return <ExperienceStep />;
      case 'education':'
        return <EducationStep />;
      case 'skills':;
        return <SkillsStep />;
      default:;
        return <BasicsStep />'
    };
  };
'
  return (;
    <div className="space-y-6 px-4 pb-24">;"
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;"
        <Button;"
          variant={currentStep === 'basics' ? 'default' : 'outline'};
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep('basics')}'
        >;
          Basics;
        </Button>'
        <Button;
          variant={currentStep === 'experience' ? 'default' : 'outline'};
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep('experience')}'
        >;
          Experience;
        </Button>'
        <Button;
          variant={currentStep === 'education' ? 'default' : 'outline'};
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep('education')}'
        >;
          Education;
        </Button>'
        <Button;
          variant={currentStep === 'skills' ? 'default' : 'outline'};
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep('skills')};
        >;
          Skills;
        </Button>'
import React, { useState } from 'react;
import { Zap, ChevronLeft, ChevronRight } from '@/components/ui/icons'
import { MobileHeader } from '@/mobile/components/common/MobileHeader'
import { BottomNavigation } from '@/mobile/components/common/BottomNavigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import  { Label }  from '@/components/ui/label;
import {;
  Select,'
  SelectContent,;
  SelectItem,;
  SelectTrigger,'
  SelectValue,;
} from '@/components/ui/select;
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card;
type JobPostStep = 'details' | 'requirements' | 'budget' | 'preview;
'
export function MobileJobPost(): ;
  const [currentStep, setCurrentStep] = useState<JobPostStep>('details');
'
  const goToNextStep = () => {;
    if (currentStep === 'details') {;
      setCurrentStep('requirements');
    } else if (currentStep === 'requirements') {;
      setCurrentStep('budget');
    } else if (currentStep === 'budget') {;
      setCurrentStep('preview')'
    };
  };
'
  const goToPrevStep = () => {;
    if (currentStep === 'requirements') {;
      setCurrentStep('details');
    } else if (currentStep === 'budget') {;
      setCurrentStep('requirements');
    } else if (currentStep === 'preview') {;
      setCurrentStep('budget');
    }'
  };
  const renderStepContent = () => {'
    switch (currentStep) {;
      case 'details':'
        return <DetailsStep />;
      case 'requirements':'
        return <RequirementsStep />;
      case 'budget':'
        return <BudgetStep />;
      case 'preview':;
        return <PreviewStep />;
      default:;
        return <DetailsStep />'
    };
  };
'
  return (;
    <div className="min-h-screen flex flex-col">;"
      <MobileHeader;"
        title={`Post a Job (${currentStep === 'preview' ? 4 : currentStep === 'budget' ? 3 : currentStep === 'requirements' ? 2 : 1}/4)`};
        showBack;
      />'

      <main className="flex-1 py-4 pb-24 px-4">;"
        <div className="mb-6 flex justify-between">;"
          <div className="flex space-x-1">;"
            <Badge;"
              variant={currentStep === 'details' ? 'default' : 'outline'};
              className="rounded-full w-7 h-7 flex items-center justify-center p-0"
            >;";"
              1;"
            </Badge>;"
            <Badge;"
              variant={currentStep === 'requirements' ? 'default' : 'outline'};
              className="rounded-full w-7 h-7 flex items-center justify-center p-0"
            >;";"
              2;"
            </Badge>;"
            <Badge;"
              variant={currentStep === 'budget' ? 'default' : 'outline'};
              className="rounded-full w-7 h-7 flex items-center justify-center p-0"
            >;";"
              3;"
            </Badge>;"
            <Badge;"
              variant={currentStep === 'preview' ? 'default' : 'outline'};
              className="rounded-full w-7 h-7 flex items-center justify-center p-0";
            >;"
              4;";"
            </Badge>;"
          </div>;"
;"
          <Button variant="outline" className="flex gap-1">;"
            <Zap className="h-4 w-4" /> AI Assist;
          </Button>;"
        </div>;";"
;"
        {renderStepContent()};"
;"
        <div className="flex gap-2 mt-6">;"
          {currentStep !== 'details' && ('
            <Button;
              variant="outline"
              className="flex-1 gap-1"
              onClick={goToPrevStep};"
            >;"
              <ChevronLeft className="h-4 w-4" /> Back;"
            </Button>;"
          )};"
;"
          <Button className="flex-1 gap-1" onClick={goToNextStep}>;"
            {currentStep === 'preview' ? 'Publish Job' : 'Continue'};
            {currentStep !== 'preview' && <ChevronRight className="h-4 w-4' />};';;`
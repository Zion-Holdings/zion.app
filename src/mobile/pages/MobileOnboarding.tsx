import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import { LanguageThemeSelector } from '@/mobile/components/onboarding/LanguageThemeSelector'
import { RolePicker } from '@/mobile/components/onboarding/RolePicker'
import { SignUpForm } from '@/mobile/components/onboarding/SignUpForm';
type OnboardingStep = 'language' | 'role' | 'signup;
'
export function MobileOnboarding(): ;
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('language');
  const router = useRouter();
'
  const goToNextStep = () => {;
    if (currentStep === 'language') {;
      setCurrentStep('role');
    } else if (currentStep === 'role') {;
      setCurrentStep('signup')'
    } else {;
      router.push('/mobile')'
    };
  };
'
  const handleRoleSelect = () => {;
    setCurrentStep('signup');
  };
'
  return (;
    <div className="min-h-screen flex flex-col">;"
      <div className="flex-1 py-8">;"
        {currentStep === 'language' && (;
          <div className="space-y-6">;"
            <div className="text-center mb-8">;"
              <h1 className="text-3xl font-bold mb-2">Welcome to Zion</h1>;"
              <p className="text-muted-foreground">;"
                Let's set up your experience;
              </p>'
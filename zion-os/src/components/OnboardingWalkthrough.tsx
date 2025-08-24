"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface WalkthroughStep {
  id: string;
  title: string;
  description: string;
  target?: string;
  position: "top" | "bottom" | "left" | "right";
}

const walkthroughSteps: WalkthroughStep[] = [
  {
    id: "welcome",
    title: "Welcome to Zion OS! 🚀",
    description: "Let's take a quick tour to help you get started with launching your digital economy.",
    position: "bottom"
  },
  {
    id: "launch-wizard",
    title: "Launch Wizard",
    description: "Start here to create a new instance with marketplace, governance, and identity tools.",
    target: "launch-wizard-card",
    position: "right"
  },
  {
    id: "admin-panel",
    title: "Admin Panel",
    description: "Manage your deployed instances, API keys, and governance settings from here.",
    target: "admin-instances-card",
    position: "left"
  },
  {
    id: "navigation",
    title: "Navigation",
    description: "Use the top navigation to quickly access different sections of the platform.",
    target: "nav-menu",
    position: "bottom"
  },
  {
    id: "complete",
    title: "You're All Set! 🎉",
    description: "You now know the basics. Start building your digital economy or explore more features.",
    position: "top"
  }
];

export function OnboardingWalkthrough() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { user, completeOnboarding } = useAuth();

  useEffect(() => {
    // Show walkthrough for new users who haven't completed onboarding
    if (user && !user.onboardingCompleted) {
      setIsVisible(true);
    }
  }, [user]);

  const handleNext = () => {
    if (currentStep < walkthroughSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    setIsVisible(false);
    setIsCompleted(true);
  };

  const handleComplete = async () => {
    try {
      await completeOnboarding();
      setIsVisible(false);
      setIsCompleted(true);
    } catch (error) {
      console.error("Failed to complete onboarding:", error);
    }
  };

  const currentStepData = walkthroughSteps[currentStep];

  if (!isVisible || isCompleted) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={handleSkip} />
      
      {/* Walkthrough Modal */}
      <div className="fixed z-50 inset-0 flex items-center justify-center p-4">
        <div className="bg-zinc-800 rounded-xl border border-zinc-700 max-w-md w-full p-6 shadow-2xl">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-zinc-400">
                Step {currentStep + 1} of {walkthroughSteps.length}
              </span>
              <button
                onClick={handleSkip}
                className="text-zinc-400 hover:text-zinc-300 text-sm"
              >
                Skip tour
              </button>
            </div>
            <div className="w-full bg-zinc-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / walkthroughSteps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              {currentStepData.title}
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              {currentStepData.description}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-4 py-2 text-zinc-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              {currentStep === walkthroughSteps.length - 1 ? "Complete" : "Next"}
            </button>
          </div>
        </div>
      </div>

      {/* Highlight Target Element */}
      {currentStepData.target && (
        <div
          className="fixed z-30 pointer-events-none"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div
            className="absolute border-2 border-blue-500 rounded-lg shadow-lg bg-blue-500/10"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "200px",
            }}
          />
        </div>
      )}
    </>
  );
}

// Hook to add data attributes for walkthrough targeting
export function useWalkthroughTarget(id: string) {
  return {
    "data-walkthrough-target": id,
    id,
  };
}
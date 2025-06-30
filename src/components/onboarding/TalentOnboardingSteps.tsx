
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck } from 'lucide-react/dist/esm/icons/user-check';
import { Star } from 'lucide-react/dist/esm/icons/star';
import { CalendarCheck } from 'lucide-react/dist/esm/icons/calendar-check';
import { BriefcaseIcon } from 'lucide-react/dist/esm/icons/briefcase-icon';
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";

export function TalentOnboardingSteps() {
  const { user } = useAuth();
  const onboardingStatus = useOnboardingStatus();
  
  const steps: OnboardingStep[] = [
    {
      id: "profile",
      label: "Complete your profile",
      completed: onboardingStatus.profileCompleted,
      link: "/profile",
      action: "Update",
    },
    {
      id: "skills",
      label: "Add your top skills",
      completed: onboardingStatus.skillsAdded,
      link: "/profile/skills",
      action: "Add Skills",
    },
    {
      id: "availability",
      label: "Set your availability",
      completed: onboardingStatus.availabilitySet,
      link: "/profile/availability",
      action: "Set",
    },
    {
      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
      action: "View Matches",
    },
  ];
  
  return <OnboardingTracker steps={steps} />;
}

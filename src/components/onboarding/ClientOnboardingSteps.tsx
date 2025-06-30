
import React from "react";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle } from 'lucide-react/dist/esm/icons/plus-circle';
import { SendIcon } from 'lucide-react/dist/esm/icons/send-icon';
import { InboxIcon } from 'lucide-react/dist/esm/icons/inbox-icon';
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus();
  
  const steps: OnboardingStep[] = [
    {
      id: "post-job",
      label: "Post your first job",
      completed: onboardingStatus.jobPosted,
      link: "/post-job",
      action: "Post Job",
    },
    {
      id: "invite",
      label: "Send invitation to talent",
      completed: onboardingStatus.inviteSent,
      link: "/talent",
      action: "Find Talent",
    },
    {
      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,
      link: "/client-dashboard",
      action: "Check Dashboard",
    },
  ];
  
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}

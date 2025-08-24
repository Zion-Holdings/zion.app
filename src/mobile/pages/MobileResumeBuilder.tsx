
import React from "react";
import { MobileHeader } from "../components/common/MobileHeader";
import { BottomNavigation } from "../components/common/BottomNavigation";
import { MobileResumeBuilder as ResumeBuilderComponent } from "../components/resume/MobileResumeBuilder";

export function MobileResumeBuilder() {
  return (
    <div className="min-h-screen">
      <MobileHeader
        title="Resume Builder"
        showBack
      />
      
      <main className="py-4">
        <ResumeBuilderComponent />
      </main>
      
      <BottomNavigation />
    </div>
  );
}

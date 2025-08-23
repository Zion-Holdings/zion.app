
import React from "react";
import { MobileHeader } from "@/mobile/components/common/MobileHeader";
import { BottomNavigation } from "@/mobile/components/common/BottomNavigation";
import { MobileResumeBuilder as ResumeBuilderComponent } from "@/mobile/components/resume/MobileResumeBuilder";

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

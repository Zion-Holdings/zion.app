
import React from 'react';
import { ResumeSelector, ResumeOption } from "../resume-selector";
import { Button } from "@/components/ui/button";

export interface ResumeTabProps {
  selectedResumeId?: string | null;
  onSelectResume?: (resumeId: string) => void;
  onResumeSelected?: (resume: ResumeOption) => void;
  onApply?: () => Promise<void>;
  isSubmitting?: boolean;
}

export function ResumeTab({ selectedResumeId, onSelectResume, onResumeSelected, onApply, isSubmitting = false }: ResumeTabProps) {
  const handleResumeSelected = (resume: ResumeOption) => {
    if (onResumeSelected) {
      onResumeSelected(resume);
    }
    
    if (onSelectResume) {
      onSelectResume(resume.id);
    }
  };
  
  return (
    <div className="space-y-4">
      <ResumeSelector onResumeSelected={handleResumeSelected} />
      
      {onApply && (
        <div className="mt-6">
          <Button 
            onClick={onApply} 
            disabled={!selectedResumeId || isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
          
          {!selectedResumeId && (
            <p className="text-sm text-muted-foreground mt-2">
              Please select a resume to continue
            </p>
          )}
        </div>
      )}
    </div>
  );
}

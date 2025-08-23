
import React, { useState } from 'react';
import {logErrorToProduction} from '@/utils/productionLogger';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { TalentProfile } from "@/types/talent";
import { useAuth } from "@/hooks/useAuth";
import { JobApplication } from "@/types/jobs";

export interface HireConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateData?: TalentProfile;
  application?: JobApplication;
  onConfirm: () => void;
  isSubmitting?: boolean;
}

export function HireConfirmationModal({ 
  isOpen, 
  onClose, 
  candidateData, 
  application,
  onConfirm,
  isSubmitting = false
}: HireConfirmationModalProps) {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [updateAvailability, setUpdateAvailability] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  // Get talent information from either candidateData or application
  const talentData = candidateData || (application?.talent_profile as TalentProfile);

  const handleHireCandidate = async () => {
    if (!projectName || !projectDescription) {
      toast({
        title: 'Required fields missing',
        description: 'Please fill in both project name and description.',
        variant: 'destructive',
      });
      return;
    }

    if (!user) {
      toast({
        title: 'Not authenticated',
        description: 'You must be logged in to hire a candidate.',
        variant: 'destructive',
      });
      return;
    }

    if (!talentData) {
      toast({
        title: 'Missing talent data',
        description: 'Talent information is missing.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    // Create a new project
    try {
      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .insert([
          {
            client_id: user.id,
            talent_id: talentData.user_id,
            job_id: application?.job_id || null,
            title: projectName,
            description: projectDescription,
            status: 'active',
            payment_terms: 'hourly',
          },
        ])
        .select()
        .single();

      if (projectError) {
        toast({
          title: 'Error creating project',
          description: projectError.message,
          variant: 'destructive',
        });
        setIsLoading(false);
        return;
      }

      // Create a new hiring record
      const { error: hiringError } = await supabase
        .from('hiring_records')
        .insert([
          {
            client_id: user.id,
            talent_id: talentData.user_id,
            project_id: projectData.id,
            hire_date: new Date().toISOString(),
            status: 'active',
          },
        ]);

      if (hiringError) {
        toast({
          title: 'Error creating hiring record',
          description: hiringError.message,
          variant: 'destructive',
        });
        setIsLoading(false);
        return;
      }

      // Update the availability status
      if (updateAvailability) {
        try {
          const { error: availabilityError } = await supabase
            .from('talent_profiles')
            .update({ availability_type: 'unavailable' })
            .eq('id', talentData.id);

          if (availabilityError) {
            toast({
              title: 'Error updating availability',
              description: availabilityError.message,
              variant: 'destructive',
            });
            setIsLoading(false);
            return;
          }
        } catch (error) {
          logErrorToProduction('Error updating availability:', { data: error });
          toast({
            title: 'Error updating availability',
            description: 'Failed to update candidate availability status.',
            variant: 'destructive',
          });
          setIsLoading(false);
          return;
        }
      }

      toast({
        title: 'Candidate hired successfully',
        description: `${talentData.full_name} has been hired for the project.`,
      });
      onConfirm();
      onClose();
    } catch (error) {
      logErrorToProduction('Error hiring candidate:', { data: error });
      toast({
        title: 'Error hiring candidate',
        description: 'Failed to hire candidate. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Hire</DialogTitle>
          <DialogDescription>
            Confirm that you want to hire {talentData?.full_name || "this candidate"} for a new project.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="projectName" className="text-right">
              Project Name
            </Label>
            <Input
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="projectDescription" className="text-right mt-2">
              Project Description
            </Label>
            <Textarea
              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="updateAvailability"
              className="h-4 w-4"
              checked={updateAvailability}
              onChange={(e) => setUpdateAvailability(e.target.checked)}
            />
            <label
              htmlFor="updateAvailability"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
            >
              Update talent availability to "Unavailable"
            </label>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" onClick={handleHireCandidate} disabled={isSubmitting || isLoading}>
            {isLoading ? "Hiring..." : "Confirm Hire"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

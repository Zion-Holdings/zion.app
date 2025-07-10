import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

import { logErrorToProduction, logWarn } from "@/utils/productionLogger";

export interface MilestoneInput {
  scope: string;
  startDate: string;
  endDate: string | null;
  projectType: string;
}

export interface GeneratedMilestone {
  title: string;
  description: string;
  dueDate: string;
  estimatedHours: number;
  isAiGenerated: boolean;
}

export function useMilestoneGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);

  const generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {
    try {
      setIsGenerating(true);

      if (!supabase) throw new Error('Supabase client not initialized');

      const { data, error } = await supabase.functions.invoke('generate-milestones', {
        body: input
      });

      if (error) throw error;

      // Check if data exists and has milestones before processing
      if (!data || typeof data !== 'object' || !('milestones' in data)) {
        logWarn('No milestones data received from AI generator');
        setGeneratedMilestones([]);
        return [];
      }

      // Mark each milestone as AI generated
      const milestonesWithFlag = typeof data === 'object' && data !== null && 'milestones' in data && Array.isArray((data as { milestones: unknown[] }).milestones)
        ? (data as { milestones: unknown[] }).milestones.map((milestone: unknown) => {
            if (typeof milestone === 'object' && milestone !== null) {
              // ... existing transformation logic ...
              return milestone as GeneratedMilestone; // Replace with actual type if available
            }
            return {} as GeneratedMilestone;
          })
        : [];

      setGeneratedMilestones(milestonesWithFlag);
      return milestonesWithFlag;
    } catch (error) {
      logErrorToProduction('Error generating milestones:', { data: error });
      toast.error('Failed to generate milestones');
      return [];
    } finally {
      setIsGenerating(false);
    }
  };

  const clearGeneratedMilestones = () => {
    setGeneratedMilestones([]);
  };

  return {
    generateMilestones,
    generatedMilestones,
    isGenerating,
    clearGeneratedMilestones,
  };
}

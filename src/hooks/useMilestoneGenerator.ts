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

      const { data, error } = await supabase.functions.invoke('generate-milestones', {
        body: input
      });

      if (error) throw error;

      // Check if data exists and has milestones before processing
      if (!data || !(data as any)?.milestones) {
        logWarn('No milestones data received from AI generator');
        setGeneratedMilestones([]);
        return [];
      }

      // Mark each milestone as AI generated
      const milestonesWithFlag = (data as any).milestones.map((milestone: any) => ({
        ...milestone,
        isAiGenerated: true,
      }));

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

import { supabase } from "@/integrations/supabase/client";
import { TalentProfile } from "@/types/talent";
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { ContractFormValues } from "../components/ContractForm";


export async function generateContract(
  values: ContractFormValues, 
  talent: TalentProfile, 
  clientName: string,
  generatedMilestones: GeneratedMilestone[]
): Promise<string> {
  const additionalClauses = values.additionalClauses || [];
  
  // Prepare milestone data if we have AI-generated milestones
  const milestoneData = generatedMilestones.length > 0 
    ? generatedMilestones.map(m => ({
        title: m.title,
        description: m.description,
        dueDate: m.dueDate,
        estimatedHours: m.estimatedHours
      }))
    : [];
  
  const { data, error } = await supabase.functions.invoke("generate-contract", {
    body: {
      talentName: talent.full_name,
      clientName: clientName,
      projectName: values.projectName,
      scopeSummary: values.scopeSummary,
      startDate: values.startDate.toISOString(),
      endDate: values.endDate?.toISOString(),
      paymentTerms: values.paymentTerms,
      paymentAmount: values.paymentAmount,
      additionalClauses: additionalClauses,
      milestones: milestoneData,
    }
  });
  
  if (error) {
    throw error;
  }
  
  // Type assertion needed for mock Supabase client compatibility
  if (data && (data as any).success && (data as any).contract) {
    return (data as any).contract;
  } else {
    throw new Error("Failed to generate contract");
  }
}

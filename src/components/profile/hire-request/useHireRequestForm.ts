
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useHireRequest } from "@/hooks/useHireRequest";
import { TalentProfile } from "@/types/talent";
import {logErrorToProduction} from '@/utils/productionLogger';


interface UseHireRequestFormProps {
  talent: TalentProfile;
  onClose: () => void;
  initialJobTitle?: string;
  userDetails?: {
    name?: string;
    email?: string;
    id?: string;
  };
}

// Define the base schema first
const baseFormSchema = z.object({
  requesterName: z.string().min(2, "Name is required"),
  requesterEmail: z.string().email("Valid email is required"),
  projectOverview: z.string().min(10, "Please provide more details about your project"),
  timeline: z.string().min(5, "Please specify your timeline"),
  budgetMin: z.number().min(1, "Budget minimum is required"),
  budgetMax: z.number().min(1, "Budget maximum is required")
});

// Infer FormValues from the base schema
export type FormValues = z.infer<typeof baseFormSchema>;

// Apply refinement to the base schema
const formSchema = baseFormSchema.refine(data => data.budgetMax >= data.budgetMin, {
  message: "Maximum budget must be greater than or equal to minimum budget",
  path: ["budgetMax"]
});

export function useHireRequestForm({ talent, onClose, initialJobTitle, userDetails }: UseHireRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { submitHireRequest } = useHireRequest();

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requesterName: userDetails?.name || "",
      requesterEmail: userDetails?.email || "",
      projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "",
      timeline: "",
      budgetMin: talent.hourly_rate || 25,
      budgetMax: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50
      // projectOverview and timeline were already correctly initialized above
    }
  });

  // Handle form submission
  const onSubmit = async (values: FormValues): Promise<void> => {
    setIsSubmitting(true);
    try {
      const requestData = {
        talent: {
          id: talent.id || "",
          full_name: talent.full_name,
          professional_title: talent.professional_title,
        },
        requester: {
          name: values.requesterName,
          email: values.requesterEmail,
          id: userDetails?.id
        },
        project: {
          overview: values.projectOverview,
          timeline: values.timeline,
          budgetMin: values.budgetMin,
          budgetMax: values.budgetMax
        }
      };

      const result = await submitHireRequest(requestData);
      if (result.success) {
        onClose();
      }
    } catch (error) {
      logErrorToProduction('Error submitting hire request:', { data: error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit
  };
}

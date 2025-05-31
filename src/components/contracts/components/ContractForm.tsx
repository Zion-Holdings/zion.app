
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { TalentProfile } from "@/types/talent";
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { generateContract } from "../utils/contractUtils";
import { ProjectDetailsFields } from "./ProjectDetailsFields";
import { PaymentTermsFields } from "./PaymentTermsFields";
import { AdditionalClausesFields } from "./AdditionalClausesFields";
import { DeploymentOptions } from "@/types/smart-contracts";

const formSchema = z.object({
  projectTitle: z.string().min(1, "Project title is required"), // Renamed
  clientName: z.string().min(1, "Client name is required"), // Added
  talentName: z.string().min(1, "Talent name is required"), // Added
  clientWalletAddress: z.string().optional(), // Added
  talentWalletAddress: z.string().optional(), // Added
  deliverables: z.string().min(10, "Deliverables description should be at least 10 characters"),
  startDate: z.date({
    required_error: "Start date is required",
  }),
  endDate: z.date().optional(),
  jurisdiction: z.string().min(1, "Jurisdiction is required"), // Added
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]),
  paymentAmount: z.string().min(1, "Payment amount is required"), // This might be part of manualMilestones for "milestone" paymentTerms
  manualMilestones: z.array(z.object({ // Added
    id: z.string(),
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    dueDate: z.string().min(1, "Due date is required"),
    paymentAmount: z.string().min(1, "Payment amount is required")
  })).optional(),
  additionalClauses: z.array(z.string()).default([]),
});

export type ContractFormValues = z.infer<typeof formSchema>;

interface ContractFormProps {
  talent: TalentProfile;
  clientName: string;
  initialValues?: ContractFormValues;
  onFormValuesChange?: (values: ContractFormValues) => void;
  onContractGenerated: (contractContent: string) => void;
  deployOptions?: DeploymentOptions;
  onDeployOptionsChange?: (options: DeploymentOptions) => void;
}

export function ContractForm({
  talent,
  clientName,
  initialValues,
  onFormValuesChange,
  onContractGenerated,
  deployOptions,
  onDeployOptionsChange
}: ContractFormProps) {
  // const [isGenerating, setIsGenerating] = useState(false); // Removed
  const { toast } = useToast();

  const form = useForm<ContractFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || {
      projectTitle: "", // Renamed
      clientName: clientName || "", // Added
      talentName: talent.full_name || talent.user_id || "", // Added
      clientWalletAddress: "", // Added
      talentWalletAddress: "", // Added
      deliverables: "",
      startDate: new Date(),
      endDate: undefined, // Explicitly set if optional and not always in initialValues
      jurisdiction: "",
      paymentTerms: talent.hourly_rate ? "hourly" : "fixed",
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "",
      manualMilestones: [],
      additionalClauses: ["nda", "ip"],
    },
  });
  
  // Update form when initialValues change
  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
        const typedKey = key as keyof ContractFormValues;
        form.setValue(typedKey, initialValues[typedKey]);
      });
    }
  }, [initialValues, form]);
  
  // Track form values for template saving
  useEffect(() => {
    if (onFormValuesChange) {
      const subscription = form.watch((value) => {
        onFormValuesChange(value as ContractFormValues);
      });
      
      return () => subscription.unsubscribe();
    }
  }, [form, onFormValuesChange]);
  
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {
    // Transform AI generated milestones to fit the manualMilestones schema
    const transformedAIMilestones = milestones.map((m, index) => ({
      id: `ai-milestone-${Date.now()}-${index}`, // Generate a unique ID
      title: m.title,
      description: m.description,
      dueDate: m.dueDate, // Assuming GeneratedMilestone has dueDate as string
      paymentAmount: "To be defined", // Placeholder payment amount
    }));

    form.setValue("manualMilestones", transformedAIMilestones);
    
    // If payment terms isn't already set to milestone, update it
    if (form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms", "milestone");
    }
    
    toast({
      title: "Milestones Generated",
      description: `${milestones.length} milestones have been suggested and added to the form. Please review and adjust payment amounts.`,
    });
  };
  
  // const onSubmit = async (values: ContractFormValues) => { // Removed onSubmit
  //   // setIsGenerating(true); // Removed
  //   // try {
  //   //   const contract = await generateContract(
  //   //     values,
  //   //     talent,
  //   //     clientName,
  //   //     values.manualMilestones || []
  //   //   );
  //   //   onContractGenerated(contract);
  //   // } catch (error) {
  //   //   console.error("Error generating contract:", error);
  //   //   toast({
  //   //     title: "Contract Generation Failed",
  //   //     description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
  //   //     variant: "destructive",
  //   //   });
  //   // } finally {
  //   //   // setIsGenerating(false); // Removed
  //   // }
  // };
  
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>
        <DialogDescription>
          Create a professional contract for your project with {talent.full_name}
        </DialogDescription>
      </DialogHeader>
    
      <Form {...form}>
        {/* Removed form.handleSubmit(onSubmit) from here, form submission will be handled by parent */}
        <form className="space-y-6">
          <ProjectDetailsFields 
            form={form} 
          />
          
          <PaymentTermsFields 
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
          />
          
          <AdditionalClausesFields 
            form={form}
          />
          
          {/* Removed internal submit button */}
          {/* <Button
            type="submit" 
            className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            // disabled={isGenerating} // Removed
          >
            {isGenerating ? ( // Removed
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Contract...
              </>
            ) : (
              "Generate Contract"
            )}
          </Button> */}
        </form>
      </Form>
      
      <DialogFooter className="gap-2 flex-wrap mt-4">
        <Button 
          variant="outline" 
          onClick={() => form.reset()}
          // disabled={isGenerating} // Removed
        >
          Reset Form
        </Button>
      </DialogFooter>
    </>
  );
}

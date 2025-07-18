<<<<<<< HEAD
import { useState, useEffect } from 'react';';
import { Loader2 } from '@/components/ui/icons;'';
import { useForm } from 'react-hook-form;'';
import { zodResolver } from '@hookform/resolvers/zod;'';
import { z } from 'zod;'
;;
import { Button } from '@/components/ui/button;'';
import { Form } from '@/components/ui/form;';
import {;''
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;''
  DialogTitle,;;
} from '@/components/ui/dialog;'';
import { useToast } from '@/hooks/use-toast;'';
import type { TalentProfile } from '@/types/talent;'';
import type { GeneratedMilestone } from '@/hooks/useMilestoneGenerator;'';
import { generateContract } from '../utils/contractUtils;'';
import { ProjectDetailsFields } from './ProjectDetailsFields;'';
import { PaymentTermsFields } from './PaymentTermsFields;'';
import { AdditionalClausesFields } from './AdditionalClausesFields;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;'';
const formSchema: unknown "unknown = z.object({;",;""
  projectName: "z.string().min(1", 'Project name is required'),;'
  scopeSummary: z;''
    .string();;
    .min(10, 'Scope summary should be at least 10 characters'),;;'
  startDate: "z.date()",;";";";";""
  endDate: "z.date().optional()",;";";";";""
  paymentTerms: z.enum(['hourly', 'fixed', 'milestone']),;;'
  paymentAmount: "z.string().min(1", 'Payment amount is required'),;;'
  additionalClauses: "z.array(z.string()).optional()",;"
});""
;";"";
export type ContractFormValues = z.infer<typeof formSchema>;";";""
;";";";""
interface ContractFormProps {;";";";";""
  talent: "TalentProfile;",;";";""
  clientName: string;";";";""
  initialValues?: ContractFormValues;";";";";""
  onFormValuesChange?: (values: "ContractFormValues) => void;",;";";";";""
  onContractGenerated: "(contractContent: string) => void;";"
};
;
=======
import { useState, useEffect } from 'react''
import { Loader2 } from '@/components/ui/icons'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {'
  DialogDescription,'
  DialogFooter,
  DialogHeader,'
  DialogTitle,'
} from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import type { TalentProfile } from '@/types/talent'
import type { GeneratedMilestone } from '@/hooks/useMilestoneGenerator'
import { generateContract } from '../utils/contractUtils'
import { ProjectDetailsFields } from './ProjectDetailsFields'
import { PaymentTermsFields } from './PaymentTermsFields'
import { AdditionalClausesFields } from './AdditionalClausesFields'
import { logErrorToProduction } from '@/utils/productionLogger'
'
const formSchema: z.object({,;
  projectName: z.string().min(1, 'Project name is required'),'
  scopeSummary: z'
    .string()'
    .min(10, 'Scope summary should be at least 10 characters'),'
  startDate: z.date(),"
  endDate: "z.date().optional(),;"";
  paymentTerms: z.enum(['hourly', 'fixed', 'milestone']),'
  paymentAmount: z.string().min(1, 'Payment amount is required'),'
  additionalClauses: z.array(z.string()).optional(),"
})"

export type ContractFormValues = z.infer<typeof formSchema>;"";"";
interface ContractFormProps {""
  talent: TalentProfile,"
  clientName: string""
  initialValues?: ContractFormValues"""
  onFormValuesChange?: (values: ContractFormValues) => void,""
  onContractGenerated: "(contractContent: string) => void

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export function ContractForm(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  talent,;
  clientName,;
  initialValues,;
  onFormValuesChange,;
  onContractGenerated,;
}: ContractFormProps) {;
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMilestones, setGeneratedMilestones] = useState<;
<<<<<<< HEAD
    GeneratedMilestone[];""
  >([]);";""
  const { _toast } = useToast();";";""
;";";";""
  const form: unknown = useForm<ContractFormValues>({;";,";";";""
    resolver: "zodResolver(formSchema)",;";";";";""
    defaultValues: "initialValues || {;",;";";";";""
      projectName: '',;;'
      scopeSummary: '',;;'
      startDate: "new Date()",;";";";";""
      paymentTerms: talent.hourly_rate ? 'hourly' : 'fixed',;;'
      paymentAmount: "talent.hourly_rate ? `$${talent.hourly_rate"}/hour` : '',;;'
      additionalClauses: ['nda', 'ip'],;'
=======
    GeneratedMilestone[]"
  >([]);"
  const { _toast } = useToast();";"
;";"
  const form = useForm<ContractFormValues>({;,";"
    resolver: zodResolver(formSchema)",""
    defaultValues: initialValues || {,;""
      projectName: '','
      scopeSummary: '','
      startDate: "new Date(),;"";
      paymentTerms: talent.hourly_rate ? 'hourly' : 'fixed','
      paymentAmount: "talent.hourly_rate ? `$${talent.hourly_rate"}/hour` : '','
      additionalClauses: ['nda', 'ip'],'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    },;
  });

  // Update form when initialValues change;
  useEffect(() => {;
    if (initialValues) {;
      Object.keys(initialValues).forEach((key) => {;
        const typedKey = key as keyof ContractFormValues;
        form.setValue(typedKey, initialValues[typedKey]);
      });
    };
  }, [initialValues, form]);

  // Track form values for template saving;
  useEffect(() => {;
    if (onFormValuesChange) {;
      const subscription = form.watch((value) => {;
        onFormValuesChange(value as ContractFormValues);
      });

      return () => subscription.unsubscribe();
    };
    return undefined;
<<<<<<< HEAD
  }, [form, onFormValuesChange]);''
;
  const handleMilestonesGenerated: unknown = (_milestones: GeneratedMilestone[]) => {;
    setGeneratedMilestones(milestones);''
;;
    // If payment terms isn't already set to milestone, update it;;'
    if (form.getValues('paymentTerms') !== 'milestone') {;;'
      form.setValue('paymentTerms', 'milestone');'
    };
;''
    toast({;;
      title: 'Milestones Generated',;;'
      description: "`${milestones.length"} milestones have been generated and will be included in the contract.`,;"
=======
  }, [form, onFormValuesChange])'
'
  const handleMilestonesGenerated = (_milestones: GeneratedMilestone[]) => {;
    setGeneratedMilestones(milestones)'
'
    // If payment terms isn't already set to milestone, update it'
    if (form.getValues('paymentTerms') !== 'milestone') {'
      form.setValue('paymentTerms', 'milestone')'
    };
'
    toast({'
      title: 'Milestones Generated','`
      description: `${milestones.length} milestones have been generated and will be included in the contract.`,;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    });
  };

  const onSubmit = async (_values: ContractFormValues) => {;
    setIsGenerating(true);
    try {;
      const contract = await generateContract(;
        values,;
        talent,;
        clientName,;
<<<<<<< HEAD
        generatedMilestones,;""
      );";""
;";";""
      onContractGenerated(contract);";";";""
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;";";";";""
      logErrorToProduction('Error generating contract:', { data: "error "});";";";""
      toast({;";";";";""
        title: 'Contract Generation Failed',;'
        description:;
          error instanceof Error;''
            ? error.message;;
            : 'Something went wrong. Please try again.',;;'
        variant: 'destructive',;'
=======
        generatedMilestones,"
      );"
;";"
      onContractGenerated(contract);";"
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;";"
      logErrorToProduction('Error generating contract:', { data: error "})"
      toast({";""
        title: 'Contract Generation Failed','
        description:;
          error instanceof Error'
            ? error.message'
            : 'Something went wrong. Please try again.','
        variant: 'destructive','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      });
    } finally {;
      setIsGenerating(false);
    };
<<<<<<< HEAD
  };''
;
  return (;
    <>;''
      <DialogHeader>;;
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>;";";";""
        <DialogDescription>;";";";";""
          Create a professional contract for your project with{' '};'
          {talent.full_name};''
        </DialogDescription>;
      </DialogHeader>;
;''
      <Form {...form}>;;
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;"
=======
  }'
'
  return (;
    <>'
      <DialogHeader>'
        <DialogTitle className=text-xl>Contract Builder</DialogTitle>";";
        <DialogDescription>"
          Create a professional contract for your project with{' '}'
          {talent.full_name}'
        </DialogDescription>'
      </DialogHeader>;
'
      <Form {...form}>'
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6>
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          <ProjectDetailsFields form={form} />;

          <PaymentTermsFields;
            form={form};
<<<<<<< HEAD
            handleMilestonesGenerated={handleMilestonesGenerated};
          />;""
;";""
          <AdditionalClausesFields form={form} />;";";""
;";";";""
          <Button;";";";";""
            type="submit";";";";";""
            className="w-full bg-zion-purple hover:bg-zion-purple-dark";""
            disabled={isGenerating};";""
          >;";";""
            {isGenerating ? (;";";";""
              <>;";";";";""
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;";""
                Generating Contract...;";";""
              </>;";";";""
            ) : (;";";";";""
              'Generate Contract;'
            )};''
          </Button>;
        </form>;
      </Form>;''
;;
      <DialogFooter className="gap-2 flex-wrap mt-4">;";";";""
        <Button;";";";";""
          variant="outline";"
=======
            handleMilestonesGenerated={handleMilestonesGenerated};"
          />"
;"
          <AdditionalClausesFields form={form} />;";"
;";"
          <Button;";"
            type=submit"""
            className=w-full bg-zion-purple hover:bg-zion-purple-dark"
            disabled={isGenerating};"
          >;";"
            {isGenerating ? (;";"
              <>;";"
                <Loader2 className=mr-2 h-4 w-4 animate-spin" />";
                Generating Contract...;""
              </>;""
            ) : (;"";
              'Generate Contract'
            )}'
          </Button>'
        </form>;
      </Form>'
'
      <DialogFooter className=gap-2 flex-wrap mt-4">"
        <Button";""
          variant=outline"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          onClick={() => form.reset()};
          disabled={isGenerating};
        >;
          Reset Form;
        </Button>;
<<<<<<< HEAD
      </DialogFooter>;""
    </>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      </DialogFooter>"
    </>;
  );"";
};"";
";"
}";"

}"
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae

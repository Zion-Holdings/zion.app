<<<<<<< HEAD
import type { StepProps } from './types;'';
import { TabsList, TabsTrigger } from '@/components/ui/tabs;'
;''
interface ResumeStepsProps {;;
  steps: "StepProps[];",;";";";";""
  activeTab: "string;",";";";";""
  onChange: "(value: string) => void;";";""
};";";""
;";";";"";
export const _ResumeSteps: unknown "unknown = ({ steps "}: ResumeStepsProps) => {;";";";""
  return (;";";";";""
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">;"
      {steps.map((step) => (;
        <TabsTrigger key={step.id} value={step.id}>;
          {step.label};
        </TabsTrigger>;
      ))};""
    </TabsList>;";""
  );";";""
};";";";""
""""""
=======
import type { StepProps } from './types'
import { TabsList, TabsTrigger } from '@/components/ui/tabs'
'
interface ResumeStepsProps {'
  steps: StepProps[]
  activeTab: string,"
  onChange: (value: string) => void
}"
"
export const _ResumeSteps: ({ steps }: ResumeStepsProps) => {
  return (;"
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8>
      {steps.map((step) => (;
        <TabsTrigger key={step.id} value={step.id}>;
          {step.label};"
        </TabsTrigger>))}"
    </TabsList>;"
  );
}"
""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae

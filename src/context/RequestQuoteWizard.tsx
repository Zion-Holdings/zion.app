<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect } from 'react''
import type { ReactNode } from 'react''
import { useRouter } from 'next/router'
import { logErrorToProduction } from '@/utils/productionLogger'
import { toast } from '@/hooks/use-toast'
import axios from 'axios;
export type WizardStep = 'Services' | 'Details' | 'Success'
'
export interface RequestQuoteWizardContextType {
  step: "WizardStep
  selectedService: string | null,
  goToStep: "(step: WizardStep) => void"
  selectService: (serviceId: string) => void
  startQuote: "(serviceId: string) => void"
  submitQuote: (message: string) => Promise<void>
}"
"
const defaultContext: unknown RequestQuoteWizardContextType = {
  step: 'Services','
  selectedService: "null"
  _goToStep: () => {},"
  _selectService: "() => {},
  _startQuote: "() => {"},
  _submitQuote: async () => {"},"
=======
import React, { createContext, useContext, useState, useEffect } from 'react';';
import type { ReactNode } from 'react';';
import { useRouter } from 'next/router;'';
import { logErrorToProduction } from '@/utils/productionLogger;'';
import { toast } from '@/hooks/use-toast;'';
import axios from 'axios;'
;;
export type WizardStep = 'Services' | 'Details' | 'Success;'
;'';
export interface RequestQuoteWizardContextType {;;
  step: "WizardStep;",;";";";";""
  selectedService: "string | null;",";";";";""
  goToStep: "(step: WizardStep) => void;",;";";";";""
  selectService: "(serviceId: string) => void;",;";";";";""
  startQuote: "(serviceId: string) => void;",;";";";";""
  submitQuote: "(message: string) => Promise<void>;";";";""
};";";";""
;";";";";"";
const defaultContext: unknown "RequestQuoteWizardContextType = {;",;";";";";""
  step: 'Services',;;'
  selectedService: "null",;";";";";""
  _goToStep: "() => {"},;";";";";""
  _selectService: "() => {"},;";";";";""
  _startQuote: "() => {"},;";";";";""
  _submitQuote: "async () => {"},;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
const RequestQuoteWizardContext: unknown =;
  createContext<RequestQuoteWizardContextType>(defaultContext);
export function useRequestQuoteWizard(): unknown {): unknown {): unknown {): unknown {): unknown {): RequestQuoteWizardContextType {;
  return useContext(RequestQuoteWizardContext);
<<<<<<< HEAD
}
;"
export function RequestQuoteWizardProvider(): unknown {): unknown {): unknown {): unknown {): unknown {{;"
  children,
}: {;
  children: "ReactNode"
}) {;
  const [step, setStep] = useState<WizardStep>('Services')'
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const router = useRouter();
'
  const goToStep = (next: WizardStep) => setStep(next)'
  const selectService = (_serviceId: string) => {'
    setSelectedService(serviceId)'
    goToStep('Details')'
  }'
  const startQuote = (_serviceId: string) => {'
    setSelectedService(serviceId)'
    goToStep('Details')'
  }'
'
  const submitQuote = async (_message: string) => {;
    if (!selectedService) return'
    try {'
      await axios.post('/api/quotes', {'
        service_id: selectedService"
        user_message: message,"
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});
      toast.success('Quote request submitted')'
      router.push('/dashboard/quotes')'
      setStep('Success')'
    } catch {'
      logErrorToProduction('Failed to submit quote', { data: error "})"
      toast({ title: 'Error submitting quote', variant: 'destructive' })'
    }'
  };
'
  useEffect(() => {'
    if (typeof window !== 'undefined') {'
      ('
        window as Window & {'
          wizardState?: { step: WizardStep; selectedService: string | null }"
        }).wizardState = { step, selectedService };
=======
};""
;";"";
export function RequestQuoteWizardProvider(): unknown {): unknown {): unknown {): unknown {): unknown {{;";";""
  children,;";";";""
}: {;";";";";""
  children: "ReactNode;";";";";""
}) {;";";";";""
  const [step, setStep] = useState<WizardStep>('Services');'
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const router: unknown = useRouter();
;''
  const goToStep: unknown = (next: WizardStep) => setStep(next);
;
  const selectService: unknown = (_serviceId: string) => {;''
    setSelectedService(serviceId);;
    goToStep('Details');''
  };
;
  const startQuote: unknown = (_serviceId: string) => {;''
    setSelectedService(serviceId);;
    goToStep('Details');'
  };''
;
  const submitQuote: unknown = async (_message: string) => {;
    if (!selectedService) return;''
    try {;;
      await axios.post('/api/quotes', {;;'
        service_id: "selectedService",;";";";";""
        user_message: "message",;";";";""
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});";";";";""
      toast.success('Quote request submitted');;'
      router.push('/dashboard/quotes');;'
      setStep('Success');''
    } catch {;;
      logErrorToProduction('Failed to submit quote', { data: "error "});";";";";""
      toast({ title: 'Error submitting quote', variant: 'destructive' });''
    };
  };
;''
  useEffect(() => {;;
    if (typeof window !== 'undefined') {;'
      (;''
        window as Window & {;;
          wizardState?: { step: "WizardStep; selectedService: string | null "};"
        };
      ).wizardState = { step, selectedService };
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    };
  }, [step, selectedService]);
  return (;
    <RequestQuoteWizardContext.Provider;
      value={{;
        step,;
        selectedService,;
        goToStep,;
        selectService,;
        startQuote,;
        submitQuote,;
      }};
    >;
<<<<<<< HEAD
      {children}"
    </RequestQuoteWizardContext.Provider>;
  );"
}"

}
}""
};
}""
}
}
=======
      {children};""
    </RequestQuoteWizardContext.Provider>;";""
  );";";""
};";";";""
";";""
};";";""
}";""
};";""
}";"
};""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}""
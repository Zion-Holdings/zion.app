import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from "react";

export type WizardStep = "Services" | "Details";

export interface RequestQuoteWizardContextType {
  step: WizardStep;
  selectedService: string | null;
  goToStep: (step: WizardStep) => void;
  selectService: (serviceId: string) => void;
}

const defaultContext: RequestQuoteWizardContextType = {
  step: "Services",
  selectedService: null,
  goToStep: () => {},
  selectService: () => {},
};

const RequestQuoteWizardContext = createContext<RequestQuoteWizardContextType>(defaultContext);

export function useRequestQuoteWizard(): RequestQuoteWizardContextType {
  return useContext(RequestQuoteWizardContext);
}

export function RequestQuoteWizardProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<WizardStep>("Services");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const goToStep = (next: WizardStep) => setStep(next);

  const selectService = (serviceId: string) => {
    setSelectedService(serviceId);
    goToStep("Details");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).wizardState = { step, selectedService };
    }
  }, [step, selectedService]);

  return (
    <RequestQuoteWizardContext.Provider value={{ step, selectedService, goToStep, selectService }}>
      {children}
    </RequestQuoteWizardContext.Provider>
  );
}

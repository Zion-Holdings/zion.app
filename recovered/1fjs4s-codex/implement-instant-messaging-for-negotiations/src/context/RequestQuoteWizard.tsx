import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export type WizardStep = "Services" | "Details" | "Success";

export interface RequestQuoteWizardContextType {
  step: WizardStep;
  selectedService: string | null;
  goToStep: (step: WizardStep) => void;
  selectService: (serviceId: string) => void;
  startQuote: (serviceId: string) => void;
  submitQuote: (message: string) => Promise<void>;
}

const defaultContext: RequestQuoteWizardContextType = {
  step: "Services",
  selectedService: null,
  goToStep: () => {},
  selectService: () => {},
  startQuote: () => {},
  submitQuote: async () => {},
};

const RequestQuoteWizardContext = createContext<RequestQuoteWizardContextType>(defaultContext);

export function useRequestQuoteWizard(): RequestQuoteWizardContextType {
  return useContext(RequestQuoteWizardContext);
}

export function RequestQuoteWizardProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<WizardStep>("Services");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const navigate = useNavigate();

  const goToStep = (next: WizardStep) => setStep(next);

  const selectService = (serviceId: string) => {
    setSelectedService(serviceId);
    goToStep("Details");
  };

  const startQuote = (serviceId: string) => {
    setSelectedService(serviceId);
    goToStep("Details");
  };

  const submitQuote = async (message: string) => {
    if (!selectedService) return;
    await fetch("/api/quotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ service_id: selectedService, user_message: message }),
    });
    toast.success("Quote request submitted");
    navigate("/dashboard/quotes");
    setStep("Success");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).wizardState = { step, selectedService };
    }
  }, [step, selectedService]);

  return (
    <RequestQuoteWizardContext.Provider
      value={{
        step,
        selectedService,
        goToStep,
        selectService,
        startQuote,
        submitQuote,
      }}
    >
      {children}
    </RequestQuoteWizardContext.Provider>
  );
}

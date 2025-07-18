import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import type { ReactNode } from "react";
import { useRouter } from 'next/router';
import {logErrorToProduction} from '@/utils/productionLogger';
import { toast } from "@/hooks/use-toast";
import axios from 'axios';

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
  _goToStep: () => {},
  _selectService: () => {},
  _startQuote: () => {},
  _submitQuote: async () => {},
};

const RequestQuoteWizardContext = createContext<RequestQuoteWizardContextType>(defaultContext);

export function useRequestQuoteWizard(): RequestQuoteWizardContextType {
  return useContext(RequestQuoteWizardContext);
}

export function RequestQuoteWizardProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<WizardStep>("Services");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const router = useRouter();

  const goToStep = (next: WizardStep) => setStep(next);

  const selectService = (_serviceId: string) => {
    setSelectedService(serviceId);
    goToStep("Details");
  };

  const startQuote = (_serviceId: string) => {
    setSelectedService(serviceId);
    goToStep("Details");
  };

  const submitQuote = async (_message: string) => {
    if (!selectedService) return;
    try {
      await axios.post('/api/quotes', {
        service_id: selectedService,
        user_message: message,
      });
      toast.success("Quote request submitted");
      router.push("/dashboard/quotes");
      setStep("Success");
    } catch {
      logErrorToProduction('Failed to submit quote', { data: 'Error occurred' });
      toast({ title: 'Error submitting quote', variant: 'destructive' });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as Window & { wizardState?: { step: WizardStep; selectedService: string | null } }).wizardState = { step, selectedService };
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

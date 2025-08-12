
import { useState } from "react";
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GradientHeading } from "@/components/GradientHeading";
import { StepProgress } from "@/components/QuoteRequestForm/StepProgress";
import { ServiceTypeStep } from "@/components/QuoteRequestForm/ServiceTypeStep";
import { ProjectDetailsStep } from "@/components/QuoteRequestForm/ProjectDetailsStep";
import { TimelineStep } from "@/components/QuoteRequestForm/TimelineStep";
import { BudgetStep } from "@/components/QuoteRequestForm/BudgetStep";
import { SummaryStep } from "@/components/QuoteRequestForm/SummaryStep";
import { AutoFillModal } from "@/components/QuoteRequestForm/AutoFillModal";
import { QuoteFormData } from "@/types/quotes";
import { Sparkles, Loader2 } from 'lucide-react';


import { z } from "zod";

export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary";

const serviceStepSchema = z.object({
  serviceType: z.string().min(1),
  specificItem: z.object({ id: z.string() }),
});

export function QuoteRequestForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [autoFillLoading, setAutoFillLoading] = useState(false);
  const [autoFillOpen, setAutoFillOpen] = useState(false);
  
  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: "",
    serviceCategory: "",
    specificItem: null,
    projectName: "",
    projectDescription: "",
    startDate: undefined,
    endDate: undefined,
    timeline: "flexible",
    budget: {
      amount: 0,
      type: "fixed"
    },
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      company: ""
    }
  });
  
  const updateFormData = (data: Partial<QuoteFormData>) => {
    setFormData(prev => ({
      ...prev,
      ...data
    }));
  };
  
  const handleNext = () => {
    switch (currentStep) {
      case "service": {
        const result = serviceStepSchema.safeParse({
          serviceType: formData.serviceType,
          specificItem: formData.specificItem,
        });
        if (!result.success) {
          toast({
            title: "Service Required",
            description: "Please select a service before continuing.",
            variant: "destructive",
          });
          return;
        }
        setCurrentStep("details");
        break;
      }
      case "details":
        setCurrentStep("timeline");
        break;
      case "timeline":
        setCurrentStep("budget");
        break;
      case "budget":
        setCurrentStep("summary");
        break;
      default:
        break;
    }
  };
  
  const handleBack = () => {
    switch (currentStep) {
      case "details":
        setCurrentStep("service");
        break;
      case "timeline":
        setCurrentStep("details");
        break;
      case "budget":
        setCurrentStep("timeline");
        break;
      case "summary":
        setCurrentStep("budget");
        break;
      default:
        break;
    }
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send the data to your backend
      logDebug("Submitting form data:", { data: formData });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Quote Request Submitted",
        description: "We've received your request and will get back to you soon.",
      });
      
      // Redirect to confirmation page or homepage
      router.push("/");
    } catch (_error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAutoFill = async (description: string) => {
    setAutoFillLoading(true);
    try {
      const res = await fetch("/api/openai/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectDescription: description }),
      });
      if (!res.ok) throw new Error("Request failed");
      const { category, itemId, timeline, budget } = await res.json();
      updateFormData({
        projectDescription: description,
        serviceType: category,
        serviceCategory: category,
        specificItem: itemId
          ? { id: itemId, title: "AI Selected Item", category }
          : formData.specificItem,
        timeline: timeline || formData.timeline,
        budget: { ...formData.budget, ...(budget || {}) },
      });
      setCurrentStep("summary");
      setAutoFillOpen(false);
    } catch (err) {
      logErrorToProduction("Auto-fill API error", err as Error, { component: 'QuoteRequestForm', projectDescription: description });
      toast({
        title: "Auto-fill Failed",
        description: "We couldn't process your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAutoFillLoading(false);
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case "service":
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />;
      case "details":
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />;
      case "timeline":
        return <TimelineStep formData={formData} updateFormData={updateFormData} />;
      case "budget":
        return <BudgetStep formData={formData} updateFormData={updateFormData} />;
      case "summary":
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 space-y-3">
          <GradientHeading>Request a Quote</GradientHeading>
          <p className="text-zion-slate-light mt-4">
            Tell us about your project and we'll create a customized quote for you
          </p>
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />
            <span className="text-sm text-white">AI-powered matching</span>
          </div>
          <Button
            size="sm"
            onClick={() => setAutoFillOpen(true)}
            disabled={autoFillLoading}
            className="mt-2"
          >
            {autoFillLoading && (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            )}
            Auto Fill with AI
          </Button>
        </div>
        
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">
          <CardContent className="px-6 py-8">
            <StepProgress currentStep={currentStep} />
            
            <div className="mt-8">
              {renderStepContent()}
            </div>
            
            <div className="flex justify-between mt-8">
              {currentStep !== "service" && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                >
                  Back
                </Button>
              )}
              
              {currentStep !== "summary" ? (
                <Button 
                  onClick={handleNext}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                >
                  Continue
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <AutoFillModal
        open={autoFillOpen}
        onOpenChange={setAutoFillOpen}
        onSubmit={handleAutoFill}
        loading={autoFillLoading}
      />
    </div>
  );
}

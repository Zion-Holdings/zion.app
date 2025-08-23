import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import StepIndicator from '../components/quote/StepIndicator';
import ServiceSelectionStep from '../components/quote/steps/ServiceSelectionStep';
import ProjectDetailsStep from '../components/quote/steps/ProjectDetailsStep';
import TimelineStep from '../components/quote/steps/TimelineStep';
import BudgetStep from '../components/quote/steps/BudgetStep';
import SummaryStep from '../components/quote/steps/SummaryStep';

export type QuoteFormData = {
  serviceTypes: string[];
  talentRoles: string[];
  equipmentNeeds: string[];
  projectName: string;
  description: string;
  deliverables: string;
  startDate: string | null;
  endDate: string | null;
  timelineFlexibility: 'flexible' | 'fixed' | '';
  budgetRange: string;
  contactName: string;
  contactEmail: string;
  company?: string;
};

const initialData: QuoteFormData = {
  serviceTypes: [],
  talentRoles: [],
  equipmentNeeds: [],
  projectName: '',
  description: '',
  deliverables: '',
  startDate: null,
  endDate: null,
  timelineFlexibility: '',
  budgetRange: '',
  contactName: '',
  contactEmail: '',
  company: '',
};

export default function RequestQuotePage() {
  const steps = useMemo(
    () => ['Select Services', 'Project Details', 'Timeline', 'Budget', 'Summary'],
    []
  );
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<QuoteFormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ ok: boolean; message: string } | null>(null);

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitResult(null);
    try {
      const res = await fetch('/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Submission failed');
      setSubmitResult({ ok: true, message: 'Request submitted successfully.' });
    } catch (err: any) {
      setSubmitResult({ ok: false, message: err?.message || 'Submission failed' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Request a Quote</title>
      </Head>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Request a Quote</h1>
        <StepIndicator steps={steps} currentStep={currentStep} />

        <div className="mt-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
          {currentStep === 0 && (
            <ServiceSelectionStep
              value={formData}
              onChange={setFormData}
              onNext={goNext}
            />
          )}
          {currentStep === 1 && (
            <ProjectDetailsStep
              value={formData}
              onChange={setFormData}
              onBack={goBack}
              onNext={goNext}
            />
          )}
          {currentStep === 2 && (
            <TimelineStep
              value={formData}
              onChange={setFormData}
              onBack={goBack}
              onNext={goNext}
            />
          )}
          {currentStep === 3 && (
            <BudgetStep
              value={formData}
              onChange={setFormData}
              onBack={goBack}
              onNext={goNext}
            />
          )}
          {currentStep === 4 && (
            <SummaryStep
              value={formData}
              onBack={goBack}
              onSubmit={handleSubmit}
              submitting={submitting}
              result={submitResult}
            />
          )}
        </div>
      </div>
    </>
  );
}
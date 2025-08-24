import React from 'react';
import type { QuoteFormData } from '../../../pages/request-quote';

export type ProjectDetailsStepProps = {
  value: QuoteFormData;
  onChange: (updater: QuoteFormData | ((prev: QuoteFormData) => QuoteFormData)) => void;
  onBack: () => void;
  onNext: () => void;
};

export default function ProjectDetailsStep({ value, onChange, onBack, onNext }: ProjectDetailsStepProps) {
  const canContinue =
    value.projectName.trim().length > 0 &&
    value.description.trim().length > 0 &&
    value.contactName.trim().length > 0 &&
    /.+@.+\..+/.test(value.contactEmail);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canContinue) onNext();
      }}
    >
      <h2 className="text-xl font-semibold mb-4">Project details</h2>

      <div className="grid gap-4">
        <div>
          <label className="block text-sm mb-1">Project name</label>
          <input
            type="text"
            value={value.projectName}
            onChange={(e) => onChange({ ...value, projectName: e.target.value })}
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2"
            placeholder="e.g., E-commerce platform revamp"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Company (optional)</label>
          <input
            type="text"
            value={value.company || ''}
            onChange={(e) => onChange({ ...value, company: e.target.value })}
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2"
            placeholder="Your company"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">What are we building?</label>
          <textarea
            value={value.description}
            onChange={(e) => onChange({ ...value, description: e.target.value })}
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 h-28"
            placeholder="Briefly describe the project scope and goals"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Key deliverables</label>
          <textarea
            value={value.deliverables}
            onChange={(e) => onChange({ ...value, deliverables: e.target.value })}
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 h-24"
            placeholder="List expected deliverables, milestones, or success criteria"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Your name</label>
            <input
              type="text"
              value={value.contactName}
              onChange={(e) => onChange({ ...value, contactName: e.target.value })}
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={value.contactEmail}
              onChange={(e) => onChange({ ...value, contactEmail: e.target.value })}
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2"
              placeholder="jane@example.com"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button type="button" onClick={onBack} className="px-4 py-2 rounded-md border">
          Back
        </button>
        <button
          type="submit"
          disabled={!canContinue}
          className="px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
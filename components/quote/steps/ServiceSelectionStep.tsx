import React from 'react';
import type { QuoteFormData } from '../../../pages/request-quote';

export type ServiceSelectionStepProps = {
  value: QuoteFormData;
  onChange: (updater: QuoteFormData | ((prev: QuoteFormData) => QuoteFormData)) => void;
  onNext: () => void;
};

const SERVICE_OPTIONS = [
  'Web Development',
  'Mobile Apps',
  'AI/ML',
  'UI/UX Design',
  'Cloud & DevOps',
  'Data Engineering',
];

const TALENT_OPTIONS = [
  'Frontend Engineer',
  'Backend Engineer',
  'Full-Stack Engineer',
  'Product Designer',
  'Data Scientist',
  'Project Manager',
];

const EQUIPMENT_OPTIONS = [
  'GPU Servers',
  'Test Devices',
  'Cameras / Audio',
  'Staging Environment',
  'Other Specialized Hardware',
];

export default function ServiceSelectionStep({ value, onChange, onNext }: ServiceSelectionStepProps) {
  function toggleItem(list: string[], item: string): string[] {
    return list.includes(item) ? list.filter((i) => i !== item) : [...list, item];
  }

  const canContinue =
    value.serviceTypes.length > 0 || value.talentRoles.length > 0 || value.equipmentNeeds.length > 0;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select services, talent, and equipment</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-medium mb-2">Services</h3>
          <div className="flex flex-wrap gap-2">
            {SERVICE_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() =>
                  onChange((prev) => ({ ...prev, serviceTypes: toggleItem(prev.serviceTypes, opt) }))
                }
                className={[
                  'px-3 py-1 rounded-full border text-sm',
                  value.serviceTypes.includes(opt)
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-transparent border-gray-300 dark:border-gray-700',
                ].join(' ')}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Talent</h3>
          <div className="flex flex-wrap gap-2">
            {TALENT_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() =>
                  onChange((prev) => ({ ...prev, talentRoles: toggleItem(prev.talentRoles, opt) }))
                }
                className={[
                  'px-3 py-1 rounded-full border text-sm',
                  value.talentRoles.includes(opt)
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-transparent border-gray-300 dark:border-gray-700',
                ].join(' ')}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Equipment</h3>
          <div className="flex flex-wrap gap-2">
            {EQUIPMENT_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() =>
                  onChange((prev) => ({ ...prev, equipmentNeeds: toggleItem(prev.equipmentNeeds, opt) }))
                }
                className={[
                  'px-3 py-1 rounded-full border text-sm',
                  value.equipmentNeeds.includes(opt)
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-transparent border-gray-300 dark:border-gray-700',
                ].join(' ')}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={onNext}
          disabled={!canContinue}
          className="px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
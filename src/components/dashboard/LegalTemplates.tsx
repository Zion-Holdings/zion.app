import React from 'react';

interface LegalTemplate {
  id: string;
  name: string;
  description: string;
}

const mockTemplates: LegalTemplate[] = [
  {
    id: 'nda',
    name: 'Non-Disclosure Agreement',
    description: 'Standard NDA for protecting confidential information during discussions with third parties.',
  },
  {
    id: 'co-founder-agreement',
    name: 'Co-founder Agreement',
    description: 'Agreement outlining equity, roles, responsibilities, and dispute resolution for co-founders.',
  },
  {
    id: 'employment-agreement',
    name: 'Employment Agreement',
    description: 'Standard contract for hiring new employees, detailing terms of employment.',
  },
  {
    id: 'privacy-policy',
    name: 'Privacy Policy',
    description: 'A template for website and app privacy policies, compliant with common regulations.',
  },
  {
    id: 'terms-of-service',
    name: 'Terms of Service',
    description: 'Standard terms of service agreement for users of your product or service.',
  },
];

const LegalTemplates: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Legal Templates</h2>
      <div className="space-y-6">
        {mockTemplates.map((template) => (
          <div key={template.id} className="border border-gray-200 p-6 rounded-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-medium text-gray-800 mb-2">{template.name}</h3>
            <p className="text-gray-600 mb-4">{template.description}</p>
            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-150">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalTemplates;

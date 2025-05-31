import React, { useState } from 'react';
import Link from 'next/link';

// Mocked initial weights. In a real app, these might be fetched from a config.
const initialWeights = {
  completionRate: 0.25,
  feedbackScore: 0.25,
  responseTime: 0.15,
  accountLongevity: 0.10,
  aiSentimentScore: 0.15,
  disputeFlags: 0.10,
};

// Define the structure for a weight setting
interface WeightSetting {
  key: keyof typeof initialWeights;
  label: string;
  description: string;
}

const weightSettingsConfig: WeightSetting[] = [
  { key: 'completionRate', label: 'Completion Rate Weight', description: 'Impact of project/task completion success.' },
  { key: 'feedbackScore', label: 'Feedback Score Weight', description: 'Impact of average user ratings/feedback.' },
  { key: 'responseTime', label: 'Response Time Weight', description: 'Impact of user responsiveness (lower is better).' },
  { key: 'accountLongevity', label: 'Account Longevity Weight', description: 'Impact of how long the account has been active.' },
  { key: 'aiSentimentScore', label: 'AI Sentiment Score Weight', description: 'Impact of AI-driven sentiment analysis of user interactions.' },
  { key: 'disputeFlags', label: 'Dispute Flags Weight', description: 'Impact of disputes or flags raised against the user (lower is better).' },
];


const AdminTrustSettingsPage: React.FC = () => {
  const [weights, setWeights] = useState(initialWeights);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWeights(prev => ({ ...prev, [name]: parseFloat(value) }));
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage(null);
    // Simulate API call
    console.log("Attempting to save weights:", weights);
    // Basic validation: Check if weights sum to 1 (or within a small tolerance)
    const totalWeight = Object.values(weights).reduce((sum, w) => sum + w, 0);
    if (Math.abs(totalWeight - 1.0) > 0.001) {
        setSaveMessage(`Error: Weights must sum to 1.0. Current sum: ${totalWeight.toFixed(3)}`);
        setIsSaving(false);
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
    setIsSaving(false);
    setSaveMessage("Settings saved successfully! (Note: This is a UI demo, backend logic not implemented).");
    console.log("Settings 'saved':", weights);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard: Trust Score Settings</h1>
        <p className="text-gray-600">Configure trust score calculation parameters and review system flags.</p>
      </header>

      {/* Weightings Adjustment UI Section */}
      <section className="mb-12 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Trust Score Component Weights</h2>
        <form onSubmit={handleSaveSettings}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {weightSettingsConfig.map(setting => (
              <div key={setting.key}>
                <label htmlFor={setting.key} className="block text-sm font-medium text-gray-700">
                  {setting.label}
                </label>
                <input
                  type="number"
                  name={setting.key}
                  id={setting.key}
                  value={weights[setting.key]}
                  onChange={handleWeightChange}
                  min="0"
                  max="1"
                  step="0.01"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <p className="mt-1 text-xs text-gray-500">{setting.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
            >
              {isSaving ? 'Saving...' : 'Save Settings'}
            </button>
            {saveMessage && (
              <p className={`mt-3 text-sm ${saveMessage.startsWith("Error:") ? 'text-red-600' : 'text-green-600'}`}>
                {saveMessage}
              </p>
            )}
             <p className="mt-2 text-xs text-gray-500">
                Current sum of weights: {Object.values(weights).reduce((sum, w) => sum + w, 0).toFixed(3)} (should ideally be 1.0)
            </p>
          </div>
        </form>
      </section>

      {/* Flagged Anomalies UI Section */}
      <section className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Flagged Anomalies & System Health</h2>
        <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
          <p className="text-gray-600 italic">
            [List of flagged anomalies will appear here. E.g., suspected rating manipulation, unusual activity patterns, copy/paste proposals, etc.]
          </p>
          <p className="mt-2 text-sm text-gray-500">
            This section will provide insights into potential system abuse or users requiring manual review. (Backend logic not implemented).
          </p>
        </div>
        <div className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50">
             <h3 className="text-lg font-medium text-gray-700 mb-2">Manual Review Queue</h3>
            <p className="text-gray-600 italic">
                [Users flagged for manual review by the system or admins will be listed here.]
            </p>
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500">
        Zion Admin Trust Management System
      </footer>
    </div>
  );
};

export default AdminTrustSettingsPage;

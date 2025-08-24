import React, { useState } from 'react';
import PricingSuggestionBox from '@/components/monetization/PricingSuggestionBox';
import axios from 'axios';

export type TalentRateRecommenderProps = {
  // Integrate into Resume/Rate section
  skills: string[];
  yearsExperience: number;
  location: string;
  onApplySuggestion?: (hourly: number, min: number, max: number) => void;
};

export default function TalentRateRecommender(props: TalentRateRecommenderProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestion, setSuggestion] = useState<{
    hourlyRate: number;
    min: number;
    max: number;
    confidence: 'Low' | 'Medium' | 'High';
    rationale: string;
  } | null>(null);

  async function fetchSuggestion() {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post('/api/pricing/talent', {
        skills: props.skills,
        yearsExperience: props.yearsExperience,
        location: props.location,
      });
      const s = res.data?.suggestion;
      if (s) {
        setSuggestion({ hourlyRate: s.hourlyRate, min: s.min, max: s.max, confidence: s.confidence, rationale: s.rationale });
      }
    } catch (e) {
      setError('Could not get suggestion');
    } finally {
      setLoading(false);
    }
  }

  function formatUSD(n: number) {
    return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  }

  const rangeText = suggestion ? `${formatUSD(suggestion.min)}–${formatUSD(suggestion.max)} (${formatUSD(suggestion.hourlyRate)}/hour)` : '';

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={fetchSuggestion}
        disabled={loading}
        className="inline-flex items-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-black disabled:opacity-50"
      >
        {loading ? 'Optimizing…' : 'Optimize Rate with AI'}
      </button>
      {error && <div className="text-sm text-red-600">{error}</div>}
      {suggestion && (
        <PricingSuggestionBox
          type="talent"
          rangeText={rangeText}
          confidence={suggestion.confidence}
          rationale={suggestion.rationale}
          onApply={() => props.onApplySuggestion?.(suggestion.hourlyRate, suggestion.min, suggestion.max)}
        />
      )}
    </div>
  );
}
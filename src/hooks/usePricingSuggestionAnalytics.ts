import { useState, useCallback } from 'react';

export interface PricingSuggestion {
  id: string;
  service: string;
  suggestedPrice: number;
  marketRange: string;
  confidence: number;
  timestamp: Date;
}

export function usePricingSuggestionAnalytics() {
  const [suggestions, setSuggestions] = useState<PricingSuggestion[]>([]);

  const addSuggestion = useCallback((suggestion: Omit<PricingSuggestion, 'id' | 'timestamp'>) => {
    const newSuggestion: PricingSuggestion = {
      ...suggestion,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
    };
    
    setSuggestions(prev => [...prev, newSuggestion]);
  }, []);

  const getSuggestionsByService = useCallback((service: string) => {
    return suggestions.filter(s => s.service === service);
  }, [suggestions]);

  const getAveragePrice = useCallback((service: string) => {
    const serviceSuggestions = getSuggestionsByService(service);
    if (serviceSuggestions.length === 0) return 0;
    
    const total = serviceSuggestions.reduce((sum, s) => sum + s.suggestedPrice, 0);
    return total / serviceSuggestions.length;
  }, [getSuggestionsByService]);

  const getConfidenceScore = useCallback((service: string) => {
    const serviceSuggestions = getSuggestionsByService(service);
    if (serviceSuggestions.length === 0) return 0;
    
    const totalConfidence = serviceSuggestions.reduce((sum, s) => sum + s.confidence, 0);
    return totalConfidence / serviceSuggestions.length;
  }, [getSuggestionsByService]);

  return {
    suggestions,
    addSuggestion,
    getSuggestionsByService,
    getAveragePrice,
    getConfidenceScore,
  };
}
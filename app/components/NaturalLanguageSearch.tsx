'use client';

import { useState } from 'react';

interface NLPService {
  id: string;
  title: string;
  description: string;
  category: string;
  industry?: string;
}

interface NaturalLanguageSearchProps {
  services: NLPService[];
  onSelect: (service: NLPService) => void;
}

// Intent mapping for natural language understanding
const INTENT_PATTERNS: Record<string, { pattern: RegExp[]; category: string; keywords: string[] }> = {
  'cost-reduction': {
    pattern: [/save/i, /reduce cost/i, /cut expense/i, /optimize cost/i, /cheaper/i],
    category: 'optimization',
    keywords: ['cost', 'save', 'reduce', 'optimize', 'cheap', 'affordable']
  },
  'automation': {
    pattern: [/automat/i, /robotic/i, /rpa/i, /workflow/i, /process/i],
    category: 'automation',
    keywords: ['automate', 'robotic', 'workflow', 'process', 'rpa']
  },
  'predictive': {
    pattern: [/predict/i, /forecast/i, /forecasting/i, /trend/i, /trend/i],
    category: 'analytics',
    keywords: ['predict', 'forecast', 'trend', 'analytics', 'insight']
  },
  'security': {
    pattern: [/security/i, /secure/i, /security/i, /threat/i, /breach/i],
    category: 'security',
    keywords: ['security', 'secure', 'threat', 'breach', 'protection']
  },
  'customer': {
    pattern: [/customer/i, /client/i, /user/i, /engagement/i, /retention/i],
    category: 'crm',
    keywords: ['customer', 'client', 'user', 'engagement', 'retention', 'experience']
  },
  'ai': {
    pattern: [/ai/i, /artificial intelligence/i, /machine learning/i, /ml/i],
    category: 'ai',
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'neural']
  },
  'cloud': {
    pattern: [/cloud/i, /aws/i, /azure/i, /gcp/i, /migration/i],
    category: 'cloud',
    keywords: ['cloud', 'aws', 'azure', 'gcp', 'migration', 'infrastructure']
  },
  'data': {
    pattern: [/data/i, /analytics/i, /business intelligence/i, /bi/i],
    category: 'data',
    keywords: ['data', 'analytics', 'business intelligence', 'bi', 'insights']
  }
};

export default function NaturalLanguageSearch({ services, onSelect }: NaturalLanguageSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<NLPService[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Parse natural language query to extract intent
  const parseQuery = (input: string): { intent: string; keywords: string[]; category: string } => {
    const lowerInput = input.toLowerCase();
    
    for (const [intent, config] of Object.entries(INTENT_PATTERNS)) {
      const matchesPattern = config.pattern.some(regex => regex.test(lowerInput));
      if (matchesPattern) {
        return {
          intent,
          keywords: config.keywords,
          category: config.category
        };
      }
    }
    
    // Extract keywords from the query
    const words = lowerInput.split(/\s+/).filter(w => w.length > 2);
    return {
      intent: 'general',
      keywords: words,
      category: 'all'
    };
  };

  // Search services based on parsed intent
  const searchServices = (input: string) => {
    if (!input.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    const { intent, keywords, category } = parseQuery(input);
    
    // Simulate AI-powered matching (in production, this would call an LLM API)
    const matchedServices = services
      .map(service => {
        let score = 0;
        const serviceText = `${service.title} ${service.description} ${service.category}`.toLowerCase();
        
        // Intent matching
        if (intent !== 'general') {
          const intentConfig = INTENT_PATTERNS[intent];
          if (intentConfig.keywords.some(k => serviceText.includes(k))) {
            score += 10;
          }
        }
        
        // Keyword matching
        keywords.forEach(keyword => {
          if (serviceText.includes(keyword)) {
            score += 3;
          }
        });
        
        // Category boost
        if (category !== 'all' && service.category.includes(category)) {
          score += 5;
        }
        
        return { ...service, _score: score };
      })
      .filter(s => s._score > 0)
      .sort((a, b) => (b as any)._score - (a as any)._score)
      .slice(0, 6);
    
    setTimeout(() => {
      setResults(matchedServices);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="What do you need? (e.g., 'reduce customer churn', 'automate billing', 'predict maintenance')"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            searchServices(e.target.value);
          }}
          className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        {isLoading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400">
            <div className="animate-spin">⚡</div>
          </div>
        )}
      </div>
      
      {/* Results */}
      {results.length > 0 && (
        <div className="mt-4 p-4 bg-slate-900/40 rounded-xl border border-slate-800">
          <h4 className="text-sm font-semibold text-slate-300 mb-3">Recommended for you:</h4>
          <div className="space-y-2">
            {results.map((service) => (
              <button
                key={service.id}
                onClick={() => onSelect(service)}
                className="w-full text-left p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700 transition-colors"
              >
                <div className="font-medium text-white text-sm">{service.title}</div>
                <div className="text-xs text-slate-400 mt-1">{service.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
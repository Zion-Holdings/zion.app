'use client';

import { useState } from 'react';

// Service templates for content generation
const SERVICE_TEMPLATES = [
  {
    category: 'ai',
    namePattern: 'AI {domain} {capability}',
    descriptionPattern: 'AI-powered {domain} solution for {useCase}. {benefit}.',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    benefits: ['Benefit 1', 'Benefit 2'],
  },
  {
    category: 'automation',
    namePattern: '{Domain} Automation Suite',
    descriptionPattern: 'Automated {domain} solution that streamlines {process} with AI-driven optimization.',
    features: ['Automation 1', 'Automation 2', 'Automation 3'],
    benefits: ['Save time', 'Reduce errors', 'Increase efficiency'],
  },
  {
    category: 'data',
    namePattern: '{Domain} Analytics Platform',
    descriptionPattern: 'Comprehensive analytics solution for {domain} that delivers actionable insights.',
    features: ['Analytics 1', 'Analytics 2', 'Analytics 3'],
    benefits: ['Data-driven decisions', 'Real-time insights', 'Predictive analytics'],
  },
];

// Industry use cases
const USE_CASES = [
  'customer relationship management',
  'supply chain optimization',
  'financial reporting',
  'quality control',
  'inventory management',
  'market research',
  'risk assessment',
  'compliance monitoring',
  'employee onboarding',
  'customer support',
  'sales forecasting',
  'inventory tracking',
  'warranty management',
  'field service scheduling',
  'document processing',
];

interface GeneratedService {
  id: string;
  title: string;
  description: string;
  category: string;
  industry: string;
  features: string[];
  benefits: string[];
  pricing: { basic: string; pro: string; enterprise: string };
}

export default function AIServiceGenerator() {
  const [industry, setIndustry] = useState('');
  const [domain, setDomain] = useState('');
  const [generatedService, setGeneratedService] = useState<GeneratedService | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateService = () => {
    if (!industry || !domain) return;
    
    setIsGenerating(true);
    
    // Select a random template
    const template = SERVICE_TEMPLATES[Math.floor(Math.random() * SERVICE_TEMPLATES.length)];
    
    // Generate service name
    const title = template.namePattern
      .replace('{domain}', domain)
      .replace('{Domain}', domain.charAt(0).toUpperCase() + domain.slice(1))
      .replace('{capability}', ['AI', 'ML', 'NLP', 'Computer Vision', 'Predictive Analytics'][Math.floor(Math.random() * 5)]);
    
    // Generate description
    const useCase = USE_CASES[Math.floor(Math.random() * USE_CASES.length)];
    const description = template.descriptionPattern
      .replace('{domain}', domain)
      .replace('{Domain}', domain.charAt(0).toUpperCase() + domain.slice(1))
      .replace('{useCase}', useCase)
      .replace('{benefit}', 'Deliver measurable ROI with minimal human intervention.');
    
    // Generate features
    const features = template.features.map((f, i) => 
      f.replace('1', (i + 1).toString())
    );
    
    // Generate benefits
    const benefits = template.benefits;
    
    // Generate pricing
    const basePrice = Math.floor(Math.random() * 500) + 199;
    const pricing = {
      basic: `$${basePrice}`,
      pro: `$${(basePrice * 2.5).toFixed(0)}`,
      enterprise: `$${(basePrice * 5).toFixed(0)}`
    };
    
    const newService: GeneratedService = {
      id: `generated-${Date.now()}`,
      title,
      description,
      category: template.category,
      industry,
      features,
      benefits,
      pricing
    };
    
    setTimeout(() => {
      setGeneratedService(newService);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
      <h3 className="text-xl font-bold text-white mb-4">🚀 AI Service Generator</h3>
      <p className="text-slate-400 text-sm mb-4">
        Generate new service ideas based on industry needs and AI capabilities.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-xs text-slate-500 mb-2 block">Industry</label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select industry...</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Retail">Retail</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Energy">Energy</option>
            <option value="Education">Education</option>
            <option value="Logistics">Logistics</option>
            <option value="Media">Media & Entertainment</option>
            <option value="Legal">Legal</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-500 mb-2 block">Domain</label>
          <input
            type="text"
            placeholder="e.g., customer service, inventory, billing..."
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>
      
      <button
        onClick={generateService}
        disabled={!industry || !domain || isGenerating}
        className={`w-full py-2.5 rounded-xl font-medium transition-all ${
          !industry || !domain || isGenerating
            ? 'bg-slate-800/40 text-slate-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-cyan-600 to-emerald-600 text-white hover:from-cyan-500 hover:to-emerald-500'
        }`}
      >
        {isGenerating ? 'Generating...' : 'Generate Service Idea'}
      </button>
      
      {/* Generated Service Preview */}
      {generatedService && (
        <div className="mt-6 p-4 bg-slate-800/40 rounded-xl border border-cyan-500/20">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Generated Service</h4>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-slate-400">Name: </span>
              <span className="text-white font-medium">{generatedService.title}</span>
            </div>
            <div>
              <span className="text-slate-400">Category: </span>
              <span className="text-purple-300">{generatedService.category}</span>
            </div>
            <div>
              <span className="text-slate-400">Industry: </span>
              <span className="text-emerald-300">{generatedService.industry}</span>
            </div>
            <div>
              <span className="text-slate-400">Starting Price: </span>
              <span className="text-yellow-300">{generatedService.pricing.basic}/mo</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
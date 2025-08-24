"use client";

import { useState } from "react";
import { FeatureKeys } from "@/lib/zod";

export default function AdminDeployPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    instanceName: '',
    domain: '',
    subdomain: '',
    vertical: 'GENERAL',
    defaultLanguage: 'en',
    tokenSystem: 'SHARED',
    governanceType: 'ADMIN',
    region: '',
    country: '',
    features: {} as Record<string, boolean>,
    addons: {
      paymentGateway: '',
      sovereignTreasury: false,
      dualGovernance: false,
      aiModeration: false,
      affiliatePanel: false,
    },
  });

  const totalSteps = 4;

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureToggle = (feature: string, enabled: boolean) => {
    setFormData(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [feature]: enabled
      }
    }));
  };

  const handleAddonToggle = (addon: string, enabled: boolean) => {
    setFormData(prev => ({
      ...prev,
      addons: {
        ...prev.addons,
        [addon]: enabled
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const payload = {
      instanceName: formData.instanceName,
      domain: formData.domain || undefined,
      subdomain: formData.subdomain || undefined,
      vertical: formData.vertical,
      defaultLanguage: formData.defaultLanguage,
      tokenSystem: formData.tokenSystem,
      governanceType: formData.governanceType,
      region: formData.region || undefined,
      country: formData.country || undefined,
      features: formData.features,
      addons: formData.addons,
    };

    try {
      const res = await fetch("/api/deploy", { 
        method: "POST", 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload) 
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        setMessageType('error');
        setMessage(data.error || "Deployment failed");
        return;
      }
      
      setMessageType('success');
      setMessage(`Deployment queued successfully! Deployment ID: ${data.deploymentId}`);
      setFormData({
        instanceName: '',
        domain: '',
        subdomain: '',
        vertical: 'GENERAL',
        defaultLanguage: 'en',
        tokenSystem: 'SHARED',
        governanceType: 'ADMIN',
        region: '',
        country: '',
        features: {},
        addons: {
          paymentGateway: '',
          sovereignTreasury: false,
          dualGovernance: false,
          aiModeration: false,
          affiliatePanel: false,
        },
      });
      setCurrentStep(1);
    } catch (error) {
      setMessageType('error');
      setMessage("Network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              i + 1 < currentStep 
                ? 'bg-green-500 text-white' 
                : i + 1 === currentStep 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-600 text-gray-300'
            }`}>
              {i + 1 < currentStep ? '✓' : i + 1}
            </div>
            {i < totalSteps - 1 && (
              <div className={`w-16 h-1 mx-2 ${
                i + 1 < currentStep ? 'bg-green-500' : 'bg-gray-600'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <span className="text-sm text-gray-400">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Basic Configuration</h3>
        <p className="text-gray-400 mb-6">Set up the fundamental details for your digital economy instance.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Instance Name *</label>
          <input
            type="text"
            value={formData.instanceName}
            onChange={(e) => handleInputChange('instanceName', e.target.value)}
            required
            className="input-field"
            placeholder="My Digital Economy"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Vertical</label>
          <select
            value={formData.vertical}
            onChange={(e) => handleInputChange('vertical', e.target.value)}
            className="input-field"
          >
            <option value="GENERAL">General</option>
            <option value="HEALTH">Healthcare</option>
            <option value="EDUCATION">Education</option>
            <option value="LAW">Legal</option>
            <option value="GOV">Government</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Domain</label>
          <input
            type="text"
            value={formData.domain}
            onChange={(e) => handleInputChange('domain', e.target.value)}
            className="input-field"
            placeholder="zion.example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Subdomain</label>
          <input
            type="text"
            value={formData.subdomain}
            onChange={(e) => handleInputChange('subdomain', e.target.value)}
            className="input-field"
            placeholder="latam"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Governance & Token Settings</h3>
        <p className="text-gray-400 mb-6">Configure how your economy will be governed and managed.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Token System</label>
          <select
            value={formData.tokenSystem}
            onChange={(e) => handleInputChange('tokenSystem', e.target.value)}
            className="input-field"
          >
            <option value="SHARED">ZION$ Shared</option>
            <option value="LOCAL">Local Tokens</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Governance Type</label>
          <select
            value={formData.governanceType}
            onChange={(e) => handleInputChange('governanceType', e.target.value)}
            className="input-field"
          >
            <option value="ADMIN">Admin Control</option>
            <option value="DAO_LITE">DAO-lite</option>
            <option value="DAO_FULL">Full DAO</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Region</label>
          <input
            type="text"
            value={formData.region}
            onChange={(e) => handleInputChange('region', e.target.value)}
            className="input-field"
            placeholder="North America"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Country</label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            className="input-field"
            placeholder="United States"
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Core Features</h3>
        <p className="text-gray-400 mb-6">Select the features you want to enable for your economy.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FeatureKeys.map((feature) => (
          <label key={feature} className="flex items-center space-x-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer">
            <input
              type="checkbox"
              checked={formData.features[feature] || false}
              onChange={(e) => handleFeatureToggle(feature, e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <div>
              <span className="font-medium">{labelFor(feature)}</span>
              <p className="text-sm text-gray-400">{getFeatureDescription(feature)}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Optional Add-ons</h3>
        <p className="text-gray-400 mb-6">Enhance your economy with additional capabilities.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Payment Gateway</label>
          <select
            value={formData.addons.paymentGateway}
            onChange={(e) => handleInputChange('addons', { ...formData.addons, paymentGateway: e.target.value })}
            className="input-field"
          >
            <option value="">None</option>
            <option value="stripe">Stripe</option>
            <option value="coinbase-commerce">Coinbase Commerce</option>
          </select>
        </div>

        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.addons.sovereignTreasury}
              onChange={(e) => handleAddonToggle('sovereignTreasury', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span>Sovereign DAO Treasury</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.addons.dualGovernance}
              onChange={(e) => handleAddonToggle('dualGovernance', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span>Dual Governance (Local + Global)</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.addons.aiModeration}
              onChange={(e) => handleAddonToggle('aiModeration', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span>AI Moderation System</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.addons.affiliatePanel}
              onChange={(e) => handleAddonToggle('affiliatePanel', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span>Government/Institution Affiliate Panel</span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      default: return renderStep1();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Deploy Your Digital Economy</h1>
        <p className="text-xl text-gray-400">
          Configure and launch your sovereign AI-powered digital economy in minutes
        </p>
      </div>

      {renderStepIndicator()}

      <form onSubmit={onSubmit} className="space-y-8">
        <div className="card">
          {renderCurrentStep()}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn-primary"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="btn-primary disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Deploying...</span>
                </div>
              ) : (
                'Deploy Instance'
              )}
            </button>
          )}
        </div>

        {message && (
          <div className={`p-4 rounded-lg ${
            messageType === 'success' 
              ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
              : messageType === 'error'
              ? 'bg-red-500/20 border border-red-500/30 text-red-400'
              : 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
          }`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}

function labelFor(key: string) {
  switch (key) {
    case "marketplace": return "Marketplace (Jobs, Talent, Projects)";
    case "zion_gpt": return "ZionGPT Core";
    case "resume_ai": return "Resume Builder + Proposal AI";
    case "token_rewards": return "Token system + rewards";
    case "onchain_contracts": return "On-chain contract builder";
    case "kyc_aml": return "KYC/AML + ID verification";
    case "dao_voting": return "DAO proposal voting";
    case "incubator_grants": return "Incubator + Grants";
    case "academy": return "Zion Academy";
    case "partner_api": return "API access for partners";
    case "regional_dashboards": return "Regional/institutional dashboards";
    case "vendor_plugin": return "White-label vendor plugin";
    case "web3_login": return "Web3 login + DID";
    case "multi_currency": return "Multi-currency support";
    default: return key;
  }
}

function getFeatureDescription(key: string) {
  switch (key) {
    case "marketplace": return "Complete marketplace for jobs, talent, and projects";
    case "zion_gpt": return "Core AI assistant for your economy";
    case "resume_ai": return "AI-powered resume building and proposal generation";
    case "token_rewards": return "Token-based reward and incentive system";
    case "onchain_contracts": return "Smart contract builder and management";
    case "kyc_aml": return "Identity verification and compliance";
    case "dao_voting": return "Decentralized governance and voting";
    case "incubator_grants": return "Startup incubation and grant management";
    case "academy": return "Educational platform and training";
    case "partner_api": return "API access for third-party integrations";
    case "regional_dashboards": return "Regional and institutional analytics";
    case "vendor_plugin": return "White-label solutions for vendors";
    case "web3_login": return "Web3 wallet and DID authentication";
    case "multi_currency": return "Support for multiple currencies";
    default: return "Core platform feature";
  }
}
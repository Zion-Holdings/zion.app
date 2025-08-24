"use client";

import { useState } from "react";
import { FeatureKeys } from "@/lib/zod";
import { 
  Rocket, 
  Globe, 
  Settings, 
  Shield, 
  Users, 
  CreditCard,
  Building2,
  Languages,
  Coins,
  Crown,
  MapPin,
  Flag,
  CheckCircle,
  AlertCircle,
  Play,
  Zap,
  Sparkles
} from "lucide-react";

export default function AdminDeployPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    
    try {
      const formData = new FormData(event.currentTarget);
      const features: Record<string, boolean> = {};
      FeatureKeys.forEach((k) => (features[k] = formData.get(k) === "on"));

      const payload = {
        instanceName: String(formData.get("instanceName") || ""),
        domain: String(formData.get("domain") || "" ) || undefined,
        subdomain: String(formData.get("subdomain") || "" ) || undefined,
        vertical: String(formData.get("vertical") || "GENERAL"),
        defaultLanguage: String(formData.get("defaultLanguage") || "en"),
        tokenSystem: String(formData.get("tokenSystem") || "SHARED"),
        governanceType: String(formData.get("governanceType") || "ADMIN"),
        region: String(formData.get("region") || "") || undefined,
        country: String(formData.get("country") || "") || undefined,
        features,
        addons: {
          paymentGateway: String(formData.get("paymentGateway") || "") || undefined,
          sovereignTreasury: formData.get("sovereignTreasury") === "on",
          dualGovernance: formData.get("dualGovernance") === "on",
          aiModeration: formData.get("aiModeration") === "on",
          affiliatePanel: formData.get("affiliatePanel") === "on",
        },
      };

      const res = await fetch("/api/deploy", { method: "POST", body: JSON.stringify(payload) });
      const data = await res.json();
      
      if (!res.ok) {
        setMessageType('error');
        setMessage(data.error || "Deployment failed");
        return;
      }
      
      setMessageType('success');
      setMessage(`✅ Deployment queued successfully! Deployment ID: ${data.deploymentId}`);
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setMessageType('error');
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const getVerticalIcon = (vertical: string) => {
    switch (vertical) {
      case "HEALTH": return <Shield className="w-5 h-5 text-blue-400" />;
      case "EDUCATION": return <Building2 className="w-5 h-5 text-green-400" />;
      case "LAW": return <Shield className="w-5 h-5 text-purple-400" />;
      case "GOV": return <Users className="w-5 h-5 text-red-400" />;
      default: return <Globe className="w-5 h-5 text-gray-400" />;
    }
  };

  const getGovernanceIcon = (type: string) => {
    switch (type) {
      case "ADMIN": return <Crown className="w-5 h-5 text-yellow-400" />;
      case "DAO_LITE": return <Users className="w-5 h-5 text-blue-400" />;
      case "DAO_FULL": return <Zap className="w-5 h-5 text-purple-400" />;
      default: return <Crown className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Unified Deployment</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Launch your sovereign AI-powered digital economy with advanced configuration options
        </p>
      </div>

      {/* Form */}
      <div className="card max-w-6xl mx-auto">
        <form onSubmit={onSubmit} className="space-y-8">
          {/* Basic Configuration */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-2">
              🚀 Basic Configuration
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Instance Name *
                  <input 
                    name="instanceName" 
                    required 
                    className="input-field mt-2" 
                    placeholder="Enter instance name"
                  />
                </label>
              </div>
              
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Vertical
                  <select name="vertical" className="select-field mt-2">
                    <option value="GENERAL">General</option>
                    <option value="HEALTH">Healthcare</option>
                    <option value="EDUCATION">Education</option>
                    <option value="LAW">Legal</option>
                    <option value="GOV">Government</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Domain
                  <input 
                    name="domain" 
                    className="input-field mt-2" 
                    placeholder="zion.example.com"
                  />
                </label>
              </div>
              
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Subdomain
                  <input 
                    name="subdomain" 
                    className="input-field mt-2" 
                    placeholder="latam"
                />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Default Language
                  <input 
                    name="defaultLanguage" 
                    defaultValue="en" 
                    className="input-field mt-2"
                  />
                </label>
              </div>
              
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Token System
                  <select name="tokenSystem" className="select-field mt-2">
                    <option value="SHARED">ZION$ Shared</option>
                    <option value="LOCAL">Local</option>
                  </select>
                </label>
              </div>
              
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Governance Type
                  <select name="governanceType" className="select-field mt-2">
                    <option value="ADMIN">Admin</option>
                    <option value="DAO_LITE">DAO-lite</option>
                    <option value="DAO_FULL">Full DAO</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Region
                  <input 
                    name="region" 
                    className="input-field mt-2" 
                    placeholder="North America"
                  />
                </label>
              </div>
              
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Country
                  <input 
                    name="country" 
                    className="input-field mt-2" 
                    placeholder="United States"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Feature Toggles */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-2">
              ⚡ Core Features
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FeatureKeys.map((k) => (
                <label key={k} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/8 transition-colors cursor-pointer">
                  <input type="checkbox" name={k} className="checkbox-field" />
                  <span className="text-white/90 text-sm">{labelFor(k)}</span>
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-white/80 mb-2">Subdomain</span>
                  <input 
                    name="subdomain" 
                    placeholder="latam" 
                    className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 text-white placeholder-white/40 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200" 
                  />
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="block text-sm font-medium text-white/80 mb-2">Vertical</span>
                <div className="relative">
                  <select 
                    name="vertical" 
                    className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 appearance-none"
                  >
                    <option>GENERAL</option>
                    <option>HEALTH</option>
                    <option>EDUCATION</option>
                    <option>LAW</option>
                    <option>GOV</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </label>
              
              <label className="block">
                <span className="block text-sm font-medium text-white/80 mb-2">Default Language</span>
                <input 
                  name="defaultLanguage" 
                  defaultValue="en" 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200" 
                />
              </label>
            </div>
          </section>
        </div>

        {/* Governance & Token System Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Crown className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-2xl font-semibold">Governance & Economy</h2>
          </div>

          {/* Optional Add-ons */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-2">
              🎯 Optional Add-ons
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <label className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/8 transition-colors cursor-pointer">
                <input type="checkbox" name="sovereignTreasury" className="checkbox-field" />
                <span className="text-white/90 text-sm">Sovereign DAO treasury</span>
              </label>
              
              <label className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/8 transition-colors cursor-pointer">
                <input type="checkbox" name="dualGovernance" className="checkbox-field" />
                <span className="text-white/90 text-sm">Dual governance (local + global)</span>
              </label>
              
              <label className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/8 transition-colors cursor-pointer">
                <input type="checkbox" name="aiModeration" className="checkbox-field" />
                <span className="text-white/90 text-sm">AI moderation system</span>
              </label>
              
              <label className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/8 transition-colors cursor-pointer">
                <input type="checkbox" name="affiliatePanel" className="checkbox-field" />
                <span className="text-white/90 text-sm">Gov/institution affiliate panel</span>
              </label>
            </div>

            <div className="space-y-2">
              <label className="block text-white font-medium">
                Payment Gateway
                <select name="paymentGateway" className="select-field mt-2">
                  <option value="">None</option>
                  <option value="stripe">Stripe</option>
                  <option value="coinbase-commerce">Coinbase Commerce</option>
                </select>
              </label>
            </div>
          </div>

          {/* Submit Section */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                disabled={loading} 
                className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="spinner w-5 h-5"></div>
                    <span>Deploying...</span>
                  </div>
                ) : (
                  "🚀 Deploy Instance"
                )}
              </button>
              
              {message && (
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  messageType === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  messageType === 'error' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                  'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  <span>{message}</span>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
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
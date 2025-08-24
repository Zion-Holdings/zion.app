"use client";

import { useState } from "react";
import { FeatureKeys } from "@/lib/zod";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function AdminDeployPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    
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

    try {
      const res = await fetch("/api/deploy", { method: "POST", body: JSON.stringify(payload) });
      const data = await res.json();
      
      if (!res.ok) {
        setMessageType('error');
        setMessage(data.error || "Deployment failed");
        return;
      }
      
      setMessageType('success');
      setMessage(`✅ Deployment queued successfully! ID: ${data.deploymentId}`);
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setMessageType('error');
      setMessage("Network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">🚀 Launch Your Digital Economy</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Configure and deploy your sovereign AI-powered digital economy with our unified deployment protocol.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-8">
          {/* Basic Configuration */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">⚙️</span>
              Basic Configuration
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Instance Name *
                </label>
                <input 
                  name="instanceName" 
                  required 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="My Digital Economy"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Vertical
                </label>
                <select name="vertical" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
                  <option value="GENERAL">General</option>
                  <option value="HEALTH">Healthcare</option>
                  <option value="EDUCATION">Education</option>
                  <option value="LAW">Legal</option>
                  <option value="GOV">Government</option>
                  <option value="FINANCE">Finance</option>
                  <option value="TECH">Technology</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Domain
                </label>
                <input 
                  name="domain" 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="zion.example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Subdomain
                </label>
                <input 
                  name="subdomain" 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="latam"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Default Language
                </label>
                <input 
                  name="defaultLanguage" 
                  defaultValue="en" 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Region
                </label>
                <input 
                  name="region" 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="North America"
                />
              </div>
            </div>
          </div>

          {/* Economy Settings */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white text-sm">💰</span>
              Economy Settings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Token System
                </label>
                <select name="tokenSystem" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
                  <option value="SHARED">ZION$ Shared</option>
                  <option value="LOCAL">Local Token</option>
                  <option value="HYBRID">Hybrid System</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Governance Type
                </label>
                <select name="governanceType" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
                  <option value="ADMIN">Admin Control</option>
                  <option value="DAO_LITE">DAO-lite</option>
                  <option value="DAO_FULL">Full DAO</option>
                  <option value="HYBRID">Hybrid Governance</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Country
                </label>
                <input 
                  name="country" 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="United States"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Payment Gateway
                </label>
                <select name="paymentGateway" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
                  <option value="">None</option>
                  <option value="stripe">Stripe</option>
                  <option value="coinbase-commerce">Coinbase Commerce</option>
                  <option value="paypal">PayPal</option>
                  <option value="crypto">Crypto Payments</option>
                </select>
              </div>
            </div>
          </div>

          {/* Feature Toggles */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-sm">🔧</span>
              Core Features
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FeatureKeys.map((k) => (
                <label key={k} className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">
                  <input type="checkbox" name={k} className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />
                  <div>
                    <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                      {labelFor(k)}
                    </div>
                    <div className="text-sm text-white/60">
                      {getFeatureDescription(k)}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white text-sm">🚀</span>
              Premium Add-ons
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">
                <input type="checkbox" name="sovereignTreasury" className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />
                <div>
                  <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    Sovereign DAO Treasury
                  </div>
                  <div className="text-sm text-white/60">
                    Manage community funds with transparency
                  </div>
                </div>
              </label>
              
              <label className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">
                <input type="checkbox" name="dualGovernance" className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />
                <div>
                  <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    Dual Governance
                  </div>
                  <div className="text-sm text-white/60">
                    Local + global decision making
                  </div>
                </div>
              </label>
              
              <label className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">
                <input type="checkbox" name="aiModeration" className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />
                <div>
                  <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    AI Moderation System
                  </div>
                  <div className="text-sm text-white/60">
                    Automated content and behavior monitoring
                  </div>
                </div>
              </label>
              
              <label className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">
                <input type="checkbox" name="affiliatePanel" className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />
                <div>
                  <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    Government Affiliate Panel
                  </div>
                  <div className="text-sm text-white/60">
                    Institutional partnership management
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Submit Section */}
          <div className="text-center">
            <button 
              disabled={loading} 
              className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed hover-lift"
            >
              {loading ? (
                <LoadingSpinner size="sm" text="Deploying..." />
              ) : (
                "🚀 Deploy Instance"
              )}
            </button>
            
            {message && (
              <div className={`mt-6 p-4 rounded-lg ${
                messageType === 'success' 
                  ? 'bg-green-900/20 border border-green-500/20 text-green-400' 
                  : 'bg-red-900/20 border border-red-500/20 text-red-400'
              }`}>
                {message}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

function labelFor(key: string) {
  switch (key) {
    case "marketplace": return "Marketplace";
    case "zion_gpt": return "ZionGPT Core";
    case "resume_ai": return "Resume AI";
    case "token_rewards": return "Token System";
    case "onchain_contracts": return "Smart Contracts";
    case "kyc_aml": return "KYC/AML";
    case "dao_voting": return "DAO Voting";
    case "incubator_grants": return "Incubator";
    case "academy": return "Zion Academy";
    case "partner_api": return "Partner API";
    case "regional_dashboards": return "Regional Dashboards";
    case "vendor_plugin": return "Vendor Plugin";
    case "web3_login": return "Web3 Login";
    case "multi_currency": return "Multi-Currency";
    default: return key;
  }
}

function getFeatureDescription(key: string) {
  switch (key) {
    case "marketplace": return "Jobs, talent, and project marketplace";
    case "zion_gpt": return "Core AI intelligence system";
    case "resume_ai": return "AI-powered resume and proposal builder";
    case "token_rewards": return "Token system with rewards";
    case "onchain_contracts": return "Smart contract builder";
    case "kyc_aml": return "Identity verification and compliance";
    case "dao_voting": return "Proposal and voting system";
    case "incubator_grants": return "Startup incubation and funding";
    case "academy": return "Educational platform";
    case "partner_api": return "API access for partners";
    case "regional_dashboards": return "Regional and institutional views";
    case "vendor_plugin": return "White-label vendor solutions";
    case "web3_login": return "Web3 authentication and DID";
    case "multi_currency": return "Multi-currency support";
    default: return "Core platform feature";
  }
}
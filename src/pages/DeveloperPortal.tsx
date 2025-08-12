
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react';








import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ApiKeysManager } from "@/components/developers/ApiKeysManager";
import { WebhooksManager } from "@/components/developers/WebhooksManager";
import { ApiDocumentation } from "@/components/developers/ApiDocumentation";
import { ApiLogs } from "@/components/developers/ApiLogs";

interface TabDefinition {
  id: string;
  label: string;
  icon: LucideIcon;
}

export function DeveloperPortal() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");
  
  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
    { id: "logs", label: "Logs", icon: List },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Terminal className="mr-3" size={32} />
          Developer Portal
        </h1>
        <p className="text-zinc-400 mt-2">
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} className="mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Tab content */}
      <div>
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}
      </div>
    </div>
  );
}

export default function ProtectedDeveloperPortal() {
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
  );
}

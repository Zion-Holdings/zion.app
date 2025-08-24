"use client";

import { useState } from "react";
import { 
  Rocket, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Activity,
  Play,
  Eye,
  Settings,
  X,
  ArrowRight,
  Globe,
  Shield,
  Building2,
  Users,
  Zap
} from "lucide-react";

interface DeploymentUpdate {
  id: string;
  type: 'deployment_started' | 'deployment_completed' | 'deployment_failed' | 'instance_ready' | 'update_available';
  title: string;
  message: string;
  timestamp: string;
  instanceName?: string;
  vertical?: string;
  governanceType?: string;
  domain?: string;
  progress?: number;
  actions?: {
    label: string;
    action: 'deploy' | 'view' | 'retry' | 'configure' | 'dismiss';
    href?: string;
  }[];
}

interface DeploymentNotificationProps {
  updates: DeploymentUpdate[];
  onDismiss?: (id: string) => void;
  onAction?: (id: string, action: string) => void;
}

export default function DeploymentNotification({ 
  updates, 
  onDismiss, 
  onAction 
}: DeploymentNotificationProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'deployment_started': return <Activity className="w-5 h-5 text-blue-400" />;
      case 'deployment_completed': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'deployment_failed': return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'instance_ready': return <Rocket className="w-5 h-5 text-purple-400" />;
      case 'update_available': return <Clock className="w-5 h-5 text-yellow-400" />;
      default: return <Rocket className="w-5 h-5 text-gray-400" />;
    }
  };

  const getUpdateColor = (type: string) => {
    switch (type) {
      case 'deployment_started': return 'border-blue-500/30 bg-blue-500/10';
      case 'deployment_completed': return 'border-green-500/30 bg-green-500/10';
      case 'deployment_failed': return 'border-red-500/30 bg-red-500/10';
      case 'instance_ready': return 'border-purple-500/30 bg-purple-500/10';
      case 'update_available': return 'border-yellow-500/30 bg-yellow-500/10';
      default: return 'border-white/20 bg-white/5';
    }
  };

  const getVerticalIcon = (vertical: string) => {
    switch (vertical) {
      case "HEALTH": return <Shield className="w-4 h-4 text-blue-400" />;
      case "EDUCATION": return <Building2 className="w-4 h-4 text-green-400" />;
      case "LAW": return <Shield className="w-4 h-4 text-purple-400" />;
      case "GOV": return <Users className="w-4 h-4 text-red-400" />;
      default: return <Globe className="w-4 h-4 text-gray-400" />;
    }
  };

  const getGovernanceIcon = (type: string) => {
    switch (type) {
      case "ADMIN": return <Users className="w-4 h-4 text-yellow-400" />;
      case "DAO_LITE": return <Users className="w-4 h-4 text-blue-400" />;
      case "DAO_FULL": return <Zap className="w-4 h-4 text-purple-400" />;
      default: return <Users className="w-4 h-4 text-gray-400" />;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  const handleAction = (updateId: string, action: string) => {
    if (onAction) {
      onAction(updateId, action);
    }
  };

  if (updates.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-md">
      {updates.map((update) => (
        <div
          key={update.id}
          className={`group relative backdrop-blur-sm rounded-xl border p-4 transition-all duration-300 hover:shadow-lg ${getUpdateColor(update.type)}`}
        >
          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 bg-white/20 rounded-lg">
              {getUpdateIcon(update.type)}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white text-sm mb-1">
                {update.title}
              </h4>
              <p className="text-white/80 text-xs leading-relaxed">
                {update.message}
              </p>
            </div>
            <button
              onClick={() => onDismiss?.(update.id)}
              className="p-1 text-white/60 hover:text-white/80 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Instance Details (if available) */}
          {update.instanceName && (
            <div className="mb-3 p-3 bg-white/10 rounded-lg border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 bg-white/20 rounded">
                  {getVerticalIcon(update.vertical || 'GENERAL')}
                </div>
                <span className="font-medium text-white text-sm">
                  {update.instanceName}
                </span>
              </div>
              
              <div className="flex items-center gap-3 text-xs text-white/70">
                {update.vertical && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10">
                    {update.vertical}
                  </span>
                )}
                {update.governanceType && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                    {update.governanceType}
                  </span>
                )}
                {update.domain && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-300 font-mono">
                    {update.domain}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Progress Bar (for deployment updates) */}
          {update.progress !== undefined && (
            <div className="mb-3 space-y-2">
              <div className="flex justify-between text-xs text-white/70">
                <span>Deployment Progress</span>
                <span>{update.progress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-blue-400 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${update.progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          {update.actions && update.actions.length > 0 && (
            <div className="flex gap-2 pt-2 border-t border-white/20">
              {update.actions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleAction(update.id, action.action)}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                    action.action === 'deploy' || action.action === 'retry'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : action.action === 'view'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-white/20 hover:bg-white/30 text-white/80'
                  }`}
                >
                  {action.action === 'deploy' && <Play className="w-3 h-3" />}
                  {action.action === 'view' && <Eye className="w-3 h-3" />}
                  {action.action === 'retry' && <Rocket className="w-3 h-3" />}
                  {action.action === 'configure' && <Settings className="w-3 h-3" />}
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Timestamp */}
          <div className="absolute bottom-2 right-4 text-xs text-white/60">
            {formatTimestamp(update.timestamp)}
          </div>
        </div>
      ))}
    </div>
  );
}

// Example usage with mock data
export function DeploymentNotificationExample() {
  const [updates, setUpdates] = useState<DeploymentUpdate[]>([
    {
      id: "1",
      type: "deployment_started",
      title: "Deployment Started",
      message: "Zion Health Network is now being deployed to production",
      timestamp: new Date().toISOString(),
      instanceName: "Zion Health Network",
      vertical: "HEALTH",
      governanceType: "DAO_FULL",
      domain: "health.zion.network",
      progress: 25,
      actions: [
        { label: "View Progress", action: "view", href: "/admin/deployments" },
        { label: "Configure", action: "configure", href: "/admin/instances" }
      ]
    },
    {
      id: "2",
      type: "instance_ready",
      title: "Instance Ready",
      message: "EduDAO Academy has been successfully deployed and is now live",
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      instanceName: "EduDAO Academy",
      vertical: "EDUCATION",
      governanceType: "DAO_LITE",
      domain: "edu.zion.network",
      actions: [
        { label: "View Instance", action: "view", href: "/admin/instances" },
        { label: "Manage", action: "configure", href: "/admin/instances" }
      ]
    }
  ]);

  const handleDismiss = (id: string) => {
    setUpdates(prev => prev.filter(update => update.id !== id));
  };

  const handleAction = (id: string, action: string) => {
    console.log(`Action ${action} for update ${id}`);
    // Handle different actions here
  };

  return (
    <DeploymentNotification
      updates={updates}
      onDismiss={handleDismiss}
      onAction={handleAction}
    />
  );
}
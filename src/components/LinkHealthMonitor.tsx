import React, { useState, useEffect, useCallback } from 'react';
import { 
  Link, 
  AlertTriangle, 
  CheckCircle, 
  RefreshCw, 
  ExternalLink,
  X,
  Info
} from 'lucide-react';

interface LinkStatus {
  url: string;
  status: 'pending' | 'success' | 'error' | 'timeout';
  statusCode?: number;
  responseTime?: number;
  error?: string;
  lastChecked: Date;
}

interface LinkHealthMonitorProps {
  links: string[];
  onStatusChange?: (statuses: LinkStatus[]) => void;
  autoCheck?: boolean;
  checkInterval?: number; // in milliseconds
  timeout?: number; // in milliseconds
}

export const LinkHealthMonitor: React.FC<LinkHealthMonitorProps> = ({
  links,
  onStatusChange,
  autoCheck = true,
  checkInterval = 300000, // 5 minutes
  timeout = 10000 // 10 seconds
}) => {
  const [linkStatuses, setLinkStatuses] = useState<LinkStatus[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [lastCheck, setLastCheck] = useState<Date | null>(null);

  // Initialize link statuses
  useEffect(() => {
    const initialStatuses: LinkStatus[] = links.map(url => ({
      url,
      status: 'pending',
      lastChecked: new Date()
    }));
    setLinkStatuses(initialStatuses);
  }, [links]);

  // Check a single link
  const checkLink = useCallback(async (url: string): Promise<LinkStatus> => {
    const startTime = Date.now();
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        method: 'HEAD',
        mode: 'no-cors',
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;

      return {
        url,
        status: 'success',
        statusCode: response.status,
        responseTime,
        lastChecked: new Date()
      };
    } catch (error) {
      const responseTime = Date.now() - startTime;
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return {
            url,
            status: 'timeout',
            responseTime,
            error: 'Request timeout',
            lastChecked: new Date()
          };
        }
        
        return {
          url,
          status: 'error',
          responseTime,
          error: error.message,
          lastChecked: new Date()
        };
      }
      
      return {
        url,
        status: 'error',
        responseTime,
        error: 'Unknown error',
        lastChecked: new Date()
      };
    }
  }, [timeout]);

  // Check all links
  const checkAllLinks = useCallback(async () => {
    setIsChecking(true);
    setLastCheck(new Date());
    
    const newStatuses: LinkStatus[] = [];
    
    for (const url of links) {
      const status = await checkLink(url);
      newStatuses.push(status);
      
      // Update statuses incrementally
      setLinkStatuses(prev => 
        prev.map(s => s.url === url ? status : s)
      );
      
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    setLinkStatuses(newStatuses);
    setIsChecking(false);
    
    if (onStatusChange) {
      onStatusChange(newStatuses);
    }
  }, [links, checkLink, onStatusChange]);

  // Auto-check links
  useEffect(() => {
    if (!autoCheck) return;
    
    // Initial check
    checkAllLinks();
    
    // Set up interval
    const interval = setInterval(checkAllLinks, checkInterval);
    
    return () => clearInterval(interval);
  }, [autoCheck, checkInterval, checkAllLinks]);

  // Get status summary
  const getStatusSummary = () => {
    const total = linkStatuses.length;
    const success = linkStatuses.filter(s => s.status === 'success').length;
    const error = linkStatuses.filter(s => s.status === 'error').length;
    const timeout = linkStatuses.filter(s => s.status === 'timeout').length;
    const pending = linkStatuses.filter(s => s.status === 'pending').length;
    
    return { total, success, error, timeout, pending };
  };

  // Get status color
  const getStatusColor = (status: LinkStatus['status']) => {
    switch (status) {
      case 'success': return 'text-green-400';
      case 'error': return 'text-red-400';
      case 'timeout': return 'text-yellow-400';
      case 'pending': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  // Get status icon
  const getStatusIcon = (status: LinkStatus['status']) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case 'timeout': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'pending': return <RefreshCw className="w-4 h-4 text-gray-400 animate-spin" />;
      default: return <Info className="w-4 h-4 text-gray-400" />;
    }
  };

  const summary = getStatusSummary();

  return (
    <div className="fixed bottom-4 left-4 w-80 bg-black/90 backdrop-blur-md rounded-lg shadow-2xl border border-gray-700 z-50">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
            <Link className="w-5 h-5 text-cyan-400" />
            <span>Link Health</span>
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              title={showDetails ? 'Hide Details' : 'Show Details'}
            >
              <Info className="w-4 h-4" />
            </button>
            <button
              onClick={checkAllLinks}
              disabled={isChecking}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              title="Check All Links"
            >
              <RefreshCw className={`w-4 h-4 ${isChecking ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{summary.success}</div>
              <div className="text-xs text-gray-400">Healthy</div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{summary.error + summary.timeout}</div>
              <div className="text-xs text-gray-400">Issues</div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(summary.success / summary.total) * 100}%` }}
          ></div>
        </div>

        {/* Last Check */}
        {lastCheck && (
          <div className="text-xs text-gray-400 text-center mb-4">
            Last checked: {lastCheck.toLocaleTimeString()}
          </div>
        )}

        {/* Link Details */}
        {showDetails && (
          <div className="max-h-64 overflow-y-auto space-y-2">
            {linkStatuses.map((status, index) => (
              <div key={index} className="bg-gray-800/30 rounded p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(status.status)}
                    <span className="text-sm text-white font-medium truncate">
                      {new URL(status.url).hostname}
                    </span>
                  </div>
                  <a
                    href={status.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    title="Open link"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                <div className="text-xs text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className={getStatusColor(status.status)}>
                      {status.status.toUpperCase()}
                    </span>
                  </div>
                  
                  {status.statusCode && (
                    <div className="flex justify-between">
                      <span>Code:</span>
                      <span>{status.statusCode}</span>
                    </div>
                  )}
                  
                  {status.responseTime && (
                    <div className="flex justify-between">
                      <span>Response:</span>
                      <span>{status.responseTime}ms</span>
                    </div>
                  )}
                  
                  {status.error && (
                    <div className="text-red-400 text-xs">
                      Error: {status.error}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="text-xs text-gray-500 text-center mt-4">
          {summary.total} links monitored
          {autoCheck && ` • Auto-check every ${Math.round(checkInterval / 60000)}m`}
        </div>
      </div>
    </div>
  );
};
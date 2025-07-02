import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw } from 'lucide-react';







import { logErrorToProduction } from '@/utils/productionLogger';


interface LogEntry {
  id: string;
  timestamp: string;
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical';
  message: string;
  category: string;
  context?: Record<string, unknown>;
  stack?: string;
  url?: string;
  userAgent?: string;
  userId?: string;
  sessionId: string;
  source: 'client' | 'server' | 'middleware' | 'api';
  component?: string;
  feature?: string;
  error?: {
    name: string;
    message: string;
    stack?: string;
    cause?: unknown;
  };
  performance?: {
    memory?: number;
    timing?: number;
    fps?: number;
  };
}

interface LogsPageProps {
  logs: LogEntry[];
  errorCount: number;
  warningCount: number;
  totalCount: number;
  lastUpdated: string;
}

const LogLevelIcon = ({ level }: { level: LogEntry['level'] }) => {
  switch (level) {
    case 'debug':
      return <Info className="h-4 w-4 text-blue-500" />;
    case 'info':
      return <Info className="h-4 w-4 text-green-500" />;
    case 'warn':
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    case 'error':
      return <AlertCircle className="h-4 w-4 text-red-500" />;
    case 'critical':
      return <XCircle className="h-4 w-4 text-red-700" />;
    default:
      return <Info className="h-4 w-4 text-gray-500" />;
  }
};

const LogLevelBadge = ({ level }: { level: LogEntry['level'] }) => {
  const colors = {
    debug: 'bg-blue-100 text-blue-800',
    info: 'bg-green-100 text-green-800',
    warn: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    critical: 'bg-red-200 text-red-900',
  };

  return (
    <Badge className={colors[level]}>
      {level.toUpperCase()}
    </Badge>
  );
};

export default function LogsPage({ logs: initialLogs, errorCount, warningCount, totalCount, lastUpdated }: LogsPageProps) {
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>(initialLogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);

  const categories = Array.from(new Set(logs.map(log => log.category))).filter(Boolean);
  const sources = Array.from(new Set(logs.map(log => log.source))).filter(Boolean);

  useEffect(() => {
    let filtered = logs;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(log =>
        log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (log.component && log.component.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Level filter
    if (levelFilter !== 'all') {
      filtered = filtered.filter(log => log.level === levelFilter);
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(log => log.category === categoryFilter);
    }

    // Source filter
    if (sourceFilter !== 'all') {
      filtered = filtered.filter(log => log.source === sourceFilter);
    }

    setFilteredLogs(filtered);
  }, [logs, searchTerm, levelFilter, categoryFilter, sourceFilter]);

  const refreshLogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/logs');
      if (response.ok) {
        const data = await response.json();
        setLogs(data.logs);
      }
    } catch (error) {
      logErrorToProduction('Failed to refresh logs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const exportLogs = () => {
    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const formatPerformance = (performance?: LogEntry['performance']) => {
    if (!performance) return null;
    
    const parts = [];
    if (performance.memory) {
      parts.push(`Memory: ${(performance.memory / 1024 / 1024).toFixed(1)}MB`);
    }
    if (performance.timing) {
      parts.push(`Timing: ${performance.timing}ms`);
    }
    if (performance.fps) {
      parts.push(`FPS: ${performance.fps}`);
    }
    
    return parts.length > 0 ? parts.join(', ') : null;
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">System Logs & Error Monitoring</h1>
        <div className="flex items-center space-x-2">
          <Button onClick={refreshLogs} disabled={isLoading} variant="outline">
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button onClick={exportLogs} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Logs</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCount}</div>
            <p className="text-xs text-muted-foreground">All log entries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Errors</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{errorCount}</div>
            <p className="text-xs text-muted-foreground">Critical & error logs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{warningCount}</div>
            <p className="text-xs text-muted-foreground">Warning logs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium">{formatTimestamp(lastUpdated)}</div>
            <p className="text-xs text-muted-foreground">Data freshness</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search logs..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="debug">Debug</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="warn">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All sources" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                {sources.map(source => (
                  <SelectItem key={source} value={source}>{source}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Log Entries ({filteredLogs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => (
                <div key={log.id} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <LogLevelIcon level={log.level} />
                      <LogLevelBadge level={log.level} />
                      <Badge variant="outline">{log.category}</Badge>
                      <Badge variant="secondary">{log.source}</Badge>
                      {log.component && (
                        <Badge variant="outline">{log.component}</Badge>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {formatTimestamp(log.timestamp)}
                    </span>
                  </div>
                  
                  <div className="text-sm font-medium">{log.message}</div>
                  
                  {log.context && Object.keys(log.context).length > 0 && (
                    <details className="text-xs">
                      <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                        View Context
                      </summary>
                      <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-x-auto">
                        {JSON.stringify(log.context, null, 2)}
                      </pre>
                    </details>
                  )}
                  
                  {log.error && (
                    <details className="text-xs">
                      <summary className="cursor-pointer text-red-600 hover:text-red-800">
                        View Error Details
                      </summary>
                      <div className="mt-2 p-2 bg-red-50 rounded">
                        <div><strong>Name:</strong> {log.error.name}</div>
                        <div><strong>Message:</strong> {log.error.message}</div>
                        {log.error.stack && (
                          <details className="mt-2">
                            <summary className="cursor-pointer">Stack Trace</summary>
                            <pre className="mt-1 text-xs overflow-x-auto">{log.error.stack}</pre>
                          </details>
                        )}
                      </div>
                    </details>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div>
                      Session: {log.sessionId}
                      {log.userId && ` • User: ${log.userId}`}
                    </div>
                    {log.performance && (
                      <div>{formatPerformance(log.performance)}</div>
                    )}
                  </div>
                  
                  {log.url && (
                    <div className="text-xs text-muted-foreground truncate">
                      URL: {log.url}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground py-8">
                No logs found matching the current filters.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const logsDir = path.join(process.cwd(), 'logs');
    const logs: LogEntry[] = [];

    // Read all log files
    if (fs.existsSync(logsDir)) {
      const files = fs.readdirSync(logsDir);
      const logFiles = files.filter(file => file.endsWith('.log'));

      for (const file of logFiles) {
        try {
          const filePath = path.join(logsDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          const lines = content.split('\n').filter(line => line.trim());

          for (const line of lines) {
            try {
              const logEntry = JSON.parse(line);
              logs.push(logEntry);
            } catch (parseError) {
              // Skip malformed log entries
            }
          }
        } catch (fileError) {
          // Skip problematic files
        }
      }
    }

    // Sort logs by timestamp (newest first)
    logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    // Calculate statistics
    const errorCount = logs.filter(log => log.level === 'error' || log.level === 'critical').length;
    const warningCount = logs.filter(log => log.level === 'warn').length;
    const totalCount = logs.length;

    return {
      props: {
        logs: logs.slice(0, 1000), // Limit to most recent 1000 logs
        errorCount,
        warningCount,
        totalCount,
        lastUpdated: new Date().toISOString(),
      },
    };
  } catch (error) {
            logErrorToProduction('Error reading logs:', error);
    return {
      props: {
        logs: [],
        errorCount: 0,
        warningCount: 0,
        totalCount: 0,
        lastUpdated: new Date().toISOString(),
      },
    };
  }
}; 
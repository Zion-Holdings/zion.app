import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import {logErrorToProduction} from "@/utils/productionLogger";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export type ApiKeyScope = 'jobs:read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';

export interface ApiKey {
  id: string;
  name: string;
  key_prefix: string;
  scopes: ApiKeyScope[];
  created_at: string;
  last_used_at: string | null;
  expires_at: string | null;
  is_active: boolean;
}

export interface ApiLog {
  id: string;
  endpoint: string;
  method: string;
  status_code: number;
  created_at: string;
  ip_address?: string;
  response_time_ms?: number;
}

export function useApiKeys() {
  const { user } = useAuth();
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [logs, setLogs] = useState<ApiLog[]>([]);
  const [totalLogs, setTotalLogs] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newApiKey, setNewApiKey] = useState<string | null>(null);

  // Helper to get the base URL for API functions
  const getApiUrl = () => {
    // Using optional chaining ensures this function works both in the browser
    // (where import.meta.env is injected by Vite) and in Node environments
    // such as tests or server side rendering.
    // For Next.js, process.env is the primary source.
    const url =
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      process.env.SUPABASE_URL; // Fallback if NEXT_PUBLIC_ is not set but SUPABASE_URL is
    return `${url}/functions/v1/api-key-manager`;
  };

  // Fetch user's API keys
  const fetchApiKeys = async () => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return;
      }

      const response = await fetch(`${getApiUrl()}/keys`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${(session as any)?.access_token}`,
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch API keys');
      }

      setKeys(result.keys || []);
    } catch (err) {
      logErrorToProduction('Error fetching API keys:', { data: err });
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive",
        title: "Error fetching API keys",
        description: err instanceof Error ? err.message : 'An unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  // Create new API key
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expiresAt?: Date | null) => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    setNewApiKey(null);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return;
      }

      const response = await fetch(`${getApiUrl()}/create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${(session as any)?.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          scopes,
          expiresAt: expiresAt ? expiresAt.toISOString() : null
        })
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to create API key');
      }

      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]);
      
      // Store the actual key value temporarily so it can be displayed once
      setNewApiKey(result.key);
      
      toast({
        title: "API Key Created",
        description: "Your new API key has been generated. Save it now, you won't be able to see it again.",
      });
      
      return result;
    } catch (err) {
      logErrorToProduction('Error creating API key:', { data: err });
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive",
        title: "Error creating API key",
        description: err instanceof Error ? err.message : 'An unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  // Regenerate API key
  const regenerateApiKey = async (keyId: string) => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    setNewApiKey(null);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return;
      }

      const response = await fetch(`${getApiUrl()}/regenerate`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${(session as any)?.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ keyId })
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to regenerate API key');
      }

      // Update the key in the list
      setKeys(prev => prev.map(key => 
        key.id === keyId ? { ...result, key: undefined } : key
      ));
      
      // Store the new key value
      setNewApiKey(result.key);
      
      toast({
        title: "API Key Regenerated",
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again.",
      });
      
      return result;
    } catch (err) {
      logErrorToProduction('Error regenerating API key:', { data: err });
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive",
        title: "Error regenerating API key",
        description: err instanceof Error ? err.message : 'An unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  // Revoke API key
  const revokeApiKey = async (keyId: string) => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return;
      }

      const response = await fetch(`${getApiUrl()}/revoke`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${(session as any)?.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ keyId })
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to revoke API key');
      }

      // Update the key's active status in the list
      setKeys(prev => prev.map(key => 
        key.id === keyId ? { ...key, is_active: false } : key
      ));
      
      toast({
        title: "API Key Revoked",
        description: "The API key has been revoked successfully.",
      });
      
      return result;
    } catch (err) {
      logErrorToProduction('Error revoking API key:', { data: err });
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive",
        title: "Error revoking API key",
        description: err instanceof Error ? err.message : 'An unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch API usage logs
  const fetchApiLogs = async (limit = 50, offset = 0) => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return;
      }

      const response = await fetch(
        `${getApiUrl()}/logs?limit=${limit}&offset=${offset}`, 
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${(session as any)?.access_token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch API logs');
      }

      setLogs(result.logs || []);
      setTotalLogs(result.count || 0);
      
      return result;
    } catch (err) {
      logErrorToProduction('Error fetching API logs:', { data: err });
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive",
        title: "Error fetching API logs",
        description: err instanceof Error ? err.message : 'An unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    keys,
    logs,
    totalLogs,
    loading,
    error,
    newApiKey,
    fetchApiKeys,
    createApiKey,
    regenerateApiKey,
    revokeApiKey,
    fetchApiLogs,
    clearNewApiKey: () => setNewApiKey(null)
  };
}

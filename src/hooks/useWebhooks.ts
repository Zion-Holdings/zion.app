import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired';

import {logErrorToProduction} from "@/utils/productionLogger";

export interface Webhook {
  id: string;
  name: string;
  url: string;
  event_types: WebhookEventType[];
  is_active: boolean;
  created_at: string;
  last_triggered_at: string | null;
}

export interface TestWebhookResult {
  status: number;
  statusText: string;
  responseBody: string;
}

export function useWebhooks() {
  const { _user } = useAuth();
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<TestWebhookResult | null>(null);

  // Helper to get the base URL for webhook functions
  const getWebhookUrl = () => {
    // import.meta may be undefined when this hook is executed in a Node
    // environment (e.g. during server side rendering or tests). Using optional
    // chaining avoids a TypeError in those cases and falls back to process.env.
    // For Next.js, process.env is the primary source.
    const url =
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      process.env.SUPABASE_URL; // Fallback if NEXT_PUBLIC_ is not set but SUPABASE_URL is
    return `${url}/functions/v1/webhook-manager`;
  };

  // Fetch user's webhooks
  const fetchWebhooks = async () => {
    if (!user) return;
    if (!supabase) throw new Error('Supabase client not initialized');
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return;
      }

      const authHeader = (typeof session === 'object' && session !== null && 'access_token' in session && typeof (session as { access_token: unknown }).access_token === 'string')
        ? `Bearer ${(session as { access_token: string }).access_token}`
        : undefined;

      const response = await fetch(`${getWebhookUrl()}/webhooks`, {
        method: 'GET',
        headers: {
          ...(authHeader ? { 'Authorization': authHeader } : {}),
          'Content-Type': 'application/json'
        } as HeadersInit,
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch webhooks');
      }

      setWebhooks(result.webhooks || []);
    } catch {
      logErrorToProduction('Error fetching webhooks:', { data: error });
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive",
        title: "Error fetching webhooks",
        description: err instanceof Error ? err.message : 'An unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  // Create new webhook
  const createWebhook = async (name: string, url: string, eventTypes: WebhookEventType[], secret?: string) => {
    if (!user) return;
    if (!supabase) throw new Error('Supabase client not initialized');
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return;
      }

      const authHeader = (typeof session === 'object' && session !== null && 'access_token' in session && typeof (session as { access_token: unknown }).access_token === 'string')
        ? `Bearer ${(session as { access_token: string }).access_token}`
        : undefined;

      const response = await fetch(`${getWebhookUrl()}/create`, {
        method: 'POST',
        headers: {
          ...(authHeader ? { 'Authorization': authHeader } : {}),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          url,
          eventTypes,
          secret
        })
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to create webhook');
      }

      // Add the new webhook to the list
      setWebhooks(prev => [result.webhook, ...prev]);
      
      toast({
        title: "Webhook Created",
        description: "Your webhook has been created successfully.",
      });
      
      return result.webhook;
    } catch {
      logErrorToProduction('Error creating webhook:', { data: error });
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive",
        title: "Error creating webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  // Toggle webhook active status
  const toggleWebhook = async (webhookId: string, _isActive: boolean) => {
    if (!user) return;
    if (!supabase) throw new Error('Supabase client not initialized');
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return;
      }

      const authHeader = (typeof session === 'object' && session !== null && 'access_token' in session && typeof (session as { access_token: unknown }).access_token === 'string')
        ? `Bearer ${(session as { access_token: string }).access_token}`
        : undefined;

      const response = await fetch(`${getWebhookUrl()}/toggle`, {
        method: 'POST',
        headers: {
          ...(authHeader ? { 'Authorization': authHeader } : {}),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ webhookId, isActive })
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to update webhook');
      }

      // Update the webhook in the list
      setWebhooks(prev => prev.map(webhook => 
        webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook
      ));
      
      toast({
        title: isActive ? "Webhook Activated" : "Webhook Deactivated",
        description: `The webhook has been ${isActive ? 'activated' : 'deactivated'} successfully.`,
      });
      
      return result;
    } catch {
      logErrorToProduction('Error toggling webhook:', { data: error });
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive",
        title: "Error updating webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  // Delete webhook
  const deleteWebhook = async (_webhookId: string) => {
    if (!user) return;
    if (!supabase) throw new Error('Supabase client not initialized');
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return;
      }

      const authHeader = (typeof session === 'object' && session !== null && 'access_token' in session && typeof (session as { access_token: unknown }).access_token === 'string')
        ? `Bearer ${(session as { access_token: string }).access_token}`
        : undefined;

      const response = await fetch(`${getWebhookUrl()}/delete`, {
        method: 'POST',
        headers: {
          ...(authHeader ? { 'Authorization': authHeader } : {}),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ webhookId })
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to delete webhook');
      }

      // Remove the webhook from the list
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId));
      
      toast({
        title: "Webhook Deleted",
        description: "The webhook has been deleted successfully.",
      });
      
      return result;
    } catch {
      logErrorToProduction('Error deleting webhook:', { data: error });
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive",
        title: "Error deleting webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  // Test webhook
  const testWebhook = async (webhookId: string, _eventType: WebhookEventType) => {
    if (!user) return;
    if (!supabase) throw new Error('Supabase client not initialized');
    
    setLoading(true);
    setError(null);
    setTestResult(null);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return;
      }

      const authHeader = (typeof session === 'object' && session !== null && 'access_token' in session && typeof (session as { access_token: unknown }).access_token === 'string')
        ? `Bearer ${(session as { access_token: string }).access_token}`
        : undefined;

      const response = await fetch(`${getWebhookUrl()}/test`, {
        method: 'POST',
        headers: {
          ...(authHeader ? { 'Authorization': authHeader } : {}),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ webhookId, eventType })
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to test webhook');
      }

      // Store test result
      setTestResult({
        status: result.status,
        statusText: result.statusText,
        responseBody: result.responseBody
      });
      
      // Update last triggered timestamp
      setWebhooks(prev => prev.map(webhook => 
        webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook
      ));
      
      toast({
        title: "Webhook Test Sent",
        description: `Test completed with status: ${result.status} ${result.statusText}`,
      });
      
      return result;
    } catch {
      logErrorToProduction('Error testing webhook:', { data: error });
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive",
        title: "Error testing webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    webhooks,
    loading,
    error,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook,
    clearTestResult: () => setTestResult(null)
  };
}

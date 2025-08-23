
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.0';

interface CreateWebhookRequest {
  name: string;
  url: string;
  eventTypes: string[];
  secret?: string;
}

interface WebhookTestRequest {
  webhookId: string;
  eventType: string;
}

// Create a Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
const supabase = createClient(supabaseUrl, supabaseKey);

serve(async (req) => {
  // Handle CORS for browser requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    });
  }

  try {
    // Extract auth token from request
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Missing authorization header' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Verify the token with Supabase auth
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Parse URL to determine action
    const url = new URL(req.url);
    const path = url.pathname.split('/').pop();

    // Handle different actions
    if (req.method === 'POST') {
      if (path === 'create') {
        const { name, url, eventTypes, secret } = await req.json() as CreateWebhookRequest;
        return await createWebhook(user.id, name, url, eventTypes, secret);
      } else if (path === 'toggle') {
        const { webhookId, isActive } = await req.json();
        return await toggleWebhook(user.id, webhookId, isActive);
      } else if (path === 'test') {
        const { webhookId, eventType } = await req.json() as WebhookTestRequest;
        return await testWebhook(user.id, webhookId, eventType);
      } else if (path === 'delete') {
        const { webhookId } = await req.json();
        return await deleteWebhook(user.id, webhookId);
      }
    } else if (req.method === 'GET') {
      if (path === 'webhooks') {
        return await getUserWebhooks(user.id);
      }
    }

    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});

async function createWebhook(userId: string, name: string, url: string, eventTypes: string[], secret?: string) {
  try {
    const { data, error } = await supabase
      .from('webhook_configs')
      .insert({
        user_id: userId,
        name,
        url,
        event_types: eventTypes,
        secret
      })
      .select('id, name, url, event_types, is_active, created_at');

    if (error) {
      console.error('Error creating webhook:', error);
      return new Response(JSON.stringify({ error: 'Failed to create webhook' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ 
      webhook: data[0],
      message: 'Webhook created successfully'
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in createWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function getUserWebhooks(userId: string) {
  try {
    const { data, error } = await supabase
      .from('webhook_configs')
      .select('id, name, url, event_types, is_active, created_at, last_triggered_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching webhooks:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch webhooks' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ webhooks: data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in getUserWebhooks:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function toggleWebhook(userId: string, webhookId: string, isActive: boolean) {
  try {
    const { data, error } = await supabase
      .from('webhook_configs')
      .update({ is_active: isActive })
      .eq('id', webhookId)
      .eq('user_id', userId)
      .select('id, name, is_active');

    if (error || !data || data.length === 0) {
      console.error('Error toggling webhook:', error);
      return new Response(JSON.stringify({ error: 'Failed to update webhook or webhook not found' }), {
        status: error ? 500 : 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      message: `Webhook ${isActive ? 'activated' : 'deactivated'} successfully`,
      webhook: data[0]
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in toggleWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function deleteWebhook(userId: string, webhookId: string) {
  try {
    const { data, error } = await supabase
      .from('webhook_configs')
      .delete()
      .eq('id', webhookId)
      .eq('user_id', userId)
      .select('id');

    if (error) {
      console.error('Error deleting webhook:', error);
      return new Response(JSON.stringify({ error: 'Failed to delete webhook' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!data || data.length === 0) {
      return new Response(JSON.stringify({ error: 'Webhook not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      message: 'Webhook deleted successfully',
      id: webhookId
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in deleteWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function testWebhook(userId: string, webhookId: string, eventType: string) {
  try {
    // Verify webhook exists and belongs to user
    const { data: webhook, error: webhookError } = await supabase
      .from('webhook_configs')
      .select('url, secret')
      .eq('id', webhookId)
      .eq('user_id', userId)
      .single();

    if (webhookError || !webhook) {
      return new Response(JSON.stringify({ error: 'Webhook not found or access denied' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create test payload based on event type
    const testPayload = createTestPayload(eventType);
    
    // Add signature if secret is provided
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    if (webhook.secret) {
      const signature = await createWebhookSignature(JSON.stringify(testPayload), webhook.secret);
      headers['X-Zion-Signature'] = signature;
    }

    // Make the request to the webhook URL
    try {
      const webhookResponse = await fetch(webhook.url, {
        method: 'POST',
        headers,
        body: JSON.stringify(testPayload)
      });

      // Update last triggered timestamp
      await supabase
        .from('webhook_configs')
        .update({ last_triggered_at: new Date().toISOString() })
        .eq('id', webhookId);

      // Return the response status and body
      const responseText = await webhookResponse.text();
      return new Response(JSON.stringify({
        message: 'Test webhook sent',
        status: webhookResponse.status,
        statusText: webhookResponse.statusText,
        responseBody: responseText.substring(0, 500) // Limit response body size
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (fetchError) {
      console.error('Error sending test webhook:', fetchError);
      return new Response(JSON.stringify({ 
        error: 'Failed to send test webhook', 
        details: fetchError.message 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error in testWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function createWebhookSignature(payload: string, secret: string) {
  // Create HMAC signature using SHA-256
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  
  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(payload)
  );
  
  // Convert to hex string
  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

function createTestPayload(eventType: string) {
  const timestamp = new Date().toISOString();
  const eventId = crypto.randomUUID();
  
  // Create different test payload based on event type
  switch (eventType) {
    case 'new_application':
      return {
        event_type: 'new_application',
        event_id: eventId,
        timestamp,
        data: {
          application_id: crypto.randomUUID(),
          job_id: crypto.randomUUID(),
          talent_id: crypto.randomUUID(),
          applied_at: timestamp,
          status: 'new',
          match_score: 85
        }
      };
    
    case 'quote_received':
      return {
        event_type: 'quote_received',
        event_id: eventId,
        timestamp,
        data: {
          quote_id: crypto.randomUUID(),
          talent_id: crypto.randomUUID(),
          client_id: crypto.randomUUID(),
          amount: {
            min: 1000,
            max: 2000,
            currency: 'USD'
          },
          created_at: timestamp
        }
      };
    
    case 'milestone_approved':
      return {
        event_type: 'milestone_approved',
        event_id: eventId,
        timestamp,
        data: {
          milestone_id: crypto.randomUUID(),
          project_id: crypto.randomUUID(),
          title: 'Test Milestone',
          amount: 500,
          approved_at: timestamp
        }
      };
      
    case 'talent_hired':
      return {
        event_type: 'talent_hired',
        event_id: eventId,
        timestamp,
        data: {
          project_id: crypto.randomUUID(),
          talent_id: crypto.randomUUID(),
          client_id: crypto.randomUUID(),
          job_id: crypto.randomUUID(),
          created_at: timestamp,
          status: 'offer_accepted'
        }
      };
      
    default:
      return {
        event_type: 'test_event',
        event_id: eventId,
        timestamp,
        data: {
          message: 'This is a test webhook event'
        }
      };
  }
}

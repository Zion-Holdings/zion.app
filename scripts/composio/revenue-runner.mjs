#!/usr/bin/env node
/**
 * Zion Revenue Automation — local runner
 * Reads JSON events from stdin or a file and routes them through:
 *   Calendly -> Stripe -> Resend -> HubSpot -> Notion -> Slack
 *
 * Usage:
 *   echo '{"type":"booking","email":"client@example.com"}' | node scripts/composio/revenue-runner.mjs
 *   node scripts/composio/revenue-runner.mjs --file docs/ops/sample-event.json
 *
 * Env vars required:
 *   COMPOSIO_API_KEY
 *   COMPOSIO_CALENDLY_CONNECTION_ID
 *   COMPOSIO_STRIPE_CONNECTION_ID
 *   COMPOSIO_RESEND_CONNECTION_ID
 *   COMPOSIO_HUBSPOT_CONNECTION_ID
 *   COMPOSIO_NOTION_CONNECTION_ID
 *   COMPOSIO_SLACK_CONNECTION_ID
 *   STRIPE_STARTER_PRICE_ID / STRIPE_GROWTH_PRICE_ID / STRIPE_ENTERPRISE_PRICE_ID
 */

import { readFileSync } from 'node:fs';
import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = 'zion-revenue-local';

const connections = {
  calendly: process.env.COMPOSIO_CALENDLY_CONNECTION_ID,
  stripe: process.env.COMPOSIO_STRIPE_CONNECTION_ID,
  resend: process.env.COMPOSIO_RESEND_CONNECTION_ID,
  hubspot: process.env.COMPOSIO_HUBSPOT_CONNECTION_ID,
  notion: process.env.COMPOSIO_NOTION_CONNECTION_ID,
  slack: process.env.COMPOSIO_SLACK_CONNECTION_ID,
};

const priceMap = {
  starter: process.env.STRIPE_STARTER_PRICE_ID,
  growth: process.env.STRIPE_GROWTH_PRICE_ID,
  enterprise: process.env.STRIPE_ENTERPRISE_PRICE_ID,
};

async function getTools(name, connectionId) {
  if (!connectionId) {
    console.log(`[skip] ${name}: no connection id`);
    return [];
  }
  try {
    const tools = await composio.getTools({ connectionIds: [connectionId], userId });
    console.log(`[ok] ${name}: ${tools.length} tools available`);
    return tools;
  } catch (e) {
    console.log(`[error] ${name}: ${e.message}`);
    return [];
  }
}

async function execute(name, tools, slugSubstring, args = {}) {
  const tool = tools.find(t => (t.slug || t.name || '').includes(slugSubstring));
  if (!tool) {
    console.log(`[skip] ${name}: ${slugSubstring} not found`);
    return null;
  }
  try {
    const result = await composio.tools.execute(tool.slug || tool.name, {
      ...args,
      connection_id: connections[name],
      entity_id: userId,
    });
    console.log(`[exec] ${name}.${slugSubstring}: done`);
    return result;
  } catch (e) {
    console.log(`[error] ${name}.${slugSubstring}: ${e.message}`);
    return null;
  }
}

async function main() {
  console.log('=== Zion Revenue Automation ===');

  // 1. Health check
  console.log('\n--- Connection health ---');
  const toolsByConnection = {};
  for (const [name, connectionId] of Object.entries(connections)) {
    toolsByConnection[name] = await getTools(name, connectionId);
  }

  // 2. Read event
  let event;
  const fileArg = process.argv[process.argv.indexOf('--file') + 1];
  if (fileArg) {
    event = JSON.parse(readFileSync(fileArg, 'utf8'));
  } else {
    event = JSON.parse(await Bun.stdin.text());
  }

  console.log('\n--- Event ---');
  console.log(JSON.stringify(event, null, 2));

  // 3. Route by event type
  if (event.type === 'booking') {
    console.log('\n--- Booking flow ---');
    const calendlyTools = toolsByConnection.calendly || [];
    const stripeTools = toolsByConnection.stripe || [];
    const resendTools = toolsByConnection.resend || [];
    const hubspotTools = toolsByConnection.hubspot || [];
    const notionTools = toolsByConnection.notion || [];
    const slackTools = toolsByConnection.slack || [];

    // Create Stripe payment link if price provided
    const priceId = priceMap[event.tier] || priceMap.starter;
    if (priceId) {
      await execute('stripe', stripeTools, 'STRIPE_CREATE_PAYMENT_LINK', {
        price: priceId,
        quantity: 1,
      });
    }

    // Send confirmation email
    if (resendTools.length) {
      await execute('resend', resendTools, 'RESEND_SEND_EMAIL', {
        to: event.email,
        subject: 'Confirmacao de reserva - Zion Tech Group',
        html: `<p>Obrigado, ${event.name || 'cliente'}! Sua reserva foi confirmada.</p>`,
      });
    }

    // Create/update HubSpot contact
    if (hubspotTools.length && event.email) {
      await execute('hubspot', hubspotTools, 'HUBSPOT_CREATE_CONTACT', {
        email: event.email,
        firstname: event.name || '',
        lifecycle_stage: 'opportunity',
      });
    }

    // Notify Slack
    if (slackTools.length) {
      await execute('slack', slackTools, 'SLACK_SEND_MESSAGE', {
        channel: process.env.SLACK_CHANNEL || '#sales',
        text: `Nova reserva: ${event.name || event.email} — tier: ${event.tier || 'starter'}`,
      });
    }

    // Log to Notion
    if (notionTools.length) {
      await execute('notion', notionTools, 'NOTION_CREATE_PAGE', {
        parent: { page_id: process.env.NOTION_REVENUE_DB || '' },
        properties: {
          'Client': { title: [{ text: { content: event.name || event.email } }] },
          'Tier': { select: { name: event.tier || 'starter' } },
          'Email': { email: event.email },
        },
        children: [{ object: 'block', type: 'paragraph', paragraph: { text: [{ type: 'text', text: { content: `Booking created at ${new Date().toISOString()}` } }] } }],
      });
    }
  } else if (event.type === 'lead') {
    console.log('\n--- Lead flow ---');
    const hubspotTools = toolsByConnection.hubspot || [];
    const notionTools = toolsByConnection.notion || [];
    const slackTools = toolsByConnection.slack || [];

    if (hubspotTools.length && event.email) {
      await execute('hubspot', hubspotTools, 'HUBSPOT_CREATE_CONTACT', {
        email: event.email,
        firstname: event.name || '',
        lifecycle_stage: 'lead',
      });
    }
    if (notionTools.length) {
      await execute('notion', notionTools, 'NOTION_CREATE_PAGE', {
        parent: { page_id: process.env.NOTION_LEADS_DB || '' },
        properties: {
          'Lead': { title: [{ text: { content: event.name || event.email } }] },
          'Source': { select: { name: event.source || 'web' } },
          'Email': { email: event.email },
        },
        children: [{ object: 'block', type: 'paragraph', paragraph: { text: [{ type: 'text', text: { content: `Lead captured at ${new Date().toISOString()}` } }] } }],
      });
    }
    if (slackTools.length) {
      await execute('slack', slackTools, 'SLACK_SEND_MESSAGE', {
        channel: process.env.SLACK_CHANNEL || '#leads',
        text: `Novo lead: ${event.name || event.email}`,
      });
    }
  } else {
    console.log(`[skip] unknown event type: ${event.type}`);
  }

  console.log('\n=== Done ===');
}

main().catch((e) => {
  console.error('FATAL:', e);
  process.exit(1);
});

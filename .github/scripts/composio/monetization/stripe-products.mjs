import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = process.env.ZION_USER_ID || 'zion-monetization';

const connections = {
  stripe: process.env.COMPOSIO_STRIPE_CONNECTION_ID,
  resend: process.env.COMPOSIO_RESEND_CONNECTION_ID,
  slack: process.env.COMPOSIO_SLACK_CONNECTION_ID,
};

async function executeTool(name, toolSlug, connectionId, args = {}) {
  if (!connectionId) return { skipped: true, reason: 'no connection' };
  try {
    const result = await composio.tools.execute(toolSlug, {
      connectionId,
      entity_id: userId,
      arguments: args,
    });
    return { ok: true, result };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

async function run() {
  const ts = new Date().toISOString();
  console.log(`\n═══ ZION STRIPE PRODUCTS SETUP — ${ts} ═══\n`);

  const summary = { timestamp: ts, products: [], errors: [] };

  // ─── PRODUCT 1: Starter ─────────────────────────────────────────────────
  console.log('→ Creating product: Zion Starter Plan');
  const starter = await executeTool('stripe', 'STRIPE_CREATE_PRODUCT', connections.stripe, {
    name: 'Zion Starter Plan',
    description: 'Single AI/automation deliverable — up to 20 seats, 2-week sprint',
    metadata: { tier: 'starter', seats: '20' },
  });
  if (starter.ok) {
    const productId = starter.result?.id;
    summary.products.push({ tier: 'starter', productId });
    console.log(`  Product created: ${productId}`);

    // Create price for Starter ($2,500 one-time)
    const starterPrice = await executeTool('stripe', 'STRIPE_CREATE_PRICE', connections.stripe, {
      product: productId,
      currency: 'usd',
      unit_amount: 250000, // $2,500.00
      billing_scheme: 'per_unit',
      recurring: undefined,
    });
    if (starterPrice.ok) {
      console.log(`  Price created: ${starterPrice.result?.id} ($2,500 one-time)`);
      summary.products[summary.products.length - 1].priceId = starterPrice.result?.id;
    }
  } else {
    summary.errors.push({ product: 'starter', error: starter.error });
    console.log(`  Error: ${starter.error}`);
  }

  // ─── PRODUCT 2: Growth ──────────────────────────────────────────────────
  console.log('→ Creating product: Zion Growth Plan');
  const growth = await executeTool('stripe', 'STRIPE_CREATE_PRODUCT', connections.stripe, {
    name: 'Zion Growth Plan',
    description: 'Monthly retainer — unlimited AI agents, priority support, 4-hour SLA',
    metadata: { tier: 'growth', seats: 'unlimited' },
  });
  if (growth.ok) {
    const productId = growth.result?.id;
    summary.products.push({ tier: 'growth', productId });
    console.log(`  Product created: ${productId}`);

    // Monthly price ($8,000/mo)
    const growthMonthly = await executeTool('stripe', 'STRIPE_CREATE_PRICE', connections.stripe, {
      product: productId,
      currency: 'usd',
      unit_amount: 800000,
      billing_scheme: 'per_unit',
      recurring: { interval: 'month' },
    });
    if (growthMonthly.ok) {
      console.log(`  Monthly price: ${growthMonthly.result?.id} ($8,000/mo)`);
      summary.products[summary.products.length - 1].monthlyPriceId = growthMonthly.result?.id;
    }

    // Annual price ($80,000/yr = $6,667/mo equivalent, 17% discount)
    const growthAnnual = await executeTool('stripe', 'STRIPE_CREATE_PRICE', connections.stripe, {
      product: productId,
      currency: 'usd',
      unit_amount: 8000000,
      billing_scheme: 'per_unit',
      recurring: { interval: 'year' },
    });
    if (growthAnnual.ok) {
      console.log(`  Annual price: ${growthAnnual.result?.id} ($80,000/yr)`);
      summary.products[summary.products.length - 1].annualPriceId = growthAnnual.result?.id;
    }
  } else {
    summary.errors.push({ product: 'growth', error: growth.error });
    console.log(`  Error: ${growth.error}`);
  }

  // ─── PRODUCT 3: Enterprise ──────────────────────────────────────────────
  console.log('→ Creating product: Zion Enterprise Plan');
  const enterprise = await executeTool('stripe', 'STRIPE_CREATE_PRODUCT', connections.stripe, {
    name: 'Zion Enterprise Plan',
    description: 'Custom AI swarm — on-premise, dedicated team, 1-hour SLA, compliance',
    metadata: { tier: 'enterprise', seats: 'unlimited', custom: 'true' },
  });
  if (enterprise.ok) {
    const productId = enterprise.result?.id;
    summary.products.push({ tier: 'enterprise', productId });
    console.log(`  Product created: ${productId}`);

    // Custom pricing indicator
    const enterprisePrice = await executeTool('stripe', 'STRIPE_CREATE_PRICE', connections.stripe, {
      product: productId,
      currency: 'usd',
      unit_amount: 1500000, // $15,000 starting
      billing_scheme: 'per_unit',
      recurring: { interval: 'month' },
    });
    if (enterprisePrice.ok) {
      console.log(`  Starting price: ${enterprisePrice.result?.id} ($15,000+/mo)`);
      summary.products[summary.products.length - 1].priceId = enterprisePrice.result?.id;
    }
  } else {
    summary.errors.push({ product: 'enterprise', error: enterprise.error });
    console.log(`  Error: ${enterprise.error}`);
  }

  // ─── PRODUCT 4: Add-ons ────────────────────────────────────────────────
  console.log('→ Creating product: Zion Add-Ons');
  const addons = await executeTool('stripe', 'STRIPE_CREATE_PRODUCT', connections.stripe, {
    name: 'Zion Add-Ons',
    description: 'Bot Mode, Plugin Dev, A2A Protocol, Complete Deploy',
    metadata: { tier: 'addons' },
  });
  if (addons.ok) {
    const productId = addons.result?.id;
    summary.products.push({ tier: 'addons', productId });
    console.log(`  Product created: ${productId}`);

    // Bot Mode ($2,500)
    const botMode = await executeTool('stripe', 'STRIPE_CREATE_PRICE', connections.stripe, {
      product: productId,
      currency: 'usd',
      unit_amount: 250000,
      billing_scheme: 'per_unit',
    });
    if (botMode.ok) {
      console.log(`  Bot Mode price: ${botMode.result?.id} ($2,500)`);
    }

    // Plugin Dev ($3,000)
    const pluginDev = await executeTool('stripe', 'STRIPE_CREATE_PRICE', connections.stripe, {
      product: productId,
      currency: 'usd',
      unit_amount: 300000,
      billing_scheme: 'per_unit',
    });
    if (pluginDev.ok) {
      console.log(`  Plugin Dev price: ${pluginDev.result?.id} ($3,000)`);
    }

    // A2A Protocol ($5,000)
    const a2a = await executeTool('stripe', 'STRIPE_CREATE_PRICE', connections.stripe, {
      product: productId,
      currency: 'usd',
      unit_amount: 500000,
      billing_scheme: 'per_unit',
    });
    if (a2a.ok) {
      console.log(`  A2A Protocol price: ${a2a.result?.id} ($5,000)`);
    }
  } else {
    summary.errors.push({ product: 'addons', error: addons.error });
    console.log(`  Error: ${addons.error}`);
  }

  // ─── NOTIFY TEAM ────────────────────────────────────────────────────────
  console.log('\n→ Notifying team via Slack');
  const slackMsg = `💰 Zion Stripe Products Created

${summary.products.map(p => `• ${p.tier}: ${p.productId}`).join('\n')}

${summary.errors.length > 0 ? `Errors: ${summary.errors.length}` : '✅ All products created successfully'}`;

  await executeTool('slack', 'SLACK_SEND_MESSAGE', connections.slack, {
    channel: process.env.SLACK_CHANNEL || '#ops',
    text: slackMsg,
  });

  // ─── EMAIL RECEIPT ──────────────────────────────────────────────────────
  console.log('→ Sending email receipt via Resend');
  await executeTool('resend', 'RESEND_SEND_EMAIL', connections.resend, {
    from: 'Zion Tech Group <noreply@ziontechgroup.com>',
    to: ['kleber@ziontechgroup.com'],
    subject: `[Zion] Stripe Products Created — ${ts.slice(0, 10)}`,
    text: `Stripe products have been created for Zion Tech Group.\n\n${JSON.stringify(summary, null, 2)}`,
  });

  console.log('\n═══ SETUP COMPLETE ═══');
  console.log(JSON.stringify(summary, null, 2));
  return summary;
}

run().catch(e => { console.error('FATAL:', e); process.exit(1); });

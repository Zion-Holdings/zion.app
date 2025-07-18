import Stripe from 'stripe';
import { withSentry } from '../../api/withSentry.cjs';
import {logErrorToProduction} from '@/utils/productionLogger';
import type { NextApiRequest, NextApiResponse } from 'next';


const PROD_DOMAIN = 'app.ziontechgroup.com';

function isProdDomain() {
  const context = process.env['CONTEXT'];
  if (context && context !== 'production') {
    return false;
  }
  const url = process.env['URL'] || '';
  try {
    return new URL(url).hostname === PROD_DOMAIN;
  } catch {
    return false;
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req['method'] !== 'POST') {
    res.status(405);
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { amount, userId } = (req['body'] as { amount?: number; userId?: string }) || {};
  if (typeof amount !== 'number') {
    res.status(400).json({ error: 'Invalid amount' });
    return;
  }

  try {
    const liveKey = process.env['STRIPE_SECRET_KEY'] || '';
    const testKey = process.env['STRIPE_TEST_SECRET_KEY'] || liveKey;
    const useTest =
      process.env['STRIPE_TEST_MODE'] === 'true' ||
      (!isProdDomain() && liveKey.startsWith('sk_live'));

    if (!isProdDomain() && liveKey.startsWith('sk_live') && !process.env['STRIPE_TEST_SECRET_KEY']) {
      throw new Error('Refusing to use live Stripe key on non-production domain');
    }

    // This route uses the official Stripe Node.js SDK for server-to-server communication.
    // The getStripe() client-side helper (from src/utils/getStripe.ts) and its
    // advancedFraudSignals option are not applicable to this server-side implementation.
    const stripe = new (Stripe as unknown as typeof Stripe)(useTest ? testKey : liveKey, {
      apiVersion: '2025-06-30.basil',
    });
    const intent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'usd',
      metadata: userId ? { userId } : {},
      automatic_payment_methods: { enabled: true },
    });
    res.status(200).json({ clientSecret: intent.client_secret, id: intent.id });
  } catch (error) {
    logErrorToProduction('Create payment intent error:', { data: error });
    res.status(500).json({ error: err instanceof Error ? err.message : 'An error occurred' });
  }
}

export default withSentry(handler);

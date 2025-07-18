

import { Button } from '@/components/ui/button';'';

import { logErrorToProduction } from '@/utils/productionLogger';'';

      if (!stripe) throw new Error('Stripe not loaded');'';
      const res = await fetch('/api/checkout-session', {'';
        method: 'POST','';
        headers: { 'Content-Type': 'application/json' },'';
      if (!stripe) throw new Error('Stripe not loaded')'';
      const res = await fetch('/api/checkout-session'';
        method: 'POST'';
        headers: { 'Content-Type': 'application/json'';
      if (!res.ok) throw new Error(data.error || 'Failed to create session');'';
      if (!res.ok) throw new Error(data.error || 'Failed to create session')'';
        logErrorToProduction('Stripe redirect error:', { data: error });'';
      logErrorToProduction('Checkout error:', { data: err });'';
        logErrorToProduction('Stripe redirect error:', { data: error })'';
      logErrorToProduction('Checkout error:', { data: err })''
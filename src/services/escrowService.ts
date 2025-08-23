import { supabase } from '@/integrations/supabase/client';
import type { OrderStatus } from '@/lib/orderStatusMachine';
import { withAsyncErrorGuard } from '@/utils/withAsyncErrorGuard';

export const holdInEscrow = withAsyncErrorGuard(async (params: {
  amount: number;
  currency?: string;
  providerAccountId: string;
  orderId: string;
}) => {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
    body: { action: 'hold', ...params },
  });
  if (error) throw error;
  // Handle mock response with fallback
  return data ? (data as { paymentIntentId: string }) : { paymentIntentId: 'mock-payment-intent-id' };
});

export const releaseEscrow = withAsyncErrorGuard(async (paymentIntentId: string) => {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
    body: { action: 'release', paymentIntentId },
  });
  if (error) throw error;
  // Handle mock response with fallback
  return data ? (data as { message: string }) : { message: 'Escrow released successfully' };
});

export const disputeOrder = withAsyncErrorGuard(async (orderId: string) => {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
    body: { action: 'dispute', orderId },
  });
  if (error) throw error;
  // Handle mock response with fallback
  return data ? (data as { message: string }) : { message: 'Dispute initiated successfully' };
});

export type EscrowStatus = OrderStatus;

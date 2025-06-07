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
  return data as { paymentIntentId: string };
});

export const releaseEscrow = withAsyncErrorGuard(async (paymentIntentId: string) => {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
    body: { action: 'release', paymentIntentId },
  });
  if (error) throw error;
  return data as { message: string };
});

export const disputeOrder = withAsyncErrorGuard(async (orderId: string) => {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
    body: { action: 'dispute', orderId },
  });
  if (error) throw error;
  return data as { message: string };
});

export type EscrowStatus = OrderStatus;

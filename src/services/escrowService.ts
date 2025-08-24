import { supabase } from '@/integrations/supabase/client';
import type { OrderStatus } from '@/lib/orderStatusMachine';

export async function holdInEscrow(params: {
  amount: number;
  currency?: string;
  providerAccountId: string;
  orderId: string;
}) {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
    body: { action: 'hold', ...params },
  });
  if (error) throw error;
  return data as { paymentIntentId: string };
}

export async function releaseEscrow(paymentIntentId: string) {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
    body: { action: 'release', paymentIntentId },
  });
  if (error) throw error;
  return data as { message: string };
}

export async function disputeOrder(orderId: string) {
  const { data, error } = await supabase.functions.invoke('escrow-service', {
    body: { action: 'dispute', orderId },
  });
  if (error) throw error;
  return data as { message: string };
}

export type EscrowStatus = OrderStatus;

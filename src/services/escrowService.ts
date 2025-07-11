import { supabase } from '@/integrations/supabase/client';
import type { OrderStatus } from '@/lib/orderStatusMachine';
import { logErrorToProduction } from '@/utils/productionLogger';

export const holdInEscrow = async (params: {
  amount: number;
  currency?: string;
  providerAccountId: string;
  orderId: string;
}) => {
  try {
    if (!supabase) throw new Error('Supabase client not initialized');
    const { data, error } = await supabase.functions.invoke('escrow-service', {
      body: { action: 'hold', ...params },
    });
    if (error) throw error;
    // Handle mock response with fallback
    return data ? (data as { paymentIntentId: string }) : { paymentIntentId: 'mock-payment-intent-id' };
  } catch (err) {
    logErrorToProduction('Error in holdInEscrow', { data: err });
    throw err;
  }
};

export const releaseEscrow = async (paymentIntentId: string) => {
  try {
    if (!supabase) throw new Error('Supabase client not initialized');
    const { data, error } = await supabase.functions.invoke('escrow-service', {
      body: { action: 'release', paymentIntentId },
    });
    if (error) throw error;
    // Handle mock response with fallback
    return data ? (data as { message: string }) : { message: 'Escrow released successfully' };
  } catch (err) {
    logErrorToProduction('Error in releaseEscrow', { data: err });
    throw err;
  }
};

export const disputeOrder = async (orderId: string) => {
  try {
    if (!supabase) throw new Error('Supabase client not initialized');
    const { data, error } = await supabase.functions.invoke('escrow-service', {
      body: { action: 'dispute', orderId },
    });
    if (error) throw error;
    // Handle mock response with fallback
    return data ? (data as { message: string }) : { message: 'Dispute initiated successfully' };
  } catch (err) {
    logErrorToProduction('Error in disputeOrder', { data: err });
    throw err;
  }
};

export type EscrowStatus = OrderStatus;

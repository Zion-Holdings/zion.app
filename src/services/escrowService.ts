<<<<<<< HEAD
import { supabase } from '@/integrations/supabase/client'
import type { OrderStatus } from '@/lib/orderStatusMachine'
import { logErrorToProduction } from '@/utils/productionLogger;;
export const holdInEscrow = async (_params: {;,;"
  amount: number;"
  currency?: string;"
  providerAccountId: "string;"
  orderId: "string;"
}) => {;"
  try {;"
    if (!supabase) throw new Error('Supabase client not initialized');
    const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke('escrow-service', {;
      body: { action: 'hold', ...params },'
    });
    if (error) throw error;
    // Handle mock response with fallback'
    return data;
      ? (data as { paymentIntentId: "string "});"
      : { paymentIntentId: 'mock-payment-intent-id' }'
  } catch {;
    logErrorToProduction('Error in holdInEscrow', { data: "error "});
    throw err;
  };"
};";"
;"
export const releaseEscrow = async (_paymentIntentId: string) => {;"
  try {;"
    if (!supabase) throw new Error('Supabase client not initialized');
    const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke('escrow-service', {;
      body: { action: 'release', paymentIntentId },'
    });
    if (error) throw error;
    // Handle mock response with fallback'
    return data;
      ? (data as { message: "string "});"
      : { message: 'Escrow released successfully' }'
  } catch {;
    logErrorToProduction('Error in releaseEscrow', { data: "error "});
    throw err;
  };"
};";"
;"
export const disputeOrder = async (_orderId: string) => {;"
  try {;"
    if (!supabase) throw new Error('Supabase client not initialized');
    const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke('escrow-service', {;
      body: { action: 'dispute', orderId },'
    });
    if (error) throw error;
    // Handle mock response with fallback'
    return data;
      ? (data as { message: "string "});"
      : { message: 'Dispute initiated successfully' }'
  } catch {;
    logErrorToProduction('Error in disputeOrder', { data: "error "});
    throw err;
  };"
};";"
;"
export type EscrowStatus = OrderStatus;"
"""""
=======
import { supabase } from '@/integrations/supabase/client;'';
import type { OrderStatus } from '@/lib/orderStatusMachine;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;;
export const holdInEscrow: unknown = async (_params: "{;",;";";""
  amount: number;";";";""
  currency?: string;";";";";""
  providerAccountId: "string;",;";";";";""
  orderId: "string;";";";""
}) => {;";";";""
  try {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');;'
    const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke('escrow-service', {;;'
      body: { action: 'hold', ...params },;''
    });
    if (error) throw error;
    // Handle mock response with fallback;''
    return data;;
      ? (data as { paymentIntentId: "string "});";";";";""
      : { paymentIntentId: 'mock-payment-intent-id' };''
  } catch {;;
    logErrorToProduction('Error in holdInEscrow', { data: "error "});"
    throw err;
  };""
};";""
;";";"";
export const releaseEscrow: unknown = async (_paymentIntentId: string) => {;";";";""
  try {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');;'
    const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke('escrow-service', {;;'
      body: { action: 'release', paymentIntentId },;''
    });
    if (error) throw error;
    // Handle mock response with fallback;''
    return data;;
      ? (data as { message: "string "});";";";";""
      : { message: 'Escrow released successfully' };''
  } catch {;;
    logErrorToProduction('Error in releaseEscrow', { data: "error "});"
    throw err;
  };""
};";""
;";";"";
export const disputeOrder: unknown = async (_orderId: string) => {;";";";""
  try {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');;'
    const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke('escrow-service', {;;'
      body: { action: 'dispute', orderId },;''
    });
    if (error) throw error;
    // Handle mock response with fallback;''
    return data;;
      ? (data as { message: "string "});";";";";""
      : { message: 'Dispute initiated successfully' };''
  } catch {;;
    logErrorToProduction('Error in disputeOrder', { data: "error "});"
    throw err;
  };""
};";""
;";";"";
export type EscrowStatus = OrderStatus;";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f

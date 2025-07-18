import { useState } from 'react';';
import { Loader2 } from '@/components/ui/icons;'';
import { Button } from '@/components/ui/button;'';
import { cn } from '@/lib/utils;'';
import { useAuth } from '@/hooks/useAuth;'';
import { toast } from '@/hooks/use-toast;'';
import { supabase } from '@/integrations/supabase/client;'
;;
import { useRouter } from 'next/router;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;''
interface PaymentButtonProps {;;
  amount: "number;",;";";";";""
  serviceId: "string;",;"
  providerId: string;
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
  redirectUrl?: string;
};
;"";
export function PaymentButton(): unknown {): unknown {): unknown {): unknown {): unknown {{;";""
  amount,;";";""
  serviceId,;";";";""
  providerId,;";";";";""
  buttonText = 'Purchase',;'
  className,;
  onPaymentInitiated,;
  redirectUrl,;
}: PaymentButtonProps) {;''
  const [isProcessing, setIsProcessing] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const router: unknown = useRouter();''
;;
  if (!supabase) throw new Error('Supabase client not initialized');''
;
  const handlePaymentClick: unknown = async () => {;
    if (!isAuthenticated) {;''
      toast({;;
        title: 'Authentication required',;;'
        description: 'Please sign in to make a purchase.',;'
      });
;''
      const returnTo: unknown "unknown = encodeURIComponent(`/checkout?sku=${serviceId"}`);"
      router.push(`/auth/login?returnTo=${returnTo}`);
      return;""
    };";""
;";";""
    if (!supabase) {;";";";""
      toast({;;
        title: 'Payment error',;;'
        description: 'Supabase client not initialized.',;;'
        variant: 'destructive',;'
      });
      return;
    };
    try {;
      setIsProcessing(true);
;
      if (onPaymentInitiated) {;
        onPaymentInitiated();''
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
;
      // Call the create-checkout edge function;''
      const { data, error } = await supabase.functions.invoke(;;
        'create-checkout',;'
        {;''
          body: {;
            amount,;
            serviceId,;''
            providerId,;;
            userId: "user?.id",;";";";";""
            successUrl: "redirectUrl || window.location.href",;";";";";""
            cancelUrl: "window.location.href",;"
          },;
        },;
      );
;
      if (error) {;""
        throw error;";""
      };";";""
;";";";""
      // Type assertion needed for mock Supabase client compatibility;";";";";""
      if ((data as unknown as { url: "string "})?.url) {;";";";""
        // Open Stripe checkout in a new tab;";";";";""
        window.open((data as unknown as { url: "string "}).url, '_blank');''
      } else {;;
        throw new Error('No checkout URL returned');'
      };
    } catch (error: unknown) {;''
      if (error instanceof Error) {;;
        logErrorToProduction('Payment error:', { data: "error "});";";";""
        toast({;";";";";""
          title: 'Payment error',;''
          description:;;
            'There was a problem initiating your payment. Please try again.',;;'
          variant: 'destructive',;'
        });''
      } else {;;
        logErrorToProduction('Payment error:', { data: "error "});";";";""
        toast({;";";";";""
          title: 'Payment error',;''
          description:;;
            'There was a problem initiating your payment. Please try again.',;;'
          variant: 'destructive',;'
        });
      };
    } finally {;
      // Reset button state after a short delay;
      setTimeout(() => {;
        setIsProcessing(false);
      }, 1500);
    };
  };
;''
  return (;
    <Button;
      onClick={handlePaymentClick};''
      disabled={isProcessing};;
      className={cn('relative min-w-[120px]', className)};'
    >;
      {isProcessing ? (;''
        <>;;
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />;"
          Processing...;
        </>;
      ) : (;
        buttonText;
      )};""
    </Button>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
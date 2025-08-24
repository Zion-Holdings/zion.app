
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function PaymentSuccess() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">
        <div className="inline-flex h-12 w-12 rounded-full bg-green-100 mb-4 items-center justify-center">
          <CheckCircle2 className="h-6 w-6 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-2">Payment Successful!</h1>
        
        <p className="text-zion-slate-light mb-6">
          Your payment has been processed successfully. You now have access to all the premium features.
        </p>
        
        <div className="flex flex-col space-y-3">
          <Button 
            onClick={() => navigate('/dashboard')}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Go to Dashboard
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => navigate('/')}
            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
}

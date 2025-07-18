<<<<<<< HEAD
import { useState } from 'react';;
import { Loader2 } from '@/components/ui/icons';;
import { Button } from '@/components/ui/button';'

import { useAuth } from '@/hooks/useAuth';;
import { getStripe } from '@/utils/getStripe';;
import { logErrorToProduction } from '@/utils/productionLogger';'

=======
import { useState } from 'react''
import { Loader2 } from '@/components/ui/icons''
import { Button } from '@/components/ui/button''
import { useAuth } from '@/hooks/useAuth''
import { getStripe } from '@/utils/getStripe''
import { logErrorToProduction } from '@/utils/productionLogger''
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export default function CheckoutButton({ priceId, quantity = 1 }) {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const handleClick = async () => {
    setLoading(true);
    try {
      const stripe = await getStripe();
<<<<<<< HEAD
      if (!stripe) throw new Error('Stripe not loaded');'

      const res = await fetch('/api/checkout-session', {'
        method: 'POST','
        headers: { 'Content-Type': 'application/json' },'
=======
      if (!stripe) throw new Error('Stripe not loaded')'
      const res = await fetch('/api/checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        body: JSON.stringify({
          priceId,
          quantity,
          customer_email: user?.email,
          successUrl: `${window.location.origin}/checkout/success`,``
          cancelUrl: `${window.location.origin}/checkout/cancel`,
        }),
      });
      const data = await res.json();
<<<<<<< HEAD
      if (!res.ok) throw new Error(data.error || 'Failed to create session');'

=======
      if (!res.ok) throw new Error(data.error || 'Failed to create session')'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });
      if (error)
<<<<<<< HEAD
        logErrorToProduction('Stripe redirect error:', { data: error });'
    } catch (err) {
      logErrorToProduction('Checkout error:', { data: err });'
=======
        logErrorToProduction('Stripe redirect error:', { data: error })'
    } catch (err) {
      logErrorToProduction('Checkout error:', { data: err })'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    } finally {
      setLoading(false);

  };

  return (
<<<<<<< HEAD
    <Button onClick={handleClick} disabled={loading} className="w-full">"
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />"
=======
    <Button onClick={handleClick} disabled={loading} className="w-full>
      {loading ? (
        <>"
          <Loader2 className=h-4 w-4 mr-2 animate-spin" />
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          Processing...
        </>
      ) : (
        'Pay with Stripe''
      )}
    </Button>
  )'
`
';;``
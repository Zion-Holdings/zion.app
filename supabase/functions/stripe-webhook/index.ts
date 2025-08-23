import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';
import Stripe from 'https://esm.sh/stripe@14.21.0';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';
import { createShippoShipment } from '../_shared/shippo.ts';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  { auth: { persistSession: false } },
);

const useTest = Deno.env.get('STRIPE_TEST_MODE') === 'true';
const stripeKey = useTest
  ? Deno.env.get('STRIPE_TEST_SECRET_KEY') ||
    Deno.env.get('STRIPE_SECRET_KEY') || ''
  : Deno.env.get('STRIPE_SECRET_KEY') || '';
const stripe = new Stripe(stripeKey, {
  apiVersion: '2023-10-16',
});

const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET') || '';

serve(async (req) => {
  if (req.method === 'POST') {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature') || '';

    let event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = session.metadata?.orderId;
      if (orderId) {
        await supabase
          .from('orders')
          .update({ status: 'paid' })
          .eq('id', orderId);

        const { data: order } = await supabase
          .from('orders')
          .select('shipping_address, items')
          .eq('id', orderId)
          .single();

        if (order?.shipping_address) {
          try {
            const shipment = await createShippoShipment({
              address_to: order.shipping_address,
              parcels: order.items || [],
            });

            await supabase
              .from('orders')
              .update({
                tracking_number: shipment.tracking_number,
                tracking_status: shipment.tracking_status?.status,
                tracking_events: shipment.tracking_history,
              })
              .eq('id', orderId);
          } catch (err) {
            console.error('Error creating shipment', err);
          }
        }
      }
    }

    if (event.type === 'payment_intent.succeeded') {
      const intent = event.data.object as Stripe.PaymentIntent;
      const userId = intent.metadata?.userId;
      const orderId = intent.metadata?.orderId;
      if (orderId) {
        await supabase
          .from('orders')
          .update({ status: 'paid' })
          .eq('id', orderId);
      }
      if (userId) {
        const amount = intent.amount_received || 0;
        const points = Math.floor(amount / 10000) * 10; // 10 pts per $100

        if (points > 0) {
          await supabase.from('points_ledger').insert({
            user_id: userId,
            delta: points,
            reason: 'purchase',
            order_id: orderId ?? null,
          });

          const { data: profile } = await supabase
            .from('profiles')
            .select('points')
            .eq('id', userId)
            .single();

          const current = profile?.points ?? 0;
          await supabase
            .from('profiles')
            .update({ points: current + points })
            .eq('id', userId);
        }

        if (orderId) {
          const { data: notificationId, error } = await supabase.rpc(
            'create_notification',
            {
              _user_id: userId,
              _title: 'Order Paid',
              _message: `Your order #${orderId} has been paid.`,
              _type: 'order_status',
              _related_id: orderId,
            },
          );

          if (error) {
            console.error('Error creating order notification:', error.message);
          } else if (notificationId) {
            try {
              await supabase.functions.invoke('send-notification-email', {
                body: { user_id: userId, notification_id: notificationId },
              });
            } catch (err) {
              console.error('Error invoking send-notification-email:', err);
            }
          }
        }
      }
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 });
  }

  return new Response('Not found', { status: 404 });
});

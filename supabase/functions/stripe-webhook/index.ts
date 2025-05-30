import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { createShippoShipment } from "../_shared/shippo.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  { auth: { persistSession: false } }
);

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
});

const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET") || "";

serve(async (req) => {
  if (req.method === "POST") {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature") || "";

    let event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = session.metadata?.orderId;
      if (orderId) {
        await supabase.from("orders").update({ status: "paid" }).eq("id", orderId);

        const { data: order } = await supabase
          .from("orders")
          .select("shipping_address, items")
          .eq("id", orderId)
          .single();

        if (order?.shipping_address) {
          try {
            const shipment = await createShippoShipment({
              address_to: order.shipping_address,
              parcels: order.items || []
            });

            await supabase
              .from("orders")
              .update({
                tracking_number: shipment.tracking_number,
                tracking_status: shipment.tracking_status?.status,
                tracking_events: shipment.tracking_history
              })
              .eq("id", orderId);
          } catch (err) {
            console.error("Error creating shipment", err);
          }
        }
      }
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 });
  }

  return new Response("Not found", { status: 404 });
});

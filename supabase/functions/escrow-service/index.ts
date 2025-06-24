import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { corsHeaders } from "../_shared/cors.ts";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
  );

  const useTest = Deno.env.get("STRIPE_TEST_MODE") === "true";
  const stripeKey = useTest
    ? Deno.env.get("STRIPE_TEST_SECRET_KEY") ||
      Deno.env.get("STRIPE_SECRET_KEY") || ""
    : Deno.env.get("STRIPE_SECRET_KEY") || "";
  const stripe = new Stripe(stripeKey, {
    apiVersion: "2023-10-16",
  });

  try {
    const body = await req.json();
    const {
      action,
      amount,
      currency = "usd",
      providerAccountId,
      paymentIntentId,
      orderId,
    } = body;

    switch (action) {
      case "hold": {
        const intent = await stripe.paymentIntents.create({
          amount: Math.round(Number(amount) * 100),
          currency,
          capture_method: "manual",
          payment_method_types: ["card"],
          transfer_data: providerAccountId
            ? { destination: providerAccountId }
            : undefined,
          metadata: { orderId },
        });

        await supabase.from("transactions").insert({
          order_id: orderId,
          provider_id: providerAccountId,
          amount,
          currency,
          status: "in_escrow",
          in_escrow: true,
          stripe_payment_intent: intent.id,
          created_at: new Date().toISOString(),
        });

        return new Response(
          JSON.stringify({ paymentIntentId: intent.id }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      case "release": {
        if (!paymentIntentId)
          throw new Error("paymentIntentId required");
        await stripe.paymentIntents.capture(paymentIntentId);
        await supabase
          .from("transactions")
          .update({
            status: "released",
            released_at: new Date().toISOString(),
            in_escrow: false,
          })
          .eq("stripe_payment_intent", paymentIntentId);
        return new Response(
          JSON.stringify({ message: "released" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      case "dispute": {
        if (!orderId) throw new Error("orderId required");
        await supabase
          .from("transactions")
          .update({ status: "disputed" })
          .eq("order_id", orderId);
        return new Response(
          JSON.stringify({ message: "dispute filed" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      default:
        return new Response(
          JSON.stringify({ error: "invalid action" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
    }
  } catch (err) {
    console.error("escrow-service error", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { productId } = await req.json();

    const useTest = Deno.env.get("STRIPE_TEST_MODE") === "true";
    const stripeKey = useTest
      ? Deno.env.get("STRIPE_TEST_SECRET_KEY") ||
        Deno.env.get("STRIPE_SECRET_KEY") || ""
      : Deno.env.get("STRIPE_SECRET_KEY") || "";
    const stripe = new Stripe(stripeKey, {
      apiVersion: "2023-10-16",
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: productId, quantity: 1 }],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
    });

    return new Response(JSON.stringify({ sessionId: session.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});

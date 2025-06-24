
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  // Create service client for writing to database
  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
  );

  try {
    // Retrieve the request body
    const requestData = await req.json();
    const { 
      amount, 
      serviceId = null,
      providerId = null,
      escrow = false,
      productType = "service",
      currency = "usd",
      successUrl,
      cancelUrl
    } = requestData;
    
    // Verify the amount is valid
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      throw new Error("Invalid payment amount");
    }

    // Authenticate the user
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data: { user } } = await supabaseClient.auth.getUser(token);
    
    if (!user?.email) throw new Error("User not authenticated");

    const useTest = Deno.env.get("STRIPE_TEST_MODE") === "true";
    const stripeKey = useTest
      ? Deno.env.get("STRIPE_TEST_SECRET_KEY") ||
        Deno.env.get("STRIPE_SECRET_KEY") || ""
      : Deno.env.get("STRIPE_SECRET_KEY") || "";
    const stripe = new Stripe(stripeKey, {
      apiVersion: "2023-10-16",
    });

    // Check if customer exists
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Determine product name and description based on the request
    const productName = productType === "service" 
      ? "Service Payment" 
      : "Premium Subscription";
    
    const productDescription = escrow 
      ? "Payment held in escrow until service completion" 
      : "Direct payment for services";

    // Create the session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: { 
              name: productName,
              description: productDescription
            },
            unit_amount: amount * 100, // Convert to cents
            ...(productType === "subscription" ? { recurring: { interval: "month" } } : {})
          },
          quantity: 1,
        },
      ],
      mode: productType === "subscription" ? "subscription" : "payment",
      success_url: successUrl || `${req.headers.get("origin")}/payment-success`,
      cancel_url: cancelUrl || `${req.headers.get("origin")}/payment-canceled`,
      metadata: {
        userId: user.id,
        serviceId: serviceId,
        providerId: providerId,
        escrow: escrow.toString(),
        productType: productType
      }
    });

    // Record transaction in database
    if (serviceId && providerId) {
      await supabaseAdmin.from("transactions").insert({
        user_id: user.id,
        provider_id: providerId,
        service_id: serviceId,
        stripe_session_id: session.id,
        amount: amount,
        currency: currency,
        status: "pending",
        in_escrow: escrow,
        created_at: new Date().toISOString()
      });
    }

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Checkout error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});

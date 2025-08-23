import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, location, details } = await req.json();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    const { data, error } = await supabase
      .from("onsite_service_requests")
      .insert([{ name, email, phone, company, location, details }]);

    if (error) throw error;

    await supabase.functions.invoke('send-email', {
      body: {
        to: Deno.env.get('ALERT_EMAIL') ?? 'kleber@ziontechgroup.com',
        subject: 'New Onsite Service Request',
        html: `
          <h1>New Onsite Service Request</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || ''}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || ''}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Details:</strong></p>
          <p>${details || ''}</p>
        `,
      },
    });

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

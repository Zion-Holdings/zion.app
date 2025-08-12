import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const supabase = createClient(supabaseUrl, serviceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { data: users } = await supabase
      .from("profiles")
      .select("id, display_name, points")
      .order("points", { ascending: false })
      .limit(10);

    const leaderboard = (users || [])
      .map((u: any, idx: number) => `${idx + 1}. ${u.display_name} - ${u.points} pts`)
      .join("<br>");

    const { data: emails } = await supabase
      .from("auth.users")
      .select("email");

    for (const e of emails || []) {
      if (!e.email) continue;
      await resend.emails.send({
        from: "Zion <notifications@ziontechgroup.com>",
        to: e.email,
        subject: "Monthly Leaderboard",
        html: `<p>Top Users:</p><p>${leaderboard}</p>`,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("leaderboard email error", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});

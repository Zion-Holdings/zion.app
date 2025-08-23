import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { days_back = 7 } = await req.json();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days_back);

    const { data, error } = await supabaseClient
      .from("analytics_events")
      .select("metadata, created_at")
      .eq("event_type", "feature_usage")
      .gte("created_at", startDate.toISOString());

    if (error) {
      console.error("Error fetching feature usage data:", error);
      throw error;
    }

    const usageByDate: Record<string, Record<string, number>> = {};

    data.forEach((event) => {
      const date = new Date(event.created_at).toISOString().split("T")[0];
      const feature = event.metadata?.feature ?? "unknown";

      if (!usageByDate[date]) usageByDate[date] = {};
      if (!usageByDate[date][feature]) usageByDate[date][feature] = 0;

      usageByDate[date][feature]++;
    });

    const result = Object.entries(usageByDate).map(([date, features]) => ({
      date,
      ...features,
    })).sort((a, b) => a.date.localeCompare(b.date));

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});


import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Parse the request body
    const { days_back = 7 } = await req.json();
    
    // Calculate the start date
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days_back);

    // Query analytics events
    const { data, error } = await supabaseClient
      .from("analytics_events")
      .select("event_type, created_at")
      .gte("created_at", startDate.toISOString());

    if (error) {
      console.error("Error fetching analytics data:", error);
      throw error;
    }

    // Group events by date and event type
    const eventsByDate = {};
    
    data.forEach((event) => {
      const date = new Date(event.created_at).toISOString().split("T")[0];
      if (!eventsByDate[date]) {
        eventsByDate[date] = { date };
      }
      
      if (!eventsByDate[date][event.event_type]) {
        eventsByDate[date][event.event_type] = 0;
      }
      
      eventsByDate[date][event.event_type]++;
    });

    // Convert to array for easier consumption by frontend
    const result = Object.values(eventsByDate).sort((a, b) => a.date.localeCompare(b.date));

    return new Response(JSON.stringify(result), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
});

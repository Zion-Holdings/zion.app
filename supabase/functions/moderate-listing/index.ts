import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ModerationRequest {
  listingId: string;
  listingType: "product" | "service";
  description: string;
  images?: string[];
  sellerId: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: ModerationRequest = await req.json();
    const { listingId, listingType, description, images = [], sellerId } = body;

    if (!listingId || !listingType || !description || !sellerId) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const openaiKey = Deno.env.get("OPENAI_API_KEY");

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const results: unknown[] = [];
    let flagged = false;

    if (openaiKey) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiKey}`,
      };

      const modRes = await fetch("https://api.openai.com/v1/moderations", {
        method: "POST",
        headers,
        body: JSON.stringify({ input: description }),
      });
      const modData = await modRes.json();
      results.push({ field: "description", result: modData });
      flagged ||= modData.results?.some((r: any) => r.flagged);

      for (const img of images) {
        const imgRes = await fetch("https://api.openai.com/v1/moderations", {
          method: "POST",
          headers,
          body: JSON.stringify({ input: img }),
        });
        const imgData = await imgRes.json();
        results.push({ field: "image", url: img, result: imgData });
        flagged ||= imgData.results?.some((r: any) => r.flagged);
      }
    }

    // Store moderation log
    await supabase.from("moderation_logs").insert({
      listing_id: listingId,
      listing_type: listingType,
      flagged,
      result: results,
    });

    if (flagged) {
      // Update listing status if table exists
      const table = listingType === "product" ? "product_listings" : "service_listings";
      await supabase.from(table).update({ status: "pending_review" }).eq("id", listingId);

      // Notify seller
      await supabase.rpc("create_notification", {
        _user_id: sellerId,
        _title: "Listing flagged for review",
        _message: "Your listing has been flagged by our moderation system and is pending review.",
        _type: "moderation",
        _related_id: listingId,
      });
    }

    return new Response(
      JSON.stringify({ success: true, flagged }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error moderating listing:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

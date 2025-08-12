
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req) => {
  // Parse the URL to get the tracking parameters
  const url = new URL(req.url);
  const type = url.searchParams.get("type"); // "open" or "click"
  const campaignId = url.searchParams.get("cid");
  const userId = url.searchParams.get("uid");
  const redirectUrl = url.searchParams.get("redirect");

  // Validate required parameters
  if (!type || !campaignId || !userId) {
    return new Response(
      JSON.stringify({ error: "Missing required parameters" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    // Update the email campaign record based on event type
    if (type === "open") {
      await supabase
        .from("email_campaigns")
        .update({ opened_at: new Date().toISOString() })
        .eq("id", campaignId)
        .eq("user_id", userId);

      // Return a 1x1 transparent GIF
      return new Response(
        new Uint8Array([
          0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00,
          0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x21, 0xF9, 0x04, 0x01, 0x00,
          0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,
          0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3B,
        ]),
        {
          headers: {
            "Content-Type": "image/gif",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "Pragma": "no-cache",
            "Expires": "0",
          },
        }
      );
    } else if (type === "click") {
      await supabase
        .from("email_campaigns")
        .update({ clicked_at: new Date().toISOString() })
        .eq("id", campaignId)
        .eq("user_id", userId);

      // Redirect to the specified URL or default to dashboard
      const destination = redirectUrl || `${supabaseUrl}/dashboard`;
      return new Response(null, {
        status: 302,
        headers: {
          Location: destination,
        },
      });
    }

    return new Response(
      JSON.stringify({ error: "Invalid event type" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error tracking email event:", error);
    
    // If it was a click event, still try to redirect the user
    if (type === "click" && redirectUrl) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: redirectUrl,
        },
      });
    }
    
    return new Response(
      JSON.stringify({ error: "Error processing event" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});

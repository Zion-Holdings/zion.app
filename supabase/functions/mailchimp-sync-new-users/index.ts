import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { MailchimpService } from "../../..//src/integrations/mailchimp/MailchimpService.ts";

serve(async (req) => {
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const apiKey = Deno.env.get("MAILCHIMP_API_KEY") ?? "";
    const listId = Deno.env.get("MAILCHIMP_LIST_ID") ?? "";
    const mailchimp = new MailchimpService(apiKey, listId);

    // Fetch users created in the last 24 hours
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { data: users, error } = await supabase
      .from("profiles")
      .select("email, display_name")
      .gt("created_at", since);

    if (error) throw error;

    for (const u of users || []) {
      await mailchimp.upsertMember({
        email: u.email,
        mergeFields: { FNAME: u.display_name }
      });
    }

    return new Response(
      JSON.stringify({ synced: users?.length || 0 }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("mailchimp-sync-new-users error", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});

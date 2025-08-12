import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { MailchimpService } from "../../..//src/integrations/mailchimp/MailchimpService.ts";

serve(async () => {
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );
    const apiKey = Deno.env.get("MAILCHIMP_API_KEY") ?? "";
    const listId = Deno.env.get("MAILCHIMP_LIST_ID") ?? "";
    const mailchimp = new MailchimpService(apiKey, listId);

    // Example segmentation based on total purchase amount
    const { data: users } = await supabase
      .rpc('get_purchase_totals'); // assume a stored procedure

    for (const seg of users || []) {
      const segmentName = seg.segment;
      const emails = seg.emails as string[];

      // Create static segment in Mailchimp
      await mailchimp.request(`/lists/${listId}/segments`, {
        method: 'POST',
        body: JSON.stringify({ name: segmentName, static_segment: emails })
      });
    }

    return new Response(JSON.stringify({ exported: (users || []).length }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('mailchimp-export-segments error', err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
});

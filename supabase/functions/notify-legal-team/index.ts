import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotifyParams {
  whitepaperId: string;
  sharableLink: string;
  tokenName: string;
  submittedBy?: string; // Optional: user info
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { whitepaperId, sharableLink, tokenName, submittedBy }: NotifyParams = await req.json();

    if (!whitepaperId || !sharableLink || !tokenName) {
      return new Response(
        JSON.stringify({ error: "Missing required parameters for notification: whitepaperId, sharableLink, and tokenName are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Received request to notify legal team for whitepaper:
      ID: ${whitepaperId}
      Token Name: ${tokenName}
      Link: ${sharableLink}
      Submitted By: ${submittedBy || 'N/A'}
    `);

    // In a real scenario, this is where you would integrate with an email service (e.g., SendGrid, Resend)
    // or an internal notification system.
    // Example:
    // const emailClient = new EmailService(Deno.env.get('EMAIL_API_KEY'));
    // await emailClient.send({
    //   to: Deno.env.get('LEGAL_TEAM_EMAIL'),
    //   from: 'noreply@yourdomain.com',
    //   subject: `Whitepaper Review Request: ${tokenName}`,
    //   body: `A new whitepaper titled "${tokenName}" has been submitted for legal review. You can view it here: ${sharableLink}. Submitted by: ${submittedBy || 'System'}. Whitepaper ID: ${whitepaperId}.`
    // });

    // For now, just return success.
    // If using status update in 'shared_whitepapers' table, do it here:
    // const supabaseAdminClient = createClient(Deno.env.get('SUPABASE_URL') ?? '', Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '');
    // const { error: updateError } = await supabaseAdminClient
    //   .from('shared_whitepapers')
    //   .update({ status: 'pending_legal_review', submitted_to_counsel_at: new Date().toISOString() })
    //   .eq('id', whitepaperId);
    // if (updateError) throw new Error(`Failed to update whitepaper status: ${updateError.message}`);


    return new Response(
      JSON.stringify({ message: "Notification request processed. Legal team would be notified in a real setup." }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in notify-legal-team function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

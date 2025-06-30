
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { initSentry, captureSupabaseError, logStructured } from "../_shared/sentry.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const FUNCTION_NAME = "send-email";
const resendApiKey = Deno.env.get("RESEND_API_KEY");
let resend: Resend | null = null;

if (resendApiKey) {
  resend = new Resend(resendApiKey);
} else {
  logStructured("ERROR", "RESEND_API_KEY is not set. Email functionality will be disabled.", {}, FUNCTION_NAME);
}


serve(async (req) => {
  initSentry();

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  let requestData;
  try {
    requestData = await req.json();
    const { to, subject } = requestData;
    logStructured("INFO", "Received send-email request", { to, subjectPreview: subject?.substring(0, 50) }, FUNCTION_NAME);

    if (!resend) {
      throw new Error("Resend client is not initialized due to missing API key.");
    }

    const emailResponse = await resend.emails.send({
      from: Deno.env.get("RESEND_FROM_EMAIL") || "Lovable <onboarding@resend.dev>", // Make FROM configurable
      to: [to],
      subject,
      html: requestData.html, // Assuming html is part of requestData
    });

    logStructured("INFO", "Email sent successfully", { to, subject, messageId: emailResponse.id }, FUNCTION_NAME);

    return new Response(JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    logStructured("ERROR", "Error in send-email function", {
      errorMessage: error.message,
      errorStack: error.stack,
      requestDataPreview: JSON.stringify(requestData)?.substring(0, 200)
    }, FUNCTION_NAME);

    captureSupabaseError(error, {
      functionName: FUNCTION_NAME,
      request_url: req.url,
      request_method: req.method,
      request_body_preview: JSON.stringify(requestData)?.substring(0, 200)
    });

    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});

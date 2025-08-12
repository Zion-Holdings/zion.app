
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Call the database function to schedule retention emails
    const { data: scheduledCount, error: scheduleError } = await supabase.rpc(
      "schedule_retention_emails"
    );

    if (scheduleError) {
      throw new Error(`Failed to schedule retention emails: ${scheduleError.message}`);
    }

    console.log(`Scheduled ${scheduledCount} retention emails`);

    // Fetch pending retention email jobs
    const { data: pendingJobs, error: jobsError } = await supabase
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "send_retention_email")
      .eq("status", "pending")
      .limit(50);

    if (jobsError) {
      throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`);
    }

    const processedJobs = [];

    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        try {
          // Call the send-retention-email function for each job
          const reminderResponse = await fetch(
            `${supabaseUrl}/functions/v1/send-retention-email`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${supabaseServiceKey}`,
              },
              body: JSON.stringify(job),
            }
          );

          if (!reminderResponse.ok) {
            const errorText = await reminderResponse.text();
            console.error(`Failed to process job ${job.id}: ${errorText}`);
            
            // Update job status to failed
            await supabase
              .from("scheduled_jobs")
              .update({
                status: "failed",
              })
              .eq("id", job.id);
          } else {
            processedJobs.push(job.id);
          }
        } catch (error) {
          console.error(`Error processing job ${job.id}:`, error);
          
          // Update job status to failed
          await supabase
            .from("scheduled_jobs")
            .update({
              status: "failed",
            })
            .eq("id", job.id);
        }
      }
    }

    return new Response(
      JSON.stringify({
        message: "Retention emails processed successfully",
        emails_scheduled: scheduledCount,
        emails_processed: processedJobs.length,
        job_ids: processedJobs,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Error in process-retention-emails function:", error);

    return new Response(
      JSON.stringify({ 
        error: "Internal server error", 
        details: error.message
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});


import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }
  
  try {
    const supabase = createClient(
      supabaseUrl,
      supabaseServiceKey
    );
    
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc("create_scheduled_reminders");
    
    if (error) {
      console.error("Failed to create scheduled reminders:", error);
      return new Response(
        JSON.stringify({ error: "Failed to create scheduled reminders", details: error }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    // Process pending reminder jobs
    const { data: pendingJobs, error: jobsError } = await supabase
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "onboarding_reminder")
      .eq("status", "pending")
      .lt("scheduled_for", new Date().toISOString());
    
    if (jobsError) {
      console.error("Failed to fetch pending jobs:", jobsError);
      return new Response(
        JSON.stringify({ error: "Failed to fetch pending jobs", details: jobsError }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    const processedJobs = [];
    
    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        // Call the send-onboarding-reminder function for each job
        const reminderResponse = await fetch(
          `${supabaseUrl}/functions/v1/send-onboarding-reminder`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${supabaseServiceKey}`,
            },
            body: JSON.stringify(job.payload),
          }
        );
        
        if (reminderResponse.ok) {
          // Update job status to completed
          const { error: updateError } = await supabase
            .from("scheduled_jobs")
            .update({
              status: "completed",
              completed_at: new Date().toISOString(),
            })
            .eq("id", job.id);
          
          if (updateError) {
            console.error("Failed to update job status:", updateError);
          } else {
            processedJobs.push(job.id);
          }
        } else {
          console.error("Failed to send reminder for job:", job.id);
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
        message: "Reminders processed successfully",
        processed_jobs: processedJobs.length,
        job_ids: processedJobs,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});

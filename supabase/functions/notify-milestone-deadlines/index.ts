import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { corsHeaders } from "../_shared/cors.ts";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
  );

  try {
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    const { data: milestones, error } = await supabase
      .from("project_milestones")
      .select(
        "id, title, due_date, project_id, projects(client_id, talent_id)"
      )
      .gte("due_date", now.toISOString())
      .lt("due_date", tomorrow.toISOString())
      .in("status", ["pending", "in_progress", "submitted"]);

    if (error) throw error;

    for (const milestone of milestones ?? []) {
      const message = `Milestone "${milestone.title}" is due on ${new Date(
        milestone.due_date
      ).toLocaleDateString()}`;

      const clientId = milestone.projects?.client_id;
      const talentId = milestone.projects?.talent_id;

      if (clientId) {
        await supabase.rpc("create_notification", {
          _user_id: clientId,
          _title: "Milestone Due Soon",
          _message: message,
          _type: "project_update",
          _related_id: milestone.id,
        });
      }

      if (talentId) {
        await supabase.rpc("create_notification", {
          _user_id: talentId,
          _title: "Milestone Due Soon",
          _message: message,
          _type: "project_update",
          _related_id: milestone.id,
        });
      }
    }

    return new Response(
      JSON.stringify({ processed: milestones?.length || 0 }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (err) {
    console.error("Error processing milestone deadlines:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});

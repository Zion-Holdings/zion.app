import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const secret = (await req.json()).secret;
  if (secret !== Deno.env.get("CRON_SECRET")) {
    return new Response("Unauthorized", { status: 401 });
  }

  const url = `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-leaderboard-email`;
  await fetch(url, {
    method: "POST",
    headers: { "Authorization": `Bearer ${Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")}` },
  });

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
});

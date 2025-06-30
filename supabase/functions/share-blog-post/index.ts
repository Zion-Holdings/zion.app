import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { TwitterApi } from "npm:twitter-api-v2@1.2.0";
import { corsHeaders } from "../_shared/cors.ts";

interface ShareBlogPostRequest {
  title: string;
  url: string;
  summary?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { title, url, summary } = await req.json() as ShareBlogPostRequest;

    const client = new TwitterApi({
      appKey: Deno.env.get("TWITTER_API_KEY")!,
      appSecret: Deno.env.get("TWITTER_API_SECRET")!,
      accessToken: Deno.env.get("TWITTER_ACCESS_TOKEN")!,
      accessSecret: Deno.env.get("TWITTER_ACCESS_SECRET")!,
    });

    const text = `${summary || title} ${url}`.trim();
    const { data } = await client.v2.tweet(text);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in share-blog-post function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});

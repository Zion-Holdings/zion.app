
import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.20.0";
import { corsHeaders } from "../_shared/cors.ts";

console.log("Track Referral function started!");

serve(async (req) => {
  // Handle CORS pre-flight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  // Get request data
  const { refCode, userId, email } = await req.json();
  const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip');

  // Create Supabase client
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );

  try {
    // Look up the referrer from the referral code
    const { data: refCodeData, error: refError } = await supabase
      .from('referral_codes')
      .select('user_id')
      .eq('code', refCode)
      .single();

    if (refError || !refCodeData) {
      console.error('Error finding referral code:', refError);
      return new Response(
        JSON.stringify({ error: 'Invalid referral code' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    // Check if this user has already been referred
    const { data: existingReferral } = await supabase
      .from('referrals')
      .select('id')
      .eq('referred_id', userId)
      .single();

    if (existingReferral) {
      return new Response(
        JSON.stringify({ message: 'User already has a referral' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    }

    // Create the referral record
    const { data, error } = await supabase
      .from('referrals')
      .insert([{
        referrer_id: refCodeData.user_id,
        referred_id: userId,
        referral_code: refCode,
        email,
        ip_address: ipAddress
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating referral:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to create referral' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    await supabase.from('points_ledger').insert({
      user_id: refCodeData.user_id,
      delta: 50,
      reason: 'referral',
      order_id: null,
    });

    const { data: profile } = await supabase
      .from('profiles')
      .select('points')
      .eq('id', refCodeData.user_id)
      .single();

    const current = profile?.points ?? 0;
    await supabase
      .from('profiles')
      .update({ points: current + 50 })
      .eq('id', refCodeData.user_id);

    return new Response(
      JSON.stringify({ success: true, data }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );
    
  } catch (err) {
    console.error('Unexpected error processing referral:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});

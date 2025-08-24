-- Create referral_status enum
DO $$ BEGIN
  CREATE TYPE public.referral_status AS ENUM ('pending', 'completed', 'expired');
EXCEPTION WHEN duplicate_object THEN null;
END $$;

-- Create referral_codes table
CREATE TABLE IF NOT EXISTS public.referral_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE REFERENCES auth.users(id) NOT NULL,
  code TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS referral_codes_user_id_idx ON public.referral_codes(user_id);

-- Create referrals table
CREATE TABLE IF NOT EXISTS public.referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_id UUID REFERENCES auth.users(id) NOT NULL,
  referred_id UUID REFERENCES auth.users(id),
  partner_id UUID REFERENCES public.partner_profiles(id),
  referral_code TEXT NOT NULL REFERENCES public.referral_codes(code),
  status referral_status NOT NULL DEFAULT 'pending',
  ip_address TEXT,
  email TEXT,
  referred_user_type TEXT,
  referrer_user_type TEXT,
  reward_issued BOOLEAN NOT NULL DEFAULT false,
  reward_issued_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE
);
CREATE INDEX IF NOT EXISTS referrals_referrer_id_idx ON public.referrals(referrer_id);
CREATE INDEX IF NOT EXISTS referrals_referred_id_idx ON public.referrals(referred_id);

-- Create referral_rewards table
CREATE TABLE IF NOT EXISTS public.referral_rewards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  referral_id UUID REFERENCES public.referrals(id) NOT NULL,
  partner_id UUID REFERENCES public.partner_profiles(id),
  reward_type TEXT NOT NULL,
  amount INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE
);
CREATE INDEX IF NOT EXISTS referral_rewards_user_id_idx ON public.referral_rewards(user_id);

-- Function to generate unique referral codes
CREATE OR REPLACE FUNCTION public.generate_referral_code(user_id uuid)
RETURNS text AS $$
DECLARE
  existing_code text;
  new_code text;
BEGIN
  SELECT code INTO existing_code FROM public.referral_codes WHERE user_id = generate_referral_code.user_id;
  IF existing_code IS NOT NULL THEN
    RETURN existing_code;
  END IF;

  LOOP
    new_code := encode(gen_random_bytes(4), 'hex');
    EXIT WHEN NOT EXISTS (SELECT 1 FROM public.referral_codes WHERE code = new_code);
  END LOOP;

  INSERT INTO public.referral_codes(user_id, code) VALUES (generate_referral_code.user_id, new_code);
  RETURN new_code;
END;
$$ LANGUAGE plpgsql;

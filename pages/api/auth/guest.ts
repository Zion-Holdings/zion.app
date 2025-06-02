import { createClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';
import { withErrorLogging } from '@/utils/withErrorLogging'; // Assuming this HOC handles NextApiRequest/Response
import type { NextApiRequest, NextApiResponse } from 'next';

// Define expected request body structure
interface GuestRequestBody {
  email?: string;
  name?: string;
}

// Define possible success/error response structures
interface GuestSuccessResponse {
  userId: string;
}
interface ErrorResponse {
  error: string;
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend auth (guest creation) API. Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase = createClient(supabaseUrl, serviceKey);

// Assuming withErrorLogging correctly adapts or expects a Next.js compatible handler
async function handler(req: NextApiRequest, res: NextApiResponse<GuestSuccessResponse | ErrorResponse>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    return;
  }

  const { email, name = 'Guest' } = req.body as GuestRequestBody; // Cast body to expected type

  if (!email) {
    res.status(400).json({ error: 'Missing email' });
    return;
  }

  const password = randomUUID();
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true, // Auto-confirm guest emails
    user_metadata: { display_name: name, is_guest: true },
  });

  if (error || !data?.user) {
    console.error('Supabase admin.createUser error:', error);
    res.status(500).json({ error: error?.message || 'Failed to create guest user' });
    return;
  }

  // Successfully created user
  res.status(200).json({ userId: data.user.id });
}

export default withErrorLogging(handler);

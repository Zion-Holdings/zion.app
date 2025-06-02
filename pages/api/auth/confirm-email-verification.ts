import { createClient } from '@supabase/supabase-js';
import { PrismaClient, Prisma } from '@prisma/client'; // Import Prisma for error types
import type { NextApiRequest, NextApiResponse } from 'next';

// Define a type for the expected successful response
interface SuccessResponse {
  message: string;
  user: { // Define a minimal user type based on what's returned
    id: string;
    email: string | null; // Prisma user email can be null
    emailVerified: boolean | null;
    // Add other fields if returned and needed by client
  };
}

// Define a type for error responses
interface ErrorResponse {
  message: string;
  error?: string; // Optional error details
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend auth API. Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}

const supabase = createClient(supabaseUrl, serviceKey);
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<SuccessResponse | ErrorResponse>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const jwt = req.cookies['supabase-auth-token'] || 
                Object.keys(req.cookies).find(key => key.startsWith('sb-') && key.endsWith('-access-token')) ||
                req.headers.authorization?.split('Bearer ')[1];


    if (!jwt) {
      console.log('No Supabase auth token found in cookies or Authorization header.');
      return res.status(401).json({ message: 'Unauthorized: Auth token not found.' });
    }
    
    const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);

    if (authError || !user) {
      console.error('Auth error with token:', authError);
      return res.status(401).json({ message: 'Unauthorized: No active session or auth error.', error: authError?.message });
    }

    if (!user.email) {
      console.error('User object from Supabase does not contain an email.');
      return res.status(400).json({ message: 'Bad Request: User email not found in token.' });
    }

    const updatedUser = await prisma.user.update({
      where: { email: user.email },
      data: { emailVerified: true },
      select: { id: true, email: true, emailVerified: true } // Select specific fields
    });

    // No need to check !updatedUser here as Prisma update throws if record not found (unless using upsert or findUnique first)
    // The catch block will handle P2025 for "record not found"
    return res.status(200).json({ message: 'Email successfully verified.', user: updatedUser });

  } catch (error: unknown) {
    console.error('Error confirming email verification:', error);
    
    let errorMessage = 'Internal server error';
    let errorDetails: string | undefined = undefined;

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Prisma specific errors
      if (error.code === 'P2025') { // "Record to update not found."
        return res.status(404).json({ message: 'User not found in our database.' });
      }
      errorMessage = 'Database error during email verification.';
      errorDetails = error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    
    return res.status(500).json({ message: errorMessage, error: errorDetails });
  } finally {
    await prisma.$disconnect();
  }
}

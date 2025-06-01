import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import prisma from '../../../lib/db'; // Assuming prisma is used for user profile data, not auth itself here
import bcrypt from 'bcryptjs';
import { createClient, User } from '@supabase/supabase-js';

// Supabase URL and Keys
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Client for user-facing operations (like signIn)
const supabaseUserClient = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for privileged operations (like updating user password server-side)
// Ensure SUPABASE_SERVICE_ROLE_KEY is set in your .env for this to work
const supabaseAdminClient = createClient(supabaseUrl, supabaseServiceRoleKey);

const loginUserAfterReset = async (res: NextApiResponse, email: string, newPasswordAttempt: string): Promise<{ success: boolean, message?: string, error?: string }> => {
  const { data, error } = await supabaseUserClient.auth.signInWithPassword({ // Use user client for sign-in
    email: email,
    password: newPasswordAttempt,
  });

  if (error || !data?.session) {
    console.error('Auto-login after password reset failed:', error?.message);
    return { success: false, error: error?.message || 'Invalid credentials for auto-login.' };
  }

  const { access_token, user: supabaseUser } = data.session;

  const maxAge = data.session.expires_in || 3600;
  res.setHeader('Set-Cookie', `authToken=${access_token}; HttpOnly; Path=/; Secure; SameSite=Strict; Max-Age=${maxAge}`);

  console.log(`User ${supabaseUser.id} (${email}) auto-logged in successfully after password reset.`);
  return { success: true, message: 'User auto-logged in.' };
};

const hashPasswordForPrisma = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { uid, token, newPassword } = req.body;

  if (!uid || typeof uid !== 'string' || !token || typeof token !== 'string' || !newPassword || typeof newPassword !== 'string') {
    return res.status(400).json({ message: 'UID, token, and new password are required.' });
  }

  if (newPassword.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
  }

  let prismaUser: Awaited<ReturnType<typeof prisma.user.findFirst>>;

  try {
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    prismaUser = await prisma.user.findFirst({
      where: {
        id: uid,
        resetToken: hashedToken,
        resetTokenExpiry: { gt: new Date() },
      },
    });

    if (!prismaUser) {
      return res.status(400).json({ message: 'Invalid UID or token, or token has expired.' });
    }

    // Step 1: Update password in Supabase Auth using Admin client
    const { data: updateUserResponse, error: updateUserError } = await supabaseAdminClient.auth.admin.updateUserById(
      prismaUser.id, // Assumes prismaUser.id is the Supabase Auth User ID
      { password: newPassword }
    );

    if (updateUserError) {
      console.error('Failed to update password in Supabase Auth:', updateUserError.message);
      return res.status(500).json({ message: 'Failed to update password. Please try again.' });
    }
    console.log(`Password updated in Supabase Auth for user ${updateUserResponse?.user?.id}`);


    // Step 2: Update local Prisma database (e.g., clear token, update local hash if needed)
    const localPasswordHash = await hashPasswordForPrisma(newPassword); // Hash for local DB storage
    await prisma.user.update({
      where: { id: prismaUser.id },
      data: {
        passwordHash: localPasswordHash, // Update local hash
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    // Step 3: Attempt auto-login with the new password using user-facing client
    const loginResult = await loginUserAfterReset(res, prismaUser.email, newPassword);

    if (!loginResult.success) {
        console.warn(`Password reset for user ${prismaUser.id} was successful (Supabase & local DB updated), but auto-login failed. Error: ${loginResult.error}`);
    }

    return res.status(200).json({
        message: 'Password has been reset successfully.' + (loginResult.success ? ' You are now logged in.' : ' Please log in with your new password.'),
        autoLoginSuccess: loginResult.success
    });

  } catch (error) {
    console.error('Reset Password Error:', error);
    return res.status(500).json({ message: 'An error occurred during the password reset process.' });
  } finally {
    if (prismaUser) {
        await prisma.$disconnect();
    }
  }
}

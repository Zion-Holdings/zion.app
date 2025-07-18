<<<<<<< HEAD
import { supabase } from '@/utils/supabase/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end();
  }

  try {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Resend verification email
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: email
    });

    if (error) {
      logErrorToProduction('Error resending verification email:', error);
      return res.status(400).json({
        error: 'Failed to resend verification email',
        message: error.message
      });
    }

    logInfo('Verification email resent successfully:', { email });
    return res.status(200).json({
      success: true,
      message: 'Verification email sent successfully'
    });

  } catch (error) {
    logErrorToProduction('Unexpected error in resend verification email:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}

export default withErrorLogging(handler);
=======
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const ResendVerificationEmail: NextPage = () => {
  return (
    <>
      <Head>
        <title>ResendVerificationEmail - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">ResendVerificationEmail</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* ResendVerificationEmail content will go here */}
        </div>
      </div>
    </>
  );
};

export default ResendVerificationEmail;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae

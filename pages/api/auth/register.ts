<<<<<<< HEAD
import { supabase } from '@/utils/supabase/client;
import type { NextApiRequest, NextApiResponse } from 'next;
import { withErrorLogging } from '@/utils/withErrorLogging;
import { ENV_CONFIG } from '@/utils/environmentConfig;
import {
  logInfo,
  logWarn as _logWarn,
  logErrorToProduction,
} from '@/utils/productionLogger;

export default withErrorLogging(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });

=======
import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Register</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Register content will go here */}
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });

    // Validate password strength
    if (password.length < 8) {
      return res.status(400).json({ 
        error: 'Password must be at least 8 characters long'
      });

    // Check if user already exists
    const { data: existingUser, error: checkError } = await supabase.auth.admin.getUserByEmail(email);
    
    if (checkError && checkError.message !== 'User not found') {
      logErrorToProduction('Error checking existing user:', checkError);
      return res.status(500).json({ error: 'Internal server error' });

    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });

    // Create new user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name || email.split('@')[0],
        },
        emailRedirectTo: `${ENV_CONFIG.APP_URL}/auth/confirm`

    });

    if (error) {
      _logWarn('Registration failed:', { email, error: error.message });
      return res.status(400).json({
        error: 'Registration failed',
        message: error.message
      });

    if (data.user) {
      logInfo('User registered successfully:', { email: data.user.email });
      return res.status(201).json({
        success: true,
        user: {
          id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata?.name
        },
        message: 'Registration successful. Please check your email to verify your account.'
      });

    return res.status(500).json({
      error: 'Registration failed'
    });

  } catch (error) {
    logErrorToProduction('Registration error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });

});
=======
export default Register;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
`
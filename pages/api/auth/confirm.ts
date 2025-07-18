<<<<<<< HEAD
import { type NextApiRequest, type NextApiResponse } from 'next;
import { createClient } from '../../../src/utils/supabase/server;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });

=======
import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae

const Confirm: NextPage = () => {
  return (
    <>
      <Head>
        <title>Confirm - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Confirm</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Confirm content will go here */}
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
  if (token_hash && type) {
    const supabase = createClient();

    if (type === 'recovery') {
      const { error } = await supabase.auth.verifyOtp({
        token_hash: token_hash as string,
        type: 'recovery'
      });

      if (error) {
        return res.redirect(`/auth/reset-password?error=${encodeURIComponent(error.message)}`);

`
      return res.redirect(`/auth/reset-password?token_hash=${token_hash}`);

    if (type === 'signup') {
      const { error } = await supabase.auth.verifyOtp({
        token_hash: token_hash as string,
        type: 'signup'
      });

      if (error) {`
        return res.redirect(`/auth/login?error=${encodeURIComponent(error.message)}`);

      return res.redirect('/auth/login?message=Email confirmed successfully');


  // Default redirect
  res.redirect(next ? (next as string) : '/auth/login');

=======
export default Confirm;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
`
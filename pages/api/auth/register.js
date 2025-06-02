import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { withErrorLogging } from '@/utils/withErrorLogging';
const supabaseUrl = process.env.SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    '';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    '';
const supabase = createClient(supabaseUrl, serviceKey);
const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});
async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }
    const result = schema.safeParse(req.body);
    if (!result.success) {
        const message = result.error.issues[0]?.message || 'Invalid input';
        res.status(400).json({ message });
        return;
    }
    const { name, email, password } = result.data;
    try {
        let data;
        let error;
        try {
            const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
            ({ data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: { display_name: name },
                    emailRedirectTo: `${siteURL}/auth/verify-email`,
                },
            }));
        }
        catch (networkErr) {
            console.error('signUp network error', networkErr);
            res.status(503).json({ message: 'Network error. Please try again.' });
            return;
        }
        // Handle errors from supabase.auth.signUp
        if (error) {
            let message = error.message;
            let status = error.status || 400; // Default to 400 if status is not available
            if (status === 400 && /user already registered/i.test(message)) {
                status = 409; // Conflict
                message = 'Email already registered.';
            }
            else if (status === 400 && /weak password/i.test(message)) {
                // Status is already 400, but we provide a more specific message
                message = 'Password is too weak. Please choose a stronger password.';
            }
            else if (!error.status) {
                // Handle cases where error.status is undefined (e.g. network errors not caught by the previous block)
                console.error('Supabase signUp error without status:', error);
                status = 500; // Internal Server Error for unexpected errors
                message = 'An unexpected error occurred during registration.';
            }
            // It's good practice to log the original error for debugging
            if (status !== 409 && status !== 400)
                console.error('Registration error:', error);
            res.status(status).json({ message });
            return;
        }
        // If there's no error and data.user exists
        if (data.user) {
            // Determine if email verification is required
            // This is typically true if data.session is null and data.user.identities is empty or indicates no verified identity.
            const emailVerificationRequired = !data.session && data.user && (!data.user.identities || data.user.identities.length === 0 || !data.user.identities.some(identity => identity.identity_data?.email_verified || identity.identity_data?.email));
            if (emailVerificationRequired) {
                // Respond with status 201 and JSON for email verification
                res.status(201).json({
                    message: "Registration successful. Please check your email to verify your account.",
                    emailVerificationRequired: true,
                    user: {
                        email: data.user.email,
                        id: data.user.id,
                        display_name: data.user.user_metadata?.display_name
                    }
                });
            }
            else {
                // Email is auto-verified or verification is not strictly needed
                // Set the authToken HttpOnly cookie using data.session.access_token
                if (data.session?.access_token) {
                    res.setHeader('Set-Cookie', `authToken=${data.session.access_token}; HttpOnly; Path=/; Secure; SameSite=Strict; Max-Age=${data.session.expires_in}`);
                }
                // Respond with status 201 and JSON
                res.status(201).json({ user: data.user, session: data.session });
            }
        }
        else {
            // Handle any other unexpected errors with a 500 status
            console.error('Unexpected state: No error but no user data after signUp.');
            res.status(500).json({ message: 'An unexpected error occurred during registration.' });
        }
    }
    catch (err) {
        console.error('Outer catch block error:', err);
        res.status(500).json({ message: err.message || 'An internal server error occurred.' });
    }
}
export default withErrorLogging(handler);

import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    '';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    '';
const supabase = createClient(supabaseUrl, serviceKey);
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }
    const { email, password } = req.body;
    // Normalize email before attempting lookup/login
    const normalizedEmail = email.toLowerCase();
    const { data, error } = await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
    });
    if (error) {
        // Log the full error for debugging purposes on the server
        console.error('Supabase signInWithPassword error:', error);
        if (error.message && /Email not confirmed/i.test(error.message)) {
            // This check seems to be good, keep it.
            res.status(403).json({
                error: "Email not confirmed. Please check your inbox to verify your email.",
                code: "EMAIL_NOT_CONFIRMED"
            });
        }
        else if (error.message && /Invalid login credentials/i.test(error.message)) {
            // This is a common Supabase error for wrong password or user not found
            res.status(401).json({ error: 'Invalid credentials', code: 'INVALID_CREDENTIALS' });
        }
        else if (error.name === 'AuthApiError' && error.status === 400) {
            // Catchall for other Bad Request errors from Supabase Auth, often due to invalid input client-side but sometimes for other auth issues
            // Treat as invalid credentials if not more specific.
            res.status(401).json({ error: 'Invalid credentials', code: 'INVALID_CREDENTIALS' });
        }
        else {
            // Generic fallback for other errors
            res.status(error.status || 500).json({ error: error.message || 'An unexpected error occurred during login.', code: 'LOGIN_FAILED' });
        }
        return;
    }
    if (!data?.session) {
        // This case should ideally be caught by the 'error' above, but as a fallback:
        res.status(401).json({ error: 'Invalid credentials - no session data', code: 'NO_SESSION_DATA' });
        return;
    }
    const accessToken = data.session.access_token;
    const refreshToken = data.session.refresh_token;
    // Set HttpOnly cookie for the access token
    res.setHeader('Set-Cookie', `authToken=${accessToken}; HttpOnly; Path=/; Secure; SameSite=Strict`);
    res.status(200).json({ user: data.user, accessToken, refreshToken });
}

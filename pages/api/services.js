import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    '';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    '';
if (!supabaseUrl || !serviceKey) {
    console.error('Missing database connection string');
}
const supabase = createClient(supabaseUrl, serviceKey);
export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(405).end();
        return;
    }
    const { type } = req.query; // Access the type parameter
    if (type) {
        console.log(`Fetching services with type: ${type}`); // Log the type
    }
    try {
        const { data, error } = await supabase
            .from('services')
            .select('id, title, price, rating, category');
        if (error) {
            throw error;
        }
        res.status(200).json(data || []);
    }
    catch (err) {
        console.error('Service fetch error:', err);
        res.status(500).json({ error: 'Failed to fetch services' });
    }
}

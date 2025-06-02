import { createClient } from '@supabase/supabase-js';
// Placeholder for actual GPT integration logic
async function generateDeckWithGPT(prompt, inputData, syncedData) {
    // In a real scenario, this would call a GPT API
    console.log("Generating deck with prompt:", prompt);
    console.log("Input Data:", inputData);
    console.log("Synced Data:", syncedData);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        slides: [
            { id: '1', title: 'Welcome to ' + (inputData.companyMission || 'Our Company'), content: 'This is an AI generated introduction slide based on your mission: ' + inputData.companyMission, type: 'title' },
            { id: '2', title: 'Market Size & Opportunity', content: 'AI generated content about market size. Current funding stage: ' + inputData.currentFundingStage, type: 'generic' },
            { id: '3', title: 'Our Traction', content: `AI generated content about traction. Active Users: ${syncedData.activeUsers30d}, GMV: ${syncedData.gmv}`, type: 'data', chartType: 'bar' },
            { id: '4', title: 'Business Model', content: 'AI generated content about the business model. Vision: ' + inputData.visionGoals, type: 'generic' },
            { id: '5', title: 'Team', content: 'AI generated slide about the team.', type: 'generic' },
            { id: '6', title: 'Token Strategy (if applicable)', content: 'AI generated content for token strategy. Round Type: ' + inputData.roundType, type: 'generic' },
            { id: '7', title: 'Financial Projections', content: `AI generated financial projections. Target Raise: ${inputData.targetRaiseAmount}`, type: 'data', chartType: 'timeline' },
            { id: '8', title: 'Notable Clients & Case Studies', content: `Showcasing clients like ${syncedData.notableClients.map((c) => c.name).join(', ')}`, type: 'generic' }, // Added :any for map
            { id: '9', title: 'Call to Action', content: `Join us in our ${inputData.roundType} round as we aim to raise ${inputData.targetRaiseAmount}.`, type: 'cta' },
            { id: '10', title: 'Q&A / Thank You', content: 'AI generated thank you slide.', type: 'generic' }
        ]
    };
}
// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
const AuthenticatedRoles = ['founder', 'admin', 'finance'];
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    // --- Authentication and Authorization ---
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: Missing or invalid token.' });
    }
    const token = authHeader.split(' ')[1];
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    if (userError || !user) {
        console.error('Supabase auth error:', userError?.message);
        return res.status(401).json({ message: 'Unauthorized: Invalid token or user not found.' });
    }
    const { data: profile, error: profileError } = await supabase
        .from('profiles') // Assuming 'profiles' table and 'role' column for user roles
        .select('role')
        .eq('id', user.id)
        .single();
    if (profileError || !profile) {
        console.error('Supabase profile error:', profileError?.message);
        return res.status(500).json({ message: 'Error fetching user profile.' });
    }
    // Assuming 'role' field in profiles table stores the user role
    const userRole = profile.role;
    if (!userRole || !AuthenticatedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Forbidden: Access denied. Insufficient privileges.' });
    }
    // --- End Authentication and Authorization ---
    try {
        const { prompt, inputData, syncedData } = req.body;
        if (!prompt || !inputData || !syncedData) {
            return res.status(400).json({ message: 'Missing required parameters: prompt, inputData, or syncedData.' });
        }
        // TODO: Add more specific validation for inputData and syncedData structures
        const generatedDeck = await generateDeckWithGPT(prompt, inputData, syncedData);
        res.status(200).json(generatedDeck);
    }
    catch (error) {
        console.error('Error generating pitch deck:', error);
        res.status(500).json({ message: error.message || 'Internal Server Error: Could not generate pitch deck.' });
    }
}

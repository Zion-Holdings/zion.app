import { TALENT_PROFILES } from '@/data/talentData';
// Basic ObjectId validation helper mirroring mongoose.Types.ObjectId.isValid.
// This avoids adding mongoose as a dependency in this environment.
const isValidObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);
export default function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(405).end();
        return;
    }
    const rawId = req.query?.id;
    const id = typeof rawId === 'string' ? rawId : '';
    // Validate the id similar to `mongoose.Types.ObjectId.isValid`.
    if (!isValidObjectId(id)) {
        res.status(400).json({ error: 'Invalid id' });
        return;
    }
    let searchId = id;
    if (searchId && !searchId.startsWith('t-')) {
        searchId = `t-${searchId}`;
    }
    const profile = TALENT_PROFILES.find(t => t.id === searchId);
    if (!profile) {
        res.status(404).json({ error: 'Talent not found' });
        return;
    }
    const first = profile.full_name.split(' ')[0].toLowerCase();
    const social = {
        twitter: `https://twitter.com/${first}`,
        linkedin: `https://linkedin.com/in/${first}`,
    };
    res.status(200).json({ profile: { ...profile, social } });
}

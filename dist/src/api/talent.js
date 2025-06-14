import axios from 'axios';
/**
 * Fetch a talent profile by slug.
 * Returns null if the profile is not found (404).
 */
export async function getTalentBySlug(slug) {
    try {
        const res = await axios.get(`/api/talent/${slug}`);
        return res.data.profile;
    }
    catch (err) {
        if (err.response && err.response.status === 404) {
            return null;
        }
        throw err;
    }
}

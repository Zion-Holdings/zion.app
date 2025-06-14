// Simple logout endpoint to clear authToken cookie and invalidate session
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end();
    }
    // Expire the authToken cookie
    res.setHeader('Set-Cookie', 'authToken=deleted; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Strict');
    return res.status(200).json({ success: true });
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }
    console.log('Push subscription received', req.body);
    res.status(200).json({ success: true });
}

export default function handler(req, res) {
    const { listingId } = req.query;
    // TODO: Replace with @vercel/og for dynamic images
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
       <rect width="100%" height="100%" fill="#111" />
       <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-size="48">Listing ${listingId}</text>
     </svg>`);
}

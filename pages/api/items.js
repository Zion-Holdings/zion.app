const items = [
    { id: '1', title: 'Service A', category: 'services' },
    { id: '2', title: 'Service B', category: 'services' },
];
export default function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(405).end();
        return;
    }
    const { category } = req.query;
    const result = typeof category === 'string'
        ? items.filter(i => i.category === category)
        : items;
    res.status(200).json(result);
}

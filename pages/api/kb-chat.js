export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }
    try {
        const { messages } = req.body;
        const last = messages[messages.length - 1]?.content || '';
        const orderMatch = last.match(/order\s*(?:status)?\s*#?(\d+)/i);
        if (/order status/i.test(last) && orderMatch) {
            const orderId = orderMatch[1];
            const base = req.headers.origin || `http://${req.headers.host}`;
            const orderRes = await fetch(`${base}/api/orders/${orderId}`);
            if (orderRes.ok) {
                const order = await orderRes.json();
                res.status(200).json({ message: `Order ${order.id} status is ${order.status}.`, confidence: 1 });
                return;
            }
        }
        const apiKey = process.env.OPENAI_API_KEY;
        const openRes = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4o',
                messages,
                temperature: 0.3
            })
        });
        const data = await openRes.json();
        const answer = data.choices?.[0]?.message?.content || 'Sorry, I am not sure.';
        const confidence = data.choices?.[0]?.finish_reason === 'stop' ? 0.8 : 0.5;
        if (confidence < 0.6) {
            console.log('Escalating to Zendesk');
        }
        res.status(200).json({ message: answer, confidence });
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    // Mock wallet data for demo purposes
    const wallet = {
      balance: 1000.00,
      currency: 'USD',
      transactions: [
        { id: 1, amount: 100, type: 'credit', description: 'Payment received' },
        { id: 2, amount: -50, type: 'debit', description: 'Service payment' }
      ]
    };

    res.status(200).json(wallet);
  } catch (error) {
    console.error('Wallet API error:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch wallet' });
  }
}
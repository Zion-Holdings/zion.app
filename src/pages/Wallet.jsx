import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Wallet = () => {
  const [walletData, setWalletData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const response = await axios.get('/api/v1/wallet');
        setWalletData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWalletData();
  }, []);

  if (loading) {
    return <div>Loading wallet data...</div>;
  }

  if (error) {
    return <div>Error fetching wallet data: {error}</div>;
  }

  if (!walletData) {
    return <div>No wallet data found.</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Wallet</h1>
      <section style={{ marginBottom: '20px' }}>
        <h2>Current Points</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{walletData.points}</p>
      </section>
      <section>
        <h2>Transaction History</h2>
        {walletData.transactions && walletData.transactions.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {walletData.transactions.map((transaction) => (
              <li key={transaction.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
                <p><strong>Date:</strong> {new Date(transaction.date).toLocaleDateString()}</p>
                <p><strong>Description:</strong> {transaction.description}</p>
                <p><strong>Amount:</strong> <span style={{ color: transaction.type === 'credit' ? 'green' : 'red' }}>{transaction.amount} points</span></p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No transactions yet.</p>
        )}
      </section>
    </div>
  );
};

export default Wallet;

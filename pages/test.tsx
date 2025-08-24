import React from 'react';

export default function TestPage() {
  return (
    <div style={{ 
      padding: '2rem', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: '#333', marginBottom: '1rem' }}>
        ✅ Next.js App is Working!
      </h1>
      <p style={{ color: '#666', textAlign: 'center', maxWidth: '600px' }}>
        This is a test page to verify that the Next.js application is running correctly.
        If you can see this page, the basic app infrastructure is functional.
      </p>
      <div style={{ 
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
        <p><strong>Timestamp:</strong> {new Date().toISOString()}</p>
      </div>
    </div>
  );
}
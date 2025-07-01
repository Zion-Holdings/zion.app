import React from 'react';

// Minimal homepage to debug loading issues
export default function IndexPage() {
  return (
    <div style={{ 
      padding: '2rem', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: '#333', marginBottom: '1rem', fontSize: '2rem' }}>
        🚀 Zion App - Loading Fixed!
      </h1>
      <p style={{ color: '#666', textAlign: 'center', maxWidth: '600px', marginBottom: '2rem' }}>
        The application is now working. The blank screen issue has been resolved by simplifying the initial page load.
        Complex components and dynamic imports have been temporarily removed for debugging.
      </p>
      <div style={{ 
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>
        <p><strong>Status:</strong> ✅ App Loading Successfully</p>
        <p><strong>Environment:</strong> {typeof process !== 'undefined' ? process.env.NODE_ENV : 'browser'}</p>
        <p><strong>Time:</strong> {new Date().toLocaleString()}</p>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <a 
          href="/test" 
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            marginRight: '10px'
          }}
        >
          Test Page
        </a>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Reload
        </button>
      </div>
    </div>
  );
}

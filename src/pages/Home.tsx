import React from 'react';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '5rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>
            Zion Tech Marketplace
          </h1>
          <p style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Discover Innovative Tech Solutions
          </p>
          <button style={{
            backgroundColor: 'white',
            color: '#667eea',
            padding: '1rem 2rem',
            border: 'none',
            borderRadius: '0.5rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '4rem 1rem',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#333'
          }}>
            Why Choose Zion?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#667eea',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                🚀
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                Fast & Reliable
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Quick access to cutting-edge technology solutions
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#10b981',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                🔒
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                Secure
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Enterprise-grade security for your business
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#8b5cf6',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                💡
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                Innovative
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Latest AI and technology innovations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 1rem',
        backgroundColor: '#667eea',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Join thousands of businesses using Zion Tech Marketplace
          </p>
          <button style={{
            backgroundColor: 'white',
            color: '#667eea',
            padding: '1rem 2rem',
            border: 'none',
            borderRadius: '0.5rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Explore Solutions
          </button>
        </div>
      </section>

      {/* Status Section */}
      <section style={{
        padding: '4rem 1rem',
        backgroundColor: '#f8f9fa',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#333'
          }}>
            ✅ App is Working!
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#666',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            The Zion Tech Marketplace is now loading successfully. This is a simplified version that works immediately.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => window.location.href = '/test'}
              style={{
                backgroundColor: '#667eea',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              Test Page
            </button>
            <button 
              onClick={() => window.location.href = '/debug'}
              style={{
                backgroundColor: '#6b7280',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              Debug Info
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

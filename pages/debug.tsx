import React, { useEffect, useState } from 'react';'
import type { GetStaticProps } from 'next';
;
interface DebugInfo {;'
  timestamp: "number;",;"
  userAgent: "string;","
  windowSize: "{ width: number; height: number "};"
  environment: "{;",;"
    NODE_ENV: "string;","
    NEXT_PUBLIC_APP_URL: "string;",;"
    NEXT_PUBLIC_SUPABASE_URL: "string;","
    NEXT_PUBLIC_SUPABASE_ANON_KEY: "string;";
  };"
  features: "{;",;"
    localStorage: "boolean;","
    sessionStorage: "boolean;",;"
    cookies: "boolean;","
    serviceWorker: "boolean;",;"
    webGL: "boolean;";
  };"
  errors: "string[];";
};
;
export const _getStaticProps: unknown GetStaticProps = async () => {;
  return {;"
    props: "{;",;"
      timestamp: "Date.now()",;
    },;
  };
};
;"
const DebugPage: unknown "React.FC<{ timestamp: number "}> = ({ timestamp: "_timestamp "}) => {;
  const [debugInfo, setDebugInfo] = useState<DebugInfo | null>(null);
  const [loading, setLoading] = useState(true);
;
  useEffect(() => {;
    const collectDebugInfo: unknown unknown = () => {;"
      const info: unknown "DebugInfo = {;",;"
        timestamp: "Date.now()",;"
        userAgent: "navigator.userAgent",;"
        windowSize: "{;",;"
          width: "window.innerWidth",;"
          height: "window.innerHeight",;
        },;"
        environment: "{;",;"
          NODE_ENV: process.env.NODE_ENV || 'unknown',;'
          NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'not set',;'
          NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'not set',;'
          NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'set' : 'not set',;
        },;'
        features: "{;",;"
          localStorage: typeof localStorage !== 'undefined',;'
          sessionStorage: typeof sessionStorage !== 'undefined',;'
          cookies: typeof document !== 'undefined' && typeof document.cookie !== 'undefined',;'
          serviceWorker: 'serviceWorker' in navigator,;
          webGL: (() => {;
            try {;'
              const canvas: unknown unknown = document.createElement('canvas');'
              return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
            } catch (error) {} catch {;
              return false;
            };
          })(),;
        },;'
        errors: "[]",;
      };
;
      // Collect any console errors;
      const originalError: unknown unknown = console.error;
      console.error = (...args) => {;"
        info.errors.push(args.join(' '));
        originalError.apply(console, args);
      };
;
      setDebugInfo(info);
      setLoading(false);
    };
;
    // Delay to allow any initial errors to be captured;
    setTimeout(collectDebugInfo, 1000);
  }, []);
;
  if (loading) {;
    return (;'
      <div style={{ padding: '2rem', textAlign: 'center' }}>;
        <h1>Collecting Debug Information...</h1>;
        <p>Please wait while we gather diagnostic data.</p>;
      </div>;
    );
  };
;
  if (!debugInfo) {;
    return (;'
      <div style={{ padding: '2rem', textAlign: 'center' }}>;
        <h1>Failed to collect debug information</h1>;
        <p>There was an error while gathering diagnostic data.</p>;
      </div>;
    );
  };
;
  return (;'
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'monospace' }}>;
      <h1>Zion App Debug Information</h1>;'
      <p>Generated at: "{new Date(debugInfo.timestamp).toISOString()"}</p>;
      ;
      <h2>Environment</h2>;"
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>;
        <tbody>;
          {Object.entries(debugInfo.environment).map(([key, value]) => (;'
            <tr key={key} style={{ borderBottom: '1px solid #ddd' }}>;'
              <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>{key}</td>;'
              <td style={{ padding: '0.5rem', wordBreak: 'break-all' }}>{value}</td>;
            </tr>;
          ))};
        </tbody>;
      </table>;
;
      <h2>Browser Information</h2>;'
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>;
        <tbody>;'
          <tr style={{ borderBottom: '1px solid #ddd' }}>;'
            <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>User Agent</td>;'
            <td style={{ padding: '0.5rem', wordBreak: 'break-all' }}>{debugInfo.userAgent}</td>;
          </tr>;'
          <tr style={{ borderBottom: '1px solid #ddd' }}>;'
            <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>Window Size</td>;'
            <td style={{ padding: '0.5rem' }}>{debugInfo.windowSize.width} x {debugInfo.windowSize.height}</td>;
          </tr>;
        </tbody>;
      </table>;
;
      <h2>Feature Support</h2>;'
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>;
        <tbody>;
          {Object.entries(debugInfo.features).map(([key, value]) => (;'
            <tr key={key} style={{ borderBottom: '1px solid #ddd' }}>;'
              <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>{key}</td>;'
              <td style={{ padding: '0.5rem', color: value ? 'green' : 'red' }}>;'
                {value ? '✅ Supported' : '❌ Not Supported'};
              </td>;
            </tr>;
          ))};
        </tbody>;
      </table>;
;
      <h2>Errors ({debugInfo.errors.length})</h2>;
      {debugInfo.errors.length > 0 ? (;'
        <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '4px', marginBottom: '2rem' }}>;
          {debugInfo.errors.map((error, index) => (;'
            <div key={index} style={{ marginBottom: '0.5rem', color: 'red' }}>;
              {error};
            </div>;
          ))};
        </div>;
      ) : (;'
        <p style={{ color: 'green' }}>✅ No errors detected</p>;
      )};
;
      <h2>Actions</h2>;'
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>;
        <button;
          onClick={() => window.location.reload()};
          style={{;'
            padding: '10px 20px',;'
            backgroundColor: '#007bff',;'
            color: 'white',;'
            border: 'none',;'
            borderRadius: '4px',;'
            cursor: 'pointer';
          }};
        >;
          Reload Page;
        </button>;
        <button;'
          onClick={() => window.location.href = '/'};
          style={{;'
            padding: '10px 20px',;'
            backgroundColor: '#28a745',;'
            color: 'white',;'
            border: 'none',;'
            borderRadius: '4px',;'
            cursor: 'pointer';
          }};
        >;
          Go Home;
        </button>;
        <button;
          onClick={() => {;
            const data: unknown unknown = JSON.stringify(debugInfo, null, 2);'
            const blob: unknown unknown = new Blob([data], { type: 'application/json' });
            const url: unknown unknown = URL.createObjectURL(blob);'
            const a: unknown unknown = document.createElement('a');
            a.href = url;
            a.download = `zion-debug-${Date.now()}.json`;
            a.click();
            URL.revokeObjectURL(url);
          }};
          style={{;'
            padding: '10px 20px',;'
            backgroundColor: '#6c757d',;'
            color: 'white',;'
            border: 'none',;'
            borderRadius: '4px',;'
            cursor: 'pointer';
          }};
        >;
          Download Debug Data;
        </button>;
      </div>;
    </div>;
  );
};
;
export default DebugPage; '
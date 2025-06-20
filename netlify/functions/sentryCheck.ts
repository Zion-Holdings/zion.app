export const handler = async () => {
  const dsn = process.env.SENTRY_DSN;
  if (!dsn || dsn.startsWith('YOUR_')) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Sentry DSN not configured' })
    };
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Sentry DSN is configured',
      dsn: dsn.substring(0, 20) + '...' // Show partial DSN for verification
    })
  };
};

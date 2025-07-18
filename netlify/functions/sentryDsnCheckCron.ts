// scheduled function to check Sentry DSN via API
export const handler = async () => {
  const url = process.env.URL || '';
  try {
    const res = await fetch(`${url}/api/sentry-dsn-check`);
    if (!res.ok) {
      console.error('Failed DSN check:', await res.text());
    }
  } catch (error) {
    console.error('Error hitting DSN check route', error);
  }

  return { statusCode: 200 };
};

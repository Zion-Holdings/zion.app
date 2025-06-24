export const handler = async () => {
    const dsn = process.env.SENTRY_DSN;
    if (!dsn || dsn.startsWith('YOUR_')) {
        console.error('SENTRY_DSN missing or placeholder in function runtime');
        return { statusCode: 500, body: 'SENTRY_DSN missing or placeholder' };
    }
    return { statusCode: 204 };
};

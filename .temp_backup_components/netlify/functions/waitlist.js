exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const data = JSON.parse(event.body || '{}');
    const payload = {
      name: String(data.name || ''),
      email: String(data.email || ''),
      company: String(data.company || ''),
      role: String(data.role || ''),
      interest: String(data.interest || ''),
      newsletter: !!data.newsletter,
      ts: new Date().toISOString(),
      ua: event.headers['user-agent'] || ''
    };

    const webhook = process.env.WAITLIST_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: e.message }) };
  }
};
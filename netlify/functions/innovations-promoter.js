exports.handler = async function () {
  try {
    return {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ok: true, message: 'innovations promoter noop' })
    };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e && e.message || e) }) };
  }
};



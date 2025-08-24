export default function handler(req, res) {
  const header = req.headers['accept-language'];
  let lang = 'en-US';
  if (header) {
    const preferred = header.split(',')[0].toLowerCase();
    if (preferred.startsWith('es')) {
      lang = 'es-ES';
    }
  }
  res.setHeader('Set-Cookie', `zion_language=${lang}; Path=/; Max-Age=31536000`);
  res.status(200).json({ lang });
}

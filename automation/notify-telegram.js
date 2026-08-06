module.exports = async function notifyTelegram(message) {
  try {
    const url = new URL(process.env.TELEGRAM_BOT_API || 'https://api.telegram.org');
    url.pathname = '/bot' + (process.env.TELEGRAM_BOT_TOKEN || '') + '/sendMessage';
    const body = new URLSearchParams({
      chat_id: process.env.TELEGRAM_CHAT_ID || '',
      text: String(message || '')
    });
    await fetch(url.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    });
  } catch (e) {
    console.warn('notify-telegram skipped:', e && e.message ? e.message : String(e));
  }
};
if (import.meta && import.meta.url) {
  const [msg] = process.argv.slice(2);
  notifyTelegram(msg).catch(() => {});
}

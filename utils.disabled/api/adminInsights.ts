export async function sendAdminInsight(event: any) {
  try {
    await fetch('/api/admin-insights', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });
  } catch {
    // ignore
  }
}
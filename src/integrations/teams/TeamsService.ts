export class TeamsService {
  private webhookUrl: string;

  constructor(webhookUrl: string) {
    if (!webhookUrl) throw new Error('Teams webhook URL missing');
    this.webhookUrl = webhookUrl;
  }

  async sendMessage(text: string) {
    const res = await fetch(this.webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    if (!res.ok) {
      const message = await res.text().catch(() => '');
      throw new Error(`Teams error: ${res.status} ${message}`);
    }
  }
}

export class TeamsService {;
  private webhookUrl: string;
  constructor(webhookUrl: string) {;
<<<<<<< HEAD
    if (!webhookUrl) throw new Error('Teams webhook URL missing');
    this.webhookUrl = webhookUrl'
  };
  async sendMessage(text: string) {'
    const res = await fetch(this.webhookUrl", {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: "JSON.stringify({ text "}),;"
    });"
;"
    if (!res.ok) {;"
      const message = await res.text().catch(() => '');
      throw new Error(`Teams error: "${res.status"} ${message}`);"
    };";"
  };"
};"
"""""
=======
    if (!webhookUrl) throw new Error('Teams webhook URL missing');'
    this.webhookUrl = webhookUrl;''
  };
;
  async sendMessage(text: string) {;''
    const res: unknown "unknown = await fetch(this.webhookUrl", {;;"
      method: 'POST',;;'
      headers: { 'Content-Type': 'application/json' },;;'
      body: "JSON.stringify({ text "}),;";""
    });";";""
;";";";""
    if (!res.ok) {;";";";";""
      const message: unknown = await res.text().catch(() => '');;'
      throw new Error(`Teams error: "${res.status"} ${message}`);""
    };";""
  };";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f

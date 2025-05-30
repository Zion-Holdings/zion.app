import { Client } from '@elastic/elasticsearch';
import { generateSearchSuggestions } from '@/data/marketplaceData';

interface Req { method?: string; query?: { q?: string } }
interface JsonRes {
  status: (code: number) => JsonRes;
  json: (data: any) => void;
  end: (data?: any) => void;
  setHeader: (name: string, value: string) => void;
}

const cloudId = process.env.ELASTIC_CLOUD_ID || '';
const apiKey = process.env.ELASTIC_API_KEY || '';

function getClient() {
  if (!cloudId || !apiKey) return null;
  return new Client({ cloud: { id: cloudId }, auth: { apiKey } });
}

export default async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }
  const q = req.query?.q?.toString() || '';
  if (!q) {
    res.status(200).json([]);
    return;
  }

  const client = getClient();
  if (client) {
    try {
      const esRes = await client.search({
        index: 'listings',
        suggest: {
          'item-suggest': {
            prefix: q,
            completion: { field: 'suggest', size: 5 }
          }
        }
      });

      const options = (esRes.suggest?.['item-suggest']?.[0]?.options || []) as any[];
      const suggestions = options.map(opt => ({
        text: opt._source.title,
        type: opt._source.type
      }));
      res.status(200).json(suggestions);
      return;
    } catch (err) {
      console.error('Elasticsearch suggest error:', err);
    }
  }

  // Fallback to static suggestions
  const fallback = generateSearchSuggestions()
    .filter(s => s.text.toLowerCase().startsWith(q.toLowerCase()))
    .slice(0, 5);
  res.status(200).json(fallback);
}

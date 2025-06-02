import { Client, errors as EsErrors } from '@elastic/elasticsearch'; // Import Elasticsearch client and error types
import type { NextApiRequest, NextApiResponse } from 'next';
import { generateSearchSuggestions, SearchSuggestion } from '@/data/marketplaceData'; // Assuming SearchSuggestion type is exported

// Define structure for Elasticsearch suggest option
interface ElasticSuggestSource {
  title: string;
  type: string;
  // Add other fields if they exist in _source and are needed
}
interface ElasticSuggestOption {
  _source: ElasticSuggestSource;
  // Add other option properties if needed, e.g., _score
}

// Define structure for the 'item-suggest' part of the Elasticsearch response
interface ItemSuggestResult {
  options: ElasticSuggestOption[];
  // Add other properties from suggest result if needed
}

// Define structure for the overall Elasticsearch suggest response
interface ElasticSuggestResponse {
  suggest?: {
    'item-suggest'?: ItemSuggestResult[];
    // Add other suggest fields if you have more suggesters
  };
  // Add other top-level Elasticsearch response properties if needed
}

interface ErrorResponse {
  error: string;
  details?: string;
}

const cloudId = process.env.ELASTIC_CLOUD_ID || '';
const apiKey = process.env.ELASTIC_API_KEY || '';

let client: Client | null = null;
if (cloudId && apiKey) {
  try {
    client = new Client({ cloud: { id: cloudId }, auth: { apiKey } });
  } catch (initError) {
    console.error("Failed to initialize Elasticsearch client:", initError);
    client = null; // Ensure client is null if initialization fails
  }
} else {
  console.warn("Elasticsearch not configured. Search suggestions will use fallback only.");
}


export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<SearchSuggestion[] | ErrorResponse>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const q = (req.query?.q as string | undefined)?.toString().toLowerCase() || '';
  if (!q) {
    return res.status(200).json([]);
  }

  if (client) {
    try {
      const esRes = await client.search<ElasticSuggestResponse>({ // Add generic type to client.search
        index: 'listings', // Ensure this index exists and is configured for suggestions
        suggest: {
          'item-suggest': {
            prefix: q,
            completion: { field: 'suggest', size: 5 } // Ensure 'suggest' field is of type 'completion'
          }
        }
      });

      const options = esRes.suggest?.['item-suggest']?.[0]?.options || [];
      const suggestions: SearchSuggestion[] = options.map(opt => ({
        text: opt._source.title,
        type: opt._source.type
        // Assuming SearchSuggestion has { text: string, type: string }
      }));
      return res.status(200).json(suggestions);
    } catch (err: unknown) {
      console.error('Elasticsearch suggest error:', err);
      // Specific Elasticsearch error handling if needed
      if (err instanceof EsErrors.ElasticsearchClientError) {
        // Potentially return a more specific error or message
      }
      // Fall through to static suggestions on error
    }
  }

  // Fallback to static suggestions if client is null or ES search fails
  const fallbackSuggestions = generateSearchSuggestions()
    .filter(s => s.text.toLowerCase().startsWith(q)) // q is already lowercased
    .slice(0, 5);
  return res.status(200).json(fallbackSuggestions);
}

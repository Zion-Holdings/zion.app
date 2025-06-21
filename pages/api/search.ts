import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@elastic/elasticsearch';
import { withErrorLogging } from '@/utils/withErrorLogging';

// Define SearchResult interface (assuming it's not already globally defined or imported elsewhere)
// If it is, this definition can be removed.
interface SearchResult {
  id: string;
  type: 'product' | 'service' | 'talent' | 'equipment' | 'category';
  title: string;
  description: string;
  slug: string;
  image?: string;
  price?: number;
  rating?: number;
  author?: {
    name: string;
    avatar?: string;
  };
  tags?: string[];
  category?: string;
}

interface SearchResponse {
  results: SearchResult[];
  totalCount: number;
  page: number;
  limit: number;
  query: string;
}

let client: Client | null = null;
if (process.env.ELASTIC_CLOUD_ID && process.env.ELASTIC_API_KEY) {
  client = new Client({
    cloud: { id: process.env.ELASTIC_CLOUD_ID },
    auth: { apiKey: process.env.ELASTIC_API_KEY },
  });
} else {
  console.error('Elasticsearch environment variables ELASTIC_CLOUD_ID or ELASTIC_API_KEY are not set.');
}

// Helper function to create slug from title (can be moved or imported if used elsewhere)
const createSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResponse | { error: string }>,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  if (!client) {
    console.error('Search service not configured due to missing Elasticsearch client.');
    return res.status(500).json({ error: 'Search service is not configured.' });
  }

  const q = String(req.query.query ?? req.query.q ?? '')
    .toLowerCase()
    .trim();
  const page = parseInt(String(req.query.page ?? '1'), 10);
  const limit = parseInt(String(req.query.limit ?? '20'), 10);

  if (!q) {
    return res.status(200).json({
      results: [],
      totalCount: 0,
      page,
      limit,
      query: q,
    });
  }

  try {
    const searchResponse = await client.search({
      index: 'listings',
      from: (page - 1) * limit,
      size: limit,
      query: {
        multi_match: {
          query: q,
          fields: ['title', 'description'],
          fuzziness: 'AUTO',
        },
      },
    });

    const results: SearchResult[] = searchResponse.hits.hits.map((hit: any) => {
      const source = hit._source as any;
      return {
        id: hit._id,
        type: source.type as 'product' | 'service' | 'talent', // Ensure 'type' is indexed
        title: source.title,
        description: source.description,
        slug: source.slug || createSlug(source.title || ''), // Fallback for slug
        image: source.image,
        price: source.price,
        rating: source.rating,
        author: source.author,
        tags: source.tags,
        category: source.category,
      };
    });

    const totalCount = typeof searchResponse.hits.total === 'number'
      ? searchResponse.hits.total
      : (searchResponse.hits.total as { value: number }).value;

    return res.status(200).json({
      results,
      totalCount,
      page,
      limit,
      query: q,
    });

  } catch (error) {
    console.error('Elasticsearch query failed:', error);
    // Check if error is an Elasticsearch client error to provide more specific details
    // Type assertion for error.meta is needed as it's not standard on Error
    const esError = error as any;
    if (esError.meta?.body?.error) {
       console.error('Elasticsearch error details:', esError.meta.body.error);
       return res.status(500).json({ error: 'Search query failed due to backend error.' });
    }
    return res.status(500).json({ error: 'Search query failed.' });
  }
}

export default withErrorLogging(handler);

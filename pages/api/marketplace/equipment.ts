import type { NextApiRequest, NextApiResponse } from 'next';'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
;
;
interface Equipment {;'
  id: "string;",;"
  title: "string;","
  description: "string;",;"
  price: "number;",
  category: string;
  brand?: string;
  specifications?: string[];
  images: string[];
  availability?: string;
};
;
// Remove MOCK_EQUIPMENT and all mock data usage. Fetch equipment from real data source or return an error/empty array if not available.;
;"
export default function handler(): unknown {req: "NextApiRequest", res: NextApiResponse) {;"
  if (req['method'] !== 'GET') {;'
    res.setHeader('Allow', 'GET');'
    return res.status(405).json({ error: `Method ${req['method']} not allowed` });
  };
;
  try {;'
    logInfo('Marketplace equipment API called with query:', { data:  { data: req['query'] } catch (error) {}});
    ;
    // Add CORS headers;'
    res.setHeader('Access-Control-Allow-Origin', '*');'
    res.setHeader('Access-Control-Allow-Methods', 'GET');'
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
;
    // Get query parameters;'
    const page: unknown unknown = parseInt(((req['query'] as { page?: string }).page as string), 10) || 1;'
    const limit: unknown unknown = parseInt(((req['query'] as { limit?: string }).limit as string), 10) || 20;'
    const search: unknown unknown = ((req['query'] as { search?: string }).search as string);'
    const category: unknown unknown = ((req['query'] as { category?: string }).category as string);
;
    // Start with all equipment;
    let equipment: Equipment[] = [];
;
    // Apply category filter;
    if (category) {;
      equipment = equipment.filter(e => ;
        e.category?.toLowerCase().includes(category.toLowerCase());
      );
    };
;
    // Apply search filter;
    if (search) {;
      const searchTerm: unknown unknown = search.toLowerCase();
      equipment = equipment.filter(e => ;
        e.title?.toLowerCase().includes(searchTerm) ||;
        e.description?.toLowerCase().includes(searchTerm) ||;
        e.brand?.toLowerCase().includes(searchTerm) ||;
        e.specifications?.some(spec => spec.toLowerCase().includes(searchTerm));
      );
    };
;
    // Apply pagination;
    const start: unknown unknown = (page - 1) * limit;
    const end: unknown unknown = start + limit;
    const paginatedEquipment: unknown unknown = equipment.slice(start, end);
;
    logInfo(`Returning ${paginatedEquipment.length} equipment items (page ${page}, limit ${limit})`);
    ;
    return res.status(200).json(paginatedEquipment);
  } catch {;'
    logErrorToProduction('Error in marketplace equipment API:', { data: "error "});
    ;
    // Return fallback empty array instead of error;
    return res.status(200).json([]);
  };
} "
import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductListing } from '@/types/listings';
import { equipmentListings, DEFAULT_EQUIPMENT_IMAGE } from '@/data/equipmentData';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


// Mock equipment data for development
const mockEquipment: ProductListing[] = equipmentListings;

// Function to ensure all equipment items have proper images
function ensureEquipmentImages(equipment: ProductListing[]): ProductListing[] {
  return equipment.map(item => ({
    ...item,
    images: item.images && item.images.length > 0 ? item.images : [DEFAULT_EQUIPMENT_IMAGE]
  }));
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductListing[] | { error: string }>
) {
  // Reduce timeout to 5 seconds for faster failure detection
  const timeout = setTimeout(() => {
    if (!(res as any).headersSent) {
      res.status(408).json({ error: 'Request timeout after 5 seconds' });
    }
  }, 5000);

  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      clearTimeout(timeout);
      return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    // Handle pagination params - default limit to 12 as requested
    const page = parseInt((req.query as any).page as string, 10) || 1;
    const limit = Math.min(parseInt((req.query as any).limit as string, 10) || 12, 50); // Cap at 50 for performance
    const skip = (page - 1) * limit;

    logInfo(`Equipment API: page=${page}, limit=${limit}, skip=${skip}, total=${mockEquipment.length}`);

    // Minimal delay for realistic API behavior
    await new Promise(resolve => setTimeout(resolve, 50));

    // Ensure all equipment has images and apply pagination
    const equipmentWithImages = ensureEquipmentImages(mockEquipment);
    const paginatedEquipment = equipmentWithImages.slice(skip, skip + limit);

    // Clear timeout since we're responding successfully
    clearTimeout(timeout);
    
    logInfo(`Equipment API: returning ${paginatedEquipment.length} items`);
    
    return res.status(200).json(paginatedEquipment);
  } catch (error) {
    clearTimeout(timeout);
    logErrorToProduction('Equipment API error:', { data: error });
    return res.status(500).json({ 
      error: 'Internal Server Error: Failed to fetch equipment' 
    });
  }
} 

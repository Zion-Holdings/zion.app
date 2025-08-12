import type { NextApiRequest, NextApiResponse } from 'next';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


interface Equipment {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  brand?: string;
  specifications?: string[];
  images: string[];
  availability?: string;
}

const MOCK_EQUIPMENT: Equipment[] = [
  {
    id: 'eq-001',
    title: 'NVIDIA RTX 4090 GPU',
    description: 'High-performance GPU for AI workloads and machine learning training',
    price: 1599,
    category: 'GPUs',
    brand: 'NVIDIA',
    specifications: ['24GB GDDR6X', 'Ada Lovelace Architecture', '16384 CUDA Cores'],
    images: ['/images/equipment/rtx-4090.jpg'],
    availability: 'In Stock'
  },
  {
    id: 'eq-002',
    title: 'AMD EPYC 7763 Server CPU',
    description: 'Enterprise server processor for data centers and AI compute clusters',
    price: 4999,
    category: 'CPUs',
    brand: 'AMD',
    specifications: ['64 Cores', '128 Threads', '2.45 GHz Base Clock', '280W TDP'],
    images: ['/images/equipment/epyc-cpu.jpg'],
    availability: 'Limited Stock'
  },
  {
    id: 'eq-003',
    title: 'Tesla T4 GPU Server',
    description: 'Cloud-optimized GPU server for AI inference and training',
    price: 3299,
    category: 'Servers',
    brand: 'NVIDIA',
    specifications: ['Tesla T4 GPU', '32GB RAM', '1TB NVMe SSD', 'Dual 10GbE'],
    images: ['/images/equipment/tesla-t4-server.jpg'],
    availability: 'In Stock'
  },
  {
    id: 'eq-004',
    title: 'Supermicro AI Workstation',
    description: 'Purpose-built workstation for AI development and deep learning',
    price: 8999,
    category: 'Workstations',
    brand: 'Supermicro',
    specifications: ['Dual RTX 4080', '128GB DDR5 RAM', '2TB NVMe SSD', 'Intel Xeon CPU'],
    images: ['/images/equipment/ai-workstation.jpg'],
    availability: 'Pre-order'
  },
  {
    id: 'eq-005',
    title: 'Edge AI Computing Box',
    description: 'Compact edge computing device for IoT and edge AI applications',
    price: 899,
    category: 'Edge Devices',
    brand: 'Intel',
    specifications: ['Intel Neural Compute Stick', '8GB RAM', '256GB Storage', 'Wi-Fi 6'],
    images: ['/images/equipment/edge-ai-box.jpg'],
    availability: 'In Stock'
  },
  {
    id: 'eq-006',
    title: 'Quantum Development Kit',
    description: 'Complete quantum computing development and simulation kit',
    price: 15999,
    category: 'Quantum',
    brand: 'IBM',
    specifications: ['5-Qubit Simulator', 'Quantum SDK', 'Educational Materials', 'Cloud Access'],
    images: ['/images/equipment/quantum-kit.jpg'],
    availability: 'Special Order'
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    logInfo('Marketplace equipment API called with query:', { data: req.query });
    
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Get query parameters
    const page = parseInt(((req.query as any).page as string), 10) || 1;
    const limit = parseInt(((req.query as any).limit as string), 10) || 20;
    const search = ((req.query as any).search as string);
    const category = ((req.query as any).category as string);

    // Start with all equipment
    let equipment = MOCK_EQUIPMENT;

    // Apply category filter
    if (category) {
      equipment = equipment.filter(e => 
        e.category?.toLowerCase().includes(category.toLowerCase())
      );
    }

    // Apply search filter
    if (search) {
      const searchTerm = search.toLowerCase();
      equipment = equipment.filter(e => 
        e.title?.toLowerCase().includes(searchTerm) ||
        e.description?.toLowerCase().includes(searchTerm) ||
        e.brand?.toLowerCase().includes(searchTerm) ||
        e.specifications?.some(spec => spec.toLowerCase().includes(searchTerm))
      );
    }

    // Apply pagination
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedEquipment = equipment.slice(start, end);

    logInfo(`Returning ${paginatedEquipment.length} equipment items (page ${page}, limit ${limit})`);
    
    return res.status(200).json(paginatedEquipment);
  } catch (error) {
    logErrorToProduction('Error in marketplace equipment API:', { data: error });
    
    // Return fallback empty array instead of error
    return res.status(200).json([]);
  }
} 
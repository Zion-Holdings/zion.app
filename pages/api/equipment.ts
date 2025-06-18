import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductListing } from '@/types/listings';

// Mock equipment data for development
const mockEquipment: ProductListing[] = [
  {
    id: 'server-rack-1',
    title: 'Dell PowerEdge R750 Server',
    description: 'High-performance 2U rack server with dual Intel Xeon processors, 128GB RAM, and 2TB NVMe storage. Perfect for virtualization and enterprise workloads.',
    category: 'Equipment',
    subcategory: 'Servers',
    price: 8500,
    currency: '$',
    tags: ['Server', 'Dell', 'Rack Mount', 'Enterprise'],
    author: {
      name: 'Enterprise Hardware Co.',
      id: 'enterprise-hw',
      avatarUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=100&h=100',
    },
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'],
    createdAt: '2024-01-15T08:30:00.000Z',
    rating: 4.8,
    reviewCount: 24,
    featured: true,
    location: 'Global',
    availability: '2-3 Weeks',
    brand: 'Dell',
    specifications: ['2U Rack Mount', 'Dual Intel Xeon', '128GB RAM', '2TB NVMe']
  },
  {
    id: 'network-switch-1',
    title: 'Cisco Catalyst 9300 48-Port Switch',
    description: '48-port Gigabit Ethernet switch with PoE+ support, advanced security features, and modular uplinks. Ideal for enterprise network infrastructure.',
    category: 'Equipment',
    subcategory: 'Networking',
    price: 3200,
    currency: '$',
    tags: ['Switch', 'Cisco', 'PoE', 'Managed'],
    author: {
      name: 'Network Solutions Inc.',
      id: 'network-solutions',
      avatarUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=100&h=100',
    },
    images: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500'],
    createdAt: '2024-02-01T10:15:00.000Z',
    rating: 4.7,
    reviewCount: 18,
    location: 'North America',
    availability: '1-2 Weeks',
    brand: 'Cisco',
    specifications: ['48-Port Gigabit', 'PoE+ Support', 'Layer 3', 'Stackable']
  },
  {
    id: 'storage-array-1',
    title: 'HPE Nimble Storage Array',
    description: '24TB all-flash storage array with predictive analytics, automated management, and 99.9999% availability guarantee.',
    category: 'Equipment',
    subcategory: 'Storage',
    price: 45000,
    currency: '$',
    tags: ['Storage', 'HPE', 'All-Flash', 'Enterprise'],
    author: {
      name: 'Storage Experts LLC',
      id: 'storage-experts',
      avatarUrl: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=100&h=100',
    },
    images: ['https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&h=500'],
    createdAt: '2024-01-20T14:45:00.000Z',
    rating: 4.9,
    reviewCount: 12,
    featured: true,
    location: 'Global',
    availability: '4-6 Weeks',
    brand: 'HPE',
    specifications: ['24TB Capacity', 'All-Flash', 'Predictive Analytics', '99.9999% Uptime']
  },
  {
    id: 'ups-system-1',
    title: 'APC Smart-UPS 3000VA UPS',
    description: 'Uninterruptible power supply with 3000VA capacity, LCD display, and network management capabilities. Protects critical equipment from power disruptions.',
    category: 'Equipment',
    subcategory: 'Power',
    price: 1200,
    currency: '$',
    tags: ['UPS', 'APC', 'Power Protection', 'Network Management'],
    author: {
      name: 'Power Systems Pro',
      id: 'power-systems',
      avatarUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=100&h=100',
    },
    images: ['https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&h=500'],
    createdAt: '2024-02-10T09:20:00.000Z',
    rating: 4.6,
    reviewCount: 31,
    location: 'North America',
    availability: 'Immediate',
    brand: 'APC',
    specifications: ['3000VA/2700W', 'LCD Display', 'Network Management', 'Hot-Swappable Batteries']
  },
  {
    id: 'ai-workstation-1',
    title: 'NVIDIA DGX A100 AI Workstation',
    description: 'Ultimate AI development platform with 8x NVIDIA A100 GPUs, 512GB RAM, and petaflop-scale performance for deep learning and AI research.',
    category: 'Equipment',
    subcategory: 'AI',
    price: 199000,
    currency: '$',
    tags: ['AI', 'NVIDIA', 'Deep Learning', 'GPU'],
    author: {
      name: 'AI Hardware Specialists',
      id: 'ai-specialists',
      avatarUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100',
    },
    images: ['https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500'],
    createdAt: '2024-03-01T16:00:00.000Z',
    rating: 5.0,
    reviewCount: 8,
    featured: true,
    location: 'Global',
    availability: '8-12 Weeks',
    brand: 'NVIDIA',
    specifications: ['8x A100 GPUs', '512GB RAM', 'Petaflop Performance', 'DGX OS']
  },
  {
    id: 'cooling-unit-1',
    title: 'Vertiv Liebert Precision Cooling Unit',
    description: 'High-efficiency precision cooling system for data centers. 30kW capacity with variable speed fans and intelligent controls.',
    category: 'Equipment',
    subcategory: 'Cooling',
    price: 15000,
    currency: '$',
    tags: ['Cooling', 'Vertiv', 'HVAC', 'Data Center'],
    author: {
      name: 'Data Center Solutions',
      id: 'datacenter-solutions',
      avatarUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=100&h=100',
    },
    images: ['https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&h=500'],
    createdAt: '2024-01-25T11:30:00.000Z',
    rating: 4.5,
    reviewCount: 15,
    location: 'Global',
    availability: '6-8 Weeks',
    brand: 'Vertiv',
    specifications: ['30kW Capacity', 'Variable Speed Fans', 'Intelligent Controls', 'High Efficiency']
  }
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductListing[] | { error: string }>
) {
  // Add timeout handling
  const timeout = setTimeout(() => {
    if (!(res as any).headersSent) {
      res.status(408).json({ error: 'Request timeout' });
    }
  }, 30000);

  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    // Handle pagination params
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 20;
    const skip = (page - 1) * limit;

    console.log(`Equipment API: page=${page}, limit=${limit}, skip=${skip}`);

    // Simulate brief delay to test loading states
    await new Promise(resolve => setTimeout(resolve, 100));

    // Apply pagination
    const paginatedEquipment = mockEquipment.slice(skip, skip + limit);

    // Clear timeout since we're responding successfully
    clearTimeout(timeout);
    
    return res.status(200).json(paginatedEquipment);
  } catch (error) {
    clearTimeout(timeout);
    console.error('Equipment API error:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error: Failed to fetch equipment' 
    });
  }
} 
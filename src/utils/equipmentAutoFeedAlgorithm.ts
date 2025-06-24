import { ProductListing } from "@/types/listings";

// Deterministic datacenter equipment generation for IT and AI hardware
export function generateDatacenterEquipment(count: number, startId: number = 1, seed: string = 'default'): ProductListing[] {
  const equipment: ProductListing[] = [];
  
  const categories = ["AI Hardware", "Servers & Compute", "Networking", "Storage Systems", "Power & Cooling"];
  const titles = [
    "NVIDIA A100 GPU Server", "Dell PowerEdge R750", "Cisco Nexus Switch", "NetApp All-Flash Array", "APC Smart-UPS",
    "H100 AI Training System", "HPE ProLiant DL380", "Arista 7050X Switch", "Pure Storage FlashArray", "Eaton 9PX UPS",
    "Edge AI Inference Box", "Supermicro GPU Server", "Juniper QFX Switch", "Dell EMC Unity", "Vertiv Liebert",
    "AMD EPYC Server", "Intel Xeon Workstation", "Mellanox InfiniBand", "IBM FlashSystem", "Schneider Galaxy"
  ];
  
  const brands = ["NVIDIA", "Dell", "HPE", "Cisco", "NetApp", "Arista", "Juniper", "IBM", "AMD", "Intel"];
  const locations = ["Santa Clara, CA", "Austin, TX", "Ashburn, VA", "Chicago, IL", "Global"];
  
  // Simple seeded random function for deterministic generation
  const seededRandom = (seedValue: string, index: number) => {
    const str = seedValue + index.toString();
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash % 10000) / 10000; // Return value between 0 and 1
  };
  
  for (let i = 0; i < count; i++) {
    const itemIndex = startId + i;
    const rand1 = seededRandom(seed, itemIndex);
    const rand2 = seededRandom(seed, itemIndex + 1000);
    const rand3 = seededRandom(seed, itemIndex + 2000);
    const rand4 = seededRandom(seed, itemIndex + 3000);
    const rand5 = seededRandom(seed, itemIndex + 4000);
    const rand6 = seededRandom(seed, itemIndex + 5000);
    
    const category = categories[Math.floor(rand1 * categories.length)];
    const title = titles[Math.floor(rand2 * titles.length)];
    const brand = brands[Math.floor(rand3 * brands.length)];
    
    // Generate price based on category (deterministic)
    let basePrice;
    switch (category) {
      case "AI Hardware":
        basePrice = 15000 + rand4 * 70000; // $15k-85k
        break;
      case "Servers & Compute":
        basePrice = 3000 + rand4 * 42000; // $3k-45k
        break;
      case "Networking":
        basePrice = 1000 + rand4 * 34000; // $1k-35k
        break;
      case "Storage Systems":
        basePrice = 5000 + rand4 * 115000; // $5k-120k
        break;
      default: // Power & Cooling
        basePrice = 500 + rand4 * 24500; // $500-25k
    }
    
    const price = Math.round(basePrice / 100) * 100; // Round to nearest $100
    const rating = 3.5 + rand5 * 1.5;
    const reviewCount = Math.floor(rand6 * 50) + 1;
    
    // Deterministic date (30 days back from a fixed point)
    const baseTimestamp = new Date('2024-03-01').getTime();
    const dayOffset = Math.floor(rand1 * 30);
    const createdAt = new Date(baseTimestamp - dayOffset * 24 * 60 * 60 * 1000).toISOString();
    
    const equipmentItem: ProductListing = {
      id: `datacenter-eq-${itemIndex}`,
      title: `${brand} ${title}`,
      description: `Professional ${(category || 'equipment').toLowerCase()} designed for modern datacenter deployments. High-performance hardware optimized for enterprise workloads.`,
      category: category || 'Equipment',
      price,
      currency: "$",
      brand: brand || 'Unknown',
      specifications: ["Enterprise Grade", "High Performance", "Rack Mount"],
      tags: [category || 'Equipment', brand || 'Unknown', "Enterprise"],
      author: {
        name: brand || 'Unknown',
        id: (brand || 'unknown').toLowerCase().replace(/\s+/g, "-"),
      },
      images: [`https://images.unsplash.com/photo-${1600000000000 + Math.floor(rand2 * 100000000)}?auto=format&fit=crop&w=800&h=500`],
      createdAt,
      rating: Math.round(rating * 10) / 10,
      reviewCount,
      location: locations[Math.floor(rand3 * locations.length)],
      availability: rand6 > 0.3 ? "In Stock" : "2-4 Weeks"
    };
    
    equipment.push(equipmentItem);
  }
  
  return equipment;
}

export function getEquipmentMarketStats(equipment: ProductListing[]) {
  const prices = equipment.map(e => e.price).filter(Boolean) as number[];
  const ratings = equipment.map(e => e.rating).filter(Boolean) as number[];
  
  return {
    averagePrice: prices.reduce((sum, price) => sum + price, 0) / prices.length,
    averageRating: ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length,
    totalEquipment: equipment.length,
    inStockCount: equipment.filter(e => e.availability === "In Stock").length
  };
}

export function getRecommendedEquipment(equipment: ProductListing[]): ProductListing[] {
  return equipment.filter(e => (e.rating || 0) >= 4.5);
}

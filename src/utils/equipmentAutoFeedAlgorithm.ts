import { ProductListing } from "@/types/listings";

// Simple datacenter equipment generation for IT and AI hardware
export function generateDatacenterEquipment(count: number, startId: number = 1): ProductListing[] {
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
  
  for (let i = 0; i < count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const title = titles[Math.floor(Math.random() * titles.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    
    // Generate price based on category
    let basePrice;
    switch (category) {
      case "AI Hardware":
        basePrice = 15000 + Math.random() * 70000; // $15k-85k
        break;
      case "Servers & Compute":
        basePrice = 3000 + Math.random() * 42000; // $3k-45k
        break;
      case "Networking":
        basePrice = 1000 + Math.random() * 34000; // $1k-35k
        break;
      case "Storage Systems":
        basePrice = 5000 + Math.random() * 115000; // $5k-120k
        break;
      default: // Power & Cooling
        basePrice = 500 + Math.random() * 24500; // $500-25k
    }
    
    const price = Math.round(basePrice / 100) * 100; // Round to nearest $100
    const rating = 3.5 + Math.random() * 1.5;
    const reviewCount = Math.floor(Math.random() * 50) + 1;
    
    const equipmentItem: ProductListing = {
      id: `datacenter-eq-${startId + i}`,
      title: `${brand} ${title}`,
      description: `Professional ${category.toLowerCase()} designed for modern datacenter deployments. High-performance hardware optimized for enterprise workloads.`,
      category,
      price,
      currency: "$",
      brand,
      specifications: ["Enterprise Grade", "High Performance", "Rack Mount"],
      tags: [category, brand, "Enterprise"],
      author: {
        name: brand,
        id: brand.toLowerCase().replace(/\s+/g, "-"),
      },
      images: [`https://images.unsplash.com/photo-${1600000000000 + Math.floor(Math.random() * 100000000)}?auto=format&fit=crop&w=800&h=500`],
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
      rating: Math.round(rating * 10) / 10,
      reviewCount,
      location: locations[Math.floor(Math.random() * locations.length)],
      availability: Math.random() > 0.3 ? "In Stock" : "2-4 Weeks"
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

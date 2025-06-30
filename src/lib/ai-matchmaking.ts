// AI Matchmaking utility functions
import {logErrorToProduction} from "@/utils/productionLogger";

export interface MatchResultItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price?: number;
  skills?: string[];
  image?: string;
}

export interface MatchResult {
  item: MatchResultItem;
  score: number;
  matchedSkills: string[];
  reason: string;
}

// Sample data for testing when API is not available
const sampleData: MatchResultItem[] = [
  {
    id: "talent-1",
    title: "Senior AI Engineer",
    description: "Experienced AI engineer with expertise in machine learning and computer vision",
    category: "Talent - Engineering",
    price: 120,
    skills: ["Machine Learning", "Computer Vision", "TensorFlow", "Python"]
  },
  {
    id: "service-1",
    title: "AI Model Training",
    description: "Custom AI model training service with data preparation and deployment",
    category: "Services - AI Development",
    price: 5000,
    skills: ["Machine Learning", "Model Training", "AI Deployment"]
  },
  {
    id: "equipment-1",
    title: "NVIDIA A100 GPU Server",
    description: "High-performance GPU server for AI model training and inference",
    category: "Equipment - Hardware",
    price: 15000,
    skills: ["GPU Computing", "High Performance", "AI Hardware"]
  }
];

// Function to find matches based on query and type
export async function findMatches(
  query: string,
  type: string = "",
  limit: number = 5
): Promise<MatchResult[]> {
  try {
    // In production, we would call an API endpoint here
    // For now, we'll simulate a response with sample data
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Filter by type if provided
    let filteredItems = sampleData;
    if (type && type !== "all") {
      filteredItems = sampleData.filter(item => 
        item.category.toLowerCase().includes(type.toLowerCase())
      );
    }
    
    // Sort by simulated relevance (random for now)
    const matches: MatchResult[] = filteredItems.map(item => ({
      item,
      score: Math.floor(Math.random() * 40) + 60, // Random score between 60 and 99
      matchedSkills: item.skills?.slice(0, 2) || [],
      reason: `This ${(item.category?.split(' - ')[0] || 'item').toLowerCase()} matches your needs based on the provided description.`
    }));
    
    // Sort by score
    return matches.sort((a, b) => b.score - a.score).slice(0, limit);
  } catch (error) {
    logErrorToProduction('Error in matchmaking:', { data: error });
    return [];
  }
}

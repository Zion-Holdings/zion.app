

// Define types for the pricing recommendation
import {logErrorToProduction} from "@/utils/productionLogger";

export interface PricingSuggestion {
  minRate: number;
  maxRate: number;
  confidence: "High" | "Medium" | "Low";
  explanation: string;
}

export interface ClientBudgetParams {
  jobTitle: string;
  category: string;
  timeline?: string;
  scope?: string;
  experienceLevel?: string;
}

export interface TalentRateParams {
  skills: string[];
  yearsExperience: number;
  location?: string;
}

// Mock function to generate suggestions
// In production, this would call an AI service or API
export async function getClientBudgetSuggestion(params: ClientBudgetParams): Promise<PricingSuggestion> {
  try {
    // This would be replaced with an actual API call to an AI model
    // For now, we'll simulate a response based on job category
    const { jobTitle, category } = params;
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Basic logic to determine budget range based on category
    let minRate = 25;
    let maxRate = 50;
    let confidence: "High" | "Medium" | "Low" = "Medium";
    
    if (category === "development") {
      minRate = 40;
      maxRate = 80;
      confidence = "High";
    } else if (category === "design") {
      minRate = 35;
      maxRate = 70;
      confidence = "High";
    } else if (category === "marketing") {
      minRate = 30;
      maxRate = 60;
      confidence = "Medium";
    } else if (category === "data") {
      minRate = 45;
      maxRate = 90;
      confidence = "High";
    } else {
      minRate = 25;
      maxRate = 50;
      confidence = "Low";
    }
    
    // Adjust based on job title keywords
    const lowercaseTitle = jobTitle.toLowerCase();
    if (lowercaseTitle.includes("senior") || lowercaseTitle.includes("lead")) {
      minRate += 20;
      maxRate += 30;
    } else if (lowercaseTitle.includes("junior")) {
      minRate -= 10;
      maxRate -= 15;
      minRate = Math.max(minRate, 15); // Ensure minimum doesn't go too low
    }
    
    // Generate explanation
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`;
    
    return {
      minRate,
      maxRate,
      confidence,
      explanation
    };
  } catch (error) {
    logErrorToProduction('Error generating budget suggestion:', { data: error });
    // Return a fallback suggestion
    return {
      minRate: 30,
      maxRate: 60,
      confidence: "Low",
      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget."
    };
  }
}

export async function getTalentRateSuggestion(params: TalentRateParams): Promise<PricingSuggestion> {
  try {
    const { skills, yearsExperience, location } = params;
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Base rate calculation based on years of experience
    let baseRate = 25 + (yearsExperience * 5);
    
    // Adjust for in-demand skills
    const inDemandSkills = ['react', 'aws', 'machine learning', 'blockchain', 'ai', 'devops', 'kubernetes'];
    const hasInDemandSkills = skills.some(skill => 
      inDemandSkills.some(demandSkill => skill.toLowerCase().includes(demandSkill))
    );
    
    if (hasInDemandSkills) {
      baseRate += 15;
    }
    
    // Location adjustment
    let locationFactor = 1.0;
    if (location) {
      const highCostLocations = ['united states', 'usa', 'uk', 'australia', 'canada', 'germany', 'switzerland'];
      const lowCostLocations = ['india', 'philippines', 'pakistan', 'nigeria', 'ukraine', 'brazil'];
      
      const lowercaseLocation = location.toLowerCase();
      
      if (highCostLocations.some(loc => lowercaseLocation.includes(loc))) {
        locationFactor = 1.2;
      } else if (lowCostLocations.some(loc => lowercaseLocation.includes(loc))) {
        locationFactor = 0.8;
      }
    }
    
    const minRate = Math.round(baseRate * locationFactor * 0.9);
    const maxRate = Math.round(baseRate * locationFactor * 1.2);
    
    // Determine confidence
    let confidence: "High" | "Medium" | "Low" = "Medium";
    if (yearsExperience > 3 && hasInDemandSkills && location) {
      confidence = "High";
    } else if (!location || yearsExperience < 1) {
      confidence = "Low";
    }
    
    // Generate explanation
    let explanation = `Based on ${yearsExperience} years of experience`;
    if (hasInDemandSkills) {
      explanation += ` and your in-demand skills (${skills.join(', ')})`;
    }
    
    if (location) {
      explanation += `, considering market rates in ${location}`;
    }
    
    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`;
    
    return {
      minRate,
      maxRate,
      confidence,
      explanation
    };
  } catch (error) {
    logErrorToProduction('Error generating rate suggestion:', { data: error });
    return {
      minRate: 25,
      maxRate: 50,
      confidence: "Low",
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages."
    };
  }
}

// Function to save pricing analytics data
import { supabase } from '@/integrations/supabase/client';

export async function trackPricingSuggestion(data: {
  userId: string;
  suggestionType: 'client' | 'talent';
  suggestedMin: number;
  suggestedMax: number;
  actualValue?: number;
  accepted: boolean;
}) {
  try {
    const { error } = await supabase
      .from('pricing_suggestions')
      .insert({
        user_id: data.userId,
        suggestion_type: data.suggestionType,
        suggested_min: data.suggestedMin,
        suggested_max: data.suggestedMax,
        actual_value: data.actualValue,
        accepted: data.accepted,
        created_at: new Date().toISOString()
      });

    if (error) throw error;

    return true;
  } catch (error) {
    logErrorToProduction('Error tracking pricing suggestion:', { data: error });
    return false;
  }
}

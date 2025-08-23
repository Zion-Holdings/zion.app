import { useState } from "react";
import { useRouter } from 'next/router';
import { Header } from "@/components/Header";
import { GradientHeading } from "@/components/GradientHeading";
import { AIMatchmaker } from "@/components/AIMatchmaker";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { useFeatureUsage } from "@/hooks/useFeatureUsage";
import { MatchResult } from "@/lib/ai-matchmaking";

export default function AIMatcherPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  useFeatureUsage('AI Matchmaker');
  
  const handleMatchSelect = (match: MatchResult) => {
    // Get the item type from the category
    let itemType = "service";
    const category = match.item.category.toLowerCase();
    
    if (category.includes("talent") || category === "engineering" || 
        category === "data science" || category === "development") {
      itemType = "talent";
    } else if (category.includes("equipment") || category === "hardware") {
      itemType = "equipment";
    }
    
    toast({
      title: "Match Selected",
      description: `You've selected ${match.item.title}`,
    });
    
    // Store data in sessionStorage for the request-quote page
    const quoteData = { 
      serviceType: itemType,
      specificItem: match.item
    };
    
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData));
    }

    // Navigate to the quote request page
    router.push("/request-quote");
  };
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>AI Matchmaker</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Describe your needs and our AI will match you with the perfect services, talents, or equipment.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                I'm looking for:
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  <SelectItem value="all" className="text-white">All Categories</SelectItem>
                  <SelectItem value="service" className="text-white">Services</SelectItem>
                  <SelectItem value="talent" className="text-white">Talent</SelectItem>
                  <SelectItem value="equipment" className="text-white">Equipment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <AIMatchmaker 
              serviceType={selectedCategory === "all" ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}
            />
          </div>
        </div>
      </div>
    </>
  );
}

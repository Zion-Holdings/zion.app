import { useEffect, useState } from "react";
import { QuoteFormData } from "@/types/quotes";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AIMatchingResults } from "@/components/AIMatchingResults";
import { findMatches, MatchResult } from "@/lib/ai-matchmaking";
import { toast } from "@/hooks/use-toast";
import {logErrorToProduction} from '@/utils/productionLogger';


interface SummaryStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

export function SummaryStep({ formData, updateFormData }: SummaryStepProps) {
  const [isMatching, setIsMatching] = useState(false);
  const [matches, setMatches] = useState<MatchResult[]>([]);
  
  // Run AI matching when the component mounts
  useEffect(() => {
    const runMatching = async () => {
      if (!formData.projectDescription) return;
      
      setIsMatching(true);
      try {
        // Create a query string from the form data
        const queryString = `
          ${formData.projectName} 
          ${formData.projectDescription} 
          ${formData.serviceType} 
          ${formData.budget.type === 'fixed' ? `budget ${formData.budget.amount}` : ''}
          ${formData.timeline}
        `;
        
        // Get AI matches
        const results = await findMatches(
          queryString,
          formData.serviceType,
          3
        );
        
        setMatches(results);
      } catch (error) {
        logErrorToProduction('Error during AI matching:', { data: error });
        toast({
          title: "Matching Error",
          description: "We couldn't find matches for your request. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsMatching(false);
      }
    };
    
    runMatching();
  }, [formData]);
  
  const handleSelectMatch = (match: MatchResult) => {
    // Update the form with the selected match
    updateFormData({
      specificItem: match.item,
      serviceCategory: match.item.category
    });
    
    toast({
      title: "Match Selected",
      description: `You've selected ${match.item.title}`,
    });
  };
  
  // Extract just the items from each MatchResult for the AIMatchingResults component
  const matchItems = matches.map(match => match.item);
  
  // Map the onSelectMatch handler to work with the item directly
  const handleItemSelect = (item: any) => {
    // Find the original MatchResult that contains this item
    const matchResult = matches.find(match => match.item.id === item.id);
    if (matchResult) {
      handleSelectMatch(matchResult);
    }
  };
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>
      
      {/* AI Matching Results */}
      <AIMatchingResults 
        serviceType={formData.serviceType}
        projectDescription={formData.projectDescription}
        matches={matchItems}
        onSelectMatch={handleItemSelect}
        isLoading={isMatching}
      />
      
      {/* Service Information */}
      <div>
        <h4 className="text-lg font-medium text-white mb-2">Service Information</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-zion-slate-light">Service Type</Label>
                <div className="text-white">{formData.serviceType}</div>
              </div>
              
              {formData.specificItem && (
                <div>
                  <Label className="text-zion-slate-light">Selected Item</Label>
                  <div className="text-white">{formData.specificItem.title}</div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Project Details */}
      <div>
        <h4 className="text-lg font-medium text-white mb-2">Project Details</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div>
                <Label className="text-zion-slate-light">Project Name</Label>
                <div className="text-white">{formData.projectName}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Project Description</Label>
                <div className="text-white whitespace-pre-wrap">{formData.projectDescription}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Timeline */}
      <div>
        <h4 className="text-lg font-medium text-white mb-2">Timeline</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-zion-slate-light">Timeline Type</Label>
                <div className="text-white capitalize">{formData.timeline}</div>
              </div>
              
              {formData.startDate && (
                <div>
                  <Label className="text-zion-slate-light">Start Date</Label>
                  <div className="text-white">
                    {formData.startDate.toLocaleDateString()}
                  </div>
                </div>
              )}
              
              {formData.endDate && (
                <div>
                  <Label className="text-zion-slate-light">End Date</Label>
                  <div className="text-white">
                    {formData.endDate.toLocaleDateString()}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Budget */}
      <div>
        <h4 className="text-lg font-medium text-white mb-2">Budget</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-zion-slate-light">Budget Type</Label>
                <div className="text-white capitalize">{formData.budget.type}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Amount</Label>
                <div className="text-white">
                  ${formData.budget.amount.toLocaleString()}
                  {formData.budget.maxAmount ? ` - $${formData.budget.maxAmount.toLocaleString()}` : ''}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Contact Information */}
      <div>
        <h4 className="text-lg font-medium text-white mb-2">Contact Information</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-zion-slate-light">Name</Label>
                <div className="text-white">{formData.contactInfo.name}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Company</Label>
                <div className="text-white">{formData.contactInfo.company || "N/A"}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Email</Label>
                <div className="text-white">{formData.contactInfo.email}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Phone</Label>
                <div className="text-white">{formData.contactInfo.phone || "N/A"}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
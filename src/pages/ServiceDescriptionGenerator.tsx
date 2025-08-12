
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm";
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay";
import { SEO } from "@/components/SEO";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function ServiceDescriptionGenerator() {
  const { isAuthenticated, isLoading } = useAuth();
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
  
  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">
          Loading...
        </div>
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return null // Redirect handled by useRouter;
  }

  const handleDescriptionSave = (editedDescription: string) => {
    setGeneratedDescription(editedDescription);
    // Here you could also save to database if needed
  };

  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO 
        title="Service Description Generator" 
        description="Generate professional service descriptions using AI"
        keywords="service description, AI content, professional description generator"
      />
      <Header />
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Service Description Generator</h1>
          <p className="text-zion-slate mb-8">
            Create professional service descriptions with the help of AI. Just provide basic details about your service.
          </p>
          
          <div className="space-y-8">
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />
            
            {generatedDescription && (
              <GeneratedDescriptionDisplay 
                description={generatedDescription}
                onSave={handleDescriptionSave}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

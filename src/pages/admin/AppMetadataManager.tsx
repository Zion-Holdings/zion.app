
import React from "react";
import { SEO } from "@/components/SEO";
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager";

const AppMetadataManager: React.FC = () => {
  return (
    <>
      <SEO
        title="App Metadata Manager"
        description="Manage application metadata and configuration"
      />
      
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>
        
        <MetadataManager />
      </div>
    </>
  );
};

export default AppMetadataManager;


import React from "react";
import { NextSeo } from "@/components/NextSeo";
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager";

const AppMetadataManager: React.FC = () => {
  return (
    <>
      <NextSeo
        title="App Metadata Manager"
        description="Manage app store metadata for the Zion mobile application"
        noindex={true}
      />
      
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>
        
        <MetadataManager />
      </div>
    </>
  );
};

export default AppMetadataManager;

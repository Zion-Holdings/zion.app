
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

import { AppPlatform, AppMetadataValues } from "./MetadataManager";
import { toast } from "sonner";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


interface ExportPanelProps {
  platform: AppPlatform;
  metadata: AppMetadataValues;
}

export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {
  const handleExport = (format: 'json' | 'csv') => {
    try {
      let content: string;
      let fileName: string;
      
      if (format === 'json') {
        content = JSON.stringify(metadata, null, 2);
        fileName = `zion-app-metadata-${platform}-${metadata.version}.json`;
      } else {
        // Convert object to CSV format
        const headers = ['appTitle', 'shortDescription', 'longDescription', 'version', 'platform'];
        const values = [
          metadata.appTitle,
          metadata.shortDescription,
          metadata.longDescription,
          metadata.version,
          metadata.platform
        ];
        
        content = headers.join(',') + '\n' + values.map(value => `"${String(value).replace(/"/g, '""')}"`).join(',');
        
        // Add keywords as additional rows
        content += '\n\nKeywords:\n' + metadata.keywords.join(',');
        
        fileName = `zion-app-metadata-${platform}-${metadata.version}.csv`;
      }
      
      // Create download link
      const blob = new Blob([content], { type: format === 'json' ? 'application/json' : 'text/csv' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success(`Exported ${format.toUpperCase()} file successfully`);
    } catch (error) {
      logErrorToProduction('Export failed:', { data: error });
      toast.error(`Failed to export ${format.toUpperCase()} file`);
    }
  };
  
  const trackAnalytics = () => {
    logInfo("Tracking app installation analytics...");
    toast.success("Analytics tracking enabled");
  };
  
  return (
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle className="text-lg">Export & Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Export Metadata</h4>
            <p className="text-sm text-gray-400 mb-3">
              Export your app metadata for submission to app stores
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={() => handleExport('json')} className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                JSON
              </Button>
              <Button variant="outline" onClick={() => handleExport('csv')} className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                CSV
              </Button>
            </div>
          </div>
          
          <div className="border-t border-zion-purple/20 pt-4">
            <h4 className="font-medium mb-2">Installation Analytics</h4>
            <p className="text-sm text-gray-400 mb-3">
              Track how many users click "Install" from web
            </p>
            <Button onClick={trackAnalytics} className="w-full">
              Enable Analytics
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

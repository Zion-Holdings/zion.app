
import React from 'react';
import { Button } from "@/components/ui/button";
import { Upload, FileText } from 'lucide-react';



interface UploadSectionProps {
  customFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function UploadSection({ customFile, onFileUpload }: UploadSectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">
        <Upload className="h-8 w-8 text-zion-purple mb-2" />
        <p className="text-sm text-zion-slate mb-2">
          {customFile ? customFile.name : "Drag & drop your PDF or click to browse"}
        </p>
        <Button variant="outline" className="relative">
          Browse Files
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf"
            onChange={onFileUpload}
          />
        </Button>
      </div>
      
      {customFile && (
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
              <span className="text-white">{customFile.name}</span>
            </div>
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>
          </div>
        </div>
      )}
    </div>
  );
}

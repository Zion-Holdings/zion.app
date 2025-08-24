import React, { useState, useRef, useCallback } from 'react';
import { Upload, X, File, Image, FileText, Music, Video, Archive, CheckCircle, AlertCircle } from 'lucide-react';

export interface FileInfo {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  error?: string;
  preview?: string;
}

export interface FileUploadProps {
  onFilesSelected: (files: File[]) => void;
  onFileUpload?: (file: FileInfo) => Promise<void>;
  onFileRemove?: (fileId: string) => void;
  multiple?: boolean;
  accept?: string;
  maxSize?: number; // in bytes
  maxFiles?: number;
  showPreview?: boolean;
  dragAndDrop?: boolean;
  className?: string;
}

const getFileIcon = (type: string) => {
  if (type.startsWith('image/')) return Image;
  if (type.startsWith('video/')) return Video;
  if (type.startsWith('audio/')) return Music;
  if (type.includes('pdf') || type.includes('document')) return FileText;
  if (type.includes('zip') || type.includes('rar') || type.includes('tar')) return Archive;
  return File;
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const validateFile = (file: File, maxSize?: number, accept?: string) => {
  if (maxSize && file.size > maxSize) {
    return `File size exceeds ${formatFileSize(maxSize)}`;
  }
  
  if (accept) {
    const acceptedTypes = accept.split(',').map(type => type.trim());
    const fileType = file.type;
    const fileName = file.name;
    
    const isValidType = acceptedTypes.some(type => {
      if (type.startsWith('.')) {
        return fileName.toLowerCase().endsWith(type.toLowerCase());
      }
      if (type.endsWith('/*')) {
        return fileType.startsWith(type.slice(0, -1));
      }
      return fileType === type;
    });
    
    if (!isValidType) {
      return `File type not allowed. Accepted types: ${accept}`;
    }
  }
  
  return null;
};

export const FileUpload: React.FC<FileUploadProps> = ({
  onFilesSelected,
  onFileUpload,
  onFileRemove,
  multiple = false,
  accept,
  maxSize,
  maxFiles,
  showPreview = true,
  dragAndDrop = true,
  className = ''
}) => {
  const [files, setFiles] = useState<FileInfo[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((newFiles: FileList | File[]) => {
    const fileArray = Array.from(newFiles);
    const validFiles: File[] = [];
    const errors: string[] = [];

    fileArray.forEach(file => {
      const error = validateFile(file, maxSize, accept);
      if (error) {
        errors.push(`${file.name}: ${error}`);
      } else {
        validFiles.push(file);
      }
    });

    if (errors.length > 0) {
      alert(`Some files could not be added:\n${errors.join('\n')}`);
    }

    if (validFiles.length > 0) {
      const newFileInfos: FileInfo[] = validFiles.map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        progress: 0,
        status: 'uploading' as const,
        preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
      }));

      setFiles(prev => {
        const updatedFiles = [...prev, ...newFileInfos];
        if (maxFiles && updatedFiles.length > maxFiles) {
          return updatedFiles.slice(0, maxFiles);
        }
        return updatedFiles;
      });

      onFilesSelected(validFiles);

      // Simulate upload if onFileUpload is provided
      if (onFileUpload) {
        newFileInfos.forEach(async (fileInfo) => {
          try {
            await onFileUpload(fileInfo);
            setFiles(prev => prev.map(f => 
              f.id === fileInfo.id 
                ? { ...f, status: 'completed' as const, progress: 100 }
                : f
            ));
          } catch (error) {
            setFiles(prev => prev.map(f => 
              f.id === fileInfo.id 
                ? { ...f, status: 'error' as const, error: error instanceof Error ? error.message : 'Upload failed' }
                : f
            ));
          }
        });
      }
    }
  }, [maxSize, accept, maxFiles, onFilesSelected, onFileUpload]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      addFiles(selectedFiles);
      // Reset input value to allow selecting the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
    
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      addFiles(droppedFiles);
    }
  };

  const removeFile = (fileId: string) => {
    setFiles(prev => {
      const fileToRemove = prev.find(f => f.id === fileId);
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter(f => f.id !== fileId);
    });
    onFileRemove?.(fileId);
  };

  const openFileSelector = () => {
    fileInputRef.current?.click();
  };

  const getStatusIcon = (status: FileInfo['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Upload className="w-4 h-4 text-blue-500 animate-pulse" />;
    }
  };

  const getStatusColor = (status: FileInfo['status']) => {
    switch (status) {
      case 'completed':
        return 'border-green-200 bg-green-50';
      case 'error':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-blue-200 bg-blue-50';
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Drag & Drop Area */}
      {dragAndDrop && (
        <div
          className={`
            border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer
            ${isDragOver 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
            }
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={openFileSelector}
        >
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-900 mb-2">
            Drop files here or click to browse
          </p>
          <p className="text-sm text-gray-500">
            {accept ? `Accepted types: ${accept}` : 'All file types accepted'}
            {maxSize && ` • Max size: ${formatFileSize(maxSize)}`}
            {maxFiles && ` • Max files: ${maxFiles}`}
          </p>
        </div>
      )}

      {/* Manual Upload Button */}
      {!dragAndDrop && (
        <button
          onClick={openFileSelector}
          className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-gray-400 hover:bg-gray-50 transition-colors"
        >
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-lg font-medium text-gray-900">Click to select files</p>
        </button>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-900">Selected Files</h3>
          {files.map((fileInfo) => {
            const Icon = getFileIcon(fileInfo.type);
            
            return (
              <div
                key={fileInfo.id}
                className={`border rounded-lg p-4 ${getStatusColor(fileInfo.status)}`}
              >
                <div className="flex items-center space-x-3">
                  {/* File Icon/Preview */}
                  <div className="flex-shrink-0">
                    {showPreview && fileInfo.preview ? (
                      <img
                        src={fileInfo.preview}
                        alt={fileInfo.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    ) : (
                      <Icon className="w-12 h-12 text-gray-400" />
                    )}
                  </div>

                  {/* File Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      {getStatusIcon(fileInfo.status)}
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {fileInfo.name}
                      </h4>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>{formatFileSize(fileInfo.size)}</span>
                      <span>{fileInfo.type}</span>
                    </div>

                    {/* Progress Bar */}
                    {fileInfo.status === 'uploading' && (
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${fileInfo.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{fileInfo.progress}%</span>
                      </div>
                    )}

                    {/* Error Message */}
                    {fileInfo.status === 'error' && fileInfo.error && (
                      <p className="text-sm text-red-600 mt-1">{fileInfo.error}</p>
                    )}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFile(fileInfo.id)}
                    className="flex-shrink-0 p-1 hover:bg-red-100 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
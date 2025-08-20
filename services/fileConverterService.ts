export interface ConversionOptions {
  quality?: number; // 0-100 for image/audio/video
  format: string;
  size?: {
    width?: number;
    height?: number;
  };
  compression?: 'low' | 'medium' | 'high';
  metadata?: boolean;
}

export interface ConversionResult {
  originalFile: File;
  convertedFile: File;
  originalSize: number;
  convertedSize: number;
  conversionTime: number;
  options: ConversionOptions;
  success: boolean;
  error?: string;
}

export interface SupportedFormat {
  input: string[];
  output: string[];
  description: string;
  category: 'image' | 'document' | 'audio' | 'video' | 'archive';
}

export interface FileInfo {
  name: string;
  size: number;
  type: string;
  lastModified: Date;
  dimensions?: { width: number; height: number };
  duration?: number; // for audio/video
  bitrate?: number;
  sampleRate?: number; // for audio
  frameRate?: number; // for video
}

class FileConverterService {
  private readonly SUPPORTED_FORMATS: SupportedFormat[] = [
    // Image formats
    {
      input: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'svg'],
      output: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'tiff', 'svg'],
      description: 'Image file formats with conversion support',
      category: 'image'
    },
    // Document formats
    {
      input: ['pdf', 'doc', 'docx', 'txt', 'rtf', 'odt', 'html', 'md'],
      output: ['pdf', 'txt', 'html', 'md'],
      description: 'Document formats with text extraction and conversion',
      category: 'document'
    },
    // Audio formats
    {
      input: ['mp3', 'wav', 'aac', 'ogg', 'flac', 'm4a', 'wma'],
      output: ['mp3', 'wav', 'aac', 'ogg', 'flac'],
      description: 'Audio formats with quality and format conversion',
      category: 'audio'
    },
    // Video formats
    {
      input: ['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv'],
      output: ['mp4', 'webm', 'avi', 'mov'],
      description: 'Video formats with compression and format conversion',
      category: 'video'
    },
    // Archive formats
    {
      input: ['zip', 'rar', '7z', 'tar', 'gz', 'bz2'],
      output: ['zip', 'tar', 'gz'],
      description: 'Archive formats with compression options',
      category: 'archive'
    }
  ];

  async convertFile(file: File, options: ConversionOptions): Promise<ConversionResult> {
    const startTime = Date.now();
    
    try {
      // Validate file and options
      this.validateConversion(file, options);
      
      // Get file info
      const fileInfo = await this.getFileInfo(file);
      
      // Perform conversion based on file type and target format
      const convertedFile = await this.performConversion(file, options, fileInfo);
      
      const endTime = Date.now();
      
      return {
        originalFile: file,
        convertedFile,
        originalSize: file.size,
        convertedSize: convertedFile.size,
        conversionTime: endTime - startTime,
        options,
        success: true
      };
    } catch (error) {
      const endTime = Date.now();
      
      return {
        originalFile: file,
        convertedFile: file, // Fallback to original
        originalSize: file.size,
        convertedSize: file.size,
        conversionTime: endTime - startTime,
        options,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async getFileInfo(file: File): Promise<FileInfo> {
    const info: FileInfo = {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: new Date(file.lastModified)
    };

    // Extract additional metadata based on file type
    if (this.isImageFile(file)) {
      const dimensions = await this.getImageDimensions(file);
      if (dimensions) {
        info.dimensions = dimensions;
      }
    } else if (this.isAudioFile(file)) {
      const audioInfo = await this.getAudioInfo(file);
      if (audioInfo) {
        info.duration = audioInfo.duration;
        info.bitrate = audioInfo.bitrate;
        info.sampleRate = audioInfo.sampleRate;
      }
    } else if (this.isVideoFile(file)) {
      const videoInfo = await this.getVideoInfo(file);
      if (videoInfo) {
        info.duration = videoInfo.duration;
        info.dimensions = videoInfo.dimensions;
        info.frameRate = videoInfo.frameRate;
        info.bitrate = videoInfo.bitrate;
      }
    }

    return info;
  }

  getSupportedFormats(): SupportedFormat[] {
    return this.SUPPORTED_FORMATS;
  }

  getSupportedConversions(inputFormat: string): string[] {
    const format = this.SUPPORTED_FORMATS.find(f => 
      f.input.some(input => input.toLowerCase() === inputFormat.toLowerCase())
    );
    
    return format ? format.output : [];
  }

  canConvert(from: string, to: string): boolean {
    const supportedConversions = this.getSupportedConversions(from);
    return supportedConversions.some(format => 
      format.toLowerCase() === to.toLowerCase()
    );
  }

  private validateConversion(file: File, options: ConversionOptions): void {
    if (!file) {
      throw new Error('File is required');
    }

    const inputFormat = this.getFileExtension(file.name);
    if (!this.canConvert(inputFormat, options.format)) {
      throw new Error(`Conversion from ${inputFormat} to ${options.format} is not supported`);
    }

    if (options.quality && (options.quality < 0 || options.quality > 100)) {
      throw new Error('Quality must be between 0 and 100');
    }

    if (options.size) {
      if (options.size.width && options.size.width <= 0) {
        throw new Error('Width must be positive');
      }
      if (options.size.height && options.size.height <= 0) {
        throw new Error('Height must be positive');
      }
    }
  }

  private async performConversion(file: File, options: ConversionOptions, fileInfo: FileInfo): Promise<File> {
    const inputFormat = this.getFileExtension(file.name);
    
    switch (this.getFileCategory(inputFormat)) {
      case 'image':
        return this.convertImage(file, options, fileInfo);
      case 'document':
        return this.convertDocument(file, options, fileInfo);
      case 'audio':
        return this.convertAudio(file, options, fileInfo);
      case 'video':
        return this.convertVideo(file, options, fileInfo);
      case 'archive':
        return this.convertArchive(file, options, fileInfo);
      default:
        throw new Error(`Unsupported file category: ${this.getFileCategory(inputFormat)}`);
    }
  }

  private async convertImage(file: File, options: ConversionOptions, fileInfo: FileInfo): Promise<File> {
    // In a real implementation, this would use canvas or image processing libraries
    // For now, we'll create a mock conversion
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      throw new Error('Canvas context not available');
    }

    // Create a mock image conversion
    const img = new Image();
    const blob = await this.createMockImageBlob(file, options);
    
    return new File([blob], `${this.removeExtension(file.name)}.${options.format}`, {
      type: this.getMimeType(options.format)
    });
  }

  private async convertDocument(file: File, options: ConversionOptions, fileInfo: FileInfo): Promise<File> {
    // Mock document conversion
    const content = await this.extractTextContent(file);
    const convertedContent = this.convertDocumentFormat(content, options.format);
    
    const blob = new Blob([convertedContent], { type: this.getMimeType(options.format) });
    
    return new File([blob], `${this.removeExtension(file.name)}.${options.format}`, {
      type: this.getMimeType(options.format)
    });
  }

  private async convertAudio(file: File, options: ConversionOptions, fileInfo: FileInfo): Promise<File> {
    // Mock audio conversion
    const blob = await this.createMockAudioBlob(file, options);
    
    return new File([blob], `${this.removeExtension(file.name)}.${options.format}`, {
      type: this.getMimeType(options.format)
    });
  }

  private async convertVideo(file: File, options: ConversionOptions, fileInfo: FileInfo): Promise<File> {
    // Mock video conversion
    const blob = await this.createMockVideoBlob(file, options);
    
    return new File([blob], `${this.removeExtension(file.name)}.${options.format}`, {
      type: this.getMimeType(options.format)
    });
  }

  private async convertArchive(file: File, options: ConversionOptions, fileInfo: FileInfo): Promise<File> {
    // Mock archive conversion
    const blob = await this.createMockArchiveBlob(file, options);
    
    return new File([blob], `${this.removeExtension(file.name)}.${options.format}`, {
      type: this.getMimeType(options.format)
    });
  }

  private async createMockImageBlob(file: File, options: ConversionOptions): Promise<Blob> {
    // Create a mock image blob for demonstration
    const canvas = document.createElement('canvas');
    canvas.width = options.size?.width || 100;
    canvas.height = options.size?.height || 100;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Converted Image', canvas.width / 2, canvas.height / 2);
    }
    
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob || new Blob());
      }, this.getMimeType(options.format));
    });
  }

  private async createMockAudioBlob(file: File, options: ConversionOptions): Promise<Blob> {
    // Create a mock audio blob
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    
    // Create a simple audio buffer
    const buffer = audioContext.createBuffer(1, 44100, 44100);
    const channelData = buffer.getChannelData(0);
    
    for (let i = 0; i < buffer.length; i++) {
      channelData[i] = Math.sin(2 * Math.PI * 440 * i / 44100) * 0.1;
    }
    
    return new Blob([buffer], { type: this.getMimeType(options.format) });
  }

  private async createMockVideoBlob(file: File, options: ConversionOptions): Promise<Blob> {
    // Create a mock video blob
    const canvas = document.createElement('canvas');
    canvas.width = options.size?.width || 320;
    canvas.height = options.size?.height || 240;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Converted Video', canvas.width / 2, canvas.height / 2);
    }
    
    // Convert canvas to blob
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob || new Blob());
      }, this.getMimeType(options.format));
    });
  }

  private async createMockArchiveBlob(file: File, options: ConversionOptions): Promise<Blob> {
    // Create a mock archive blob
    const content = `Converted archive from ${file.name} to ${options.format}`;
    return new Blob([content], { type: this.getMimeType(options.format) });
  }

  private async extractTextContent(file: File): Promise<string> {
    if (file.type === 'text/plain') {
      return await file.text();
    }
    
    // Mock text extraction for other document types
    return `Extracted text content from ${file.name}`;
  }

  private convertDocumentFormat(content: string, targetFormat: string): string {
    switch (targetFormat.toLowerCase()) {
      case 'html':
        return `<html><body><p>${content}</p></body></html>`;
      case 'md':
        return `# Document\n\n${content}`;
      case 'txt':
        return content;
      default:
        return content;
    }
  }

  private getFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }

  private removeExtension(filename: string): string {
    return filename.replace(/\.[^/.]+$/, '');
  }

  private getFileCategory(format: string): string {
    const category = this.SUPPORTED_FORMATS.find(f => 
      f.input.some(input => input.toLowerCase() === format.toLowerCase())
    );
    return category?.category || 'unknown';
  }

  private getMimeType(format: string): string {
    const mimeTypes: Record<string, string> = {
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'webp': 'image/webp',
      'bmp': 'image/bmp',
      'tiff': 'image/tiff',
      'svg': 'image/svg+xml',
      'pdf': 'application/pdf',
      'txt': 'text/plain',
      'html': 'text/html',
      'md': 'text/markdown',
      'mp3': 'audio/mpeg',
      'wav': 'audio/wav',
      'aac': 'audio/aac',
      'ogg': 'audio/ogg',
      'flac': 'audio/flac',
      'mp4': 'video/mp4',
      'webm': 'video/webm',
      'avi': 'video/x-msvideo',
      'mov': 'video/quicktime',
      'zip': 'application/zip',
      'tar': 'application/x-tar',
      'gz': 'application/gzip'
    };
    
    return mimeTypes[format.toLowerCase()] || 'application/octet-stream';
  }

  private isImageFile(file: File): boolean {
    return file.type.startsWith('image/');
  }

  private isAudioFile(file: File): boolean {
    return file.type.startsWith('audio/');
  }

  private isVideoFile(file: File): boolean {
    return file.type.startsWith('video/');
  }

  private async getImageDimensions(file: File): Promise<{ width: number; height: number } | null> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = () => {
        resolve(null);
      };
      img.src = URL.createObjectURL(file);
    });
  }

  private async getAudioInfo(file: File): Promise<{ duration: number; bitrate: number; sampleRate: number } | null> {
    return new Promise((resolve) => {
      const audio = new Audio();
      audio.onloadedmetadata = () => {
        resolve({
          duration: audio.duration,
          bitrate: 128000, // Mock bitrate
          sampleRate: 44100 // Mock sample rate
        });
      };
      audio.onerror = () => {
        resolve(null);
      };
      audio.src = URL.createObjectURL(file);
    });
  }

  private async getVideoInfo(file: File): Promise<{ duration: number; dimensions: { width: number; height: number }; frameRate: number; bitrate: number } | null> {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.onloadedmetadata = () => {
        resolve({
          duration: video.duration,
          dimensions: { width: video.videoWidth, height: video.videoHeight },
          frameRate: 30, // Mock frame rate
          bitrate: 1000000 // Mock bitrate
        });
      };
      video.onerror = () => {
        resolve(null);
      };
      video.src = URL.createObjectURL(file);
    });
  }

  // Utility methods
  getConversionHistory(): ConversionResult[] {
    // In a real app, this would retrieve from storage
    return [];
  }

  saveConversionResult(result: ConversionResult): void {
    // In a real app, this would save to storage
    console.log('Conversion result saved:', result.originalFile.name);
  }

  estimateConversionTime(fileSize: number, fromFormat: string, toFormat: string): number {
    // Mock estimation based on file size and format complexity
    const baseTime = fileSize / 1024 / 1024; // 1 second per MB
    const complexityMultiplier = this.getFormatComplexity(fromFormat, toFormat);
    return Math.max(baseTime * complexityMultiplier, 1); // Minimum 1 second
  }

  private getFormatComplexity(from: string, to: string): number {
    const simpleConversions = ['txt', 'html', 'md'];
    const complexConversions = ['pdf', 'doc', 'docx'];
    
    if (simpleConversions.includes(from) && simpleConversions.includes(to)) return 0.5;
    if (complexConversions.includes(from) || complexConversions.includes(to)) return 2.0;
    return 1.0;
  }
}

export const fileConverterService = new FileConverterService();
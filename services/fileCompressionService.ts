export interface CompressionResult {
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
  savedBytes: number;
  savedPercentage: number;
  format: string;
  quality?: number;
  metadata?: FileMetadata;
}

export interface FileMetadata {
  filename: string;
  mimeType: string;
  dimensions?: { width: number; height: number };
  duration?: number;
  bitrate?: number;
  channels?: number;
  sampleRate?: number;
}

export interface CompressionOptions {
  quality?: number; // 0-100 for lossy compression
  format?: string; // Target format
  maxWidth?: number; // For images
  maxHeight?: number; // For images
  removeMetadata?: boolean; // Remove EXIF, etc.
  progressive?: boolean; // For JPEG
  optimize?: boolean; // General optimization
}

export interface SupportedFormat {
  input: string[];
  output: string[];
  compression: 'lossless' | 'lossy' | 'both';
  description: string;
}

class FileCompressionService {
  private supportedFormats: Map<string, SupportedFormat> = new Map();

  constructor() {
    this.initializeSupportedFormats();
  }

  /**
   * Compress a file based on its type
   */
  async compressFile(
    file: File | Buffer,
    options: CompressionOptions = {}
  ): Promise<CompressionResult> {
    const filename = file instanceof File ? file.name : 'buffer';
    const mimeType = file instanceof File ? file.type : this.detectMimeType(file);
    const originalSize = file instanceof File ? file.size : file.length;

    let result: CompressionResult;

    if (this.isImage(mimeType)) {
      result = await this.compressImage(file, options);
    } else if (this.isVideo(mimeType)) {
      result = await this.compressVideo(file, options);
    } else if (this.isAudio(mimeType)) {
      result = await this.compressAudio(file, options);
    } else if (this.isDocument(mimeType)) {
      result = await this.compressDocument(file, options);
    } else {
      result = await this.compressGeneric(file, options);
    }

    // Add metadata
    result.metadata = {
      filename,
      mimeType,
      ...result.metadata
    };

    return result;
  }

  /**
   * Compress image files
   */
  private async compressImage(
    file: File | Buffer,
    options: CompressionOptions
  ): Promise<CompressionResult> {
    const originalSize = file instanceof File ? file.size : file.length;
    const quality = options.quality || 85;
    const format = options.format || 'jpeg';

    // Simulate compression (in production, you'd use actual image processing libraries)
    const compressionRatio = this.calculateImageCompressionRatio(quality, format);
    const compressedSize = Math.round(originalSize * compressionRatio);

    return {
      originalSize,
      compressedSize,
      compressionRatio,
      savedBytes: originalSize - compressedSize,
      savedPercentage: ((originalSize - compressedSize) / originalSize) * 100,
      format,
      quality,
      metadata: {
        filename: '',
        mimeType: `image/${format}`,
        dimensions: { width: 1920, height: 1080 } // Placeholder
      }
    };
  }

  /**
   * Compress video files
   */
  private async compressVideo(
    file: File | Buffer,
    options: CompressionOptions
  ): Promise<CompressionResult> {
    const originalSize = file instanceof File ? file.size : file.length;
    const quality = options.quality || 80;
    const format = options.format || 'mp4';

    // Simulate video compression
    const compressionRatio = this.calculateVideoCompressionRatio(quality, format);
    const compressedSize = Math.round(originalSize * compressionRatio);

    return {
      originalSize,
      compressedSize,
      compressionRatio,
      savedBytes: originalSize - compressedSize,
      savedPercentage: ((originalSize - compressedSize) / originalSize) * 100,
      format,
      quality,
      metadata: {
        filename: '',
        mimeType: `video/${format}`,
        duration: 120, // Placeholder: 2 minutes
        bitrate: 2000 // Placeholder: 2 Mbps
      }
    };
  }

  /**
   * Compress audio files
   */
  private async compressAudio(
    file: File | Buffer,
    options: CompressionOptions
  ): Promise<CompressionResult> {
    const originalSize = file instanceof File ? file.size : file.length;
    const quality = options.quality || 90;
    const format = options.format || 'mp3';

    // Simulate audio compression
    const compressionRatio = this.calculateAudioCompressionRatio(quality, format);
    const compressedSize = Math.round(originalSize * compressionRatio);

    return {
      originalSize,
      compressedSize,
      compressionRatio,
      savedBytes: originalSize - compressedSize,
      savedPercentage: ((originalSize - compressedSize) / originalSize) * 100,
      format,
      quality,
      metadata: {
        filename: '',
        mimeType: `audio/${format}`,
        duration: 180, // Placeholder: 3 minutes
        channels: 2, // Stereo
        sampleRate: 44100 // 44.1 kHz
      }
    };
  }

  /**
   * Compress document files
   */
  private async compressDocument(
    file: File | Buffer,
    options: CompressionOptions
  ): Promise<CompressionResult> {
    const originalSize = file instanceof File ? file.size : file.length;
    const format = options.format || 'pdf';

    // Document compression is usually lossless
    const compressionRatio = 0.7; // 30% reduction typical for documents
    const compressedSize = Math.round(originalSize * compressionRatio);

    return {
      originalSize,
      compressedSize,
      compressionRatio,
      savedBytes: originalSize - compressedSize,
      savedPercentage: ((originalSize - compressedSize) / originalSize) * 100,
      format,
      metadata: {
        filename: '',
        mimeType: `application/${format}`
      }
    };
  }

  /**
   * Generic file compression
   */
  private async compressGeneric(
    file: File | Buffer,
    options: CompressionOptions
  ): Promise<CompressionResult> {
    const originalSize = file instanceof File ? file.size : file.length;
    
    // Generic compression typically achieves 20-40% reduction
    const compressionRatio = 0.75;
    const compressedSize = Math.round(originalSize * compressionRatio);

    return {
      originalSize,
      compressedSize,
      compressionRatio,
      savedBytes: originalSize - compressedSize,
      savedPercentage: ((originalSize - compressedSize) / originalSize) * 100,
      format: 'compressed',
      metadata: {
        filename: '',
        mimeType: 'application/octet-stream'
      }
    };
  }

  /**
   * Calculate image compression ratio based on quality and format
   */
  private calculateImageCompressionRatio(quality: number, format: string): number {
    let baseRatio = 1.0;
    
    // Format-specific base ratios
    switch (format.toLowerCase()) {
      case 'jpeg':
        baseRatio = 0.3; // JPEG is very efficient
        break;
      case 'png':
        baseRatio = 0.8; // PNG is less efficient but lossless
        break;
      case 'webp':
        baseRatio = 0.4; // WebP is efficient
        break;
      case 'avif':
        baseRatio = 0.25; // AVIF is very efficient
        break;
      default:
        baseRatio = 0.6;
    }

    // Quality adjustment
    const qualityFactor = quality / 100;
    return baseRatio * qualityFactor + (1 - qualityFactor) * 0.1;
  }

  /**
   * Calculate video compression ratio
   */
  private calculateVideoCompressionRatio(quality: number, format: string): number {
    let baseRatio = 1.0;
    
    switch (format.toLowerCase()) {
      case 'mp4':
        baseRatio = 0.4;
        break;
      case 'webm':
        baseRatio = 0.35;
        break;
      case 'avi':
        baseRatio = 0.6;
        break;
      default:
        baseRatio = 0.5;
    }

    const qualityFactor = quality / 100;
    return baseRatio * qualityFactor + (1 - qualityFactor) * 0.2;
  }

  /**
   * Calculate audio compression ratio
   */
  private calculateAudioCompressionRatio(quality: number, format: string): number {
    let baseRatio = 1.0;
    
    switch (format.toLowerCase()) {
      case 'mp3':
        baseRatio = 0.3;
        break;
      case 'aac':
        baseRatio = 0.25;
        break;
      case 'ogg':
        baseRatio = 0.35;
        break;
      default:
        baseRatio = 0.4;
    }

    const qualityFactor = quality / 100;
    return baseRatio * qualityFactor + (1 - qualityFactor) * 0.1;
  }

  /**
   * Detect MIME type from buffer
   */
  private detectMimeType(buffer: Buffer): string {
    // Simple MIME type detection based on file signatures
    const signatures: { [key: string]: number[] } = {
      'image/jpeg': [0xFF, 0xD8, 0xFF],
      'image/png': [0x89, 0x50, 0x4E, 0x47],
      'image/gif': [0x47, 0x49, 0x46],
      'image/webp': [0x52, 0x49, 0x46, 0x46],
      'video/mp4': [0x00, 0x00, 0x00, 0x18, 0x66, 0x74, 0x79, 0x70],
      'audio/mpeg': [0xFF, 0xFB],
      'application/pdf': [0x25, 0x50, 0x44, 0x46]
    };

    for (const [mimeType, signature] of Object.entries(signatures)) {
      if (this.matchesSignature(buffer, signature)) {
        return mimeType;
      }
    }

    return 'application/octet-stream';
  }

  /**
   * Check if buffer matches a signature
   */
  private matchesSignature(buffer: Buffer, signature: number[]): boolean {
    if (buffer.length < signature.length) return false;
    
    for (let i = 0; i < signature.length; i++) {
      if (buffer[i] !== signature[i]) return false;
    }
    
    return true;
  }

  /**
   * Check if MIME type is an image
   */
  private isImage(mimeType: string): boolean {
    return mimeType.startsWith('image/');
  }

  /**
   * Check if MIME type is a video
   */
  private isVideo(mimeType: string): boolean {
    return mimeType.startsWith('video/');
  }

  /**
   * Check if MIME type is audio
   */
  private isAudio(mimeType: string): boolean {
    return mimeType.startsWith('audio/');
  }

  /**
   * Check if MIME type is a document
   */
  private isDocument(mimeType: string): boolean {
    return mimeType.includes('pdf') || 
           mimeType.includes('document') || 
           mimeType.includes('text') ||
           mimeType.includes('word') ||
           mimeType.includes('excel') ||
           mimeType.includes('powerpoint');
  }

  /**
   * Initialize supported formats
   */
  private initializeSupportedFormats(): void {
    this.supportedFormats.set('images', {
      input: ['jpeg', 'jpg', 'png', 'gif', 'bmp', 'tiff', 'webp'],
      output: ['jpeg', 'png', 'webp', 'avif'],
      compression: 'both',
      description: 'Image compression with quality control'
    });

    this.supportedFormats.set('videos', {
      input: ['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv'],
      output: ['mp4', 'webm', 'avi'],
      compression: 'lossy',
      description: 'Video compression with bitrate control'
    });

    this.supportedFormats.set('audio', {
      input: ['mp3', 'wav', 'aac', 'ogg', 'flac', 'wma'],
      output: ['mp3', 'aac', 'ogg'],
      compression: 'both',
      description: 'Audio compression with quality control'
    });

    this.supportedFormats.set('documents', {
      input: ['pdf', 'doc', 'docx', 'txt', 'rtf'],
      output: ['pdf', 'txt'],
      compression: 'lossless',
      description: 'Document compression and optimization'
    });
  }

  /**
   * Get supported formats
   */
  getSupportedFormats(): Map<string, SupportedFormat> {
    return new Map(this.supportedFormats);
  }

  /**
   * Get compression recommendations for a file
   */
  getCompressionRecommendations(
    file: File | Buffer,
    targetSize?: number
  ): CompressionOptions[] {
    const mimeType = file instanceof File ? file.type : this.detectMimeType(file);
    const originalSize = file instanceof File ? file.size : file.length;
    const recommendations: CompressionOptions[] = [];

    if (this.isImage(mimeType)) {
      if (targetSize && targetSize < originalSize * 0.5) {
        recommendations.push({ quality: 60, format: 'jpeg', optimize: true });
        recommendations.push({ quality: 80, format: 'webp', optimize: true });
      } else {
        recommendations.push({ quality: 85, format: 'jpeg', optimize: true });
        recommendations.push({ quality: 90, format: 'png', optimize: true });
      }
    } else if (this.isVideo(mimeType)) {
      if (targetSize && targetSize < originalSize * 0.3) {
        recommendations.push({ quality: 60, format: 'mp4', optimize: true });
      } else {
        recommendations.push({ quality: 80, format: 'mp4', optimize: true });
        recommendations.push({ quality: 85, format: 'webm', optimize: true });
      }
    } else if (this.isAudio(mimeType)) {
      recommendations.push({ quality: 128, format: 'mp3', optimize: true });
      recommendations.push({ quality: 192, format: 'aac', optimize: true });
    }

    return recommendations;
  }

  /**
   * Estimate compression results before processing
   */
  estimateCompression(
    file: File | Buffer,
    options: CompressionOptions
  ): Omit<CompressionResult, 'compressedSize' | 'savedBytes' | 'savedPercentage'> {
    const originalSize = file instanceof File ? file.size : file.length;
    const mimeType = file instanceof File ? file.type : this.detectMimeType(file);
    
    let compressionRatio = 0.8; // Default
    
    if (this.isImage(mimeType)) {
      compressionRatio = this.calculateImageCompressionRatio(options.quality || 85, options.format || 'jpeg');
    } else if (this.isVideo(mimeType)) {
      compressionRatio = this.calculateVideoCompressionRatio(options.quality || 80, options.format || 'mp4');
    } else if (this.isAudio(mimeType)) {
      compressionRatio = this.calculateAudioCompressionRatio(options.quality || 90, options.format || 'mp3');
    }

    return {
      originalSize,
      compressionRatio,
      format: options.format || 'compressed',
      quality: options.quality
    };
  }

  /**
   * Get service statistics
   */
  getStats(): { supportedFormats: number; totalCategories: number } {
    return {
      supportedFormats: Array.from(this.supportedFormats.values()).reduce((acc, format) => 
        acc + format.input.length + format.output.length, 0),
      totalCategories: this.supportedFormats.size
    };
  }
}

// Export singleton instance
export const fileCompressionService = new FileCompressionService();

// Export the class for custom instances
export { FileCompressionService };
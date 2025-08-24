export interface FileTypeInfo {
  mimeType: string;
  extension: string;
  description: string;
  category: FileCategory;
  isText: boolean;
  isImage: boolean;
  isVideo: boolean;
  isAudio: boolean;
  isArchive: boolean;
  isDocument: boolean;
  isExecutable: boolean;
  isCompressed: boolean;
  confidence: number;
  signatures: string[];
  magicNumbers: string[];
}

export interface FileAnalysisResult {
  fileType: FileTypeInfo;
  size: number;
  dimensions?: { width: number; height: number };
  duration?: number;
  bitrate?: number;
  compression?: string;
  encoding?: string;
  metadata: Record<string, any>;
  security: SecurityAnalysis;
  suggestions: string[];
}

export interface SecurityAnalysis {
  isSafe: boolean;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  threats: string[];
  recommendations: string[];
}

export type FileCategory = 
  | 'image' | 'video' | 'audio' | 'document' | 'archive' 
  | 'executable' | 'text' | 'data' | 'font' | 'unknown';

class FileTypeDetectorService {
  private readonly mimeTypes = new Map<string, FileTypeInfo>();
  private readonly magicNumbers = new Map<string, string[]>();
  private readonly fileSignatures = new Map<string, string[]>();

  constructor() {
    this.initializeMimeTypes();
    this.initializeMagicNumbers();
    this.initializeFileSignatures();
  }

  async detectFileType(file: File | Buffer | Uint8Array): Promise<FileTypeInfo> {
    try {
      let buffer: Uint8Array;
      
      if (file instanceof File) {
        buffer = new Uint8Array(await file.arrayBuffer());
      } else if (Buffer.isBuffer(file)) {
        buffer = new Uint8Array(file);
      } else {
        buffer = file;
      }

      // Try magic number detection first
      const magicNumberResult = this.detectByMagicNumber(buffer);
      if (magicNumberResult && magicNumberResult.confidence > 0.8) {
        return magicNumberResult;
      }

      // Try file signature detection
      const signatureResult = this.detectBySignature(buffer);
      if (signatureResult && signatureResult.confidence > 0.7) {
        return signatureResult;
      }

      // Try extension-based detection
      if (file instanceof File) {
        const extensionResult = this.detectByExtension(file.name);
        if (extensionResult) {
          return extensionResult;
        }
      }

      // Fallback to content analysis
      return this.detectByContent(buffer);

    } catch (error) {
      console.error('File type detection error:', error);
      return this.getUnknownFileType();
    }
  }

  async analyzeFile(file: File | Buffer | Uint8Array): Promise<FileAnalysisResult> {
    const fileType = await this.detectFileType(file);
    const buffer = file instanceof File ? new Uint8Array(await file.arrayBuffer()) : 
                   Buffer.isBuffer(file) ? new Uint8Array(file) : file;

    const result: FileAnalysisResult = {
      fileType,
      size: buffer.length,
      metadata: {},
      security: {
        isSafe: true,
        riskLevel: 'low',
        threats: [],
        recommendations: []
      },
      suggestions: []
    };

    // Analyze based on file type
    if (fileType.isImage) {
      await this.analyzeImage(buffer, result);
    } else if (fileType.isVideo) {
      await this.analyzeVideo(buffer, result);
    } else if (fileType.isAudio) {
      await this.analyzeAudio(buffer, result);
    } else if (fileType.isDocument) {
      await this.analyzeDocument(buffer, result);
    } else if (fileType.isArchive) {
      await this.analyzeArchive(buffer, result);
    } else if (fileType.isExecutable) {
      await this.analyzeExecutable(buffer, result);
    }

    // Perform security analysis
    this.performSecurityAnalysis(buffer, fileType, result);

    // Generate suggestions
    this.generateSuggestions(result);

    return result;
  }

  async validateFile(file: File | Buffer | Uint8Array, allowedTypes?: string[]): Promise<{
    isValid: boolean;
    fileType: FileTypeInfo;
    errors: string[];
    warnings: string[];
  }> {
    const fileType = await this.detectFileType(file);
    const errors: string[] = [];
    const warnings: string[] = [];

    // Check if file type is allowed
    if (allowedTypes && allowedTypes.length > 0) {
      const isAllowed = allowedTypes.some(type => 
        fileType.mimeType.startsWith(type) || 
        fileType.extension.toLowerCase() === type.toLowerCase()
      );
      
      if (!isAllowed) {
        errors.push(`File type ${fileType.mimeType} is not allowed`);
      }
    }

    // Check file size
    const buffer = file instanceof File ? new Uint8Array(await file.arrayBuffer()) : 
                   Buffer.isBuffer(file) ? new Uint8Array(file) : file;
    
    if (buffer.length > 100 * 1024 * 1024) { // 100MB
      warnings.push('File size is very large (>100MB)');
    }

    // Check for suspicious patterns
    if (fileType.isExecutable) {
      warnings.push('Executable files may pose security risks');
    }

    if (fileType.mimeType === 'application/octet-stream') {
      warnings.push('Unknown file type detected');
    }

    return {
      isValid: errors.length === 0,
      fileType,
      errors,
      warnings
    };
  }

  async getSupportedTypes(): Promise<FileTypeInfo[]> {
    return Array.from(this.mimeTypes.values());
  }

  async getTypesByCategory(category: FileCategory): Promise<FileTypeInfo[]> {
    return Array.from(this.mimeTypes.values()).filter(type => type.category === category);
  }

  private initializeMimeTypes(): void {
    // Images
    this.mimeTypes.set('image/jpeg', {
      mimeType: 'image/jpeg',
      extension: '.jpg',
      description: 'JPEG Image',
      category: 'image',
      isText: false,
      isImage: true,
      isVideo: false,
      isAudio: false,
      isArchive: false,
      isDocument: false,
      isExecutable: false,
      isCompressed: false,
      confidence: 1.0,
      signatures: ['JPEG', 'JFIF'],
      magicNumbers: ['ffd8ffe0', 'ffd8ffe1', 'ffd8ffe2']
    });

    this.mimeTypes.set('image/png', {
      mimeType: 'image/png',
      extension: '.png',
      description: 'PNG Image',
      category: 'image',
      isText: false,
      isImage: true,
      isVideo: false,
      isAudio: false,
      isArchive: false,
      isDocument: false,
      isExecutable: false,
      isCompressed: false,
      confidence: 1.0,
      signatures: ['PNG'],
      magicNumbers: ['89504e47']
    });

    this.mimeTypes.set('image/gif', {
      mimeType: 'image/gif',
      extension: '.gif',
      description: 'GIF Image',
      category: 'image',
      isText: false,
      isImage: true,
      isVideo: false,
      isAudio: false,
      isArchive: false,
      isDocument: false,
      isExecutable: false,
      isCompressed: false,
      confidence: 1.0,
      signatures: ['GIF'],
      magicNumbers: ['47494638']
    });

    // Documents
    this.mimeTypes.set('application/pdf', {
      mimeType: 'application/pdf',
      extension: '.pdf',
      description: 'PDF Document',
      category: 'document',
      isText: false,
      isImage: false,
      isVideo: false,
      isAudio: false,
      isArchive: false,
      isDocument: true,
      isExecutable: false,
      isCompressed: false,
      confidence: 1.0,
      signatures: ['PDF'],
      magicNumbers: ['25504446']
    });

    this.mimeTypes.set('application/msword', {
      mimeType: 'application/msword',
      extension: '.doc',
      description: 'Microsoft Word Document',
      category: 'document',
      isText: false,
      isImage: false,
      isVideo: false,
      isAudio: false,
      isArchive: false,
      isDocument: true,
      isExecutable: false,
      isCompressed: false,
      confidence: 1.0,
      signatures: ['Microsoft Word'],
      magicNumbers: ['d0cf11e0']
    });

    // Archives
    this.mimeTypes.set('application/zip', {
      mimeType: 'application/zip',
      extension: '.zip',
      description: 'ZIP Archive',
      category: 'archive',
      isText: false,
      isImage: false,
      isVideo: false,
      isAudio: false,
      isArchive: true,
      isDocument: false,
      isExecutable: false,
      isCompressed: true,
      confidence: 1.0,
      signatures: ['ZIP'],
      magicNumbers: ['504b0304', '504b0506', '504b0708']
    });

    // Videos
    this.mimeTypes.set('video/mp4', {
      mimeType: 'video/mp4',
      extension: '.mp4',
      description: 'MP4 Video',
      category: 'video',
      isText: false,
      isImage: false,
      isVideo: true,
      isAudio: false,
      isArchive: false,
      isDocument: false,
      isExecutable: false,
      isCompressed: false,
      confidence: 1.0,
      signatures: ['MP4'],
      magicNumbers: ['00000020', '00000018', '0000001c']
    });

    // Audio
    this.mimeTypes.set('audio/mpeg', {
      mimeType: 'audio/mpeg',
      extension: '.mp3',
      description: 'MP3 Audio',
      category: 'audio',
      isText: false,
      isImage: false,
      isVideo: false,
      isAudio: true,
      isArchive: false,
      isDocument: false,
      isExecutable: false,
      isCompressed: false,
      confidence: 1.0,
      signatures: ['MP3'],
      magicNumbers: ['494433', 'fffb', 'fffa']
    });

    // Text files
    this.mimeTypes.set('text/plain', {
      mimeType: 'text/plain',
      extension: '.txt',
      description: 'Plain Text',
      category: 'text',
      isText: true,
      isImage: false,
      isVideo: false,
      isAudio: false,
      isArchive: false,
      isDocument: false,
      isExecutable: false,
      isCompressed: false,
      confidence: 0.9,
      signatures: ['Text'],
      magicNumbers: []
    });

    // Executables
    this.mimeTypes.set('application/x-executable', {
      mimeType: 'application/x-executable',
      extension: '.exe',
      description: 'Executable File',
      category: 'executable',
      isText: false,
      isImage: false,
      isVideo: false,
      isAudio: false,
      isArchive: false,
      isDocument: false,
      isExecutable: true,
      isCompressed: false,
      confidence: 1.0,
      signatures: ['PE', 'MZ'],
      magicNumbers: ['4d5a9000', '4d5a5000']
    });
  }

  private initializeMagicNumbers(): void {
    // This would contain a comprehensive list of magic numbers
    // For brevity, we'll include just a few key ones
    this.magicNumbers.set('ffd8ffe0', ['image/jpeg']);
    this.magicNumbers.set('89504e47', ['image/png']);
    this.magicNumbers.set('47494638', ['image/gif']);
    this.magicNumbers.set('25504446', ['application/pdf']);
    this.magicNumbers.set('d0cf11e0', ['application/msword']);
    this.magicNumbers.set('504b0304', ['application/zip']);
    this.magicNumbers.set('4d5a9000', ['application/x-executable']);
  }

  private initializeFileSignatures(): void {
    // This would contain file signatures for detection
    this.fileSignatures.set('JPEG', ['ÿØÿà', 'ÿØÿá', 'ÿØÿâ']);
    this.fileSignatures.set('PNG', ['\x89PNG\r\n\x1a\n']);
    this.fileSignatures.set('GIF', ['GIF87a', 'GIF89a']);
    this.fileSignatures.set('PDF', ['%PDF']);
    this.fileSignatures.set('ZIP', ['PK\x03\x04', 'PK\x05\x06', 'PK\x07\x08']);
    this.fileSignatures.set('PE', ['MZ']);
  }

  private detectByMagicNumber(buffer: Uint8Array): FileTypeInfo | null {
    if (buffer.length < 4) return null;

    const hex = Array.from(buffer.slice(0, 8))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    for (const [magic, mimeTypes] of this.magicNumbers.entries()) {
      if (hex.startsWith(magic)) {
        const mimeType = mimeTypes[0];
        const fileType = this.mimeTypes.get(mimeType);
        if (fileType) {
          return { ...fileType, confidence: 0.95 };
        }
      }
    }

    return null;
  }

  private detectBySignature(buffer: Uint8Array): FileTypeInfo | null {
    const text = new TextDecoder().decode(buffer.slice(0, 1024));

    for (const [signature, mimeTypes] of this.fileSignatures.entries()) {
      if (mimeTypes.some(sig => text.includes(sig))) {
        // Find corresponding mime type
        for (const [mime, fileType] of this.mimeTypes.entries()) {
          if (fileType.signatures.includes(signature)) {
            return { ...fileType, confidence: 0.9 };
          }
        }
      }
    }

    return null;
  }

  private detectByExtension(filename: string): FileTypeInfo | null {
    const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
    
    for (const fileType of this.mimeTypes.values()) {
      if (fileType.extension === extension) {
        return { ...fileType, confidence: 0.7 };
      }
    }

    return null;
  }

  private detectByContent(buffer: Uint8Array): FileTypeInfo {
    // Analyze content to determine type
    const text = new TextDecoder().decode(buffer.slice(0, 1024));
    
    // Check if it's text
    if (this.isTextContent(text)) {
      return {
        mimeType: 'text/plain',
        extension: '.txt',
        description: 'Plain Text',
        category: 'text',
        isText: true,
        isImage: false,
        isVideo: false,
        isAudio: false,
        isArchive: false,
        isDocument: false,
        isExecutable: false,
        isCompressed: false,
        confidence: 0.6,
        signatures: ['Text'],
        magicNumbers: []
      };
    }

    // Check if it's binary
    if (this.isBinaryContent(buffer)) {
      return {
        mimeType: 'application/octet-stream',
        extension: '.bin',
        description: 'Binary File',
        category: 'unknown',
        isText: false,
        isImage: false,
        isVideo: false,
        isAudio: false,
        isArchive: false,
        isDocument: false,
        isExecutable: false,
        isCompressed: false,
        confidence: 0.3,
        signatures: ['Binary'],
        magicNumbers: []
      };
    }

    return this.getUnknownFileType();
  }

  private isTextContent(text: string): boolean {
    // Check if content is mostly printable text
    const printableChars = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').length;
    return printableChars / text.length > 0.8;
  }

  private isBinaryContent(buffer: Uint8Array): boolean {
    // Check for null bytes and other binary indicators
    const nullBytes = buffer.slice(0, 1024).filter(b => b === 0).length;
    return nullBytes > buffer.length * 0.1;
  }

  private getUnknownFileType(): FileTypeInfo {
    return {
      mimeType: 'application/octet-stream',
      extension: '.bin',
      description: 'Unknown File Type',
      category: 'unknown',
      isText: false,
      isImage: false,
      isVideo: false,
      isAudio: false,
      isArchive: false,
      isDocument: false,
      isExecutable: false,
      isCompressed: false,
      confidence: 0.0,
      signatures: [],
      magicNumbers: []
    };
  }

  private async analyzeImage(buffer: Uint8Array, result: FileAnalysisResult): Promise<void> {
    // Simplified image analysis
    try {
      // In a real implementation, you'd use a proper image library
      // For now, we'll simulate some basic analysis
      result.dimensions = {
        width: Math.floor(Math.random() * 1000) + 100,
        height: Math.floor(Math.random() * 1000) + 100
      };
      
      result.metadata = {
        format: result.fileType.description,
        colorSpace: 'RGB',
        bitDepth: 8
      };
    } catch (error) {
      console.error('Image analysis error:', error);
    }
  }

  private async analyzeVideo(buffer: Uint8Array, result: FileAnalysisResult): Promise<void> {
    // Simplified video analysis
    try {
      result.duration = Math.floor(Math.random() * 300) + 10; // 10-310 seconds
      result.bitrate = Math.floor(Math.random() * 5000) + 1000; // 1-6 Mbps
      result.metadata = {
        codec: 'H.264',
        frameRate: '30fps',
        resolution: '1920x1080'
      };
    } catch (error) {
      console.error('Video analysis error:', error);
    }
  }

  private async analyzeAudio(buffer: Uint8Array, result: FileAnalysisResult): Promise<void> {
    // Simplified audio analysis
    try {
      result.duration = Math.floor(Math.random() * 300) + 10; // 10-310 seconds
      result.bitrate = Math.floor(Math.random() * 320) + 128; // 128-448 kbps
      result.metadata = {
        codec: 'MP3',
        sampleRate: '44.1kHz',
        channels: 2
      };
    } catch (error) {
      console.error('Audio analysis error:', error);
    }
  }

  private async analyzeDocument(buffer: Uint8Array, result: FileAnalysisResult): Promise<void> {
    // Simplified document analysis
    try {
      const text = new TextDecoder().decode(buffer.slice(0, 1024));
      result.metadata = {
        pages: Math.floor(Math.random() * 100) + 1,
        author: 'Unknown',
        title: 'Untitled Document'
      };
    } catch (error) {
      console.error('Document analysis error:', error);
    }
  }

  private async analyzeArchive(buffer: Uint8Array, result: FileAnalysisResult): Promise<void> {
    // Simplified archive analysis
    try {
      result.compression = 'ZIP';
      result.metadata = {
        compressionRatio: Math.floor(Math.random() * 50) + 50, // 50-100%
        fileCount: Math.floor(Math.random() * 100) + 1
      };
    } catch (error) {
      console.error('Archive analysis error:', error);
    }
  }

  private async analyzeExecutable(buffer: Uint8Array, result: FileAnalysisResult): Promise<void> {
    // Simplified executable analysis
    try {
      result.metadata = {
        architecture: 'x86-64',
        platform: 'Windows',
        entryPoint: '0x1000'
      };
    } catch (error) {
      console.error('Executable analysis error:', error);
    }
  }

  private performSecurityAnalysis(buffer: Uint8Array, fileType: FileTypeInfo, result: FileAnalysisResult): void {
    const security = result.security;
    
    // Check file size
    if (buffer.length > 50 * 1024 * 1024) { // 50MB
      security.threats.push('Large file size may indicate malicious content');
      security.riskLevel = 'medium';
    }

    // Check for executable files
    if (fileType.isExecutable) {
      security.threats.push('Executable files can contain malicious code');
      security.riskLevel = 'high';
      security.isSafe = false;
    }

    // Check for suspicious patterns
    const text = new TextDecoder().decode(buffer.slice(0, 1024));
    const suspiciousPatterns = [
      /eval\s*\(/i,
      /document\.write/i,
      /javascript:/i,
      /vbscript:/i,
      /<script/i
    ];

    suspiciousPatterns.forEach(pattern => {
      if (pattern.test(text)) {
        security.threats.push('Suspicious code patterns detected');
        security.riskLevel = 'high';
        security.isSafe = false;
      }
    });

    // Generate security recommendations
    if (security.riskLevel === 'high' || security.riskLevel === 'critical') {
      security.recommendations.push('Scan file with antivirus software');
      security.recommendations.push('Verify file source and authenticity');
    }

    if (fileType.isExecutable) {
      security.recommendations.push('Only run executables from trusted sources');
      security.recommendations.push('Use sandboxed environment for testing');
    }
  }

  private generateSuggestions(result: FileAnalysisResult): void {
    const { fileType, size, security } = result;

    // File type specific suggestions
    if (fileType.isImage) {
      if (size > 5 * 1024 * 1024) { // 5MB
        result.suggestions.push('Consider compressing image to reduce file size');
      }
      result.suggestions.push('Use appropriate image format for your use case');
    }

    if (fileType.isVideo) {
      if (size > 100 * 1024 * 1024) { // 100MB
        result.suggestions.push('Consider using video compression for web delivery');
      }
      result.suggestions.push('Ensure video codec is web-compatible');
    }

    if (fileType.isArchive) {
      result.suggestions.push('Extract and scan contents before opening');
      result.suggestions.push('Use password protection for sensitive archives');
    }

    if (fileType.isDocument) {
      result.suggestions.push('Keep documents updated and backed up');
      result.suggestions.push('Use version control for collaborative editing');
    }

    // Security suggestions
    if (security.riskLevel !== 'low') {
      result.suggestions.push('Verify file integrity and source');
      result.suggestions.push('Use security software for additional protection');
    }

    // General suggestions
    if (size > 10 * 1024 * 1024) { // 10MB
      result.suggestions.push('Consider file compression or alternative formats');
    }

    result.suggestions.push('Keep file backups in multiple locations');
    result.suggestions.push('Regularly update file handling software');
  }
}

export default new FileTypeDetectorService();
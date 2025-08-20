export interface QRCodeOptions {
  text: string;
  size?: number;
  foregroundColor?: string;
  backgroundColor?: string;
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  margin?: number;
  logo?: {
    url: string;
    size: number;
    cornerRadius?: number;
  };
  style?: 'square' | 'rounded' | 'dots' | 'cross';
  quietZone?: boolean;
}

export interface QRCodeResult {
  success: boolean;
  qrCodeDataUrl?: string;
  qrCodeSvg?: string;
  qrCodeText?: string;
  error?: string;
  metadata: {
    size: number;
    errorCorrectionLevel: string;
    dataCapacity: number;
    estimatedSize: number;
    generationTime: number;
  };
}

export interface QRCodeAnalytics {
  totalGenerated: number;
  totalScanned: number;
  popularTexts: { text: string; count: number }[];
  sizeDistribution: { size: number; count: number }[];
  errorCorrectionUsage: { level: string; count: number }[];
  averageGenerationTime: number;
}

export interface QRCodeValidationResult {
  isValid: boolean;
  type: 'url' | 'email' | 'phone' | 'text' | 'wifi' | 'vcard' | 'unknown';
  suggestions: string[];
  security: {
    isSafe: boolean;
    warnings: string[];
  };
}

class QRCodeService {
  private readonly stats = {
    totalGenerated: 0,
    totalScanned: 0,
    generationTimes: [] as number[],
    texts: new Map<string, number>(),
    sizes: new Map<number, number>(),
    errorCorrectionLevels: new Map<string, number>()
  };

  private readonly defaultOptions: Required<Omit<QRCodeOptions, 'text' | 'logo'>> = {
    size: 256,
    foregroundColor: '#000000',
    backgroundColor: '#FFFFFF',
    errorCorrectionLevel: 'M',
    margin: 4,
    style: 'square',
    quietZone: true
  };

  async generateQRCode(options: QRCodeOptions): Promise<QRCodeResult> {
    const startTime = performance.now();
    
    try {
      // Validate input
      if (!options.text || options.text.trim().length === 0) {
        throw new Error('Text content is required');
      }

      if (options.text.length > 2953) {
        throw new Error('Text content is too long (max 2953 characters)');
      }

      // Merge with default options
      const mergedOptions: Required<QRCodeOptions> = { ...this.defaultOptions, ...options } as Required<QRCodeOptions>;
      
      // Generate QR code data
      const qrData = this.generateQRData(mergedOptions.text, mergedOptions.errorCorrectionLevel);
      
      // Create QR code matrix
      const matrix = this.createQRMatrix(qrData, mergedOptions.errorCorrectionLevel);
      
      // Apply styling
      const styledMatrix = this.applyStyling(matrix, mergedOptions.style);
      
      // Generate output formats
      const result: QRCodeResult = {
        success: true,
        qrCodeDataUrl: this.generateDataURL(styledMatrix, mergedOptions),
        qrCodeSvg: this.generateSVG(styledMatrix, mergedOptions),
        qrCodeText: mergedOptions.text,
        metadata: {
          size: mergedOptions.size,
          errorCorrectionLevel: mergedOptions.errorCorrectionLevel,
          dataCapacity: this.calculateDataCapacity(mergedOptions.errorCorrectionLevel),
          estimatedSize: Math.ceil(mergedOptions.size / 8) * Math.ceil(mergedOptions.size / 8),
          generationTime: performance.now() - startTime
        }
      };

      // Update statistics
      this.updateStats(mergedOptions, result.metadata.generationTime);

      return result;

    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        metadata: {
          size: options.size || this.defaultOptions.size,
          errorCorrectionLevel: options.errorCorrectionLevel || this.defaultOptions.errorCorrectionLevel,
          dataCapacity: 0,
          estimatedSize: 0,
          generationTime: performance.now() - startTime
        }
      };
    }
  }

  async generateBulkQRCodes(texts: string[], options?: Omit<QRCodeOptions, 'text'>): Promise<QRCodeResult[]> {
    const results: QRCodeResult[] = [];
    
    for (const text of texts) {
      const result = await this.generateQRCode({ ...options, text });
      results.push(result);
      
      // Add small delay to prevent overwhelming
      await new Promise(resolve => setTimeout(resolve, 10));
    }
    
    return results;
  }

  async validateQRCode(text: string): Promise<QRCodeValidationResult> {
    const result: QRCodeValidationResult = {
      isValid: false,
      type: 'unknown',
      suggestions: [],
      security: {
        isSafe: true,
        warnings: []
      }
    };

    try {
      // Basic validation
      if (!text || text.trim().length === 0) {
        result.suggestions.push('QR code content cannot be empty');
        return result;
      }

      // Detect type
      result.type = this.detectContentType(text);
      result.isValid = true;

      // Type-specific validation and suggestions
      switch (result.type) {
        case 'url':
          this.validateURL(text, result);
          break;
        case 'email':
          this.validateEmail(text, result);
          break;
        case 'phone':
          this.validatePhone(text, result);
          break;
        case 'wifi':
          this.validateWiFi(text, result);
          break;
        case 'vcard':
          this.validateVCard(text, result);
          break;
      }

      // Security checks
      this.performSecurityChecks(text, result);

    } catch (error) {
      result.suggestions.push(`Validation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    return result;
  }

  async getAnalytics(): Promise<QRCodeAnalytics> {
    const averageGenerationTime = this.stats.generationTimes.length > 0
      ? this.stats.generationTimes.reduce((a, b) => a + b, 0) / this.stats.generationTimes.length
      : 0;

    const popularTexts = Array.from(this.stats.texts.entries())
      .map(([text, count]) => ({ text, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    const sizeDistribution = Array.from(this.stats.sizes.entries())
      .map(([size, count]) => ({ size, count }))
      .sort((a, b) => a.size - b.size);

    const errorCorrectionUsage = Array.from(this.stats.errorCorrectionLevels.entries())
      .map(([level, count]) => ({ level, count }))
      .sort((a, b) => b.count - a.count);

    return {
      totalGenerated: this.stats.totalGenerated,
      totalScanned: this.stats.totalScanned,
      popularTexts,
      sizeDistribution,
      errorCorrectionUsage,
      averageGenerationTime: Math.round(averageGenerationTime * 100) / 100
    };
  }

  async clearStats(): Promise<void> {
    this.stats.totalGenerated = 0;
    this.stats.totalScanned = 0;
    this.stats.generationTimes = [];
    this.stats.texts.clear();
    this.stats.sizes.clear();
    this.stats.errorCorrectionLevels.clear();
  }

  // Private helper methods
  private generateQRData(text: string, errorCorrectionLevel: string): string {
    // This is a simplified QR code generation
    // In a real implementation, you would use a proper QR code library
    const data = Buffer.from(text, 'utf8').toString('base64');
    return data;
  }

  private createQRMatrix(data: string, errorCorrectionLevel: string): boolean[][] {
    // Simplified QR matrix creation
    // In reality, this would involve complex Reed-Solomon error correction
    const size = Math.ceil(Math.sqrt(data.length * 8));
    const matrix: boolean[][] = [];
    
    for (let i = 0; i < size; i++) {
      matrix[i] = [];
      for (let j = 0; j < size; j++) {
        const index = i * size + j;
        matrix[i][j] = index < data.length * 8 && (data.charCodeAt(Math.floor(index / 8)) & (1 << (index % 8))) !== 0;
      }
    }
    
    return matrix;
  }

  private applyStyling(matrix: boolean[][], style: string): boolean[][] {
    // Apply different styling patterns
    switch (style) {
      case 'rounded':
        return this.applyRoundedStyle(matrix);
      case 'dots':
        return this.applyDotsStyle(matrix);
      case 'cross':
        return this.applyCrossStyle(matrix);
      default:
        return matrix;
    }
  }

  private applyRoundedStyle(matrix: boolean[][]): boolean[][] {
    // Simplified rounded corners effect
    return matrix;
  }

  private applyDotsStyle(matrix: boolean[][]): boolean[][] {
    // Simplified dots effect
    return matrix;
  }

  private applyCrossStyle(matrix: boolean[][]): boolean[][] {
    // Simplified cross pattern effect
    return matrix;
  }

  private generateDataURL(matrix: boolean[][], options: Required<QRCodeOptions>): string {
    // Generate canvas-based data URL
    // This is a simplified version - in reality you'd use a proper canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return '';
    
    canvas.width = options.size;
    canvas.height = options.size;
    
    // Fill background
    ctx.fillStyle = options.backgroundColor;
    ctx.fillRect(0, 0, options.size, options.size);
    
    // Draw QR code
    ctx.fillStyle = options.foregroundColor;
    const cellSize = options.size / matrix.length;
    
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]) {
          ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
      }
    }
    
    return canvas.toDataURL('image/png');
  }

  private generateSVG(matrix: boolean[][], options: Required<QRCodeOptions>): string {
    // Generate SVG representation
    const cellSize = options.size / matrix.length;
    let svg = `<svg width="${options.size}" height="${options.size}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<rect width="${options.size}" height="${options.size}" fill="${options.backgroundColor}"/>`;
    
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]) {
          svg += `<rect x="${j * cellSize}" y="${i * cellSize}" width="${cellSize}" height="${cellSize}" fill="${options.foregroundColor}"/>`;
        }
      }
    }
    
    svg += '</svg>';
    return svg;
  }

  private calculateDataCapacity(errorCorrectionLevel: string): number {
    // Simplified capacity calculation
    const capacities = { L: 2953, M: 2334, Q: 1666, H: 1276 };
    return capacities[errorCorrectionLevel as keyof typeof capacities] || 2334;
  }

  private updateStats(options: Required<QRCodeOptions>, generationTime: number): void {
    this.stats.totalGenerated++;
    this.stats.generationTimes.push(generationTime);
    
    // Update text frequency
    const textKey = options.text.length > 50 ? options.text.substring(0, 50) + '...' : options.text;
    this.stats.texts.set(textKey, (this.stats.texts.get(textKey) || 0) + 1);
    
    // Update size frequency
    this.stats.sizes.set(options.size, (this.stats.sizes.get(options.size) || 0) + 1);
    
    // Update error correction level frequency
    this.stats.errorCorrectionLevels.set(options.errorCorrectionLevel, 
      (this.stats.errorCorrectionLevels.get(options.errorCorrectionLevel) || 0) + 1);
  }

  private detectContentType(text: string): QRCodeValidationResult['type'] {
    if (text.startsWith('http://') || text.startsWith('https://')) return 'url';
    if (text.startsWith('mailto:')) return 'email';
    if (text.startsWith('tel:')) return 'phone';
    if (text.startsWith('WIFI:')) return 'wifi';
    if (text.startsWith('BEGIN:VCARD')) return 'vcard';
    return 'text';
  }

  private validateURL(text: string, result: QRCodeValidationResult): void {
    try {
      const url = new URL(text);
      if (url.protocol === 'http:') {
        result.security.warnings.push('HTTP URLs are not secure. Consider using HTTPS.');
        result.security.isSafe = false;
      }
      result.suggestions.push('URL appears to be valid');
    } catch {
      result.suggestions.push('Invalid URL format');
      result.isValid = false;
    }
  }

  private validateEmail(text: string, result: QRCodeValidationResult): void {
    const email = text.replace('mailto:', '');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
      result.suggestions.push('Email format is valid');
    } else {
      result.suggestions.push('Invalid email format');
      result.isValid = false;
    }
  }

  private validatePhone(text: string, result: QRCodeValidationResult): void {
    const phone = text.replace('tel:', '');
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    
    if (phoneRegex.test(phone)) {
      result.suggestions.push('Phone number format is valid');
    } else {
      result.suggestions.push('Invalid phone number format');
      result.isValid = false;
    }
  }

  private validateWiFi(text: string, result: QRCodeValidationResult): void {
    if (text.includes('T:WPA') || text.includes('T:WEP')) {
      result.security.warnings.push('WiFi password is included in QR code');
      result.security.isSafe = false;
    }
    result.suggestions.push('WiFi configuration format detected');
  }

  private validateVCard(text: string, result: QRCodeValidationResult): void {
    if (text.includes('TEL:') || text.includes('EMAIL:')) {
      result.suggestions.push('Contact information detected');
    }
    result.suggestions.push('vCard format appears valid');
  }

  private performSecurityChecks(text: string, result: QRCodeValidationResult): void {
    // Check for potentially malicious content
    const suspiciousPatterns = [
      /javascript:/i,
      /data:text\/html/i,
      /vbscript:/i,
      /on\w+\s*=/i
    ];
    
    suspiciousPatterns.forEach(pattern => {
      if (pattern.test(text)) {
        result.security.warnings.push('Potentially malicious content detected');
        result.security.isSafe = false;
      }
    });
    
    // Check for very long URLs (potential phishing)
    if (text.length > 2000) {
      result.security.warnings.push('Extremely long URL detected - potential phishing attempt');
      result.security.isSafe = false;
    }
  }

  // Utility methods for different QR code types
  async generateURLQRCode(url: string, options?: Omit<QRCodeOptions, 'text'>): Promise<QRCodeResult> {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    return this.generateQRCode({ ...options, text: url });
  }

  async generateEmailQRCode(email: string, subject?: string, body?: string, options?: Omit<QRCodeOptions, 'text'>): Promise<QRCodeResult> {
    let mailtoUrl = `mailto:${email}`;
    const params = new URLSearchParams();
    
    if (subject) params.append('subject', subject);
    if (body) params.append('body', body);
    
    if (params.toString()) {
      mailtoUrl += '?' + params.toString();
    }
    
    return this.generateQRCode({ ...options, text: mailtoUrl });
  }

  async generatePhoneQRCode(phone: string, options?: Omit<QRCodeOptions, 'text'>): Promise<QRCodeResult> {
    const telUrl = phone.startsWith('tel:') ? phone : `tel:${phone}`;
    return this.generateQRCode({ ...options, text: telUrl });
  }

  async generateWiFiQRCode(ssid: string, password: string, encryption: 'WPA' | 'WEP' | 'nopass', options?: Omit<QRCodeOptions, 'text'>): Promise<QRCodeResult> {
    const wifiString = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
    return this.generateQRCode({ ...options, text: wifiString });
  }

  async generateVCardQRCode(contact: {
    name: string;
    phone?: string;
    email?: string;
    company?: string;
    title?: string;
    address?: string;
  }, options?: Omit<QRCodeOptions, 'text'>): Promise<QRCodeResult> {
    let vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
    vcard += `FN:${contact.name}\n`;
    
    if (contact.phone) vcard += `TEL:${contact.phone}\n`;
    if (contact.email) vcard += `EMAIL:${contact.email}\n`;
    if (contact.company) vcard += `ORG:${contact.company}\n`;
    if (contact.title) vcard += `TITLE:${contact.title}\n`;
    if (contact.address) vcard += `ADR:;;${contact.address}\n`;
    
    vcard += 'END:VCARD';
    
    return this.generateQRCode({ ...options, text: vcard });
  }
}

export default new QRCodeService();
export interface QRCodeOptions {
  text: string;
  size?: number;
  foregroundColor?: string;
  backgroundColor?: string;
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  margin?: number;
  format?: 'svg' | 'png' | 'jpeg' | 'webp';
  logo?: {
    url: string;
    width: number;
    height: number;
  };
}

export interface QRCodeResult {
  dataUrl: string;
  options: QRCodeOptions;
  generatedAt: Date;
  size: {
    width: number;
    height: number;
  };
}

export interface QRCodeTemplate {
  id: string;
  name: string;
  description: string;
  options: Partial<QRCodeOptions>;
  category: 'business' | 'personal' | 'social' | 'custom';
}

class QRCodeService {
  private readonly DEFAULT_OPTIONS: Partial<QRCodeOptions> = {
    size: 256,
    foregroundColor: '#000000',
    backgroundColor: '#FFFFFF',
    errorCorrectionLevel: 'M',
    margin: 4,
    format: 'svg'
  };

  private readonly ERROR_CORRECTION_LEVELS = {
    L: { level: 'L', name: 'Low', capacity: 0.07 },
    M: { level: 'M', name: 'Medium', capacity: 0.15 },
    Q: { level: 'Q', name: 'Quartile', capacity: 0.25 },
    H: { level: 'H', name: 'High', capacity: 0.30 }
  };

  async generateQRCode(options: QRCodeOptions): Promise<QRCodeResult> {
    const finalOptions = { ...this.DEFAULT_OPTIONS, ...options };
    
    // Validate options
    this.validateOptions(finalOptions);
    
    // Generate QR code data URL
    const dataUrl = await this.generateQRCodeDataUrl(finalOptions);
    
    return {
      dataUrl,
      options: finalOptions,
      generatedAt: new Date(),
      size: {
        width: finalOptions.size!,
        height: finalOptions.size!
      }
    };
  }

  async generateBusinessCardQR(data: {
    name: string;
    company: string;
    title: string;
    email: string;
    phone: string;
    website?: string;
    address?: string;
  }): Promise<QRCodeResult> {
    const vcard = this.generateVCard(data);
    
    return this.generateQRCode({
      text: vcard,
      size: 300,
      errorCorrectionLevel: 'H',
      format: 'svg'
    });
  }

  async generateWiFiQR(data: {
    ssid: string;
    password: string;
    encryption: 'WPA' | 'WEP' | 'nopass';
    hidden?: boolean;
  }): Promise<QRCodeResult> {
    const wifiString = this.generateWiFiString(data);
    
    return this.generateQRCode({
      text: wifiString,
      size: 256,
      errorCorrectionLevel: 'M',
      format: 'svg'
    });
  }

  async generateEmailQR(data: {
    to: string;
    subject?: string;
    body?: string;
  }): Promise<QRCodeResult> {
    const mailto = this.generateMailtoString(data);
    
    return this.generateQRCode({
      text: mailto,
      size: 256,
      errorCorrectionLevel: 'M',
      format: 'svg'
    });
  }

  async generateSMSQR(data: {
    phone: string;
    message?: string;
  }): Promise<QRCodeResult> {
    const smsString = this.generateSMSString(data);
    
    return this.generateQRCode({
      text: smsString,
      size: 256,
      errorCorrectionLevel: 'M',
      format: 'svg'
    });
  }

  async generateGeoLocationQR(data: {
    latitude: number;
    longitude: number;
    altitude?: number;
    name?: string;
  }): Promise<QRCodeResult> {
    const geoString = this.generateGeoString(data);
    
    return this.generateQRCode({
      text: geoString,
      size: 256,
      errorCorrectionLevel: 'M',
      format: 'svg'
    });
  }

  getTemplates(): QRCodeTemplate[] {
    return [
      {
        id: 'business-card',
        name: 'Business Card',
        description: 'Professional contact information in QR format',
        options: { size: 300, errorCorrectionLevel: 'H' },
        category: 'business'
      },
      {
        id: 'wifi-network',
        name: 'WiFi Network',
        description: 'Share WiFi credentials easily',
        options: { size: 256, errorCorrectionLevel: 'M' },
        category: 'business'
      },
      {
        id: 'email-contact',
        name: 'Email Contact',
        description: 'Quick email composition with pre-filled details',
        options: { size: 256, errorCorrectionLevel: 'M' },
        category: 'business'
      },
      {
        id: 'social-media',
        name: 'Social Media',
        description: 'Link to your social media profiles',
        options: { size: 256, errorCorrectionLevel: 'M' },
        category: 'social'
      },
      {
        id: 'website-link',
        name: 'Website Link',
        description: 'Direct link to your website',
        options: { size: 256, errorCorrectionLevel: 'M' },
        category: 'business'
      },
      {
        id: 'phone-number',
        name: 'Phone Number',
        description: 'Quick dial with pre-filled number',
        options: { size: 256, errorCorrectionLevel: 'M' },
        category: 'personal'
      }
    ];
  }

  getErrorCorrectionInfo(): Record<string, any> {
    return this.ERROR_CORRECTION_LEVELS;
  }

  private validateOptions(options: QRCodeOptions): void {
    if (!options.text || options.text.trim().length === 0) {
      throw new Error('Text content is required');
    }
    
    if (options.size && (options.size < 64 || options.size > 1024)) {
      throw new Error('Size must be between 64 and 1024 pixels');
    }
    
    if (options.margin && (options.margin < 0 || options.margin > 10)) {
      throw new Error('Margin must be between 0 and 10');
    }
  }

  private async generateQRCodeDataUrl(options: QRCodeOptions): Promise<string> {
    // In a real implementation, this would use a QR code library
    // For now, we'll generate a placeholder SVG
    
    const size = options.size!;
    const margin = options.margin!;
    const contentSize = size - (margin * 2);
    
    const svg = `
      <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${size}" height="${size}" fill="${options.backgroundColor}"/>
        <rect x="${margin}" y="${margin}" width="${contentSize}" height="${contentSize}" fill="${options.foregroundColor}"/>
        <text x="${size/2}" y="${size/2 + 5}" text-anchor="middle" fill="${options.backgroundColor}" font-family="Arial" font-size="12">QR Code</text>
        <text x="${size/2}" y="${size/2 + 25}" text-anchor="middle" fill="${options.backgroundColor}" font-family="Arial" font-size="10">${options.text.substring(0, 20)}${options.text.length > 20 ? '...' : ''}</text>
      </svg>
    `;
    
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  }

  private generateVCard(data: any): string {
    let vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
    vcard += `FN:${data.name}\n`;
    vcard += `ORG:${data.company}\n`;
    vcard += `TITLE:${data.title}\n`;
    vcard += `EMAIL:${data.email}\n`;
    vcard += `TEL:${data.phone}\n`;
    
    if (data.website) vcard += `URL:${data.website}\n`;
    if (data.address) vcard += `ADR:;;${data.address};;\n`;
    
    vcard += 'END:VCARD';
    return vcard;
  }

  private generateWiFiString(data: any): string {
    let wifiString = 'WIFI:';
    wifiString += `S:${data.ssid};`;
    wifiString += `T:${data.encryption};`;
    
    if (data.encryption !== 'nopass') {
      wifiString += `P:${data.password};`;
    }
    
    if (data.hidden) {
      wifiString += 'H:true;';
    }
    
    wifiString += ';';
    return wifiString;
  }

  private generateMailtoString(data: any): string {
    let mailto = `mailto:${data.to}`;
    const params: string[] = [];
    
    if (data.subject) params.push(`subject=${encodeURIComponent(data.subject)}`);
    if (data.body) params.push(`body=${encodeURIComponent(data.body)}`);
    
    if (params.length > 0) {
      mailto += `?${params.join('&')}`;
    }
    
    return mailto;
  }

  private generateSMSString(data: any): string {
    let smsString = `sms:${data.phone}`;
    
    if (data.message) {
      smsString += `?body=${encodeURIComponent(data.message)}`;
    }
    
    return smsString;
  }

  private generateGeoString(data: any): string {
    let geoString = `geo:${data.latitude},${data.longitude}`;
    
    if (data.altitude) {
      geoString += `,${data.altitude}`;
    }
    
    if (data.name) {
      geoString += `?q=${encodeURIComponent(data.name)}`;
    }
    
    return geoString;
  }

  // Utility methods
  estimateQRCodeCapacity(text: string, errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H'): {
    canFit: boolean;
    recommendedLevel: string;
    maxCapacity: number;
  } {
    const textLength = text.length;
    const level = this.ERROR_CORRECTION_LEVELS[errorCorrectionLevel];
    const maxCapacity = Math.floor(level.capacity * 177 * 177); // Approximate capacity for 177x177 QR code
    
    return {
      canFit: textLength <= maxCapacity,
      recommendedLevel: textLength > maxCapacity ? 'H' : errorCorrectionLevel,
      maxCapacity
    };
  }

  getQRCodeHistory(): QRCodeResult[] {
    // In a real app, this would retrieve from storage
    return [];
  }

  saveQRCode(qrCode: QRCodeResult): void {
    // In a real app, this would save to storage
    console.log('QR Code saved:', qrCode.options.text);
  }
}

export const qrCodeService = new QRCodeService();
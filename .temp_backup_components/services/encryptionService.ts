export interface EncryptionResult {
  encryptedData: string;
  iv: string;
  algorithm: string;
  keySize: number;
  timestamp: Date;
  metadata?: EncryptionMetadata;
}

export interface DecryptionResult {
  decryptedData: string;
  algorithm: string;
  keySize: number;
  timestamp: Date;
  metadata?: EncryptionMetadata;
}

export interface EncryptionMetadata {
  originalSize: number;
  compressedSize?: number;
  checksum: string;
  version: string;
}

export interface KeyPair {
  publicKey: string;
  privateKey: string;
  algorithm: string;
  keySize: number;
  createdAt: Date;
  expiresAt?: Date;
}

export interface EncryptionOptions {
  algorithm?: 'AES-256-GCM' | 'AES-256-CBC' | 'ChaCha20-Poly1305';
  keySize?: 128 | 192 | 256;
  compress?: boolean;
  addChecksum?: boolean;
  encoding?: 'base64' | 'hex' | 'utf8';
}

export interface KeyManagementOptions {
  keyRotation?: boolean;
  keyExpiration?: number; // days
  backupKeys?: boolean;
  masterKey?: string;
}

class EncryptionService {
  private readonly DEFAULT_ALGORITHM = 'AES-256-GCM';
  private readonly DEFAULT_KEY_SIZE = 256;
  private readonly DEFAULT_ENCODING = 'base64';
  
  private masterKey: string | null = null;
  private keyStore: Map<string, { key: string; expiresAt?: Date }> = new Map();

  constructor() {
    // In production, this would be loaded from secure environment variables
    this.masterKey = process.env.MASTER_ENCRYPTION_KEY || null;
  }

  /**
   * Encrypt data with symmetric encryption
   */
  async encrypt(
    data: string | Buffer,
    key: string,
    options: EncryptionOptions = {}
  ): Promise<EncryptionResult> {
    const algorithm = options.algorithm || this.DEFAULT_ALGORITHM;
    const keySize = options.keySize || this.DEFAULT_KEY_SIZE;
    const encoding = options.encoding || this.DEFAULT_ENCODING;

    try {
      // Convert data to buffer if it's a string
      const dataBuffer = Buffer.isBuffer(data) ? data : Buffer.from(data, 'utf8');
      
      // Generate initialization vector
      const iv = this.generateIV(algorithm);
      
      // Derive encryption key
      const derivedKey = await this.deriveKey(key, keySize);
      
      // Encrypt the data
      const encryptedBuffer = await this.performEncryption(dataBuffer, derivedKey, iv, algorithm);
      
      // Compress if requested
      let finalData = encryptedBuffer;
      let compressedSize: number | undefined;
      
      if (options.compress) {
        finalData = this.compress(encryptedBuffer);
        compressedSize = finalData.length;
      }
      
      // Add checksum if requested
      let checksum = '';
      if (options.addChecksum) {
        checksum = this.generateChecksum(finalData);
      }
      
      // Encode the result
      const encryptedData = this.encode(finalData, encoding);
      
      return {
        encryptedData,
        iv: iv.toString(encoding),
        algorithm,
        keySize,
        timestamp: new Date(),
        metadata: {
          originalSize: dataBuffer.length,
          compressedSize,
          checksum,
          version: '1.0.0'
        }
      };
    } catch (error) {
      throw new Error(`Encryption failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Decrypt data
   */
  async decrypt(
    encryptedData: string,
    key: string,
    iv: string,
    options: EncryptionOptions = {},
    metadata?: EncryptionMetadata
  ): Promise<DecryptionResult> {
    const algorithm = options.algorithm || this.DEFAULT_ALGORITHM;
    const keySize = options.keySize || this.DEFAULT_KEY_SIZE;
    const encoding = options.encoding || this.DEFAULT_ENCODING;

    try {
      // Decode the encrypted data
      const encryptedBuffer = this.decode(encryptedData, encoding);
      const ivBuffer = this.decode(iv, encoding);
      
      // Derive decryption key
      const derivedKey = await this.deriveKey(key, keySize);
      
      // Decompress if needed
      let decompressedData = encryptedBuffer;
      if (options.compress) {
        decompressedData = this.decompress(encryptedBuffer);
      }
      
      // Decrypt the data
      const decryptedBuffer = await this.performDecryption(decompressedData, derivedKey, ivBuffer, algorithm);
      
      // Verify checksum if present
      if (options.addChecksum && metadata?.checksum) {
        const calculatedChecksum = this.generateChecksum(decompressedData);
        if (calculatedChecksum !== metadata.checksum) {
          throw new Error('Checksum verification failed - data may be corrupted');
        }
      }
      
      // Convert to string
      const decryptedData = decryptedBuffer.toString('utf8');
      
      return {
        decryptedData,
        algorithm,
        keySize,
        timestamp: new Date(),
        metadata: {
          originalSize: decryptedBuffer.length,
          checksum: metadata?.checksum || '',
          version: '1.0.0'
        }
      };
    } catch (error) {
      throw new Error(`Decryption failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Generate a new encryption key
   */
  generateKey(keySize: number = this.DEFAULT_KEY_SIZE): string {
    const bytes = keySize / 8;
    const key = this.generateRandomBytes(bytes);
    return key.toString('base64');
  }

  /**
   * Generate a key pair for asymmetric encryption
   */
  async generateKeyPair(algorithm: 'RSA' | 'ECC' = 'RSA', keySize: number = 2048): Promise<KeyPair> {
    // In production, this would use proper cryptographic libraries
    // For demonstration, we'll generate placeholder keys
    const publicKey = this.generateRandomBytes(32).toString('base64');
    const privateKey = this.generateRandomBytes(64).toString('base64');
    
    return {
      publicKey,
      privateKey,
      algorithm,
      keySize,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year
    };
  }

  /**
   * Hash data with salt
   */
  async hash(data: string, salt?: string): Promise<{ hash: string; salt: string }> {
    const useSalt = salt || this.generateRandomBytes(16).toString('base64');
    
    // In production, use proper hashing algorithms like bcrypt, Argon2, or PBKDF2
    // This is a simplified demonstration
    const combined = data + useSalt;
    const hash = this.simpleHash(combined);
    
    return { hash, salt: useSalt };
  }

  /**
   * Verify a hash
   */
  async verifyHash(data: string, hash: string, salt: string): Promise<boolean> {
    const { hash: calculatedHash } = await this.hash(data, salt);
    return calculatedHash === hash;
  }

  /**
   * Store a key securely
   */
  storeKey(keyId: string, key: string, expiresAt?: Date): void {
    this.keyStore.set(keyId, { key, expiresAt });
  }

  /**
   * Retrieve a stored key
   */
  getKey(keyId: string): string | null {
    const keyData = this.keyStore.get(keyId);
    if (!keyData) return null;
    
    if (keyData.expiresAt && keyData.expiresAt < new Date()) {
      this.keyStore.delete(keyId);
      return null;
    }
    
    return keyData.key;
  }

  /**
   * Rotate encryption keys
   */
  async rotateKeys(oldKey: string, newKey: string): Promise<boolean> {
    try {
      // Store the new key
      const keyId = this.generateKeyId();
      this.storeKey(keyId, newKey);
      
      // In production, you would re-encrypt all data with the new key
      // This is a simplified version
      return true;
    } catch (error) {
      console.error('Key rotation failed:', error);
      return false;
    }
  }

  /**
   * Generate initialization vector
   */
  private generateIV(algorithm: string): Buffer {
    let ivSize = 16; // Default for AES
    
    if (algorithm.includes('ChaCha20')) {
      ivSize = 12;
    } else if (algorithm.includes('AES')) {
      ivSize = 16;
    }
    
    return this.generateRandomBytes(ivSize);
  }

  /**
   * Derive encryption key from password
   */
  private async deriveKey(password: string, keySize: number): Promise<Buffer> {
    // In production, use proper key derivation functions like PBKDF2 or Argon2
    // This is a simplified version for demonstration
    const salt = 'fixed-salt-for-demo'; // In production, use random salt
    const combined = password + salt;
    const hash = this.simpleHash(combined);
    
    // Ensure the key is the right size
    const keyBytes = keySize / 8;
    const keyBuffer = Buffer.alloc(keyBytes);
    const hashBuffer = Buffer.from(hash, 'hex');
    
    for (let i = 0; i < keyBytes; i++) {
      keyBuffer[i] = hashBuffer[i % hashBuffer.length];
    }
    
    return keyBuffer;
  }

  /**
   * Perform the actual encryption
   */
  private async performEncryption(
    data: Buffer,
    key: Buffer,
    iv: Buffer,
    algorithm: string
  ): Promise<Buffer> {
    // In production, use proper cryptographic libraries
    // This is a simplified XOR-based encryption for demonstration
    const encrypted = Buffer.alloc(data.length);
    
    for (let i = 0; i < data.length; i++) {
      encrypted[i] = data[i] ^ key[i % key.length] ^ iv[i % iv.length];
    }
    
    return encrypted;
  }

  /**
   * Perform the actual decryption
   */
  private async performDecryption(
    encryptedData: Buffer,
    key: Buffer,
    iv: Buffer,
    algorithm: string
  ): Promise<Buffer> {
    // XOR encryption is symmetric, so decryption is the same as encryption
    return this.performEncryption(encryptedData, key, iv, algorithm);
  }

  /**
   * Generate random bytes
   */
  private generateRandomBytes(size: number): Buffer {
    // In production, use crypto.randomBytes() or similar
    const buffer = Buffer.alloc(size);
    for (let i = 0; i < size; i++) {
      buffer[i] = Math.floor(Math.random() * 256);
    }
    return buffer;
  }

  /**
   * Simple hash function (for demonstration only)
   */
  private simpleHash(data: string): string {
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      const char = data.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
  }

  /**
   * Generate checksum
   */
  private generateChecksum(data: Buffer): string {
    let checksum = 0;
    for (let i = 0; i < data.length; i++) {
      checksum = (checksum + data[i]) & 0xFFFFFFFF;
    }
    return checksum.toString(16).padStart(8, '0');
  }

  /**
   * Compress data
   */
  private compress(data: Buffer): Buffer {
    // Simple compression - in production, use proper compression libraries
    // This is just a placeholder
    return data;
  }

  /**
   * Decompress data
   */
  private decompress(data: Buffer): Buffer {
    // Simple decompression - in production, use proper compression libraries
    // This is just a placeholder
    return data;
  }

  /**
   * Encode buffer to string
   */
  private encode(buffer: Buffer, encoding: string): string {
    switch (encoding) {
      case 'base64':
        return buffer.toString('base64');
      case 'hex':
        return buffer.toString('hex');
      case 'utf8':
        return buffer.toString('utf8');
      default:
        return buffer.toString('base64');
    }
  }

  /**
   * Decode string to buffer
   */
  private decode(data: string, encoding: string): Buffer {
    switch (encoding) {
      case 'base64':
        return Buffer.from(data, 'base64');
      case 'hex':
        return Buffer.from(data, 'hex');
      case 'utf8':
        return Buffer.from(data, 'utf8');
      default:
        return Buffer.from(data, 'base64');
    }
  }

  /**
   * Generate unique key ID
   */
  private generateKeyId(): string {
    return `key_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get encryption strength assessment
   */
  assessEncryptionStrength(
    algorithm: string,
    keySize: number,
    options: EncryptionOptions
  ): { score: number; level: 'weak' | 'medium' | 'strong' | 'very-strong'; recommendations: string[] } {
    let score = 0;
    const recommendations: string[] = [];

    // Algorithm scoring
    switch (algorithm) {
      case 'AES-256-GCM':
        score += 40;
        break;
      case 'ChaCha20-Poly1305':
        score += 40;
        break;
      case 'AES-256-CBC':
        score += 35;
        break;
      case 'AES-192-GCM':
        score += 30;
        break;
      case 'AES-128-GCM':
        score += 25;
        break;
      default:
        score += 20;
        recommendations.push('Consider using AES-256-GCM or ChaCha20-Poly1305 for maximum security');
    }

    // Key size scoring
    if (keySize >= 256) {
      score += 30;
    } else if (keySize >= 192) {
      score += 25;
    } else if (keySize >= 128) {
      score += 20;
    } else {
      score += 10;
      recommendations.push('Use at least 256-bit keys for sensitive data');
    }

    // Additional security features
    if (options.addChecksum) score += 15;
    if (options.compress) score += 5;

    // Determine level
    let level: 'weak' | 'medium' | 'strong' | 'very-strong';
    if (score >= 80) level = 'very-strong';
    else if (score >= 60) level = 'strong';
    else if (score >= 40) level = 'medium';
    else level = 'weak';

    // Add general recommendations
    if (level === 'weak' || level === 'medium') {
      recommendations.push('Consider upgrading to stronger encryption algorithms and key sizes');
    }

    if (!options.addChecksum) {
      recommendations.push('Enable checksum verification to detect data corruption');
    }

    return { score, level, recommendations };
  }

  /**
   * Get service statistics
   */
  getStats(): { totalKeys: number; activeKeys: number; algorithms: string[] } {
    const algorithms = new Set<string>();
    let activeKeys = 0;
    
    for (const keyData of this.keyStore.values()) {
      if (!keyData.expiresAt || keyData.expiresAt > new Date()) {
        activeKeys++;
      }
    }
    
    return {
      totalKeys: this.keyStore.size,
      activeKeys,
      algorithms: Array.from(algorithms)
    };
  }

  /**
   * Clean up expired keys
   */
  cleanupExpiredKeys(): number {
    let cleanedCount = 0;
    const now = new Date();
    
    for (const [keyId, keyData] of this.keyStore.entries()) {
      if (keyData.expiresAt && keyData.expiresAt < now) {
        this.keyStore.delete(keyId);
        cleanedCount++;
      }
    }
    
    return cleanedCount;
  }
}

// Export singleton instance
export const encryptionService = new EncryptionService();

// Export the class for custom instances
export { EncryptionService };
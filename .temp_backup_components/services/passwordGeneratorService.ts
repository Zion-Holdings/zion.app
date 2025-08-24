export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeSimilar: boolean;
  excludeAmbiguous: boolean;
  customChars?: string;
}

export interface PasswordStrength {
  score: number; // 0-100
  label: 'Very Weak' | 'Weak' | 'Fair' | 'Good' | 'Strong' | 'Very Strong';
  color: string;
  feedback: string[];
  entropy: number;
  crackTime: string;
}

export interface GeneratedPassword {
  password: string;
  strength: PasswordStrength;
  options: PasswordOptions;
  generatedAt: Date;
}

class PasswordGeneratorService {
  private readonly UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private readonly LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  private readonly NUMBERS = '0123456789';
  private readonly SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  private readonly SIMILAR_CHARS = 'il1Lo0O';
  private readonly AMBIGUOUS_CHARS = '{}[]()/\\\'"`~,;:.<>';

  generatePassword(options: PasswordOptions): GeneratedPassword {
    let charset = '';
    
    if (options.includeUppercase) charset += this.UPPERCASE;
    if (options.includeLowercase) charset += this.LOWERCASE;
    if (options.includeNumbers) charset += this.NUMBERS;
    if (options.includeSymbols) charset += this.SYMBOLS;
    if (options.customChars) charset += options.customChars;

    if (charset.length === 0) {
      throw new Error('At least one character type must be selected');
    }

    if (options.excludeSimilar) {
      charset = this.removeSimilarChars(charset);
    }

    if (options.excludeAmbiguous) {
      charset = this.removeAmbiguousChars(charset);
    }

    let password = '';
    for (let i = 0; i < options.length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    const strength = this.analyzePasswordStrength(password, options);
    
    return {
      password,
      strength,
      options,
      generatedAt: new Date()
    };
  }

  generateMemorablePassword(wordCount: number = 4, separator: string = '-', includeNumbers: boolean = true): GeneratedPassword {
    const words = this.getRandomWords(wordCount);
    let password = words.join(separator);
    
    if (includeNumbers) {
      const randomNumber = Math.floor(Math.random() * 1000);
      password += separator + randomNumber;
    }

    const options: PasswordOptions = {
      length: password.length,
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: includeNumbers,
      includeSymbols: false,
      excludeSimilar: false,
      excludeAmbiguous: false
    };

    const strength = this.analyzePasswordStrength(password, options);
    
    return {
      password,
      strength,
      options,
      generatedAt: new Date()
    };
  }

  generatePin(length: number = 4): GeneratedPassword {
    const pin = Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
    
    const options: PasswordOptions = {
      length,
      includeUppercase: false,
      includeLowercase: false,
      includeNumbers: true,
      includeSymbols: false,
      excludeSimilar: false,
      excludeAmbiguous: false
    };

    const strength = this.analyzePasswordStrength(pin, options);
    
    return {
      password: pin,
      strength,
      options,
      generatedAt: new Date()
    };
  }

  generatePassphrase(wordCount: number = 6, separator: string = ' '): GeneratedPassword {
    const words = this.getRandomWords(wordCount);
    const passphrase = words.join(separator);
    
    const options: PasswordOptions = {
      length: passphrase.length,
      includeUppercase: false,
      includeLowercase: true,
      includeNumbers: false,
      includeSymbols: false,
      excludeSimilar: false,
      excludeAmbiguous: false
    };

    const strength = this.analyzePasswordStrength(passphrase, options);
    
    return {
      password: passphrase,
      strength,
      options,
      generatedAt: new Date()
    };
  }

  private analyzePasswordStrength(password: string, options: PasswordOptions): PasswordStrength {
    let score = 0;
    const feedback: string[] = [];

    // Length bonus
    if (password.length >= 12) score += 25;
    else if (password.length >= 8) score += 15;
    else if (password.length >= 6) score += 10;
    else feedback.push('Password is too short');

    // Character variety bonus
    if (options.includeUppercase && /[A-Z]/.test(password)) score += 10;
    if (options.includeLowercase && /[a-z]/.test(password)) score += 10;
    if (options.includeNumbers && /\d/.test(password)) score += 10;
    if (options.includeSymbols && /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) score += 10;

    // Complexity bonus
    if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
      score += 15;
    }

    // Entropy calculation
    const charsetSize = this.calculateCharsetSize(options);
    const entropy = Math.log2(Math.pow(charsetSize, password.length));

    // Crack time estimation
    const crackTime = this.estimateCrackTime(entropy);

    // Determine label and color
    let label: PasswordStrength['label'];
    let color: string;

    if (score >= 90) {
      label = 'Very Strong';
      color = '#10B981';
    } else if (score >= 80) {
      label = 'Strong';
      color = '#059669';
    } else if (score >= 70) {
      label = 'Good';
      color = '#10B981';
    } else if (score >= 60) {
      label = 'Fair';
      color = '#F59E0B';
    } else if (score >= 40) {
      label = 'Weak';
      color = '#EF4444';
    } else {
      label = 'Very Weak';
      color = '#DC2626';
    }

    // Additional feedback
    if (password.length < 8) feedback.push('Consider using at least 8 characters');
    if (!/[A-Z]/.test(password)) feedback.push('Add uppercase letters for strength');
    if (!/[a-z]/.test(password)) feedback.push('Add lowercase letters for strength');
    if (!/\d/.test(password)) feedback.push('Add numbers for strength');
    if (!/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) feedback.push('Add symbols for strength');

    return {
      score: Math.min(score, 100),
      label,
      color,
      feedback,
      entropy,
      crackTime
    };
  }

  private calculateCharsetSize(options: PasswordOptions): number {
    let size = 0;
    if (options.includeUppercase) size += 26;
    if (options.includeLowercase) size += 26;
    if (options.includeNumbers) size += 10;
    if (options.includeSymbols) size += 32;
    if (options.customChars) size += options.customChars.length;
    return size;
  }

  private estimateCrackTime(entropy: number): string {
    const attemptsPerSecond = 1000000000; // 1 billion attempts per second
    const totalAttempts = Math.pow(2, entropy);
    const seconds = totalAttempts / attemptsPerSecond;

    if (seconds < 1) return 'Instantly';
    if (seconds < 60) return `${Math.round(seconds)} seconds`;
    if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
    if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
    if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
    return `${Math.round(seconds / 31536000)} years`;
  }

  private removeSimilarChars(charset: string): string {
    return charset.split('').filter(char => !this.SIMILAR_CHARS.includes(char)).join('');
  }

  private removeAmbiguousChars(charset: string): string {
    return charset.split('').filter(char => !this.AMBIGUOUS_CHARS.includes(char)).join('');
  }

  private getRandomWords(count: number): string[] {
    const wordList = [
      'apple', 'banana', 'cherry', 'dragon', 'eagle', 'forest', 'garden', 'harbor',
      'island', 'jungle', 'knight', 'lemon', 'mountain', 'ocean', 'palm', 'queen',
      'river', 'sunset', 'tiger', 'umbrella', 'village', 'waterfall', 'xylophone', 'yellow'
    ];
    
    const selected: string[] = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      selected.push(wordList[randomIndex]);
    }
    
    return selected;
  }

  // Utility methods
  validatePassword(password: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (password.length < 8) errors.push('Password must be at least 8 characters long');
    if (!/[A-Z]/.test(password)) errors.push('Password must contain at least one uppercase letter');
    if (!/[a-z]/.test(password)) errors.push('Password must contain at least one lowercase letter');
    if (!/\d/.test(password)) errors.push('Password must contain at least one number');
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  getPasswordHistory(): GeneratedPassword[] {
    // In a real app, this would retrieve from storage
    return [];
  }

  savePassword(password: GeneratedPassword): void {
    // In a real app, this would save to secure storage
    console.log('Password saved:', password.password);
  }
}

export const passwordGeneratorService = new PasswordGeneratorService();
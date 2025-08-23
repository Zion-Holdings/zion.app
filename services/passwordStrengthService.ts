export interface PasswordStrengthResult {
  score: number;
  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong';
  feedback: string[];
  suggestions: string[];
  details: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
    noCommonPatterns: boolean;
    noPersonalInfo: boolean;
    entropy: number;
  };
  estimatedCrackTime: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
}

export interface PasswordPolicy {
  minLength: number;
  requireUppercase: boolean;
  requireLowercase: boolean;
  requireNumbers: boolean;
  requireSymbols: boolean;
  maxConsecutiveChars: number;
  preventCommonPasswords: boolean;
  preventPersonalInfo: boolean;
}

export interface StrengthStats {
  totalPasswords: number;
  averageScore: number;
  strengthDistribution: {
    'very-weak': number;
    'weak': number;
    'medium': number;
    'strong': number;
    'very-strong': number;
  };
  commonIssues: { issue: string; count: number }[];
  topSuggestions: { suggestion: string; count: number }[];
}

class PasswordStrengthService {
  private readonly commonPasswords = new Set([
    'password', '123456', '123456789', 'qwerty', 'abc123', 'password123',
    'admin', 'letmein', 'welcome', 'monkey', 'dragon', 'master', 'hello',
    'freedom', 'whatever', 'qazwsx', 'trustno1', 'jordan', 'harley',
    'rangers', 'iwantu', 'jennifer', 'hunter', 'buster', 'soccer',
    'baseball', 'teens', 'silver', 'sexy', 'magic', 'bailey', 'blowme',
    'shadow', 'abg123', '654321', 'jordan23', 'mike', 'superman', 'hello123'
  ]);

  private readonly personalInfoPatterns = [
    /(?:19|20)\d{2}/, // Years
    /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/, // Phone numbers
    /\b\d{5}(?:-\d{4})?\b/, // ZIP codes
    /\b[A-Z]{2}\d{2}[A-Z0-9]{10,30}\b/, // IBAN-like patterns
    /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/ // Credit card patterns
  ];

  private readonly stats = {
    totalPasswords: 0,
    scores: [] as number[],
    issues: new Map<string, number>(),
    suggestions: new Map<string, number>()
  };

  private readonly defaultPolicy: PasswordPolicy = {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSymbols: true,
    maxConsecutiveChars: 3,
    preventCommonPasswords: true,
    preventPersonalInfo: true
  };

  async checkPasswordStrength(password: string, policy?: Partial<PasswordPolicy>): Promise<PasswordStrengthResult> {
    this.stats.totalPasswords++;
    
    const mergedPolicy = { ...this.defaultPolicy, ...policy };
    const result: PasswordStrengthResult = {
      score: 0,
      strength: 'very-weak',
      feedback: [],
      suggestions: [],
      details: {
        length: false,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
        noCommonPatterns: false,
        noPersonalInfo: false,
        entropy: 0
      },
      estimatedCrackTime: 'instantly',
      riskLevel: 'critical'
    };

    try {
      // Basic checks
      result.details.length = password.length >= mergedPolicy.minLength;
      result.details.uppercase = /[A-Z]/.test(password);
      result.details.lowercase = /[a-z]/.test(password);
      result.details.numbers = /\d/.test(password);
      result.details.symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
      
      // Advanced checks
      result.details.noCommonPatterns = !this.hasCommonPatterns(password);
      result.details.noPersonalInfo = !this.hasPersonalInfo(password);
      
      // Calculate entropy
      result.details.entropy = this.calculateEntropy(password);
      
      // Calculate score
      result.score = this.calculateScore(result.details, password, mergedPolicy);
      
      // Determine strength
      result.strength = this.determineStrength(result.score);
      
      // Generate feedback and suggestions
      this.generateFeedback(result, password, mergedPolicy);
      
      // Calculate crack time
      result.estimatedCrackTime = this.estimateCrackTime(result.details.entropy);
      
      // Determine risk level
      result.riskLevel = this.determineRiskLevel(result.score, result.details);
      
      // Update stats
      this.stats.scores.push(result.score);
      this.updateStats(result);
      
    } catch (error) {
      console.error('Password strength check error:', error);
      result.feedback.push('Error occurred during password analysis');
    }

    return result;
  }

  private hasCommonPatterns(password: string): boolean {
    const patterns = [
      /(.)\1{2,}/, // Repeated characters
      /(.)(.)\1\2/, // Repeated patterns
      /123|234|345|456|567|678|789/, // Sequential numbers
      /qwe|wer|ert|rty|tyu|yui|uio|iop/, // Keyboard patterns
      /abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/ // Alphabetical sequences
    ];
    
    return patterns.some(pattern => pattern.test(password.toLowerCase()));
  }

  private hasPersonalInfo(password: string): boolean {
    return this.personalInfoPatterns.some(pattern => pattern.test(password));
  }

  private calculateEntropy(password: string): number {
    let charset = 0;
    
    if (/[a-z]/.test(password)) charset += 26;
    if (/[A-Z]/.test(password)) charset += 26;
    if (/\d/.test(password)) charset += 10;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) charset += 32;
    
    return Math.log2(Math.pow(charset, password.length));
  }

  private calculateScore(details: PasswordStrengthResult['details'], password: string, policy: PasswordPolicy): number {
    let score = 0;
    
    // Length scoring
    if (details.length) {
      score += Math.min(20, password.length * 2);
    }
    
    // Character type scoring
    if (details.uppercase) score += 10;
    if (details.lowercase) score += 10;
    if (details.numbers) score += 10;
    if (details.symbols) score += 15;
    
    // Advanced scoring
    if (details.noCommonPatterns) score += 15;
    if (details.noPersonalInfo) score += 10;
    
    // Entropy bonus
    if (details.entropy > 50) score += 10;
    else if (details.entropy > 30) score += 5;
    
    // Policy compliance bonus
    if (password.length >= policy.minLength + 4) score += 5;
    if (password.length >= policy.minLength + 8) score += 5;
    
    // Penalties
    if (this.commonPasswords.has(password.toLowerCase())) {
      score = Math.max(0, score - 50);
    }
    
    return Math.min(100, Math.max(0, score));
  }

  private determineStrength(score: number): PasswordStrengthResult['strength'] {
    if (score >= 90) return 'very-strong';
    if (score >= 80) return 'strong';
    if (score >= 60) return 'medium';
    if (score >= 40) return 'weak';
    return 'very-weak';
  }

  private determineRiskLevel(score: number, details: PasswordStrengthResult['details']): PasswordStrengthResult['riskLevel'] {
    if (score < 30 || this.commonPasswords.has('password')) return 'critical';
    if (score < 50) return 'high';
    if (score < 70) return 'medium';
    return 'low';
  }

  private estimateCrackTime(entropy: number): string {
    const attemptsPerSecond = 1000000000; // 1 billion attempts per second
    const totalAttempts = Math.pow(2, entropy - 1);
    const seconds = totalAttempts / attemptsPerSecond;
    
    if (seconds < 1) return 'instantly';
    if (seconds < 60) return `${Math.round(seconds)} seconds`;
    if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
    if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
    if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
    if (seconds < 31536000000) return `${Math.round(seconds / 31536000)} years`;
    return `${Math.round(seconds / 31536000000)} centuries`;
  }

  private generateFeedback(result: PasswordStrengthResult, password: string, policy: PasswordPolicy): void {
    // Length feedback
    if (!result.details.length) {
      result.feedback.push(`Password must be at least ${policy.minLength} characters long`);
      result.suggestions.push(`Increase password length to at least ${policy.minLength} characters`);
    }
    
    // Character type feedback
    if (!result.details.uppercase) {
      result.feedback.push('Include at least one uppercase letter');
      result.suggestions.push('Add uppercase letters (A-Z) to your password');
    }
    
    if (!result.details.lowercase) {
      result.feedback.push('Include at least one lowercase letter');
      result.suggestions.push('Add lowercase letters (a-z) to your password');
    }
    
    if (!result.details.numbers) {
      result.feedback.push('Include at least one number');
      result.suggestions.push('Add numbers (0-9) to your password');
    }
    
    if (!result.details.symbols) {
      result.feedback.push('Include at least one special character');
      result.suggestions.push('Add special characters (!@#$%^&*) to your password');
    }
    
    // Pattern feedback
    if (!result.details.noCommonPatterns) {
      result.feedback.push('Avoid common patterns and sequences');
      result.suggestions.push('Avoid repeated characters, keyboard patterns, and sequential numbers');
    }
    
    if (!result.details.noPersonalInfo) {
      result.feedback.push('Avoid personal information in passwords');
      result.suggestions.push('Don\'t use birth years, phone numbers, or other personal data');
    }
    
    // Common password feedback
    if (this.commonPasswords.has(password.toLowerCase())) {
      result.feedback.push('This is a commonly used password');
      result.suggestions.push('Choose a unique password that\'s not commonly used');
    }
    
    // Strength-specific suggestions
    if (result.strength === 'very-weak' || result.strength === 'weak') {
      result.suggestions.push('Consider using a passphrase with random words');
      result.suggestions.push('Use a password manager to generate strong passwords');
    }
    
    if (result.strength === 'medium') {
      result.suggestions.push('Add more complexity with additional character types');
      result.suggestions.push('Increase length for better security');
    }
  }

  private updateStats(result: PasswordStrengthResult): void {
    // Update issue counts
    if (!result.details.length) this.incrementStat(this.stats.issues, 'Too short');
    if (!result.details.uppercase) this.incrementStat(this.stats.issues, 'No uppercase');
    if (!result.details.lowercase) this.incrementStat(this.stats.issues, 'No lowercase');
    if (!result.details.numbers) this.incrementStat(this.stats.issues, 'No numbers');
    if (!result.details.symbols) this.incrementStat(this.stats.issues, 'No symbols');
    if (!result.details.noCommonPatterns) this.incrementStat(this.stats.issues, 'Common patterns');
    if (!result.details.noPersonalInfo) this.incrementStat(this.stats.issues, 'Personal info');
    
    // Update suggestion counts
    result.suggestions.forEach(suggestion => {
      this.incrementStat(this.stats.suggestions, suggestion);
    });
  }

  private incrementStat(map: Map<string, number>, key: string): void {
    map.set(key, (map.get(key) || 0) + 1);
  }

  async generateStrongPassword(length: number = 16, includeSymbols: boolean = true): Promise<string> {
    const charset = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };
    
    let allChars = charset.lowercase + charset.uppercase + charset.numbers;
    if (includeSymbols) allChars += charset.symbols;
    
    let password = '';
    
    // Ensure at least one character from each required type
    password += charset.lowercase[Math.floor(Math.random() * charset.lowercase.length)];
    password += charset.uppercase[Math.floor(Math.random() * charset.uppercase.length)];
    password += charset.numbers[Math.floor(Math.random() * charset.numbers.length)];
    if (includeSymbols) {
      password += charset.symbols[Math.floor(Math.random() * charset.symbols.length)];
    }
    
    // Fill remaining length with random characters
    for (let i = password.length; i < length; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Shuffle the password
    return password.split('').sort(() => Math.random() - 0.5).join('');
  }

  async getStats(): Promise<StrengthStats> {
    const averageScore = this.stats.scores.length > 0 
      ? this.stats.scores.reduce((a, b) => a + b, 0) / this.stats.scores.length
      : 0;

    const strengthDistribution = {
      'very-weak': 0,
      'weak': 0,
      'medium': 0,
      'strong': 0,
      'very-strong': 0
    };

    this.stats.scores.forEach(score => {
      const strength = this.determineStrength(score);
      strengthDistribution[strength]++;
    });

    const commonIssues = Array.from(this.stats.issues.entries())
      .map(([issue, count]) => ({ issue, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    const topSuggestions = Array.from(this.stats.suggestions.entries())
      .map(([suggestion, count]) => ({ suggestion, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    return {
      totalPasswords: this.stats.totalPasswords,
      averageScore: Math.round(averageScore * 100) / 100,
      strengthDistribution,
      commonIssues,
      topSuggestions
    };
  }

  async clearStats(): Promise<void> {
    this.stats.totalPasswords = 0;
    this.stats.scores = [];
    this.stats.issues.clear();
    this.stats.suggestions.clear();
  }

  // Batch password checking
  async checkPasswords(passwords: string[], policy?: Partial<PasswordPolicy>): Promise<PasswordStrengthResult[]> {
    const results: PasswordStrengthResult[] = [];
    
    for (const password of passwords) {
      const result = await this.checkPasswordStrength(password, policy);
      results.push(result);
    }
    
    return results;
  }

  // Export results
  exportResults(results: PasswordStrengthResult[]): string {
    const csv = [
      'Password,Score,Strength,Risk Level,Estimated Crack Time,Issues,Suggestions'
    ];
    
    results.forEach(result => {
      const issues = result.feedback.join('; ');
      const suggestions = result.suggestions.join('; ');
      csv.push(`"***",${result.score},${result.strength},${result.riskLevel},"${result.estimatedCrackTime}","${issues}","${suggestions}"`);
    });
    
    return csv.join('\n');
  }
}

export default new PasswordStrengthService();
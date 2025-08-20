export interface PasswordStrengthResult {
  password: string;
  score: number; // 0-100
  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong';
  feedback: string[];
  suggestions: string[];
  details: {
    length: number;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumbers: boolean;
    hasSymbols: boolean;
    hasCommonWords: boolean;
    hasSequentialChars: boolean;
    hasRepeatingChars: boolean;
    entropy: number;
    crackTime: string;
  };
  warnings: string[];
}

export interface CommonPasswordData {
  commonPasswords: Set<string>;
  commonWords: Set<string>;
  patterns: RegExp[];
}

class PasswordStrengthService {
  private commonPasswords: Set<string>;
  private commonWords: Set<string>;
  private patterns: RegExp[];

  constructor() {
    // Common weak passwords
    this.commonPasswords = new Set([
      'password', '123456', '123456789', 'qwerty', 'abc123', 'password123',
      'admin', 'letmein', 'welcome', 'monkey', 'dragon', 'master', 'hello',
      'freedom', 'whatever', 'qazwsx', 'trustno1', 'jordan', 'harley',
      'ranger', 'iwantu', 'jennifer', 'hunter', 'buster', 'thomas', 'tigger',
      'robert', 'soccer', 'batman', 'test', 'pass', 'killer', 'hockey',
      'george', 'charlie', 'andrew', 'michelle', 'love', 'sunshine', 'jessica',
      'asshole', '6969', 'amanda', 'access', 'yankees', '987654321', 'dallas',
      'austin', 'thunder', 'taylor', 'bailey', 'shadow', 'wolverine', 'steelers'
    ]);

    // Common words that make passwords weak
    this.commonWords = new Set([
      'password', 'admin', 'user', 'login', 'welcome', 'hello', 'test',
      'guest', 'demo', 'sample', 'example', 'default', 'root', 'system',
      'computer', 'internet', 'website', 'email', 'phone', 'mobile'
    ]);

    // Common patterns that make passwords predictable
    this.patterns = [
      /123/, /abc/, /qwe/, /asd/, /zxc/, /qaz/, /wsx/, /edc/, /rfv/, /tgb/,
      /qwerty/, /asdfgh/, /zxcvbn/, /password/, /admin/, /user/, /test/,
      /1234/, /abcd/, /qwer/, /asdf/, /zxcv/, /qaz/, /wsx/, /edc/, /rfv/
    ];
  }

  /**
   * Analyze password strength comprehensively
   */
  analyzePassword(password: string): PasswordStrengthResult {
    const result: PasswordStrengthResult = {
      password,
      score: 0,
      strength: 'very-weak',
      feedback: [],
      suggestions: [],
      details: {
        length: password.length,
        hasUppercase: /[A-Z]/.test(password),
        hasLowercase: /[a-z]/.test(password),
        hasNumbers: /\d/.test(password),
        hasSymbols: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
        hasCommonWords: this.hasCommonWords(password),
        hasSequentialChars: this.hasSequentialChars(password),
        hasRepeatingChars: this.hasRepeatingChars(password),
        entropy: this.calculateEntropy(password),
        crackTime: this.estimateCrackTime(password)
      },
      warnings: []
    };

    // Calculate score
    result.score = this.calculateScore(result.details);
    result.strength = this.getStrengthLevel(result.score);

    // Generate feedback
    result.feedback = this.generateFeedback(result.details);
    result.suggestions = this.generateSuggestions(result.details);
    result.warnings = this.generateWarnings(result.details);

    return result;
  }

  /**
   * Calculate password strength score
   */
  private calculateScore(details: PasswordStrengthResult['details']): number {
    let score = 0;

    // Length scoring (0-25 points)
    if (details.length >= 12) score += 25;
    else if (details.length >= 10) score += 20;
    else if (details.length >= 8) score += 15;
    else if (details.length >= 6) score += 10;
    else if (details.length >= 4) score += 5;

    // Character variety scoring (0-25 points)
    if (details.hasUppercase) score += 5;
    if (details.hasLowercase) score += 5;
    if (details.hasNumbers) score += 5;
    if (details.hasSymbols) score += 10;

    // Complexity scoring (0-25 points)
    if (details.entropy >= 4.0) score += 25;
    else if (details.entropy >= 3.0) score += 20;
    else if (details.entropy >= 2.0) score += 15;
    else if (details.entropy >= 1.0) score += 10;

    // Penalties (0-25 points deducted)
    if (details.hasCommonWords) score -= 15;
    if (details.hasSequentialChars) score -= 10;
    if (details.hasRepeatingChars) score -= 10;

    return Math.max(0, Math.min(100, score));
  }

  /**
   * Determine strength level based on score
   */
  private getStrengthLevel(score: number): PasswordStrengthResult['strength'] {
    if (score >= 90) return 'very-strong';
    if (score >= 80) return 'strong';
    if (score >= 60) return 'medium';
    if (score >= 40) return 'weak';
    return 'very-weak';
  }

  /**
   * Check if password contains common words
   */
  private hasCommonWords(password: string): boolean {
    const lowerPassword = password.toLowerCase();
    for (const word of this.commonWords) {
      if (lowerPassword.includes(word)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Check for sequential characters
   */
  private hasSequentialChars(password: string): boolean {
    for (const pattern of this.patterns) {
      if (pattern.test(password.toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  /**
   * Check for repeating characters
   */
  private hasRepeatingChars(password: string): boolean {
    for (let i = 0; i < password.length - 2; i++) {
      if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
        return true;
      }
    }
    return false;
  }

  /**
   * Calculate password entropy (measure of randomness)
   */
  private calculateEntropy(password: string): number {
    const charset = new Set(password.split('')).size;
    return Math.log2(Math.pow(charset, password.length));
  }

  /**
   * Estimate time to crack password
   */
  private estimateCrackTime(password: string): string {
    const entropy = this.calculateEntropy(password);
    const attemptsPerSecond = 1000000000; // 1 billion attempts per second
    const totalAttempts = Math.pow(2, entropy);
    const seconds = totalAttempts / attemptsPerSecond;

    if (seconds < 1) return 'Instantly';
    if (seconds < 60) return `${Math.ceil(seconds)} seconds`;
    if (seconds < 3600) return `${Math.ceil(seconds / 60)} minutes`;
    if (seconds < 86400) return `${Math.ceil(seconds / 3600)} hours`;
    if (seconds < 31536000) return `${Math.ceil(seconds / 86400)} days`;
    return `${Math.ceil(seconds / 31536000)} years`;
  }

  /**
   * Generate feedback based on password analysis
   */
  private generateFeedback(details: PasswordStrengthResult['details']): string[] {
    const feedback: string[] = [];

    if (details.length < 8) {
      feedback.push('Password is too short - minimum 8 characters recommended');
    } else if (details.length < 12) {
      feedback.push('Consider using a longer password for better security');
    }

    if (!details.hasUppercase) {
      feedback.push('Add uppercase letters to increase complexity');
    }

    if (!details.hasLowercase) {
      feedback.push('Add lowercase letters to increase complexity');
    }

    if (!details.hasNumbers) {
      feedback.push('Include numbers to make password harder to guess');
    }

    if (!details.hasSymbols) {
      feedback.push('Add special characters for maximum security');
    }

    if (details.hasCommonWords) {
      feedback.push('Avoid common words that are easily guessed');
    }

    if (details.hasSequentialChars) {
      feedback.push('Avoid sequential character patterns');
    }

    if (details.hasRepeatingChars) {
      feedback.push('Avoid repeating character patterns');
    }

    return feedback;
  }

  /**
   * Generate improvement suggestions
   */
  private generateSuggestions(details: PasswordStrengthResult['details']): string[] {
    const suggestions: string[] = [];

    if (details.length < 12) {
      suggestions.push('Use at least 12 characters for strong passwords');
    }

    if (!details.hasUppercase || !details.hasLowercase || !details.hasNumbers || !details.hasSymbols) {
      suggestions.push('Mix uppercase, lowercase, numbers, and symbols');
    }

    if (details.hasCommonWords) {
      suggestions.push('Use random combinations instead of dictionary words');
    }

    if (details.hasSequentialChars) {
      suggestions.push('Avoid keyboard patterns like qwerty or 123456');
    }

    suggestions.push('Consider using a passphrase with random words');
    suggestions.push('Use unique passwords for each account');
    suggestions.push('Consider a password manager for secure storage');

    return suggestions;
  }

  /**
   * Generate security warnings
   */
  private generateWarnings(details: PasswordStrengthResult['details']): string[] {
    const warnings: string[] = [];

    if (details.length < 8) {
      warnings.push('CRITICAL: Password is extremely weak and easily crackable');
    }

    if (details.hasCommonWords) {
      warnings.push('WARNING: Common words make password vulnerable to dictionary attacks');
    }

    if (details.entropy < 2.0) {
      warnings.push('WARNING: Low entropy makes password predictable');
    }

    if (details.crackTime === 'Instantly' || details.crackTime.includes('seconds')) {
      warnings.push('WARNING: Password can be cracked in seconds');
    }

    return warnings;
  }

  /**
   * Generate a strong password
   */
  generateStrongPassword(length: number = 16): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let password = '';
    
    // Ensure at least one character from each category
    password += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
    password += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
    password += '0123456789'[Math.floor(Math.random() * 10)];
    password += '!@#$%^&*()_+-=[]{}|;:,.<>?'[Math.floor(Math.random() * 32)];
    
    // Fill the rest randomly
    for (let i = 4; i < length; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
    }
    
    // Shuffle the password
    return password.split('').sort(() => Math.random() - 0.5).join('');
  }

  /**
   * Generate a memorable passphrase
   */
  generatePassphrase(wordCount: number = 4): string {
    const words = [
      'apple', 'banana', 'cherry', 'dragon', 'eagle', 'forest', 'garden',
      'harbor', 'island', 'jungle', 'knight', 'lighthouse', 'mountain',
      'ocean', 'penguin', 'queen', 'river', 'sunset', 'tiger', 'umbrella',
      'volcano', 'waterfall', 'xylophone', 'yellow', 'zebra'
    ];
    
    let passphrase = '';
    for (let i = 0; i < wordCount; i++) {
      const word = words[Math.floor(Math.random() * words.length)];
      passphrase += (i === 0 ? '' : '-') + word;
    }
    
    return passphrase;
  }

  /**
   * Add custom common password
   */
  addCommonPassword(password: string): void {
    this.commonPasswords.add(password.toLowerCase());
  }

  /**
   * Remove password from common list
   */
  removeCommonPassword(password: string): void {
    this.commonPasswords.delete(password.toLowerCase());
  }

  /**
   * Get service statistics
   */
  getStats(): { totalCommonPasswords: number; totalCommonWords: number; totalPatterns: number } {
    return {
      totalCommonPasswords: this.commonPasswords.size,
      totalCommonWords: this.commonWords.size,
      totalPatterns: this.patterns.length
    };
  }
}

// Export singleton instance
export const passwordStrengthService = new PasswordStrengthService();

// Export the class for custom instances
export { PasswordStrengthService };
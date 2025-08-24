export interface EmailValidationResult {
  isValid: boolean;
  score: number;
  details: {
    syntax: boolean;
    domain: boolean;
    mx: boolean;
    disposable: boolean;
    role: boolean;
    free: boolean;
    catchAll: boolean;
  };
  suggestions: string[];
  riskLevel: 'low' | 'medium' | 'high';
  confidence: number;
}

export interface DomainInfo {
  domain: string;
  mxRecords: string[];
  hasValidMX: boolean;
  isDisposable: boolean;
  isFree: boolean;
  isCatchAll: boolean;
  reputation: number;
}

export interface ValidationStats {
  totalValidations: number;
  validEmails: number;
  invalidEmails: number;
  averageScore: number;
  topDomains: { domain: string; count: number }[];
  riskDistribution: { low: number; medium: number; high: number };
}

class EmailValidatorService {
  private readonly disposableDomains = new Set([
    '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 'tempmail.org',
    'throwaway.email', 'mailnesia.com', 'sharklasers.com', 'grr.la',
    'guerrillamailblock.com', 'pokemail.net', 'spam4.me', 'bccto.me',
    'chacuo.net', 'dispostable.com', 'fakeinbox.com', 'getairmail.com'
  ]);

  private readonly freeEmailDomains = new Set([
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
    'icloud.com', 'protonmail.com', 'mail.com', 'live.com', 'me.com'
  ]);

  private readonly roleAccounts = new Set([
    'admin', 'administrator', 'webmaster', 'postmaster', 'hostmaster',
    'abuse', 'support', 'info', 'sales', 'contact', 'help', 'noreply',
    'no-reply', 'donotreply', 'do-not-reply'
  ]);

  private readonly stats = {
    totalValidations: 0,
    validEmails: 0,
    invalidEmails: 0,
    scores: [] as number[]
  };

  async validateEmail(email: string): Promise<EmailValidationResult> {
    this.stats.totalValidations++;
    
    const result: EmailValidationResult = {
      isValid: false,
      score: 0,
      details: {
        syntax: false,
        domain: false,
        mx: false,
        disposable: false,
        role: false,
        free: false,
        catchAll: false
      },
      suggestions: [],
      riskLevel: 'high',
      confidence: 0
    };

    try {
      // Basic syntax validation
      result.details.syntax = this.validateSyntax(email);
      
      if (!result.details.syntax) {
        result.suggestions.push('Check email format: should be user@domain.com');
        result.confidence = 0;
        this.stats.invalidEmails++;
        return result;
      }

      // Extract domain
      const domain = email.split('@')[1];
      result.details.domain = this.validateDomain(domain);
      
      if (!result.details.domain) {
        result.suggestions.push('Invalid domain format');
        result.confidence = 10;
        this.stats.invalidEmails++;
        return result;
      }

      // Check if disposable
      result.details.disposable = this.isDisposableDomain(domain);
      if (result.details.disposable) {
        result.suggestions.push('This appears to be a disposable email address');
        result.riskLevel = 'high';
      }

      // Check if free email
      result.details.free = this.isFreeEmailDomain(domain);
      
      // Check if role account
      const localPart = email.split('@')[0];
      result.details.role = this.isRoleAccount(localPart);
      if (result.details.role) {
        result.suggestions.push('This appears to be a role-based email address');
      }

      // Check MX records (simulated)
      result.details.mx = await this.checkMXRecords(domain);
      
      // Check if catch-all (simulated)
      result.details.catchAll = await this.checkCatchAll(domain);

      // Calculate score
      result.score = this.calculateScore(result.details);
      result.isValid = result.score >= 70;
      
      // Set confidence and risk level
      result.confidence = this.calculateConfidence(result.details);
      result.riskLevel = this.calculateRiskLevel(result.details, result.score);

      // Generate suggestions
      this.generateSuggestions(result);

      if (result.isValid) {
        this.stats.validEmails++;
      } else {
        this.stats.invalidEmails++;
      }

      this.stats.scores.push(result.score);

    } catch (error) {
      console.error('Email validation error:', error);
      result.suggestions.push('Validation error occurred');
      result.confidence = 0;
      this.stats.invalidEmails++;
    }

    return result;
  }

  private validateSyntax(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }

  private validateDomain(domain: string): boolean {
    if (!domain || domain.length < 2) return false;
    
    const domainRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return domainRegex.test(domain);
  }

  private isDisposableDomain(domain: string): boolean {
    return this.disposableDomains.has(domain.toLowerCase());
  }

  private isFreeEmailDomain(domain: string): boolean {
    return this.freeEmailDomains.has(domain.toLowerCase());
  }

  private isRoleAccount(localPart: string): boolean {
    return this.roleAccounts.has(localPart.toLowerCase());
  }

  private async checkMXRecords(domain: string): Promise<boolean> {
    // In a real implementation, this would check actual MX records
    // For now, we'll simulate the check
    try {
      // Simulate DNS lookup delay
      await new Promise(resolve => setTimeout(resolve, 10));
      
      // Simulate MX record check
      const hasMX = Math.random() > 0.1; // 90% success rate
      return hasMX;
    } catch (error) {
      return false;
    }
  }

  private async checkCatchAll(domain: string): Promise<boolean> {
    // In a real implementation, this would test if the domain accepts any email
    // For now, we'll simulate the check
    try {
      await new Promise(resolve => setTimeout(resolve, 10));
      
      // Simulate catch-all check
      const isCatchAll = Math.random() > 0.7; // 30% catch-all rate
      return isCatchAll;
    } catch (error) {
      return false;
    }
  }

  private calculateScore(details: EmailValidationResult['details']): number {
    let score = 0;
    
    if (details.syntax) score += 20;
    if (details.domain) score += 20;
    if (details.mx) score += 25;
    if (!details.disposable) score += 20;
    if (!details.role) score += 10;
    if (!details.catchAll) score += 5;
    
    return Math.min(100, score);
  }

  private calculateConfidence(details: EmailValidationResult['details']): number {
    let confidence = 0;
    
    if (details.syntax) confidence += 20;
    if (details.domain) confidence += 20;
    if (details.mx) confidence += 30;
    if (!details.disposable) confidence += 15;
    if (!details.role) confidence += 10;
    if (!details.catchAll) confidence += 5;
    
    return Math.min(100, confidence);
  }

  private calculateRiskLevel(details: EmailValidationResult['details'], score: number): 'low' | 'medium' | 'high' {
    if (details.disposable || score < 50) return 'high';
    if (details.role || score < 80) return 'medium';
    return 'low';
  }

  private generateSuggestions(result: EmailValidationResult): void {
    if (result.details.disposable) {
      result.suggestions.push('Consider using a permanent email address for business communications');
    }
    
    if (result.details.role) {
      result.suggestions.push('Role-based emails may not be monitored regularly');
    }
    
    if (result.details.catchAll) {
      result.suggestions.push('This domain may accept any email address');
    }
    
    if (result.details.free) {
      result.suggestions.push('Free email providers are generally acceptable but may have lower deliverability');
    }
    
    if (result.score < 70) {
      result.suggestions.push('This email address has multiple validation issues');
    }
  }

  async getDomainInfo(domain: string): Promise<DomainInfo> {
    const mxRecords = await this.getMXRecords(domain);
    const isDisposable = this.isDisposableDomain(domain);
    const isFree = this.isFreeEmailDomain(domain);
    const isCatchAll = await this.checkCatchAll(domain);
    
    // Calculate reputation score
    let reputation = 100;
    if (isDisposable) reputation -= 80;
    if (isCatchAll) reputation -= 20;
    if (isFree) reputation -= 10;
    
    return {
      domain,
      mxRecords,
      hasValidMX: mxRecords.length > 0,
      isDisposable,
      isFree,
      isCatchAll,
      reputation: Math.max(0, reputation)
    };
  }

  private async getMXRecords(domain: string): Promise<string[]> {
    // Simulate MX record lookup
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const mockMXRecords = [
      `${domain}.mx1.example.com`,
      `${domain}.mx2.example.com`
    ];
    
    return Math.random() > 0.1 ? mockMXRecords : [];
  }

  async getStats(): Promise<ValidationStats> {
    const averageScore = this.stats.scores.length > 0 
      ? this.stats.scores.reduce((a, b) => a + b, 0) / this.stats.scores.length
      : 0;

    const riskDistribution = {
      low: 0,
      medium: 0,
      high: 0
    };

    // Calculate risk distribution from scores
    this.stats.scores.forEach(score => {
      if (score >= 80) riskDistribution.low++;
      else if (score >= 60) riskDistribution.medium++;
      else riskDistribution.high++;
    });

    return {
      totalValidations: this.stats.totalValidations,
      validEmails: this.stats.validEmails,
      invalidEmails: this.stats.invalidEmails,
      averageScore: Math.round(averageScore * 100) / 100,
      topDomains: [], // Would be populated from actual usage data
      riskDistribution
    };
  }

  async clearStats(): Promise<void> {
    this.stats.totalValidations = 0;
    this.stats.validEmails = 0;
    this.stats.invalidEmails = 0;
    this.stats.scores = [];
  }

  // Batch validation for multiple emails
  async validateEmails(emails: string[]): Promise<EmailValidationResult[]> {
    const results: EmailValidationResult[] = [];
    
    for (const email of emails) {
      const result = await this.validateEmail(email);
      results.push(result);
      
      // Add small delay to prevent overwhelming
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    return results;
  }

  // Export validation results
  exportValidationResults(results: EmailValidationResult[]): string {
    const csv = [
      'Email,Valid,Score,Risk Level,Confidence,Suggestions'
    ];
    
    results.forEach(result => {
      const email = 'email'; // Would be the actual email
      const suggestions = result.suggestions.join('; ');
      csv.push(`${email},${result.isValid},${result.score},${result.riskLevel},${result.confidence},"${suggestions}"`);
    });
    
    return csv.join('\n');
  }
}

export default new EmailValidatorService();
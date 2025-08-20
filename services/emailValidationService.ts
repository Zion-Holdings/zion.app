export interface EmailValidationResult {
  isValid: boolean;
  email: string;
  domain: string;
  suggestions: string[];
  errors: string[];
  warnings: string[];
  score: number; // 0-100 validation score
  details: {
    syntax: boolean;
    domain: boolean;
    mxRecord: boolean;
    disposable: boolean;
    role: boolean;
    free: boolean;
  };
}

export interface DomainInfo {
  domain: string;
  hasMX: boolean;
  hasSPF: boolean;
  hasDMARC: boolean;
  isDisposable: boolean;
  isFree: boolean;
  reputation: 'good' | 'medium' | 'poor';
}

class EmailValidationService {
  private disposableDomains: Set<string>;
  private freeEmailDomains: Set<string>;
  private roleAccounts: Set<string>;

  constructor() {
    // Common disposable email domains
    this.disposableDomains = new Set([
      '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 'tempmail.org',
      'throwaway.email', 'temp-mail.org', 'sharklasers.com', 'getairmail.com',
      'mailnesia.com', 'mintemail.com', 'yopmail.com', 'spam4.me', 'bccto.me'
    ]);

    // Common free email providers
    this.freeEmailDomains = new Set([
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
      'icloud.com', 'protonmail.com', 'mail.com', 'yandex.com', 'zoho.com'
    ]);

    // Common role-based email accounts
    this.roleAccounts = new Set([
      'admin', 'administrator', 'webmaster', 'postmaster', 'hostmaster',
      'abuse', 'info', 'sales', 'support', 'help', 'contact', 'noreply',
      'no-reply', 'donotreply', 'donot-reply'
    ]);
  }

  /**
   * Comprehensive email validation
   */
  async validateEmail(email: string): Promise<EmailValidationResult> {
    const result: EmailValidationResult = {
      isValid: false,
      email: email.trim().toLowerCase(),
      domain: '',
      suggestions: [],
      errors: [],
      warnings: [],
      score: 0,
      details: {
        syntax: false,
        domain: false,
        mxRecord: false,
        disposable: false,
        role: false,
        free: false
      }
    };

    try {
      // Extract domain
      const domainMatch = email.match(/@([^@]+)$/);
      if (domainMatch) {
        result.domain = domainMatch[1].toLowerCase();
      }

      // Syntax validation
      const syntaxValid = this.validateSyntax(email);
      result.details.syntax = syntaxValid;
      if (!syntaxValid) {
        result.errors.push('Invalid email syntax');
      }

      // Domain validation
      if (result.domain) {
        const domainValid = this.validateDomain(result.domain);
        result.details.domain = domainValid;
        if (!domainValid) {
          result.errors.push('Invalid domain format');
        }

        // Check if domain is disposable
        const isDisposable = this.disposableDomains.has(result.domain);
        result.details.disposable = isDisposable;
        if (isDisposable) {
          result.warnings.push('Domain is commonly used for disposable emails');
        }

        // Check if domain is free email provider
        const isFree = this.freeEmailDomains.has(result.domain);
        result.details.free = isFree;
        if (isFree) {
          result.warnings.push('Domain is a free email provider');
        }

        // Check for role-based accounts
        const localPart = email.split('@')[0];
        const isRole = this.roleAccounts.has(localPart.toLowerCase());
        result.details.role = isRole;
        if (isRole) {
          result.warnings.push('Email appears to be a role-based account');
        }

        // MX record check (simplified - in production, you'd use DNS lookup)
        result.details.mxRecord = true; // Placeholder
      }

      // Calculate score
      result.score = this.calculateScore(result);

      // Determine overall validity
      result.isValid = result.details.syntax && result.details.domain && result.score >= 70;

      // Generate suggestions
      result.suggestions = this.generateSuggestions(result);

    } catch (error) {
      result.errors.push(`Validation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    return result;
  }

  /**
   * Basic syntax validation
   */
  private validateSyntax(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }

  /**
   * Domain format validation
   */
  private validateDomain(domain: string): boolean {
    // Check domain length and format
    if (domain.length < 3 || domain.length > 253) return false;
    
    // Check for valid characters
    const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return domainRegex.test(domain);
  }

  /**
   * Calculate validation score
   */
  private calculateScore(result: EmailValidationResult): number {
    let score = 0;

    if (result.details.syntax) score += 25;
    if (result.details.domain) score += 25;
    if (result.details.mxRecord) score += 20;
    if (!result.details.disposable) score += 15;
    if (!result.details.role) score += 10;
    if (!result.details.free) score += 5;

    return Math.min(100, score);
  }

  /**
   * Generate improvement suggestions
   */
  private generateSuggestions(result: EmailValidationResult): string[] {
    const suggestions: string[] = [];

    if (!result.details.syntax) {
      suggestions.push('Check email format - should be user@domain.com');
    }

    if (result.details.disposable) {
      suggestions.push('Consider using a non-disposable email domain for business purposes');
    }

    if (result.details.role) {
      suggestions.push('Role-based emails may be filtered by some services');
    }

    if (result.details.free) {
      suggestions.push('Consider using a business domain email for professional communications');
    }

    if (result.score < 70) {
      suggestions.push('Email has multiple validation issues that may affect deliverability');
    }

    return suggestions;
  }

  /**
   * Batch validate multiple emails
   */
  async validateBatch(emails: string[]): Promise<EmailValidationResult[]> {
    const results: EmailValidationResult[] = [];
    
    for (const email of emails) {
      const result = await this.validateEmail(email);
      results.push(result);
    }
    
    return results;
  }

  /**
   * Get domain information
   */
  async getDomainInfo(domain: string): Promise<DomainInfo> {
    const hasMX = true; // Placeholder - would check MX records
    const hasSPF = true; // Placeholder - would check SPF records
    const hasDMARC = true; // Placeholder - would check DMARC records
    
    const isDisposable = this.disposableDomains.has(domain);
    const isFree = this.freeEmailDomains.has(domain);
    
    let reputation: 'good' | 'medium' | 'poor' = 'good';
    if (isDisposable) reputation = 'poor';
    else if (isFree) reputation = 'medium';
    
    return {
      domain,
      hasMX,
      hasSPF,
      hasDMARC,
      isDisposable,
      isFree,
      reputation
    };
  }

  /**
   * Add custom disposable domain
   */
  addDisposableDomain(domain: string): void {
    this.disposableDomains.add(domain.toLowerCase());
  }

  /**
   * Remove domain from disposable list
   */
  removeDisposableDomain(domain: string): void {
    this.disposableDomains.delete(domain.toLowerCase());
  }

  /**
   * Get validation statistics
   */
  getStats(): { totalDomains: number; disposableDomains: number; freeDomains: number } {
    return {
      totalDomains: this.disposableDomains.size + this.freeEmailDomains.size,
      disposableDomains: this.disposableDomains.size,
      freeDomains: this.freeEmailDomains.size
    };
  }
}

// Export singleton instance
export const emailValidationService = new EmailValidationService();

// Export the class for custom instances
export { EmailValidationService };
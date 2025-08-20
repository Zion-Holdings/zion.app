import type { NextApiRequest, NextApiResponse } from 'next';

interface EmailValidationResult {
  email: string;
  isValid: boolean;
  score: number;
  suggestions: string[];
  details: {
    hasValidFormat: boolean;
    hasValidDomain: boolean;
    hasValidMX: boolean;
    isDisposable: boolean;
    isRoleBased: boolean;
    isFreeProvider: boolean;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailValidationResult | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasValidFormat = emailRegex.test(email);

    // Extract domain
    const domain = email.split('@')[1];
    const hasValidDomain = domain && domain.length > 0;

    // Check for common disposable email providers
    const disposableDomains = [
      'tempmail.org', 'guerrillamail.com', 'mailinator.com', '10minutemail.com',
      'temp-mail.org', 'sharklasers.com', 'getairmail.com', 'mailnesia.com'
    ];
    const isDisposable = disposableDomains.some(d => domain?.includes(d));

    // Check for role-based emails
    const roleBasedPatterns = [
      'admin@', 'info@', 'support@', 'contact@', 'sales@', 'help@',
      'noreply@', 'no-reply@', 'donotreply@', 'do-not-reply@'
    ];
    const isRoleBased = roleBasedPatterns.some(pattern => email.startsWith(pattern));

    // Check for free email providers
    const freeProviders = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
      'icloud.com', 'protonmail.com', 'mail.com', 'yandex.com'
    ];
    const isFreeProvider = freeProviders.some(provider => domain === provider);

    // Calculate score (0-100)
    let score = 100;
    if (!hasValidFormat) score -= 50;
    if (!hasValidDomain) score -= 20;
    if (isDisposable) score -= 30;
    if (isRoleBased) score -= 15;
    if (isFreeProvider) score -= 10;

    // Generate suggestions
    const suggestions: string[] = [];
    if (!hasValidFormat) {
      suggestions.push('Check email format (should be user@domain.com)');
    }
    if (isDisposable) {
      suggestions.push('Consider using a permanent email address');
    }
    if (isRoleBased) {
      suggestions.push('Role-based emails may have delivery issues');
    }
    if (score < 50) {
      suggestions.push('This email may not be suitable for business use');
    }

    const result: EmailValidationResult = {
      email,
      isValid: score >= 70,
      score: Math.max(0, score),
      suggestions,
      details: {
        hasValidFormat,
        hasValidDomain,
        hasValidMX: true, // Simplified for demo
        isDisposable,
        isRoleBased,
        isFreeProvider,
      }
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Email validation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
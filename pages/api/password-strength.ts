import type { NextApiRequest, NextApiResponse } from 'next';

interface PasswordStrengthResult {
  password: string;
  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong';
  score: number;
  feedback: string[];
  details: {
    length: number;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumbers: boolean;
    hasSymbols: boolean;
    hasCommonPatterns: boolean;
    entropy: number;
  };
  suggestions: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PasswordStrengthResult | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { password } = req.body;

    if (!password || typeof password !== 'string') {
      return res.status(400).json({ error: 'Password is required' });
    }

    // Password analysis
    const length = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    // Check for common patterns
    const commonPatterns = [
      '123', 'abc', 'qwe', 'password', 'admin', 'user', 'test',
      '123456', 'password123', 'admin123', 'qwerty', 'asdf'
    ];
    const hasCommonPatterns = commonPatterns.some(pattern => 
      password.toLowerCase().includes(pattern)
    );

    // Calculate entropy (simplified)
    const charsetSize = (hasUppercase ? 26 : 0) + (hasLowercase ? 26 : 0) + 
                       (hasNumbers ? 10 : 0) + (hasSymbols ? 32 : 0);
    const entropy = charsetSize > 0 ? Math.log2(Math.pow(charsetSize, length)) : 0;

    // Calculate score
    let score = 0;
    score += Math.min(length * 2, 20); // Length contribution (max 20)
    score += hasUppercase ? 10 : 0;
    score += hasLowercase ? 10 : 0;
    score += hasNumbers ? 10 : 0;
    score += hasSymbols ? 15 : 0;
    score += entropy > 50 ? 15 : 0; // High entropy bonus
    score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns

    // Determine strength level
    let strength: PasswordStrengthResult['strength'];
    if (score < 30) strength = 'very-weak';
    else if (score < 50) strength = 'weak';
    else if (score < 70) strength = 'medium';
    else if (score < 90) strength = 'strong';
    else strength = 'very-strong';

    // Generate feedback
    const feedback: string[] = [];
    if (length < 8) feedback.push('Password is too short (minimum 8 characters)');
    if (!hasUppercase) feedback.push('Add uppercase letters');
    if (!hasLowercase) feedback.push('Add lowercase letters');
    if (!hasNumbers) feedback.push('Add numbers');
    if (!hasSymbols) feedback.push('Add special characters');
    if (hasCommonPatterns) feedback.push('Avoid common patterns and words');
    if (entropy < 30) feedback.push('Password is too predictable');

    // Generate suggestions
    const suggestions: string[] = [];
    if (score < 50) {
      suggestions.push('Use a mix of uppercase, lowercase, numbers, and symbols');
      suggestions.push('Make it at least 12 characters long');
      suggestions.push('Avoid personal information and common words');
    }
    if (hasCommonPatterns) {
      suggestions.push('Replace common patterns with random characters');
      suggestions.push('Consider using a passphrase instead');
    }
    if (entropy < 40) {
      suggestions.push('Increase randomness by using more character types');
      suggestions.push('Consider using a password generator');
    }

    const result: PasswordStrengthResult = {
      password,
      strength,
      score: Math.max(0, Math.min(100, score)),
      feedback,
      details: {
        length,
        hasUppercase,
        hasLowercase,
        hasNumbers,
        hasSymbols,
        hasCommonPatterns,
        entropy: Math.round(entropy * 100) / 100,
      },
      suggestions,
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Password strength check error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
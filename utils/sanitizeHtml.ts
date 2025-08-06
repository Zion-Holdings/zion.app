// HTML sanitization utility to prevent CSP violations
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  
  // Remove script tags and their content
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Remove event handlers
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
  
  // Remove javascript: URLs
  sanitized = sanitized.replace(/javascript:/gi, '');
  
  // Remove data: URLs
  sanitized = sanitized.replace(/data:/gi, '');
  
  // Remove vbscript: URLs
  sanitized = sanitized.replace(/vbscript:/gi, '');
  
  // Remove expression() in CSS
  sanitized = sanitized.replace(/expression\s*\(/gi, '');
  
  // Remove eval() in CSS
  sanitized = sanitized.replace(/eval\s*\(/gi, '');
  
  return sanitized;
}

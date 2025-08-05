// HTML sanitization utility to prevent CSP violations
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  
  // Remove script tags and their content
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Remove event handlers (onclick, onload, etc.)
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
  
  // Remove javascript: URLs
  sanitized = sanitized.replace(/javascript:/gi, '');
  
  // Remove data: URLs that might contain scripts
  sanitized = sanitized.replace(/data:text\/html/gi, '');
  sanitized = sanitized.replace(/data:application\/javascript/gi, '');
  
  // Remove iframe tags (potential security risk)
  sanitized = sanitized.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
  
  // Remove object and embed tags
  sanitized = sanitized.replace(/<(object|embed)\b[^<]*(?:(?!<\/(object|embed)>)<[^<]*)*<\/(object|embed)>/gi, '');
  
  // Remove style tags that might contain scripts
  sanitized = sanitized.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  
  // Remove link tags with javascript: URLs
  sanitized = sanitized.replace(/<link[^>]*href\s*=\s*["']javascript:[^"']*["'][^>]*>/gi, '');
  
  // Remove meta tags with javascript: URLs
  sanitized = sanitized.replace(/<meta[^>]*content\s*=\s*["']javascript:[^"']*["'][^>]*>/gi, '');
  
  // Remove any remaining javascript: URLs
  sanitized = sanitized.replace(/javascript:[^"'\s>]+/gi, '');
  
  return sanitized;
}

// Alternative function that creates a safe wrapper for HTML content
export function createSafeHtmlWrapper(html: string): string {
  const sanitized = sanitizeHtml(html);
  
  // Wrap in a container with CSP-friendly styling
  return `
    <div class="safe-html-content" style="
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: inherit;
    >
      ${sanitized}
    </div>
  `;
} 
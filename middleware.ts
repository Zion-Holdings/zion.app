import { NextRequest, NextResponse } from 'next/server';

// Security configuration
const SECURITY_HEADERS = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';"
};

// Rate limiting configuration
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100, // limit each IP to 100 requests per windowMs
};

// Simple in-memory store for rate limiting (in production, use Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);
  
  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return false;
  }
  
  if (record.count >= RATE_LIMIT.maxRequests) {
    return true;
  }
  
  record.count++;
  return false;
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  return 'unknown';
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Apply security headers
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  // Rate limiting
  const clientIP = getClientIP(request);
  if (isRateLimited(clientIP)) {
    return new NextResponse(
      JSON.stringify({ error: 'Too many requests', message: 'Rate limit exceeded' }),
      { 
        status: 429, 
        headers: { 
          'Content-Type': 'application/json',
          'Retry-After': '900' // 15 minutes
        } 
      }
    );
  }
  
  // CSRF protection for POST requests
  if (request.method === 'POST') {
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    
    // Allow same-origin requests
    if (origin && request.nextUrl.origin !== origin) {
      // Check if referer is from the same origin
      if (referer && !referer.startsWith(request.nextUrl.origin)) {
        return new NextResponse(
          JSON.stringify({ error: 'CSRF protection', message: 'Invalid request origin' }),
          { 
            status: 403, 
            headers: { 'Content-Type': 'application/json' } 
          }
        );
      }
    }
  }
  
  // Bot protection
  const userAgent = request.headers.get('user-agent') || '';
  const suspiciousPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /curl/i,
    /wget/i,
    /python/i,
    /java/i,
    /perl/i
  ];
  
  const isSuspiciousBot = suspiciousPatterns.some(pattern => pattern.test(userAgent));
  if (isSuspiciousBot && !userAgent.includes('Googlebot') && !userAgent.includes('Bingbot')) {
    // Add delay for suspicious bots
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Log security events
  if (process.env.NODE_ENV === 'production') {
    console.log(`[Security] ${request.method} ${request.url} - IP: ${clientIP} - UA: ${userAgent.substring(0, 100)}`);
  }
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
  runtime: 'nodejs',
};

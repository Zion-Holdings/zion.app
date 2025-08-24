import type { NextApiRequest, NextApiResponse } from 'next';

interface ShortUrl {
  id: string;
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: string;
  clicks: number;
  isActive: boolean;
}

interface UrlShortenerRequest {
  originalUrl: string;
  customCode?: string;
}

interface UrlShortenerResponse {
  success: boolean;
  data?: ShortUrl;
  error?: string;
}

// In-memory storage (in production, use a database)
const urlStorage = new Map<string, ShortUrl>();

// Generate a random short code
function generateShortCode(length: number = 6): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Validate URL format
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UrlShortenerResponse>
) {
  if (req.method === 'POST') {
    // Create short URL
    try {
      const { originalUrl, customCode }: UrlShortenerRequest = req.body;

      if (!originalUrl) {
        return res.status(400).json({
          success: false,
          error: 'Original URL is required'
        });
      }

      if (!isValidUrl(originalUrl)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid URL format'
        });
      }

      // Check if URL already exists
      const existingUrl = Array.from(urlStorage.values()).find(
        url => url.originalUrl === originalUrl
      );

      if (existingUrl) {
        return res.status(200).json({
          success: true,
          data: existingUrl
        });
      }

      // Generate short code
      let shortCode = customCode || generateShortCode();
      
      // Ensure unique short code
      while (urlStorage.has(shortCode)) {
        shortCode = generateShortCode();
      }

      const shortUrl: ShortUrl = {
        id: Date.now().toString(),
        originalUrl,
        shortCode,
        shortUrl: `${req.headers.host}/api/url-shortener/${shortCode}`,
        createdAt: new Date().toISOString(),
        clicks: 0,
        isActive: true
      };

      urlStorage.set(shortCode, shortUrl);

      res.status(201).json({
        success: true,
        data: shortUrl
      });
    } catch (error) {
      console.error('URL shortening error:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  } else if (req.method === 'GET') {
    // Get all URLs (for demo purposes)
    const urls = Array.from(urlStorage.values());
    res.status(200).json({
      success: true,
      data: urls as any
    });
  } else {
    res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }
}

// Handle redirects for short URLs
export async function getServerSideProps({ params }: { params: { shortCode: string } }) {
  const shortCode = params.shortCode;
  const shortUrl = urlStorage.get(shortCode);

  if (!shortUrl || !shortUrl.isActive) {
    return {
      notFound: true
    };
  }

  // Increment click count
  shortUrl.clicks++;
  urlStorage.set(shortCode, shortUrl);

  // Redirect to original URL
  return {
    redirect: {
      destination: shortUrl.originalUrl,
      permanent: false
    }
  };
}
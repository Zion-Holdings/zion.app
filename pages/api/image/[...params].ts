import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

import {logErrorToProduction} from '@/utils/productionLogger';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { params } = req.query as { params?: string | string[] };
  
  if (!Array.isArray(params) || params.length === 0) {
    res.status(400).json({ error: 'Invalid image path' });
    return;
  }

  // Reconstruct the image path
  const imagePath = params.join('/');
  const publicPath = path.join(process.cwd(), 'public', imagePath);
  
  // Security check: ensure the path is within public directory
  if (!publicPath.startsWith(path.join(process.cwd(), 'public'))) {
    res.status(403).json({ error: 'Forbidden path' });
    return;
  }

  try {
    // Check if file exists
    if (!fs.existsSync(publicPath)) {
      res.status(404).json({ error: 'Image not found' });
      return;
    }

    // Get file stats
    const stats = fs.statSync(publicPath);
    if (!stats.isFile()) {
      res.status(404).json({ error: 'Not a file' });
      return;
    }

    // Read the file
    const imageBuffer = fs.readFileSync(publicPath);
    
    // Determine content type based on file extension
    const ext = path.extname(publicPath).toLowerCase();
    let contentType = 'application/octet-stream';
    
    switch (ext) {
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
      case '.jpeg':
        contentType = 'image/jpeg';
        break;
      case '.gif':
        contentType = 'image/gif';
        break;
      case '.svg':
        contentType = 'image/svg+xml';
        break;
      case '.webp':
        contentType = 'image/webp';
        break;
      default:
        res.status(400).json({ error: 'Unsupported image format' });
        return;
    }

    // Set cache headers
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Length', imageBuffer.length.toString());
    
    // Send the image
    res.end(imageBuffer);
    
  } catch (error) {
    logErrorToProduction('Image serving error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 
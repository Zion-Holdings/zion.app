import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://ziontechgroup.netlify.app'
const PAGES_DIR = './pages'

// Priority mapping for different page types
const getPriority = (url) => {
  if (url === '/') return '1.0'
  if (url.includes('/marketplace') || url.includes('/services') || url.includes('/talents')) return '0.9'
  if (url.includes('/auth/') || url.includes('/about') || url.includes('/contact')) return '0.8'
  if (url.includes('/blog/') || url.includes('/ai-powered-')) return '0.8'
  if (url.includes('/products/')) return '0.7'
  return '0.6'
}

// Change frequency mapping
const getChangeFreq = (url) => {
  if (url === '/') return 'daily'
  if (url.includes('/blog/')) return 'weekly'
  if (url.includes('/products/')) return 'monthly'
  if (url.includes('/auth/')) return 'monthly'
  return 'weekly'
}

// Get all pages recursively
const getPages = (dir, basePath = '') => {
  const pages = []
  const items = fs.readdirSync(dir)
  
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    
    if (stat.isDirectory()) {
      // Skip API routes and special directories
      if (item.startsWith('_') || item === 'api') continue
      pages.push(...getPages(fullPath, path.join(basePath, item)))
    } else if (item.endsWith('.tsx') || item.endsWith('.js')) {
      // Convert file path to URL
      let url = path.join(basePath, item.replace(/\.(tsx|js)$/, ''))
      url = url.replace(/\\/g, '/') // Convert Windows paths
      
      // Handle dynamic routes
      url = url.replace(/\[([^\]]+)\]/g, ':$1')
      
      // Skip special files
      if (item.startsWith('_') || item === '404.tsx') continue
      
      pages.push(url)
    }
  }
  
  return pages
}

// Generate sitemap XML
const generateSitemap = () => {
  const pages = getPages(PAGES_DIR)
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  
  // Add homepage first
  xml += `  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`
  
  // Add all other pages
  for (const page of pages) {
    if (page === '') continue // Skip empty paths
    
    const url = `${BASE_URL}${page}`
    const priority = getPriority(page)
    const changefreq = getChangeFreq(page)
    
    xml += `  <url>
    <loc>${url}</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`
  }
  
  xml += '</urlset>'
  
  return xml
}

// Write sitemap to file
const writeSitemap = () => {
  try {
    const sitemap = generateSitemap()
    fs.writeFileSync('./public/sitemap.xml', sitemap)
    console.log('✅ Sitemap generated successfully!')
    console.log(`📄 Written to: ./public/sitemap.xml`)
    
    // Count URLs
    const urlCount = (sitemap.match(/<url>/g) || []).length
    console.log(`🔗 Total URLs: ${urlCount}`)
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
  }
}

writeSitemap() 
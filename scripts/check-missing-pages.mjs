import fs from 'fs'
import path from 'path'

const PAGES_DIR = './pages'
const PUBLIC_DIR = './public'

// Get all existing pages
const getExistingPages = () => {
  const pages = new Set()
  
  const scanPages = (dir, basePath = '') => {
    if (!fs.existsSync(dir)) return
    
    const items = fs.readdirSync(dir)
    
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        if (item.startsWith('_') || item === 'api') continue
        scanPages(fullPath, path.join(basePath, item))
      } else if (item.endsWith('.tsx') || item.endsWith('.js')) {
        if (item.startsWith('_') || item === '404.tsx') continue
        
        let url = path.join(basePath, item.replace(/\.(tsx|js)$/, ''))
        url = url.replace(/\\/g, '/')
        url = url.replace(/\[([^\]]+)\]/g, ':$1')
        
        if (url) pages.add("/" + url)
      }
    }
  }
  
  scanPages(PAGES_DIR)
  return pages
}

// Check for missing essential pages
const checkEssentialPages = () => {
  const essentialPages = [
    'about',
    'contact',
    'privacy-policy',
    'terms-of-service',
    'sitemap',
    'accessibility',
    'marketplace',
    'services',
    'talents',
    'equipment',
    'products',
    'blog',
    'auth/login',
    'auth/signup',
    'auth/forgot-password'
  ]
  
  const existingPages = getExistingPages()
  
  // Debug: Show what pages were found
  console.log('📁 Found pages:')
  Array.from(existingPages).sort().forEach(page => {
    console.log(`   ✓ ${page}`)
  })
  console.log()
  
  const missingPages = []
  
  for (const page of essentialPages) {
    if (!existingPages.has(page)) {
      missingPages.push(page)
    }
  }
  
  return missingPages
}

// Check sitemap and robots.txt
const checkSEOFiles = () => {
  const issues = []
  
  if (!fs.existsSync('./public/sitemap.xml')) {
    issues.push('Missing sitemap.xml')
  }
  
  if (!fs.existsSync('./public/robots.txt')) {
    issues.push('Missing robots.txt')
  }
  
  return issues
}

// Main check function
const checkMissingPages = () => {
  console.log('🔍 Checking for missing pages and SEO files...\n')
  
  const missingPages = checkEssentialPages()
  const seoIssues = checkSEOFiles()
  
  if (missingPages.length === 0 && seoIssues.length === 0) {
    console.log('✅ All essential pages and SEO files are present!')
    return
  }
  
  if (missingPages.length > 0) {
    console.log('❌ Missing essential pages:')
    missingPages.forEach(page => {
      console.log(`   - ${page}`)
    })
    console.log()
  }
  
  if (seoIssues.length > 0) {
    console.log('❌ SEO issues:')
    seoIssues.forEach(issue => {
      console.log(`   - ${issue}`)
    })
    console.log()
  }
  
  console.log('💡 Recommendations:')
  console.log('   - Create missing pages in the pages directory')
  console.log('   - Run "npm run sitemap" to generate sitemap')
  console.log('   - Ensure robots.txt is in public directory')
}

checkMissingPages() 
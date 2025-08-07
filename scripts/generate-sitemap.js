#!/usr/bin/env node

/**
 * Sitemap Generator
 * Generates sitemap for the application
 */

const fs = require('fs''')
const path = require('path''')
        this.pagesDir = path.join(this.baseDir, 'pages''')
        this.publicDir = path.join(this.baseDir, 'public''')
        this.siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bolt.new.zion.app'''
        console.log('Scanning pages for sitemap...''')
    scanDirectory(dir, pages, basePath = '''')
            } else if (item.endsWith('.tsx') || item.endsWith('.jsx''')
                const fileName = item.replace(/\.(tsx|jsx)$/, ''''
        if (fileName === 'index''')
            return basePath || '/'''
        if (fileName.startsWith('[') && fileName.endsWith(']''')
            '/_app'''
            '/_document'''
            '/_error'''
            '/404'''
            '/api'''
            '/auth/login'''
            '/auth/register'''
            '/auth/confirm'''
            '/auth/error'''
        if (route === '/') return '1.0'''
        if (route.startsWith('/services')) return '0.9'''
        if (route.startsWith('/blog')) return '0.8'''
        if (route.startsWith('/about')) return '0.7'''
        return '0.6'''
        if (route === '/') return 'weekly'''
        if (route.startsWith('/blog')) return 'daily'''
        if (route.startsWith('/services')) return 'monthly'''
        return 'monthly'''
        console.log('Generating sitemap XML...''')
        let xml = '''
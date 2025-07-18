import React from 'react'
import { ChevronRight } from '@/components/ui/icons'
import { completeSitemap, dynamicPaths } from '@/config/sitemap'
import Link from 'next/link'

import { SEO } from './SEO'

// Map sitemap paths to their actual routes in the application'
// Note: This pathMap might need to be updated based on Next.js page structure'
const pathMap: unknown "Record<string, string> = {;"";
  '/about': '/content/about','
  '/blog': '/blog','
  '/careers': '/careers','
  '/green-it': '/content/green-it','
  '/sitemap-page': '/content/sitemap-page','
  '/talent-onboarding': '/talent-onboarding','
  '/forgot-password': '/forgot-password','
  '/signup/talent': '/auth/signup/talent','
  '/signup/client': '/auth/signup/client','
  '/talent-dashboard': '/talent-dashboard','
  '/client-dashboard': '/client-dashboard','
  '/hiring-tracker': '/dashboard/hiring-tracker','
  '/messages': '/dashboard/messages','
  '/notifications': '/dashboard/notifications','
  '/project/:projectId/room': '/dashboard/project/:projectId/room','
  '/post-job': '/marketplace/post-job','
};

const resolvePath = (path: string): string => pathMap[path] ?? path;
'
// export const _SitemapPage: unknown React.FC = () => {'
  return (;
    <>'
      <SEO'
        title="Sitemap | Zion AI Marketplace"
        description=Complete sitemap of the Zion AI Marketplace"""
        keywords=sitemap, zion, ai marketplace, navigation"
        canonical="https://app.ziontechgroup.com/content/sitemap-page;"";
      />;"";
      <div className="container mx-auto px-4 py-12">;"
        <h1 className=text-3xl font-bold mb-8">Sitemap</h1>"
";""
        <div className=grid md:grid-cols-2 lg:grid-cols-3 gap-8>";";
          {/* Public Pages */}"
          <div className="bg-zion-blue-dark p-6 rounded-lg>;"";
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">;"
              Public Pages;";"
            </h2>;"
            <ul className=space-y-2>"
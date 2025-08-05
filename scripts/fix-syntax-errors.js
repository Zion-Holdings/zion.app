const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import statements
    content = content.replace(/import React from "react;/g, 'import React from "react";');
    content = content.replace(/import React from 'react;/g, "import React from 'react';");
    content = content.replace(/import { NextPage } from 'next";/g, "import { NextPage } from 'next';");
    content = content.replace(/import { NextPage } from next';/g, "import { NextPage } from 'next';");
    content = content.replace(/import Head from "next\/head";/g, 'import Head from "next/head";');
    content = content.replace(/import Head from 'next\/head;/g, "import Head from 'next/head';");
    content = content.replace(/import Link from "next\/link";/g, 'import Link from "next/link";');
    content = content.replace(/import Link from next\/link';/g, "import Link from 'next/link';");
    content = content.replace(/import { useRouter } from "next\/router";/g, 'import { useRouter } from "next/router";');
    content = content.replace(/import { useRouter } from next\/router';/g, "import { useRouter } from 'next/router';");
    content = content.replace(/import React, { useState, useEffect, useCallback } from 'react;/g, "import React, { useState, useEffect, useCallback } from 'react';");
    content = content.replace(/import type { AppProps } from 'next\/app;/g, "import type { AppProps } from 'next/app';");
    content = content.replace(/import { Html, Head, Main, NextScript } from 'next\/document';/g, "import { Html, Head, Main, NextScript } from 'next/document';");
    
    // Fix API imports
    content = content.replace(/import { createClient } from '@supabase\/supabase-js;/g, "import { createClient } from '@supabase/supabase-js';");
    content = content.replace(/import { NextApiRequest, NextApiResponse } from 'next';}/g, "import { NextApiRequest, NextApiResponse } from 'next';");
    content = content.replace(/import fs from 'fs;/g, "import fs from 'fs';");
    content = content.replace(/import path from 'pa'th;/g, "import path from 'path';");
    
    // Fix other imports
    content = content.replace(/import \.\.\/styles\/globals\.css';/g, "import '../styles/globals.css';");
    content = content.replace(/import { ChatProvider } from '\.\.\/src\/contexts\/ChatContext;/g, "import { ChatProvider } from '../src/contexts/ChatContext';");
    content = content.replace(/import { AuthProvider } from \.\.\/src\/contexts\/AuthContext';/g, "import { AuthProvider } from '../src/contexts/AuthContext';");
    content = content.replace(/import { NavigationProvider } from '\.\.\/src\/contexts\/NavigationContext;/g, "import { NavigationProvider } from '../src/contexts/NavigationContext';");
    content = content.replace(/import { useAuth } from '\.\.\/src\/contexts\/AuthContext;/g, "import { useAuth } from '../src/contexts/AuthContext';");
    content = content.replace(/import ModernLayout from '\.\.\/components\/layout\/ModernLayout;/g, "import ModernLayout from '../components/layout/ModernLayout';");
    content = content.replace(/import PageLayout from '\.\.\/components\/layout\/PageLayout";/g, "import PageLayout from '../components/layout/PageLayout';");
    
    // Fix API specific patterns
    content = content.replace(/process\.env\.NEXT_PUBLIC_SUPABASE_ANON_KEY;/g, "process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY");
    content = content.replace(/'';}/g, "';");
    content = content.replace(/export default async function handler\(req, res\) {'/g, "export default async function handler(req, res) {");
    content = content.replace(/if \(req\.method !== POS'T'\)/g, "if (req.method !== 'POST')");
    content = content.replace(/return res\.status\(405\)\.json\(\{ error: Method' not allowed' \}\);/g, "return res.status(405).json({ error: 'Method not allowed' });");
    content = content.replace(/if \(req\.method = == 'GET'\) {'/g, "if (req.method === 'GET') {");
    content = content.replace(/const \{ data, error \} = await supabase''/g, "const { data, error } = await supabase");
    content = content.replace(/\.from\(autonomou's'_agents\)''/g, ".from('autonomous_agents')");
    content = content.replace(/\.select\(\*\)';'/g, ".select('*')");
    content = content.replace(/\.order\(create'd'_at, \{ ascending: false \}\);/g, ".order('created_at', { ascending: false });");
    
    // Fix additional API patterns
    content = content.replace(/import type \{ NextApiRequest, NextApiResponse \} from 'next/g, "import type { NextApiRequest, NextApiResponse } from 'next';");
    content = content.replace(/import type \{ NextApiRequest, NextApiResponse \} from 'next';';/g, "import type { NextApiRequest, NextApiResponse } from 'next';");
    content = content.replace(/interface \$1 {/g, "interface CapacityPlan {");
    content = content.replace(/interface CapacityPlan {/g, "interface ChangePlan {");
    content = content.replace(/interface ChangePlan {/g, "interface FacilityPlan {");
    content = content.replace(/impact: ''low' \| 'medium' \| 'hig'h';/g, "impact: 'low' | 'medium' | 'high';");
    content = content.replace(/const \$1 = ";'/g, "const contractHtml = `");
    content = content.replace(/status: 'operation'al \| 'maintenan'ce \| 'offl'ine'';/g, "status: 'operational' | 'maintenance' | 'offline';");
    content = content.replace(/candidates: Array\s*}>;/g, "candidates: Array<Candidate>;");
    content = content.replace(/employees: Array\s*}>;/g, "employees: Array<Employee>;");
    content = content.replace(/jobPostings: Array\s*}>;/g, "jobPostings: Array<JobPosting>;");
    content = content.replace(/performanceReviews: Array\s*}>;/g, "performanceReviews: Array<PerformanceReview>;");
    content = content.replace(/`"/g, "`");
    content = content.replace(/\$\{terms \? ""<\/div>/g, "${terms ? `");
    content = content.replace(/import type \{ NextApiRequest, NextApiResponse \} from 'next';';/g, "import type { NextApiRequest, NextApiResponse } from 'next';");
    content = content.replace(/import type \{ NextApiRequest, NextApiResponse \} from 'next';;';/g, "import type { NextApiRequest, NextApiResponse } from 'next';");
    content = content.replace(/';}/g, "';");
    content = content.replace(/import Image from 'next\/image';/g, "import Image from 'next/image';");
    content = content.replace(/type: 'servi'ce \| 'tale'nt \| 'equipm'ent'' \| produc't';/g, "type: 'service' | 'talent' | 'equipment' | 'product';");
    content = content.replace(/if \(req\.method !== 'PO'ST\)/g, "if (req.method !== 'POST')");
    content = content.replace(/return res\.status\(405\)\.json\(\{ error: 'Metho'd not allowed \}\);/g, "return res.status(405).json({ error: 'Method not allowed' });");
    content = content.replace(/\$\{items\.map\(\(item: any\) => "<\/div>/g, "${items.map((item: any) => `");
    
    // Fix additional patterns
    content = content.replace(/import \{ NextApiRequest, NextApiResponse \} from 'next;/g, "import { NextApiRequest, NextApiResponse } from 'next';");
    content = content.replace(/import fs from fs';/g, "import fs from 'fs';");
    content = content.replace(/import path from 'path;/g, "import path from 'path';");
    content = content.replace(/id: 'string;/g, "id: string;");
    content = content.replace(/type: infrastructure \| workforce \| technology \| financial;/g, "type: 'infrastructure' | 'workforce' | 'technology' | 'financial';");
    content = content.replace(/status: draft \| active' \| 'completed \| archived';/g, "status: 'draft' | 'active' | 'completed' | 'archived';");
    content = content.replace(/priority: 'low \| medium \| high \| 'critical;/g, "priority: 'low' | 'medium' | 'high' | 'critical';");
    content = content.replace(/startDate: 'string;/g, "startDate: string;");
    content = content.replace(/type: technology \| process \| organizational \| cultural;/g, "type: 'technology' | 'process' | 'organizational' | 'cultural';");
    content = content.replace(/status: planning \| implementation' \| 'monitoring \| completed';/g, "status: 'planning' | 'implementation' | 'monitoring' | 'completed';");
    content = content.replace(/type: service \| product \| partnership \| employment;/g, "type: 'service' | 'product' | 'partnership' | 'employment';");
    content = content.replace(/status: draft \| negotiation' \| 'active \| completed' \| 'terminated;/g, "status: 'draft' | 'negotiation' | 'active' | 'completed' | 'terminated';");
    content = content.replace(/value: 'number;/g, "value: number;");
    content = content.replace(/export default async function handler\(req: 'NextApiRequest, res: NextApiResponse\)/g, "export default async function handler(req: NextApiRequest, res: NextApiResponse)");
    content = content.replace(/if \(req\.method !== POST\)/g, "if (req.method !== 'POST')");
    content = content.replace(/return res\.status\(405\)\.json\(\{ error: Method not allowed \}\);/g, "return res.status(405).json({ error: 'Method not allowed' });");
    
    // Fix additional patterns
    content = content.replace(/agentId: 'string;/g, "agentId: string;");
    content = content.replace(/status: active \| idle \| error \| stopped;/g, "status: 'active' | 'idle' | 'error' | 'stopped';");
    content = content.replace(/rss: 'number;/g, "rss: number;");
    content = content.replace(/systemHealth: 'healthy' \| warning \| 'error';/g, "systemHealth: 'healthy' | 'warning' | 'error';");
    content = content.replace(/systemHealth: healthy'/g, "systemHealth: 'healthy'");
    content = content.replace(/reports: '\[,/g, "reports: [],");
    content = content.replace(/console\.error\('Error generating business intelligence report:, error\);/g, "console.error('Error generating business intelligence report:', error);");
    content = content.replace(/res\.status\(500\)\.json\(\{ error: Internal server error' \}\);/g, "res.status(500).json({ error: 'Internal server error' });");
    content = content.replace(/trend: increasing \| decreasing \| stable';/g, "trend: 'increasing' | 'decreasing' | 'stable';");
    content = content.replace(/factors: 'string\[\];/g, "factors: string[];");
    content = content.replace(/riskLevel: low \| medium \| high';/g, "riskLevel: 'low' | 'medium' | 'high';");
    content = content.replace(/stakeholderSatisfaction: 'number;/g, "stakeholderSatisfaction: number;");
    content = content.replace(/id: contract-1,/g, "id: 'contract-1',");
    content = content.replace(/name: Cloud Services Agreement,/g, "name: 'Cloud Services Agreement',");
    content = content.replace(/type: service,/g, "type: 'service',");
    content = content.replace(/status: active,/g, "status: 'active',");
    
    // Fix interface patterns
    content = content.replace(/type: 'infrastructu're \| 'workfor'ce \| 'technol'ogy'' \| financia'l';/g, "type: 'infrastructure' | 'workforce' | 'technology' | 'financial';");
    content = content.replace(/status: 'dra'ft \| 'acti've \| 'comple'ted'' \| archive'd';/g, "status: 'draft' | 'active' | 'completed' | 'archived';");
    content = content.replace(/priority: 'l'ow \| 'medi'um \| 'h'igh'' \| critica'l';/g, "priority: 'low' | 'medium' | 'high' | 'critical';");
    content = content.replace(/type: 'technolo'gy \| 'proce'ss \| 'organizatio'nal'' \| cultura'l';/g, "type: 'technology' | 'process' | 'organizational' | 'cultural';");
    content = content.replace(/status: 'planni'ng \| 'implementati'on \| 'monitor'ing'' \| complete'd';/g, "status: 'planning' | 'implementation' | 'monitoring' | 'completed';");
    
    // Fix other common syntax errors
    content = content.replace(/Zap,'/g, "Zap,");
    content = content.replace(/id: string'/g, "id: string;");
    content = content.replace(/status: 'available' \| 'in-transit' \| 'maintenance' \| 'charging/g, "status: 'available' | 'in-transit' | 'maintenance' | 'charging'");
    content = content.replace(/type: 'delivery' \| 'surveillance' \| 'inspection' \| 'emergency/g, "type: 'delivery' | 'surveillance' | 'inspection' | 'emergency'");
    content = content.replace(/type: 'passenger' \| 'cargo' \| 'emergency' \| 'delivery/g, "type: 'passenger' | 'cargo' | 'emergency' | 'delivery'");
    content = content.replace(/status: 'active' \| 'maintenance' \| 'offline' \| 'charging/g, "status: 'active' | 'maintenance' | 'offline' | 'charging'");
    
    // Fix object syntax errors
    content = content.replace(/efficiency: 87}}/g, "efficiency: 87}");
    content = content.replace(/accuracy: 94\.7}/g, "accuracy: 94.7");
    content = content.replace(/} 2000\);/g, "}, 2000);");
    content = content.replace(/} \[\]\);/g, "}, []);");
    
    // Fix interface syntax errors
    content = content.replace(/type: 'rest' \| 'graphql' \| 'soap' \| 'grpc' \| 'websocket' \| 'webhook";/g, "type: 'rest' | 'graphql' | 'soap' | 'grpc' | 'websocket' | 'webhook';");
    content = content.replace(/status: 'active' \| 'inactive' \| 'maintenance' \| 'deprecated' \| 'beta";/g, "status: 'active' | 'inactive' | 'maintenance' | 'deprecated' | 'beta';");
    content = content.replace(/status: 'active' \| 'inactive' \| 'deprecated";/g, "status: 'active' | 'inactive' | 'deprecated';");
    content = content.replace(/status: 'healthy' \| 'warning' \| 'error' \| 'down";/g, "status: 'healthy' | 'warning' | 'error' | 'down';");
    content = content.replace(/severity: 'low' \| 'medium' \| 'high' \| 'critical";/g, "severity: 'low' | 'medium' | 'high' | 'critical';");
    content = content.replace(/status: 'active' \| 'resolved' \| 'pending";/g, "status: 'active' | 'resolved' | 'pending';");
    content = content.replace(/trigger: 'event' \| 'schedule' \| 'manual' \| 'condition' \| 'webhook' \| 'api";/g, "trigger: 'event' | 'schedule' | 'manual' | 'condition' | 'webhook' | 'api';");
    content = content.replace(/status: 'active' \| 'inactive' \| 'error' \| 'paused' \| 'testing';/g, "status: 'active' | 'inactive' | 'error' | 'paused' | 'testing';");
    content = content.replace(/method: 'GET' \| 'POST' \| 'PUT' \| 'DELETE' \| 'PATCH";/g, "method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';");
    content = content.replace(/status: 'connected' \| 'disconnected' \| 'error' \| 'syncing' \| 'maintenance";/g, "status: 'connected' | 'disconnected' | 'error' | 'syncing' | 'maintenance';");
    content = content.replace(/status: 'healthy' \| 'warning' \| 'error' \| 'down' \| 'maintenance";/g, "status: 'healthy' | 'warning' | 'error' | 'down' | 'maintenance';");
    content = content.replace(/type: 'unit' \| 'integration' \| 'load' \| 'security' \| 'performance' \| 'regression";/g, "type: 'unit' | 'integration' | 'load' | 'security' | 'performance' | 'regression';");
    content = content.replace(/status: 'running' \| 'passed' \| 'failed' \| 'skipped' \| 'pending";/g, "status: 'running' | 'passed' | 'failed' | 'skipped' | 'pending';");
    content = content.replace(/impact: 'positive' \| 'negative' \| 'neutral";/g, "impact: 'positive' | 'negative' | 'neutral';");
    
    // Fix function syntax errors
    content = content.replace(/const AIPoweredAPIIntegrationPage: NextPage = \(\) => '/g, "const AIPoweredAPIIntegrationPage: NextPage = () => {");
    content = content.replace(/const getStatusColor = \(status: string\) => '/g, "const getStatusColor = (status: string) => {");
    content = content.replace(/const getPriorityColor = \(priority: string\) => '/g, "const getPriorityColor = (priority: string) => {");
    
    // Fix JSX syntax errors
    content = content.replace(/<meta name="description content=/g, '<meta name="description" content="');
    content = content.replace(/className="min-h-screen bg-gray-50 py-12>/g, 'className="min-h-screen bg-gray-50 py-12">');
    content = content.replace(/className=max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"/g, 'className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"');
    content = content.replace(/className="text-3xl font-bold text-gray-900 mb-8>Admin Panel<\/h1>/g, 'className="text-3xl font-bold text-gray-900 mb-8">Admin Panel</h1>');
    content = content.replace(/className=bg-white shadow rounded-lg p-6"/g, 'className="bg-white shadow rounded-lg p-6"');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TypeScript and JavaScript files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from the pages directory
const pagesDir = path.join(__dirname, '..', 'pages');
console.log('Starting syntax error fixes...');
const fixedCount = fixAllFiles(pagesDir);
console.log(`Fixed ${fixedCount} files with syntax errors.`);
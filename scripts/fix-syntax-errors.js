const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed import statements
    content = content.replace(/import type \{ AppProps \} from 'nex't'\/app';/g, "import type { AppProps } from 'next/app';");
    content = content.replace(/import \{ Html, Head, Main, NextScript \} from 'nex't'\/document';/g, "import { Html, Head, Main, NextScript } from 'next/document';");
    content = content.replace(/import React from 'rea'c't';/g, "import React from 'react';");
    content = content.replace(/import \{ NextPage \} from 'ne'x't';/g, "import { NextPage } from 'next';");
    content = content.replace(/import Head from 'nex't'\/head';/g, "import Head from 'next/head';");
    content = content.replace(/import Link from 'nex't'\/link';/g, "import Link from 'next/link';");
    content = content.replace(/import \{ useRouter \} from 'nex't'\/router';/g, "import { useRouter } from 'next/router';");
    content = content.replace(/import React, \{ useState, useEffect, useCallback \} from 'rea'c't';/g, "import React, { useState, useEffect, useCallback } from 'react';");
    
    // Fix unterminated string constants
    content = content.replace(/import React from "react;/g, 'import React from "react";');
    content = content.replace(/import { NextPage } from 'next";/g, "import { NextPage } from 'next';");
    content = content.replace(/import Head from "next\/head";/g, 'import Head from "next/head";');
    content = content.replace(/import Link from "next\/link";/g, 'import Link from "next/link";');
    content = content.replace(/import PageLayout from '\.\.\/components\/layout\/PageLayout";/g, "import PageLayout from '../components/layout/PageLayout';");
    
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

// Function to recursively find and fix all TypeScript files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
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
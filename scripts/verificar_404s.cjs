#!/usr/bin/env node
/**
 * verificar_404s.cjs
 * Verifica quais URLs do sitemap podem estar retornando 404
 */

const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const sitemapPath = path.join(repo, 'public', 'sitemap.xml');
const redirectsPath = path.join(repo, 'public', '_redirects');

// Ler sitemap
const sitemapContent = fs.existsSync(sitemapPath) 
  ? fs.readFileSync(sitemapPath, 'utf8') 
  : '';

// Extrair URLs do sitemap
const sitemapUrls = new Set();
const urlRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
let match;
while ((match = urlRegex.exec(sitemapContent)) !== null) {
  // Converter para rota relativa
  const url = match[1];
  const route = url.replace('https://ziontechgroup.com', '').replace(/\/$/, '');
  sitemapUrls.add(route === '' ? '/' : route);
}

// Ler redirects
const redirectRoutes = new Set();
const redirectContent = fs.existsSync(redirectsPath) 
  ? fs.readFileSync(redirectsPath, 'utf8') 
  : '';

const redirectRegex = /^(\/[^ ]+)\s+/gm;
while ((match = redirectRegex.exec(redirectContent)) !== null) {
  if (!match[1]?.startsWith('#')) {
    const route = match[1].replace(/\/$/, '');
    redirectRoutes.add(route === '' ? '/' : route);
  }
}

// Encontrar rotas de redirects não em sitemap
const missingRoutes = [];
for (const route of redirectRoutes) {
  if (!sitemapUrls.has(route) && route !== '/') {
    missingRoutes.push(route);
  }
}

console.log('=== Verificação de Rotas 404 ===');
console.log(`URLs no sitemap: ${sitemapUrls.size}`);
console.log(`Rotas em redirects: ${redirectRoutes.size}`);
console.log(`Rotas faltando no sitemap: ${missingRoutes.length}`);

if (missingRoutes.length > 0) {
  console.log('\nRotas que precisam ser adicionadas ao sitemap:');
  missingRoutes.slice(0, 50).forEach(r => console.log(`  ${r}`));
  if (missingRoutes.length > 50) {
    console.log(`  ... mais ${missingRoutes.length - 50} rotas`);
  }
}

// Verificar URLs Hermes específicas no sitemap
const hermesRoutes = Array.from(sitemapUrls).filter(r => r.includes('hermes'));
console.log(`\nURLs Hermes no sitemap: ${hermesRoutes.length}`);
hermesRoutes.forEach(r => console.log(`  ${r}`));

console.log('\n=== Status: Verificação concluída ===');
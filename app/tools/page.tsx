import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Tools | Zion Tech Group',
  description: 'Free developer tools and utilities from Zion Tech Group.',
  openGraph: {
    title: 'Tools | Zion Tech Group',
    description: 'Utilities for JSON, JWT, regex, UUID, QR, and text processing.',
    url: 'https://ziontechgroup.com/tools/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tools | Zion Tech Group',
    description: 'Utilities for JSON, JWT, regex, UUID, QR, and text processing.',
  },
  alternates: { canonical: '/tools/' },
};

/*
 * The tool card grid below is GENERATED. Do not hand-edit it, and do not remove
 * cards because a matching `app/tools/<slug>/` route does not exist.
 *
 * Every tool is a self-contained static page at `public/tools/<slug>/index.html`,
 * which Next.js copies verbatim into the export. There is intentionally no app
 * route for them, so any check that infers "orphan link" from the absence of an
 * `app/` directory will wrongly delete working, deployed pages.
 *
 * Source of truth: `public/tools/`. Regenerate with:
 *     python3 scripts/sync_tools_page.py
 * CI (.github/workflows/deploy.yml) fails the build if this grid or
 * public/sitemap.xml drifts from what is on disk.
 */
export default function ToolsPage() {
  return (
<>
    <StandardPage
      title="Developer Tools"
      subtitle="Free utilities built by Zion. No sign-up required."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <a href="/tools/agent-prompt-builder/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Agent Prompt Builder</h3>
          <p className="text-slate-400 text-sm">Build, test, and optimize prompts for AI agents — with templates, variable injection, a...</p>
        </a>
        <a href="/tools/ai-roi-calculator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Ai Roi Calculator</h3>
          <p className="text-slate-400 text-sm">Free AI ROI calculator from Zion Tech Group: estimate the potential return on AI invest...</p>
        </a>
        <a href="/tools/api-health-check/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Api Health Check</h3>
          <p className="text-slate-400 text-sm">Check your API endpoint health: HTTP status, response time, SSL certificate, and securi...</p>
        </a>
        <a href="/tools/base64-encoder/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Base64 Encoder</h3>
          <p className="text-slate-400 text-sm">Encode and decode Base64 with UTF-8 support.</p>
        </a>
        <a href="/tools/base64-image/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Base64 Image Encoder</h3>
          <p className="text-slate-400 text-sm">Encode images to Base64 data URIs.</p>
        </a>
        <a href="/tools/blog-post-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Blog Post Generator</h3>
          <p className="text-slate-400 text-sm">Draft blog outlines and introductions.</p>
        </a>
        <a href="/tools/case-converter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Case Converter</h3>
          <p className="text-slate-400 text-sm">Convert between 9 text cases instantly.</p>
        </a>
        <a href="/tools/cloud-cost-calculator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Cloud Cost Calculator</h3>
          <p className="text-slate-400 text-sm">Estimate your cloud cost savings by category — compute, storage, networking. Get a pers...</p>
        </a>
        <a href="/tools/cloud-cost-optimizer/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Cloud Cost Optimizer</h3>
          <p className="text-slate-400 text-sm">Cloud Cost Optimizer — Zion Tech Group.</p>
        </a>
        <a href="/tools/color-contrast/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Color Contrast Checker</h3>
          <p className="text-slate-400 text-sm">Check WCAG AA/AAA contrast ratios.</p>
        </a>
        <a href="/tools/color-converter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Color Converter</h3>
          <p className="text-slate-400 text-sm">Convert between HEX, RGB, and HSL with live preview.</p>
        </a>
        <a href="/tools/color-palette-gen/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Color Palette Generator</h3>
          <p className="text-slate-400 text-sm">Generate palettes and export as CSS or JSON.</p>
        </a>
        <a href="/tools/color-picker/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Color Picker</h3>
          <p className="text-slate-400 text-sm">Pick colors with HEX/RGB/HSL values.</p>
        </a>
        <a href="/tools/cron-agent-calculator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Cron Agent Calculator</h3>
          <p className="text-slate-400 text-sm">Calculate cron intervals, agent workload, and API rate limits for multi-agent swarms.</p>
        </a>
        <a href="/tools/cron-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Cron Generator</h3>
          <p className="text-slate-400 text-sm">Build cron expressions from a schedule.</p>
        </a>
        <a href="/tools/cron-next-runs/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Cron Next Runs</h3>
          <p className="text-slate-400 text-sm">Calculate the next scheduled runs for any cron expression — see upcoming execution time...</p>
        </a>
        <a href="/tools/cron-parser/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Cron Parser</h3>
          <p className="text-slate-400 text-sm">Parse and explain cron expressions.</p>
        </a>
        <a href="/tools/css-box-shadow/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Css Box Shadow</h3>
          <p className="text-slate-400 text-sm">Free online css-box-shadow tool by Zion Tech Group</p>
        </a>
        <a href="/tools/css-minifier/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">CSS Minifier</h3>
          <p className="text-slate-400 text-sm">Minify CSS and see size savings.</p>
        </a>
        <a href="/tools/css-minifier-pro/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">CSS Minifier Pro</h3>
          <p className="text-slate-400 text-sm">Minify CSS with advanced options.</p>
        </a>
        <a href="/tools/csv-to-json/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Csv To Json</h3>
          <p className="text-slate-400 text-sm">Convert CSV files to JSON format instantly — with options for array, object, and key-va...</p>
        </a>
        <a href="/tools/date-diff/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Date Diff</h3>
          <p className="text-slate-400 text-sm">Calculate the difference between two dates — days, weeks, months, years, and even busin...</p>
        </a>
        <a href="/tools/duration-calculator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Duration Calculator</h3>
          <p className="text-slate-400 text-sm">Free online duration-calculator tool by Zion Tech Group</p>
        </a>
        <a href="/tools/env-converter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Env Converter</h3>
          <p className="text-slate-400 text-sm">Free online env-converter tool by Zion Tech Group</p>
        </a>
        <a href="/tools/excel-to-json/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Excel to JSON</h3>
          <p className="text-slate-400 text-sm">Convert CSV/TSV data to JSON.</p>
        </a>
        <a href="/tools/gradient-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">CSS Gradient Generator</h3>
          <p className="text-slate-400 text-sm">Design CSS gradients visually.</p>
        </a>
        <a href="/tools/hash-checker/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Hash Checker</h3>
          <p className="text-slate-400 text-sm">Compare hashes to verify integrity.</p>
        </a>
        <a href="/tools/hash-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Hash Generator</h3>
          <p className="text-slate-400 text-sm">Generate SHA-1, SHA-256, SHA-384, SHA-512 hashes.</p>
        </a>
        <a href="/tools/header-analyzer/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Header Analyzer</h3>
          <p className="text-slate-400 text-sm">Free online header-analyzer tool by Zion Tech Group</p>
        </a>
        <a href="/tools/html-entities/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">HTML Entities</h3>
          <p className="text-slate-400 text-sm">Encode and decode HTML entities.</p>
        </a>
        <a href="/tools/http-status/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">HTTP Status Codes</h3>
          <p className="text-slate-400 text-sm">Browse and search HTTP status codes.</p>
        </a>
        <a href="/tools/id-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Id Generator</h3>
          <p className="text-slate-400 text-sm">Free online id-generator tool by Zion Tech Group</p>
        </a>
        <a href="/tools/image-resize/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Image Resize</h3>
          <p className="text-slate-400 text-sm">Resize images with aspect ratio lock.</p>
        </a>
        <a href="/tools/image-to-base64/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Image to Base64</h3>
          <p className="text-slate-400 text-sm">Convert images to base64 strings.</p>
        </a>
        <a href="/tools/js-minifier/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JS Minifier</h3>
          <p className="text-slate-400 text-sm">Minify JavaScript and see size savings.</p>
        </a>
        <a href="/tools/js-obfuscator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JS Obfuscator</h3>
          <p className="text-slate-400 text-sm">Obfuscate JavaScript code.</p>
        </a>
        <a href="/tools/json-diff/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JSON Diff</h3>
          <p className="text-slate-400 text-sm">Compare two JSON objects and highlight differences.</p>
        </a>
        <a href="/tools/json-formatter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JSON Formatter</h3>
          <p className="text-slate-400 text-sm">Format, minify, and validate JSON quickly.</p>
        </a>
        <a href="/tools/json-query/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Json Query</h3>
          <p className="text-slate-400 text-sm">Query, filter, and extract data from JSON using path expressions — like jq in your brow...</p>
        </a>
        <a href="/tools/json-schema-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JSON Schema Generator</h3>
          <p className="text-slate-400 text-sm">Infer a JSON Schema from sample JSON.</p>
        </a>
        <a href="/tools/json-schema-validator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Json Schema Validator</h3>
          <p className="text-slate-400 text-sm">Generate JSON Schema from JSON data and validate JSON against schemas. 100% client-side...</p>
        </a>
        <a href="/tools/json-to-csv/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JSON to CSV</h3>
          <p className="text-slate-400 text-sm">Convert JSON arrays to CSV.</p>
        </a>
        <a href="/tools/json-to-yaml/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JSON to YAML</h3>
          <p className="text-slate-400 text-sm">Convert JSON to YAML instantly.</p>
        </a>
        <a href="/tools/jwt-decoder/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JWT Decoder</h3>
          <p className="text-slate-400 text-sm">Inspect header and payload without sending data anywhere.</p>
        </a>
        <a href="/tools/jwt-decoder-pro/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JWT Decoder Pro</h3>
          <p className="text-slate-400 text-sm">Decode JWTs and inspect algorithm details.</p>
        </a>
        <a href="/tools/jwt-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JWT Generator</h3>
          <p className="text-slate-400 text-sm">Build signed JWTs for testing.</p>
        </a>
        <a href="/tools/list-sorter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">List Sorter</h3>
          <p className="text-slate-400 text-sm">Free online list-sorter tool by Zion Tech Group</p>
        </a>
        <a href="/tools/llm-comparison/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Llm Comparison</h3>
          <p className="text-slate-400 text-sm">Compare language models side-by-side on price, context window, speed, and capability —...</p>
        </a>
        <a href="/tools/llm-payload-estimator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Llm Payload Estimator</h3>
          <p className="text-slate-400 text-sm">Estimate token counts and request costs across leading LLM providers.</p>
        </a>
        <a href="/tools/loan-calculator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Loan Calculator</h3>
          <p className="text-slate-400 text-sm">Free online loan-calculator tool by Zion Tech Group</p>
        </a>
        <a href="/tools/lorem-ipsum/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Lorem Ipsum Generator</h3>
          <p className="text-slate-400 text-sm">Generate placeholder text.</p>
        </a>
        <a href="/tools/lorem-ipsum-pro/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Lorem Ipsum Pro</h3>
          <p className="text-slate-400 text-sm">Paragraphs, sentences, or words on demand.</p>
        </a>
        <a href="/tools/markdown-preview/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Markdown Preview</h3>
          <p className="text-slate-400 text-sm">Markdown Preview — Zion Tech Group.</p>
        </a>
        <a href="/tools/markdown-previewer/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Markdown Previewer</h3>
          <p className="text-slate-400 text-sm">Preview markdown rendering in real-time.</p>
        </a>
        <a href="/tools/markdown-to-html/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Markdown to HTML</h3>
          <p className="text-slate-400 text-sm">Convert Markdown to HTML instantly.</p>
        </a>
        <a href="/tools/mcp-tester/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Mcp Tester</h3>
          <p className="text-slate-400 text-sm">Free MCP (Model Context Protocol) tester from Zion Tech Group: verify MCP server connec...</p>
        </a>
        <a href="/tools/md5-hash/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">MD5 Hash</h3>
          <p className="text-slate-400 text-sm">Generate MD5 hashes from text or files.</p>
        </a>
        <a href="/tools/meta-tag-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Meta Tag Generator</h3>
          <p className="text-slate-400 text-sm">Generate SEO and Open Graph meta tags.</p>
        </a>
        <a href="/tools/mime-lookup/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">MIME Type Lookup</h3>
          <p className="text-slate-400 text-sm">Find MIME types by extension or category.</p>
        </a>
        <a href="/tools/number-base-converter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Number Base Converter</h3>
          <p className="text-slate-400 text-sm">Convert between binary, octal, decimal, hex.</p>
        </a>
        <a href="/tools/og-preview/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Og Preview</h3>
          <p className="text-slate-400 text-sm">Free online og-preview tool by Zion Tech Group</p>
        </a>
        <a href="/tools/password-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Password Generator</h3>
          <p className="text-slate-400 text-sm">Generate secure, customizable passwords.</p>
        </a>
        <a href="/tools/password-generator-pro/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Password Generator Pro</h3>
          <p className="text-slate-400 text-sm">Advanced generator with strength meter.</p>
        </a>
        <a href="/tools/password-strength/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Password Strength</h3>
          <p className="text-slate-400 text-sm">Analyze entropy and estimated crack time.</p>
        </a>
        <a href="/tools/percentage-calculator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Percentage Calculator</h3>
          <p className="text-slate-400 text-sm">Percentages, percent change, and discounts.</p>
        </a>
        <a href="/tools/phishing-analyzer/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Phishing Analyzer</h3>
          <p className="text-slate-400 text-sm">Free phishing analyzer tool from Zion Tech Group. Inspect links, headers, and risk sign...</p>
        </a>
        <a href="/tools/qr-code-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">QR Code Generator</h3>
          <p className="text-slate-400 text-sm">Generate and download QR codes instantly.</p>
        </a>
        <a href="/tools/qr-scanner/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">QR Scanner</h3>
          <p className="text-slate-400 text-sm">Decode QR codes from an uploaded image.</p>
        </a>
        <a href="/tools/readability-score/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Readability Score</h3>
          <p className="text-slate-400 text-sm">Measure the readability of any text — Flesch-Kincaid, Gunning Fog, SMOG, and more reada...</p>
        </a>
        <a href="/tools/regex-cheat-sheet/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Regex Cheat Sheet</h3>
          <p className="text-slate-400 text-sm">Searchable regex syntax reference.</p>
        </a>
        <a href="/tools/regex-tester/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Regex Tester</h3>
          <p className="text-slate-400 text-sm">Test patterns and matches in real time.</p>
        </a>
        <a href="/tools/robots-sitemap/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Robots Sitemap</h3>
          <p className="text-slate-400 text-sm">Free online robots-sitemap tool by Zion Tech Group</p>
        </a>
        <a href="/tools/security-headers-analyzer/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Security Headers Analyzer</h3>
          <p className="text-slate-400 text-sm">Analyze HTTP response headers for security best practices and get a security grade.</p>
        </a>
        <a href="/tools/sql-formatter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Sql Formatter</h3>
          <p className="text-slate-400 text-sm">Sql Formatter — Zion Tech Group.</p>
        </a>
        <a href="/tools/sql-query-builder/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">SQL Query Builder</h3>
          <p className="text-slate-400 text-sm">Build SELECT, INSERT, UPDATE, DELETE queries.</p>
        </a>
        <a href="/tools/subnet-calculator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Subnet Calculator</h3>
          <p className="text-slate-400 text-sm">Calculate subnet masks, CIDR notation, network addresses, broadcast addresses, and host...</p>
        </a>
        <a href="/tools/text-analyzer/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Text Analyzer</h3>
          <p className="text-slate-400 text-sm">Counts, reading time, and keyword density.</p>
        </a>
        <a href="/tools/text-compare/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Text Compare</h3>
          <p className="text-slate-400 text-sm">Compare two texts side-by-side.</p>
        </a>
        <a href="/tools/text-diff/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Text Diff</h3>
          <p className="text-slate-400 text-sm">Highlight differences between two texts.</p>
        </a>
        <a href="/tools/text-encrypt/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Text Encrypt</h3>
          <p className="text-slate-400 text-sm">Free online text-encrypt tool by Zion Tech Group</p>
        </a>
        <a href="/tools/text-slug/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Text to Slug</h3>
          <p className="text-slate-400 text-sm">Convert text to URL-friendly slugs.</p>
        </a>
        <a href="/tools/text-to-speech/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Text to Speech</h3>
          <p className="text-slate-400 text-sm">Read text aloud with browser voices.</p>
        </a>
        <a href="/tools/timestamp-converter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Timestamp Converter</h3>
          <p className="text-slate-400 text-sm">Convert Unix timestamps to dates and vice versa.</p>
        </a>
        <a href="/tools/timestamp-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Timestamp Generator</h3>
          <p className="text-slate-400 text-sm">Generate Unix timestamps for any date.</p>
        </a>
        <a href="/tools/timestamp-to-cron/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Timestamp to Cron</h3>
          <p className="text-slate-400 text-sm">Turn a specific time into a cron expression.</p>
        </a>
        <a href="/tools/unit-converter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Unit Converter</h3>
          <p className="text-slate-400 text-sm">Length, weight, temperature, data, speed, area.</p>
        </a>
        <a href="/tools/url-encoder/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">URL Encoder</h3>
          <p className="text-slate-400 text-sm">Encode and decode URLs with UTF-8 support.</p>
        </a>
        <a href="/tools/url-parser/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">URL Parser</h3>
          <p className="text-slate-400 text-sm">Break a URL into its components.</p>
        </a>
        <a href="/tools/user-agent-parser/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">User Agent Parser</h3>
          <p className="text-slate-400 text-sm">User Agent Parser — Zion Tech Group.</p>
        </a>
        <a href="/tools/uuid-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">UUID Generator</h3>
          <p className="text-slate-400 text-sm">Generate UUID v4 identifiers instantly.</p>
        </a>
        <a href="/tools/word-counter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Word Counter</h3>
          <p className="text-slate-400 text-sm">Count words, characters, and reading time.</p>
        </a>
        <a href="/tools/yaml-formatter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">YAML Formatter</h3>
          <p className="text-slate-400 text-sm">Format and validate YAML.</p>
        </a>
        <a href="/tools/yaml-to-json/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">YAML to JSON</h3>
          <p className="text-slate-400 text-sm">Convert YAML to JSON instantly.</p>
        </a>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Tooling philosophy</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Built for speed with no sign-up or backend dependency.</li>
          <li>Privacy-first: inputs stay in your browser and are never stored.</li>
          <li>Expanded based on real developer workflow needs.</li>
          <li>Request new utilities through our contact form.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/services/" className="btn-primary text-center">Browse services</a>
          <a href="/contact/" className="btn-secondary text-center">Request a tool</a>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">Explore related offerings</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link href="/services/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Enterprise Services</h3>
            <p className="text-slate-400 text-xs mb-3">AI, IT, security, and data programs with measurable outcomes.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View services →</span>
          </Link>
          <Link href="/solutions/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Industry Solutions</h3>
            <p className="text-slate-400 text-xs mb-3">Purpose-built AI and IT solutions by industry.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View solutions →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs mb-3">Practical guidance on AI, IT, automation, and enterprise delivery.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}
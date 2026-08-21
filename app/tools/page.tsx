import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Tools | Zion Tech Group',
  description: 'Free AI/IT tools for service recommendations, comparisons, SSL checks, and more.',
  openGraph: {
    title: 'Tools | Zion Tech Group',
    description: 'Free AI/IT tools for service recommendations, comparisons, SSL checks.',
    url: 'https://ziontechgroup.com/tools/',
    type: 'website',
  },
  alternates: { canonical: '/tools/' },
};

export default function ToolsPage() {
  return (
    <>
    <JsonLd data={
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Zion Tech Group Tools",
  "description": "Free AI/IT tools for service recommendations, comparisons, SSL checks, and more.",
  "applicationCategory": "BusinessApplication",
  "applicationSuite": "Zion Tech Group Tools",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com"
  },
  "url": "https://ziontechgroup.com/tools/",
  "@id": "https://ziontechgroup.com/tools/",
  "hasPart": [
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/agent-prompt-builder/",
      "name": "Agent Prompt Builder",
      "description": "Interactive tool: Agent Prompt Builder.",
      "url": "https://ziontechgroup.com/tools/agent-prompt-builder/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/ai-roi-calculator/",
      "name": "Ai Roi Calculator",
      "description": "Interactive tool: Ai Roi Calculator.",
      "url": "https://ziontechgroup.com/tools/ai-roi-calculator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/api-health-check/",
      "name": "Api Health Check",
      "description": "Interactive tool: Api Health Check.",
      "url": "https://ziontechgroup.com/tools/api-health-check/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/base64-encoder/",
      "name": "Base64 Encoder",
      "description": "Interactive tool: Base64 Encoder.",
      "url": "https://ziontechgroup.com/tools/base64-encoder/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/blog-post-generator/",
      "name": "Blog Post Generator",
      "description": "Interactive tool: Blog Post Generator.",
      "url": "https://ziontechgroup.com/tools/blog-post-generator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/cloud-cost-calculator/",
      "name": "Cloud Cost Calculator",
      "description": "Interactive tool: Cloud Cost Calculator.",
      "url": "https://ziontechgroup.com/tools/cloud-cost-calculator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/cloud-cost-optimizer/",
      "name": "Cloud Cost Optimizer",
      "description": "Interactive tool: Cloud Cost Optimizer.",
      "url": "https://ziontechgroup.com/tools/cloud-cost-optimizer/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/color-contrast/",
      "name": "Color Contrast",
      "description": "Interactive tool: Color Contrast.",
      "url": "https://ziontechgroup.com/tools/color-contrast/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/color-converter/",
      "name": "Color Converter",
      "description": "Interactive tool: Color Converter.",
      "url": "https://ziontechgroup.com/tools/color-converter/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/color-palette-gen/",
      "name": "Color Palette Gen",
      "description": "Interactive tool: Color Palette Gen.",
      "url": "https://ziontechgroup.com/tools/color-palette-gen/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/cron-agent-calculator/",
      "name": "Cron Agent Calculator",
      "description": "Interactive tool: Cron Agent Calculator.",
      "url": "https://ziontechgroup.com/tools/cron-agent-calculator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/cron-parser/",
      "name": "Cron Parser",
      "description": "Interactive tool: Cron Parser.",
      "url": "https://ziontechgroup.com/tools/cron-parser/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/css-minifier/",
      "name": "Css Minifier",
      "description": "Interactive tool: Css Minifier.",
      "url": "https://ziontechgroup.com/tools/css-minifier/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/excel-to-json/",
      "name": "Excel To Json",
      "description": "Interactive tool: Excel To Json.",
      "url": "https://ziontechgroup.com/tools/excel-to-json/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/gradient-generator/",
      "name": "Gradient Generator",
      "description": "Interactive tool: Gradient Generator.",
      "url": "https://ziontechgroup.com/tools/gradient-generator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/hash-checker/",
      "name": "Hash Checker",
      "description": "Interactive tool: Hash Checker.",
      "url": "https://ziontechgroup.com/tools/hash-checker/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/hash-generator/",
      "name": "Hash Generator",
      "description": "Interactive tool: Hash Generator.",
      "url": "https://ziontechgroup.com/tools/hash-generator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/hermes-agent-fleet-manager/",
      "name": "Hermes Agent Fleet Manager",
      "description": "Interactive tool: Hermes Agent Fleet Manager.",
      "url": "https://ziontechgroup.com/tools/hermes-agent-fleet-manager/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/html-entities/",
      "name": "Html Entities",
      "description": "Interactive tool: Html Entities.",
      "url": "https://ziontechgroup.com/tools/html-entities/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/image-to-base64/",
      "name": "Image To Base64",
      "description": "Interactive tool: Image To Base64.",
      "url": "https://ziontechgroup.com/tools/image-to-base64/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/js-minifier/",
      "name": "Js Minifier",
      "description": "Interactive tool: Js Minifier.",
      "url": "https://ziontechgroup.com/tools/js-minifier/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/json-diff/",
      "name": "Json Diff",
      "description": "Interactive tool: Json Diff.",
      "url": "https://ziontechgroup.com/tools/json-diff/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/json-formatter/",
      "name": "Json Formatter",
      "description": "Interactive tool: Json Formatter.",
      "url": "https://ziontechgroup.com/tools/json-formatter/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/json-schema-generator/",
      "name": "Json Schema Generator",
      "description": "Interactive tool: Json Schema Generator.",
      "url": "https://ziontechgroup.com/tools/json-schema-generator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/json-schema-validator/",
      "name": "Json Schema Validator",
      "description": "Interactive tool: Json Schema Validator.",
      "url": "https://ziontechgroup.com/tools/json-schema-validator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/json-to-yaml/",
      "name": "Json To Yaml",
      "description": "Interactive tool: Json To Yaml.",
      "url": "https://ziontechgroup.com/tools/json-to-yaml/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/jwt-decoder/",
      "name": "Jwt Decoder",
      "description": "Interactive tool: Jwt Decoder.",
      "url": "https://ziontechgroup.com/tools/jwt-decoder/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/jwt-decoder-pro/",
      "name": "Jwt Decoder Pro",
      "description": "Interactive tool: Jwt Decoder Pro.",
      "url": "https://ziontechgroup.com/tools/jwt-decoder-pro/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/jwt-generator/",
      "name": "Jwt Generator",
      "description": "Interactive tool: Jwt Generator.",
      "url": "https://ziontechgroup.com/tools/jwt-generator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/llm-payload-estimator/",
      "name": "Llm Payload Estimator",
      "description": "Interactive tool: Llm Payload Estimator.",
      "url": "https://ziontechgroup.com/tools/llm-payload-estimator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/lorem-ipsum/",
      "name": "Lorem Ipsum",
      "description": "Interactive tool: Lorem Ipsum.",
      "url": "https://ziontechgroup.com/tools/lorem-ipsum/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/markdown-preview/",
      "name": "Markdown Preview",
      "description": "Interactive tool: Markdown Preview.",
      "url": "https://ziontechgroup.com/tools/markdown-preview/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/markdown-previewer/",
      "name": "Markdown Previewer",
      "description": "Interactive tool: Markdown Previewer.",
      "url": "https://ziontechgroup.com/tools/markdown-previewer/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/markdown-to-html/",
      "name": "Markdown To Html",
      "description": "Interactive tool: Markdown To Html.",
      "url": "https://ziontechgroup.com/tools/markdown-to-html/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/mcp-tester/",
      "name": "Mcp Tester",
      "description": "Interactive tool: Mcp Tester.",
      "url": "https://ziontechgroup.com/tools/mcp-tester/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/meta-tag-generator/",
      "name": "Meta Tag Generator",
      "description": "Interactive tool: Meta Tag Generator.",
      "url": "https://ziontechgroup.com/tools/meta-tag-generator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/mime-lookup/",
      "name": "Mime Lookup",
      "description": "Interactive tool: Mime Lookup.",
      "url": "https://ziontechgroup.com/tools/mime-lookup/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/number-base-converter/",
      "name": "Number Base Converter",
      "description": "Interactive tool: Number Base Converter.",
      "url": "https://ziontechgroup.com/tools/number-base-converter/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/password-generator/",
      "name": "Password Generator",
      "description": "Interactive tool: Password Generator.",
      "url": "https://ziontechgroup.com/tools/password-generator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/password-strength/",
      "name": "Password Strength",
      "description": "Interactive tool: Password Strength.",
      "url": "https://ziontechgroup.com/tools/password-strength/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/phishing-analyzer/",
      "name": "Phishing Analyzer",
      "description": "Interactive tool: Phishing Analyzer.",
      "url": "https://ziontechgroup.com/tools/phishing-analyzer/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/qr-code-generator/",
      "name": "Qr Code Generator",
      "description": "Interactive tool: Qr Code Generator.",
      "url": "https://ziontechgroup.com/tools/qr-code-generator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/regex-cheat-sheet/",
      "name": "Regex Cheat Sheet",
      "description": "Interactive tool: Regex Cheat Sheet.",
      "url": "https://ziontechgroup.com/tools/regex-cheat-sheet/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/regex-tester/",
      "name": "Regex Tester",
      "description": "Interactive tool: Regex Tester.",
      "url": "https://ziontechgroup.com/tools/regex-tester/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/security-headers-analyzer/",
      "name": "Security Headers Analyzer",
      "description": "Interactive tool: Security Headers Analyzer.",
      "url": "https://ziontechgroup.com/tools/security-headers-analyzer/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/sql-formatter/",
      "name": "Sql Formatter",
      "description": "Interactive tool: Sql Formatter.",
      "url": "https://ziontechgroup.com/tools/sql-formatter/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/text-analyzer/",
      "name": "Text Analyzer",
      "description": "Interactive tool: Text Analyzer.",
      "url": "https://ziontechgroup.com/tools/text-analyzer/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/text-diff/",
      "name": "Text Diff",
      "description": "Interactive tool: Text Diff.",
      "url": "https://ziontechgroup.com/tools/text-diff/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/text-to-speech/",
      "name": "Text To Speech",
      "description": "Interactive tool: Text To Speech.",
      "url": "https://ziontechgroup.com/tools/text-to-speech/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/timestamp-converter/",
      "name": "Timestamp Converter",
      "description": "Interactive tool: Timestamp Converter.",
      "url": "https://ziontechgroup.com/tools/timestamp-converter/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/timestamp-to-cron/",
      "name": "Timestamp To Cron",
      "description": "Interactive tool: Timestamp To Cron.",
      "url": "https://ziontechgroup.com/tools/timestamp-to-cron/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/url-encoder/",
      "name": "Url Encoder",
      "description": "Interactive tool: Url Encoder.",
      "url": "https://ziontechgroup.com/tools/url-encoder/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/user-agent-parser/",
      "name": "User Agent Parser",
      "description": "Interactive tool: User Agent Parser.",
      "url": "https://ziontechgroup.com/tools/user-agent-parser/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/uuid-generator/",
      "name": "Uuid Generator",
      "description": "Interactive tool: Uuid Generator.",
      "url": "https://ziontechgroup.com/tools/uuid-generator/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/word-counter/",
      "name": "Word Counter",
      "description": "Interactive tool: Word Counter.",
      "url": "https://ziontechgroup.com/tools/word-counter/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    },
    {
      "@type": "WebApplication",
      "@id": "https://ziontechgroup.com/tools/yaml-to-json/",
      "name": "Yaml To Json",
      "description": "Interactive tool: Yaml To Json.",
      "url": "https://ziontechgroup.com/tools/yaml-to-json/",
      "applicationCategory": "BusinessApplication",
      "applicationSuite": "Zion Tech Group Tools",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    }
  ]
}
    } />
    <StandardPage
      title="Tools"
      subtitle="Free utilities built by Zion Tech Group to accelerate your AI and IT initiatives."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
      ]}
      actions={[
        { label: 'Get a recommendation', href: '/tools/ai-roi-calculator/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
        { label: 'Cloud savings check', href: '/tools/cloud-cost-optimizer/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <Link href="/tools/agent-prompt-builder/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Agent Prompt Builder</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Agent Prompt Builder.</p>
        </Link>
        <Link href="/tools/ai-roi-calculator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Ai Roi Calculator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Ai Roi Calculator.</p>
        </Link>
        <Link href="/tools/api-health-check/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Api Health Check</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Api Health Check.</p>
        </Link>
        <Link href="/tools/base64-encoder/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Base64 Encoder</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Base64 Encoder.</p>
        </Link>
        <Link href="/tools/blog-post-generator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Blog Post Generator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Blog Post Generator.</p>
        </Link>
        <Link href="/tools/cloud-cost-calculator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Cloud Cost Calculator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Cloud Cost Calculator.</p>
        </Link>
        <Link href="/tools/cloud-cost-optimizer/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Cloud Cost Optimizer</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Cloud Cost Optimizer.</p>
        </Link>
        <Link href="/tools/color-contrast/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Color Contrast</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Color Contrast.</p>
        </Link>
        <Link href="/tools/color-converter/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Color Converter</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Color Converter.</p>
        </Link>
        <Link href="/tools/color-palette-gen/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Color Palette Gen</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Color Palette Gen.</p>
        </Link>
        <Link href="/tools/cron-agent-calculator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Cron Agent Calculator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Cron Agent Calculator.</p>
        </Link>
        <Link href="/tools/cron-parser/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Cron Parser</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Cron Parser.</p>
        </Link>
        <Link href="/tools/css-minifier/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Css Minifier</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Css Minifier.</p>
        </Link>
        <Link href="/tools/excel-to-json/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Excel To Json</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Excel To Json.</p>
        </Link>
        <Link href="/tools/gradient-generator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Gradient Generator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Gradient Generator.</p>
        </Link>
        <Link href="/tools/hash-checker/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Hash Checker</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Hash Checker.</p>
        </Link>
        <Link href="/tools/hash-generator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Hash Generator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Hash Generator.</p>
        </Link>
        <Link href="/tools/hermes-agent-fleet-manager/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Hermes Agent Fleet Manager</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Hermes Agent Fleet Manager.</p>
        </Link>
        <Link href="/tools/html-entities/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Html Entities</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Html Entities.</p>
        </Link>
        <Link href="/tools/image-to-base64/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Image To Base64</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Image To Base64.</p>
        </Link>
        <Link href="/tools/js-minifier/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Js Minifier</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Js Minifier.</p>
        </Link>
        <Link href="/tools/json-diff/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Json Diff</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Json Diff.</p>
        </Link>
        <Link href="/tools/json-formatter/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Json Formatter</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Json Formatter.</p>
        </Link>
        <Link href="/tools/json-schema-generator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Json Schema Generator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Json Schema Generator.</p>
        </Link>
        <Link href="/tools/json-schema-validator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Json Schema Validator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Json Schema Validator.</p>
        </Link>
        <Link href="/tools/json-to-yaml/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Json To Yaml</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Json To Yaml.</p>
        </Link>
        <Link href="/tools/jwt-decoder/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Jwt Decoder</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Jwt Decoder.</p>
        </Link>
        <Link href="/tools/jwt-decoder-pro/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Jwt Decoder Pro</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Jwt Decoder Pro.</p>
        </Link>
        <Link href="/tools/jwt-generator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Jwt Generator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Jwt Generator.</p>
        </Link>
        <Link href="/tools/llm-payload-estimator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Llm Payload Estimator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Llm Payload Estimator.</p>
        </Link>
        <Link href="/tools/lorem-ipsum/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Lorem Ipsum</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Lorem Ipsum.</p>
        </Link>
        <Link href="/tools/markdown-preview/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Markdown Preview</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Markdown Preview.</p>
        </Link>
        <Link href="/tools/markdown-previewer/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Markdown Previewer</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Markdown Previewer.</p>
        </Link>
        <Link href="/tools/markdown-to-html/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Markdown To Html</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Markdown To Html.</p>
        </Link>
        <Link href="/tools/mcp-tester/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Mcp Tester</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Mcp Tester.</p>
        </Link>
        <Link href="/tools/meta-tag-generator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Meta Tag Generator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Meta Tag Generator.</p>
        </Link>
        <Link href="/tools/mime-lookup/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Mime Lookup</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Mime Lookup.</p>
        </Link>
        <Link href="/tools/number-base-converter/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Number Base Converter</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Number Base Converter.</p>
        </Link>
        <Link href="/tools/password-generator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Password Generator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Password Generator.</p>
        </Link>
        <Link href="/tools/password-strength/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Password Strength</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Password Strength.</p>
        </Link>
        <Link href="/tools/phishing-analyzer/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Phishing Analyzer</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Phishing Analyzer.</p>
        </Link>
        <Link href="/tools/qr-code-generator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Qr Code Generator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Qr Code Generator.</p>
        </Link>
        <Link href="/tools/regex-cheat-sheet/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Regex Cheat Sheet</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Regex Cheat Sheet.</p>
        </Link>
        <Link href="/tools/regex-tester/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Regex Tester</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Regex Tester.</p>
        </Link>
        <Link href="/tools/security-headers-analyzer/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Security Headers Analyzer</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Security Headers Analyzer.</p>
        </Link>
        <Link href="/tools/sql-formatter/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Sql Formatter</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Sql Formatter.</p>
        </Link>
        <Link href="/tools/text-analyzer/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Text Analyzer</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Text Analyzer.</p>
        </Link>
        <Link href="/tools/text-diff/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Text Diff</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Text Diff.</p>
        </Link>
        <Link href="/tools/text-to-speech/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Text To Speech</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Text To Speech.</p>
        </Link>
        <Link href="/tools/timestamp-converter/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Timestamp Converter</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Timestamp Converter.</p>
        </Link>
        <Link href="/tools/timestamp-to-cron/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Timestamp To Cron</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Timestamp To Cron.</p>
        </Link>
        <Link href="/tools/url-encoder/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Url Encoder</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Url Encoder.</p>
        </Link>
        <Link href="/tools/user-agent-parser/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">User Agent Parser</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: User Agent Parser.</p>
        </Link>
        <Link href="/tools/uuid-generator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Uuid Generator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Uuid Generator.</p>
        </Link>
        <Link href="/tools/word-counter/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Word Counter</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Word Counter.</p>
        </Link>
        <Link href="/tools/yaml-to-json/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Yaml To Json</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Yaml To Json.</p>
        </Link>
      </div>
    </StandardPage>
    </>
  );
}

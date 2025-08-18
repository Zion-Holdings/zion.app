const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const PAGES_DIR = path.join(ROOT, 'pages');
const PUBLIC_DIR = path.join(ROOT, 'public');

function generateMarketingContent() {
  const features = [
    {
      name: 'AI-Powered Automation',
      description: 'Intelligent automation systems that adapt and learn',
      category: 'core',
      priority: 'high'
    },
    {
      name: 'Cloud Orchestration',
      description: 'Seamless cloud resource management and optimization',
      category: 'infrastructure',
      priority: 'high'
    },
    {
      name: 'Performance Monitoring',
      description: 'Real-time performance tracking and alerting',
      category: 'monitoring',
      priority: 'medium'
    },
    {
      name: 'Content Generation',
      description: 'AI-driven content creation and optimization',
      category: 'content',
      priority: 'medium'
    },
    {
      name: 'Security Scanning',
      description: 'Automated security audits and vulnerability detection',
      category: 'security',
      priority: 'high'
    },
    {
      name: 'SEO Optimization',
      description: 'Continuous SEO improvements and monitoring',
      category: 'marketing',
      priority: 'medium'
    }
  ];

  const benefits = [
    'Reduced manual work by 80%',
    'Improved performance by 40%',
    'Enhanced security posture',
    'Better user experience',
    'Increased content freshness',
    'Optimized resource utilization'
  ];

  return { features, benefits };
}

function updateMarketingPage() {
  try {
    const marketingPagePath = path.join(PAGES_DIR, 'marketing', 'index.tsx');
    
    if (!fs.existsSync(marketingPagePath)) {
      // Create marketing page directory
      const marketingDir = path.dirname(marketingPagePath);
      fs.mkdirSync(marketingDir, { recursive: true });
      
      // Create basic marketing page
      const basicContent = `import React from 'react';
import Head from 'next/head';

export default function MarketingPage() {
  return (
    <>
      <Head>
        <title>Marketing & Features - Zion Tech Group</title>
        <meta name="description" content="Discover our powerful features and marketing capabilities" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-4xl font-bold text-center mb-8">Marketing & Features</h1>
          <p className="text-xl text-center text-gray-300 mb-12">
            Discover our powerful features and marketing capabilities
          </p>
          
          {/* AUTO-GENERATED: MARKETING_FEATURES_START */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <p className="text-gray-300">Coming soon...</p>
            </div>
          </div>
          {/* AUTO-GENERATED: MARKETING_FEATURES_END */}
        </div>
      </main>
    </>
  );
}`;
      
      fs.writeFileSync(marketingPagePath, basicContent);
      console.log(`Created marketing page at ${marketingPagePath}`);
    }
    
    return { success: true, message: 'Marketing page ready' };
  } catch (error) {
    console.error('Error updating marketing page:', error);
    return { success: false, error: error.message };
  }
}

function generateFeatureCards() {
  const { features, benefits } = generateMarketingContent();
  
  const featureCards = features.map(feature => `
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-cyan-400">${feature.name}</h3>
                <span className="px-2 py-1 text-xs rounded-full ${
                  feature.priority === 'high' ? 'bg-red-500/20 text-red-300' :
                  feature.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-green-500/20 text-green-300'
                }">${feature.priority}</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">${feature.description}</p>
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">${feature.category}</span>
            </div>`).join('\n');
  
  const benefitsSection = `
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-8">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              ${benefits.map(benefit => `
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">${benefit}</span>
                </div>
              </div>`).join('\n')}
            </div>
          </div>`;
  
  return featureCards + benefitsSection;
}

function updateMarketingContent() {
  try {
    const marketingPagePath = path.join(PAGES_DIR, 'marketing', 'index.tsx');
    
    if (!fs.existsSync(marketingPagePath)) {
      return { success: false, error: 'Marketing page not found' };
    }
    
    let content = fs.readFileSync(marketingPagePath, 'utf8');
    const startMarker = '{/* AUTO-GENERATED: MARKETING_FEATURES_START */}';
    const endMarker = '{/* AUTO-GENERATED: MARKETING_FEATURES_END */}';
    
    if (!content.includes(startMarker) || !content.includes(endMarker)) {
      console.log('Marketing page does not have required markers, skipping update');
      return { success: true, message: 'No markers found, skipping update' };
    }
    
    const enhancedContent = generateFeatureCards();
    
    const regex = new RegExp(`${startMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*?${endMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 's');
    const newContent = content.replace(regex, startMarker + '\n' + enhancedContent + '\n          ' + endMarker);
    
    if (newContent !== content) {
      fs.writeFileSync(marketingPagePath, newContent, 'utf8');
      console.log('Marketing content updated successfully');
      return { success: true, message: 'Marketing content updated successfully' };
    } else {
      console.log('Marketing content already up to date');
      return { success: true, message: 'Marketing content already up to date' };
    }
    
  } catch (error) {
    console.error('Error updating marketing content:', error);
    return { success: false, error: error.message };
  }
}

exports.handler = async function(event, context) {
  try {
    console.log('Starting marketing and features promo generation...');
    
    const results = [];
    
    // Update marketing page structure
    const pageResult = updateMarketingPage();
    results.push({ component: 'marketing-page', ...pageResult });
    
    // Update marketing content
    const contentResult = updateMarketingContent();
    results.push({ component: 'marketing-content', ...contentResult });
    
    const successCount = results.filter(r => r.success).length;
    const totalCount = results.length;
    
    console.log(`Marketing promo generation completed: ${successCount}/${totalCount} successful`);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Marketing and features promo generation completed',
        summary: {
          total: totalCount,
          successful: successCount,
          failed: totalCount - successCount
        },
        results: results,
        generatedAt: new Date().toISOString()
      })
    };
    
  } catch (error) {
    console.error('Error in marketing-and-features-promo:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
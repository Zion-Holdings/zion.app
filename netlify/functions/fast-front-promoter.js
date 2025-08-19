const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const PAGES_DIR = path.join(ROOT, 'pages');
const PUBLIC_DIR = path.join(ROOT, 'public');

function generatePromoContent() {
  const promos = [
    {
      title: '🚀 Fast Automation',
      description: 'Lightning-fast automation workflows',
      color: 'from-blue-500/20 to-cyan-500/20',
      textColor: 'text-blue-300'
    },
    {
      title: '⚡ Quick Updates',
      description: 'Instant content and feature updates',
      color: 'from-green-500/20 to-emerald-500/20',
      textColor: 'text-green-300'
    },
    {
      title: '🎯 Smart Targeting',
      description: 'Intelligent content promotion',
      color: 'from-purple-500/20 to-pink-500/20',
      textColor: 'text-purple-300'
    },
    {
      title: '🔄 Continuous Sync',
      description: 'Real-time synchronization',
      color: 'from-orange-500/20 to-red-500/20',
      textColor: 'text-orange-300'
    }
  ];

  return promos;
}

function updateFrontPage() {
  try {
    const frontPagePath = path.join(PAGES_DIR, 'main', 'front', 'index.tsx');
    
    if (!fs.existsSync(frontPagePath)) {
      console.log('Front page not found, skipping update');
      return { success: true, message: 'Front page not found, skipping update' };
    }
    
    let content = fs.readFileSync(frontPagePath, 'utf8');
    const startMarker = '{/* AUTO-GENERATED: FAST_PROMO_START */}';
    const endMarker = '{/* AUTO-GENERATED: FAST_PROMO_END */}';
    
    if (!content.includes(startMarker) || !content.includes(endMarker)) {
      console.log('Front page does not have required markers, skipping update');
      return { success: true, message: 'No markers found, skipping update' };
    }
    
    const promos = generatePromoContent();
    const promoContent = promos.map(promo => `
            <div className="bg-gradient-to-r ${promo.color} rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold ${promo.textColor} mb-2">${promo.title}</h3>
              <p className="text-white/80">${promo.description}</p>
            </div>`).join('\n');
    
    const enhancedContent = `
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-white/90">Fast Front Promotions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${promoContent}
            </div>
          </div>`;
    
    const regex = new RegExp(`${startMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*?${endMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 's');
    const newContent = content.replace(regex, startMarker + enhancedContent + endMarker);
    
    if (newContent !== content) {
      fs.writeFileSync(frontPagePath, newContent, 'utf8');
      console.log('Front page fast promotions updated successfully');
      return { success: true, message: 'Front page fast promotions updated successfully' };
    } else {
      console.log('Front page fast promotions already up to date');
      return { success: true, message: 'Front page fast promotions already up to date' };
    }
    
  } catch (error) {
    console.error('Error updating front page:', error);
    return { success: false, error: error.message };
  }
}

function updateHomepage() {
  try {
    const homepagePath = path.join(PAGES_DIR, 'index.tsx');
    
    if (!fs.existsSync(homepagePath)) {
      console.log('Homepage not found, skipping update');
      return { success: true, message: 'Homepage not found, skipping update' };
    }
    
    let content = fs.readFileSync(homepagePath, 'utf8');
    const startMarker = '/* AUTO-GENERATED: FAST_PROMO_START */';
    const endMarker = '/* AUTO-GENERATED: FAST_PROMO_END */';
    
    if (!content.includes(startMarker) || !content.includes(endMarker)) {
      console.log('Homepage does not have required markers, skipping update');
      return { success: true, message: 'No markers found, skipping update' };
    }
    
    const promos = generatePromoContent();
    const promoContent = promos.map(promo => `
            <div className="bg-gradient-to-r ${promo.color} rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold ${promo.textColor} mb-2">${promo.title}</h3>
              <p className="text-white/80">${promo.description}</p>
            </div>`).join('\n');
    
    const enhancedContent = `
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Fast Front Promotions</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Lightning-fast automation and content updates.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            ${promoContent}
          </div>
        </section>`;
    
    const regex = new RegExp(`${startMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*?${endMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 's');
    const newContent = content.replace(regex, startMarker + enhancedContent + endMarker);
    
    if (newContent !== content) {
      fs.writeFileSync(homepagePath, newContent, 'utf8');
      console.log('Homepage fast promotions updated successfully');
      return { success: true, message: 'Homepage fast promotions updated successfully' };
    } else {
      console.log('Homepage fast promotions already up to date');
      return { success: true, message: 'Homepage fast promotions already up to date' };
    }
    
  } catch (error) {
    console.error('Error updating homepage:', error);
    return { success: false, error: error.message };
  }
}

function createPromoLog() {
  try {
    const logsDir = path.join(ROOT, 'automation', 'logs');
    fs.mkdirSync(logsDir, { recursive: true });
    
    const logFile = path.join(logsDir, 'fast-promo-log.json');
    const logEntry = {
      timestamp: new Date().toISOString(),
      action: 'fast-front-promotion',
      promosGenerated: generatePromoContent().length,
      status: 'completed'
    };
    
    // Read existing log or create new
    let logs = [];
    if (fs.existsSync(logFile)) {
      try {
        logs = JSON.parse(fs.readFileSync(logFile, 'utf8'));
      } catch (e) {
        logs = [];
      }
    }
    
    logs.push(logEntry);
    
    // Keep only last 100 entries
    if (logs.length > 100) {
      logs = logs.slice(-100);
    }
    
    fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
    console.log('Promo log updated successfully');
    
    return { success: true, message: 'Promo log updated successfully' };
  } catch (error) {
    console.error('Error updating promo log:', error);
    return { success: false, error: error.message };
  }
}

exports.handler = async function(event, context) {
  try {
    console.log('Starting fast front promotion...');
    
    const results = [];
    
    // Update front page
    const frontResult = updateFrontPage();
    results.push({ component: 'front-page', ...frontResult });
    
    // Update homepage
    const homeResult = updateHomepage();
    results.push({ component: 'homepage', ...homeResult });
    
    // Create promo log
    const logResult = createPromoLog();
    results.push({ component: 'promo-log', ...logResult });
    
    const successCount = results.filter(r => r.success).length;
    const totalCount = results.length;
    
    console.log(`Fast front promotion completed: ${successCount}/${totalCount} successful`);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Fast front promotion completed',
        summary: {
          total: totalCount,
          successful: successCount,
          failed: totalCount - successCount
        },
        results: results,
        promosGenerated: generatePromoContent().length,
        generatedAt: new Date().toISOString()
      })
    };
    
  } catch (error) {
    console.error('Error in fast-front-promoter:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
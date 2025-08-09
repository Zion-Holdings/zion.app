#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function readJSONSafely(p){ try { return JSON.parse(fs.readFileSync(p,'utf8')); } catch { return null; } }
function fileExists(p){ try { return fs.existsSync(p); } catch { return false; } }

function extractSignals(){
  const signals = [];
  // Docs signals
  const changelog = fileExists(path.join(process.cwd(),'docs','AUTONOMOUS_CHANGELOG.md'));
  const releaseNotes = fileExists(path.join(process.cwd(),'docs','RELEASE_NOTES.md'));
  if (changelog) signals.push('Auto-Changelog updated regularly');
  if (releaseNotes) signals.push('Release Notes generated from commits');
  // DAO presence
  if (fileExists(path.join(process.cwd(),'contracts','ZionGovernor.sol'))) signals.push('On-chain Governance (DAO) ready');
  // Automations count
  const automationDir = path.join(process.cwd(),'automation');
  if (fileExists(automationDir)) {
    const files = fs.readdirSync(automationDir).filter(f=>/\.(cjs|js)$/.test(f));
    signals.push(`Autonomous agents: ${files.length}+`);
  }
  return signals;
}

function buildContent(signals){
  const bullets = signals.map(s=>`<li>${s}</li>`).join('\n          ');
  return `      <div>
        <h1 className="text-3xl font-bold">Zion Autonomous Cloud</h1>
        <p className="text-gray-600 mt-2">Always-on, intelligent automations running in the cloud. No human intervention. Changes sync back to the repo automatically.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <a href="/docs/automation#infinite-loop">
          <div className="border rounded p-4 hover:bg-gray-50 cursor-pointer">
            <div className="font-semibold">Autonomous Improvement</div>
            <div className="text-sm text-gray-600">Continuous code, UX, and content evolution in the cloud</div>
          </div>
        </a>
        <a href="/dao">
          <div className="border rounded p-4 hover:bg-gray-50 cursor-pointer">
            <div className="font-semibold">Governance (DAO)</div>
            <div className="text-sm text-gray-600">On-chain proposals, voting, and timelock execution</div>
          </div>
        </a>
        <a href="/docs/automation#ui-evolution">
          <div className="border rounded p-4 hover:bg-gray-50 cursor-pointer">
            <div className="font-semibold">UI Evolution</div>
            <div className="text-sm text-gray-600">AI-driven UI beautification and navigation improvements</div>
          </div>
        </a>
        <a href="/blog">
          <div className="border rounded p-4 hover:bg-gray-50 cursor-pointer">
            <div className="font-semibold">SEO & Content</div>
            <div className="text-sm text-gray-600">Automated content generation and SEO optimization</div>
          </div>
        </a>
        <a href="/docs/automation#health">
          <div className="border rounded p-4 hover:bg-gray-50 cursor-pointer">
            <div className="font-semibold">Security & Health</div>
            <div className="text-sm text-gray-600">Self-healing, security scans, and link/site maintenance</div>
          </div>
        </a>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Live capabilities</h2>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
          ${bullets}
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Triggers</h2>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
          <li>GitHub Actions schedules run multiple times per hour</li>
          <li>Each successful run auto-commits improvements</li>
        </ul>
      </div>

      <div>
        <a href="/blog"><span className="px-3 py-2 rounded bg-blue-600 text-white cursor-pointer">See Latest Changes</span></a>
      </div>`;
}

(function main(){
  const file = path.join(process.cwd(),'pages','index.tsx');
  if (!fileExists(file)) { console.log('Homepage not found'); process.exit(0); }
  const src = fs.readFileSync(file,'utf8');
  const start = src.indexOf('{/* AUTO:START');
  const end = src.indexOf('AUTO:END */}');
  if (start === -1 || end === -1) { console.log('AUTO markers not found'); process.exit(0); }

  const signals = extractSignals();
  const content = buildContent(signals);

  const before = src.slice(0, start);
  const after = src.slice(end + 'AUTO:END */}'.length);
  const updated = before + '{/* AUTO:START - DO NOT EDIT BELOW. This section is managed by automation/homepage-auto-updater.cjs */}\n' + content + '\n      {/* AUTO:END - DO NOT EDIT ABOVE */}' + after;

  if (updated !== src) {
    fs.writeFileSync(file, updated);
    console.log('Homepage updated by automation');
  } else {
    console.log('No homepage changes');
  }
})();
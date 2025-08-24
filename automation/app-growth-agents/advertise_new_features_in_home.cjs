#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const REPORT = path.join(__dirname, "..", "..", "data", "reports", "app-growth", "app-growth-actions.json");
const HOME_PATH = path.join(__dirname, "..", "..", "pages", "enhanced-home.tsx");

(function main() {
  if (!fs.existsSync(REPORT)) { console.error('No app-growth report found'); process.exit(1); }
  if (!fs.existsSync(HOME_PATH)) { console.error('Enhanced home page not found'); process.exit(1); }
  let src = fs.readFileSync(HOME_PATH, "utf8");
  const bannerStart = "{/* APP-GROWTH-BANNER-START */}";
  const bannerEnd = "{/* APP-GROWTH-BANNER-END */}";
  const banner = [
    "",
    "        " + bannerStart,
    "        <div className=\"mt-6 p-4 bg-yellow-100 border border-yellow-300 rounded\">",
    "          <strong>New:</strong> Explore our latest pages and capabilities below.",
    "        </div>",
    "        " + bannerEnd
  ].join("\n");
  if (src.includes(bannerStart)) {
    src = src.replace(new RegExp(bannerStart + "[\\s\\S]*?" + bannerEnd), banner);
  } else {
    src = src.replace(/<main>/, '<main>\n' + banner);
  }
  fs.writeFileSync(HOME_PATH, src);
  console.log('Homepage banner ensured');
})();

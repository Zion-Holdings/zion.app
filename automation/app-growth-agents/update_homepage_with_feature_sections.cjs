#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const REPORT = path.join(__dirname, "..", "..", "data", "reports", "app-growth", "app-growth-actions.json");
const HOME_PATH = path.join(__dirname, "..", "..", "pages", "enhanced-home.tsx");

function loadReport() { return JSON.parse(fs.readFileSync(REPORT, "utf8")); }

function buildSection(pages) {
  const items = pages.map(p => "            <li className=\"mb-2\"><a className=\"text-blue-600 underline\" href=\"" + p.route + "\">" + p.title + "</a> — " + p.description + "</li>").join("\n");
  return [
    "",
    "        {/* APP-GROWTH-FEATURES-START */}",
    "        <section className=\"mt-10\">",
    "          <h2 className=\"text-2xl font-semibold mb-4\">New Features</h2>",
    "          <ul>",
    items,
    "          </ul>",
    "        </section>",
    "        {/* APP-GROWTH-FEATURES-END */}",
  ].join("\n");
}

(function main() {
  if (!fs.existsSync(REPORT)) { console.error('No app-growth report found'); process.exit(1); }
  if (!fs.existsSync(HOME_PATH)) { console.error('Enhanced home page not found'); process.exit(1); }
  const { proposedPages = [] } = loadReport();
  if (!proposedPages.length) { console.log('No proposed pages for homepage section'); process.exit(0); }
  let src = fs.readFileSync(HOME_PATH, "utf8");
  const start = "{/* APP-GROWTH-FEATURES-START */}";
  const end = "{/* APP-GROWTH-FEATURES-END */}";
  const section = buildSection(proposedPages);
  if (src.includes(start)) {
    src = src.replace(new RegExp(start + "[\\s\\S]*?" + end), section);
  } else {
    src = src.replace("</main>", section + "\n      </main>");
  }
  fs.writeFileSync(HOME_PATH, src);
  console.log('Enhanced home updated with feature sections');
})();

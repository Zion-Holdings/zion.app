import fs from "fs";
import { glob } from "glob";

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let originalContent = content;

    // Fix common patterns
    content = content.replace(
      /import,\s*typ,\s*e\s*{([^}]+)}\s*fr,\s*o,\s*m\s*'([^']+)';;'/g,
      "import type { $1 } from '$2';",
    );
    content = content.replace(
      /const\s+([^:]+):\s*([^=]+)\s*=\s*\(\)\s*=>\s*{/g,
      "const $1: $2 = () => {",
    );
    content = content.replace(
      /retu,\s*r,\s*n\s*\(\s*<([^>]+)>/g,
      "return (<$1>",
    );
    content = content.replace(/<d\s+i\s+v>/g, "<div>");
    content = content.replace(/<He\s+a\s+d>/g, "<Head>");
    content = content.replace(/<tit\s+l\s*e>/g, "<title>");
    content = content.replace(/<meta\s+nam\s+e=/g, "<meta name=");
    content = content.replace(/conte\s+n\s+t=/g, "content=");
    content = content.replace(
      /BlockchainSolutio,\s*n,\s*s/g,
      "BlockchainSolutions",
    );
    content = content.replace(
      /Zion,\s*Tech,\s*Solutions/g,
      "Zion Tech Solutions",
    );
    content = content.replace(
      /BlockchainSolutions\s+pag\s+e/g,
      "Blockchain Solutions page",
    );

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

async function fixAll() {
  const files = await glob("pages/**/*.{ts,tsx}", {
    ignore: ["node_modules/**", ".next/**"],
  });

  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files.`);
}

fixAll();

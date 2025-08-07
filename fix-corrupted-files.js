const fs = require("fs");
const path = require("path");

// Function to fix corrupted TypeScript files
function fixCorruptedFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Fix common corruption patterns
    content = content
      // Fix import statements with extra commas
      .replace(
        /import,\s*typ,\s*e\s*{\s*NextPa,\s*g,\s*e\s*}\s*fr,\s*o,\s*m\s*'ne,\s*x,\s*t';;'/g,
        "import type { NextPage } from 'next'",
      )
      .replace(
        /import\s*{\s*NextPage\s*}\s*from\s*'next';;'/g,
        "import type { NextPage } from 'next'",
      )

      // Fix component declarations
      .replace(
        /const\s+(\w+),\s*:\s*NextPage\s*=\s*\(\)\s*=>\s*{/g,
        "const $1: NextPage = () => {",
      )

      // Fix JSX elements with extra commas
      .replace(/<(\w+)\s*,\s*>/g, "<$1>")
      .replace(/<\/(\w+)\s*,\s*>/g, "</$1>")

      // Fix text content with extra commas
      .replace(/(\w+),\s*(\w+),\s*(\w+)/g, "$1$2$3")
      .replace(/(\w+),\s*(\w+)/g, "$1$2")

      // Fix export statements
      .replace(/export,\s*default,\s*(\w+);/g, "export default $1;")

      // Fix return statements
      .replace(/retu,\s*r,\s*n\s*\(/g, "return (")

      // Fix closing brackets and parentheses
      .replace(/\)\s*,\s*;/g, ");")
      .replace(/}\s*,\s*;/g, "};")

      // Fix HTML attributes
      .replace(/nam\s*e=/g, "name=")
      .replace(/conte\s*n\s*t=/g, "content=")
      .replace(/descripti\s*o\s*n/g, "description")

      // Fix component names
      .replace(/BlockchainSolutio,\s*n,\s*s/g, "BlockchainSolutions")
      .replace(/Zion,\s*Tech,\s*Solutions/g, "Zion Tech Solutions")

      // Fix comments
      .replace(
        /{\/\*\s*TODO:\s*Add,\s*page,\s*content\s*\/\*}/g,
        "{/* TODO: Add page content */}",
      )

      // Remove extra spaces and commas
      .replace(/\s*,\s*/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix corrupted files
function fixCorruptedFiles(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixCorruptedFiles(filePath);
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      fixCorruptedFile(filePath);
    }
  }
}

// Start fixing from the pages directory
console.log("Fixing corrupted TypeScript files...");
fixCorruptedFiles("./pages");
fixCorruptedFiles("./components");
console.log("Finished fixing corrupted files.");

#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class QuickLintFix {
  constructor() {
    this.projectRoot = process.cwd();
  }

  async run() {
    console.log("🔧 Running quick lint fix...");

    try {
      // Check if ESLint is installed
      try {
        execSync("npx eslint --version", { stdio: "pipe" });
      } catch (error) {
        console.log("📦 Installing ESLint...");
        execSync(
          "npm install --save-dev eslint eslint-config-next @typescript-eslint/eslint-plugin @typescript-eslint/parser",
          { stdio: "inherit" },
        );
      }

      // Create ESLint config if it doesn't exist
      this.createEslintConfig();

      // Run ESLint with --fix flag
      console.log("🔍 Running ESLint with auto-fix...");
      execSync("npx eslint . --ext .js,.jsx,.ts,.tsx --fix", {
        stdio: "inherit",
      });

      console.log("✅ Quick lint fix completed successfully!");

      // Run additional fixes
      await this.runAdditionalFixes();
    } catch (error) {
      console.error("❌ Quick lint fix failed:", error.message);
      process.exit(1);
    }
  }

  createEslintConfig() {
    const eslintConfigPath = path.join(this.projectRoot, ".eslintrc.json");

    if (!fs.existsSync(eslintConfigPath)) {
      const config = {
        extends: ["next/core-web-vitals", "@typescript-eslint/recommended"],
        parser: "@typescript-eslint/parser",
        plugins: ["@typescript-eslint"],
        rules: {
          "@typescript-eslint/no-unused-vars": "warn",
          "@typescript-eslint/no-explicit-any": "warn",
          "prefer-const": "warn",
          "no-var": "error",
          "no-console": "warn",
          "no-debugger": "error",
        },
        env: {
          browser: true,
          node: true,
          es6: true,
        },
      };

      fs.writeFileSync(eslintConfigPath, JSON.stringify(config, null, 2));
      console.log("📝 Created .eslintrc.json configuration");
    }
  }

  async runAdditionalFixes() {
    console.log("🔧 Running additional fixes...");

    // Find all JS/TS files
    const files = this.findFiles([
      "**/*.js",
      "**/*.jsx",
      "**/*.ts",
      "**/*.tsx",
    ]);

    for (const file of files) {
      await this.fixCommonIssues(file);
    }

    console.log("✅ Additional fixes completed");
  }

  findFiles(patterns) {
    const files = [];

    patterns.forEach((pattern) => {
      const glob = require("glob");
      const matches = glob.sync(pattern, {
        ignore: ["node_modules/**", ".next/**", "automation/**"],
      });
      files.push(...matches);
    });

    return files;
  }

  async fixCommonIssues(filePath) {
    try {
      let content = fs.readFileSync(filePath, "utf8");
      let modified = false;

      // Fix common issues
      const originalContent = content;

      // Remove extra backticks
      content = content.replace(/```\s*```/g, "```");
      content = content.replace(/`\s*`\s*`/g, "```");

      // Fix extra quotes
      content = content.replace(/''/g, "'");
      content = content.replace(/""/g, '"');

      // Fix extra semicolons
      content = content.replace(/;;/g, ";");

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ Fixed: ${filePath}`);
      }
    } catch (error) {
      console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    }
  }
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const fixer = new QuickLintFix();
  fixer.run().catch(console.error);
}

export default QuickLintFix;

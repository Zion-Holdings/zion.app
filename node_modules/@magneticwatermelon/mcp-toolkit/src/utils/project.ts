import { join, dirname } from "node:path";
import { readFileSync, existsSync } from "node:fs";
import { resolveBasePath } from "./file";

/**
 * Read and parse package.json from a given base path or auto-detect
 * @param basePath - Optional base path to start searching from
 * @returns Parsed package.json object or null if not found
 */
export function readPackageJson(basePath?: string): any {
  // Use the resolveBasePath utility to determine the search path
  const searchPath = resolveBasePath(basePath);

  // Try the direct path first
  let packagePath = join(searchPath, "package.json");
  if (existsSync(packagePath)) {
    try {
      const packageContent = readFileSync(packagePath, "utf-8");
      return JSON.parse(packageContent);
    } catch (error) {
      // Fall through to search parent directories
    }
  }

  // If not found, walk up the directory tree to find package.json
  let currentDir = searchPath;
  const root = dirname(currentDir);

  while (currentDir !== root) {
    packagePath = join(currentDir, "package.json");
    if (existsSync(packagePath)) {
      try {
        const packageContent = readFileSync(packagePath, "utf-8");
        return JSON.parse(packageContent);
      } catch (error) {
        // Continue searching if this package.json is malformed
      }
    }
    currentDir = dirname(currentDir);
  }

  // Try root directory as last resort
  packagePath = join(root, "package.json");
  if (existsSync(packagePath)) {
    try {
      const packageContent = readFileSync(packagePath, "utf-8");
      return JSON.parse(packageContent);
    } catch (error) {
      // Final fallback - return null
    }
  }

  return null;
}

/**
 * Get the project name from package.json
 * Falls back to "mcp-server" if not available
 */
export function getProjectName(basePath?: string): string {
  try {
    const packageJson = readPackageJson(basePath);
    return packageJson?.name || "mcp-server";
  } catch (error) {
    return "mcp-server";
  }
}

/**
 * Get the toolkit root directory by finding the package.json with the toolkit name
 * This works from any file within the mcp-toolkit project
 */
export function getToolkitRoot(): string {
  const { dirname, join } = require("path");

  // Start from the current file's directory and walk up
  let currentDir = dirname(import.meta.url.replace("file://", ""));

  while (currentDir !== dirname(currentDir)) {
    // Stop at filesystem root
    const packagePath = join(currentDir, "package.json");
    try {
      const { existsSync, readFileSync } = require("fs");
      if (existsSync(packagePath)) {
        const packageJson = JSON.parse(readFileSync(packagePath, "utf-8"));
        // Check if this is the mcp-toolkit package
        if (packageJson.name === "@magneticwatermelon/mcp-toolkit") {
          return currentDir;
        }
      }
    } catch (error) {
      // Continue searching if package.json is malformed
    }
    currentDir = dirname(currentDir);
  }

  // Fallback to current working directory if not found
  return process.cwd();
}

/**
 * Get the project version from package.json
 * Falls back to "0.0.0" if not available
 */
export function getProjectVersion(basePath?: string): string {
  try {
    const packageJson = readPackageJson(basePath);
    return packageJson?.version || "0.0.0";
  } catch (error) {
    return "0.0.0";
  }
}

/**
 * Get project info from package.json
 * Returns both name and version with fallbacks
 */
export function getProjectInfo(basePath?: string): {
  name: string;
  version: string;
} {
  try {
    const packageJson = readPackageJson(basePath);
    return {
      name: packageJson?.name || "mcp-server",
      version: packageJson?.version || "0.0.0",
    };
  } catch (error) {
    return {
      name: "mcp-server",
      version: "0.0.0",
    };
  }
}

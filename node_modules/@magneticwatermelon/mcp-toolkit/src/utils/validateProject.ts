import { readFile } from "fs/promises";
import { logger } from "../logger";
import { findUp } from "./file";

export async function validateMCPProject() {
  try {
    const packageJsonPath = await findUp("package.json");

    if (!packageJsonPath) {
      throw new Error(
        "Could not find package.json in current directory or any parent directories"
      );
    }
    const package_json = JSON.parse(await readFile(packageJsonPath, "utf-8"));
    if (
      !package_json.dependencies?.["@magneticwatermelon/mcp-toolkit"] &&
      !package_json.devDependencies?.["@magneticwatermelon/mcp-toolkit"]
    ) {
      throw new Error(
        "This directory is not an MCP project (@magneticwatermelon/mcp-toolkit not found in dependencies or devDependencies)"
      );
    }
  } catch (error) {
    console.error("Error: Must be run from an MCP project directory");
    logger.error(`Project validation failed: ${(error as Error).message}`);
    process.exit(1);
  }
}

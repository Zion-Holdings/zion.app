import fs from "fs";
import path from "path";

export type SourceNodeType = "folder" | "file";

export interface SourceNode {
  name: string;
  path: string; // repo-relative path starting with '/'
  type: SourceNodeType;
  children?: SourceNode[];
  exists?: boolean;
}

export interface SourceMapStatus {
  gitConnected: boolean;
  gitBranch?: string;
}

export interface SourceMapResponse {
  nodes: SourceNode[];
  status: SourceMapStatus;
}

const ROOT = process.cwd();

function withPath(base: string, segment: string): string {
  if (base === "/") return `/${segment}`;
  return `${base}/${segment}`;
}

function folder(name: string, basePath: string, children: string[] = []): SourceNode {
  const fullPath = withPath(basePath, name);
  return {
    name,
    path: fullPath,
    type: "folder",
    children: children.map((child) => ({ name: child, path: withPath(fullPath, child), type: "folder" })),
  };
}

export function buildZionSourceMap(): SourceNode[] {
  const map: SourceNode[] = [
    // 1. /core
    {
      name: "core",
      path: "/core",
      type: "folder",
      children: [
        { name: "auth", path: "/core/auth", type: "folder" },
        { name: "user", path: "/core/user", type: "folder" },
        { name: "marketplace", path: "/core/marketplace", type: "folder" },
        { name: "payments", path: "/core/payments", type: "folder" },
        { name: "messaging", path: "/core/messaging", type: "folder" },
        { name: "analytics", path: "/core/analytics", type: "folder" },
        { name: "roles", path: "/core/roles", type: "folder" },
        { name: "talent", path: "/core/talent", type: "folder" },
        { name: "client", path: "/core/client", type: "folder" },
      ],
    },
    // 2. /ai
    {
      name: "ai",
      path: "/ai",
      type: "folder",
      children: [
        { name: "gpt", path: "/ai/gpt", type: "folder" },
        { name: "resume-generator", path: "/ai/resume-generator", type: "folder" },
        { name: "proposal-writer", path: "/ai/proposal-writer", type: "folder" },
        { name: "contract-writer", path: "/ai/contract-writer", type: "folder" },
        { name: "assistant", path: "/ai/assistant", type: "folder" },
        { name: "prompts", path: "/ai/prompts", type: "folder" },
      ],
    },
    // 3. /dao
    {
      name: "dao",
      path: "/dao",
      type: "folder",
      children: [
        { name: "proposals", path: "/dao/proposals", type: "folder" },
        { name: "voting", path: "/dao/voting", type: "folder" },
        { name: "quorum", path: "/dao/quorum", type: "folder" },
        { name: "staking", path: "/dao/staking", type: "folder" },
        { name: "snapshot-integration", path: "/dao/snapshot-integration", type: "folder" },
      ],
    },
    // 4. /token
    {
      name: "token",
      path: "/token",
      type: "folder",
      children: [
        { name: "rewards", path: "/token/rewards", type: "folder" },
        { name: "pricing-engine", path: "/token/pricing-engine", type: "folder" },
        { name: "escrow", path: "/token/escrow", type: "folder" },
        { name: "payout-engine", path: "/token/payout-engine", type: "folder" },
        { name: "wallet", path: "/token/wallet", type: "folder" },
      ],
    },
    // 5. /academy
    {
      name: "academy",
      path: "/academy",
      type: "folder",
      children: [
        { name: "courses", path: "/academy/courses", type: "folder" },
        { name: "certifications", path: "/academy/certifications", type: "folder" },
        { name: "quiz", path: "/academy/quiz", type: "folder" },
        { name: "video", path: "/academy/video", type: "folder" },
        { name: "ai-tutor", path: "/academy/ai-tutor", type: "folder" },
      ],
    },
    // 6. /governance
    {
      name: "governance",
      path: "/governance",
      type: "folder",
      children: [
        { name: "manifesto", path: "/governance/manifesto", type: "folder" },
        { name: "constitution", path: "/governance/constitution", type: "folder" },
        { name: "roadmap", path: "/governance/roadmap", type: "folder" },
        { name: "changelog", path: "/governance/changelog", type: "folder" },
      ],
    },
    // 7. /deployments
    {
      name: "deployments",
      path: "/deployments",
      type: "folder",
      children: [
        { name: "multiverse", path: "/deployments/multiverse", type: "folder" },
        { name: "subdomains", path: "/deployments/subdomains", type: "folder" },
        { name: "config-templates", path: "/deployments/config-templates", type: "folder" },
        { name: "environments", path: "/deployments/environments", type: "folder" },
      ],
    },
    // 8. /api
    {
      name: "api",
      path: "/api",
      type: "folder",
      children: [
        { name: "docs", path: "/api/docs", type: "folder" },
        { name: "partners", path: "/api/partners", type: "folder" },
        { name: "integrations", path: "/api/integrations", type: "folder" },
        { name: "webhooks", path: "/api/webhooks", type: "folder" },
      ],
    },
  ];

  return map;
}

function markExistenceRecursive(node: SourceNode): SourceNode {
  const absolutePath = path.join(ROOT, node.path);
  const exists = fs.existsSync(absolutePath);
  const withExists: SourceNode = {
    ...node,
    exists,
  };
  if (node.children && node.children.length > 0) {
    withExists.children = node.children.map(markExistenceRecursive);
  }
  return withExists;
}

export function getSourceMapWithExistence(): SourceNode[] {
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}

export interface DeployTemplateResult {
  createdPaths: string[];
  skippedPaths: string[];
}

export function ensureDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export function deployBasicTemplateForPath(repoRelativePath: string): DeployTemplateResult {
  const absoluteDir = path.join(ROOT, repoRelativePath);
  const createdPaths: string[] = [];
  const skippedPaths: string[] = [];

  ensureDirectory(absoluteDir);

  const keepFile = path.join(absoluteDir, ".keep");
  if (!fs.existsSync(keepFile)) {
    fs.writeFileSync(keepFile, "");
    createdPaths.push(keepFile);
  } else {
    skippedPaths.push(keepFile);
  }

  const readmeFile = path.join(absoluteDir, "README.md");
  if (!fs.existsSync(readmeFile)) {
    const readme = `# ${path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs.writeFileSync(readmeFile, readme);
    createdPaths.push(readmeFile);
  } else {
    skippedPaths.push(readmeFile);
  }

  return { createdPaths, skippedPaths };
}
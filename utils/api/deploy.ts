import fs from "fs";
import path from "path";
import { DeployInput, DeployResult, DeployLogEntry, GeneratedAsset } from "../types/zion";

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 64);
}

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function writeTextFile(filePath: string, content: string) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf8");
}

function nowIso(): string {
  return new Date().toISOString();
}

export async function performDeploy(input: DeployInput): Promise<DeployResult> {
  const version = "Zion OS v1.0";
  const logs: DeployLogEntry[] = [];
  const assets: GeneratedAsset[] = [];

  const instanceSlug = toSlug(input.instanceName);
  const baseDir = path.join(process.cwd(), "data", "deployments", instanceSlug);
  const docsDir = path.join(process.cwd(), "docs");
  const eventsDir = path.join(process.cwd(), "data", "events");
  const gptDir = path.join(process.cwd(), "data", "zion-gpt");
  const daoDir = path.join(process.cwd(), "data", "dao");
  const tokenDir = path.join(process.cwd(), "data", "token");

  ensureDir(baseDir);

  const configPath = path.join(baseDir, "config.json");
  writeTextFile(configPath, JSON.stringify({ ...input, instanceSlug, version, createdAt: nowIso() }, null, 2));
  logs.push({ timestamp: nowIso(), level: "info", action: "save_config", details: { configPath } });
  assets.push({ kind: "config", path: configPath, description: "Deployment config" });

  // 1. Initialize ZionGPT
  if (input.modules.gpt) {
    ensureDir(gptDir);
    const promptBasePath = path.join(gptDir, `${instanceSlug}-prompt-base.md`);
    const promptBase = `# ZionGPT Prompt Base\n\nInstance: ${input.instanceName}\nLanguage: ${input.defaultLanguage}\nGovernance: ${input.governanceMode}\n\nBehaviors:\n- Assist with proposals, resumes, and marketplace tasks.\n- Route to domain experts per module.\n`;
    writeTextFile(promptBasePath, promptBase);
    assets.push({ kind: "file", path: promptBasePath, description: "ZionGPT prompt base" });
    logs.push({ timestamp: nowIso(), level: "info", action: "zion_gpt_initialized" });
  }

  // 2. Deploy DAO + Token Logic
  if (input.modules.dao) {
    ensureDir(daoDir);
    const daoConfigPath = path.join(daoDir, `${instanceSlug}-dao.json`);
    writeTextFile(
      daoConfigPath,
      JSON.stringify(
        {
          treasury: `${instanceSlug}-treasury`,
          governanceMode: input.governanceMode,
          quorum: 0.6,
          votingPeriodDays: 7,
          constitutionDoc: `/constitution`,
          createdAt: nowIso(),
        },
        null,
        2
      )
    );
    assets.push({ kind: "config", path: daoConfigPath, description: "DAO configuration" });
    logs.push({ timestamp: nowIso(), level: "info", action: "dao_configured" });
  }

  if (input.modules.token || input.tokenActivation) {
    ensureDir(tokenDir);
    const tokenConfigPath = path.join(tokenDir, `${instanceSlug}-token.json`);
    writeTextFile(
      tokenConfigPath,
      JSON.stringify(
        {
          symbol: "ZION$",
          decimals: 18,
          enabled: input.tokenActivation,
          stakingEnabled: input.modules.token,
          escrowEnabled: true,
          createdAt: nowIso(),
        },
        null,
        2
      )
    );
    assets.push({ kind: "config", path: tokenConfigPath, description: "Token configuration" });
    logs.push({ timestamp: nowIso(), level: "info", action: "token_configured" });
  }

  // 3. Publish Assets
  const wpPath = path.join(docsDir, `whitepaper-${instanceSlug}.md`);
  const roadmapPath = path.join(docsDir, `roadmap-${instanceSlug}.md`);
  const changelogPath = path.join(docsDir, `changelog-${instanceSlug}.md`);
  const bookPath = path.join(docsDir, `zion-book-${instanceSlug}.md`);
  const trailerScriptPath = path.join(docsDir, `trailer-script-${instanceSlug}.md`);

  if (input.modules.roadmapWhitepaper) {
    ensureDir(docsDir);
    writeTextFile(
      wpPath,
      `# Zion Protocol Whitepaper (v1.0)\n\nInstance: ${input.instanceName}\nRegion: ${input.deploymentRegion}\nToken: ${input.tokenActivation ? "Enabled" : "Disabled"}\n\n## Abstract\nZion OS unifies marketplace, AI, DAO, and media into a programmable nation-state.\n`
    );
    assets.push({ kind: "file", path: wpPath, description: "Whitepaper v1.0" });
    logs.push({ timestamp: nowIso(), level: "info", action: "whitepaper_generated" });

    writeTextFile(
      roadmapPath,
      `# Public Roadmap\n\n- Q1: Launch core modules\n- Q2: DAO consolidation\n- Q3: Nation builder\n`
    );
    assets.push({ kind: "file", path: roadmapPath, description: "Public roadmap" });

    writeTextFile(
      changelogPath,
      `# Changelog\n\n- ${nowIso()}: Genesis deployment initialized for ${input.instanceName}.\n`
    );
    assets.push({ kind: "file", path: changelogPath, description: "Changelog" });
  }

  if (input.modules.bookBuilder) {
    ensureDir(docsDir);
    writeTextFile(
      bookPath,
      `# ${input.instanceName}: Founder Story & System Manifesto\n\nThis book captures the origin and guiding principles of ${input.instanceName}.\n`
    );
    assets.push({ kind: "file", path: bookPath, description: "Zion Book (markdown source)" });
  }

  if (input.modules.launchKit) {
    ensureDir(docsDir);
    writeTextFile(
      trailerScriptPath,
      `# Launch Trailer Script\n\nVoiceover: Welcome to ${input.instanceName}, a sovereign digital nation built on Zion OS.\n`
    );
    assets.push({ kind: "file", path: trailerScriptPath, description: "Trailer script" });
  }

  // Schedule launch stream (/summit)
  ensureDir(eventsDir);
  const summitEventPath = path.join(eventsDir, `summit-${instanceSlug}.json`);
  writeTextFile(
    summitEventPath,
    JSON.stringify(
      {
        name: `${input.instanceName} Summit`,
        route: "/summit",
        scheduledAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      },
      null,
      2
    )
  );
  assets.push({ kind: "event", path: summitEventPath, description: "Launch stream scheduled" });

  // 4. Activate Public Pages (record intent)
  const pagesActivationPath = path.join(baseDir, "pages.json");
  const defaultNationRoute = `/nation/${toSlug(input.defaultLanguage || "default")}`;
  writeTextFile(
    pagesActivationPath,
    JSON.stringify(
      {
        activate: [
          "/about",
          "/manifesto",
          "/constitution",
          "/partners",
          "/academy",
          "/marketplace",
          "/dao",
          defaultNationRoute,
        ],
      },
      null,
      2
    )
  );
  assets.push({ kind: "config", path: pagesActivationPath, description: "Public pages activation record" });

  // Optional modules markers
  const optionalModules = Object.entries(input.modules)
    .filter(([key, val]) => val && ["globalMap", "franchiseOnboarding", "referralAmbassadors", "grantPortal", "trailer", "bookStore"].includes(key))
    .map(([key]) => key);

  if (optionalModules.length > 0) {
    const optionalPath = path.join(baseDir, "optional-modules.json");
    writeTextFile(optionalPath, JSON.stringify({ enabled: optionalModules }, null, 2));
    assets.push({ kind: "config", path: optionalPath, description: "Enabled optional modules" });
  }

  const summary = `Initialized ${input.instanceName} (${instanceSlug}) with modules: ${Object.entries(input.modules)
    .filter(([, v]) => v)
    .map(([k]) => k)
    .join(", ")}.`;

  logs.push({ timestamp: nowIso(), level: "info", action: "deploy_complete", details: { instanceSlug } });

  return {
    success: true,
    instanceSlug,
    configPath,
    assets,
    logs,
    summary,
    version,
  };
}
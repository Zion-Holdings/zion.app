import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { DeploymentInput, deploymentInputSchema } from "@/lib/zod";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parse = deploymentInputSchema.safeParse(body);
    if (!parse.success) {
      return NextResponse.json({ error: "Invalid input", issues: parse.error.flatten() }, { status: 400 });
    }
    const input: DeploymentInput = parse.data;

    const slug = input.instanceName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    const instance = await prisma.instance.create({
      data: {
        name: input.instanceName,
        slug,
        domain: input.domain,
        subdomain: input.subdomain,
        vertical: input.vertical,
        defaultLanguage: input.defaultLanguage,
        tokenSystem: input.tokenSystem,
        governanceType: input.governanceType,
        region: input.region,
        country: input.country,
        features: {
          create: Object.entries(input.features).map(([key, enabled]) => ({ key, enabled: Boolean(enabled) })),
        },
        daoConfig: input.governanceType === "ADMIN" ? undefined : { create: { type: input.governanceType } },
      },
    });

    const deployment = await prisma.deployment.create({
      data: {
        instanceId: instance.id,
        inputJson: JSON.stringify(input),
        status: "RUNNING",
      },
    });

    queueOrchestration(deployment.id).catch(async (err) => {
      await prisma.deployment.update({ where: { id: deployment.id }, data: { status: "FAILED" } });
      await prisma.deploymentLog.create({ data: { deploymentId: deployment.id, level: "ERROR", message: String(err) } });
    });

    return NextResponse.json({ deploymentId: deployment.id, instanceId: instance.id });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

async function queueOrchestration(deploymentId: string) {
  await orchestrateDeployment(deploymentId);
}

async function orchestrateDeployment(deploymentId: string) {
  const deployment = await prisma.deployment.findUnique({ where: { id: deploymentId }, include: { instance: { include: { features: true, daoConfig: true } } } });
  if (!deployment) return;
  const inst = deployment.instance;

  const steps: Array<[string, () => Promise<void>]> = [
    ["Generate CMS instance", async () => {}],
    ["Provision partner API key", async () => {
      await prisma.apiKey.create({ data: { key: randomUUID(), name: `${inst.slug}-partner`, instanceId: inst.id, scopesJson: JSON.stringify(["read", "write"]) } });
    }],
    ["Create landing + auth flows", async () => {}],
    ["Create placeholder blog + roadmap", async () => {}],
    ["Activate prompt stack", async () => {}],
    ["Schedule resume fine-tuner", async () => {}],
    ["Sync KYC + wallet checks", async () => {}],
    ["Load region job categories + wage baselines", async () => {}],
    ["Create manifesto + constitution", async () => {}],
  ];

  for (const [title, fn] of steps) {
    await prisma.deploymentLog.create({ data: { deploymentId: deployment.id, level: "INFO", message: title } });
    await fn();
  }

  await prisma.deployment.update({ where: { id: deployment.id }, data: { status: "SUCCESS", completedAt: new Date() } });
}
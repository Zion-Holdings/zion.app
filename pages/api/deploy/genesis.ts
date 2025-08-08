import type { NextApiRequest, NextApiResponse } from "next";
import { performDeploy } from "../../../utils/api/deploy";
import { DeployInput } from "../../../utils/types/zion";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const adminKey = process.env.ZION_ADMIN_KEY;
  const providedKey = (req.headers["x-admin-key"] || req.query.adminKey || "").toString();

  if (adminKey && providedKey !== adminKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const body = req.body as Partial<DeployInput>;

    if (!body?.instanceName) return res.status(400).json({ error: "Missing instanceName" });
    if (!body?.defaultLanguage) return res.status(400).json({ error: "Missing defaultLanguage" });
    if (!body?.deploymentRegion) return res.status(400).json({ error: "Missing deploymentRegion" });
    if (typeof body?.tokenActivation !== "boolean") return res.status(400).json({ error: "Missing tokenActivation" });
    if (!body?.governanceMode) return res.status(400).json({ error: "Missing governanceMode" });

    const modules = body.modules || {
      marketplace: true,
      gpt: true,
      academy: true,
      token: true,
      dao: true,
      nationBuilder: true,
      launchKit: true,
      bookBuilder: true,
      roadmapWhitepaper: true,
      apiDocsWiki: true,
      zionBrain: true,
    };

    const input: DeployInput = {
      instanceName: body.instanceName!,
      defaultLanguage: body.defaultLanguage!,
      deploymentRegion: body.deploymentRegion!,
      tokenActivation: body.tokenActivation!,
      governanceMode: body.governanceMode as any,
      branding: body.branding || {},
      modules: modules as any,
      requestedRoutes: body.requestedRoutes || ["/deploy/genesis", "/zion/init"],
    };

    const result = await performDeploy(input);
    return res.status(200).json(result);
  } catch (error: any) {
    console.error("Deploy error", error);
    return res.status(500).json({ error: "Deployment failed", message: error?.message || String(error) });
  }
}
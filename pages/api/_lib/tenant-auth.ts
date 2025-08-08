import type { NextApiRequest } from "next";
import { getTenantByHost, hostnameFromReqHeaders } from "../../../utils/tenant";

export async function resolveApiTenant(req: NextApiRequest) {
  const host = hostnameFromReqHeaders(req.headers as any);
  const tenant = await getTenantByHost(host);
  return tenant;
}
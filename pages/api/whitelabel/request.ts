import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "../../../utils/supabase/server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { brandName, subdomain, primaryColor, customDomain, themePreset } = req.body || {};
  if (!brandName) return res.status(400).json({ error: "brandName required" });

  const { error } = await supabaseAdmin.from("whitelabel_requests").insert({
    brand_name: brandName,
    subdomain: subdomain || null,
    primary_color: primaryColor || "#4f46e5",
    custom_domain: customDomain || null,
    theme_preset: themePreset || "light",
  });

  if (error) return res.status(500).json({ error: error.message });
  return res.status(201).json({ ok: true });
}
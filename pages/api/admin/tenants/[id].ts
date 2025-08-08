import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "../../../../utils/supabase/server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id || typeof id !== "string") return res.status(400).json({ error: "Invalid id" });

  if (req.method === "PATCH") {
    const { action, ...fields } = req.body || {};

    if (action === "suspend") {
      const { error } = await supabaseAdmin.from("tenants").update({ suspended: true }).eq("id", id);
      if (error) return res.status(500).json({ error: error.message });
      return res.json({ ok: true });
    }
    if (action === "activate") {
      const { error } = await supabaseAdmin.from("tenants").update({ suspended: false }).eq("id", id);
      if (error) return res.status(500).json({ error: error.message });
      return res.json({ ok: true });
    }
    if (action === "reset") {
      // Reset: clear cms content and email templates for the tenant
      await supabaseAdmin.from("cms_pages").delete().eq("tenant_id", id);
      await supabaseAdmin.from("email_templates").delete().eq("tenant_id", id);
      // Reseed defaults
      const { data: tenant } = await supabaseAdmin.from("tenants").select("brand_name").eq("id", id).single();
      const brandName = tenant?.brand_name || "Your Brand";
      await supabaseAdmin.from("email_templates").insert({ tenant_id: id, name: "welcome", subject: `Welcome to ${brandName}`, body: "Hello {{name}}, welcome!" });
      await supabaseAdmin.from("cms_pages").insert({ tenant_id: id, slug: "home", title: brandName, content: "{}" });
      return res.json({ ok: true });
    }

    // Generic edits
    const updatePayload: Record<string, any> = {};
    if (fields.brandName) updatePayload["brand_name"] = fields.brandName;
    if (fields.subdomain !== undefined) updatePayload["subdomain"] = fields.subdomain || null;
    if (fields.customDomain !== undefined) updatePayload["custom_domain"] = fields.customDomain || null;
    if (fields.primaryColor) updatePayload["primary_color"] = fields.primaryColor;
    if (fields.themePreset) updatePayload["theme_preset"] = fields.themePreset;
    if (fields.accountManager !== undefined) updatePayload["account_manager"] = fields.accountManager || null;

    if (Object.keys(updatePayload).length > 0) {
      const { error } = await supabaseAdmin.from("tenants").update(updatePayload).eq("id", id);
      if (error) return res.status(500).json({ error: error.message });
    }

    return res.json({ ok: true });
  }

  if (req.method === "DELETE") {
    // Danger: cascade delete dependent data
    await supabaseAdmin.from("cms_pages").delete().eq("tenant_id", id);
    await supabaseAdmin.from("email_templates").delete().eq("tenant_id", id);
    const { error } = await supabaseAdmin.from("tenants").delete().eq("id", id);
    if (error) return res.status(500).json({ error: error.message });
    return res.json({ ok: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "../../../../utils/supabase/server";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { data, error } = await supabaseAdmin.from("tenants").select("*").order("created_at", { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    const tenants = (data || []).map((row: any) => ({
      id: row.id,
      brandName: row.brand_name,
      subdomain: row.subdomain,
      customDomain: row.custom_domain,
      primaryColor: row.primary_color,
      logoUrl: row.logo_url,
      themePreset: row.theme_preset,
      suspended: !!row.suspended,
      accountManager: row.account_manager || null,
    }));
    return res.json({ tenants });
  }

  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.multiples = false;

    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(400).json({ error: "Invalid form data" });

      const brandName = String(fields.brandName || "").trim();
      const subdomain = String(fields.subdomain || "").trim() || null;
      const primaryColor = String(fields.primaryColor || "#4f46e5");
      const customDomainRaw = String(fields.customDomain || "").trim();
      const customDomain = customDomainRaw ? customDomainRaw.toLowerCase() : null;
      const themePreset = String(fields.themePreset || "light");

      if (!brandName) return res.status(400).json({ error: "brandName required" });

      // Create tenant row first
      const { data: inserted, error: insertError } = await supabaseAdmin
        .from("tenants")
        .insert({
          brand_name: brandName,
          subdomain,
          custom_domain: customDomain,
          primary_color: primaryColor,
          theme_preset: themePreset,
        })
        .select("*")
        .limit(1)
        .single();

      if (insertError || !inserted) return res.status(500).json({ error: insertError?.message || "Failed to create tenant" });

      let logoUrl: string | null = null;
      const file = (files.logo as formidable.File) || null;
      if (file && file.filepath) {
        const fileBuffer = fs.readFileSync(file.filepath);
        const path = `logos/${inserted.id}-${Date.now()}-${file.originalFilename}`;
        const { data: upload, error: uploadError } = await supabaseAdmin.storage.from("assets").upload(path, fileBuffer, {
          contentType: file.mimetype || "image/png",
          upsert: true,
        });
        if (!uploadError && upload) {
          const { data: publicUrl } = supabaseAdmin.storage.from("assets").getPublicUrl(path);
          logoUrl = publicUrl.publicUrl;
        }
      }

      if (logoUrl) {
        await supabaseAdmin.from("tenants").update({ logo_url: logoUrl }).eq("id", inserted.id);
      }

      // Seed default content structures for isolation (by tenant_id)
      await supabaseAdmin.from("email_templates").insert({ tenant_id: inserted.id, name: "welcome", subject: `Welcome to ${brandName}`, body: "Hello {{name}}, welcome!" }).select().limit(1);
      await supabaseAdmin.from("cms_pages").insert({ tenant_id: inserted.id, slug: "home", title: brandName, content: "{}" }).select().limit(1);

      // Optional operator notification placeholder
      console.log(`[operator] New tenant deployed: ${brandName} (${inserted.id})`);

      return res.status(201).json({ id: inserted.id });
    });
    return;
  }

  return res.status(405).json({ error: "Method not allowed" });
}
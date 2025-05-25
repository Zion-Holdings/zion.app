export function slugify(title: string, separator = "-"): string {
  const sep = separator;
  const escaped = sep.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  return title
    .trim()
    .replace(/_/g, " ") // treat underscores like spaces
    .normalize("NFD")
    .replace(/[\u0300-\u036F]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, sep)
    .replace(new RegExp(`${escaped}{2,}`, "g"), sep)
    .replace(new RegExp(`^${escaped}+|${escaped}+$`, "g"), "");
}

/**
 * Convert a slug back into a human readable title.
 * This simply splits the slug on the separator and
 * capitalizes each word.
 */
export function unslugify(slug: string, separator = "-"): string {
  const escaped = separator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return slug
    .split(new RegExp(escaped, "g"))
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}


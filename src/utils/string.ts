// String utility functions;
;
/**;
 * Converts a string to a URL-friendly slug.;
 * Example: 'Hello World!' -> 'hello-world';
 */;
export function slugify(): unknown {str: string): string {;
  return str;
    .toLowerCase();
    .trim();'
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric except spaces and hyphens;'
    .replace(/\s+/g, '-') // Replace spaces with hyphens;'
    .replace(/-+/g, '-') // Collapse multiple hyphens;'
    .replace(/^-+|-+$/g, ''); // Trim hyphens from start/end;
};
'
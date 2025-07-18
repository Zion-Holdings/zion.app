// String utility functions;
/**;
 * Converts a string to a URL-friendly slug.;
<<<<<<< HEAD
 * Example: 'Hello World!' -> 'hello-world;
 */'
export function slugify(): unknown {): unknown {): unknown {): unknown {): unknown {str: string): string {;
  return str;
    .toLowerCase()'
    .trim();
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric except spaces and hyphens;
    .replace(/\s+/g, '-') // Replace spaces with hyphens;
    .replace(/-+/g, '-') // Collapse multiple hyphens;
    .replace(/^-+|-+$/g, ''); // Trim hyphens from start/end;
};
}'
=======
 * Example: 'Hello World!' -> 'hello-world;'
 */;'';
export function slugify(): unknown {): unknown {): unknown {): unknown {): unknown {str: string): string {;
  return str;
    .toLowerCase();''
    .trim();;
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric except spaces and hyphens;;'
    .replace(/\s+/g, '-') // Replace spaces with hyphens;;'
    .replace(/-+/g, '-') // Collapse multiple hyphens;;'
    .replace(/^-+|-+$/g, ''); // Trim hyphens from start/end;'
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''
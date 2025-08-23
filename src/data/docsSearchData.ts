import { SearchSuggestion } from "@/types/search";

export interface DocsSearchItem extends SearchSuggestion {
  path: string;
}

export const DOCS_SEARCH_ITEMS: DocsSearchItem[] = [
  {
    text: "Getting Started",
    type: "doc",
    path: "/developers/docs/getting-started",
  },
  {
    text: "API Reference",
    type: "doc",
    path: "/developers/docs/reference",
  },
  {
    text: "Webhooks",
    type: "doc",
    path: "/developers/docs/webhooks",
  },
  {
    text: "Sample Code",
    type: "doc",
    path: "/docs/sample-code",
  },
  {
    text: "Error Codes & Rate Limits",
    type: "doc",
    path: "/developers/docs/errors",
  },
];

export const docsSearchSuggestions: SearchSuggestion[] = DOCS_SEARCH_ITEMS.map(
  ({ text, type, path }) => ({ text, type, slug: path })
);

export function getDocsSearchPath(text: string): string | undefined {
  return DOCS_SEARCH_ITEMS.find((item) => item.text === text)?.path;
}

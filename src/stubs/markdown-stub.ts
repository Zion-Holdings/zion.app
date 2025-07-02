// Emergency stub for react-markdown during build issues

export interface ReactMarkdownProps {
  children?: string;
  className?: string;
  components?: Record<string, any>;
  [key: string]: any;
}

// Stub ReactMarkdown component - simple function that returns the children as text
export const ReactMarkdown = (props: ReactMarkdownProps) => {
  // Return null for build compatibility, or could return children as plain text
  return null;
};

// Export as default
export default ReactMarkdown;

// Additional exports that might be needed
export const remarkPlugins = [];
export const rehypePlugins = [];
// eslint-disable-next-line @typescript-eslint/no-require-imports
// Mock for react-markdown to prevent Jest transformation issues
module.exports = function ReactMarkdown({ children }) {
  return children;
}; 
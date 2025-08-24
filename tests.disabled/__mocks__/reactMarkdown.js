// Mock for react-markdown to prevent Jest transformation issues
module.exports = function ReactMarkdown({ children }) {
  return children;
};

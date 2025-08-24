import React from 'react';

interface CodeBlockProps {
  children?: React.ReactNode;
  code?: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({ children, code, language = 'text', className = '', showLineNumbers = false }: CodeBlockProps) {
  const content = code || children || '';
  
  return (
    <div className={`bg-gray-900 rounded-lg p-4 overflow-x-auto ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400 uppercase tracking-wide">{language}</span>
        <button
          onClick={() => navigator.clipboard.writeText(typeof content === 'string' ? content : content.toString())}
          className="text-xs text-gray-400 hover:text-white transition-colors"
        >
          Copy
        </button>
      </div>
      <pre className="text-sm text-gray-100">
        <code>{content}</code>
      </pre>
    </div>
  );
}
import React, { useState, useRef, useEffect } from 'react';
import { Code, Play, Copy, Download, Sparkles, Zap, Brain, Lightbulb, Settings, X, Maximize2, Minimize2 } from 'lucide-react';

interface CodeSuggestion {
  id: string;
  code: string;
  language: string;
  description: string;
  confidence: number;
  tags: string[];
}

interface GeneratedCode {
  id: string;
  prompt: string;
  code: string;
  language: string;
  timestamp: Date;
  isFavorite: boolean;
}

const mockSuggestions: CodeSuggestion[] = [
  {
    id: '1',
    code: 'const handleSubmit = async (data: FormData) => {\n  try {\n    const response = await api.submit(data);\n    if (response.success) {\n      toast.success("Form submitted successfully!");\n    }\n  } catch (error) {\n    console.error("Submission failed:", error);\n    toast.error("Submission failed. Please try again.");\n  }\n};',
    language: 'typescript',
    description: 'Async form submission handler with error handling and toast notifications',
    confidence: 95,
    tags: ['form', 'async', 'error-handling', 'typescript']
  },
  {
    id: '2',
    code: 'const useLocalStorage = <T>(key: string, initialValue: T) => {\n  const [storedValue, setStoredValue] = useState<T>(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      console.error(error);\n      return initialValue;\n    }\n  });\n\n  const setValue = (value: T | ((val: T) => T)) => {\n    try {\n      const valueToStore = value instanceof Function ? value(storedValue) : value;\n      setStoredValue(valueToStore);\n      window.localStorage.setItem(key, JSON.stringify(valueToStore));\n    } catch (error) {\n      console.error(error);\n    }\n  };\n\n  return [storedValue, setValue] as const;\n};',
    language: 'typescript',
    description: 'Custom React hook for localStorage with TypeScript support',
    confidence: 92,
    tags: ['react', 'hook', 'localStorage', 'typescript']
  },
  {
    id: '3',
    code: 'const debounce = <T extends (...args: any[]) => any>(\n  func: T,\n  wait: number\n): ((...args: Parameters<T>) => void) => {\n  let timeout: NodeJS.Timeout;\n  \n  return (...args: Parameters<T>) => {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func(...args), wait);\n  };\n};',
    language: 'typescript',
    description: 'Type-safe debounce utility function',
    confidence: 88,
    tags: ['utility', 'debounce', 'typescript', 'performance']
  }
];

const languages = [
  'typescript', 'javascript', 'python', 'java', 'csharp', 'php', 'go', 'rust',
  'swift', 'kotlin', 'scala', 'ruby', 'dart', 'cpp', 'c', 'html', 'css', 'sql'
];

export function AICodeGenerator() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('typescript');
  const [generatedCode, setGeneratedCode] = useState<GeneratedCode[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState<CodeSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeTab, setActiveTab] = useState<'generator' | 'suggestions' | 'history'>('generator');
  const [codeHistory, setCodeHistory] = useState<GeneratedCode[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prompt.length > 10) {
      // Simulate AI suggestions
      const filtered = mockSuggestions.filter(suggestion =>
        suggestion.description.toLowerCase().includes(prompt.toLowerCase()) ||
        suggestion.tags.some(tag => tag.toLowerCase().includes(prompt.toLowerCase()))
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [prompt]);

  const generateCode = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    
    // Simulate AI code generation
    setTimeout(() => {
      const newCode: GeneratedCode = {
        id: Date.now().toString(),
        prompt: prompt,
        code: `// Generated code for: ${prompt}\nconst ${prompt.toLowerCase().replace(/\s+/g, '_')} = () => {\n  // TODO: Implement your logic here\n  console.log("${prompt}");\n  \n  return {\n    success: true,\n    message: "Code generated successfully"\n  };\n};`,
        language: selectedLanguage,
        timestamp: new Date(),
        isFavorite: false
      };
      
      setGeneratedCode(prev => [newCode, ...prev]);
      setCodeHistory(prev => [newCode, ...prev]);
      setPrompt('');
      setIsGenerating(false);
    }, 2000 + Math.random() * 1000);
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here
  };

  const downloadCode = (code: string, language: string) => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated_code.${language === 'typescript' ? 'ts' : language === 'javascript' ? 'js' : language}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const toggleFavorite = (id: string) => {
    setGeneratedCode(prev => prev.map(code => 
      code.id === id ? { ...code, isFavorite: !code.isFavorite } : code
    ));
  };

  const getLanguageIcon = (language: string) => {
    const icons: Record<string, string> = {
      typescript: '⚛️',
      javascript: '🟡',
      python: '🐍',
      java: '☕',
      csharp: '💎',
      php: '🐘',
      go: '🐹',
      rust: '🦀',
      swift: '🍎',
      kotlin: '🔴',
      scala: '🔴',
      ruby: '💎',
      dart: '🎯',
      cpp: '⚡',
      c: '⚡',
      html: '🌐',
      css: '🎨',
      sql: '🗄️'
    };
    return icons[language] || '📝';
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-52 p-3 bg-zion-purple hover:bg-zion-purple-light text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        title="AI Code Generator"
      >
        <Code className="w-5 h-5" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-52 z-50">
        <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-lg p-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-zion-purple rounded-full animate-pulse"></div>
            <span className="text-sm text-zion-slate">AI Code Generator</span>
            <button
              onClick={() => setIsMinimized(false)}
              className="text-zion-slate-light hover:text-zion-slate transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
      isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[900px] h-[700px]'
    }`} ref={containerRef}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-zion-purple rounded-full animate-pulse"></div>
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-zion-purple" />
            <span className="font-semibold text-zion-slate">AI Code Generator</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 text-zion-slate-light hover:text-zion-slate transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 text-zion-slate-light hover:text-zion-slate transition-colors"
            title="Minimize"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-zion-slate-light hover:text-zion-slate transition-colors"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zion-slate-light">
        <button
          onClick={() => setActiveTab('generator')}
          className={`px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'generator'
              ? 'text-zion-purple border-b-2 border-zion-purple'
              : 'text-zion-slate-light hover:text-zion-slate'
          }`}
        >
          <Code className="w-4 h-4 inline mr-2" />
          Code Generator
        </button>
        <button
          onClick={() => setActiveTab('suggestions')}
          className={`px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'suggestions'
              ? 'text-zion-purple border-b-2 border-zion-purple'
              : 'text-zion-slate-light hover:text-zion-slate'
          }`}
        >
          <Lightbulb className="w-4 h-4 inline mr-2" />
          Smart Suggestions
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'history'
              ? 'text-zion-purple border-b-2 border-zion-purple'
              : 'text-zion-slate-light hover:text-zion-slate'
          }`}
        >
          <Brain className="w-4 h-4 inline mr-2" />
          Code History
        </button>
      </div>

      <div className="flex-1 overflow-hidden">
        {/* Code Generator Tab */}
        {activeTab === 'generator' && (
          <div className="p-6 h-full flex flex-col">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-zion-slate mb-4">Generate Code with AI</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zion-slate mb-2">
                    Describe what you want to build
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., Create a React hook for managing form state with validation"
                    className="w-full h-24 px-4 py-3 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none"
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zion-slate mb-2">
                      Programming Language
                    </label>
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                    >
                      {languages.map(lang => (
                        <option key={lang} value={lang}>
                          {lang.charAt(0).toUpperCase() + lang.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <button
                    onClick={generateCode}
                    disabled={!prompt.trim() || isGenerating}
                    className="mt-6 px-6 py-2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white rounded-lg hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Generate Code
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Generated Code Display */}
            {generatedCode.length > 0 && (
              <div className="flex-1 overflow-y-auto">
                <h4 className="text-md font-semibold text-zion-slate mb-4">Generated Code</h4>
                {generatedCode.map((code) => (
                  <div key={code.id} className="bg-zion-slate-light/5 border border-zion-slate-light rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{getLanguageIcon(code.language)}</span>
                        <span className="text-sm font-medium text-zion-slate capitalize">{code.language}</span>
                        <span className="text-xs text-zion-slate-light">
                          {code.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleFavorite(code.id)}
                          className={`p-2 rounded-lg transition-colors ${
                            code.isFavorite 
                              ? 'text-zion-gold bg-zion-gold/10' 
                              : 'text-zion-slate-light hover:text-zion-gold hover:bg-zion-gold/10'
                          }`}
                        >
                          ⭐
                        </button>
                        <button
                          onClick={() => copyToClipboard(code.code)}
                          className="p-2 text-zion-cyan hover:text-zion-cyan-light hover:bg-zion-cyan/10 rounded-lg transition-colors"
                          title="Copy to clipboard"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => downloadCode(code.code, code.language)}
                          className="p-2 text-zion-emerald hover:text-zion-emerald-light hover:bg-zion-emerald/10 rounded-lg transition-colors"
                          title="Download code"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-zion-slate rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-zion-slate-light">
                        <code>{code.code}</code>
                      </pre>
                    </div>
                    
                    <div className="mt-3 text-sm text-zion-slate-light">
                      <strong>Prompt:</strong> {code.prompt}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Smart Suggestions Tab */}
        {activeTab === 'suggestions' && (
          <div className="p-6 h-full overflow-y-auto">
            <h3 className="text-lg font-semibold text-zion-slate mb-4">Smart Code Suggestions</h3>
            
            {showSuggestions && (
              <div className="mb-6">
                <h4 className="text-md font-medium text-zion-slate mb-3">Based on your input:</h4>
                <div className="space-y-4">
                  {suggestions.map((suggestion) => (
                    <div key={suggestion.id} className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h5 className="font-medium text-zion-slate mb-2">{suggestion.description}</h5>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">{getLanguageIcon(suggestion.language)}</span>
                            <span className="text-sm text-zion-slate capitalize">{suggestion.language}</span>
                            <span className="text-sm text-zion-emerald">{suggestion.confidence}% confidence</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {suggestion.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-zion-purple/10 text-zion-purple text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard(suggestion.code)}
                          className="p-2 text-zion-cyan hover:text-zion-cyan-light hover:bg-zion-cyan/10 rounded-lg transition-colors"
                          title="Copy code"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="bg-zion-slate rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-zion-slate-light">
                          <code>{suggestion.code}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {!showSuggestions && (
              <div className="text-center py-12">
                <Lightbulb className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                <p className="text-zion-slate-light">Start typing in the generator to see smart suggestions</p>
              </div>
            )}
          </div>
        )}

        {/* Code History Tab */}
        {activeTab === 'history' && (
          <div className="p-6 h-full overflow-y-auto">
            <h3 className="text-lg font-semibold text-zion-slate mb-4">Code Generation History</h3>
            
            {codeHistory.length > 0 ? (
              <div className="space-y-4">
                {codeHistory.map((code) => (
                  <div key={code.id} className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{getLanguageIcon(code.language)}</span>
                        <span className="text-sm font-medium text-zion-slate capitalize">{code.language}</span>
                        <span className="text-xs text-zion-slate-light">
                          {code.timestamp.toLocaleDateString()} at {code.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleFavorite(code.id)}
                          className={`p-2 rounded-lg transition-colors ${
                            code.isFavorite 
                              ? 'text-zion-gold bg-zion-gold/10' 
                              : 'text-zion-slate-light hover:text-zion-gold hover:bg-zion-gold/10'
                          }`}
                        >
                          ⭐
                        </button>
                        <button
                          onClick={() => copyToClipboard(code.code)}
                          className="p-2 text-zion-cyan hover:text-zion-cyan-light hover:bg-zion-cyan/10 rounded-lg transition-colors"
                          title="Copy to clipboard"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-sm text-zion-slate-light mb-3">
                      <strong>Prompt:</strong> {code.prompt}
                    </div>
                    
                    <div className="bg-zion-slate rounded-lg p-3 overflow-x-auto">
                      <pre className="text-xs text-zion-slate-light">
                        <code>{code.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Brain className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                <p className="text-zion-slate-light">No code generation history yet</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
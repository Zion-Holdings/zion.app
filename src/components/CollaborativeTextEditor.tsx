import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Sparkles, 
  Save, 
  Download, 
  Loader2
} from 'lucide-react';
import { useRealTimeCollaboration } from '../hooks/useRealTimeCollaboration';
import { useAnalytics } from '../hooks/useAnalytics';

interface TextChange {
  id: string;
  type: 'insert' | 'delete' | 'replace';
  position: number;
  text?: string;
  length?: number;
  timestamp: Date;
  userId: string;
  version: number;
}

interface AISuggestion {
  id: string;
  type: 'grammar' | 'style' | 'completion' | 'rewrite';
  text: string;
  confidence: number;
  position: number;
  length: number;
  reason: string;
  alternatives?: string[];
}

interface EditorState {
  content: string;
  selection: {
    start: number;
    end: number;
    text: string;
  };
  version: number;
  changes: TextChange[];
  suggestions: AISuggestion[];
  conflicts: Array<{
    id: string;
    change: TextChange;
    resolution: 'pending' | 'accepted' | 'rejected';
  }>;
}

interface CollaborativeTextEditorProps {
  roomId: string;
  userId: string;
  userName: string;
  initialContent?: string;
  enableAI?: boolean;
  enableCollaboration?: boolean;
  enableVersioning?: boolean;
  className?: string;
  onSave?: (content: string) => void;
  onExport?: (content: string, format: 'txt' | 'md' | 'html') => void;
}

export const CollaborativeTextEditor: React.FC<CollaborativeTextEditorProps> = ({
  roomId,
  userId,
  userName,
  initialContent = '',
  enableAI = true,
  enableCollaboration = true,
  enableVersioning = true,
  className = '',
  onSave,
  onExport
}) => {
  const { trackEvent } = useAnalytics({
    enableTracking: true,
    enableUserBehaviorTracking: true
  });

  const [editorState, setEditorState] = useState<EditorState>({
    content: initialContent,
    selection: { start: 0, end: 0, text: '' },
    version: 0,
    changes: [],
    suggestions: [],
    conflicts: []
  });

  const [showSuggestions] = useState(true);
  const [showCollaborators, setShowCollaborators] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const editorRef = useRef<HTMLTextAreaElement>(null);
  const collaborationRef = useRef<HTMLDivElement>(null);

  // Initialize real-time collaboration
  const collaboration = useRealTimeCollaboration({
    roomId,
    userId,
    userName,
    enablePresence: true,
    enableCursors: true,
    enableSelection: true,
    enableTextSync: true,
    conflictResolution: 'client',
    messageRetention: 1000
  });

  // Handle text changes
  const handleTextChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = event.target.value;
    const selectionStart = event.target.selectionStart;
    const selectionEnd = event.target.selectionEnd;
    const selectedText = newContent.slice(selectionStart, selectionEnd);

    setEditorState(prev => {
      const change: TextChange = {
        id: `change_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        type: newContent.length > prev.content.length ? 'insert' : 'delete',
        position: Math.min(selectionStart, prev.content.length),
        text: newContent.length > prev.content.length ? newContent.slice(prev.content.length) : undefined,
        length: Math.abs(newContent.length - prev.content.length),
        timestamp: new Date(),
        userId,
        version: prev.version + 1
      };

      return {
        ...prev,
        content: newContent,
        selection: { start: selectionStart, end: selectionEnd, text: selectedText },
        version: prev.version + 1,
        changes: [...prev.changes, change]
      };
    });

    // Sync with other collaborators
    if (enableCollaboration && collaboration.isConnected) {
      collaboration.syncTextChange({
        type: 'text_change',
        content: newContent,
        selection: { start: selectionStart, end: selectionEnd },
        version: editorState.version + 1
      });
    }

    // Track text change
    trackEvent('editor', 'text_changed', 'content_modified', newContent.length);
  }, [enableCollaboration, collaboration, editorState.version, trackEvent]);

  // Handle selection change
  const handleSelectionChange = useCallback((event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    const start = target.selectionStart;
    const end = target.selectionEnd;
    const text = target.value.slice(start, end);

    setEditorState(prev => ({
      ...prev,
      selection: { start, end, text }
    }));

    // Sync selection with collaborators
    if (enableCollaboration && collaboration.isConnected) {
      collaboration.updateSelection(start, end, text);
    }
  }, [enableCollaboration, collaboration]);

  // Handle cursor movement
  const handleCursorMove = useCallback((event: React.MouseEvent<HTMLTextAreaElement>) => {
    if (!enableCollaboration || !collaboration.isConnected) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    collaboration.updateCursor(x, y, 'editor');
  }, [enableCollaboration, collaboration]);

  // Generate AI suggestions
  const generateAISuggestions = useCallback(async () => {
    if (!enableAI || !editorState.content.trim()) return;

    setIsProcessing(true);

    try {
      // Simulate AI processing - in production, this would call an AI service
      await new Promise(resolve => setTimeout(resolve, 2000));

      const suggestions: AISuggestion[] = [];

      // Grammar suggestions
      if (editorState.content.includes('its')) {
        suggestions.push({
          id: `suggestion_${Date.now()}_1`,
          type: 'grammar',
          text: "it's",
          confidence: 0.95,
          position: editorState.content.indexOf('its'),
          length: 3,
          reason: "Consider using 'it's' (contraction of 'it is') instead of 'its' (possessive)",
          alternatives: ["it's", "it is"]
        });
      }

      // Style suggestions
      if (editorState.content.includes('very')) {
        suggestions.push({
          id: `suggestion_${Date.now()}_2`,
          type: 'style',
          text: "extremely",
          confidence: 0.88,
          position: editorState.content.indexOf('very'),
          length: 4,
          reason: "Consider using a more specific adjective instead of 'very'",
          alternatives: ["extremely", "highly", "remarkably", "exceptionally"]
        });
      }

      // Completion suggestions
      if (editorState.content.endsWith('The main benefits')) {
        suggestions.push({
          id: `suggestion_${Date.now()}_3`,
          type: 'completion',
          text: " include improved efficiency, cost savings, and enhanced user experience.",
          confidence: 0.92,
          position: editorState.content.length,
          length: 0,
          reason: "Complete the sentence with common benefit statements",
          alternatives: [
            " include improved efficiency, cost savings, and enhanced user experience.",
            " are numerous and well-documented in industry research.",
            " can be measured through key performance indicators."
          ]
        });
      }

      setEditorState(prev => ({
        ...prev,
        suggestions: [...prev.suggestions, ...suggestions]
      }));

      trackEvent('editor', 'ai_suggestions_generated', 'suggestions_created', suggestions.length);

    } catch (error) {
      console.error('Failed to generate AI suggestions:', error);
      trackEvent('editor', 'ai_suggestions_failed', 'generation_error', undefined, { 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    } finally {
      setIsProcessing(false);
    }
  }, [enableAI, editorState.content, trackEvent]);

  // Apply AI suggestion
  const applySuggestion = useCallback((suggestion: AISuggestion) => {
    setEditorState(prev => {
      let newContent = prev.content;

      if (suggestion.type === 'completion') {
        newContent = newContent.slice(0, suggestion.position) + suggestion.text + newContent.slice(suggestion.position);
      } else if (suggestion.type === 'grammar' || suggestion.type === 'style') {
        // For grammar and style, we need to find and replace the text
        const searchText = editorState.content.slice(suggestion.position, suggestion.position + suggestion.length);
        newContent = newContent.replace(searchText, suggestion.text);
      }

      return {
        ...prev,
        content: newContent,
        suggestions: prev.suggestions.filter(s => s.id !== suggestion.id)
      };
    });

    // Focus editor and set cursor position
    if (editorRef.current) {
      editorRef.current.focus();
      const newPosition = suggestion.position + suggestion.text.length;
      editorRef.current.setSelectionRange(newPosition, newPosition);
    }

    trackEvent('editor', 'ai_suggestion_applied', suggestion.type, undefined, { suggestionId: suggestion.id });
  }, [editorState.content, trackEvent]);

  // Save content
  const handleSave = useCallback(() => {
    onSave?.(editorState.content);
    setLastSaved(new Date());
    trackEvent('editor', 'content_saved', 'save_completed');
  }, [editorState.content, onSave, trackEvent]);

  // Export content
  const handleExport = useCallback((format: 'txt' | 'md' | 'html') => {
    let exportContent = editorState.content;

    if (format === 'html') {
      exportContent = `<html><body><pre>${editorState.content}</pre></body></html>`;
    } else if (format === 'md') {
      exportContent = `# Document\n\n${editorState.content}`;
    }

    if (onExport) {
      onExport(exportContent, format);
    } else {
      // Default export behavior
      const blob = new Blob([exportContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `document.${format}`;
      a.click();
      window.URL.revokeObjectURL(url);
    }

    trackEvent('editor', 'content_exported', format, undefined, { format });
  }, [editorState.content, onExport, trackEvent]);

  // Handle collaboration text changes
  useEffect(() => {
    const handleCollaborationTextChange = (event: CustomEvent) => {
      const { message } = event.detail;
      
      if (message.type === 'text_change' && message.userId !== userId) {
        // Handle incoming text changes from other users
        setEditorState(prev => {
          // Simple merge strategy - in production, this would use operational transformation
          return {
            ...prev,
            content: message.payload.content,
            version: Math.max(prev.version, message.payload.version)
          };
        });

        trackEvent('editor', 'collaboration_sync', 'text_synced', undefined, { 
          userId: message.userId,
          version: message.payload.version 
        });
      }
    };

    window.addEventListener('collaborationTextChange', handleCollaborationTextChange as EventListener);
    
    return () => {
      window.removeEventListener('collaborationTextChange', handleCollaborationTextChange as EventListener);
    };
  }, [userId, trackEvent]);

  // Auto-save functionality
  useEffect(() => {
    if (!enableVersioning) return;

    const autoSaveInterval = setInterval(() => {
      if (editorState.content !== initialContent) {
        handleSave();
      }
    }, 30000); // Auto-save every 30 seconds

    return () => clearInterval(autoSaveInterval);
  }, [editorState.content, initialContent, enableVersioning, handleSave]);

  // Generate suggestions when content changes significantly
  useEffect(() => {
    if (!enableAI) return;

    const debounceTimer = setTimeout(() => {
      if (editorState.content.length > 100) {
        generateAISuggestions();
      }
    }, 3000);

    return () => clearTimeout(debounceTimer);
  }, [editorState.content, enableAI, generateAISuggestions]);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Collaborative Text Editor
            {collaboration.isConnected && (
              <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-full text-xs">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Live
              </div>
            )}
          </h3>
          
          <div className="flex items-center gap-2">
            {/* Collaboration Status */}
            {enableCollaboration && (
              <button
                onClick={() => setShowCollaborators(!showCollaborators)}
                className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-sm transition-colors flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                {collaboration.onlineUsers.length}
              </button>
            )}
            
            {/* AI Suggestions */}
            {enableAI && (
              <button
                onClick={generateAISuggestions}
                disabled={isProcessing}
                className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-sm transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
                AI
              </button>
            )}
            
            {/* Save Button */}
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-green-500 hover:bg-green-600 rounded text-sm transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex h-96">
        {/* Editor */}
        <div className="flex-1 p-4">
          <textarea
            ref={editorRef}
            value={editorState.content}
            onChange={handleTextChange}
            onSelect={handleSelectionChange}
            onMouseMove={handleCursorMove}
            placeholder="Start typing your document..."
            className="w-full h-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none font-mono text-sm"
          />
          
          {/* Status Bar */}
          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
            <span>
              {editorState.content.length} characters, {editorState.content.split(/\s+/).filter(Boolean).length} words
            </span>
            <span>
              Version {editorState.version}
              {lastSaved && ` • Last saved ${lastSaved.toLocaleTimeString()}`}
            </span>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
          {/* AI Suggestions */}
          {enableAI && showSuggestions && (
            <div className="p-4 border-b border-gray-200 dark:border-gray-600">
              <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI Suggestions
              </h4>
              
              <div className="space-y-3">
                {editorState.suggestions.map(suggestion => (
                  <motion.div
                    key={suggestion.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-3 bg-white dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        suggestion.type === 'grammar' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                        suggestion.type === 'style' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                      }`}>
                        {suggestion.type}
                      </span>
                      <span className="text-xs text-gray-500">
                        {Math.round(suggestion.confidence * 100)}%
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      {suggestion.reason}
                    </p>
                    
                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      {suggestion.text}
                    </div>
                    
                    <button
                      onClick={() => applySuggestion(suggestion)}
                      className="w-full px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors"
                    >
                      Apply Suggestion
                    </button>
                  </motion.div>
                ))}
                
                {editorState.suggestions.length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-4">
                    No suggestions yet. Start typing to get AI-powered recommendations.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Collaborators */}
          {enableCollaboration && showCollaborators && (
            <div className="p-4 border-b border-gray-200 dark:border-gray-600">
              <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Collaborators ({collaboration.onlineUsers.length})
              </h4>
              
              <div className="space-y-2">
                {collaboration.onlineUsers.map(user => (
                  <div key={user.id} className="flex items-center gap-2 p-2 bg-white dark:bg-gray-600 rounded-lg">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: user.color }}
                    ></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {user.name}
                    </span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                ))}
                
                {collaboration.offlineUsers.map(user => (
                  <div key={user.id} className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg opacity-60">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: user.color }}
                    ></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {user.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {user.lastSeen.toLocaleTimeString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="p-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Actions</h4>
            
            <div className="space-y-2">
              <button
                onClick={() => handleExport('txt')}
                className="w-full px-3 py-2 bg-gray-500 hover:bg-gray-600 text-white text-sm rounded transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export as TXT
              </button>
              
              <button
                onClick={() => handleExport('md')}
                className="w-full px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export as MD
              </button>
              
              <button
                onClick={() => handleExport('html')}
                className="w-full px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export as HTML
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Cursors Overlay */}
      {enableCollaboration && (
        <div
          ref={collaborationRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 10 }}
        >
          {collaboration.activeCursors.map(({ x, y, user }) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute w-4 h-4"
              style={{
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div 
                className="w-full h-full rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: user.color }}
              ></div>
              <div className="absolute top-5 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {user.name}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
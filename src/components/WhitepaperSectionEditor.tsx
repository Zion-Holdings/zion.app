import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface WhitepaperSectionEditorProps {
  title: string;
  content: string;
  onContentChange: (newContent: string) => void;
}

const WhitepaperSectionEditor: React.FC<WhitepaperSectionEditorProps> = ({ title, content, onContentChange }) => {
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [suggestionsError, setSuggestionsError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleGetSuggestions = async () => {
    setIsLoadingSuggestions(true);
    setSuggestionsError(null);
    setSuggestions(null);
    setShowSuggestions(false);

    try {
      const { data, error: funcError } = await supabase.functions.invoke('get-whitepaper-section-suggestions', {
        body: {
          sectionTitle: title,
          sectionContent: content,
        },
      });

      if (funcError) {
        throw new Error(`Supabase function error: ${funcError.message}`);
      }

      if (data && data.error) {
        throw new Error(`Suggestion generation error: ${data.error}`);
      }

      if (!data || !data.suggestions) {
        throw new Error('No suggestions received from the function.');
      }

      setSuggestions(data.suggestions);
      setShowSuggestions(true);

    } catch (e: any) {
      console.error(`Error getting suggestions for section "${title}":`, e);
      setSuggestionsError(e.message || 'An unexpected error occurred while fetching suggestions.');
    } finally {
      setIsLoadingSuggestions(false);
    }
  };

  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '5px', position: 'relative' }}>
      <h3>{title}</h3>
      <textarea
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        style={{ width: '100%', minHeight: '150px', padding: '10px', boxSizing: 'border-box', marginBottom: '10px' }}
      />
      <button onClick={handleGetSuggestions} disabled={isLoadingSuggestions} style={{ marginRight: '10px' }}>
        {isLoadingSuggestions ? 'Getting Suggestions...' : 'Get AI Suggestions'}
      </button>

      {suggestionsError && <p style={{ color: 'red', fontSize: '0.9em', marginTop: '10px' }}>Error: {suggestionsError}</p>}

      {suggestions && showSuggestions && (
        <div style={{
          marginTop: '15px',
          padding: '10px',
          border: '1px dashed #ddd',
          borderRadius: '4px',
          background: '#f9f9f9'
        }}>
          <h4>Suggestions:</h4>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '0.9em' }}>{suggestions}</pre>
          <button onClick={() => setShowSuggestions(false)} style={{marginTop: '10px', fontSize: '0.8em'}}>
            Hide Suggestions
          </button>
        </div>
      )}
    </div>
  );
};

export default WhitepaperSectionEditor;

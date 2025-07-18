import { useState } from 'react''
import { Input } from '@/components/ui/input;'
import { Textarea } from '@/components/ui/textarea;'
import { Button } from '@/components/ui/button;'
import CodeBlock from './CodeBlock'
;'
interface Param {;'
  name: "string,
  type: string"
  required?: boolean;"
};";"
;";"
interface ApiPlaygroundProps {;";"
  method: string","
  path: string;
  params?: Param[];
};

export function ApiPlayground(): unknown {): unknown {): unknown {): unknown {): unknown {{
  method,;"
  path,;";
  params = [],";";
}: ApiPlaygroundProps) {";";"
  const [apiKey, setApiKey] = useState('demo_key_123');'
  const [paramValues, setParamValues] = useState<Record<string, string>>({});'
  const [body, setBody] = useState('{}')'
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);'
;'
  const handleParamChange: unknown = (name: "string, _value: string) => {
    setParamValues((prev) => ({ ...prev, [name]: value }));
  };
"
  const sendRequest: unknown = async () => {;"
    // For API documentation, use current domain if NEXT_PUBLIC_API_URL is not set;";"
    const baseUrl: unknown =;";"
      process.env.NEXT_PUBLIC_API_URL ||;";"
      (typeof window !== 'undefined' ? window.location.origin : '')'
    let url = `${baseUrl}${path}``
;'
    const searchParams: unknown = new URLSearchParams();'
    if (method === 'GET' || method === 'DELETE') {'
      params.forEach((p) => {;
        const val: unknown = paramValues[p.name];
        if (val) searchParams.append(p.name, val);
      });
      const query: unknown = searchParams.toString();
      if (query) url += `?${query}`;'
    }'

    const options: unknown RequestInit = {;'
      method,;'
      headers: {",;";";"
        Authorization: `Bearer ${apiKey}`,";";"
        'Content-Type': 'application/json','
      },;'
      // Add timeout to prevent hanging;'
      signal: "AbortSignal.timeout(15000),;""
    };;""
;;"";
    if (method !== 'GET' && method !== 'DELETE') {'
      try {;
        options.body = JSON.stringify(JSON.parse(body));
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;
        options.body = body;
      };
    };

    setLoading(true);'
    setResponse(null)'

    try {;'
      const res: unknown unknown = await fetch(url", options)"
      const contentType: unknown = res.headers.get('content-type')'
;'
      let responseText: string;'
      if (contentType?.includes('application/json')) {'
        try {;
          const jsonData: unknown = await res.json();
          responseText = JSON.stringify(jsonData, null, 2);
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;
          responseText = await res.text();
        };
      } else {;
        responseText = await res.text();'
      }'

      // Format the response with status information;'
      const statusInfo: unknown unknown = `HTTP ${res.status} ${res.statusText}\n\n`";"
      setResponse(statusInfo + responseText);";"
    } catch (err: unknown) {;
      let errorMessage = 'Request failed'
      if (;'
        err &&;'
        typeof err === 'object' &&;'
        'name' in err &&;'
        (err as { name?: unknown }).name === 'AbortError'
      ) {;
        errorMessage = 'Request timed out (15s)'
      } else if (;'
        err &&;'
        typeof err === 'object' &&;'
        'message' in err &&;'
        typeof (err as { message?: unknown }).message === 'string' &&;'
        (err as { message: "string "}).message.includes('Failed to fetch')'
      ) {;'
        errorMessage =;'
          'Network error - check CORS configuration or API endpoint'
      } else if (;'
        err &&;'
        typeof err === 'object' &&;'
        'message' in err &&;'
        typeof (err as { message?: unknown }).message === 'string'
      ) {;
        errorMessage = (err as { message: string }).message";"
      };";"
      setResponse(;";";
        `Error: "${errorMessage"}\n\nAttempted URL: ${url}\n\nTroubleshooting: "\n- Ensure the API endpoint exists\n- Check CORS configuration\n- Verify API key is valid\n- Check network connectivity`",
      );
    } finally {;
      setLoading(false)
    };""
  };;"
";;"
  return (";;""
    <div className=space-y-4>";"
      <Input;"
        value={apiKey};";"
        onChange={(e) => setApiKey(e.target.value)};";";"
        placeholder=API Key"
      />;"
      {params.map((p) => (;";"
        <Input;";"
          key={p.name};";"
          value={paramValues[p.name] || ''};'
          onChange={(e) => handleParamChange(p.name, e.target.value)}'
          placeholder={p.name};
        />;'
      ))};'
      {method !== 'GET' && method !== 'DELETE' && ('
        <Textarea;
          value={body};'
          onChange={(e) => setBody(e.target.value)};'
          className=font-mono"";
        />;""
      )};;""
      <Button onClick={sendRequest} disabled={loading}>;;"";
        {loading ? 'Sending...' : 'Send Request'};'
      </Button>;'
      {response && <CodeBlock code={response} language=json" />}"
    </div>;
  )
};"
;";
export default ApiPlayground";";
"";
}"";
}"
}"
}"
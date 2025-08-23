import { assertEquals, assertStringIncludes } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { sinon } from "https://deno.land/x/sinon@v.1.13.0/mod.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// --- Global Mocks & Setup ---
let mockSupabaseClientSuggestions: any;
const mockInvokeSuggestions = sinon.stub();

// @ts-expect-error: Deno test global setup for testing environment
globalThis.Deno = globalThis.Deno || {}; // Ensure Deno object exists
// @ts-expect-error: Mocking Deno.env for test environment configuration
globalThis.Deno.env = {
    get: (key: string) => {
        if (key === 'SUPABASE_URL') return 'http://localhost:54321';
        if (key === 'SUPABASE_ANON_KEY') return 'test-anon-key';
        return undefined;
    }
};

const originalCreateClientSuggestions = createClient;
// @ts-expect-error: Assigning to read-only property for test mocking
globalThis.createClient = (_url: string, _key: string, _options?: any) => {
    mockSupabaseClientSuggestions = {
        functions: { invoke: mockInvokeSuggestions }
    };
    return mockSupabaseClientSuggestions;
};

// Simplified handler for get-whitepaper-section-suggestions
async function getSectionSuggestionsHandler(req: Request): Promise<Response> {
    const { sectionTitle, sectionContent } = await req.json();

    if (!sectionTitle || sectionContent === undefined) { // sectionContent can be empty string
        return new Response(JSON.stringify({ error: "Missing required parameters" }), { status: 400 });
    }

    const prompt = `Provide 2-3 actionable suggestions... '${sectionTitle}' ... content: \n\n"${sectionContent}"`;

    // Simulating internal client creation for test
    const internalSupabaseClient = originalCreateClientSuggestions(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, {
        global: { headers: { Authorization: req.headers.get('Authorization')! } }
    });
    (internalSupabaseClient.functions as any).invoke = mockInvokeSuggestions;


    const { data: gptData, error: gptError } = await internalSupabaseClient.functions.invoke("zion-gpt", {
      body: { prompt: prompt, maxTokens: 300, temperature: 0.6 },
    });

    if (gptError) return new Response(JSON.stringify({ error: `zion-gpt error: ${gptError.message}` }), { status: 500 });
    if (!gptData || !gptData.completion) return new Response(JSON.stringify({ error: "Invalid response from zion-gpt" }), { status: 500 });

    return new Response(JSON.stringify({ suggestions: gptData.completion }), { headers: { "Content-Type": "application/json" }});
}

// --- Tests ---
Deno.test("get-section-suggestions: successful suggestion generation", async () => {
    mockInvokeSuggestions.resolves({ data: { completion: "Suggestion 1. Suggestion 2." }, error: null });
    const requestBody = {
        sectionTitle: "Introduction",
        sectionContent: "This is a brief intro."
    };
    const req = new Request("http://localhost/get-whitepaper-section-suggestions", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: { "Content-Type": "application/json", "Authorization": "Bearer test-jwt" },
    });

    const res = await getSectionSuggestionsHandler(req);
    const json = await res.json();

    assertEquals(res.status, 200);
    assertEquals(json.suggestions, "Suggestion 1. Suggestion 2.");
    const callArgs = mockInvokeSuggestions.lastCall.args[1].body;
    assertStringIncludes(callArgs.prompt, "Introduction");
    assertStringIncludes(callArgs.prompt, "This is a brief intro.");
});

Deno.test("get-section-suggestions: handles empty sectionContent", async () => {
    mockInvokeSuggestions.resolves({ data: { completion: "Suggestions for empty content." }, error: null });
    const requestBody = {
        sectionTitle: "Conclusion",
        sectionContent: "" // Empty content
    };
    const req = new Request("http://localhost/get-whitepaper-section-suggestions", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: { "Content-Type": "application/json", "Authorization": "Bearer test-jwt" },
    });

    const res = await getSectionSuggestionsHandler(req);
    const json = await res.json();
    assertEquals(res.status, 200);
    assertEquals(json.suggestions, "Suggestions for empty content.");
    const callArgs = mockInvokeSuggestions.lastCall.args[1].body;
    assertStringIncludes(callArgs.prompt, "\"\""); // Ensure empty string is in prompt
});

Deno.test("get-section-suggestions: handles missing parameters", async () => {
    const req = new Request("http://localhost/get-whitepaper-section-suggestions", {
        method: "POST",
        body: JSON.stringify({ sectionTitle: "Missing Content" }), // sectionContent is missing
        headers: { "Content-Type": "application/json", "Authorization": "Bearer test-jwt" },
    });
    const res = await getSectionSuggestionsHandler(req);
    const json = await res.json();
    assertEquals(res.status, 400);
    assertStringIncludes(json.error, "Missing required parameters");
});

Deno.test("get-section-suggestions: handles error from zion-gpt", async () => {
    mockInvokeSuggestions.resolves({ data: null, error: { message: "GPT suggestions failed" } });
    const requestBody = { sectionTitle: "Title", sectionContent: "Content" };
    const req = new Request("http://localhost/get-whitepaper-section-suggestions", {
        method: "POST", body: JSON.stringify(requestBody), headers: { "Content-Type": "application/json", "Authorization": "Bearer test-jwt" },
    });

    const res = await getSectionSuggestionsHandler(req);
    const json = await res.json();
    assertEquals(res.status, 500);
    assertStringIncludes(json.error, "zion-gpt error: GPT suggestions failed");
});

Deno.test("get-section-suggestions: handles invalid response from zion-gpt", async () => {
    mockInvokeSuggestions.resolves({ data: { wrongField: "no suggestions" }, error: null });
     const requestBody = { sectionTitle: "Title", sectionContent: "Content" };
    const req = new Request("http://localhost/get-whitepaper-section-suggestions", {
        method: "POST", body: JSON.stringify(requestBody), headers: { "Content-Type": "application/json", "Authorization": "Bearer test-jwt" },
    });
    const res = await getSectionSuggestionsHandler(req);
    const json = await res.json();
    assertEquals(res.status, 500);
    assertStringIncludes(json.error, "Invalid response from zion-gpt");
});

// Reset global createClient mock if necessary after these tests
// globalThis.createClient = originalCreateClientSuggestions;

import { assertEquals, assertStringIncludes } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { sinon } from "https://deno.land/x/sinon@v.1.13.0/mod.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// --- Global Mocks & Setup ---
let mockSupabaseClient_GetShared: any;
const mockFrom_GetShared = sinon.stub();
const mockSelect_GetShared = sinon.stub();
const mockEq_GetShared = sinon.stub();
const mockSingle_GetShared = sinon.stub();


// @ts-expect-error Deno test global - mocking Deno environment for test setup
globalThis.Deno = globalThis.Deno || {};
// @ts-expect-error Deno env mock - providing test environment variables for isolated testing
globalThis.Deno.env = {
    get: (key: string) => {
        if (key === 'SUPABASE_URL') return 'http://localhost:54321';
        if (key === 'SUPABASE_ANON_KEY') return 'test-anon-key'; // Uses anon key
        return undefined;
    }
};

const originalCreateClient_GetShared = createClient;
// @ts-expect-error globalThis client mock - overriding createClient for controlled test behavior
globalThis.createClient = (url: string, key: string, _options?: any) => {
    if (key === Deno.env.get('SUPABASE_ANON_KEY')) {
        mockEq_GetShared.returns({ single: mockSingle_GetShared });
        mockSelect_GetShared.returns({ eq: mockEq_GetShared });
        mockFrom_GetShared.returns({ select: mockSelect_GetShared });
        mockSupabaseClient_GetShared = { from: mockFrom_GetShared };
        return mockSupabaseClient_GetShared;
    }
    return originalCreateClient_GetShared(url, key, _options);
};

// Simplified handler for get-shared-whitepaper
async function getSharedWhitepaperHandler(req: Request): Promise<Response> {
    const { id } = await req.json();
    if (!id) {
        return new Response(JSON.stringify({ error: "Missing whitepaper ID." }), { status: 400 });
    }

    const internalSupabaseClient = originalCreateClient_GetShared(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!
    );
    (internalSupabaseClient as any).from = mockFrom_GetShared;

    const { data, error } = await internalSupabaseClient
      .from('shared_whitepapers')
      .select('whitepaper_data, created_at, is_public')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') { // Not Found
         return new Response(JSON.stringify({ error: "Shared whitepaper not found." }), { status: 404 });
      }
      return new Response(JSON.stringify({ error: `DB error: ${error.message}` }), { status: 500 });
    }
    if (!data) { // Should be caught by PGRST116, but as a fallback
      return new Response(JSON.stringify({ error: "Shared whitepaper not found." }), { status: 404 });
    }
    return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" }});
}

// --- Tests ---
Deno.test("get-shared-whitepaper: successful fetch", async () => {
    const mockData = {
        whitepaper_data: { tokenName: "FetchedToken" },
        created_at: new Date().toISOString(),
        is_public: true,
    };
    mockSingle_GetShared.resolves({ data: mockData, error: null });

    const req = new Request("http://localhost/get-shared-whitepaper", {
        method: "POST",
        body: JSON.stringify({ id: "test-id-123" }),
        headers: { "Content-Type": "application/json" },
    });

    const res = await getSharedWhitepaperHandler(req);
    const json = await res.json();

    assertEquals(res.status, 200);
    assertEquals(json.whitepaper_data.tokenName, "FetchedToken");
    assertEquals(json.is_public, true);
    assertEquals(mockEq_GetShared.lastCall.args[1], "test-id-123"); // Check ID was used in eq
});

Deno.test("get-shared-whitepaper: handles missing ID", async () => {
    const req = new Request("http://localhost/get-shared-whitepaper", {
        method: "POST",
        body: JSON.stringify({}), // No id
        headers: { "Content-Type": "application/json" },
    });
    const res = await getSharedWhitepaperHandler(req);
    const json = await res.json();
    assertEquals(res.status, 400);
    assertStringIncludes(json.error, "Missing whitepaper ID.");
});

Deno.test("get-shared-whitepaper: handles not found error from Supabase", async () => {
    mockSingle_GetShared.resolves({ data: null, error: { code: 'PGRST116', message: 'Row not found' } });
    const req = new Request("http://localhost/get-shared-whitepaper", {
        method: "POST", body: JSON.stringify({ id: "not-found-id" }), headers: { "Content-Type": "application/json" },
    });
    const res = await getSharedWhitepaperHandler(req);
    const json = await res.json();
    assertEquals(res.status, 404);
    assertStringIncludes(json.error, "Shared whitepaper not found.");
});

Deno.test("get-shared-whitepaper: handles other Supabase errors", async () => {
    mockSingle_GetShared.resolves({ data: null, error: { message: "Some other DB error" } });
     const req = new Request("http://localhost/get-shared-whitepaper", {
        method: "POST", body: JSON.stringify({ id: "error-id" }), headers: { "Content-Type": "application/json" },
    });
    const res = await getSharedWhitepaperHandler(req);
    const json = await res.json();
    assertEquals(res.status, 500);
    assertStringIncludes(json.error, "DB error: Some other DB error");
});

// globalThis.createClient = originalCreateClient_GetShared;

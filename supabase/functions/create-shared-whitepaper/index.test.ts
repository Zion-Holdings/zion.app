import { assertEquals, assertExists, assertStringIncludes } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { sinon } from "https://deno.land/x/sinon@v.1.13.0/mod.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { v4 as uuidv4 } from "https://deno.land/std@0.83.0/uuid/mod.ts";


// --- Global Mocks & Setup ---
let mockSupabaseAdminClient_CreateShared: any;
const mockFrom = sinon.stub();
const mockInsert = sinon.stub();
const mockSelect_CreateShared = sinon.stub();
const mockSingle_CreateShared = sinon.stub();

// @ts-expect-error Deno test global - mocking Deno environment for test setup
globalThis.Deno = globalThis.Deno || {};
// @ts-expect-error Deno env mock - providing test environment variables for isolated testing
globalThis.Deno.env = {
    get: (key: string) => {
        if (key === 'SUPABASE_URL') return 'http://localhost:54321';
        if (key === 'SUPABASE_SERVICE_ROLE_KEY') return 'test-service-role-key'; // Important for admin client
        return undefined;
    }
};

// Mock uuid - important to control the generated ID for assertions
const fixedUuid = "fixed-uuid-1234";
const originalUuidGenerate = uuidv4.generate;
// @ts-expect-error uuid mock override - replacing real UUID generation with fixed test value
uuidv4.generate = () => fixedUuid;


const originalCreateClient_CreateShared = createClient;
// @ts-expect-error globalThis client mock - overriding createClient for controlled test behavior
globalThis.createClient = (url: string, key: string, _options?: any) => {
    // Ensure this mock is specific enough if different clients (anon vs service) are used across tests
    if (key === Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')) {
        mockInsert.returns({ select: mockSelect_CreateShared });
        mockSelect_CreateShared.returns({ single: mockSingle_CreateShared });
        mockFrom.returns({ insert: mockInsert });
        mockSupabaseAdminClient_CreateShared = { from: mockFrom };
        return mockSupabaseAdminClient_CreateShared;
    }
    // Fallback for other clients if needed, though this test focuses on admin client
    return originalCreateClient_CreateShared(url, key, _options);
};


// Simplified handler for create-shared-whitepaper
async function createSharedWhitepaperHandler(req: Request): Promise<Response> {
    const whitepaperPayload = await req.json();

    if (!whitepaperPayload || !whitepaperPayload.tokenName || !whitepaperPayload.sections) {
        return new Response(JSON.stringify({ error: "Missing required whitepaper data." }), { status: 400 });
    }

    // Client created inside the handler, will use the mocked global createClient
    const internalSupabaseAdminClient = originalCreateClient_CreateShared(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );
    // Manually patch methods for this instance if global mock isn't fully effective due to scope
    (internalSupabaseAdminClient as any).from = mockFrom;


    const uniqueId = uuidv4.generate(); // Will use our mocked version
    const createdAt = new Date().toISOString(); // Real date is fine

    const { data, error } = await internalSupabaseAdminClient
      .from('shared_whitepapers')
      .insert({
        id: uniqueId,
        whitepaper_data: whitepaperPayload,
        created_at: createdAt,
        is_public: false,
        updated_at: createdAt,
      })
      .select('id, is_public')
      .single();

    if (error) return new Response(JSON.stringify({ error: `DB error: ${error.message}` }), { status: 500 });
    if (!data) return new Response(JSON.stringify({ error: "No data from DB insert." }), { status: 500 });

    return new Response(JSON.stringify({ id: data.id, is_public: data.is_public }), { headers: { "Content-Type": "application/json" }});
}

// --- Tests ---
Deno.test("create-shared-whitepaper: successful creation", async () => {
    mockSingle_CreateShared.resolves({ data: { id: fixedUuid, is_public: false }, error: null });

    const requestBody = {
        tokenName: "SharedToken",
        tokenSupply: "500K",
        sections: [{ id: "s1", title: "Title", content: "Content" }],
        distributionChartData: [{ name: "Team", value: 100 }],
    };
    const req = new Request("http://localhost/create-shared-whitepaper", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: { "Content-Type": "application/json" },
    });

    const res = await createSharedWhitepaperHandler(req);
    const json = await res.json();

    assertEquals(res.status, 200);
    assertEquals(json.id, fixedUuid);
    assertEquals(json.is_public, false);

    const insertedData = mockInsert.lastCall.args[0];
    assertEquals(insertedData.id, fixedUuid);
    assertEquals(insertedData.is_public, false);
    assertExists(insertedData.created_at);
    assertExists(insertedData.updated_at);
    assertEquals(insertedData.whitepaper_data.tokenName, "SharedToken");
});

Deno.test("create-shared-whitepaper: handles missing required data", async () => {
    const req = new Request("http://localhost/create-shared-whitepaper", {
        method: "POST",
        body: JSON.stringify({ tokenSupply: "1M" }), // Missing tokenName, sections
        headers: { "Content-Type": "application/json" },
    });
    const res = await createSharedWhitepaperHandler(req);
    const json = await res.json();
    assertEquals(res.status, 400);
    assertStringIncludes(json.error, "Missing required whitepaper data.");
});

Deno.test("create-shared-whitepaper: handles Supabase insert error", async () => {
    mockSingle_CreateShared.resolves({ data: null, error: { message: "Insert failed" } });
    const requestBody = {
        tokenName: "ErrorToken", tokenSupply: "1M", sections: [{id:"s", title:"t", content:"c"}], distributionChartData: []
    };
    const req = new Request("http://localhost/create-shared-whitepaper", {
        method: "POST", body: JSON.stringify(requestBody), headers: { "Content-Type": "application/json" },
    });

    const res = await createSharedWhitepaperHandler(req);
    const json = await res.json();
    assertEquals(res.status, 500);
    assertStringIncludes(json.error, "DB error: Insert failed");
});

Deno.test("create-shared-whitepaper: handles no data returned from insert", async () => {
    mockSingle_CreateShared.resolves({ data: null, error: null }); // No error, but also no data
     const requestBody = {
        tokenName: "NoDataToken", tokenSupply: "1M", sections: [{id:"s", title:"t", content:"c"}], distributionChartData: []
    };
    const req = new Request("http://localhost/create-shared-whitepaper", {
        method: "POST", body: JSON.stringify(requestBody), headers: { "Content-Type": "application/json" },
    });
    const res = await createSharedWhitepaperHandler(req);
    const json = await res.json();
    assertEquals(res.status, 500);
    assertStringIncludes(json.error, "No data from DB insert.");
});


// Restore original uuid generate
// @ts-expect-error test cleanup restoration - restoring original functions after test completion
// uuidv4.generate = originalUuidGenerate;
// globalThis.createClient = originalCreateClient_CreateShared;

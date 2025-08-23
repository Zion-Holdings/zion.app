import { assertEquals, assertStringIncludes, assertExists } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { sinon } from "https://deno.land/x/sinon@v.1.13.0/mod.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// --- Global Mocks & Setup ---
let mockSupabaseAdminClient_SetStatus: any;
const mockFrom_SetStatus = sinon.stub();
const mockUpdate_SetStatus = sinon.stub();
const mockEq_SetStatus = sinon.stub();
const mockSelect_SetStatus = sinon.stub();
const mockSingle_SetStatus = sinon.stub();

// @ts-expect-error: Deno test global setup for testing environment
globalThis.Deno = globalThis.Deno || {};
// @ts-expect-error: Mocking Deno.env for test environment configuration
globalThis.Deno.env = {
    get: (key: string) => {
        if (key === 'SUPABASE_URL') return 'http://localhost:54321';
        if (key === 'SUPABASE_SERVICE_ROLE_KEY') return 'test-service-role-key';
        return undefined;
    }
};

const originalCreateClient_SetStatus = createClient;
// @ts-expect-error: Assigning to read-only property for test mocking
globalThis.createClient = (url: string, key: string, _options?: any) => {
    if (key === Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')) {
        mockSelect_SetStatus.returns({ single: mockSingle_SetStatus });
        mockEq_SetStatus.returns({ select: mockSelect_SetStatus });
        mockUpdate_SetStatus.returns({ eq: mockEq_SetStatus });
        mockFrom_SetStatus.returns({ update: mockUpdate_SetStatus });
        mockSupabaseAdminClient_SetStatus = { from: mockFrom_SetStatus };
        return mockSupabaseAdminClient_SetStatus;
    }
    return originalCreateClient_SetStatus(url, key, _options);
};

// Simplified handler for set-shared-whitepaper-public-status
async function setPublicStatusHandler(req: Request): Promise<Response> {
    const { whitepaperId, isPublic } = await req.json();

    if (whitepaperId === undefined || typeof isPublic !== 'boolean') {
        return new Response(JSON.stringify({ error: "Missing required parameters" }), { status: 400 });
    }

    const internalSupabaseAdminClient = originalCreateClient_SetStatus(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );
    (internalSupabaseAdminClient as any).from = mockFrom_SetStatus;


    const { data, error } = await internalSupabaseAdminClient
      .from('shared_whitepapers')
      .update({ is_public: isPublic, updated_at: new Date().toISOString() }) // Real date is fine
      .eq('id', whitepaperId)
      .select('id, is_public')
      .single();

    if (error) {
        if (error.code === 'PGRST116') return new Response(JSON.stringify({ error: "Whitepaper not found." }), { status: 404 });
        return new Response(JSON.stringify({ error: `DB error: ${error.message}` }), { status: 500 });
    }
     if (!data) return new Response(JSON.stringify({ error: "Update did not return data." }), { status: 500 });

    return new Response(JSON.stringify({ id: data.id, is_public: data.is_public, message: "Public status updated." }),
                        { headers: { "Content-Type": "application/json" }});
}

// --- Tests ---
Deno.test("set-public-status: successfully updates to public", async () => {
    mockSingle_SetStatus.resolves({ data: { id: "wp-123", is_public: true }, error: null });
    const requestBody = { whitepaperId: "wp-123", isPublic: true };
    const req = new Request("http://localhost/set-shared-whitepaper-public-status", {
        method: "POST", body: JSON.stringify(requestBody), headers: { "Content-Type": "application/json" },
    });

    const res = await setPublicStatusHandler(req);
    const json = await res.json();

    assertEquals(res.status, 200);
    assertEquals(json.id, "wp-123");
    assertEquals(json.is_public, true);
    assertStringIncludes(json.message, "Public status updated.");

    const updateCallArgs = mockUpdate_SetStatus.lastCall.args[0];
    assertEquals(updateCallArgs.is_public, true);
    assertExists(updateCallArgs.updated_at);
    assertEquals(mockEq_SetStatus.lastCall.args[1], "wp-123");
});

Deno.test("set-public-status: successfully updates to private", async () => {
    mockSingle_SetStatus.resolves({ data: { id: "wp-456", is_public: false }, error: null });
    const requestBody = { whitepaperId: "wp-456", isPublic: false };
    const req = new Request("http://localhost/set-shared-whitepaper-public-status", {
        method: "POST", body: JSON.stringify(requestBody), headers: { "Content-Type": "application/json" },
    });
    const res = await setPublicStatusHandler(req);
    const json = await res.json();
    assertEquals(res.status, 200);
    assertEquals(json.is_public, false);
    assertEquals(mockUpdate_SetStatus.lastCall.args[0].is_public, false);
});

Deno.test("set-public-status: handles missing parameters", async () => {
    const req = new Request("http://localhost/set-shared-whitepaper-public-status", {
        method: "POST", body: JSON.stringify({ whitepaperId: "wp-789" }), // isPublic missing
        headers: { "Content-Type": "application/json" },
    });
    const res = await setPublicStatusHandler(req);
    const json = await res.json();
    assertEquals(res.status, 400);
    assertStringIncludes(json.error, "Missing required parameters");
});

Deno.test("set-public-status: handles whitepaper not found", async () => {
    mockSingle_SetStatus.resolves({ data: null, error: { code: 'PGRST116', message: "Not found" } });
    const req = new Request("http://localhost/set-shared-whitepaper-public-status", {
        method: "POST", body: JSON.stringify({ whitepaperId: "non-existent", isPublic: true }), headers: { "Content-Type": "application/json" },
    });
    const res = await setPublicStatusHandler(req);
    const json = await res.json();
    assertEquals(res.status, 404);
    assertStringIncludes(json.error, "Whitepaper not found.");
});

Deno.test("set-public-status: handles other Supabase errors", async () => {
    mockSingle_SetStatus.resolves({ data: null, error: { message: "Update DB error" } });
    const req = new Request("http://localhost/set-shared-whitepaper-public-status", {
        method: "POST", body: JSON.stringify({ whitepaperId: "error-id", isPublic: false }), headers: { "Content-Type": "application/json" },
    });
    const res = await setPublicStatusHandler(req);
    const json = await res.json();
    assertEquals(res.status, 500);
    assertStringIncludes(json.error, "DB error: Update DB error");
});

// globalThis.createClient = originalCreateClient_SetStatus;

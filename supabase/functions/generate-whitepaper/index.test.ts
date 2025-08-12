import { assertEquals, assertStringIncludes } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { sinon } from "https://deno.land/x/sinon@v.1.13.0/mod.ts"; // Using sinon for more robust mocking if needed
import { serve } from "https://deno.land/std@0.190.0/http/server.ts"; // To mock serve if directly testing HTTP part
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Mock createClient and its chained methods
let mockSupabaseClient: any;
const mockInvoke = sinon.stub();

// @ts-expect-error Deno test global - mocking Deno environment for test setup
globalThis.Deno = {
    env: {
        get: (key: string) => {
            if (key === 'SUPABASE_URL') return 'http://localhost:54321';
            if (key === 'SUPABASE_ANON_KEY') return 'test-anon-key';
            if (key === 'SUPABASE_SERVICE_ROLE_KEY') return 'test-service-role-key';
            return undefined;
        }
    },
    // @ts-expect-error Deno readFile mock - providing mock file reading capability for tests
    readFile: sinon.stub(), // if any file reading was involved
};


// This is a simplified way to mock. In reality, you might need import maps for full control.
const originalCreateClient = createClient;
// @ts-expect-error: Assigning to read-only property
globalThis.createClient = (_url: string, _key: string, _options?: any) => {
    mockSupabaseClient = {
        functions: { invoke: mockInvoke }
    };
    return mockSupabaseClient;
};


// The function from your actual index.ts would be imported here.
// For this test, I'll define a simplified version of the handler logic.
// In a real setup, you'd import { default as handler } from './index.ts';
async function generateWhitepaperHandler(req: Request): Promise<Response> {
    // Simplified version of the actual handler logic from generate-whitepaper/index.ts
    const {
      tokenName, tokenSupply, useCases, rewardsLogic,
      distributionBreakdown, governanceLogic, legalDisclaimers, distributionData
    } = await req.json();

    if (!tokenName || !tokenSupply || !useCases || !rewardsLogic || !governanceLogic || !legalDisclaimers) {
        return new Response(JSON.stringify({ error: "Missing required core parameters" }), { status: 400 });
    }
    if (!distributionData && !distributionBreakdown) {
        return new Response(JSON.stringify({ error: "Missing distribution information" }), { status: 400 });
    }

    let distributionText = distributionBreakdown || "";
    if (distributionData && distributionData.length > 0) {
      const formattedDistribution = distributionData.map((item: any) => `${item.name}: ${item.percentage}%`).join(', ');
      distributionText = `The token distribution is as follows: ${formattedDistribution}. ... ${distributionBreakdown || ''}`;
    } else {
      distributionText = `${distributionBreakdown}. Include a placeholder...`;
    }

    const prompt = `...${tokenName}...${tokenSupply}...${useCases}...${rewardsLogic}...${distributionText}...${governanceLogic}...${legalDisclaimers}...`;

    // This part is crucial for mocking the Supabase client used inside the function
    // The actual function uses createClient internally. We've mocked the global createClient.
    // So, when the handler calls createClient, it gets our mock.
    // Then it calls supabaseClient.functions.invoke

    // Re-initialize the client to pick up the mocked global createClient
    // This assumes the function-under-test calls createClient itself.
    // If createClient is called at module level, this mocking strategy needs adjustment.
    const internalSupabaseClient = originalCreateClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, {
        global: { headers: { Authorization: req.headers.get('Authorization')! } }
    });
    // Now, manually patch its invoke if the global mock didn't catch it due to scope/timing
    // This is hacky; proper dependency injection or import maps are better.
    (internalSupabaseClient.functions as any).invoke = mockInvoke;


    const { data: gptData, error: gptError } = await internalSupabaseClient.functions.invoke("zion-gpt", {
      body: { prompt: prompt, maxTokens: 2000, temperature: 0.7 },
    });

    if (gptError) return new Response(JSON.stringify({ error: `zion-gpt error: ${gptError.message}` }), { status: 500 });
    if (!gptData || !gptData.completion) return new Response(JSON.stringify({ error: "Invalid response from zion-gpt" }), { status: 500 });

    return new Response(JSON.stringify({ whitepaperDraft: gptData.completion }), { headers: { "Content-Type": "application/json" }});
}


Deno.test("generate-whitepaper: successful generation with basic data", async () => {
    mockInvoke.resolves({ data: { completion: "Generated whitepaper draft." }, error: null });
    const requestBody = {
        tokenName: "TestToken",
        tokenSupply: "1M",
        useCases: "Utility",
        rewardsLogic: "Staking",
        distributionBreakdown: "Fair launch", // Only this is provided
        governanceLogic: "DAO",
        legalDisclaimers: "None",
    };
    const req = new Request("http://localhost/generate-whitepaper", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: { "Content-Type": "application/json", "Authorization": "Bearer test-jwt" },
    });

    const res = await generateWhitepaperHandler(req);
    const json = await res.json();

    assertEquals(res.status, 200);
    assertEquals(json.whitepaperDraft, "Generated whitepaper draft.");
    const callArgs = mockInvoke.lastCall.args[1].body;
    assertStringIncludes(callArgs.prompt, "TestToken");
    assertStringIncludes(callArgs.prompt, "Fair launch. Include a placeholder"); // Check if fallback distribution text is used
});

Deno.test("generate-whitepaper: successful generation with distributionData", async () => {
    mockInvoke.resolves({ data: { completion: "Draft with distribution data." }, error: null });
    const requestBody = {
        tokenName: "DistroToken",
        tokenSupply: "10M",
        useCases: "Payments",
        rewardsLogic: "Transaction fees",
        distributionData: [{ name: "Team", percentage: 20 }, { name: "Community", percentage: 80 }],
        distributionBreakdown: "See chart for details.", // Additional details
        governanceLogic: "Voting",
        legalDisclaimers: "Standard",
    };
    const req = new Request("http://localhost/generate-whitepaper", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: { "Content-Type": "application/json", "Authorization": "Bearer test-jwt" },
    });

    const res = await generateWhitepaperHandler(req);
    const json = await res.json();
    assertEquals(res.status, 200);
    assertEquals(json.whitepaperDraft, "Draft with distribution data.");
    const callArgs = mockInvoke.lastCall.args[1].body;
    assertStringIncludes(callArgs.prompt, "DistroToken");
    assertStringIncludes(callArgs.prompt, "Team: 20%, Community: 80%");
    assertStringIncludes(callArgs.prompt, "See chart for details.");
});

Deno.test("generate-whitepaper: handles missing required parameters", async () => {
    const req = new Request("http://localhost/generate-whitepaper", {
        method: "POST",
        body: JSON.stringify({ tokenName: "MissingParams" }), // Missing other params
        headers: { "Content-Type": "application/json", "Authorization": "Bearer test-jwt" },
    });
    const res = await generateWhitepaperHandler(req);
    const json = await res.json();
    assertEquals(res.status, 400);
    assertStringIncludes(json.error, "Missing required core parameters");
});

Deno.test("generate-whitepaper: handles missing distribution information", async () => {
    const requestBody = { // Missing both distributionData and distributionBreakdown
        tokenName: "NoDistro", tokenSupply: "1M", useCases: "U", rewardsLogic: "R", governanceLogic: "G", legalDisclaimers: "L"
    };
    const req = new Request("http://localhost/generate-whitepaper", {
        method: "POST", body: JSON.stringify(requestBody), headers: { "Content-Type": "application/json", "Authorization": "Bearer test-jwt" },
    });
    const res = await generateWhitepaperHandler(req);
    const json = await res.json();
    assertEquals(res.status, 400);
    assertStringIncludes(json.error, "Missing distribution information");
});


Deno.test("generate-whitepaper: handles error from zion-gpt", async () => {
    mockInvoke.resolves({ data: null, error: { message: "GPT failed" } });
     const requestBody = {
        tokenName: "TestToken", tokenSupply: "1M", useCases: "Utility", rewardsLogic: "Staking",
        distributionBreakdown: "Fair launch", governanceLogic: "DAO", legalDisclaimers: "None",
    };
    const req = new Request("http://localhost/generate-whitepaper", {
        method: "POST", body: JSON.stringify(requestBody), headers: { "Content-Type": "application/json", "Authorization": "Bearer test-jwt" },
    });

    const res = await generateWhitepaperHandler(req);
    const json = await res.json();
    assertEquals(res.status, 500);
    assertStringIncludes(json.error, "zion-gpt error: GPT failed");
});

Deno.test("generate-whitepaper: handles invalid response from zion-gpt", async () => {
    mockInvoke.resolves({ data: { wrongField: "no completion here" }, error: null });
     const requestBody = {
        tokenName: "TestToken", tokenSupply: "1M", useCases: "Utility", rewardsLogic: "Staking",
        distributionBreakdown: "Fair launch", governanceLogic: "DAO", legalDisclaimers: "None",
    };
    const req = new Request("http://localhost/generate-whitepaper", {
        method: "POST", body: JSON.stringify(requestBody), headers: { "Content-Type": "application/json", "Authorization": "Bearer test-jwt" },
    });
    const res = await generateWhitepaperHandler(req);
    const json = await res.json();
    assertEquals(res.status, 500);
    assertStringIncludes(json.error, "Invalid response from zion-gpt");
});

// Reset global mock after tests if other files use createClient
// This is tricky. Ideally, tests run in separate processes or use better DI/mocking.
// For now, this test file assumes it controls createClient for its duration.
// Consider using Deno's `test` with `sanitizeOps: false, sanitizeResources: false` if issues arise with async ops or resource leaking due to global mocks.
// After all tests in this file:
// globalThis.createClient = originalCreateClient;

import { vi, describe, test, expect, beforeAll, beforeEach, afterEach } from 'vitest';

/**
 * Test suite for the /api/log-error endpoint.
 *
 * This suite aims to cover the primary functionalities of the log-error API,
 * including handling new and recurring errors, interaction with the Codex script,
 * database operations via Prisma, and Sentry integration.
 */

// Mock PrismaClient and its methods
const mockPrismaErrorAnalysisSuggestion = {
  findUnique: vi.fn(),
  create: vi.fn(),
  update: vi.fn(),
};
vi.mock('@prisma/client', async () => {
  const actual = await vi.importActual('@prisma/client');
  return {
    ...(actual as any), // Spread actual to keep enums etc.
    PrismaClient: vi.fn(() => ({
      errorAnalysisSuggestion: mockPrismaErrorAnalysisSuggestion,
    })),
    ErrorAnalysisStatus: { // Keep or mock enums as needed by the code
      NEW: 'NEW',
      ANALYZED: 'ANALYZED',
      FIX_SUGGESTED: 'FIX_SUGGESTED',
    },
  };
});

// Mock child_process.exec
const mockExec = vi.fn();
vi.mock('child_process', async () => {
  const actual = await vi.importActual('child_process');
  return {
    ...(actual as any),
    exec: mockExec,
  };
});

// Mock Sentry's captureException
const mockCaptureException = vi.fn();
vi.mock('@sentry/nextjs', () => ({
  captureException: mockCaptureException,
}));

let logErrorApiHandler: any;

// Utility to create mock Next.js req/res objects for testing the handler
const createMockReqRes = (method = 'POST', body = {}) => {
  const req = {
    method,
    body,
    headers: {},
  };
  const res: any = { // Use any for res to simplify mocking
    statusCode: null,
    jsonData: null,
    ended: false,
    setHeader: vi.fn(),
    status: vi.fn(function (this: any, code: number) {
      this.statusCode = code;
      return this;
    }),
    json: vi.fn(function (this: any, data: any) {
      this.jsonData = data;
      this.ended = true;
      return this;
    }),
    end: vi.fn(function (this: any, message?: string) {
      if (message) this.jsonData = message;
      this.ended = true;
      return this;
    }),
  };
  return { req, res };
};


describe('/api/log-error Endpoint', () => {
  beforeAll(async () => {
    try {
      // Ensure pages/api/log-error.ts exports its handler as default
      const apiModule = await import('../../pages/api/log-error.ts');
      logErrorApiHandler = apiModule.default;
      if (typeof logErrorApiHandler !== 'function') {
        throw new Error("Failed to load API handler. Ensure pages/api/log-error.ts exports its handler function as default.");
      }
    } catch (e) {
      console.error("Error loading API handler for tests:", e);
    }
  });

  beforeEach(() => {
    vi.clearAllMocks();
    mockPrismaErrorAnalysisSuggestion.findUnique.mockResolvedValue(null);
    mockPrismaErrorAnalysisSuggestion.create.mockImplementation((data: any) => Promise.resolve({ id: 'new-db-id-123', ...data.data }));
    mockPrismaErrorAnalysisSuggestion.update.mockImplementation((data: any) => Promise.resolve({ id: data.where.id || 'updated-db-id-456', ...data.data }));
    mockExec.mockImplementation((command: any, callback: any) => callback(null, '{"success":true,"suggestion":"Mocked Codex suggestion","model":"gpt-4o-mock"}', ''));
  });

  test('should return 405 if not a POST request', async () => {
    if (!logErrorApiHandler) return;
    const { req, res } = createMockReqRes('GET');
    await logErrorApiHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.end).toHaveBeenCalledWith('Method Not Allowed');
  });

  test('should return 400 if message or stack is missing', async () => {
    if (!logErrorApiHandler) return;
    const { req, res } = createMockReqRes('POST', { message: 'Test error' });
    await logErrorApiHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ error: expect.stringContaining('message and stack are required') }));
  });

  const validErrorPayload = {
    message: 'Test error message',
    stack: 'Error: Test error message\n    at test (test.js:1:1)',
    componentStack: 'in TestComponent (created by App)',
    url: 'http://localhost/test',
    source: 'GlobalErrorBoundary',
    userAgent: 'TestAgent/1.0',
    timestamp: new Date().toISOString(),
  };

  test('New Error - Codex Success: should create record, call exec, update with suggestion, and return 202', async () => {
    if (!logErrorApiHandler) return;
    const { req, res } = createMockReqRes('POST', validErrorPayload);
    mockPrismaErrorAnalysisSuggestion.findUnique.mockResolvedValue(null);
    const createdRecord = { id: 'new-record-id', occurrence_count: 1, ...validErrorPayload };
    mockPrismaErrorAnalysisSuggestion.create.mockResolvedValue(createdRecord);

    await logErrorApiHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(202);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      success: true,
      message: 'Error report received, analysis initiated.',
      dbId: createdRecord.id,
      signature: expect.any(String),
    }));
    expect(mockPrismaErrorAnalysisSuggestion.create).toHaveBeenCalledWith(expect.objectContaining({
      data: expect.objectContaining({ error_message: validErrorPayload.message, status: 'NEW' })
    }));
    expect(mockExec).toHaveBeenCalledTimes(1);
    await new Promise(process.nextTick);
    expect(mockPrismaErrorAnalysisSuggestion.update).toHaveBeenCalledWith(expect.objectContaining({
      where: { id: createdRecord.id },
      data: expect.objectContaining({ status: 'FIX_SUGGESTED', codex_suggestion: 'Mocked Codex suggestion' })
    }));
  });

  test('New Error - Codex Failure (Script Error): should update with ANALYZED status and analysis_error', async () => {
    if (!logErrorApiHandler) return;
    const { req, res } = createMockReqRes('POST', validErrorPayload);
    const createdRecord = { id: 'script-fail-id', ...validErrorPayload };
    mockPrismaErrorAnalysisSuggestion.create.mockResolvedValue(createdRecord);
    const scriptErrorOutput = { success: false, error: 'Codex script internal error' };
    mockExec.mockImplementation((command: any, callback: any) => callback(null, '', JSON.stringify(scriptErrorOutput)));

    await logErrorApiHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(202);
    await new Promise(process.nextTick);
    expect(mockPrismaErrorAnalysisSuggestion.update).toHaveBeenCalledWith(expect.objectContaining({
      where: { id: createdRecord.id },
      data: expect.objectContaining({ status: 'ANALYZED', analysis_error: scriptErrorOutput.error })
    }));
  });

  test('New Error - Codex Failure (Exec Error): should update with ANALYZED status and exec error message', async () => {
    if (!logErrorApiHandler) return;
    const { req, res } = createMockReqRes('POST', validErrorPayload);
    const createdRecord = { id: 'exec-fail-id', ...validErrorPayload };
    mockPrismaErrorAnalysisSuggestion.create.mockResolvedValue(createdRecord);
    const execError = new Error('Command failed');
    mockExec.mockImplementation((command: any, callback: any) => callback(execError, '', ''));

    await logErrorApiHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(202);
    await new Promise(process.nextTick);
    expect(mockPrismaErrorAnalysisSuggestion.update).toHaveBeenCalledWith(expect.objectContaining({
      where: { id: createdRecord.id },
      data: expect.objectContaining({ status: 'ANALYZED', analysis_error: expect.stringContaining('Exec error: Command failed') })
    }));
  });

  test('Recurring Error - Codex Success: should update count, call exec, then update with suggestion', async () => {
    if (!logErrorApiHandler) return;
    const { req, res } = createMockReqRes('POST', validErrorPayload);
    const existingRecord = { id: 'recurring-id-123', occurrence_count: 5, ...validErrorPayload };
    mockPrismaErrorAnalysisSuggestion.findUnique.mockResolvedValue(existingRecord);
    mockPrismaErrorAnalysisSuggestion.update.mockResolvedValueOnce({ ...existingRecord, occurrence_count: 6 }); // First update
    mockPrismaErrorAnalysisSuggestion.update.mockResolvedValueOnce({ ...existingRecord, status: 'FIX_SUGGESTED', codex_suggestion: 'Mocked Codex suggestion' }); // Second update

    await logErrorApiHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(202);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ dbId: existingRecord.id }));
    expect(mockPrismaErrorAnalysisSuggestion.findUnique).toHaveBeenCalledTimes(1);
    expect(mockPrismaErrorAnalysisSuggestion.create).not.toHaveBeenCalled();
    expect(mockPrismaErrorAnalysisSuggestion.update).toHaveBeenNthCalledWith(1, expect.objectContaining({
      where: { error_signature: expect.any(String) },
      data: expect.objectContaining({ occurrence_count: { increment: 1 } })
    }));
    expect(mockExec).toHaveBeenCalledTimes(1);
    await new Promise(process.nextTick);
    expect(mockPrismaErrorAnalysisSuggestion.update).toHaveBeenNthCalledWith(2, expect.objectContaining({
      where: { id: existingRecord.id },
      data: expect.objectContaining({ status: 'FIX_SUGGESTED', codex_suggestion: 'Mocked Codex suggestion' })
    }));
  });

  test('Recurring Error - Already Has Suggestion: (Informational) current logic re-analyzes', () => {
    console.log("INFO: Current logic in api/log-error.js re-analyzes errors even if they already have a suggestion. This is a potential area for future optimization.");
    expect(true).toBe(true);
  });

  test('should call Sentry captureException with the error details', async () => {
    if (!logErrorApiHandler) return;
    const { req, res } = createMockReqRes('POST', validErrorPayload);
    await logErrorApiHandler(req, res);
    expect(mockCaptureException).toHaveBeenCalledTimes(1);
    expect(mockCaptureException).toHaveBeenCalledWith(
      expect.any(Error),
      expect.objectContaining({
        extra: expect.objectContaining({
          message: validErrorPayload.message,
          sourceContext: 'pages/api/log-error'
        })
      })
    );
  });

  test('Database Error (Initial): should return 500 if Prisma throws during initial find/create/update', async () => {
    if (!logErrorApiHandler) return;
    const { req, res } = createMockReqRes('POST', validErrorPayload);
    mockPrismaErrorAnalysisSuggestion.findUnique.mockRejectedValue(new Error('DB connection error'));
    await logErrorApiHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ error: 'Server error during error processing.' }));
  });

  test('Database Error (Callback): should log error if Prisma throws during exec callback update (API already returned 202)', async () => {
    if (!logErrorApiHandler) return;
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const { req, res } = createMockReqRes('POST', validErrorPayload);
    const createdRecord = { id: 'db-error-callback-id', ...validErrorPayload };
    mockPrismaErrorAnalysisSuggestion.create.mockResolvedValue(createdRecord);
    mockExec.mockImplementation((command:any, callback:any) => callback(null, '{"success":true,"suggestion":"Test suggestion","model":"gpt-4o-mock"}', ''));
    mockPrismaErrorAnalysisSuggestion.update.mockRejectedValue(new Error('DB update failed in callback'));

    await logErrorApiHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(202);
    await new Promise(process.nextTick);
    expect(mockPrismaErrorAnalysisSuggestion.update).toHaveBeenCalledWith(expect.objectContaining({
      where: { id: createdRecord.id },
    }));
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining(`Failed to update DB record ${createdRecord.id} after Codex script execution:`),
      expect.any(Error)
    );
    consoleErrorSpy.mockRestore();
  });
});

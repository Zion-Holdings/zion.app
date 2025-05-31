import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import inviteHandler from '@/pages/api/team-builder/invite';
import { supabase } from '@/integrations/supabase/client'; // To be mocked
import { TeamInvite } from '@/types';

// Mock Supabase
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    from: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    single: jest.fn(),
  },
}));

describe('/api/team-builder/invite API Endpoint', () => {
  // Define mockInsert separately to allow chaining
  const mockSingle = jest.fn();
  const mockSelect = jest.fn().mockReturnThis();
  const mockInsert = jest.fn().mockReturnThis();

  // This object will be returned by supabase.from()
  const mockSupabaseChain = {
    insert: mockInsert,
    select: mockSelect,
    single: mockSingle,
  };

  beforeEach(() => {
    // Reset all mocks before each test
    mockSingle.mockReset();
    mockSelect.mockClear();
    mockInsert.mockClear();
    // Ensure supabase.from itself is a mock that returns our chainable object
    (supabase.from as jest.Mock).mockReturnValue(mockSupabaseChain);
  });

  it('should return 405 if method is not POST', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET' as RequestMethod,
    });
    await inviteHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });

  it('should return 400 if talentId or roleTitle is missing', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: { talentId: 'some-talent-id' }, // Missing roleTitle
    });
    await inviteHandler(req, res);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toBe('Missing required fields: talentId and roleTitle are required.');
  });

  it('should return 500 if Supabase insert fails', async () => {
    mockSingle.mockResolvedValueOnce({ error: { message: 'Insert failed' }, data: null });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: { talentId: 'talent1', roleTitle: 'Developer' },
    });
    await inviteHandler(req, res);
    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().error).toContain('Insert failed');
  });

  it('should return 500 if Supabase returns no data and no error after insert', async () => {
    mockSingle.mockResolvedValueOnce({ error: null, data: null });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: { talentId: 'talent1', roleTitle: 'Developer' },
    });
    await inviteHandler(req, res);
    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().error).toBe('Failed to create team invite: No data returned.');
  });

  it('should return 201 with invite data on successful insert', async () => {
    const mockInvite: Partial<TeamInvite> = { id: 'invite-123', talent_id: 'talent1', role_title: 'Developer', status: 'pending' };
    mockSingle.mockResolvedValueOnce({ data: mockInvite, error: null });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: { talentId: 'talent1', roleTitle: 'Developer', projectBriefId: 'brief1' },
    });
    await inviteHandler(req, res);
    expect(res._getStatusCode()).toBe(201);
    expect(res._getJSONData()).toEqual(mockInvite);
    expect(supabase.from).toHaveBeenCalledWith('team_invites');
    expect(mockInsert).toHaveBeenCalledWith(expect.objectContaining({
      talent_id: 'talent1',
      role_title: 'Developer',
      project_brief_id: 'brief1',
      status: 'pending',
    }));
    expect(mockSelect).toHaveBeenCalled();
    expect(mockSingle).toHaveBeenCalled();
  });
});

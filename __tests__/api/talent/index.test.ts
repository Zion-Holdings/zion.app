import { createMocks } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import talentHandler from '@/pages/api/talent/index';
import { TALENT_PROFILES } from '@/data/talentData';
import type { TalentProfile as _TalentProfile } from '@/types/talent';

describe('/api/talent', () => {
  it('should return 200 and all talent profiles for GET requests', () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    });

    talentHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const responseJson = JSON.parse(res._getData());
    expect(responseJson.profiles).toEqual(TALENT_PROFILES);
  });

  it('should return 405 for POST requests', () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST',
    });

    talentHandler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(res._getJSONData().error).toBe('Method POST Not Allowed');
  });

  it('should return 405 for PUT requests', () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'PUT',
    });

    talentHandler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(res._getJSONData().error).toBe('Method PUT Not Allowed');
  });

  it('should return 405 for DELETE requests', () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'DELETE',
    });

    talentHandler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(res._getJSONData().error).toBe('Method DELETE Not Allowed');
  });
});

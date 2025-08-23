import { NextApiRequest, NextApiResponse } from 'next';
import { ApiScope } from '../../../utils/devportal/types';
import { createApiKey, getUserIdFromRequest } from '../../../utils/devportal/auth';
import { getApiKeys, saveApiKeys } from '../../../utils/devportal/storage';
import { generateApiToken } from '../../../utils/devportal/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = getUserIdFromRequest(req);

  if (req.method === 'GET') {
    const keys = getApiKeys().filter((k) => k.userId === userId && !k.revokedAt);
    return res.status(200).json({ data: keys });
  }

  if (req.method === 'POST') {
    const { name, scopes, autoApprove } = req.body || {};
    const parsedScopes: ApiScope[] = Array.isArray(scopes) ? scopes : [];
    const { key, token } = createApiKey(userId, name || 'My API Key', parsedScopes, !!autoApprove);
    return res.status(201).json({ data: { key, token } });
  }

  if (req.method === 'PUT') {
    const { id, action, scopes } = req.body || {};
    const keys = getApiKeys();
    const idx = keys.findIndex((k) => k.id === id && k.userId === userId);
    if (idx < 0) return res.status(404).json({ error: { code: 'not_found', message: 'Key not found' } });

    if (action === 'regenerate') {
      const { token, hash } = generateApiToken();
      keys[idx].tokenHash = hash;
      saveApiKeys(keys);
      return res.status(200).json({ data: { key: keys[idx], token } });
    }

    if (action === 'update_scopes') {
      keys[idx].scopes = Array.isArray(scopes) ? scopes : keys[idx].scopes;
      saveApiKeys(keys);
      return res.status(200).json({ data: keys[idx] });
    }

    if (action === 'revoke') {
      keys[idx].revokedAt = new Date().toISOString();
      saveApiKeys(keys);
      return res.status(200).json({ data: keys[idx] });
    }

    return res.status(400).json({ error: { code: 'invalid_action', message: 'Unknown action' } });
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    const keys = getApiKeys();
    const idx = keys.findIndex((k) => k.id === id && k.userId === userId);
    if (idx < 0) return res.status(404).json({ error: { code: 'not_found', message: 'Key not found' } });
    keys[idx].revokedAt = new Date().toISOString();
    saveApiKeys(keys);
    return res.status(200).json({ data: keys[idx] });
  }

  return res.status(405).json({ error: { code: 'method_not_allowed', message: 'Method not allowed' } });
}
import { useState, useEffect } from 'react';

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  scopes: ApiKeyScope[];
  createdAt: string;
  lastUsed?: string;
  isActive: boolean;
}

export type ApiKeyScope = 'read' | 'write' | 'admin' | 'jobs' | 'talent' | 'equipment' | 'jobs:read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';

export function useApiKeys() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [newApiKey, setNewApiKey] = useState<string | null>(null);

  useEffect(() => {
    // Load API keys from localStorage or API
    const loadApiKeys = () => {
      const stored = localStorage.getItem('zion_api_keys');
      if (stored) {
        try {
          setApiKeys(JSON.parse(stored));
        } catch (error) {
          console.error('Error parsing stored API keys:', error);
        }
      }
      setLoading(false);
    };

    loadApiKeys();
  }, []);

  const fetchApiKeys = async () => {
    // Implement actual API call here
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const createApiKey = async (name: string, scopes: ApiKeyScope[]) => {
    const newKey: ApiKey = {
      id: Date.now().toString(),
      name,
      key: `zion_${Math.random().toString(36).substr(2, 9)}`,
      scopes,
      createdAt: new Date().toISOString(),
      isActive: true
    };

    const updatedKeys = [...apiKeys, newKey];
    setApiKeys(updatedKeys);
    setNewApiKey(newKey.key);
    localStorage.setItem('zion_api_keys', JSON.stringify(updatedKeys));
    return newKey;
  };

  const deleteApiKey = async (id: string) => {
    const updatedKeys = apiKeys.filter(key => key.id !== id);
    setApiKeys(updatedKeys);
    localStorage.setItem('zion_api_keys', JSON.stringify(updatedKeys));
  };

  const toggleApiKey = async (id: string) => {
    const updatedKeys = apiKeys.map(key =>
      key.id === id ? { ...key, isActive: !key.isActive } : key
    );
    setApiKeys(updatedKeys);
    localStorage.setItem('zion_api_keys', JSON.stringify(updatedKeys));
  };

  const updateApiKeyScopes = async (id: string, scopes: ApiKeyScope[]) => {
    const updatedKeys = apiKeys.map(key =>
      key.id === id ? { ...key, scopes } : key
    );
    setApiKeys(updatedKeys);
    localStorage.setItem('zion_api_keys', JSON.stringify(updatedKeys));
  };

  const regenerateApiKey = async (id: string) => {
    const newKey = `zion_${Math.random().toString(36).substr(2, 9)}`;
    const updatedKeys = apiKeys.map(key =>
      key.id === id ? { ...key, key: newKey } : key
    );
    setApiKeys(updatedKeys);
    setNewApiKey(newKey);
    localStorage.setItem('zion_api_keys', JSON.stringify(updatedKeys));
  };

  const revokeApiKey = async (id: string) => {
    await deleteApiKey(id);
  };

  const clearNewApiKey = () => {
    setNewApiKey(null);
  };

  return {
    apiKeys,
    loading,
    newApiKey,
    fetchApiKeys,
    createApiKey,
    deleteApiKey,
    toggleApiKey,
    updateApiKeyScopes,
    regenerateApiKey,
    revokeApiKey,
    clearNewApiKey
  };
}
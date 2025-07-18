import { describe, it, expect, beforeEach } from 'vitest';'import { safeStorage, safeSessionStorage } from '@/utils/safeStorage';'
describe('safeStorage clear', () => {'  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it('clears all items from safeStorage', () => {'    safeStorage.setItem('key1', 'value1');'    safeStorage.setItem('key2', 'value2');'
    safeStorage.clear();

    expect(safeStorage.getItem('key1')).toBeNull();'    expect(safeStorage.getItem('key2')).toBeNull();'  });

  it('clears all items from safeSessionStorage', () => {'    safeSessionStorage.setItem('skey1', 'value1');'    safeSessionStorage.setItem('skey2', 'value2');'
    safeSessionStorage.clear();

    expect(safeSessionStorage.getItem('skey1')).toBeNull();'    expect(safeSessionStorage.getItem('skey2')).toBeNull();'  });
});

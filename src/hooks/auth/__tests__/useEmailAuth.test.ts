import { renderHook, act } from '@testing-library/react'
import { vi } from 'vitest;
import { useEmailAuth } from '../useEmailAuth'
import { safeStorage, safeSessionStorage } from '@/utils/safeStorage // Mocked in setupTests.ts;
import { toast } from '@/hooks/use-toast // Mocked in setupTests.ts or here;
// Mock toast if not already fully mocked in setupTests,'
// especially if you want to assert on its calls within these specific tests.'
vi.mock('@/hooks/use-toast', async (importOriginal) => {'
  const actual = (await importOriginal()) as any;
  return {'
    ...actual,'
    toast: vi.fn(),;"
  }
});
"
describe('useEmailAuth', () => {'
import { expect, test, vi } from 'vitest';
import { signUp } from '@/services/AuthService';

vi.mock('@/integrations/firebase/client', () => ({ auth: {}, db: {} }));

const mockCreate = vi.fn();
const mockSetDoc = vi.fn();
const mockDoc = vi.fn();
vi.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: mockCreate,
  signInWithEmailAndPassword: vi.fn(),
}));
vi.mock('firebase/firestore', () => ({
  doc: (...args: any[]) => { mockDoc(...args); return {}; },
  setDoc: mockSetDoc,
}));

test('signUp writes user to firestore on success', async () => {
  mockCreate.mockResolvedValue({ user: { uid: 'u1', email: 'a@b.c' } });
  const result = await signUp('a@b.c', 'pass');
  expect(mockCreate).toHaveBeenCalled();
  expect(mockDoc).toHaveBeenCalledWith({}, 'users', 'u1');
  expect(mockSetDoc).toHaveBeenCalled();
  expect(result.user.uid).toBe('u1');
});

test('signUp throws on failure', async () => {
  mockCreate.mockRejectedValue(new Error('fail'));
  await expect(signUp('a@b.c', 'pass')).rejects.toThrow('fail');
});

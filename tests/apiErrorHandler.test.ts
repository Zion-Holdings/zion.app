import { describe, it, expect } from 'vitest';
import { parseApiError } from '@/utils/apiErrorHandler';

describe('parseApiError', () => {
  it('handles network failure', () => {
    const err = new Error('Network Error');
    expect(parseApiError(err)).toEqual({
      status: undefined,
      code: undefined,
      message: 'Network Error'
    });
  });

  it('handles 404 response', () => {
    const err = { response: { status: 404, data: {} } } as any;
    expect(parseApiError(err)).toEqual({
      status: 404,
      code: 404,
      message: 'Unexpected error – please try again later.'
    });
  });

  it('handles 500 with message', () => {
    const err = { response: { status: 500, data: { message: 'Server err' } } } as any;
    expect(parseApiError(err)).toEqual({
      status: 500,
      code: 500,
      message: 'Server err'
    });
  });

  it('handles validation error', () => {
    const err = { response: { status: 400, data: { code: 'VALID', message: 'Invalid data' } } } as any;
    expect(parseApiError(err)).toEqual({
      status: 400,
      code: 'VALID',
      message: 'Invalid data'
    });
  });
});

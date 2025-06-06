import { postFeedback } from '../feedbackService';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('postFeedback', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('sends feedback and returns data on success', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ success: true }), { status: 201 });
    const result = await postFeedback({ rating: 5, comment: 'Nice', url: '/foo', userAgent: 'test' });
    expect(fetchMock).toHaveBeenCalledWith('/api/feedback', expect.objectContaining({ method: 'POST' }));
    expect(result).toEqual({ success: true });
  });

  it('throws error on server failure', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ error: 'Server error' }), { status: 500 });
    await expect(postFeedback({ rating: 4, comment: 'Bad', url: '/foo', userAgent: 'test' })).rejects.toThrow('Server error');
  });
});

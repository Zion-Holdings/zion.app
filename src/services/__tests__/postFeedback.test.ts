import { postFeedback } from '../feedbackService';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('postFeedback', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('sends feedback and returns data on success', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ success: true }), { status: 200 });
    const result = await postFeedback({ rating: 5, comments: 'Nice', pageUrl: '/foo' });
    expect(fetchMock).toHaveBeenCalledWith('/api/feedback', expect.objectContaining({ method: 'POST' }));
    expect(result).toEqual({ success: true });
  });

  it('throws error on server failure', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ error: 'Server error' }), { status: 500 });
    await expect(postFeedback({ rating: 4, comments: 'Bad', pageUrl: '/foo' })).rejects.toThrow('Server error');
  });
});

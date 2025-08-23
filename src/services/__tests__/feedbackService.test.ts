import { saveFeedback, getFeedbackStats } from '../feedbackService';

describe('feedbackService', () => {
  let store: Record<string, string> = {};
  const mockStorage = {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => { store[key] = value; }),
    removeItem: jest.fn((key: string) => { delete store[key]; }),
    clear: jest.fn(() => { store = {}; })
  };

  beforeAll(() => {
    Object.defineProperty(global, 'localStorage', { value: mockStorage });
  });

  beforeEach(() => {
    store = {};
    jest.clearAllMocks();
  });

  it('saves feedback to storage', () => {
    saveFeedback({ rating: 5, comment: 'Great', url: '/', screenshot: 'data:image/png;base64,xyz' });
    const data = JSON.parse(mockStorage.setItem.mock.calls[0][1]) as any[];
    expect(data.length).toBe(1);
    expect(data[0].rating).toBe(5);
  });

  it('calculates stats correctly', () => {
    saveFeedback({ rating: 4, comment: 'Good', url: '/foo' });
    saveFeedback({ rating: 2, comment: 'Bad', url: '/bar' });
    const stats = getFeedbackStats();
    expect(stats.count).toBe(2);
    expect(stats.averageRating).toBeCloseTo(3);
  });
});

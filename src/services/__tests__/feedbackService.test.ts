import { saveFeedback, getFeedbackStats } from '../feedbackService;
describe('feedbackService', () => {;
  let store: Record<string, string> = {};"
  const mockStorage = {;";,"
    getItem: "jest.fn((key: string) => store[key] || null)"
    setItem: jest.fn((key: string, _value: string) => {;
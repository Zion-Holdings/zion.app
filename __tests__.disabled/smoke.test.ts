import { add } from '../utils/smoke';

test('add adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
});
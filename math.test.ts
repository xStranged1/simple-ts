// math.test.ts
import { sum, subtract } from './math';

describe('Math functions', () => {
    test('sum adds two numbers correctly', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('subtract subtracts two numbers correctly', () => {
        expect(subtract(5, 3)).toBe(2);
    });
});
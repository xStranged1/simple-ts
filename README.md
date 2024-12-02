## How to create tests with Jest in node enviroment
### Install dependencies
```
npm install --save-dev jest ts-jest ts-node @types/jest
```
### Init jest config
```
npx jest --init
```

### Add this in jest.config.ts
```
preset: 'ts-jest',
testEnvironment: 'node',
// ... other configurations
```

### Init default tsc config
```
tsc --init
```

### Create and export a function to test
```
// math.ts
export const sum = (a: number, b: number): number => {
  return a + b;
};

export const subtract = (a: number, b: number): number => {
  return a - b;
};
```
### Create a test to run
```
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
```
### Run tests
`npx jest`

### Run a specific test
`npx jest math.test.ts`

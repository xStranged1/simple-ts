// math.test.ts
import { comprobarChismes } from './app';
import { sum, subtract } from './math';

const mockComplete = [
    'fede',
    'chimeVerdad&ero',
    'chimeDesestimado$',
    'talcual',
    'reemplazarP$orChismeF&also',
    'reemplazarP&orChismeF$also',
    'chimeDesestimado$',
    'otrochimeVerdad&ero',
    'chismesinNada',
]

const ResultComplete = [
    'fede',
    'chimeVerdad&ero',
    'talcual',
    '¡Chisme falso!',
    '¡Chisme falso!',
    'otrochimeVerdad&ero',
    'chismesinNada',
]

const MockfirstTest = [
    'fede',
    'chimeCualquiera',
]

const MockSecondTest = [
    'fede',
    'chim&ecit$o',
    'chim$ecit$ &o',
    'valle',
]

const ResultSecondTest = [
    'fede',
    '¡Chisme falso!',
    '¡Chisme falso!',
    'valle',
]


const MockThirdTest = [
    'fede',
    'chim&ecit$o',
    'chim$ecit$ &o',
    'valle',
]

const ResultThirdTest = [
    'fede',
    '¡Chisme falso!',
    '¡Chisme falso!',
    'valle',
]

const MockFourTest = [
    'fede',
    'chime$ignorado',
    'valle',
    'chime$ignorado',
]

const ResultFourTest = [
    'fede',
    'valle',
]



describe('Function comprobarChistmes', () => {
    test('Should be return same list if all elements not includes $ and &', () => {
        expect(comprobarChismes(MockfirstTest)).toStrictEqual(MockfirstTest);
    });

    test('If element have "&" and "$" should be replaced for ¡Chisme falso!', () => {
        expect(comprobarChismes(MockSecondTest)).toStrictEqual(ResultSecondTest);
    });

    test('If element have only "&" should be return the same element', () => {
        expect(comprobarChismes(MockThirdTest)).toStrictEqual(ResultThirdTest);
    });

    test('If element have only $ should be ignored', () => {
        expect(comprobarChismes(MockFourTest)).toStrictEqual(ResultFourTest);
    });

    test('Should work with all combinations', () => {
        const startTime = performance.now()
        const res = comprobarChismes(mockComplete)
        const endTime = performance.now()
        expect(res).toStrictEqual(ResultComplete);
        console.log(`comprobarChismes execution time: ${(endTime - startTime).toFixed(3)} ms`);
    });

});
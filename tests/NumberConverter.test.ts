import IReplaceRule from '../src/Interfaces/IReplaceRule'
import NumberConverter from '../src/NumberConverter'

describe('数値変換規則', (): void => {
    const createMockRule = (expectedNumber: number, expectedCarry: string, matchResult: boolean, replacement: string) => {
        return {
            match: jest.fn().mockImplementation((carry: string, number: number) => {
                expect(carry).toBe(expectedCarry)
                expect(number).toBe(expectedNumber)
                return matchResult
            }),
            apply: jest.fn().mockImplementation((carry: string, number: number) => {
                if (matchResult) expect(carry).toBe(expectedCarry)
                return replacement
            })
        } as IReplaceRule
    }

    test('空のルール変換テスト', (): void => {
        const numberConverter: NumberConverter = new NumberConverter([])
        expect(numberConverter.convert(1)).toBe('')
    })

    test('単一ルール変換テスト', (): void => {
        const numberConverter: NumberConverter = new NumberConverter([
            createMockRule(1, '', true, 'Replaced')
        ])

        expect(numberConverter.convert(1)).toBe('Replaced')
    })

    test('複数ルール変換テスト', (): void => {
        const numberConverter: NumberConverter = new NumberConverter([
            createMockRule(1, '', true, 'Fizz'),
            createMockRule(1, 'Fizz', true, 'FizzBuzz')
        ]);

        expect(numberConverter.convert(1)).toBe('FizzBuzz');
    })

    test('一致しないルールのスキップ変換テスト', (): void => {
        const numberConverter: NumberConverter = new NumberConverter([
            createMockRule(1, '', false, 'Fizz'),
            createMockRule(1, '', false, 'Buzz'),
            createMockRule(1, '', true, '1'),
        ])

        expect(numberConverter.convert(1)).toBe('1')
    })
})

import NumberConverter from '../src/NumberConverter'
import LoopingNumberRule from '../src/Rules/LoopingNumberRule'
import PassThroughRule from '../src/Rules/PassThroughRule'
import HorizonLineRule from '../src/Rules/HorizonLineRule'

describe('FizzBuzz', (): void => {
    const fizzRule: LoopingNumberRule = new LoopingNumberRule(3, 'Fizz')
    const buzzRule: LoopingNumberRule = new LoopingNumberRule(5, 'Buzz')
    const passThroughRule: PassThroughRule = new PassThroughRule()
    const horizonLineRule: HorizonLineRule = new HorizonLineRule()
    const rules = [fizzRule, buzzRule, passThroughRule, horizonLineRule]

    const numberConverter: NumberConverter = new NumberConverter(rules)

    test('3で割り切れる数値変換テスト', (): void => {
        expect(numberConverter.convert(3)).toBe('Fizz')
    })

    test('5で割り切れる数値変換テスト', (): void => {
        expect(numberConverter.convert(5)).toBe('Buzz')
    })

    test('10で割り切れる数値水平線挿入テスト(5でも割り切れる)', (): void => {
        expect(numberConverter.convert(10)).toBe('Buzz<hr>')
    })

    test('3でも5で割り切れる数値変換テスト', (): void => {
        expect(numberConverter.convert(15)).toBe('FizzBuzz')
    })

    test('それ以外の場合は数値そのものを返すテスト', (): void => {
        expect(numberConverter.convert(1)).toBe('1')
        expect(numberConverter.convert(2)).toBe('2')
    })
})

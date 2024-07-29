import HorizonLineRule from '../../src/Rules/HorizonLineRule'

describe('水平線規則', (): void => {
    const rule: HorizonLineRule = new HorizonLineRule()

    test('水平線を含む伝達文字列が返されるかテスト', (): void => {
        expect(rule.apply('', 10)).toBe('<hr>')
        expect(rule.apply('Buzz', 10)).toBe('Buzz<hr>')
    })

    test('数値が10で割り切れる場合にtrueを返すかテスト', (): void => {
        expect(rule.match('', 10)).toBe(true)
        expect(rule.match('', 11)).toBe(false)
    })
})

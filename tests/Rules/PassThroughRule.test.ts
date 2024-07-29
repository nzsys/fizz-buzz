import PassThroughRule from '../../src/Rules/PassThroughRule'

describe('通過規則', (): void => {
    const rule: PassThroughRule = new PassThroughRule()

    test('数値の文字列表現テスト', (): void => {
        expect(rule.apply('', 1)).toBe('1')
        expect(rule.apply('', 2)).toBe('2')
    })

    test('値が空の文字列の場合は true を返し、それ以外の場合はfalseを返すかテスト', (): void => {
        expect(rule.match('', 1)).toBe(true)
        expect(rule.match('Fizz', 3)).toBe(false)
    })
})

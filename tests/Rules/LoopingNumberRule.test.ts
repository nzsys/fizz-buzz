import LoopingNumberRule from '../../src/Rules/LoopingNumberRule'

describe('ループ数値変換規則', (): void => {
    const rule: LoopingNumberRule = new LoopingNumberRule(3, 'Fizz')

    test('基数の倍数を置換文字列で返すテスト', (): void => {
        expect(rule.apply('', 3)).toBe('Fizz')
        expect(rule.apply('', 9)).toBe('Fizz')
    });

    test('基数倍数の場合はtrueを返し、それ以外の場合はfalseを返すかテスト', (): void => {
        expect(rule.match('', 3)).toBe(true)
        expect(rule.match('', 4)).toBe(false)
    });
});

import IReplaceRule from './Interfaces/IReplaceRule'

export default class NumberConverter {
    constructor(protected rules: IReplaceRule[]) {}

    convert(n: number): string {
        return this.rules.reduce((carry: string, rule: IReplaceRule): string => rule.match(carry, n)
            ? rule.apply(carry, n)
            : carry, '')
    }
}

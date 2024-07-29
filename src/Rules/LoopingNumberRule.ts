import IReplaceRule from '../Interfaces/IReplaceRule'

export default class LoopingNumberRule implements IReplaceRule {
    constructor(
        private base: number,
        private replacement: string
    ) {}

    apply(carry: string, _: number): string {
        return carry + this.replacement
    }

    match(_: string, n: number): boolean {
        return n % this.base === 0
    }
}

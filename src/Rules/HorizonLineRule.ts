import IReplaceRule from '../Interfaces/IReplaceRule'

export default class HorizonLineRule implements IReplaceRule {
    readonly line: string = '<hr>'

    match(_: string, n: number): boolean {
        return n % 10 === 0
    }

    apply(carry: string, _: number): string {
        return carry + this.line
    }
}

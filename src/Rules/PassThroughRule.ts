import IReplaceRule from '../Interfaces/IReplaceRule'

export default class PassThroughRule implements IReplaceRule {
    apply(_: string, n: number): string {
        return n.toString()
    }

    match(carry: string, _: number): boolean {
        return carry === ''
    }
}

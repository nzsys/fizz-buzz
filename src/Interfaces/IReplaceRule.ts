export default interface IReplaceRule {
    match(carry: string, n: number): boolean
    apply(carry: string, n: number): string
}

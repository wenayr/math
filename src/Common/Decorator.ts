export function Decorator<T extends (...arg: any[]) => any>(
    func: T,
    option?:
        {
            parameters?: (...a: Parameters<T>) => any,
            parametersModifier?: (...a: Parameters<T>) => Parameters<T>,
            parametersAfter?: (...a: Parameters<T>) => any,
            result?: (a: ReturnType<T>) => any,
            resultModifier?: (a: ReturnType<T>) => ReturnType<T>,
        }) {
    return (...arg: Parameters<T>) => {
        option?.parameters?.(...arg)
        const r = func(...(option?.parametersModifier?.(...arg) ?? arg)) as ReturnType<T>
        option?.parametersAfter?.(...arg)
        option?.result?.(r)
        return option?.resultModifier?.(r) ?? r

    }
}

export function Transformer<T extends (...arg: any[]) => any, R>(
    func: T,
    transformer: (a: [params: Parameters<T>, result: ReturnType<T>]) => R
) {
    return (...arg: Parameters<T>) => {
        const r = func(...arg);
        return transformer([arg, r]) as R
    }
}

import { sleepAsync } from "./common";
type CommonOptions<T extends (...args: any[]) => any> = {
    beforeParams?: (...a: Parameters<T>) => void;
    modifyParams?: (...a: Parameters<T>) => Parameters<T>;
    afterParams?: (...a: Parameters<T>) => void;
    onResult?: (res: ReturnType<T>) => void;
    modifyResult?: (res: ReturnType<T>) => ReturnType<T>;
};

type AsyncExtras<T extends (...args: any[]) => any> = ReturnType<T> extends Promise<any>
    ? {
        onCatch?: (error: unknown) => void;
        onFinally?: () => void;
    }
    : {};

type EnhancedDecoratorOptions<T extends (...args: any[]) => any> = CommonOptions<T> & AsyncExtras<T>;

export function enhancedDecorator<T extends (...args: any[]) => any>(
    fn: T,
    opt?: EnhancedDecoratorOptions<T>
): (...args: Parameters<T>) => ReturnType<T> {
    return (...args: Parameters<T>) => {
        opt?.beforeParams?.(...args);
        const modifiedArgs = opt?.modifyParams?.(...args) || args;
        const rawResult = fn(modifiedArgs);
        opt?.afterParams?.(...args);

        if (rawResult instanceof Promise) {
            const optAsync = opt as EnhancedDecoratorOptions<() => Promise<any>>;
            return rawResult
                .then((res) => opt?.modifyResult?.(optAsync?.onResult?.(res) || res) || res)
                .catch((err) => {
                    optAsync?.onCatch?.(err);
                    throw err;
                })
                .finally(() => optAsync?.onFinally?.()) as ReturnType<T>;
        } else {
            opt?.onResult?.(rawResult);
            return opt?.modifyResult?.(rawResult) || rawResult;
        }
    };
}



// проверка типизации
// async function tt3(O: { a: number, b: number }, c: string){
//     return o.a+1;
// }
// function tt4(a: number){
//     return a+1;
// }
// const b = enhancedDecorator(tt3, {onFinally: ()=>{}})  // все ок
// const b3 = enhancedDecorator(tt3, {afterParams: (e, c)=>{}})  // все ок
// const b2 = enhancedDecorator(tt4, {onFinally: ()=>{}}) // onFinally ошибка
/**
 * Оборачивает функцию для выполнения определённой пост-обработки.
 */
export function enhancedTransformer<T extends (...args: any[]) => any, R>(
    fn: T,
    transform: (data: [args: Parameters<T>, result: ReturnType<T>]) => R
): (...args: Parameters<T>) => R {
    return (...args: Parameters<T>): R => {
        const result = fn(...args);
        // Трансформация результата с учетом исходных параметров
        return transform([args, result]) as R;
    };
}

/**
 * Поддержка старого метода `Decorator` через перенаправление на новую улучшенную версию.
 */
export function Decorator<T extends (...args: any[]) => any>(
    fn: T,
    opt?: {
        parameters?: (...a: Parameters<T>) => any,
        parametersModifier?: (...a: Parameters<T>) => Parameters<T>,
        parametersAfter?: (...a: Parameters<T>) => any,
        result?: (res: ReturnType<T>) => any,
        resultModifier?: (res: ReturnType<T>) => ReturnType<T>,
    }
) {
    // Преобразуем старые параметры в новые
    return enhancedDecorator(fn, {
        beforeParams: opt?.parameters,
        modifyParams: opt?.parametersModifier,
        afterParams: opt?.parametersAfter,
        onResult: opt?.result,
        modifyResult: opt?.resultModifier,
    });
}

/**
 * Поддержка старого метода `Transformer` через перенаправление на новую улучшенную версию.
 */
export function TransformerResult<T extends (...args: any[]) => any, R>(
    fn: T,
    transform: (data: [args: Parameters<T>, result: ReturnType<T>]) => R
) {
    return enhancedTransformer(fn, transform);
}

export function Transformer<T extends (...args: any[]) => any, R>(
    fn: T,
    transform: (data: [args: Parameters<T>, fn: T]) => R
): (...args: Parameters<T>) => R {
    return (...args: Parameters<T>): R => transform([args, fn]) as R;
}


//import { sleepAsync } from "./common";
//
//
// export function Decorator<T extends (...arg: any[]) => any>(
//     func: T,
//     option?:
//         {
//             parameters?: (...a: Parameters<T>) => any,
//             parametersModifier?: (...a: Parameters<T>) => Parameters<T>,
//             parametersAfter?: (...a: Parameters<T>) => any,
//             result?: (a: ReturnType<T>) => any,
//             resultModifier?: (a: ReturnType<T>) => ReturnType<T>,
//         }) {
//     return (...arg: Parameters<T>) => {
//         option?.parameters?.(...arg)
//         const r = func(...(option?.parametersModifier?.(...arg) ?? arg)) as ReturnType<T>
//         option?.parametersAfter?.(...arg)
//         option?.result?.(r)
//         return option?.resultModifier?.(r) ?? r
//
//     }
// }
//
// export function Transformer<T extends (...arg: any[]) => any, R>(
//     func: T,
//     transformer: (a: [params: Parameters<T>, result: ReturnType<T>]) => R
// ) {
//     return (...arg: Parameters<T>) => {
//         const r = func(...arg);
//         return transformer([arg, r]) as R
//     }
// }

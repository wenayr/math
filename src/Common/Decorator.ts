import { sleepAsync } from "./common";

/**
 * Оборачивает функцию для добавления гибкой настройки выполнения.
 * Позволяет модифицировать параметры до/после выполнения и результат функции.
 */
export function enhancedDecorator<T extends (...args: any[]) => any>(
    fn: T,
    opt?: {
        /** Выполняется перед вызовом функции, получая её параметры. */
        beforeParams?: (...a: Parameters<T>) => any,
        /** Позволяет модифицировать параметры перед вызовом функции. */
        modifyParams?: (...a: Parameters<T>) => Parameters<T>,
        /** Выполняется после вызова функции, получая оригинальные параметры. */
        afterParams?: (...a: Parameters<T>) => any,
        /** Выполняется с результатом функции после её выполнения. */
        onResult?: (res: ReturnType<T>) => any,
        /** Позволяет модифицировать результат функции перед его возвратом. */
        modifyResult?: (res: ReturnType<T>) => ReturnType<T>,
    }
) {
    return (...args: Parameters<T>): ReturnType<T> => {
        // Предобработка параметров (если задана)
        opt?.beforeParams?.(...args);

        // Модификация параметров (если задана)
        const modifiedArgs = opt?.modifyParams?.(...args) ?? args;

        // Выполнение основной функции
        const result = fn(...modifiedArgs) as ReturnType<T>;

        // Обработка параметров после выполнения функции (если задана)
        opt?.afterParams?.(...args);

        // Обработка результата (например, логирование)
        opt?.onResult?.(result);

        // Возврат обработанного или оригинального результата
        return opt?.modifyResult?.(result) ?? result;
    };
}

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
export function Transformer<T extends (...args: any[]) => any, R>(
    fn: T,
    transform: (data: [args: Parameters<T>, result: ReturnType<T>]) => R
) {
    return enhancedTransformer(fn, transform);
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

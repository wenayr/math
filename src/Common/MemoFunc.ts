
/**
 * Мемонизация с использованием Map.
 */
export function MemoFunc(a?: {
    memo?: Map<any, any>;
    timeDelta?: number;
    maxLimits?: number;
    compareArguments?: (args: any) => string;
    eventUpdate?: () => void;
}) {
    const {
        memo = new Map<any, any>(),
        timeDelta = 60 * 1000 * 100,
        maxLimits = 10000,
        compareArguments = (args: any) => JSON.stringify(args),
        eventUpdate
    } = a ?? {};

    type CacheEntry<T> = { volume: T; time: number };

    function cleanAll(obj: Record<string, any>) {
        Object.keys(obj).forEach(key => delete obj[key]);
        eventUpdate?.();
    }

    const func = <T extends (...args: any[]) => any>(
        data: T,
        options?: { old?: boolean; key?: string; timeDelta?: number; reSave?: boolean; compareArguments?: (...args: Parameters<T>) => string }
    ): T => {
        return ((...args: any[]) => {
            const { reSave = false, key = "", compareArguments: cmp = compareArguments, timeDelta: td = timeDelta, old = false } = options ?? {};
            const cacheForFunc = memo.get(data) ?? (() => { memo.set(data, {}); return memo.get(data); })();
            const cacheKey = args.length ? key + cmp(args) : key;
            let entry: CacheEntry<ReturnType<T>> = cacheForFunc[cacheKey];
            if (old && entry?.volume) {
                return entry.volume;
            }
            if (Object.keys(cacheForFunc).length > maxLimits) {
                console.log("Превышен лимит кэша:", Object.keys(cacheForFunc).length);
                cleanAll(cacheForFunc);
            }
            if (memo.size > maxLimits) {
                console.log("Превышен лимит кэша Map:", memo.size);
                memo.clear();
            }
            if (reSave || !entry || (entry && entry.time < Date.now() - td)) {
                entry = cacheForFunc[cacheKey] = { volume: data(...args), time: Date.now() } as CacheEntry<ReturnType<T>>;
                eventUpdate?.();
            }
            return entry.volume;
        }) as T;
    };

    return {
        func,
        cleanAll,
        get memo() {
            return memo;
        }
    };
}

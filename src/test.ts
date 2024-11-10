
function test() {
    const ff = (a: number, b: number) => {}
    const map = new Map<string, typeof ff>();
    map.set("d",ff)
    const l = 10000000

    const par = [3,5] as const
    const ttt = (...par: Parameters<typeof ff> ) => {
        console.time("ss")
        for (let i = 0; i < l; i++) {
            map.forEach(e=> {
                e(...par)
            })
        }
        console.timeEnd("ss")
    }

    map.set("z",ff)
    ttt(...par)

    map.set("v",ff)
    ttt(...par)

    map.set("zx",ff)
    ttt(...par)



    map.set("rt",ff)
    map.set("xd",ff)
    map.set("fd",ff)
    ttt(...par)

    map.set("frt",ff)
    map.set("fxd",ff)
    map.set("ffd",ff)
    ttt(...par)

    const ar = [...map.values()]
    ar.length = 1
    console.time("zz")
    let r = (...a: typeof par) => {
        for (let i = 0; i < ar.length; i++) {
            ar[i](...a)
        }
    }
    const tr: typeof r = (...a) => {

    }
    // @ts-ignore
    r = null
    for (let i = 0; i < l; i++) {
        r?.(...par)
    }
    console.timeEnd("zz")
}

test()
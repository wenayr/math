export namespace test {
    export function test1(a?:number) {
        console.log("test1" + (a??0))
    }
}
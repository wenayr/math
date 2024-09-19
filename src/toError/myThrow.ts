
export const toError = {
    set convert(e: any){
        if (e instanceof Error) {throw e}
        throw new Error(e)
    }
}
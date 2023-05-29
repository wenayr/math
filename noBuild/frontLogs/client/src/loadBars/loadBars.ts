import {BinanceLoadEasySpot, TF} from "wenay-common";



export async function funcTestLoad() {
    // binanceSpotLoadBars

    const BinanceLoadSpot2 = BinanceLoadEasySpot({fetch: fetch})

    const nBars = 8995
    const tf = TF.M15
    const time2 = new Date()
    const time1 = new Date(time2.valueOf() - tf.valueOf() * nBars)

    const symbols = [
        'NULSUSDT',    'COSUSDT',    'WANUSDT',
            'TROYUSDT',    'BNTUSDT',    'DIAUSDT',
            'OXTUSDT',     'ORNUSDT',    'HARDUSDT',
            'OMUSDT',      'FORTHUSDT',  'DEXEUSDT',
            'FARMUSDT',    'ALPACAUSDT', 'QUICKUSDT',
            'FORUSDT',     'AMPUSDT',    'ALCXUSDT',
            'REIUSDT',     'ONGUSDT',    'WINUSDT',
            'DOCKUSDT',    'FUNUSDT',    'CTXCUSDT',
            'VITEUSDT',    'LTOUSDT',    'DATAUSDT',
            'KMDUSDT',     'WNXMUSDT',   'UMAUSDT',
            'SUNUSDT',     'XVSUSDT',    'AKROUSDT',
            'AVAUSDT',     'FIROUSDT',   'SUPERUSDT',
            'MDXUSDT',     'ERNUSDT',    'PHAUSDT',
            'BONDUSDT',    'IDEXUSDT',   'SYSUSDT',
            'AUCTIONUSDT', 'MOVRUSDT',   'KP3RUSDT',
            'MCUSDT',      'EPXUSDT',    'VIBUSDT', 'VIBUSDT1'
        ]



    const arr = symbols.map((name)=>BinanceLoadSpot2({name, time2, time1, tf }))

    const result = await Promise.allSettled(arr)
    console.log(result);

}
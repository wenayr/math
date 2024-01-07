type LONG = number
type NUMBER = number
type STRING = string
type INT = number
type DECIMAL = number
type INTEGER = number
type ARRAY<T = any> = T[];
type BigDecimal = number
type DOUBLE = number
type BOOLEAN = boolean
type NumberString = string
type ENUM_INTERVAL = "1s" |
    "1m" | "3m" | "5m" | "15m" | "30m" |
    "1h" | "2h" | "4h" | "6h" | "8h" | "12h" |
    "1d" | "3d" |
    "1w" |
    "1M"
type ENUM_interval = ENUM_INTERVAL
type ENUM_timeInForce = ENUM_INTERVAL
type ENUM_type = any
type ENUM_windowSize = any
type ENUM_side = any
type ENUM_newOrderRespType = any
type ENUM_selfTradePreventionMode = any
type ENUM_cancelRestrictions = any
type ENUM_cancelReplaceMode = any
type ENUM_stopLimitTimeInForce = any

class CBinanceSocket {
//https://binance-docs.github.io/apidocs/websocket_api/en#request-format
    Requestformat = () => {
        const name = "Request format"
        const nameType = ""
        const wight = [0]
        type req = {
                "id": string, // "e2a85d9f-07a5-4f94-8d5f-789dc3deb097"
                "method": string, // "order.place"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "side": string, // "BUY"
                    "type": string, // "LIMIT"
                    "price": NumberString, // "0.1"
                    "quantity": NumberString, // "10"
                    "timeInForce": string, // "GTC"
                    "timestamp": number, // 1655716096498
                    "apiKey": string, // "T59MTDLWlpRW16JVeZ2Nju5A5C98WkMm8CSzWC4oqynUlTm1zXOxyauT8LmwXEv9"
                    "signature": string, // "5942ad337e6779f2f4c62cd1c26dba71c91514400a24990a3e7f5edec9323f90"
                }
            }
            | undefined
        return {
            name, wight, typeParams: {}, typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#response-format
    Responseformat = () => {
        const name = "Response format"
        const nameType = ""
        const wight = [0]
        type req = {
                "id": string, // "e2a85d9f-07a5-4f94-8d5f-789dc3deb097"
                "status": number, // 200
                "result": {
                    "symbol": string, // "BTCUSDT"
                    "orderId": number, // 12510053279
                    "orderListId": number, // -1
                    "clientOrderId": string, // "a097fe6304b20a7e4fc436"
                    "transactTime": number, // 1655716096505
                    "price": NumberString, // "0.10000000"
                    "origQty": NumberString, // "10.00000000"
                    "executedQty": NumberString, // "0.00000000"
                    "cummulativeQuoteQty": NumberString, // "0.00000000"
                    "status": string, // "NEW"
                    "timeInForce": string, // "GTC"
                    "type": string, // "LIMIT"
                    "side": string, // "BUY"
                    "workingTime": number, // 1655716096505
                    "selfTradePreventionMode": string, // "NONE"
                },
                "rateLimits": | [
                    | {
                        "rateLimitType": string, // "ORDERS"
                        "interval": string, // "SECOND"
                        "intervalNum": number, // 10
                        "limit": number, // 50
                        "count": number, // 12
                    },
                    | {
                        "rateLimitType": string, // "ORDERS"
                        "interval": string, // "DAY"
                        "intervalNum": number, // 1
                        "limit": number, // 160000
                        "count": number, // 4043
                    },
                    | {
                        "rateLimitType": string, // "REQUEST_WEIGHT"
                        "interval": string, // "MINUTE"
                        "intervalNum": number, // 1
                        "limit": number, // 6000
                        "count": number, // 321
                    }
                ]
            }
            | {
            "id": string, // "e2a85d9f-07a5-4f94-8d5f-789dc3deb097"
            "status": number, // 400
            "error": {
                "code": number, // -2010
                "msg": string, // "Account has insufficient balance for requested action."
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "SECOND"
                    "intervalNum": number, // 10
                    "limit": number, // 50
                    "count": number, // 13
                },
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "DAY"
                    "intervalNum": number, // 1
                    "limit": number, // 160000
                    "count": number, // 4044
                },
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 322
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {}, typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#general-information-on-rate-limits
    Generalinformationonratelimits = () => {
        const name = "General information on rate limits"
        const nameType = ""
        const wight = [0]
        type req = {
            "id": string, // "7069b743-f477-4ae3-81db-db9b8df085d2"
            "status": number, // 200
            "result": {
                "serverTime": number, // 1656400526260
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 70
                }
            ]
        }
        // | {
        //  "id" :  number , // 1
        //  "method" :  string , // "time"
        // 	}
        // | {
        //  "id" :  number , // 1
        //  "status" :  number , // 200
        //  "result" :{
        //  "serverTime" :  number , // 1656400526260
        // 		},
        //  "rateLimits" :[{  string , // "rateLimitType" :
        //  "REQUEST_WEIGHT"   string , // "interval" :
        //  "MINUTE"   string , // "intervalNum" :
        //  1   string , // "limit" :
        //  6000   string , // "count" :
        //  70 }]}
        // 	{
        //  "id" :  number , // 2
        //  "method" :  string , // "time"
        //  "params" :{
        //  "returnRateLimits" :  boolean , // false }}
        // 			{
        //  "id" :  number , // 2
        //  "status" :  number , // 200
        //  "result" :{
        //  "serverTime" :  number , // 1656400527891 }}
        // |undefined
        return {
            name, wight, typeParams: {}, typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#ip-limits
    IPlimits = () => {
        const name = "IP limits"
        const nameType = ""
        const wight = [0]
        type req = {
                "id": string, // "7069b743-f477-4ae3-81db-db9b8df085d2"
                "status": number, // 200
                "result": number, // [],
                "rateLimits": [
                    {
                        "rateLimitType": string, // "REQUEST_WEIGHT"
                        "interval": string, // "MINUTE"
                        "intervalNum": number, // 1
                        "limit": number, // 6000
                        "count": number, // 70
                    }
                ]
            }
            | {
            "id": string, // "fc93a61a-a192-4cf4-bb2a-a8f0f0c51e06"
            "status": number, // 418
            "error": {
                "code": number, // -1003
                "msg": string, // "Way too much request weight used; IP banned until 1659146400000. Please use WebSocket Streams for live updates to avoid bans."
                "data": {
                    "serverTime": number, // 1659142907531
                    "retryAfter": number, // 1659146400000
                }
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2411
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {}, typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#order-rate-limits
    Orderratelimits = () => {
        const name = "Order rate limits"
        const nameType = ""
        const wight = [0]
        type req = {
                "id": string, // "e2a85d9f-07a5-4f94-8d5f-789dc3deb097"
                "status": number, // 200
                "result": {
                    "symbol": string, // "BTCUSDT"
                    "orderId": number, // 12510053279
                    "orderListId": number, // -1
                    "clientOrderId": string, // "a097fe6304b20a7e4fc436"
                    "transactTime": number, // 1655716096505
                    "price": NumberString, // "0.10000000"
                    "origQty": NumberString, // "10.00000000"
                    "executedQty": NumberString, // "0.00000000"
                    "cummulativeQuoteQty": NumberString, // "0.00000000"
                    "status": string, // "NEW"
                    "timeInForce": string, // "GTC"
                    "type": string, // "LIMIT"
                    "side": string, // "BUY"
                    "workingTime": number, // 1655716096505
                    "selfTradePreventionMode": string, // "NONE"
                },
                "rateLimits": | [
                    | {
                        "rateLimitType": string, // "ORDERS"
                        "interval": string, // "SECOND"
                        "intervalNum": number, // 10
                        "limit": number, // 50
                        "count": number, // 12
                    },
                    | {
                        "rateLimitType": string, // "ORDERS"
                        "interval": string, // "DAY"
                        "intervalNum": number, // 1
                        "limit": number, // 160000
                        "count": number, // 4043
                    },
                    | {
                        "rateLimitType": string, // "REQUEST_WEIGHT"
                        "interval": string, // "MINUTE"
                        "intervalNum": number, // 1
                        "limit": number, // 6000
                        "count": number, // 321
                    }
                ]
            }
            | undefined
        return {
            name, wight, typeParams: {}, typeRes: {} as req
        }
    }
// //https://binance-docs.github.io/apidocs/websocket_api/en#timing-security
//
// Timingsecurity = () => {
// 	const name = "Timing security"
// 	const nameType = ""
// 	const wight = [0]
// 	type req = 					( (  number , // 1000 )
// 	 ( )  number , // ) {
//
// 							}
// 	 | {
// 							// reject request
//
// 							}
// 	|undefined
// 	return { name,  wight,  typeParams: {} , typeRes: {} as req
// 	}
// }
//https://binance-docs.github.io/apidocs/websocket_api/en#signed-request-example-hmac
    SIGNEDrequestexample = () => {
        const name = "SIGNED request example (HMAC)"
        const nameType = "HMAC"
        const wight = [0]
        type req = {
                "id": string, // "4885f793-e5ad-4c3b-8f6c-55d891472b71"
                "method": string, // "order.place"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "side": string, // "SELL"
                    "type": string, // "LIMIT"
                    "timeInForce": string, // "GTC"
                    "quantity": NumberString, // "0.01000000"
                    "price": NumberString, // "52000.00"
                    "newOrderRespType": string, // "ACK"
                    "recvWindow": number, // 100
                    "timestamp": number, // 1645423376532
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "------ FILL ME ------"
                }
            }
            | {
            "id": string, // "4885f793-e5ad-4c3b-8f6c-55d891472b71"
            "method": string, // "order.place"
            "params": {
                "symbol": string, // "BTCUSDT"
                "side": string, // "SELL"
                "type": string, // "LIMIT"
                "timeInForce": string, // "GTC"
                "quantity": NumberString, // "0.01000000"
                "price": NumberString, // "52000.00"
                "newOrderRespType": string, // "ACK"
                "recvWindow": number, // 100
                "timestamp": number, // 1645423376532
                "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                "signature": string, // "cc15477742bd704c29492d96c7ead9414dfd8e0ec4a00f947bb5bb454ddbd08a"
            }
        }
            | undefined
        return {
            name, wight, typeParams: {}, typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#signed-request-example-rsa
    SIGNEDrequestexample2 = () => {
        const name = "SIGNED request example (RSA)"
        const nameType = "RSA"
        const wight = [0]
        type req = {
                "id": string, // "4885f793-e5ad-4c3b-8f6c-55d891472b71"
                "method": string, // "order.place"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "side": string, // "SELL"
                    "type": string, // "LIMIT"
                    "timeInForce": string, // "GTC"
                    "quantity": NumberString, // "0.01000000"
                    "price": NumberString, // "52000.00"
                    "newOrderRespType": string, // "ACK"
                    "recvWindow": number, // 100
                    "timestamp": number, // 1645423376532
                    "apiKey": string, // "CAvIjXy3F44yW6Pou5k8Dy1swsYDWJZLeoK2r8G4cFDnE9nosRppc2eKc1T8TRTQ"
                    "signature": string, // "------ FILL ME ------"
                }
            }
            | {
            "id": string, // "4885f793-e5ad-4c3b-8f6c-55d891472b71"
            "method": string, // "order.place"
            "params": {
                "symbol": string, // "BTCUSDT"
                "side": string, // "SELL"
                "type": string, // "LIMIT"
                "timeInForce": string, // "GTC"
                "quantity": NumberString, // "0.01000000"
                "price": NumberString, // "52000.00"
                "newOrderRespType": string, // "ACK"
                "recvWindow": number, // 100
                "timestamp": number, // 1645423376532
                "apiKey": string, // "CAvIjXy3F44yW6Pou5k8Dy1swsYDWJZLeoK2r8G4cFDnE9nosRppc2eKc1T8TRTQ"
                "signature": string, // "OJJaf8C/3VGrU4ATTR4GiUDqL2FboSE1Qw7UnnoYNfXTXHubIl1iaePGuGyfct4NPu5oVEZCH4Q6ZStfB1w4ssgu0uiB/Bg+fBrRFfVgVaLKBdYHMvT+ljUJzqVaeoThG9oXlduiw8PbS9U8DYAbDvWN3jqZLo4Z2YJbyovyDAvDTr/oC0+vssLqP7NmlNb3fF3Bj7StmOwJvQJTbRAtzxK5PP7OQe+0mbW+D7RqVkUiSswR8qJFWTeSe4nXXNIdZdueYhF/Xf25L+KitJS5IHdIHcKfEw3MQzHFb2ZsGWkjDQwxkwr7Noi0Zaa+gFtxCuatGFm9dFIyx217pmSHtA=="
            }
        }
            | undefined
        return {
            name, wight, typeParams: {}, typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#signed-request-example-ed25519
    SIGNEDrequestexample3 = () => {
        return {}
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#general-requests
    Testconnectivity = () => {
        const name = "Test connectivity"
        const nameType = ""
        const wight = [{
            name: "IP",
            data: 1,
        }
        ]
        type req = {
                "id": string, // "922bcc6e-9de8-440d-9e84-7c80933a8d0d"
                "method": string, // "ping"
            }
            | {
            "id": string, // "922bcc6e-9de8-440d-9e84-7c80933a8d0d"
            "status": number, // 200
            "result": number, // {},
            "rateLimits": [
                {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {}, typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#check-server-time
    Checkservertime = () => {
        const name = "Check server time"
        const nameType = ""
        const wight = [{
            name: "IP",
            data: 1,
        }
        ]
        type req = {
                "id": string, // "187d3cb2-942d-484c-8271-4e2141bbadb1"
                "method": string, // "time"
            }
            | {
            "id": string, // "187d3cb2-942d-484c-8271-4e2141bbadb1"
            "status": number, // 200
            "result": {
                "serverTime": number, // 1656400526260
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {}, typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#exchange-information
    Exchangeinformation = () => {
        const name = "Exchange information"
        const nameType = ""
        const wight = [{
            name: "IP",
            data: 20,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING,
            symbols: ARRAY,// of STRING
            permissions: ARRAY// of STRING
        }
        type req = {
                "id": string, // "5494febb-d167-46a2-996d-70533eb4d976"
                "method": string, // "exchangeInfo"
                "params": {
                    "symbols": [
                        string, // "BNBBTC"
                    ]
                }
            }
            | {
            "id": string, // "5494febb-d167-46a2-996d-70533eb4d976"
            "status": number, // 200
            "result": {
                "timezone": string, // "UTC"
                "serverTime": number, // 1655969291181
                // Global rate limits. See "Rate Limits" section.
                "rateLimits": [
                    {
                        "rateLimitType": string, // "REQUEST_WEIGHT"  // Rate limit type: REQUEST_WEIGHT, ORDERS, CONNECTIONS
                        "interval": string, // "MINUTE"  // Rate limit interval: SECOND, MINUTE, DAY
                        "intervalNum": number, // 1  // Rate limit interval multiplier (i.e., "1 minute")
                        "limit": number, // 6000 // Rate limit per interval
                    },
                    | {
                        "rateLimitType": string, // "ORDERS"
                        "interval": string, // "SECOND"
                        "intervalNum": number, // 10
                        "limit": number, // 50
                    },
                    | {
                        "rateLimitType": string, // "ORDERS"
                        "interval": string, // "DAY"
                        "intervalNum": number, // 1
                        "limit": number, // 160000
                    },
                    | {
                        "rateLimitType": string, // "CONNECTIONS"
                        "interval": string, // "MINUTE"
                        "intervalNum": number, // 5
                        "limit": number, // 300
                    }
                ],
                // Exchange filters are explained on the "Filters" section: https://binance-docs.github.io/apidocs/spot/en/#filters
                // All exchange filters are optional.
                "exchangeFilters": number, // [],
                "symbols": [
                    {
                        "symbol": string, // "BNBBTC"
                        "status": string, // "TRADING"
                        "baseAsset": string, // "BNB"
                        "baseAssetPrecision": number, // 8
                        "quoteAsset": string, // "BTC"
                        "quotePrecision": number, // 8
                        "quoteAssetPrecision": number, // 8
                        "baseCommissionPrecision": number, // 8
                        "quoteCommissionPrecision": number, // 8
                        "orderTypes": [
                            string, // "LIMIT"
                            string, // "LIMIT_MAKER"
                            string, // "MARKET"
                            string, // "STOP_LOSS_LIMIT"
                            string, // "TAKE_PROFIT_LIMIT"
                        ],
                        "icebergAllowed": boolean, // true
                        "ocoAllowed": boolean, // true
                        "quoteOrderQtyMarketAllowed": boolean, // true
                        "allowTrailingStop": boolean, // true
                        "cancelReplaceAllowed": boolean, // true
                        "isSpotTradingAllowed": boolean, // true
                        "isMarginTradingAllowed": boolean, // true
                        // Symbol filters are explained on the "Filters" section: https://binance-docs.github.io/apidocs/spot/en/#filters
                        // All symbol filters are optional.
                        "filters": [
                            {
                                "filterType": string, // "PRICE_FILTER"
                                "minPrice": NumberString, // "0.00000100"
                                "maxPrice": NumberString, // "100000.00000000"
                                "tickSize": NumberString, // "0.00000100"
                            },
                            | {
                                "filterType": string, // "LOT_SIZE"
                                "minQty": NumberString, // "0.00100000"
                                "maxQty": NumberString, // "100000.00000000"
                                "stepSize": NumberString, // "0.00100000"
                            }
                        ],
                        "permissions": | [
                            string, // "SPOT"
                            string, // "MARGIN"
                            string, // "TRD_GRP_004"
                        ],
                        "defaultSelfTradePreventionMode": string, // "NONE"
                        "allowedSelfTradePreventionModes": [
                            string, // "NONE"
                        ]
                    }
                ]
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 20
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#market-data-requests
    Orderbook = () => {
        const name = "Order book"
        const nameType = ""
        const wight = [{
            name: "IP",
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            // Default 100; max 5000
            limit?: INT
        }
        type req = {
                "id": string, // "51e2affb-0aba-4821-ba75-f2625006eb43"
                "method": string, // "depth"
                "params": {
                    "symbol": string, // "BNBBTC"
                    "limit": number, // 5
                }
            }
            | {
            "id": string, // "51e2affb-0aba-4821-ba75-f2625006eb43"
            "status": number, // 200
            "result": {
                "lastUpdateId": number, // 2731179239
                // Bid levels are sorted from highest to lowest price.
                "bids": [
                    [
                        NumberString, // "0.01379900"
                        // Price
                        NumberString, // "3.43200000" // Quantity
                    ],
                    [
                        NumberString, // "0.01379800"
                        NumberString, // "3.24300000"
                    ],
                    [
                        NumberString, // "0.01379700"
                        NumberString, // "10.45500000"
                    ],
                    [
                        NumberString, // "0.01379600"
                        NumberString, // "3.82100000"
                    ],
                    [
                        NumberString, // "0.01379500"
                        NumberString, // "10.26200000"
                    ]
                ],
                // Ask levels are sorted from lowest to highest price.
                "asks": [
                    [
                        NumberString, // "0.01380000"
                        NumberString, // "5.91700000"
                    ],
                    [
                        NumberString, // "0.01380100"
                        NumberString, // "6.01400000"
                    ],
                    [
                        NumberString, // "0.01380200"
                        NumberString, // "0.26800000"
                    ],
                    [
                        NumberString, // "0.01380300"
                        NumberString, // "0.33800000"
                    ],
                    [
                        NumberString, // "0.01380400"
                        NumberString, // "0.26800000"
                    ]
                ]
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 5
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#recent-trades
    Recenttrades = () => {
        const name = "Recent trades"
        const nameType = ""
        const wight = [{
            name: "IP",
            data: 10,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            // Default 500; max 1000
            limit?: INT
        }
        type req = {
                "id": string, // "409a20bd-253d-41db-a6dd-687862a5882f"
                "method": string, // "trades.recent"
                "params": {
                    "symbol": string, // "BNBBTC"
                    "limit": number, // 1
                }
            }
            | {
            "id": string, // "409a20bd-253d-41db-a6dd-687862a5882f"
            "status": number, // 200
            "result": [
                {
                    "id": number, // 194686783
                    "price": NumberString, // "0.01361000"
                    "qty": NumberString, // "0.01400000"
                    "quoteQty": NumberString, // "0.00019054"
                    "time": number, // 1660009530807
                    "isBuyerMaker": boolean, // true
                    "isBestMatch": boolean, // true
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#historical-trades
    Historicaltrades = () => {
        const name = "Historical trades"
        const nameType = ""
        const wight = [{
            name: "IP",
            data: 10,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            // Trade ID to begin at
            fromId?: INT
            // Default 500; max 1000
            limit?: INT
        }
        type req = {
                "id": string, // "cffc9c7d-4efc-4ce0-b587-6b87448f052a"
                "method": string, // "trades.historical"
                "params": {
                    "symbol": string, // "BNBBTC"
                    "fromId": number, // 0
                    "limit": number, // 1
                }
            }
            | {
            "id": string, // "cffc9c7d-4efc-4ce0-b587-6b87448f052a"
            "status": number, // 200
            "result": [
                {
                    "id": number, // 0
                    "price": NumberString, // "0.00005000"
                    "qty": NumberString, // "40.00000000"
                    "quoteQty": NumberString, // "0.00200000"
                    "time": number, // 1500004800376
                    "isBuyerMaker": boolean, // true
                    "isBestMatch": boolean, // true
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 10
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#aggregate-trades
    Aggregatetrades = () => {
        const name = "Aggregate trades"
        const nameType = ""
        const wight = [{
            name: "IP",
            data: 2,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            // Aggregate trade ID to begin at
            fromId?: INT
            startTime?: INT
            endTime?: INT
            // Default 500; max 1000
            limit?: INT
        }
        type req = {
                "id": string, // "189da436-d4bd-48ca-9f95-9f613d621717"
                "method": string, // "trades.aggregate"
                "params": {
                    "symbol": string, // "BNBBTC"
                    "fromId": number, // 50000000
                    "limit": number, // 1
                }
            }
            | {
            "id": string, // "189da436-d4bd-48ca-9f95-9f613d621717"
            "status": number, // 200
            "result": [
                {
                    "a": number, // 50000000  // Aggregate trade ID
                    "p": NumberString, // "0.00274100"  // Price
                    "q": NumberString, // "57.19000000"  // Quantity
                    "f": number, // 59120167  // First trade ID
                    "l": number, // 59120170  // Last trade ID
                    "T": number, // 1565877971222  // Timestamp
                    "m": boolean, // true  // Was the buyer the maker?
                    "M": boolean, // true // Was the trade the best price match?
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#klines
    Klines = () => {
        const name = "Klines"
        const nameType = ""
        const wight = [{
            name: "IP",
            data: 2,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            interval: ENUM_interval
            startTime?: INT
            endTime?: INT
            // Default: 0 (UTC)
            timeZone?: STRING
            // Default 500; max 1000
            limit?: INT
        }
        type req = {
                "id": string, // "1dbbeb56-8eea-466a-8f6e-86bdcfa2fc0b"
                "method": string, // "klines"
                "params": {
                    "symbol": string, // "BNBBTC"
                    "interval": string, // "1h"
                    "startTime": number, // 1655969280000
                    "limit": number, // 1
                }
            }
            | {
            "id": string, // "1dbbeb56-8eea-466a-8f6e-86bdcfa2fc0b"
            "status": number, // 200
            "result": [
                [
                    number, // 1655971200000
                    // Kline open time
                    NumberString, // "0.01086000"
                    // Open price
                    NumberString, // "0.01086600"
                    // High price
                    NumberString, // "0.01083600"
                    // Low price
                    NumberString, // "0.01083800"
                    // Close price
                    NumberString, // "2290.53800000"
                    // Volume
                    number, // 1655974799999
                    // Kline close time
                    NumberString, // "24.85074442"
                    // Quote asset volume
                    number, // 2283
                    // Number of trades
                    NumberString, // "1171.64000000"
                    // Taker buy base asset volume
                    NumberString, // "12.71225884"
                    // Taker buy quote asset volume
                    NumberString, // "0" // Unused field, ignore
                ]
            ],
            "rateLimits": [
                {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#ui-klines
    UIKlines = () => {
        const name = "UI Klines"
        const nameType = ""
        const wight = [{
            name: "IP",
            data: 2,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            // klines
            interval: ENUM_interval
            startTime?: INT
            endTime?: INT
            // Default: 0 (UTC)
            timeZone?: STRING
            // Default 500; max 1000
            limit?: INT
        }
        type req = {
                "id": string, // "b137468a-fb20-4c06-bd6b-625148eec958"
                "method": string, // "uiKlines"
                "params": {
                    "symbol": string, // "BNBBTC"
                    "interval": string, // "1h"
                    "startTime": number, // 1655969280000
                    "limit": number, // 1
                }
            }
            | {
            "id": string, // "b137468a-fb20-4c06-bd6b-625148eec958"
            "status": number, // 200
            "result": [
                [
                    number, // 1655971200000
                    // Kline open time
                    NumberString, // "0.01086000"
                    // Open price
                    NumberString, // "0.01086600"
                    // High price
                    NumberString, // "0.01083600"
                    // Low price
                    NumberString, // "0.01083800"
                    // Close price
                    NumberString, // "2290.53800000"
                    // Volume
                    number, // 1655974799999
                    // Kline close time
                    NumberString, // "24.85074442"
                    // Quote asset volume
                    number, // 2283
                    // Number of trades
                    NumberString, // "1171.64000000"
                    // Taker buy base asset volume
                    NumberString, // "12.71225884"
                    // Taker buy quote asset volume
                    NumberString, // "0" // Unused field, ignore
                ]
            ],
            "rateLimits": [
                {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#current-average-price
    Currentaverageprice = () => {
        const name = "Current average price"
        const nameType = ""
        const wight = [{
            name: "IP",
            data: 2,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
        }
        type req = {
                "id": string, // "ddbfb65f-9ebf-42ec-8240-8f0f91de0867"
                "method": string, // "avgPrice"
                "params": {
                    "symbol": string, // "BNBBTC"
                }
            }
            | {
            "id": string, // "ddbfb65f-9ebf-42ec-8240-8f0f91de0867"
            "status": number, // 200
            "result": {
                "mins": number, // 5  // Average price interval (in minutes)
                "price": NumberString, // "0.01378135"  // Average price
                "closeTime": number, // 1694061154503 // Last trade time
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#24hr-ticker-price-change-statistics
    hrtickerpricechangestatistics24 = () => {
        const name = "24hr ticker price change statistics"
        const nameType = ""
        const wight = [{
            name: "IP",
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            symbols: ARRAY// of STRING
            type: any//ENUM_type
        }
        type req = {
                "id": string, // "93fb61ef-89f8-4d6e-b022-4f035a3fadad"
                "method": string, // "ticker.24hr"
                "params": {
                    "symbol": string, // "BNBBTC"
                }
            }
            | {
            "id": string, // "93fb61ef-89f8-4d6e-b022-4f035a3fadad"
            "status": number, // 200
            "result": {
                "symbol": string, // "BNBBTC"
                "priceChange": NumberString, // "0.00013900"
                "priceChangePercent": NumberString, // "1.020"
                "weightedAvgPrice": NumberString, // "0.01382453"
                "prevClosePrice": NumberString, // "0.01362800"
                "lastPrice": NumberString, // "0.01376700"
                "lastQty": NumberString, // "1.78800000"
                "bidPrice": NumberString, // "0.01376700"
                "bidQty": NumberString, // "4.64600000"
                "askPrice": NumberString, // "0.01376800"
                "askQty": NumberString, // "14.31400000"
                "openPrice": NumberString, // "0.01362800"
                "highPrice": NumberString, // "0.01414900"
                "lowPrice": NumberString, // "0.01346600"
                "volume": NumberString, // "69412.40500000"
                "quoteVolume": NumberString, // "959.59411487"
                "openTime": number, // 1660014164909
                "closeTime": number, // 1660100564909
                "firstId": number, // 194696115  // First trade ID
                "lastId": number, // 194968287  // Last trade ID
                "count": number, // 272173 // Number of trades
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2
                }
            ]
        }
            | {
            "id": string, // "9fa2a91b-3fca-4ed7-a9ad-58e3b67483de"
            "status": number, // 200
            "result": {
                "symbol": string, // "BNBBTC"
                "openPrice": NumberString, // "0.01362800"
                "highPrice": NumberString, // "0.01414900"
                "lowPrice": NumberString, // "0.01346600"
                "lastPrice": NumberString, // "0.01376700"
                "volume": NumberString, // "69412.40500000"
                "quoteVolume": NumberString, // "959.59411487"
                "openTime": number, // 1660014164909
                "closeTime": number, // 1660100564909
                "firstId": number, // 194696115  // First trade ID
                "lastId": number, // 194968287  // Last trade ID
                "count": number, // 272173 // Number of trades
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2
                }
            ]
        }
            | {
            "id": string, // "901be0d9-fd3b-45e4-acd6-10c580d03430"
            "status": number, // 200
            "result": [
                {
                    "symbol": string, // "BNBBTC"
                    "priceChange": NumberString, // "0.00016500"
                    "priceChangePercent": NumberString, // "1.213"
                    "weightedAvgPrice": NumberString, // "0.01382508"
                    "prevClosePrice": NumberString, // "0.01360800"
                    "lastPrice": NumberString, // "0.01377200"
                    "lastQty": NumberString, // "1.01400000"
                    "bidPrice": NumberString, // "0.01377100"
                    "bidQty": NumberString, // "7.55700000"
                    "askPrice": NumberString, // "0.01377200"
                    "askQty": NumberString, // "4.37900000"
                    "openPrice": NumberString, // "0.01360700"
                    "highPrice": NumberString, // "0.01414900"
                    "lowPrice": NumberString, // "0.01346600"
                    "volume": NumberString, // "69376.27900000"
                    "quoteVolume": NumberString, // "959.13277091"
                    "openTime": number, // 1660014615517
                    "closeTime": number, // 1660101015517
                    "firstId": number, // 194697254
                    "lastId": number, // 194969483
                    "count": number, // 272230
                },
                | {
                    "symbol": string, // "BTCUSDT"
                    "priceChange": NumberString, // "-938.06000000"
                    "priceChangePercent": NumberString, // "-3.938"
                    "weightedAvgPrice": NumberString, // "23265.34432003"
                    "prevClosePrice": NumberString, // "23819.17000000"
                    "lastPrice": NumberString, // "22880.91000000"
                    "lastQty": NumberString, // "0.00536000"
                    "bidPrice": NumberString, // "22880.40000000"
                    "bidQty": NumberString, // "0.00424000"
                    "askPrice": NumberString, // "22880.91000000"
                    "askQty": NumberString, // "0.04276000"
                    "openPrice": NumberString, // "23818.97000000"
                    "highPrice": NumberString, // "23933.25000000"
                    "lowPrice": NumberString, // "22664.69000000"
                    "volume": NumberString, // "153508.37606000"
                    "quoteVolume": NumberString, // "3571425225.04441220"
                    "openTime": number, // 1660014615977
                    "closeTime": number, // 1660101015977
                    "firstId": number, // 1592019902
                    "lastId": number, // 1597301762
                    "count": number, // 5281861
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#trading-day-ticker
    TradingDayTicker = () => {
        const name = "Trading Day Ticker"
        const nameType = ""
        const wight = [{
            name: "",
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            symbols: ARRAY// of STRING
            // Default: 0 (UTC)
            timeZone?: STRING
            // Supported values:
            type?: ENUM_type
        }
        type req = {
                "id": string, // "f4b3b507-c8f2-442a-81a6-b2f12daa030f"
                "method": string, // "ticker.tradingDay"
                "params": {
                    "symbols": [
                        string, // "BNBBTC"
                        string, // "BTCUSDT"
                    ],
                    "timeZone": string, // "00:00"
                }
            }
            | {
            "id": string, // "f4b3b507-c8f2-442a-81a6-b2f12daa030f"
            "status": number, // 200
            "result": {
                "symbol": string, // "BTCUSDT"
                "priceChange": NumberString, // "-83.13000000"  // Absolute price change
                "priceChangePercent": NumberString, // "-0.317"  // Relative price change in percent
                "weightedAvgPrice": NumberString, // "26234.58803036"  // quoteVolume / volume
                "openPrice": NumberString, // "26304.80000000"
                "highPrice": NumberString, // "26397.46000000"
                "lowPrice": NumberString, // "26088.34000000"
                "lastPrice": NumberString, // "26221.67000000"
                "volume": NumberString, // "18495.35066000"  // Volume in base asset
                "quoteVolume": NumberString, // "485217905.04210480"
                "openTime": number, // 1695686400000
                "closeTime": number, // 1695772799999
                "firstId": number, // 3220151555
                "lastId": number, // 3220849281
                "count": number, // 697727
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 4
                }
            ]
        }
            | {
            "id": string, // "f4b3b507-c8f2-442a-81a6-b2f12daa030f"
            "status": number, // 200
            "result": [
                {
                    "symbol": string, // "BTCUSDT"
                    "priceChange": NumberString, // "-83.13000000"
                    "priceChangePercent": NumberString, // "-0.317"
                    "weightedAvgPrice": NumberString, // "26234.58803036"
                    "openPrice": NumberString, // "26304.80000000"
                    "highPrice": NumberString, // "26397.46000000"
                    "lowPrice": NumberString, // "26088.34000000"
                    "lastPrice": NumberString, // "26221.67000000"
                    "volume": NumberString, // "18495.35066000"
                    "quoteVolume": NumberString, // "485217905.04210480"
                    "openTime": number, // 1695686400000
                    "closeTime": number, // 1695772799999
                    "firstId": number, // 3220151555
                    "lastId": number, // 3220849281
                    "count": number, // 697727
                },
                | {
                    "symbol": string, // "BNBUSDT"
                    "priceChange": NumberString, // "2.60000000"
                    "priceChangePercent": NumberString, // "1.238"
                    "weightedAvgPrice": NumberString, // "211.92276958"
                    "openPrice": NumberString, // "210.00000000"
                    "highPrice": NumberString, // "213.70000000"
                    "lowPrice": NumberString, // "209.70000000"
                    "lastPrice": NumberString, // "212.60000000"
                    "volume": NumberString, // "280709.58900000"
                    "quoteVolume": NumberString, // "59488753.54750000"
                    "openTime": number, // 1695686400000
                    "closeTime": number, // 1695772799999
                    "firstId": number, // 672397461
                    "lastId": number, // 672496158
                    "count": number, // 98698
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 8
                }
            ]
        }
            | {
            "id": string, // "f4b3b507-c8f2-442a-81a6-b2f12daa030f"
            "status": number, // 200
            "result": {
                "symbol": string, // "BTCUSDT"
                "openPrice": NumberString, // "26304.80000000"
                "highPrice": NumberString, // "26397.46000000"
                "lowPrice": NumberString, // "26088.34000000"
                "lastPrice": NumberString, // "26221.67000000"
                "volume": NumberString, // "18495.35066000"  // Volume in base asset
                "quoteVolume": NumberString, // "485217905.04210480"  // Volume in quote asset
                "openTime": number, // 1695686400000
                "closeTime": number, // 1695772799999
                "firstId": number, // 3220151555  // Trade ID of the first trade in the interval
                "lastId": number, // 3220849281  // Trade ID of the last trade in the interval
                "count": number, // 697727 // Number of trades in the interval
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 4
                }
            ]
        }
            | {
            "id": string, // "f4b3b507-c8f2-442a-81a6-b2f12daa030f"
            "status": number, // 200
            "result": [
                {
                    "symbol": string, // "BTCUSDT"
                    "openPrice": NumberString, // "26304.80000000"
                    "highPrice": NumberString, // "26397.46000000"
                    "lowPrice": NumberString, // "26088.34000000"
                    "lastPrice": NumberString, // "26221.67000000"
                    "volume": NumberString, // "18495.35066000"
                    "quoteVolume": NumberString, // "485217905.04210480"
                    "openTime": number, // 1695686400000
                    "closeTime": number, // 1695772799999
                    "firstId": number, // 3220151555
                    "lastId": number, // 3220849281
                    "count": number, // 697727
                },
                | {
                    "symbol": string, // "BNBUSDT"
                    "openPrice": NumberString, // "210.00000000"
                    "highPrice": NumberString, // "213.70000000"
                    "lowPrice": NumberString, // "209.70000000"
                    "lastPrice": NumberString, // "212.60000000"
                    "volume": NumberString, // "280709.58900000"
                    "quoteVolume": NumberString, // "59488753.54750000"
                    "openTime": number, // 1695686400000
                    "closeTime": number, // 1695772799999
                    "firstId": number, // 672397461
                    "lastId": number, // 672496158
                    "count": number, // 98698
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 8
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#rolling-window-price-change-statistics
    Rollingwindowpricechangestatistics = () => {
        const name = "Rolling window price change statistics"
        const nameType = ""
        const wight = [{
            name: "IP",
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            symbols: ARRAY// of STRING
            type: ENUM_type
            windowSize: ENUM_windowSize
        }
        type req = {
                "id": string, // "f4b3b507-c8f2-442a-81a6-b2f12daa030f"
                "method": string, // "ticker"
                "params": {
                    "symbols": [
                        string, // "BNBBTC"
                        string, // "BTCUSDT"
                    ],
                    "windowSize": string, // "7d"
                }
            }
            | {
            "id": string, // "f4b3b507-c8f2-442a-81a6-b2f12daa030f"
            "status": number, // 200
            "result": {
                "symbol": string, // "BNBBTC"
                "priceChange": NumberString, // "0.00061500"
                "priceChangePercent": NumberString, // "4.735"
                "weightedAvgPrice": NumberString, // "0.01368242"
                "openPrice": NumberString, // "0.01298900"
                "highPrice": NumberString, // "0.01418800"
                "lowPrice": NumberString, // "0.01296000"
                "lastPrice": NumberString, // "0.01360400"
                "volume": NumberString, // "587179.23900000"
                "quoteVolume": NumberString, // "8034.03382165"
                "openTime": number, // 1659580020000
                "closeTime": number, // 1660184865291
                "firstId": number, // 192977765  // First trade ID
                "lastId": number, // 195365758  // Last trade ID
                "count": number, // 2387994 // Number of trades
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 4
                }
            ]
        }
            | {
            "id": string, // "bdb7c503-542c-495c-b797-4d2ee2e91173"
            "status": number, // 200
            "result": {
                "symbol": string, // "BNBBTC"
                "openPrice": NumberString, // "0.01298900"
                "highPrice": NumberString, // "0.01418800"
                "lowPrice": NumberString, // "0.01296000"
                "lastPrice": NumberString, // "0.01360400"
                "volume": NumberString, // "587179.23900000"
                "quoteVolume": NumberString, // "8034.03382165"
                "openTime": number, // 1659580020000
                "closeTime": number, // 1660184865291
                "firstId": number, // 192977765  // First trade ID
                "lastId": number, // 195365758  // Last trade ID
                "count": number, // 2387994 // Number of trades
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 4
                }
            ]
        }
            | {
            "id": string, // "f4b3b507-c8f2-442a-81a6-b2f12daa030f"
            "status": number, // 200
            "result": [
                {
                    "symbol": string, // "BNBBTC"
                    "priceChange": NumberString, // "0.00061500"
                    "priceChangePercent": NumberString, // "4.735"
                    "weightedAvgPrice": NumberString, // "0.01368242"
                    "openPrice": NumberString, // "0.01298900"
                    "highPrice": NumberString, // "0.01418800"
                    "lowPrice": NumberString, // "0.01296000"
                    "lastPrice": NumberString, // "0.01360400"
                    "volume": NumberString, // "587169.48600000"
                    "quoteVolume": NumberString, // "8033.90114517"
                    "openTime": number, // 1659580020000
                    "closeTime": number, // 1660184820927
                    "firstId": number, // 192977765
                    "lastId": number, // 195365700
                    "count": number, // 2387936
                },
                | {
                    "symbol": string, // "BTCUSDT"
                    "priceChange": NumberString, // "1182.92000000"
                    "priceChangePercent": NumberString, // "5.113"
                    "weightedAvgPrice": NumberString, // "23349.27074846"
                    "openPrice": NumberString, // "23135.33000000"
                    "highPrice": NumberString, // "24491.22000000"
                    "lowPrice": NumberString, // "22400.00000000"
                    "lastPrice": NumberString, // "24318.25000000"
                    "volume": NumberString, // "1039498.10978000"
                    "quoteVolume": NumberString, // "24271522807.76838630"
                    "openTime": number, // 1659580020000
                    "closeTime": number, // 1660184820927
                    "firstId": number, // 1568787779
                    "lastId": number, // 1604337406
                    "count": number, // 35549628
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 8
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#symbol-price-ticker
    Symbolpriceticker = () => {
        const name = "Symbol price ticker"
        const nameType = ""
        const wight = [{
            name: "IP",
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            symbols: ARRAY// of STRING
        }
        type req = {
                "id": string, // "043a7cf2-bde3-4888-9604-c8ac41fcba4d"
                "method": string, // "ticker.price"
                "params": {
                    "symbol": string, // "BNBBTC"
                }
            }
            | {
            "id": string, // "043a7cf2-bde3-4888-9604-c8ac41fcba4d"
            "status": number, // 200
            "result": {
                "symbol": string, // "BNBBTC"
                "price": NumberString, // "0.01361900"
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2
                }
            ]
        }
            | {
            "id": string, // "e739e673-24c8-4adf-9cfa-b81f30330b09"
            "status": number, // 200
            "result": [
                {
                    "symbol": string, // "BNBBTC"
                    "price": NumberString, // "0.01363700"
                },
                | {
                    "symbol": string, // "BTCUSDT"
                    "price": NumberString, // "24267.15000000"
                },
                | {
                    "symbol": string, // "BNBBUSD"
                    "price": NumberString, // "331.10000000"
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 4
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#symbol-order-book-ticker
    Symbolorderbookticker = () => {
        const name = "Symbol order book ticker"
        const nameType = ""
        const wight = [{
            name: "IP",
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            symbols: ARRAY // of STRING
        }
        type req = {
                "id": string, // "057deb3a-2990-41d1-b58b-98ea0f09e1b4"
                "method": string, // "ticker.book"
                "params": {
                    "symbols": [
                        string, // "BNBBTC"
                        string, // "BTCUSDT"
                    ]
                }
            }
            | {
            "id": string, // "9d32157c-a556-4d27-9866-66760a174b57"
            "status": number, // 200
            "result": {
                "symbol": string, // "BNBBTC"
                "bidPrice": NumberString, // "0.01358000"
                "bidQty": NumberString, // "12.53400000"
                "askPrice": NumberString, // "0.01358100"
                "askQty": NumberString, // "17.83700000"
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2
                }
            ]
        }
            | {
            "id": string, // "057deb3a-2990-41d1-b58b-98ea0f09e1b4"
            "status": number, // 200
            "result": [
                {
                    "symbol": string, // "BNBBTC"
                    "bidPrice": NumberString, // "0.01358000"
                    "bidQty": NumberString, // "12.53400000"
                    "askPrice": NumberString, // "0.01358100"
                    "askQty": NumberString, // "17.83700000"
                },
                | {
                    "symbol": string, // "BTCUSDT"
                    "bidPrice": NumberString, // "23980.49000000"
                    "bidQty": NumberString, // "0.01000000"
                    "askPrice": NumberString, // "23981.31000000"
                    "askQty": NumberString, // "0.01512000"
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 4
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#log-in-with-api-key-signed
    LoginwithAPIkey = () => {
        const name = "Log in with API key (SIGNED)"
        const nameType = "SIGNED"
        const wight = [{
            name: "",
            data: 2,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            apiKey: STRING
            // 60000
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "c174a2b1-3f51-4580-b200-8528bd237cb7"
                "method": string, // "session.logon"
                "params": {
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "1cf54395b336b0a9727ef27d5d98987962bc47aca6e13fe978612d0adee066ed"
                    "timestamp": number, // 1649729878532
                }
            }
            | {
            "id": string, // "c174a2b1-3f51-4580-b200-8528bd237cb7"
            "status": number, // 200
            "result": {
                "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                "authorizedSince": number, // 1649729878532
                "connectedSince": number, // 1649729873021
                "returnRateLimits": boolean, // false
                "serverTime": number, // 1649729878630
            }
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#query-session-status
    Querysessionstatus = () => {
        const name = "Query session status"
        const nameType = ""
        const wight = [{
            name: "",
            data: 2,
        }
        ]
        type req = {
                "id": string, // "b50c16cd-62c9-4e29-89e4-37f10111f5bf"
                "method": string, // "session.status"
            }
            | {
            "id": string, // "b50c16cd-62c9-4e29-89e4-37f10111f5bf"
            "status": number, // 200
            "result": {
                // if the connection is not authenticated, "apiKey" and "authorizedSince" will be shown as null
                "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                "authorizedSince": number, // 1649729878532
                "connectedSince": number, // 1649729873021
                "returnRateLimits": boolean, // false
                "serverTime": number, // 1649730611671
            }
        }
            | undefined
        return {
            name, wight, typeParams: {}, typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#log-out-of-the-session
    Logoutofthesession = () => {
        const name = "Log out of the session"
        const nameType = ""
        const wight = [{
            name: "",
            data: 2,
        }
        ]
        type req = {
                "id": string, // "c174a2b1-3f51-4580-b200-8528bd237cb7"
                "method": string, // "session.logout"
            }
            | {
            "id": string, // "c174a2b1-3f51-4580-b200-8528bd237cb7"
            "status": number, // 200
            "result": {
                "apiKey": number, // null
                "authorizedSince": number, // null
                "connectedSince": number, // 1649729873021
                "returnRateLimits": boolean, // false
                "serverTime": number, // 1649730611671
            }
        }
            | undefined
        return {
            name, wight, typeParams: {}, typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#trading-requests
    Placeneworder = () => {
        const name = "Place new order (TRADE)"
        const nameType = "TRADE"
        const wight = [{
            name: "IP",
            data: 1,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            // BUY
            side: ENUM_side
            type: ENUM_type
            timeInForce: ENUM_timeInForce
            price: DECIMAL
            quantity: DECIMAL
            quoteOrderQty: DECIMAL
            // Arbitrary unique ID among open orders. Automatically generated if not sent
            newClientOrderId?: STRING
            // ACK
            newOrderRespType?: ENUM_newOrderRespType
            stopPrice: DECIMAL
            // For more details on SPOT implementation on trailing stops, please refer to
            trailingDelta: INT
            icebergQty?: DECIMAL
            // Arbitrary numeric value identifying the order within an order strategy.
            strategyId?: INT
            // 1000000
            strategyType?: INT
            // EXPIRE_TAKER
            selfTradePreventionMode?: ENUM_selfTradePreventionMode
            apiKey: STRING
            // 60000
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "56374a46-3061-486b-a311-99ee972eb648"
                "method": string, // "order.place"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "side": string, // "SELL"
                    "type": string, // "LIMIT"
                    "timeInForce": string, // "GTC"
                    "price": NumberString, // "23416.10000000"
                    "quantity": NumberString, // "0.00847000"
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "15af09e41c36f3cc61378c2fbe2c33719a03dd5eba8d0f9206fbda44de717c88"
                    "timestamp": number, // 1660801715431
                }
            }
            | {
            "id": string, // "56374a46-3061-486b-a311-99ee972eb648"
            "status": number, // 200
            "result": {
                "symbol": string, // "BTCUSDT"
                "orderId": number, // 12569099453
                "orderListId": number, // 1  // always -1 for singular orders
                "clientOrderId": string, // "4d96324ff9d44481926157ec08158a40"
                "transactTime": number, // 1660801715639
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "SECOND"
                    "intervalNum": number, // 10
                    "limit": number, // 50
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "DAY"
                    "intervalNum": number, // 1
                    "limit": number, // 160000
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | {
            "id": string, // "56374a46-3061-486b-a311-99ee972eb648"
            "status": number, // 200
            "result": {
                "symbol": string, // "BTCUSDT"
                "orderId": number, // 12569099453
                "orderListId": number, // 1  // always -1 for singular orders
                "clientOrderId": string, // "4d96324ff9d44481926157ec08158a40"
                "transactTime": number, // 1660801715639
                "price": NumberString, // "23416.10000000"
                "origQty": NumberString, // "0.00847000"
                "executedQty": NumberString, // "0.00000000"
                "cummulativeQuoteQty": NumberString, // "0.00000000"
                "status": string, // "NEW"
                "timeInForce": string, // "GTC"
                "type": string, // "LIMIT"
                "side": string, // "SELL"
                "workingTime": number, // 1660801715639
                "selfTradePreventionMode": string, // "NONE"
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "SECOND"
                    "intervalNum": number, // 10
                    "limit": number, // 50
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "DAY"
                    "intervalNum": number, // 1
                    "limit": number, // 160000
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | {
            "id": string, // "56374a46-3061-486b-a311-99ee972eb648"
            "status": number, // 200
            "result": {
                "symbol": string, // "BTCUSDT"
                "orderId": number, // 12569099453
                "orderListId": number, // 1
                "clientOrderId": string, // "4d96324ff9d44481926157ec08158a40"
                "transactTime": number, // 1660801715793
                "price": NumberString, // "23416.10000000"
                "origQty": NumberString, // "0.00847000"
                "executedQty": NumberString, // "0.00847000"
                "cummulativeQuoteQty": NumberString, // "198.33521500"
                "status": string, // "FILLED"
                "timeInForce": string, // "GTC"
                "type": string, // "LIMIT"
                "side": string, // "SELL"
                "workingTime": number, // 1660801715793
                // FULL response is identical to RESULT response, with the same optional fields
                // based on the order type and parameters. FULL response additionally includes
                // the list of trades which immediately filled the order.
                "fills": [
                    {
                        "price": NumberString, // "23416.10000000"
                        "qty": NumberString, // "0.00635000"
                        "commission": NumberString, // "0.000000"
                        "commissionAsset": string, // "BNB"
                        "tradeId": number, // 1650422481
                    },
                    | {
                        "price": NumberString, // "23416.50000000"
                        "qty": NumberString, // "0.00212000"
                        "commission": NumberString, // "0.000000"
                        "commissionAsset": string, // "BNB"
                        "tradeId": number, // 1650422482
                    }
                ],
                "selfTradePreventionMode": string, // "NONE"
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "SECOND"
                    "intervalNum": number, // 10
                    "limit": number, // 50
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "DAY"
                    "intervalNum": number, // 1
                    "limit": number, // 160000
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#test-new-order-trade
    Testneworder = () => {
        const name = "Test new order (TRADE)"
        const nameType = "TRADE"
        const wight = [{
            name: "",
        }
        ]
        // Name Type Mandatory Description
        type params = {
            // false
            computeCommissionRates?: BOOLEAN
        }
        type req = {
                "id": string, // "6ffebe91-01d9-43ac-be99-57cf062e0e30"
                "method": string, // "order.test"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "side": string, // "SELL"
                    "type": string, // "LIMIT"
                    "timeInForce": string, // "GTC"
                    "price": NumberString, // "23416.10000000"
                    "quantity": NumberString, // "0.00847000"
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "15af09e41c36f3cc61378c2fbe2c33719a03dd5eba8d0f9206fbda44de717c88"
                    "timestamp": number, // 1660801715431
                }
            }
            | {
            "id": string, // "6ffebe91-01d9-43ac-be99-57cf062e0e30"
            "status": number, // 200
            "result": number, // {},
            "rateLimits": [
                {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | {
            "id": string, // "6ffebe91-01d9-43ac-be99-57cf062e0e30"
            "status": number, // 200
            "result": {
                "standardCommissionForOrder": {
                    //Standard commission rates on trades from the order.
                    "maker": NumberString, // "0.00000112"
                    "taker": NumberString, // "0.00000114"
                },
                "taxCommissionForOrder": | {
                    //Tax commission rates for trades from the order.
                    "maker": NumberString, // "0.00000112"
                    "taker": NumberString, // "0.00000114"
                },
                "discount": | {
                    //Discount on standard commissions when paying in BNB.
                    "enabledForAccount": boolean, // true
                    "enabledForSymbol": boolean, // true
                    "discountAsset": string, // "BNB"
                    "discount": NumberString, // "0.25000000" //Standard commission is reduced by this rate when paying commission in BNB.
                }
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 20
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#query-order-user_data
    Queryorder = () => {
        const name = "Query order (USER_DATA)"
        const nameType = "USER_DATA"
        const wight = [{
            name: "IP",
            data: 4,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            orderId: INT
            origClientOrderId: STRING
            apiKey: STRING
            // The value cannot be greater than
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "aa62318a-5a97-4f3b-bdc7-640bbe33b291"
                "method": string, // "order.status"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "orderId": number, // 12569099453
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "2c3aab5a078ee4ea465ecd95523b77289f61476c2f238ec10c55ea6cb11a6f35"
                    "timestamp": number, // 1660801720951
                }
            }
            | {
            "id": string, // "aa62318a-5a97-4f3b-bdc7-640bbe33b291"
            "status": number, // 200
            "result": {
                "symbol": string, // "BTCUSDT"
                "orderId": number, // 12569099453
                "orderListId": number, // 1  // set only for legs of an OCO
                "clientOrderId": string, // "4d96324ff9d44481926157"
                "price": NumberString, // "23416.10000000"
                "origQty": NumberString, // "0.00847000"
                "executedQty": NumberString, // "0.00847000"
                "cummulativeQuoteQty": NumberString, // "198.33521500"
                "status": string, // "FILLED"
                "timeInForce": string, // "GTC"
                "type": string, // "LIMIT"
                "side": string, // "SELL"
                "stopPrice": NumberString, // "0.00000000"  // always present, zero if order type does not use stopPrice
                "icebergQty": NumberString, // "0.00000000"  // always present, zero for non-iceberg orders
                "time": number, // 1660801715639  // time when the order was placed
                "updateTime": number, // 1660801717945  // time of the last update to the order
                "isWorking": boolean, // true
                "workingTime": number, // 1660801715639
                "origQuoteOrderQty": NumberString, // "0.00000000"  // always present, zero if order type does not use quoteOrderQty
                "selfTradePreventionMode": string, // "NONE"
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 4
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#cancel-order-trade
    Cancelorder = () => {
        const name = "Cancel order (TRADE)"
        const nameType = "TRADE"
        const wight = [{
            name: "IP",
            data: 1,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            orderId: INT
            origClientOrderId: STRING
            // New ID for the canceled order. Automatically generated if not sent
            newClientOrderId?: STRING
            // ONLY_NEW
            cancelRestrictions?: ENUM_cancelRestrictions
            apiKey: STRING
            // The value cannot be greater than
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "5633b6a2-90a9-4192-83e7-925c90b6a2fd"
                "method": string, // "order.cancel"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "origClientOrderId": string, // "4d96324ff9d44481926157"
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "33d5b721f278ae17a52f004a82a6f68a70c68e7dd6776ed0be77a455ab855282"
                    "timestamp": number, // 1660801715830
                }
            }
            | {
            "id": string, // "5633b6a2-90a9-4192-83e7-925c90b6a2fd"
            "status": number, // 200
            "result": {
                "symbol": string, // "BTCUSDT"
                "origClientOrderId": string, // "4d96324ff9d44481926157"  // clientOrderId that was canceled
                "orderId": number, // 12569099453
                "orderListId": number, // 1  // set only for legs of an OCO
                "clientOrderId": string, // "91fe37ce9e69c90d6358c0"  // newClientOrderId from request
                "transactTime": number, // 1684804350068
                "price": NumberString, // "23416.10000000"
                "origQty": NumberString, // "0.00847000"
                "executedQty": NumberString, // "0.00001000"
                "cummulativeQuoteQty": NumberString, // "0.23416100"
                "status": string, // "CANCELED"
                "timeInForce": string, // "GTC"
                "type": string, // "LIMIT"
                "side": string, // "SELL"
                "selfTradePreventionMode": string, // "NONE"
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | {
            "id": string, // "16eaf097-bbec-44b9-96ff-e97e6e875870"
            "status": number, // 200
            "result": {
                "orderListId": number, // 19431
                "contingencyType": string, // "OCO"
                "listStatusType": string, // "ALL_DONE"
                "listOrderStatus": string, // "ALL_DONE"
                "listClientOrderId": string, // "iuVNVJYYrByz6C4yGOPPK0"
                "transactionTime": number, // 1660803702431
                "symbol": string, // "BTCUSDT"
                "orders": [
                    {
                        "symbol": string, // "BTCUSDT"
                        "orderId": number, // 12569099453
                        "clientOrderId": string, // "bX5wROblo6YeDwa9iTLeyY"
                    },
                    | {
                        "symbol": string, // "BTCUSDT"
                        "orderId": number, // 12569099454
                        "clientOrderId": string, // "Tnu2IP0J5Y4mxw3IATBfmW"
                    }
                ],
                // OCO leg status format is the same as for individual orders.
                "orderReports": | [
                    | {
                        "symbol": string, // "BTCUSDT"
                        "origClientOrderId": string, // "bX5wROblo6YeDwa9iTLeyY"
                        "orderId": number, // 12569099453
                        "orderListId": number, // 19431
                        "clientOrderId": string, // "OFFXQtxVFZ6Nbcg4PgE2DA"
                        "transactTime": number, // 1684804350068
                        "price": NumberString, // "23450.50000000"
                        "origQty": NumberString, // "0.00850000"
                        "executedQty": NumberString, // "0.00000000"
                        "cummulativeQuoteQty": NumberString, // "0.00000000"
                        "status": string, // "CANCELED"
                        "timeInForce": string, // "GTC"
                        "type": string, // "STOP_LOSS_LIMIT"
                        "side": string, // "BUY"
                        "stopPrice": NumberString, // "23430.00000000"
                        "selfTradePreventionMode": string, // "NONE"
                    },
                    | {
                        "symbol": string, // "BTCUSDT"
                        "origClientOrderId": string, // "Tnu2IP0J5Y4mxw3IATBfmW"
                        "orderId": number, // 12569099454
                        "orderListId": number, // 19431
                        "clientOrderId": string, // "OFFXQtxVFZ6Nbcg4PgE2DA"
                        "transactTime": number, // 1684804350068
                        "price": NumberString, // "23400.00000000"
                        "origQty": NumberString, // "0.00850000"
                        "executedQty": NumberString, // "0.00000000"
                        "cummulativeQuoteQty": NumberString, // "0.00000000"
                        "status": string, // "CANCELED"
                        "timeInForce": string, // "GTC"
                        "type": string, // "LIMIT_MAKER"
                        "side": string, // "BUY"
                        "selfTradePreventionMode": string, // "NONE"
                    }
                ]
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#cancel-and-replace-order-trade
    Cancelandreplaceorder = () => {
        const name = "Cancel and replace order (TRADE)"
        const nameType = "TRADE"
        const wight = [{
            name: "IP",
            data: 1,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            cancelReplaceMode: ENUM_cancelReplaceMode
            cancelOrderId: INT
            cancelOrigClientOrderId: STRING
            // New ID for the canceled order. Automatically generated if not sent
            cancelNewClientOrderId?: STRING
            // BUY
            side: ENUM_side
            type: ENUM_type
            timeInForce: ENUM_timeInForce
            price: DECIMAL
            quantity: DECIMAL
            quoteOrderQty: DECIMAL
            // Arbitrary unique ID among open orders. Automatically generated if not sent
            newClientOrderId?: STRING
            //         <td>
            newOrderRespType?: ENUM_newOrderRespType
            stopPrice: DECIMAL
            // See
            trailingDelta: DECIMAL
            icebergQty?: DECIMAL
            // Arbitrary numeric value identifying the order within an order strategy.
            strategyId?: INT
            //         <td>
            strategyType?: INT
            //         <td>
            selfTradePreventionMode?: ENUM_selfTradePreventionMode
            // ONLY_NEW
            cancelRestrictions?: ENUM_cancelRestrictions
            apiKey: STRING
            // The value cannot be greater than
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "99de1036-b5e2-4e0f-9b5c-13d751c93a1a"
                "method": string, // "order.cancelReplace"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "cancelReplaceMode": string, // "ALLOW_FAILURE"
                    "cancelOrigClientOrderId": string, // "4d96324ff9d44481926157"
                    "side": string, // "SELL"
                    "type": string, // "LIMIT"
                    "timeInForce": string, // "GTC"
                    "price": NumberString, // "23416.10000000"
                    "quantity": NumberString, // "0.00847000"
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "7028fdc187868754d25e42c37ccfa5ba2bab1d180ad55d4c3a7e2de643943dc5"
                    "timestamp": number, // 1660813156900
                }
            }
            | {
            "id": string, // "99de1036-b5e2-4e0f-9b5c-13d751c93a1a"
            "status": number, // 200
            "result": {
                "cancelResult": string, // "SUCCESS"
                "newOrderResult": string, // "SUCCESS"
                // Format is identical to "order.cancel" format.
                // Some fields are optional and are included only for orders that set them.
                "cancelResponse": {
                    "symbol": string, // "BTCUSDT"
                    "origClientOrderId": string, // "4d96324ff9d44481926157"  // cancelOrigClientOrderId from request
                    "orderId": number, // 125690984230
                    "orderListId": number, // 1
                    "clientOrderId": string, // "91fe37ce9e69c90d6358c0"  // cancelNewClientOrderId from request
                    "transactTime": number, // 1684804350068
                    "price": NumberString, // "23450.00000000"
                    "origQty": NumberString, // "0.00847000"
                    "executedQty": NumberString, // "0.00001000"
                    "cummulativeQuoteQty": NumberString, // "0.23450000"
                    "status": string, // "CANCELED"
                    "timeInForce": string, // "GTC"
                    "type": string, // "LIMIT"
                    "side": string, // "SELL"
                    "selfTradePreventionMode": string, // "NONE"
                },
                // Format is identical to "order.place" format, affected by "newOrderRespType".
                // Some fields are optional and are included only for orders that set them.
                "newOrderResponse": | {
                    "symbol": string, // "BTCUSDT"
                    "orderId": number, // 12569099453
                    "orderListId": number, // 1
                    "clientOrderId": string, // "bX5wROblo6YeDwa9iTLeyY"  // newClientOrderId from request
                    "transactTime": number, // 1660813156959
                    "price": NumberString, // "23416.10000000"
                    "origQty": NumberString, // "0.00847000"
                    "executedQty": NumberString, // "0.00000000"
                    "cummulativeQuoteQty": NumberString, // "0.00000000"
                    "status": string, // "NEW"
                    "timeInForce": string, // "GTC"
                    "type": string, // "LIMIT"
                    "side": string, // "SELL"
                    "workingTime": number, // 1660813156959
                    "fills": number, // [],
                    "selfTradePreventionMode": string, // "NONE"
                }
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "SECOND"
                    "intervalNum": number, // 10
                    "limit": number, // 50
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "DAY"
                    "intervalNum": number, // 1
                    "limit": number, // 160000
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | {
            "id": string, // "27e1bf9f-0539-4fb0-85c6-06183d36f66c"
            "status": number, // 400
            "error": {
                "code": number, // 2022
                "msg": string, // "Order cancel-replace failed."
                "data": {
                    "cancelResult": string, // "FAILURE"
                    "newOrderResult": string, // "NOT_ATTEMPTED"
                    "cancelResponse": {
                        "code": number, // 2011
                        "msg": string, // "Unknown order sent."
                    },
                    "newOrderResponse": number, // null
                }
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "SECOND"
                    "intervalNum": number, // 10
                    "limit": number, // 50
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "DAY"
                    "intervalNum": number, // 1
                    "limit": number, // 160000
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | {
            "id": string, // "b220edfe-f3c4-4a3a-9d13-b35473783a25"
            "status": number, // 409
            "error": {
                "code": number, // 2021
                "msg": string, // "Order cancel-replace partially failed."
                "data": {
                    "cancelResult": string, // "SUCCESS"
                    "newOrderResult": string, // "FAILURE"
                    "cancelResponse": {
                        "symbol": string, // "BTCUSDT"
                        "origClientOrderId": string, // "4d96324ff9d44481926157"
                        "orderId": number, // 125690984230
                        "orderListId": number, // 1
                        "clientOrderId": string, // "91fe37ce9e69c90d6358c0"
                        "transactTime": number, // 1684804350068
                        "price": NumberString, // "23450.00000000"
                        "origQty": NumberString, // "0.00847000"
                        "executedQty": NumberString, // "0.00001000"
                        "cummulativeQuoteQty": NumberString, // "0.23450000"
                        "status": string, // "CANCELED"
                        "timeInForce": string, // "GTC"
                        "type": string, // "LIMIT"
                        "side": string, // "SELL"
                        "selfTradePreventionMode": string, // "NONE"
                    },
                    "newOrderResponse": | {
                        "code": number, // 2010
                        "msg": string, // "Order would immediately match and take."
                    }
                }
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "SECOND"
                    "intervalNum": number, // 10
                    "limit": number, // 50
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "DAY"
                    "intervalNum": number, // 1
                    "limit": number, // 160000
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | {
            "id": string, // "ce641763-ff74-41ac-b9f7-db7cbe5e93b1"
            "status": number, // 409
            "error": {
                "code": number, // 2021
                "msg": string, // "Order cancel-replace partially failed."
                "data": {
                    "cancelResult": string, // "FAILURE"
                    "newOrderResult": string, // "SUCCESS"
                    "cancelResponse": {
                        "code": number, // 2011
                        "msg": string, // "Unknown order sent."
                    },
                    "newOrderResponse": | {
                        "symbol": string, // "BTCUSDT"
                        "orderId": number, // 12569099453
                        "orderListId": number, // 1
                        "clientOrderId": string, // "bX5wROblo6YeDwa9iTLeyY"
                        "transactTime": number, // 1660813156959
                        "price": NumberString, // "23416.10000000"
                        "origQty": NumberString, // "0.00847000"
                        "executedQty": NumberString, // "0.00000000"
                        "cummulativeQuoteQty": NumberString, // "0.00000000"
                        "status": string, // "NEW"
                        "timeInForce": string, // "GTC"
                        "type": string, // "LIMIT"
                        "side": string, // "SELL"
                        "workingTime": number, // 1669693344508
                        "fills": number, // [],
                        "selfTradePreventionMode": string, // "NONE"
                    }
                }
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "SECOND"
                    "intervalNum": number, // 10
                    "limit": number, // 50
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "DAY"
                    "intervalNum": number, // 1
                    "limit": number, // 160000
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | {
            "id": string, // "3b3ac45c-1002-4c7d-88e8-630c408ecd87"
            "status": number, // 400
            "error": {
                "code": number, // 2022
                "msg": string, // "Order cancel-replace failed."
                "data": {
                    "cancelResult": string, // "FAILURE"
                    "newOrderResult": string, // "FAILURE"
                    "cancelResponse": {
                        "code": number, // 2011
                        "msg": string, // "Unknown order sent."
                    },
                    "newOrderResponse": | {
                        "code": number, // 2010
                        "msg": string, // "Order would immediately match and take."
                    }
                }
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "SECOND"
                    "intervalNum": number, // 10
                    "limit": number, // 50
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "DAY"
                    "intervalNum": number, // 1
                    "limit": number, // 160000
                    "count": number, // 1
                },
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#current-open-orders-user_data
    Currentopenorders = () => {
        const name = "Current open orders (USER_DATA)"
        const nameType = "USER_DATA"
        const wight = [{
            name: "IP",
        }
        ]
        // Name Type Mandatory Description
        type params = {
            // If omitted, open orders for all symbols are returned
            symbol?: STRING
            apiKey: STRING
            // 60000
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "55f07876-4f6f-4c47-87dc-43e5fff3f2e7"
                "method": string, // "openOrders.status"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "d632b3fdb8a81dd44f82c7c901833309dd714fe508772a89b0a35b0ee0c48b89"
                    "timestamp": number, // 1660813156812
                }
            }
            | {
            "id": string, // "55f07876-4f6f-4c47-87dc-43e5fff3f2e7"
            "status": number, // 200
            "result": [
                {
                    "symbol": string, // "BTCUSDT"
                    "orderId": number, // 12569099453
                    "orderListId": number, // 1
                    "clientOrderId": string, // "4d96324ff9d44481926157"
                    "price": NumberString, // "23416.10000000"
                    "origQty": NumberString, // "0.00847000"
                    "executedQty": NumberString, // "0.00720000"
                    "cummulativeQuoteQty": NumberString, // "172.43931000"
                    "status": string, // "PARTIALLY_FILLED"
                    "timeInForce": string, // "GTC"
                    "type": string, // "LIMIT"
                    "side": string, // "SELL"
                    "stopPrice": NumberString, // "0.00000000"
                    "icebergQty": NumberString, // "0.00000000"
                    "time": number, // 1660801715639
                    "updateTime": number, // 1660801717945
                    "isWorking": boolean, // true
                    "workingTime": number, // 1660801715639
                    "origQuoteOrderQty": NumberString, // "0.00000000"
                    "selfTradePreventionMode": string, // "NONE"
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 6
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#cancel-open-orders-trade
    Cancelopenorders = () => {
        const name = "Cancel open orders (TRADE)"
        const nameType = "TRADE"
        const wight = [{
            name: "IP",
            data: 1,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            apiKey: STRING
            // 60000
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "778f938f-9041-4b88-9914-efbf64eeacc8"
                "method": string, // "openOrders.cancelAll"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "773f01b6e3c2c9e0c1d217bc043ce383c1ddd6f0e25f8d6070f2b66a6ceaf3a5"
                    "timestamp": number, // 1660805557200
                }
            }
            | {
            "id": string, // "778f938f-9041-4b88-9914-efbf64eeacc8"
            "status": number, // 200
            "result": [
                {
                    "symbol": string, // "BTCUSDT"
                    "origClientOrderId": string, // "4d96324ff9d44481926157"
                    "orderId": number, // 12569099453
                    "orderListId": number, // 1
                    "clientOrderId": string, // "91fe37ce9e69c90d6358c0"
                    "transactTime": number, // 1684804350068
                    "price": NumberString, // "23416.10000000"
                    "origQty": NumberString, // "0.00847000"
                    "executedQty": NumberString, // "0.00001000"
                    "cummulativeQuoteQty": NumberString, // "0.23416100"
                    "status": string, // "CANCELED"
                    "timeInForce": string, // "GTC"
                    "type": string, // "LIMIT"
                    "side": string, // "SELL"
                    "stopPrice": NumberString, // "0.00000000"
                    "icebergQty": NumberString, // "0.00000000"
                    "strategyId": number, // 37463720
                    "strategyType": number, // 1000000
                    "selfTradePreventionMode": string, // "NONE"
                },
                | {
                    "orderListId": number, // 19431
                    "contingencyType": string, // "OCO"
                    "listStatusType": string, // "ALL_DONE"
                    "listOrderStatus": string, // "ALL_DONE"
                    "listClientOrderId": string, // "iuVNVJYYrByz6C4yGOPPK0"
                    "transactionTime": number, // 1660803702431
                    "symbol": string, // "BTCUSDT"
                    "orders": [
                        {
                            "symbol": string, // "BTCUSDT"
                            "orderId": number, // 12569099453
                            "clientOrderId": string, // "bX5wROblo6YeDwa9iTLeyY"
                        },
                        | {
                            "symbol": string, // "BTCUSDT"
                            "orderId": number, // 12569099454
                            "clientOrderId": string, // "Tnu2IP0J5Y4mxw3IATBfmW"
                        }
                    ],
                    "orderReports": | [
                        | {
                            "symbol": string, // "BTCUSDT"
                            "origClientOrderId": string, // "bX5wROblo6YeDwa9iTLeyY"
                            "orderId": number, // 12569099453
                            "orderListId": number, // 19431
                            "clientOrderId": string, // "OFFXQtxVFZ6Nbcg4PgE2DA"
                            "transactTime": number, // 1684804350068
                            "price": NumberString, // "23450.50000000"
                            "origQty": NumberString, // "0.00850000"
                            "executedQty": NumberString, // "0.00000000"
                            "cummulativeQuoteQty": NumberString, // "0.00000000"
                            "status": string, // "CANCELED"
                            "timeInForce": string, // "GTC"
                            "type": string, // "STOP_LOSS_LIMIT"
                            "side": string, // "BUY"
                            "stopPrice": NumberString, // "23430.00000000"
                            "selfTradePreventionMode": string, // "NONE"
                        },
                        | {
                            "symbol": string, // "BTCUSDT"
                            "origClientOrderId": string, // "Tnu2IP0J5Y4mxw3IATBfmW"
                            "orderId": number, // 12569099454
                            "orderListId": number, // 19431
                            "clientOrderId": string, // "OFFXQtxVFZ6Nbcg4PgE2DA"
                            "transactTime": number, // 1684804350068
                            "price": NumberString, // "23400.00000000"
                            "origQty": NumberString, // "0.00850000"
                            "executedQty": NumberString, // "0.00000000"
                            "cummulativeQuoteQty": NumberString, // "0.00000000"
                            "status": string, // "CANCELED"
                            "timeInForce": string, // "GTC"
                            "type": string, // "LIMIT_MAKER"
                            "side": string, // "BUY"
                            "selfTradePreventionMode": string, // "NONE"
                        }
                    ]
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#place-new-oco-trade
    PlacenewOCO = () => {
        const name = "Place new OCO (TRADE)"
        const nameType = "TRADE"
        const wight = [{
            name: "IP",
            data: 1,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            // BUY
            side: ENUM_side
            // Price for the limit order
            price: DECIMAL
            quantity: DECIMAL
            // Arbitrary unique ID among open OCOs. Automatically generated if not sent
            listClientOrderId?: STRING
            // Arbitrary unique ID among open orders for the limit order. Automatically generated if not sent
            limitClientOrderId?: STRING
            limitIcebergQty?: DECIMAL
            // Arbitrary numeric value identifying the limit order within an order strategy.
            limitStrategyId?: INT
            // 1000000
            limitStrategyType?: INT
            // stopPrice
            stopPrice: DECIMAL
            // See
            trailingDelta: INT
            // Arbitrary unique ID among open orders for the stop order. Automatically generated if not sent
            stopClientOrderId?: STRING
            stopLimitPrice: DECIMAL
            // order.place
            stopLimitTimeInForce: ENUM_stopLimitTimeInForce
            stopIcebergQty: DECIMAL
            // Arbitrary numeric value identifying the stop order within an order strategy.
            stopStrategyId?: INT
            // 1000000
            stopStrategyType?: INT
            // ACK
            newOrderRespType?: ENUM_newOrderRespType
            // EXPIRE_TAKER
            selfTradePreventionMode?: ENUM_selfTradePreventionMode
            apiKey: STRING
            // 60000
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "56374a46-3061-486b-a311-99ee972eb648"
                "method": string, // "orderList.place"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "side": string, // "SELL"
                    "price": NumberString, // "23420.00000000"
                    "quantity": NumberString, // "0.00650000"
                    "stopPrice": NumberString, // "23410.00000000"
                    "stopLimitPrice": NumberString, // "23405.00000000"
                    "stopLimitTimeInForce": string, // "GTC"
                    "newOrderRespType": string, // "RESULT"
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "6689c2a36a639ff3915c2904871709990ab65f3c7a9ff13857558fd350315c35"
                    "timestamp": number, // 1660801713767
                }
            }
            | {
            "id": string, // "57833dc0-e3f2-43fb-ba20-46480973b0aa"
            "status": number, // 200
            "result": {
                "orderListId": number, // 1274512
                "contingencyType": string, // "OCO"
                "listStatusType": string, // "EXEC_STARTED"
                "listOrderStatus": string, // "EXECUTING"
                "listClientOrderId": string, // "08985fedd9ea2cf6b28996"
                "transactionTime": number, // 1660801713793
                "symbol": string, // "BTCUSDT"
                "orders": [
                    {
                        "symbol": string, // "BTCUSDT"
                        "orderId": number, // 12569138901
                        "clientOrderId": string, // "BqtFCj5odMoWtSqGk2X9tU"
                    },
                    | {
                        "symbol": string, // "BTCUSDT"
                        "orderId": number, // 12569138902
                        "clientOrderId": string, // "jLnZpj5enfMXTuhKB1d0us"
                    }
                ],
                "orderReports": | [
                    | {
                        "symbol": string, // "BTCUSDT"
                        "orderId": number, // 12569138901
                        "orderListId": number, // 1274512
                        "clientOrderId": string, // "BqtFCj5odMoWtSqGk2X9tU"
                        "transactTime": number, // 1660801713793
                        "price": NumberString, // "23410.00000000"
                        "origQty": NumberString, // "0.00650000"
                        "executedQty": NumberString, // "0.00000000"
                        "cummulativeQuoteQty": NumberString, // "0.00000000"
                        "status": string, // "NEW"
                        "timeInForce": string, // "GTC"
                        "type": string, // "STOP_LOSS_LIMIT"
                        "side": string, // "SELL"
                        "stopPrice": NumberString, // "23405.00000000"
                        "workingTime": number, // 1
                        "selfTradePreventionMode": string, // "NONE"
                    },
                    | {
                        "symbol": string, // "BTCUSDT"
                        "orderId": number, // 12569138902
                        "orderListId": number, // 1274512
                        "clientOrderId": string, // "jLnZpj5enfMXTuhKB1d0us"
                        "transactTime": number, // 1660801713793
                        "price": NumberString, // "23420.00000000"
                        "origQty": NumberString, // "0.00650000"
                        "executedQty": NumberString, // "0.00000000"
                        "cummulativeQuoteQty": NumberString, // "0.00000000"
                        "status": string, // "NEW"
                        "timeInForce": string, // "GTC"
                        "type": string, // "LIMIT_MAKER"
                        "side": string, // "SELL"
                        "workingTime": number, // 1660801713793
                        "selfTradePreventionMode": string, // "NONE"
                    }
                ]
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "SECOND"
                    "intervalNum": number, // 10
                    "limit": number, // 50
                    "count": number, // 2
                },
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "DAY"
                    "intervalNum": number, // 1
                    "limit": number, // 160000
                    "count": number, // 2
                },
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#query-oco-user_data
    QueryOCO = () => {
        const name = "Query OCO (USER_DATA)"
        const nameType = "USER_DATA"
        const wight = [{
            name: "IP",
            data: 4,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            origClientOrderId: STRING
            orderListId: INT
            apiKey: STRING
            // The value cannot be greater than
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "b53fd5ff-82c7-4a04-bd64-5f9dc42c2100"
                "method": string, // "orderList.status"
                "params": {
                    "origClientOrderId": string, // "08985fedd9ea2cf6b28996"
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "d12f4e8892d46c0ddfbd43d556ff6d818581b3be22a02810c2c20cb719aed6a4"
                    "timestamp": number, // 1660801713965
                }
            }
            | {
            "id": string, // "b53fd5ff-82c7-4a04-bd64-5f9dc42c2100"
            "status": number, // 200
            "result": {
                "orderListId": number, // 1274512
                "contingencyType": string, // "OCO"
                "listStatusType": string, // "EXEC_STARTED"
                "listOrderStatus": string, // "EXECUTING"
                "listClientOrderId": string, // "08985fedd9ea2cf6b28996"
                "transactionTime": number, // 1660801713793
                "symbol": string, // "BTCUSDT"
                "orders": [
                    {
                        "symbol": string, // "BTCUSDT"
                        "orderId": number, // 12569138901
                        "clientOrderId": string, // "BqtFCj5odMoWtSqGk2X9tU"
                    },
                    | {
                        "symbol": string, // "BTCUSDT"
                        "orderId": number, // 12569138902
                        "clientOrderId": string, // "jLnZpj5enfMXTuhKB1d0us"
                    }
                ]
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 4
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#cancel-oco-trade
    CancelOCO = () => {
        const name = "Cancel OCO (TRADE)"
        const nameType = "TRADE"
        const wight = [{
            name: "IP",
            data: 1,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            orderListId: INT
            listClientOrderId: STRING
            // New ID for the canceled OCO. Automatically generated if not sent
            newClientOrderId?: STRING
            apiKey: STRING
            // The value cannot be greater than
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "c5899911-d3f4-47ae-8835-97da553d27d0"
                "method": string, // "orderList.cancel"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "orderListId": number, // 1274512
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "4973f4b2fee30bf6d45e4a973e941cc60fdd53c8dd5a25edeac96f5733c0ccee"
                    "timestamp": number, // 1660801720210
                }
            }
            | {
            "id": string, // "c5899911-d3f4-47ae-8835-97da553d27d0"
            "status": number, // 200
            "result": {
                "orderListId": number, // 1274512
                "contingencyType": string, // "OCO"
                "listStatusType": string, // "ALL_DONE"
                "listOrderStatus": string, // "ALL_DONE"
                "listClientOrderId": string, // "6023531d7edaad348f5aff"
                "transactionTime": number, // 1660801720215
                "symbol": string, // "BTCUSDT"
                "orders": [
                    {
                        "symbol": string, // "BTCUSDT"
                        "orderId": number, // 12569138901
                        "clientOrderId": string, // "BqtFCj5odMoWtSqGk2X9tU"
                    },
                    | {
                        "symbol": string, // "BTCUSDT"
                        "orderId": number, // 12569138902
                        "clientOrderId": string, // "jLnZpj5enfMXTuhKB1d0us"
                    }
                ],
                "orderReports": | [
                    | {
                        "symbol": string, // "BTCUSDT"
                        "orderId": number, // 12569138901
                        "orderListId": number, // 1274512
                        "clientOrderId": string, // "BqtFCj5odMoWtSqGk2X9tU"
                        "transactTime": number, // 1660801720215
                        "price": NumberString, // "23410.00000000"
                        "origQty": NumberString, // "0.00650000"
                        "executedQty": NumberString, // "0.00000000"
                        "cummulativeQuoteQty": NumberString, // "0.00000000"
                        "status": string, // "CANCELED"
                        "timeInForce": string, // "GTC"
                        "type": string, // "STOP_LOSS_LIMIT"
                        "side": string, // "SELL"
                        "stopPrice": NumberString, // "23405.00000000"
                        "selfTradePreventionMode": string, // "NONE"
                    },
                    | {
                        "symbol": string, // "BTCUSDT"
                        "orderId": number, // 12569138902
                        "orderListId": number, // 1274512
                        "clientOrderId": string, // "jLnZpj5enfMXTuhKB1d0us"
                        "transactTime": number, // 1660801720215
                        "price": NumberString, // "23420.00000000"
                        "origQty": NumberString, // "0.00650000"
                        "executedQty": NumberString, // "0.00000000"
                        "cummulativeQuoteQty": NumberString, // "0.00000000"
                        "status": string, // "CANCELED"
                        "timeInForce": string, // "GTC"
                        "type": string, // "LIMIT_MAKER"
                        "side": string, // "SELL"
                        "selfTradePreventionMode": string, // "NONE"
                    }
                ]
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#current-open-ocos-user_data
    CurrentopenOCOs = () => {
        const name = "Current open OCOs (USER_DATA)"
        const nameType = "USER_DATA"
        const wight = [{
            name: "IP",
            data: 6,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            apiKey: STRING
            // 60000
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "3a4437e2-41a3-4c19-897c-9cadc5dce8b6"
                "method": string, // "openOrderLists.status"
                "params": {
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "1bea8b157dd78c3da30359bddcd999e4049749fe50b828e620e12f64e8b433c9"
                    "timestamp": number, // 1660801713831
                }
            }
            | {
            "id": string, // "3a4437e2-41a3-4c19-897c-9cadc5dce8b6"
            "status": number, // 200
            "result": [
                {
                    "orderListId": number, // 0
                    "contingencyType": string, // "OCO"
                    "listStatusType": string, // "EXEC_STARTED"
                    "listOrderStatus": string, // "EXECUTING"
                    "listClientOrderId": string, // "08985fedd9ea2cf6b28996"
                    "transactionTime": number, // 1660801713793
                    "symbol": string, // "BTCUSDT"
                    "orders": [
                        {
                            "symbol": string, // "BTCUSDT"
                            "orderId": number, // 4
                            "clientOrderId": string, // "CUhLgTXnX5n2c0gWiLpV4d"
                        },
                        | {
                            "symbol": string, // "BTCUSDT"
                            "orderId": number, // 5
                            "clientOrderId": string, // "1ZqG7bBuYwaF4SU8CwnwHm"
                        }
                    ]
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 6
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#place-new-order-using-sor-trade
    PlaceneworderusingSOR = () => {
        const name = "Place new order using SOR (TRADE)"
        const nameType = "TRADE"
        const wight = [{
            name: "",
            data: 1,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            // BUY
            side: ENUM_side
            type: ENUM_type
            // LIMIT
            timeInForce?: ENUM_timeInForce
            // LIMIT
            price?: DECIMAL
            quantity: DECIMAL
            // Arbitrary unique ID among open orders. Automatically generated if not sent
            newClientOrderId?: STRING
            // ACK
            newOrderRespType?: ENUM_newOrderRespType
            icebergQty?: DECIMAL
            // Arbitrary numeric value identifying the order within an order strategy.
            strategyId?: INT
            // 1000000
            strategyType?: INT
            // EXPIRE_TAKER
            selfTradePreventionMode?: ENUM_selfTradePreventionMode
            apiKey: STRING
            timestamp: INT
            // 60000
            recvWindow?: INT
            signature: STRING
        }
        type req = {
                "id": string, // "3a4437e2-41a3-4c19-897c-9cadc5dce8b6"
                "method": string, // "sor.order.place"
                "params":
                    {
                        "symbol": string, // "BTCUSDT"
                        "side": string, // "BUY"
                        "type": string, // "LIMIT"
                        "quantity": number, // 0.5
                        "timeInForce": string, // "GTC"
                        "price": number, // 31000
                        "timestamp": number, // 1687485436575
                        "apiKey": string, // "u5lgqJb97QWXWfgeV4cROuHbReSJM9rgQL0IvYcYc7BVeA5lpAqqc3a5p2OARIFk"
                        "signature": string, // "fd301899567bc9472ce023392160cdc265ad8fcbbb67e0ea1b2af70a4b0cd9c7"
                    }
            }
            | {
            "id": string, // "3a4437e2-41a3-4c19-897c-9cadc5dce8b6"
            "status": number, // 200
            "result": [
                {
                    "symbol": string, // "BTCUSDT"
                    "orderId": number, // 2
                    "orderListId": number, // 1
                    "clientOrderId": string, // "sBI1KM6nNtOfj5tccZSKly"
                    "transactTime": number, // 1689149087774
                    "price": NumberString, // "31000.00000000"
                    "origQty": NumberString, // "0.50000000"
                    "executedQty": NumberString, // "0.50000000"
                    "cummulativeQuoteQty": NumberString, // "14000.00000000"
                    "status": string, // "FILLED"
                    "timeInForce": string, // "GTC"
                    "type": string, // "LIMIT"
                    "side": string, // "BUY"
                    "workingTime": number, // 1689149087774
                    "fills": [
                        {
                            "matchType": string, // "ONE_PARTY_TRADE_REPORT"
                            "price": NumberString, // "28000.00000000"
                            "qty": NumberString, // "0.50000000"
                            "commission": NumberString, // "0.00000000"
                            "commissionAsset": string, // "BTC"
                            "tradeId": number, // 1
                            "allocId": number, // 0
                        }
                    ],
                    "workingFloor": string, // "SOR"
                    "selfTradePreventionMode": string, // "NONE"
                    "usedSor": boolean, // true
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#test-new-order-using-sor-trade
    TestneworderusingSOR = () => {
        const name = "Test new order using SOR (TRADE)"
        const nameType = "TRADE"
        const wight = [{
            name: "",
        }
        ]
        // Name Type Mandatory Description
        type params = {
            // false
            computeCommissionRates?: BOOLEAN
        }
        type req = {
                "id": string, // "3a4437e2-41a3-4c19-897c-9cadc5dce8b6"
                "method": string, // "sor.order.test"
                "params":
                    {
                        "symbol": string, // "BTCUSDT"
                        "side": string, // "BUY"
                        "type": string, // "LIMIT"
                        "quantity": number, // 0.1
                        "timeInForce": string, // "GTC"
                        "price": number, // 0.1
                        "timestamp": number, // 1687485436575
                        "apiKey": string, // "u5lgqJb97QWXWfgeV4cROuHbReSJM9rgQL0IvYcYc7BVeA5lpAqqc3a5p2OARIFk"
                        "signature": string, // "fd301899567bc9472ce023392160cdc265ad8fcbbb67e0ea1b2af70a4b0cd9c7"
                    }
            }
            | {
            "id": string, // "3a4437e2-41a3-4c19-897c-9cadc5dce8b6"
            "status": number, // 200
            "result": number, // {},
            "rateLimits": [
                {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 1
                }
            ]
        }
            | {
            "id": string, // "3a4437e2-41a3-4c19-897c-9cadc5dce8b6"
            "status": number, // 200
            "result": {
                "standardCommissionForOrder": {
                    //Standard commission rates on trades from the order.
                    "maker": NumberString, // "0.00000112"
                    "taker": NumberString, // "0.00000114"
                },
                "taxCommissionForOrder": | {
                    //Tax commission rates for trades from the order.
                    "maker": NumberString, // "0.00000112"
                    "taker": NumberString, // "0.00000114"
                },
                "discount": | {
                    //Discount on standard commissions when paying in BNB.
                    "enabledForAccount": boolean, // true
                    "enabledForSymbol": boolean, // true
                    "discountAsset": string, // "BNB"
                    "discount": NumberString, // "0.25000000" //Standard commission is reduced by this rate when paying commission in BNB.
                }
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 20
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#account-requests
    Accountinformation = () => {
        const name = "Account information (USER_DATA)"
        const nameType = "USER_DATA"
        const wight = [{
            name: "IP",
            data: 20,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            apiKey: STRING
            // 60000
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "605a6d20-6588-4cb9-afa0-b0ab087507ba"
                "method": string, // "account.status"
                "params": {
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "83303b4a136ac1371795f465808367242685a9e3a42b22edb4d977d0696eb45c"
                    "timestamp": number, // 1660801839480
                }
            }
            | {
            "id": string, // "605a6d20-6588-4cb9-afa0-b0ab087507ba"
            "status": number, // 200
            "result": {
                "makerCommission": number, // 15
                "takerCommission": number, // 15
                "buyerCommission": number, // 0
                "sellerCommission": number, // 0
                "canTrade": boolean, // true
                "canWithdraw": boolean, // true
                "canDeposit": boolean, // true
                "commissionRates": {
                    "maker": NumberString, // "0.00150000"
                    "taker": NumberString, // "0.00150000"
                    "buyer": NumberString, // "0.00000000"
                    "seller": NumberString, // "0.00000000"
                },
                "brokered": boolean, // false
                "requireSelfTradePrevention": boolean, // false
                "preventSor": boolean, // false
                "updateTime": number, // 1660801833000
                "accountType": string, // "SPOT"
                "balances": [
                    {
                        "asset": string, // "BNB"
                        "free": NumberString, // "0.00000000"
                        "locked": NumberString, // "0.00000000"
                    },
                    | {
                        "asset": string, // "BTC"
                        "free": NumberString, // "1.3447112"
                        "locked": NumberString, // "0.08600000"
                    },
                    | {
                        "asset": string, // "USDT"
                        "free": NumberString, // "1021.21000000"
                        "locked": NumberString, // "0.00000000"
                    }
                ],
                "permissions": | [
                    string, // "SPOT"
                ],
                "uid": number, // 354937868
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 20
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#account-order-rate-limits-user_data
    Accountorderratelimits = () => {
        const name = "Account order rate limits (USER_DATA)"
        const nameType = "USER_DATA"
        const wight = [{
            name: "IP",
            data: 40,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            apiKey: STRING
            // 60000
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "d3783d8d-f8d1-4d2c-b8a0-b7596af5a664"
                "method": string, // "account.rateLimits.orders"
                "params": {
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "76289424d6e288f4dc47d167ac824e859dabf78736f4348abbbac848d719eb94"
                    "timestamp": number, // 1660801839500
                }
            }
            | {
            "id": string, // "d3783d8d-f8d1-4d2c-b8a0-b7596af5a664"
            "status": number, // 200
            "result": [
                {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "SECOND"
                    "intervalNum": number, // 10
                    "limit": number, // 50
                    "count": number, // 0
                },
                | {
                    "rateLimitType": string, // "ORDERS"
                    "interval": string, // "DAY"
                    "intervalNum": number, // 1
                    "limit": number, // 160000
                    "count": number, // 0
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 40
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#account-order-history-user_data
    Accountorderhistory = () => {
        const name = "Account order history (USER_DATA)"
        const nameType = "USER_DATA"
        const wight = [{
            name: "IP",
            data: 20,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            // Order ID to begin at
            orderId?: INT
            startTime?: INT
            endTime?: INT
            // Default 500; max 1000
            limit?: INT
            apiKey: STRING
            // 60000
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "734235c2-13d2-4574-be68-723e818c08f3"
                "method": string, // "allOrders"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "startTime": number, // 1660780800000
                    "endTime": number, // 1660867200000
                    "limit": number, // 5
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "f50a972ba7fad92842187643f6b930802d4e20bce1ba1e788e856e811577bd42"
                    "timestamp": number, // 1661955123341
                }
            }
            | {
            "id": string, // "734235c2-13d2-4574-be68-723e818c08f3"
            "status": number, // 200
            "result": [
                {
                    "symbol": string, // "BTCUSDT"
                    "orderId": number, // 12569099453
                    "orderListId": number, // 1
                    "clientOrderId": string, // "4d96324ff9d44481926157"
                    "price": NumberString, // "23416.10000000"
                    "origQty": NumberString, // "0.00847000"
                    "executedQty": NumberString, // "0.00847000"
                    "cummulativeQuoteQty": NumberString, // "198.33521500"
                    "status": string, // "FILLED"
                    "timeInForce": string, // "GTC"
                    "type": string, // "LIMIT"
                    "side": string, // "SELL"
                    "stopPrice": NumberString, // "0.00000000"
                    "icebergQty": NumberString, // "0.00000000"
                    "time": number, // 1660801715639
                    "updateTime": number, // 1660801717945
                    "isWorking": boolean, // true
                    "workingTime": number, // 1660801715639
                    "origQuoteOrderQty": NumberString, // "0.00000000"
                    "selfTradePreventionMode": string, // "NONE"
                    "preventedMatchId": number, // 0  // present only if the order expired due to STP.
                    "preventedQuantity": NumberString, // "1.200000" // present only if the order expired due to STP.
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 20
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#account-oco-history-user_data
    AccountOCOhistory = () => {
        const name = "Account OCO history (USER_DATA)"
        const nameType = "USER_DATA"
        const wight = [{
            name: "IP",
            data: 20,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            // Order list ID to begin at
            fromId?: INT
            startTime?: INT
            endTime?: INT
            // Default 500; max 1000
            limit?: INT
            apiKey: STRING
            // 60000
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "8617b7b3-1b3d-4dec-94cd-eefd929b8ceb"
                "method": string, // "allOrderLists"
                "params": {
                    "startTime": number, // 1660780800000
                    "endTime": number, // 1660867200000
                    "limit": number, // 5
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "c8e1484db4a4a02d0e84dfa627eb9b8298f07ebf12fcc4eaf86e4a565b2712c2"
                    "timestamp": number, // 1661955123341
                }
            }
            | {
            "id": string, // "8617b7b3-1b3d-4dec-94cd-eefd929b8ceb"
            "status": number, // 200
            "result": [
                {
                    "orderListId": number, // 1274512
                    "contingencyType": string, // "OCO"
                    "listStatusType": string, // "EXEC_STARTED"
                    "listOrderStatus": string, // "EXECUTING"
                    "listClientOrderId": string, // "08985fedd9ea2cf6b28996"
                    "transactionTime": number, // 1660801713793
                    "symbol": string, // "BTCUSDT"
                    "orders": [
                        {
                            "symbol": string, // "BTCUSDT"
                            "orderId": number, // 12569138901
                            "clientOrderId": string, // "BqtFCj5odMoWtSqGk2X9tU"
                        },
                        | {
                            "symbol": string, // "BTCUSDT"
                            "orderId": number, // 12569138902
                            "clientOrderId": string, // "jLnZpj5enfMXTuhKB1d0us"
                        }
                    ]
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 20
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#account-trade-history-user_data
    Accounttradehistory = () => {
        const name = "Account trade history (USER_DATA)"
        const nameType = "USER_DATA"
        const wight = [{
            name: "IP",
            data: 20,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            orderId?: INT
            startTime?: INT
            endTime?: INT
            // First trade ID to query
            fromId?: INT
            // Default 500; max 1000
            limit?: INT
            apiKey: STRING
            // 60000
            recvWindow?: INT
            signature: STRING
            timestamp: INT
        }
        type req = {
                "id": string, // "f4ce6a53-a29d-4f70-823b-4ab59391d6e8"
                "method": string, // "myTrades"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "startTime": number, // 1660780800000
                    "endTime": number, // 1660867200000
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "c5a5ffb79fd4f2e10a92f895d488943a57954edf5933bde3338dfb6ea6d6eefc"
                    "timestamp": number, // 1661955125250
                }
            }
            | {
            "id": string, // "f4ce6a53-a29d-4f70-823b-4ab59391d6e8"
            "status": number, // 200
            "result": [
                {
                    "symbol": string, // "BTCUSDT"
                    "id": number, // 1650422481
                    "orderId": number, // 12569099453
                    "orderListId": number, // 1
                    "price": NumberString, // "23416.10000000"
                    "qty": NumberString, // "0.00635000"
                    "quoteQty": NumberString, // "148.69223500"
                    "commission": NumberString, // "0.00000000"
                    "commissionAsset": string, // "BNB"
                    "time": number, // 1660801715793
                    "isBuyer": boolean, // false
                    "isMaker": boolean, // true
                    "isBestMatch": boolean, // true
                },
                | {
                    "symbol": string, // "BTCUSDT"
                    "id": number, // 1650422482
                    "orderId": number, // 12569099453
                    "orderListId": number, // 1
                    "price": NumberString, // "23416.50000000"
                    "qty": NumberString, // "0.00212000"
                    "quoteQty": NumberString, // "49.64298000"
                    "commission": NumberString, // "0.00000000"
                    "commissionAsset": string, // "BNB"
                    "time": number, // 1660801715793
                    "isBuyer": boolean, // false
                    "isMaker": boolean, // true
                    "isBestMatch": boolean, // true
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 20
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#account-prevented-matches-user_data
    Accountpreventedmatches = () => {
        const name = "Account prevented matches (USER_DATA)"
        const nameType = "USER_DATA"
        const wight = [{
            name: "IP",
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
            preventedMatchId?: LONG
            orderId?: LONG
            fromPreventedMatchId?: LONG
            // 500
            limit?: INT
            // 60000
            recvWindow?: LONG
            timestamp: LONG
        }
        type req = {
                "id": string, // "g4ce6a53-a39d-4f71-823b-4ab5r391d6y8"
                "method": string, // "myPreventedMatches"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "orderId": number, // 35
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "c5a5ffb79fd4f2e10a92f895d488943a57954edf5933bde3338dfb6ea6d6eefc"
                    "timestamp": number, // 1673923281052
                }
            }
            | {
            "id": string, // "g4ce6a53-a39d-4f71-823b-4ab5r391d6y8"
            "status": number, // 200
            "result": [
                {
                    "symbol": string, // "BTCUSDT"
                    "preventedMatchId": number, // 1
                    "takerOrderId": number, // 5
                    "makerOrderId": number, // 3
                    "tradeGroupId": number, // 1
                    "selfTradePreventionMode": string, // "EXPIRE_MAKER"
                    "price": NumberString, // "1.100000"
                    "makerPreventedQuantity": NumberString, // "1.300000"
                    "transactTime": number, // 1669101687094
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 20
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#account-allocations-user_data
    AccountAllocations = () => {
        const name = "Account Allocations (USER_DATA)"
        const nameType = "USER_DATA"
        const wight = [{
            name: "",
            data: 20,
        }
        ]
        type params = {
            symbol: STRING
            startTime?: LONG
            endTime?: LONG
            fromAllocationId?: INT //within the time range
            limit?: INT  //by allocation ID
            orderId?: LONG
            recvWindow?: LONG
            timestamp?: LONG
        }
        type req = {
                "id": string, // "g4ce6a53-a39d-4f71-823b-4ab5r391d6y8"
                "method": string, // "myAllocations"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "orderId": number, // 500
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "c5a5ffb79fd4f2e10a92f895d488943a57954edf5933bde3338dfb6ea6d6eefc"
                    "timestamp": number, // 1673923281052
                }
            }
            | {
            "id": string, // "g4ce6a53-a39d-4f71-823b-4ab5r391d6y8"
            "status": number, // 200
            "result": [
                {
                    "symbol": string, // "BTCUSDT"
                    "allocationId": number, // 0
                    "allocationType": string, // "SOR"
                    "orderId": number, // 500
                    "orderListId": number, // 1
                    "price": NumberString, // "1.00000000"
                    "qty": NumberString, // "0.10000000"
                    "quoteQty": NumberString, // "0.10000000"
                    "commission": NumberString, // "0.00000000"
                    "commissionAsset": string, // "BTC"
                    "time": number, // 1687319487614
                    "isBuyer": boolean, // false
                    "isMaker": boolean, // false
                    "isAllocator": boolean, // false
                }
            ],
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 20
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#account-commission-rates-user_data
    Accountcommissionrates = () => {
        const name = "Account commission rates (USER_DATA)"
        const nameType = "USER_DATA"
        const wight = [{
            name: "",
            data: 20,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            symbol: STRING
        }
        type req = {
                "id": string, // "d3df8a61-98ea-4fe0-8f4e-0fcea5d418b0"
                "method": string, // "account.commission"
                "params": {
                    "symbol": string, // "BTCUSDT"
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                    "signature": string, // "c5a5ffb79fd4f2e10a92f895d488943a57954edf5933bde3338dfb6ea6d6eefc"
                    "timestamp": number, // 1673923281052
                }
            }
            | {
            "id": string, // "d3df8a61-98ea-4fe0-8f4e-0fcea5d418b0"
            "status": number, // 200
            "result":
                [
                    {
                        "symbol": string, // "BTCUSDT"
                        "standardCommission": //Standard commission rates on trades from the order.
                            {
                                "maker": NumberString, // "0.00000010"
                                "taker": NumberString, // "0.00000020"
                                "buyer": NumberString, // "0.00000030"
                                "seller": NumberString, // "0.00000040"
                            },
                        "taxCommission": //Tax commission rates for trades from the order.
                            {
                                "maker": NumberString, // "0.00000112"
                                "taker": NumberString, // "0.00000114"
                                "buyer": NumberString, // "0.00000118"
                                "seller": NumberString, // "0.00000116"
                            },
                        "discount": //Discount on standard commissions when paying in BNB.
                            {
                                "enabledForAccount": boolean, // true
                                "enabledForSymbol": boolean, // true
                                "discountAsset": string, // "BNB"
                                "discount": NumberString, // "0.25000000" //Standard commission is reduced by this rate when paying commission in BNB.
                            }
                    }
                ],
            "rateLimits":
                | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 20
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#start-user-data-stream-user_stream
    Startuserdatastream = () => {
        const name = "Start user data stream (USER_STREAM)"
        const nameType = "USER_STREAM"
        const wight = [{
            name: "IP",
            data: 2,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            apiKey: STRING
        }
        type req = {
                "id": string, // "d3df8a61-98ea-4fe0-8f4e-0fcea5d418b0"
                "method": string, // "userDataStream.start"
                "params": {
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                }
            }
            | {
            "id": string, // "d3df8a61-98ea-4fe0-8f4e-0fcea5d418b0"
            "status": number, // 200
            "result": {
                "listenKey": string, // "xs0mRXdAKlIPDRFrlPcw0qI41Eh3ixNntmymGyhrhgqo7L6FuLaWArTD7RLP"
            },
            "rateLimits": | [
                | {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#ping-user-data-stream-user_stream
    Pinguserdatastream = () => {
        const name = "Ping user data stream (USER_STREAM)"
        const nameType = "USER_STREAM"
        const wight = [{
            name: "IP",
            data: 2,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            listenKey: STRING
            apiKey: STRING
        }
        type req = {
                "id": string, // "815d5fce-0880-4287-a567-80badf004c74"
                "method": string, // "userDataStream.ping"
                "params": {
                    "listenKey": string, // "xs0mRXdAKlIPDRFrlPcw0qI41Eh3ixNntmymGyhrhgqo7L6FuLaWArTD7RLP"
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                }
            }
            | {
            "id": string, // "815d5fce-0880-4287-a567-80badf004c74"
            "status": number, // 200
            "response": number, // {},
            "rateLimits": [
                {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
//https://binance-docs.github.io/apidocs/websocket_api/en#stop-user-data-stream-user_stream
    Stopuserdatastream = () => {
        const name = "Stop user data stream (USER_STREAM)"
        const nameType = "USER_STREAM"
        const wight = [{
            name: "IP",
            data: 2,
        }
        ]
        // Name Type Mandatory Description
        type params = {
            listenKey: STRING
            apiKey: STRING
        }
        type req = {
                "id": string, // "819e1b1b-8c06-485b-a13e-131326c69599"
                "method": string, // "userDataStream.stop"
                "params": {
                    "listenKey": string, // "xs0mRXdAKlIPDRFrlPcw0qI41Eh3ixNntmymGyhrhgqo7L6FuLaWArTD7RLP"
                    "apiKey": string, // "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
                }
            }
            | {
            "id": string, // "819e1b1b-8c06-485b-a13e-131326c69599"
            "status": number, // 200
            "response": number, // {},
            "rateLimits": [
                {
                    "rateLimitType": string, // "REQUEST_WEIGHT"
                    "interval": string, // "MINUTE"
                    "intervalNum": number, // 1
                    "limit": number, // 6000
                    "count": number, // 2
                }
            ]
        }
            | undefined
        return {
            name, wight, typeParams: {} as params
            , typeRes: {} as req
        }
    }
}

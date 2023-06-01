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


type ENUM_type 			= any
type ENUM_interval 			= any
type ENUM_windowSize 			= any
type ENUM_side 			= any
type ENUM_timeInForce 			= any
type ENUM_newOrderRespType 			= any
type ENUM_cancelRestrictions 			= any
type ENUM_selfTradePreventionMode		= any
type ENUM_cancelReplaceMode		= any
type ENUM_stopLimitTimeInForce		= any
type ENUM_sideEffectType		= any
type ENUM_status		= any
type ENUM_lendingType		= any
type ENUM_product			= any
type ENUM_sortBy			= any
type ENUM_txnType			= any
type ENUM_positionSide			= any
type ENUM_urgency			= any
type LIST			= any
type ENUM_operation			= any
type ENUM_direction			= any
type ENUM_walletType			= any
type ENUM_validTime			= any

export class CBinanceAll {
//https://binance-docs.github.io/apidocs/spot/en#introduction

APIKeySetup = () => {
	const name = "API Key Setup"
	const nameType = ""
	const wight = []
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#api-key-restrictions

APIKeyRestrictions = () => {
	const name = "API Key Restrictions"
	const nameType = ""
	const wight = []
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#enabling-accounts

EnablingAccounts = () => {
	const name = "Enabling Accounts"
	const nameType = ""
	const wight = []
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#api-library

APILibrary = () => {
	const name = "API Library"
	const nameType = ""
	const wight = []
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#contact-us

ContactUs = () => {
	const name = "Contact Us"
	const nameType = ""
	const wight = []
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#general-info

GeneralAPIInformation = () => {
	const name = "General API Information"
	const nameType = ""
	const wight = []
	type req = {
		"code" :  number , // 1121  
		"msg" :  string , // "Invalid symbol." 
		
		}
	
}

//https://binance-docs.github.io/apidocs/spot/en#limits

LIMITS = () => {
	const name = "LIMITS"
	const nameType = ""
	const wight = []
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#data-sources

DataSources = () => {
	const name = "Data Sources"
	const nameType = ""
	const wight = []
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#endpoint-security-type

Endpointsecuritytype = () => {
	const name = "Endpoint security type"
	const nameType = ""
	const wight = []
	// Security Type Description
	// type params = {
	// 	NONE : Endpoint can be accessed freely.
	// 	TRADE : Endpoint requires sending a valid API-Key and signature.
	// 	MARGIN : Endpoint requires sending a valid API-Key and signature.
	// 	USER_DATA : Endpoint requires sending a valid API-Key and signature.
	// 	USER_STREAM : Endpoint requires sending a valid API-Key.
	// 	MARKET_DATA : Endpoint requires sending a valid API-Key.
	// }
	// type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#signed-trade-user_data-and-margin-endpoint-security

SIGNED = () => {
	const name = "SIGNED (TRADE, USER_DATA, AND MARGIN)"
	const nameType = "TRADE, USER_DATA, AND MARGIN"
	const wight = []
	type req = {
		// process request 
		
		}
	| {
		// reject request 
		
		} 
	
}

//https://binance-docs.github.io/apidocs/spot/en#public-api-definitions

PublicAPIDefinitions = () => {
	const name = "Public API Definitions"
	const nameType = ""
	const wight = []
	type req = {
		"rateLimitType" :  string , // "REQUEST_WEIGHT"  
		"interval" :  string , // "MINUTE"  
		"intervalNum" :  number , // 1  
		"limit" :  number , // 1200 
		
		}
	| {
		"rateLimitType" :  string , // "ORDERS"  
		"interval" :  string , // "SECOND"  
		"intervalNum" :  number , // 10  
		"limit" :  number , // 100 
		
		} 
	| {
		"rateLimitType" :  string , // "ORDERS"  
		"interval" :  string , // "DAY"  
		"intervalNum" :  number , // 1  
		"limit" :  number , // 200000 
		
		}
	| {
		"rateLimitType" :  string , // "RAW_REQUESTS"  
		"interval" :  string , // "MINUTE"  
		"intervalNum" :  number , // 5  
		"limit" :  number , // 5000 
		
		}
	
}

//https://binance-docs.github.io/apidocs/spot/en#filters

Filters = () => {
	const name = "Filters"
	const nameType = ""
	const wight = []
	type req = {
		"filterType" :  string , // "PRICE_FILTER"  
		"minPrice" :  NumberString , // "0.00000100"  
		"maxPrice" :  NumberString , // "100000.00000000"  
		"tickSize" :  NumberString , // "0.00000100" 
		
		}
	| {
		"filterType" :  string , // "PERCENT_PRICE"  
		"multiplierUp" :  NumberString , // "1.3000"  
		"multiplierDown" :  NumberString , // "0.7000"  
		"avgPriceMins" :  number , // 5 
		
		}
	| {
		"filterType" :  string , // "PERCENT_PRICE_BY_SIDE"  
		"bidMultiplierUp" :  NumberString , // "1.2"  
		"bidMultiplierDown" :  NumberString , // "0.2"  
		"askMultiplierUp" :  NumberString , // "5"  
		"askMultiplierDown" :  NumberString , // "0.8"  
		"avgPriceMins" :  number , // 1 
		
		}
	| {
		"filterType" :  string , // "LOT_SIZE"  
		"minQty" :  NumberString , // "0.00100000"  
		"maxQty" :  NumberString , // "100000.00000000"  
		"stepSize" :  NumberString , // "0.00100000" 
		
		}
	| {
		"filterType" :  string , // "MIN_NOTIONAL"  
		"minNotional" :  NumberString , // "0.00100000"  
		"applyToMarket" :  boolean , // true  
		"avgPriceMins" :  number , // 5 
		
		}
	| {
		"filterType" :  string , // "NOTIONAL"  
		"minNotional" :  NumberString , // "10.00000000"  
		"applyMinToMarket" :  boolean , // false  
		"maxNotional" :  NumberString , // "10000.00000000"  
		"applyMaxToMarket" :  boolean , // false  
		"avgPriceMins" :  number , // 5 
		
		}
	| {
		"filterType" :  string , // "ICEBERG_PARTS"  
		"limit" :  number , // 10 
		
		}
	| {
		"filterType" :  string , // "MARKET_LOT_SIZE"  
		"minQty" :  NumberString , // "0.00100000"  
		"maxQty" :  NumberString , // "100000.00000000"  
		"stepSize" :  NumberString , // "0.00100000" 
		
		}
	| {
		"filterType" :  string , // "MAX_NUM_ORDERS"  
		"maxNumOrders" :  number , // 25 
		
		}
	| {
		"filterType" :  string , // "MAX_NUM_ALGO_ORDERS"  
		"maxNumAlgoOrders" :  number , // 5 
		
		}
	| {
		"filterType" :  string , // "MAX_NUM_ICEBERG_ORDERS"  
		"maxNumIcebergOrders" :  number , // 5 
		
		}
	| {
		"filterType" :  string , // "MAX_POSITION"  
		"maxPosition" :  NumberString , // "10.00000000" 
		
		}
	| {
		"filterType" :  string , // "TRAILING_DELTA"  
		"minTrailingAboveDelta" :  number , // 10  
		"maxTrailingAboveDelta" :  number , // 2000  
		"minTrailingBelowDelta" :  number , // 10  
		"maxTrailingBelowDelta" :  number , // 2000 
		
		}
	| {
		"filterType" :  string , // "EXCHANGE_MAX_NUM_ORDERS"  
		"maxNumOrders" :  number , // 1000 
		
		}
	| {
		"filterType" :  string , // "EXCHANGE_MAX_NUM_ALGO_ORDERS"  
		"maxNumAlgoOrders" :  number , // 200 
		
		}
	| {
		"filterType" :  string , // "EXCHANGE_MAX_NUM_ICEBERG_ORDERS"  
		"maxNumIcebergOrders" :  number , // 10000 
		
		}
	
}

//https://binance-docs.github.io/apidocs/spot/en#wallet-endpoints

SystemStatus = () => {
	const name = "System Status (System)"
	const nameType = "System"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/system/status",
		HMAC : true,
	}
	type req = {
		"status" :  number , // 0  // 0: normal，1：system maintenance
	 
		"msg" :  string , // "normal" // "normal", "system_maintenance" 
		
		}
	
}

//https://binance-docs.github.io/apidocs/spot/en#all-coins-39-information-user_data

AllCoinsInformation = () => {
	const name = "All Coins Information (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/capital/config/getall",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [	
	 {
			"coin" :  string , // "BTC"  
			"depositAllEnable" :  boolean , // true  
			"free" :  NumberString , // "0.08074558"  
			"freeze" :  NumberString , // "0.00000000"  
			"ipoable" :  NumberString , // "0.00000000"  
			"ipoing" :  NumberString , // "0.00000000"  
			"isLegalMoney" :  boolean , // false  
			"locked" :  NumberString , // "0.00000000"  
			"name" :  string , // "Bitcoin"  
			"networkList" : [			
	 {
					"addressRegex" :  string , // "^(bnb1)[0-9a-z]{38}$"  
					"coin" :  string , // "BTC"  
					"depositDesc" :  string , // "Wallet Maintenance, Deposit Suspended"  // shown only when "depositEnable" is false.
	 
					"depositEnable" :  boolean , // false  
					"isDefault" :  boolean , // false  
					"memoRegex" :  string , // "^[0-9A-Za-z\\-_]{1,120}$"  
					"minConfirm" :  number , // 1  // min number for balance confirmation
	 
					"name" :  string , // "BEP2"  
					"network" :  string , // "BNB"  
					"resetAddressStatus" :  boolean , // false  
					"specialTips" :  string , // "Both a MEMO and an Address are required to successfully deposit your BEP2-BTCB tokens to Binance."  
					"unLockConfirm" :  number , // 0  // confirmation number for balance unlock 
	 
					"withdrawDesc" :  string , // "Wallet Maintenance, Withdrawal Suspended"  // shown only when "withdrawEnable" is false.
	 
					"withdrawEnable" :  boolean , // false  
					"withdrawFee" :  NumberString , // "0.00000220"  
					"withdrawIntegerMultiple" :  NumberString , // "0.00000001"  
					"withdrawMax" :  NumberString , // "9999999999.99999999"  
					"withdrawMin" :  NumberString , // "0.00000440"  
					"sameAddress" :  boolean , // true  // If the coin needs to provide memo to withdraw
	 
					"estimatedArrivalTime" :  number , // 25  
					"busy" :  boolean , // false 
					
					},
				| {
					"addressRegex" :  string , // "^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$|^(bc1)[0-9A-Za-z]{39,59}$"  
					"coin" :  string , // "BTC"  
					"depositEnable" :  boolean , // true  
					"isDefault" :  boolean , // true  
					"memoRegex" :  NumberString , // ""  
					"minConfirm" :  number , // 1  
					"name" :  string , // "BTC"  
					"network" :  string , // "BTC"  
					"resetAddressStatus" :  boolean , // false  
					"specialTips" :  NumberString , // ""  
					"unLockConfirm" :  number , // 2  
					"withdrawEnable" :  boolean , // true  
					"withdrawFee" :  NumberString , // "0.00050000"  
					"withdrawIntegerMultiple" :  NumberString , // "0.00000001"  
					"withdrawMax" :  NumberString , // "750"  
					"withdrawMin" :  NumberString , // "0.00100000"  
					"sameAddress" :  boolean , // false  
					"estimatedArrivalTime" :  number , // 25  
					"busy" :  boolean , // false 
					
					}
				
				],
			"storage" :  NumberString , // "0.00000000"  
			"trading" :  boolean , // true  
			"withdrawAllEnable" :  boolean , // true  
			"withdrawing" :  NumberString , // "0.00000000" 
			
			}
		
		]
	
}

//https://binance-docs.github.io/apidocs/spot/en#daily-account-snapshot-user_data

DailyAccountSnapshot = () => {
	const name = "Daily Account Snapshot (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 2400,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/accountSnapshot",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// &quot;SPOT&quot;, &quot;MARGIN&quot;, &quot;FUTURES&quot;
		type : STRING
		startTime? : LONG
		endTime? : LONG
		// min 7, max 30, default 7
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
		"code" :  number , // 200  // 200 for success; others are error codes
	 
		"msg" :  NumberString , // ""  // error message
	 
		"snapshotVos" :[		
	 {
				"data" :{
					"balances" :[					
	 {
							"asset" :  string , // "BTC"  
							"free" :  NumberString , // "0.09905021"  
							"locked" :  NumberString , // "0.00000000" 
							
							},
						| {
							"asset" :  string , // "USDT"  
							"free" :  NumberString , // "1.89109409"  
							"locked" :  NumberString , // "0.00000000" 
							
							}
						
						],
					"totalAssetOfBtc" :  NumberString , // "0.09942700" 
					
					},
				"type" :  string , // "spot"  
				"updateTime" :  number , // 1576281599000 
				
				}
			
			]
		
		}
	| {
		"code" :  number , // 200  // 200 for success; others are error codes
	 
		"msg" :  NumberString , // ""  // error message
	 
		"snapshotVos" :[		
	 {
				"data" :{
					"marginLevel" :  NumberString , // "2748.02909813"  
					"totalAssetOfBtc" :  NumberString , // "0.00274803"  
					"totalLiabilityOfBtc" :  NumberString , // "0.00000100"  
					"totalNetAssetOfBtc" :  NumberString , // "0.00274750"  
					"userAssets" :[					
	 {
							"asset" :  string , // "XRP"  
							"borrowed" :  NumberString , // "0.00000000"  
							"free" :  NumberString , // "1.00000000"  
							"interest" :  NumberString , // "0.00000000"  
							"locked" :  NumberString , // "0.00000000"  
							"netAsset" :  NumberString , // "1.00000000" 
							
							}
						
						]
					
					},
				"type" :  string , // "margin"  
				"updateTime" :  number , // 1576281599000 
				
				}
			
			]
		
		}
	| {
		"code" :  number , // 200  // 200 for success; others are error codes
	 
		"msg" :  NumberString , // ""  // error message
	 
		"snapshotVos" :[		
	 {
				"data" :{
					"assets" :[					
	 {
							"asset" :  string , // "USDT"  
							"marginBalance" :  NumberString , // "118.99782335"  // Not real-time data, can ignore
	 
							"walletBalance" :  NumberString , // "120.23811389" 
							
							}
						
						],
					"position"  :[					
	  {
							"entryPrice" :  NumberString , // "7130.41000000"  
							"markPrice" :  NumberString , // "7257.66239673"  
							"positionAmt" :  NumberString , // "0.01000000"  
							"symbol" :  string , // "BTCUSDT"  
							"unRealizedProfit" :  NumberString , // "1.24029054" // Only show the value at the time of opening the position 
							
							}
						
						]
					
					},
				"type" :  string , // "futures"  
				"updateTime" :  number , // 1576281599000 
				
				}
			
			]
		
		}
	
}

//https://binance-docs.github.io/apidocs/spot/en#disable-fast-withdraw-switch-user_data

DisableFastWithdrawSwitch = () => {
	const name = "Disable Fast Withdraw Switch (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/account/disableFastWithdrawSwitch",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#enable-fast-withdraw-switch-user_data

EnableFastWithdrawSwitch = () => {
	const name = "Enable Fast Withdraw Switch (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/account/enableFastWithdrawSwitch",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#withdraw-user_data

Withdraw = () => {
	const name = "Withdraw(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 600,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/capital/withdraw/apply",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		coin : STRING
		// client id for withdraw
		withdrawOrderId? : STRING
		network? : STRING
		address : STRING
		// Secondary address identifier for coins like XRP,XMR etc.
		addressTag? : STRING
		amount : DECIMAL
		// When making internal transfer, 
		transactionFeeFlag? : BOOLEAN
		// Description of the address. Space in name should be encoded into 
		name? : STRING
		// The wallet type for withdraw，0-spot wallet ，1-funding wallet. Default walletType is the current &quot;selected wallet&quot; under wallet-&gt;Fiat and Spot/Funding-&gt;Deposit
		walletType? : INTEGER
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
		"id" :  string , // "7213fea8e94b4a5593d507237e5a555b" 
		
		}
	
}

//https://binance-docs.github.io/apidocs/spot/en#deposit-history-supporting-network-user_data

DepositHistory = () => {
	const name = "Deposit History (supporting network)"
	const nameType = "supporting network"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/capital/deposit/hisrec",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		coin? : STRING
		// 0(0:pending,6: credited but cannot withdraw, 7=Wrong Deposit,8=Waiting User confirm, 1:success)
		status? : INT
		// Default: 90 days from current timestamp
		startTime? : LONG
		// Default: present timestamp
		endTime? : LONG
		// Default:0
		offset? : INT
		// Default:1000, Max:1000
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
		txId? : STRING
	}
	type req = [	
	 {
			"id" :  NumberString , // "769800519366885376"  
			"amount" :  NumberString , // "0.001"  
			"coin" :  string , // "BNB"  
			"network" :  string , // "BNB"  
			"status" :  number , // 0  
			"address" :  string , // "bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23"  
			"addressTag" :  NumberString , // "101764890"  
			"txId" :  string , // "98A3EA560C6B3336D348B6C83F0F95ECE4F1F5919E94BD006E5BF3BF264FACFC"  
			"insertTime" :  number , // 1661493146000  
			"transferType" :  number , // 0  
			"confirmTimes" :  string , // "1/1"  
			"unlockConfirm" :  number , // 0  
			"walletType" :  number , // 0 
			
			},
		| {
			"id" :  NumberString , // "769754833590042625"  
			"amount" :  NumberString , // "0.50000000"  
			"coin" :  string , // "IOTA"  
			"network" :  string , // "IOTA"  
			"status" :  number , // 1  
			"address" :  string , // "SIZ9VLMHWATXKV99LH99CIGFJFUMLEHGWVZVNNZXRJJVWBPHYWPPBOSDORZ9EQSHCZAMPVAPGFYQAUUV9DROOXJLNW"  
			"addressTag" :  NumberString , // ""  
			"txId" :  string , // "ESBFVQUTPIWQNJSPXFNHNYHSQNTGKRVKPRABQWTAXCDWOAKDKYWPTVG9BGXNVNKTLEJGESAVXIKIZ9999"  
			"insertTime" :  number , // 1599620082000  
			"transferType" :  number , // 0  
			"confirmTimes" :  string , // "1/1"  
			"unlockConfirm" :  number , // 0  
			"walletType" :  number , // 0 
			
			}
		
		]
	
}

//https://binance-docs.github.io/apidocs/spot/en#withdraw-history-supporting-network-user_data

WithdrawHistory = () => {
	const name = "Withdraw History (supporting network)"
	const nameType = "supporting network"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/capital/withdraw/history",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		coin? : STRING
		withdrawOrderId? : STRING
		// 0(0:Email Sent,1:Cancelled 2:Awaiting Approval 3:Rejected 4:Processing 5:Failure 6:Completed)
		status? : INT
		offset? : INT
		// Default: 1000, Max: 1000
		limit? : INT
		// Default: 90 days from current timestamp
		startTime? : LONG
		// Default: present timestamp
		endTime? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [	
	 {
			"id" :  string , // "b6ae22b3aa844210a7041aee7589627c"  // Withdrawal id in Binance
	 
			"amount" :  NumberString , // "8.91000000"  // withdrawal amount
	 
			"transactionFee" :  NumberString , // "0.004"  // transaction fee
	 
			"coin" :  string , // "USDT"  
			"status" :  number , // 6  
			"address" :  NumberString , // "0x94df8b352de7f46f64b01d3666bf6e936e44ce60"  
			"txId" :  NumberString , // "0xb5ef8c13b968a406cc62a93a8bd80f9e9a906ef1b3fcf20a2e48573c17659268" // withdrawal transaction id 
			"applyTime" :  string , // "2019-10-12 11:12:02"  // UTC time
	 
			"network" :  string , // "ETH"  
			"transferType" :  number , // 0 // 1 for internal transfer, 0 for external transfer    
			"withdrawOrderId" :  string , // "WITHDRAWtest123"  // // will not be returned if there's no withdrawOrderId for this withdraw.
	 
			"info" :  string , // "The address is not valid. Please confirm with the recipient"  // reason for withdrawal failure
	 
			"confirmNo" :  number , // 3  // confirm times for withdraw
	 
			"walletType" :  number , // 1  //1: Funding Wallet 0:Spot Wallet
	 
			"txKey" :  NumberString , // ""  
			"completeTime" :  string , // "2023-03-23 16:52:41" // complete UTC time when user's asset is deduct from withdrawing, only if status =  6(success) 
			
			},
		| {
			"id" :  string , // "156ec387f49b41df8724fa744fa82719"  
			"amount" :  NumberString , // "0.00150000"  
			"transactionFee" :  NumberString , // "0.004"  
			"coin" :  string , // "BTC"  
			"status" :  number , // 6  
			"address" :  string , // "1FZdVHtiBqMrWdjPyRPULCUceZPJ2WLCsB"  
			"txId" :  string , // "60fd9007ebfddc753455f95fafa808c4302c836e4d1eebc5a132c36c1d8ac354" 
			"applyTime" :  string , // "2019-09-24 12:43:45"  
			"network" :  string , // "BTC"  
			"transferType" :  number , // 0  
			"info" :  NumberString , // ""  
			"confirmNo" :  number , // 2  
			"walletType" :  number , // 1  
			"txKey" :  NumberString , // ""  
			"completeTime" :  string , // "2023-03-23 16:52:41" 
			
			}
		
		]
	
}

//https://binance-docs.github.io/apidocs/spot/en#deposit-address-supporting-network-user_data

DepositAddress = () => {
	const name = "Deposit Address (supporting network)"
	const nameType = "supporting network"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/capital/deposit/address",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		coin : STRING
		network? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
		"address" :  string , // "1HPn8Rx2y6nNSfagQBKy27GB99Vbzg89wv"  
		"coin" :  string , // "BTC"  
		"tag" :  NumberString , // ""  
		"url" :  string , // "https://btc.com/1HPn8Rx2y6nNSfagQBKy27GB99Vbzg89wv" 
		
		}
	
}

//https://binance-docs.github.io/apidocs/spot/en#account-status-user_data

AccountStatus = () => {
	const name = "Account Status (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/account/status",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
		"data" :  string , // "Normal" 
		
		}
	
}

//https://binance-docs.github.io/apidocs/spot/en#account-api-trading-status-user_data

AccountAPITradingStatus = () => {
	const name = "Account API Trading Status (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/account/apiTradingStatus",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
		"data" : {
	 // API trading status detail 
			"isLocked" :  boolean , // false  // API trading function is locked or not
	 
			"plannedRecoverTime" :  number , // 0  // If API trading function is locked, this is the planned recover time
	 
			"triggerCondition" : {
				"GCR" :  number , // 150  // Number of GTC orders
	 
				"IFER" :  number , // 150  // Number of FOK/IOC orders
	 
				"UFR" :  number , // 300 // Number of orders 
				
				},
			"updateTime" :  number , // 1547630471725 
			
			}
		
		}
	
}

//https://binance-docs.github.io/apidocs/spot/en#dustlog-user_data

DustLog = () => {
	const name = "DustLog(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/asset/dribblet",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		startTime? : LONG
		endTime? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
		"total" :  number , // 8  //Total counts of exchange
	 
		"userAssetDribblets" : [		
	 {
				"operateTime" :  number , // 1615985535000  
				"totalTransferedAmount" :  NumberString , // "0.00132256"  // Total transfered BNB amount for this exchange.
	 
				"totalServiceChargeAmount" :  NumberString , // "0.00002699"  //Total service charge amount for this exchange.
	 
				"transId" :  number , // 45178372831  
				"userAssetDribbletDetails" : [ //Details of  this exchange.
	
					
	 {
						"transId" :  number , // 4359321  
						"serviceChargeAmount" :  NumberString , // "0.000009"  
						"amount" :  NumberString , // "0.0009"  
						"operateTime" :  number , // 1615985535000  
						"transferedAmount" :  NumberString , // "0.000441"  
						"fromAsset" :  string , // "USDT" 
						
						},
					| {
						"transId" :  number , // 4359321  
						"serviceChargeAmount" :  NumberString , // "0.00001799"  
						"amount" :  NumberString , // "0.0009"  
						"operateTime" :  number , // 1615985535000  
						"transferedAmount" :  NumberString , // "0.00088156"  
						"fromAsset" :  string , // "ETH" 
						
						}
					
					]
				
				},
			| {
				"operateTime" :  number , // 1616203180000  
				"totalTransferedAmount" :  NumberString , // "0.00058795"  
				"totalServiceChargeAmount" :  NumberString , // "0.000012"  
				"transId" :  number , // 4357015  
				"userAssetDribbletDetails" : [				
	 {
						"transId" :  number , // 4357015  
						"serviceChargeAmount" :  NumberString , // "0.00001"  
						"amount" :  NumberString , // "0.001"  
						"operateTime" :  number , // 1616203180000  
						"transferedAmount" :  NumberString , // "0.00049"  
						"fromAsset" :  string , // "USDT" 
						
						},
					| {
						"transId" :  number , // 4357015  
						"serviceChargeAmount" :  NumberString , // "0.000002"  
						"amount" :  NumberString , // "0.0001"  
						"operateTime" :  number , // 1616203180000  
						"transferedAmount" :  NumberString , // "0.00009795"  
						"fromAsset" :  string , // "ETH" 
						
						}
					
					]
				
				}
			
			]
		
		}
	 
}

//https://binance-docs.github.io/apidocs/spot/en#get-assets-that-can-be-converted-into-bnb-user_data

GetAssetsThatCanBeConvertedIntoBNB = () => {
	const name = "Get Assets That Can Be Converted Into BNB (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/asset/dust-btc",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"details" : [	
	 {
			"asset" :  string , // "ADA"  
			"assetFullName" :  string , // "ADA"  
			"amountFree" :  NumberString , // "6.21"  //Convertible amount
	 
			"toBTC" :  NumberString , // "0.00016848"  //BTC amount
	 
			"toBNB" :  NumberString , // "0.01777302"  //BNB amount（Not deducted commission fee）
	 
			"toBNBOffExchange" :  NumberString , // "0.01741756"  //BNB amount（Deducted commission fee）
	 
			"exchange" :  NumberString , // "0.00035546" //Commission fee 
			
			}
		
		],
	"totalTransferBtc" :  NumberString , // "0.00016848"  
	"totalTransferBNB" :  NumberString , // "0.01777302"  
	"dribbletPercentage" :  NumberString , // "0.02" //Commission fee 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#dust-transfer-user_data

DustTransfer = () => {
	const name = "Dust Transfer (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 10,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/asset/dust",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// The asset being converted. For example: asset=BTC,USDT
		asset : ARRAY
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"totalServiceCharge" :  NumberString , // "0.02102542"  
	"totalTransfered" :  NumberString , // "1.05127099"  
	"transferResult" :[	
	 {
			"amount" :  NumberString , // "0.03000000"  
			"fromAsset" :  string , // "ETH"  
			"operateTime" :  number , // 1563368549307  
			"serviceChargeAmount" :  NumberString , // "0.00500000"  
			"tranId" :  number , // 2970932918  
			"transferedAmount" :  NumberString , // "0.25000000" 
			
			},
		| {
			"amount" :  NumberString , // "0.09000000"  
			"fromAsset" :  string , // "LTC"  
			"operateTime" :  number , // 1563368549404  
			"serviceChargeAmount" :  NumberString , // "0.01548000"  
			"tranId" :  number , // 2970932918  
			"transferedAmount" :  NumberString , // "0.77400000" 
			
			},
		| {
			"amount" :  NumberString , // "248.61878453"  
			"fromAsset" :  string , // "TRX"  
			"operateTime" :  number , // 1563368549489  
			"serviceChargeAmount" :  NumberString , // "0.00054542"  
			"tranId" :  number , // 2970932918  
			"transferedAmount" :  NumberString , // "0.02727099" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#asset-dividend-record-user_data

AssetDividendRecord = () => {
	const name = "Asset Dividend Record (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/asset/assetDividend",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset? : STRING
		startTime? : LONG
		endTime? : LONG
		// Default 20, max 500
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" :[	
	 {
			"id" :  number , // 1637366104  
			"amount" :  NumberString , // "10.00000000"  
			"asset" :  string , // "BHFT"  
			"divTime" :  number , // 1563189166000  
			"enInfo" :  string , // "BHFT distribution"  
			"tranId" :  number , // 2968885920 
			
			},
		| {
			"id" :  number , // 1631750237  
			"amount" :  NumberString , // "10.00000000"  
			"asset" :  string , // "BHFT"  
			"divTime" :  number , // 1563189165000  
			"enInfo" :  string , // "BHFT distribution"  
			"tranId" :  number , // 2968885920 
			
			}
		
		],
	"total" :  number , // 2 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#asset-detail-user_data

AssetDetail = () => {
	const name = "Asset Detail (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/asset/assetDetail",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"CTR" : {
		"minWithdrawAmount" :  NumberString , // "70.00000000"  //min withdraw amount
	 
		"depositStatus" :  boolean , // false  //deposit status (false if ALL of networks' are false)
	 
		"withdrawFee" :  number , // 35  // withdraw fee
	 
		"withdrawStatus" :  boolean , // true  //withdraw status (false if ALL of networks' are false)
	 
		"depositTip" :  string , // "Delisted, Deposit Suspended" //reason 
		
		},
	"SKY" : | {
		"minWithdrawAmount" :  NumberString , // "0.02000000"  
		"depositStatus" :  boolean , // true  
		"withdrawFee" :  number , // 0.01  
		"withdrawStatus" :  boolean , // true 
		
		}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#trade-fee-user_data

TradeFee = () => {
	const name = "Trade Fee (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/asset/tradeFee",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"symbol" :  string , // "ADABNB"  
		"makerCommission" :  NumberString , // "0.001"  
		"takerCommission" :  NumberString , // "0.001" 
		
		},
	| {
		"symbol" :  string , // "BNBBTC"  
		"makerCommission" :  NumberString , // "0.001"  
		"takerCommission" :  NumberString , // "0.001" 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#user-universal-transfer-user_data

UserUniversalTransfer = () => {
	const name = "User Universal Transfer (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 900,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/asset/transfer",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		type : ENUM_type
		asset : STRING
		amount : DECIMAL
		fromSymbol? : STRING
		toSymbol? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"tranId" :  number , // 13526853623 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-user-universal-transfer-history-user_data

QueryUserUniversalTransferHistory = () => {
	const name = "Query User Universal Transfer History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/asset/transfer",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		type : ENUM_type
		startTime? : LONG
		endTime? : LONG
		// Default 1
		current? : INT
		// Default 10, Max 100
		size? : INT
		fromSymbol? : STRING
		toSymbol? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"total" :  number , // 2  
	"rows" :[	
	 {
			"asset" :  string , // "USDT"  
			"amount" :  NumberString , // "1"  
			"type" :  string , // "MAIN_UMFUTURE"  
			"status" :  string , // "CONFIRMED"  // status: CONFIRMED / FAILED / PENDING
	 
			"tranId" :  number , // 11415955596  
			"timestamp" :  number , // 1544433328000 
			
			},
		| {
			"asset" :  string , // "USDT"  
			"amount" :  NumberString , // "2"  
			"type" :  string , // "MAIN_UMFUTURE"  
			"status" :  string , // "CONFIRMED"  
			"tranId" :  number , // 11366865406  
			"timestamp" :  number , // 1544433328000 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#funding-wallet-user_data

FundingWallet = () => {
	const name = "Funding Wallet (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/asset/get-funding-asset",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset? : STRING
		// true or false
		needBtcValuation? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"asset" :  string , // "USDT"  
		"free" :  NumberString , // "1"  // avalible balance
	 
		"locked" :  NumberString , // "0"  // locked asset
	 
		"freeze" :  NumberString , // "0"  // freeze asset
	 
		"withdrawing" :  NumberString , // "0"  
		"btcValuation" :  NumberString , // "0.00000091" 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#user-asset-user_data

UserAsset = () => {
	const name = "User Asset (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 5,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v3/asset/getUserAsset",
	}
	// Name Type Mandatory Description
	type params = {
		// If asset is blank, then query all positive assets user have.
		asset? : STRING
		// Whether need btc valuation or not.
		needBtcValuation? : BOOLEAN
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"asset" :  string , // "AVAX"  
		"free" :  NumberString , // "1"  
		"locked" :  NumberString , // "0"  
		"freeze" :  NumberString , // "0"  
		"withdrawing" :  NumberString , // "0"  
		"ipoable" :  NumberString , // "0"  
		"btcValuation" :  NumberString , // "0" 
		
		},
	| {
		"asset" :  string , // "BCH"  
		"free" :  NumberString , // "0.9"  
		"locked" :  NumberString , // "0"  
		"freeze" :  NumberString , // "0"  
		"withdrawing" :  NumberString , // "0"  
		"ipoable" :  NumberString , // "0"  
		"btcValuation" :  NumberString , // "0" 
		
		},
	| {
		"asset" :  string , // "BNB"  
		"free" :  NumberString , // "887.47061626"  
		"locked" :  NumberString , // "0"  
		"freeze" :  NumberString , // "10.52"  
		"withdrawing" :  NumberString , // "0.1"  
		"ipoable" :  NumberString , // "0"  
		"btcValuation" :  NumberString , // "0" 
		
		},
	| {
		"asset" :  string , // "BUSD"  
		"free" :  NumberString , // "9999.7"  
		"locked" :  NumberString , // "0"  
		"freeze" :  NumberString , // "0"  
		"withdrawing" :  NumberString , // "0"  
		"ipoable" :  NumberString , // "0"  
		"btcValuation" :  NumberString , // "0" 
		
		},
	| {
		"asset" :  string , // "SHIB"  
		"free" :  NumberString , // "532.32"  
		"locked" :  NumberString , // "0"  
		"freeze" :  NumberString , // "0"  
		"withdrawing" :  NumberString , // "0"  
		"ipoable" :  NumberString , // "0"  
		"btcValuation" :  NumberString , // "0" 
		
		},
	| {
		"asset" :  string , // "USDT"  
		"free" :  NumberString , // "50300000001.44911105"  
		"locked" :  NumberString , // "0"  
		"freeze" :  NumberString , // "0"  
		"withdrawing" :  NumberString , // "0"  
		"ipoable" :  NumberString , // "0"  
		"btcValuation" :  NumberString , // "0" 
		
		},
	| {
		"asset" :  string , // "WRZ"  
		"free" :  NumberString , // "1"  
		"locked" :  NumberString , // "0"  
		"freeze" :  NumberString , // "0"  
		"withdrawing" :  NumberString , // "0"  
		"ipoable" :  NumberString , // "0"  
		"btcValuation" :  NumberString , // "0" 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#busd-convert-trade

BUSDConvert = () => {
	const name = "BUSD Convert (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 5,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/asset/convert-transfer",
	}
	// Name Type Mandatory Description
	type params = {
		// The unique user-defined transaction id, min length 20
		clientTranId : STRING
		// The current asset
		asset : STRING
		// The amount must be positive number
		amount : BigDecimal
		// Target asset you want to convert
		targetAsset : String
		// Only 
		accountType? : String
	}
	type req = {
	"tranId" :  number , // 118263407119  
	"status" :  string , // "S" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#busd-convert-history-user_data

BUSDConvertHistory = () => {
	const name = "BUSD Convert History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 5,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/asset/convert-transfer/queryByPage",
	}
	// Name Type Mandatory Description
	type params = {
		// The transaction id
		tranId? : LONG
		// The user-defined transaction id
		clientTranId? : STRING
		// If it is blank, we will match deducted asset and target asset.
		asset? : STRING
		// inclusive, unit: ms
		startTime : LONG
		// exclusive, unit: ms
		endTime : LONG
		// MAIN: main account. CARD: funding account. If it is blank, we will query spot and card wallet, otherwise, we just query the corresponding wallet
		accountType? : STRING
		// current page, default 1, the min value is 1
		current? : INTEGER
		// page size, default 10, the max value is 100
		size? : INTEGER
	}
	type req = {
	"total" :  number , // 3  
	"rows" : 
	[	
	 {
			"tranId" :  number , // 118263615991  
			"type" :  number , // 244  
			"time" :  number , // 1664442078000  
			"deductedAsset" :  string , // "BUSD"  
			"deductedAmount" :  NumberString , // "1"  
			"targetAsset" :  string , // "USDC"  
			"targetAmount" :  NumberString , // "1"  
			"status" :  string , // "S"  
			"accountType" :  string , // "MAIN" 
			},{ 
			"tranId" :  number , // 118263598801  
			"type" :  number , // 244  
			"time" :  number , // 1664442061000  
			"deductedAsset" :  string , // "BUSD"  
			"deductedAmount" :  NumberString , // "1"  
			"targetAsset" :  string , // "USDC"  
			"targetAmount" :  NumberString , // "1"  
			"status" :  string , // "S"  
			"accountType" :  string , // "MAIN" 
			},{ 
			"tranId" :  number , // 118263407119  
			"type" :  number , // 244  
			"time" :  number , // 1664441820000  
			"deductedAsset" :  string , // "BUSD"  
			"deductedAmount" :  NumberString , // "1"  
			"targetAsset" :  string , // "USDC"  
			"targetAmount" :  NumberString , // "1"  
			"status" :  string , // "S"  
			"accountType" :  string , // "MAIN" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-cloud-mining-payment-and-refund-history-user_data

GetCloudMiningpaymentandrefundhistory = () => {
	const name = "Get Cloud-Mining payment and refund history (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 600,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage",
	}
	// Name Type Mandatory Description
	type params = {
		// The transaction id
		tranId? : LONG
		// The unique flag
		clientTranId? : STRING
		// If it is blank, we will query all assets
		asset? : STRING
		// inclusive, unit: ms
		startTime : LONG
		// exclusive, unit: ms
		endTime : LONG
		// current page, default 1, the min value is 1
		current? : INTEGER
		// page size, default 10, the max value is 100
		size? : INTEGER
	}
	type req = {
	"total" :  number , // 5  
	"rows" :[	
	 {
	 "createTime" :  number , // 1667880112000  
	 "tranId" :  number , // 121230610120  
	 "type" :  number , // 248  
	 "asset" :  string , // "USDT"  
	 "amount" :  NumberString , // "25.0068"  
	 "status" :  string , // "S" 
			},
		| {
	 "createTime" :  number , // 1666776366000  
	 "tranId" :  number , // 119991507468  
	 "type" :  number , // 249  
	 "asset" :  string , // "USDT"  
	 "amount" :  NumberString , // "0.027"  
	 "status" :  string , // "S" 
			},
		| {
	 "createTime" :  number , // 1666764505000  
	 "tranId" :  number , // 119977966327  
	 "type" :  number , // 248  
	 "asset" :  string , // "USDT"  
	 "amount" :  NumberString , // "0.027"  
	 "status" :  string , // "S" 
			},
		| {
	 "createTime" :  number , // 1666758189000  
	 "tranId" :  number , // 119973601721  
	 "type" :  number , // 248  
	 "asset" :  string , // "USDT"  
	 "amount" :  NumberString , // "0.018"  
	 "status" :  string , // "S" 
			},
		| {
	 "createTime" :  number , // 1666757278000  
	 "tranId" :  number , // 119973028551  
	 "type" :  number , // 248  
	 "asset" :  string , // "USDT"  
	 "amount" :  NumberString , // "0.018"  
	 "status" :  string , // "S" 
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-api-key-permission-user_data

GetAPIKeyPermission = () => {
	const name = "Get API Key Permission (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/account/apiRestrictions",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"ipRestrict" :  boolean , // false  
	"createTime" :  number , // 1623840271000  
	"enableWithdrawals" :  boolean , // false  // This option allows you to withdraw via API. You must apply the IP Access Restriction filter in order to enable withdrawals
	 
	"enableInternalTransfer" :  boolean , // true  // This option authorizes this key to transfer funds between your master account and your sub account instantly
	 
	"permitsUniversalTransfer" :  boolean , // true  // Authorizes this key to be used for a dedicated universal transfer API to transfer multiple supported currencies. Each business's own transfer API rights are not affected by this authorization
	 
	"enableVanillaOptions" :  boolean , // false  //  Authorizes this key to Vanilla options trading
	 
	"enableReading" :  boolean , // true  
	"enableFutures" :  boolean , // false  //  API Key created before your futures account opened does not support futures API service
	 
	"enableMargin" :  boolean , // false  //  This option can be adjusted after the Cross Margin account transfer is completed
	 
	"enableSpotAndMarginTrading" :  boolean , // false  // Spot and margin trading
	 
	"tradingAuthorityExpirationTime" :  number , // 1628985600000 // Expiration time for spot and margin trading permission 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-auto-converting-stable-coins-user_data

Queryautoconvertingstablecoins = () => {
	const name = "Query auto-converting stable coins (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 600,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/capital/contract/convertible-coins",
	}
	type req = {
	"convertEnabled" :  boolean , // true  
	"coins" : [	
	  string , // "USDC" 
	 	
	  string , // "USDP" 
	 	
	  string , // "TUSD"	
	 
		],
	"exchangeRates" : {
		"USDC" :  NumberString , // "1"  
		"TUSD" :  NumberString , // "1"  
		"USDP" :  NumberString , // "1" 
		
		}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#switch-on-off-busd-and-stable-coins-conversion-user_data

SwitchonoffBUSDandstablecoinsconversion = () => {
	const name = "Switch on/off BUSD and stable coins conversion (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 600,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/capital/contract/convertible-coins",
	}
	// Name Type Mandatory Description
	type params = {
		// Must be USDC, USDP or TUSD
		coin : STRING
		// true: turn on the auto-conversion. false: turn off the auto-conversion
		enable : BOOLEAN
	}
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#one-click-arrival-deposit-apply-for-expired-address-deposit-user_data

Oneclickarrivaldepositapply = () => {
	const name = "One click arrival deposit apply (for expired address deposit)"
	const nameType = "for expired address deposit"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/capital/deposit/credit-apply",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Deposit record Id, priority use
		depositId? : LONG
		// Deposit txId, used when depositId is not specified
		txId? : STRING
		// Sub-accountId of Cloud user
		subAccountId? : LONG
		// Sub-userId of parent user
		subUserId? : LONG
	}
	type req = {
	"code" :  NumberString , // "000000"  
	"message" :  string , // "success"  
	"data" :  boolean , // true  
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#create-a-virtual-sub-account-for-master-account

CreateaVirtualSubaccount = () => {
	const name = "Create a Virtual Sub-account(For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/sub-account/virtualSubAccount",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Please input a string. We will create a virtual email using that string for you to register
		subAccountString : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"email" :  string , // "addsdd_virtual@aasaixwqnoemail.com" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-sub-account-list-for-master-account

QuerySubaccountList = () => {
	const name = "Query Sub-account List (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/sub-account/list",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		email? : STRING
		// true or false
		isFreeze? : STRING
		// Default value: 1
		page? : INT
		// Default value: 1, Max value: 200
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"subAccounts" :[	
	 {
			"email" :  string , // "testsub@gmail.com"  
			"isFreeze" :  boolean , // false  
			"createTime" :  number , // 1544433328000  
			"isManagedSubAccount" :  boolean , // false  
			"isAssetManagementSubAccount" :  boolean , // false 
			
			},
		| {
			"email" :  string , // "virtual@oxebmvfonoemail.com"  
			"isFreeze" :  boolean , // false  
			"createTime" :  number , // 1544433328000  
			"isManagedSubAccount" :  boolean , // false  
			"isAssetManagementSubAccount" :  boolean , // false 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-sub-account-spot-asset-transfer-history-for-master-account

QuerySubaccountSpotAssetTransferHistory = () => {
	const name = "Query Sub-account Spot Asset Transfer History (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/sub-account/sub/transfer/history",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		fromEmail? : STRING
		toEmail? : STRING
		startTime? : LONG
		endTime? : LONG
		// Default value: 1
		page? : INT
		// Default value: 500
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"from" :  string , // "aaa@test.com"  
		"to" :  string , // "bbb@test.com"  
		"asset" :  string , // "BTC"  
		"qty" :  NumberString , // "10"  
		"status" :  string , // "SUCCESS"  
		"tranId" :  number , // 6489943656  
		"time" :  number , // 1544433328000 
		
		},
	| {
		"from" :  string , // "bbb@test.com"  
		"to" :  string , // "ccc@test.com"  
		"asset" :  string , // "ETH"  
		"qty" :  NumberString , // "2"  
		"status" :  string , // "SUCCESS"  
		"tranId" :  number , // 6489938713  
		"time" :  number , // 1544433328000 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-sub-account-futures-asset-transfer-history-for-master-account

QuerySubaccountFuturesAssetTransferHistory = () => {
	const name = "Query Sub-account Futures Asset Transfer History (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/sub-account/futures/internalTransfer",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		email : STRING
		// 1:USDT-margined Futures，2: Coin-margined Futures
		futuresType : LONG
		// Default return the history with in 100 days
		startTime? : LONG
		// Default return the history with in 100 days
		endTime? : LONG
		// Default value: 1
		page? : INT
		// Default value: 50, Max value: 500
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"success" :  boolean , // true  
	"futuresType" :  number , // 2  
	"transfers" :[	
	 {
			"from" :  string , // "aaa@test.com"  
			"to" :  string , // "bbb@test.com"  
			"asset" :  string , // "BTC"  
			"qty" :  NumberString , // "1"  
			"tranId" :  number , // 11897001102  
			"time" :  number , // 1544433328000 
			
			},
		| {
			"from" :  string , // "bbb@test.com"  
			"to" :  string , // "ccc@test.com"  
			"asset" :  string , // "ETH"  
			"qty" :  NumberString , // "2"  
			"tranId" :  number , // 11631474902  
			"time" :  number , // 1544433328000 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#sub-account-futures-asset-transfer-for-master-account

SubaccountFuturesAssetTransfer = () => {
	const name = "Sub-account Futures Asset Transfer (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/sub-account/futures/internalTransfer",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Sender email
		fromEmail : STRING
		// Recipient email
		toEmail : STRING
		// 1:USDT-margined Futures，2: Coin-margined Futures
		futuresType : LONG
		asset : STRING
		amount : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"success" :  boolean , // true  
	"txnId" :  NumberString , // "2934662589" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-sub-account-assets-for-master-account

QuerySubaccountAssets = () => {
	const name = "Query Sub-account Assets (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "UID",
			data : 60,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v3/sub-account/assets",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Sub account email
		email : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"balances" :[	
	 {
			"asset" :  string , // "ADA"  
			"free" :  number , // 10000  
			"locked" :  number , // 0 
			
			},
		| {
			"asset" :  string , // "BNB"  
			"free" :  number , // 10003  
			"locked" :  number , // 0 
			
			},
		| {
			"asset" :  string , // "BTC"  
			"free" :  number , // 11467.6399  
			"locked" :  number , // 0 
			
			},
		| {
			"asset" :  string , // "ETH"  
			"free" :  number , // 10004.995  
			"locked" :  number , // 0 
			
			},
		| {
			"asset" :  string , // "USDT"  
			"free" :  number , // 11652.14213  
			"locked" :  number , // 0 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-sub-account-spot-assets-summary-for-master-account

QuerySubaccountSpotAssetsSummary = () => {
	const name = "Query Sub-account Spot Assets Summary (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// Sub account email
		email? : STRING
		// default 1
		page? : LONG
		// default 10, max 20
		size? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"totalCount" :  number , // 2  
	"masterAccountTotalAsset" :  NumberString , // "0.23231201"  
	"spotSubUserAssetBtcVoList" :[	
	 {
			"email" :  string , // "sub123@test.com"  
			"totalAsset" :  NumberString , // "9999.00000000" 
			
			},
		| {
			"email" :  string , // "test456@test.com"  
			"totalAsset" :  NumberString , // "0.00000000" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-sub-account-deposit-address-for-master-account

GetSubaccountDepositAddress = () => {
	const name = "Get Sub-account Deposit Address (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/capital/deposit/subAddress",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Sub account email
		email : STRING
		coin : STRING
		network? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"address" :  string , // "TDunhSa7jkTNuKrusUTU1MUHtqXoBPKETV"  
	"coin" :  string , // "USDT"  
	"tag" :  NumberString , // ""  
	"url" :  string , // "https://tronscan.org/#/address/TDunhSa7jkTNuKrusUTU1MUHtqXoBPKETV" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-sub-account-deposit-history-for-master-account

GetSubaccountDepositHistory = () => {
	const name = "Get Sub-account Deposit History (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/capital/deposit/subHisrec",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Sub account email
		email : STRING
		coin? : STRING
		// 0(0:pending,6: credited but cannot withdraw,7:Wrong Deposit,8:Waiting User confirm,1:success)
		status? : INT
		startTime? : LONG
		endTime? : LONG
		limit? : INT
		// default:0
		offset? : INT
		recvWindow? : LONG
		timestamp : LONG
		txId? : STRING
	}
	type req = [
	 {
		"id" :  NumberString , // "769800519366885376"  
		"amount" :  NumberString , // "0.001"  
		"coin" :  string , // "BNB"  
		"network" :  string , // "BNB"  
		"status" :  number , // 0  
		"address" :  string , // "bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23"  
		"addressTag" :  NumberString , // "101764890"  
		"txId" :  string , // "98A3EA560C6B3336D348B6C83F0F95ECE4F1F5919E94BD006E5BF3BF264FACFC"  
		"insertTime" :  number , // 1661493146000  
		"transferType" :  number , // 0  
		"confirmTimes" :  string , // "1/1"  
		"unlockConfirm" :  number , // 0  
		"walletType" :  number , // 0 
		
		},
	| {
		"id" :  NumberString , // "769754833590042625"  
		"amount" :  NumberString , // "0.50000000"  
		"coin" :  string , // "IOTA"  
		"network" :  string , // "IOTA"  
		"status" :  number , // 1  
		"address" :  string , // "SIZ9VLMHWATXKV99LH99CIGFJFUMLEHGWVZVNNZXRJJVWBPHYWPPBOSDORZ9EQSHCZAMPVAPGFYQAUUV9DROOXJLNW"  
		"addressTag" :  NumberString , // ""  
		"txId" :  string , // "ESBFVQUTPIWQNJSPXFNHNYHSQNTGKRVKPRABQWTAXCDWOAKDKYWPTVG9BGXNVNKTLEJGESAVXIKIZ9999"  
		"insertTime" :  number , // 1599620082000  
		"transferType" :  number , // 0  
		"confirmTimes" :  string , // "1/1"  
		"unlockConfirm" :  number , // 0  
		"walletType" :  number , // 0 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-sub-account-39-s-status-on-margin-futures-for-master-account

GetSubaccountsStatusonMarginFutures = () => {
	const name = "Get Sub-accounts Status on Margin/Futures (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/sub-account/status",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		email? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"email" :  string , // "123@test.com"  // user email
	 
		"isSubUserEnabled" :  boolean , // true  // true or false
	 
		"isUserActive" :  boolean , // true  // true or false
	 
		"insertTime" :  number , // 1570791523523  // sub account create time
	 
		"isMarginEnabled" :  boolean , // true  // true or false for margin
	 
		"isFutureEnabled" :  boolean , // true  // true or false for futures.
	 
		"mobile" :  number , // 1570791523523 // user mobile number 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#enable-margin-for-sub-account-for-master-account

EnableMarginforSubaccount = () => {
	const name = "Enable Margin for Sub-account (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/sub-account/margin/enable",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		email : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"email" :  string , // "123@test.com"  
	"isMarginEnabled" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-detail-on-sub-account-39-s-margin-account-for-master-account

GetDetailonSubaccountsMarginAccount = () => {
	const name = "Get Detail on Sub-accounts Margin Account (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/sub-account/margin/account",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		email : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"email" :  string , // "123@test.com"  
	"marginLevel" :  NumberString , // "11.64405625"  
	"totalAssetOfBtc" :  NumberString , // "6.82728457"  
	"totalLiabilityOfBtc" :  NumberString , // "0.58633215"  
	"totalNetAssetOfBtc" :  NumberString , // "6.24095242"  
	"marginTradeCoeffVo" : 
	{
		"forceLiquidationBar" :  NumberString , // "1.10000000"  // Liquidation margin ratio
	 
		"marginCallBar" :  NumberString , // "1.50000000"  // Margin call margin ratio
	 
		"normalBar" :  NumberString , // "2.00000000" // Initial margin ratio 
		
		},
	"marginUserAssetVoList" : | [	
	 | {
			"asset" :  string , // "BTC"  
			"borrowed" :  NumberString , // "0.00000000"  
			"free" :  NumberString , // "0.00499500"  
			"interest" :  NumberString , // "0.00000000"  
			"locked" :  NumberString , // "0.00000000"  
			"netAsset" :  NumberString , // "0.00499500" 
			
			},
		| {
			"asset" :  string , // "BNB"  
			"borrowed" :  NumberString , // "201.66666672"  
			"free" :  NumberString , // "2346.50000000"  
			"interest" :  NumberString , // "0.00000000"  
			"locked" :  NumberString , // "0.00000000"  
			"netAsset" :  NumberString , // "2144.83333328" 
			
			},
		| {
			"asset" :  string , // "ETH"  
			"borrowed" :  NumberString , // "0.00000000"  
			"free" :  NumberString , // "0.00000000"  
			"interest" :  NumberString , // "0.00000000"  
			"locked" :  NumberString , // "0.00000000"  
			"netAsset" :  NumberString , // "0.00000000" 
			
			},
		| {
			"asset" :  string , // "USDT"  
			"borrowed" :  NumberString , // "0.00000000"  
			"free" :  NumberString , // "0.00000000"  
			"interest" :  NumberString , // "0.00000000"  
			"locked" :  NumberString , // "0.00000000"  
			"netAsset" :  NumberString , // "0.00000000" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-summary-of-sub-account-39-s-margin-account-for-master-account

GetSummaryofSubaccountsMarginAccount = () => {
	const name = "Get Summary of Sub-accounts Margin Account (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"totalAssetOfBtc" :  NumberString , // "4.33333333"  
	"totalLiabilityOfBtc" :  NumberString , // "2.11111112"  
	"totalNetAssetOfBtc" :  NumberString , // "2.22222221"  
	"subAccountList" :[	
	 {
			"email" :  string , // "123@test.com"  
			"totalAssetOfBtc" :  NumberString , // "2.11111111"  
			"totalLiabilityOfBtc" :  NumberString , // "1.11111111"  
			"totalNetAssetOfBtc" :  NumberString , // "1.00000000" 
			
			},
		| {
			"email" :  string , // "345@test.com"  
			"totalAssetOfBtc" :  NumberString , // "2.22222222"  
			"totalLiabilityOfBtc" :  NumberString , // "1.00000001"  
			"totalNetAssetOfBtc" :  NumberString , // "1.22222221" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#enable-futures-for-sub-account-for-master-account

EnableFuturesforSubaccount = () => {
	const name = "Enable Futures for Sub-account (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/sub-account/futures/enable",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		email : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"email" :  string , // "123@test.com"  
	"isFuturesEnabled" :  boolean , // true // true or false 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-detail-on-sub-account-39-s-futures-account-for-master-account

GetDetailonSubaccountsFuturesAccount = () => {
	const name = "Get Detail on Sub-accounts Futures Account (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	// Name Type Mandatory Description
	type params = {
		email : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"email" :  string , // "abc@test.com"  
	"asset" :  string , // "USDT"  
	"assets" :[	
	 {
			"asset" :  string , // "USDT"  
			"initialMargin" :  NumberString , // "0.00000000"  
			"maintenanceMargin" :  NumberString , // "0.00000000"  
			"marginBalance" :  NumberString , // "0.88308000"  
			"maxWithdrawAmount" :  NumberString , // "0.88308000"  
			"openOrderInitialMargin" :  NumberString , // "0.00000000"  
			"positionInitialMargin" :  NumberString , // "0.00000000"  
			"unrealizedProfit" :  NumberString , // "0.00000000"  
			"walletBalance" :  NumberString , // "0.88308000" 
			
			}
		
		],
	"canDeposit" :  boolean , // true  
	"canTrade" :  boolean , // true  
	"canWithdraw" :  boolean , // true  
	"feeTier" :  number , // 2  
	"maxWithdrawAmount" :  NumberString , // "0.88308000"  
	"totalInitialMargin" :  NumberString , // "0.00000000"  
	"totalMaintenanceMargin" :  NumberString , // "0.00000000"  
	"totalMarginBalance" :  NumberString , // "0.88308000"  
	"totalOpenOrderInitialMargin" :  NumberString , // "0.00000000"  
	"totalPositionInitialMargin" :  NumberString , // "0.00000000"  
	"totalUnrealizedProfit" :  NumberString , // "0.00000000"  
	"totalWalletBalance" :  NumberString , // "0.88308000"  
	"updateTime" :  number , // 1576756674610 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-summary-of-sub-account-39-s-futures-account-for-master-account

GetSummaryofSubaccountsFuturesAccount = () => {
	const name = "Get Summary of Sub-accounts Futures Account (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"totalInitialMargin" :  NumberString , // "9.83137400"  
	"totalMaintenanceMargin" :  NumberString , // "0.41568700"  
	"totalMarginBalance" :  NumberString , // "23.03235621"  
	"totalOpenOrderInitialMargin" :  NumberString , // "9.00000000"  
	"totalPositionInitialMargin" :  NumberString , // "0.83137400"  
	"totalUnrealizedProfit" :  NumberString , // "0.03219710"  
	"totalWalletBalance" :  NumberString , // "22.15879444"  
	"asset" :  string , // "USD"  // The sum of BUSD and USDT
	 
	"subAccountList" :[	
	 {
			"email" :  string , // "123@test.com"  
			"totalInitialMargin" :  NumberString , // "9.00000000"  
			"totalMaintenanceMargin" :  NumberString , // "0.00000000"  
			"totalMarginBalance" :  NumberString , // "22.12659734"  
			"totalOpenOrderInitialMargin" :  NumberString , // "9.00000000"  
			"totalPositionInitialMargin" :  NumberString , // "0.00000000"  
			"totalUnrealizedProfit" :  NumberString , // "0.00000000"  
			"totalWalletBalance" :  NumberString , // "22.12659734"  
			"asset" :  string , // "USD" //The sum of BUSD and USDT 
			
			},
		| {
			"email" :  string , // "345@test.com"  
			"totalInitialMargin" :  NumberString , // "0.83137400"  
			"totalMaintenanceMargin" :  NumberString , // "0.41568700"  
			"totalMarginBalance" :  NumberString , // "0.90575887"  
			"totalOpenOrderInitialMargin" :  NumberString , // "0.00000000"  
			"totalPositionInitialMargin" :  NumberString , // "0.83137400"  
			"totalUnrealizedProfit" :  NumberString , // "0.03219710"  
			"totalWalletBalance" :  NumberString , // "0.87356177"  
			"asset" :  string , // "USD" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-futures-position-risk-of-sub-account-for-master-account

GetFuturesPositionRiskofSubaccount = () => {
	const name = "Get Futures Position-Risk of Sub-account (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	// Name Type Mandatory Description
	type params = {
		email : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"entryPrice" :  NumberString , // "9975.12000"  
		"leverage" :  NumberString , // "50"  // current initial leverage
	 
		"maxNotional" :  NumberString , // "1000000"  // notional value limit of current initial leverage
	 
		"liquidationPrice" :  NumberString , // "7963.54"  
		"markPrice" :  NumberString , // "9973.50770517"  
		"positionAmount" :  NumberString , // "0.010"  
		"symbol" :  string , // "BTCUSDT"  
		"unrealizedProfit" :  NumberString , // "-0.01612295" 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#futures-transfer-for-sub-account-for-master-account

FuturesTransferforSubaccount = () => {
	const name = "Futures Transfer for Sub-account (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		email : STRING
		// The asset being transferred, e.g., USDT
		asset : STRING
		// The amount to be transferred
		amount : DECIMAL
		// 1: transfer from subaccount&#39;s spot account to its USDT-margined futures account 2: transfer from subaccount&#39;s USDT-margined futures account to its spot account 3: transfer from subaccount&#39;s spot account to its COIN-margined futures account 4:transfer from subaccount&#39;s COIN-margined futures account to its spot account
		type : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"txnId" :  NumberString , // "2966662589" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#margin-transfer-for-sub-account-for-master-account

MarginTransferforSubaccount = () => {
	const name = "Margin Transfer for Sub-account (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		email : STRING
		// The asset being transferred, e.g., BTC
		asset : STRING
		// The amount to be transferred
		amount : DECIMAL
		// 1: transfer from subaccount&#39;s  spot account to margin account 2: transfer from subaccount&#39;s margin account to its spot account
		type : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"txnId" :  NumberString , // "2966662589" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#transfer-to-sub-account-of-same-master-for-sub-account

TransfertoSubaccountofSameMaster = () => {
	const name = "Transfer to Sub-account of Same Master (For Sub-account)"
	const nameType = "For Sub-account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		toEmail : STRING
		asset : STRING
		amount : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"txnId" :  NumberString , // "2966662589" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#transfer-to-master-for-sub-account

TransfertoMaster = () => {
	const name = "Transfer to Master (For Sub-account)"
	const nameType = "For Sub-account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		asset : STRING
		amount : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"txnId" :  NumberString , // "2966662589" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#sub-account-transfer-history-for-sub-account

SubaccountTransferHistory = () => {
	const name = "Sub-account Transfer History (For Sub-account)"
	const nameType = "For Sub-account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// If not sent, result of all assets will be returned
		asset? : STRING
		// 1: transfer in, 2: transfer out
		type? : INT
		startTime? : LONG
		endTime? : LONG
		// Default 500
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"counterParty" :  string , // "master"  
		"email" :  string , // "master@test.com"  
		"type" :  number , // 1  // 1 for transfer in, 2 for transfer out
	 
		"asset" :  string , // "BTC"  
		"qty" :  NumberString , // "1"  
		"fromAccountType" :  string , // "SPOT"  
		"toAccountType" :  string , // "SPOT"  
		"status" :  string , // "SUCCESS"  // status: PROCESS / SUCCESS / FAILURE
	 
		"tranId" :  number , // 11798835829  
		"time" :  number , // 1544433325000 
		
		},
	| {
		"counterParty" :  string , // "subAccount"  
		"email" :  string , // "sub2@test.com"  
		"type" :  number , // 1  
		"asset" :  string , // "ETH"  
		"qty" :  NumberString , // "2"  
		"fromAccountType" :  string , // "SPOT"  
		"toAccountType" :  string , // "SPOT"  
		"status" :  string , // "SUCCESS"  
		"tranId" :  number , // 11798829519  
		"time" :  number , // 1544433326000 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#universal-transfer-for-master-account

UniversalTransfer = () => {
	const name = "Universal Transfer (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		fromEmail? : STRING
		toEmail? : STRING
		// &quot;SPOT&quot;,&quot;USDT_FUTURE&quot;,&quot;COIN_FUTURE&quot;,&quot;MARGIN&quot;(Cross),&quot;ISOLATED_MARGIN&quot;
		fromAccountType : STRING
		// &quot;SPOT&quot;,&quot;USDT_FUTURE&quot;,&quot;COIN_FUTURE&quot;,&quot;MARGIN&quot;(Cross),&quot;ISOLATED_MARGIN&quot;
		toAccountType : STRING
		// Must be unique
		clientTranId? : STRING
		// Only supported under ISOLATED_MARGIN type
		symbol? : STRING
		asset : STRING
		amount : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"tranId" :  number , // 11945860693  
	"clientTranId" :  string , // "test" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-universal-transfer-history-for-master-account

QueryUniversalTransferHistory = () => {
	const name = "Query Universal Transfer History (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		fromEmail? : STRING
		toEmail? : STRING
		clientTranId? : STRING
		startTime? : LONG
		endTime? : LONG
		// Default 1
		page? : INT
		// Default 500, Max 500
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"result" : [	
	 {
			"tranId" :  number , // 92275823339  
			"fromEmail" :  string , // "abctest@gmail.com"  
			"toEmail" :  string , // "deftest@gmail.com"  
			"asset" :  string , // "BNB"  
			"amount" :  NumberString , // "0.01"  
			"createTimeStamp" :  number , // 1640317374000  
			"fromAccountType" :  string , // "USDT_FUTURE"  
			"toAccountType" :  string , // "SPOT"  
			"status" :  string , // "SUCCESS"  
			"clientTranId" :  string , // "test" 
			
			}
		
		],
	"totalCount" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-detail-on-sub-account-39-s-futures-account-v2-for-master-account

GetDetailonSubaccountsFuturesAccountV2 = () => {
	const name = "Get Detail on Sub-accounts Futures Account V2 (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		email : STRING
		// 1:USDT Margined Futures, 2:COIN Margined Futures
		futuresType : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"futureAccountResp" : {
		"email" :  string , // "abc@test.com"  
		"assets" :[		
	 {
				"asset" :  string , // "USDT"  
				"initialMargin" :  NumberString , // "0.00000000"  
				"maintenanceMargin" :  NumberString , // "0.00000000"  
				"marginBalance" :  NumberString , // "0.88308000"  
				"maxWithdrawAmount" :  NumberString , // "0.88308000"  
				"openOrderInitialMargin" :  NumberString , // "0.00000000"  
				"positionInitialMargin" :  NumberString , // "0.00000000"  
				"unrealizedProfit" :  NumberString , // "0.00000000"  
				"walletBalance" :  NumberString , // "0.88308000" 
				
				}
			
			],
		"canDeposit" :  boolean , // true  
		"canTrade" :  boolean , // true  
		"canWithdraw" :  boolean , // true  
		"feeTier" :  number , // 2  
		"maxWithdrawAmount" :  NumberString , // "0.88308000"  
		"totalInitialMargin" :  NumberString , // "0.00000000"  
		"totalMaintenanceMargin" :  NumberString , // "0.00000000"  
		"totalMarginBalance" :  NumberString , // "0.88308000"  
		"totalOpenOrderInitialMargin" :  NumberString , // "0.00000000"  
		"totalPositionInitialMargin" :  NumberString , // "0.00000000"  
		"totalUnrealizedProfit" :  NumberString , // "0.00000000"  
		"totalWalletBalance" :  NumberString , // "0.88308000"  
		"updateTime" :  number , // 1576756674610 
		
		}
	
	}
	| {
	"deliveryAccountResp" : {
		"email" :  string , // "abc@test.com"  
		"assets" :[		
	 {
				"asset" :  string , // "BTC"  
				"initialMargin" :  NumberString , // "0.00000000"  
				"maintenanceMargin" :  NumberString , // "0.00000000"  
				"marginBalance" :  NumberString , // "0.88308000"  
				"maxWithdrawAmount" :  NumberString , // "0.88308000"  
				"openOrderInitialMargin" :  NumberString , // "0.00000000"  
				"positionInitialMargin" :  NumberString , // "0.00000000"  
				"unrealizedProfit" :  NumberString , // "0.00000000"  
				"walletBalance" :  NumberString , // "0.88308000" 
				
				}
			
			],
		"canDeposit" :  boolean , // true  
		"canTrade" :  boolean , // true  
		"canWithdraw" :  boolean , // true  
		"feeTier" :  number , // 2  
		"updateTime" :  number , // 1598959682001 
		
		}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-summary-of-sub-account-39-s-futures-account-v2-for-master-account

GetSummaryofSubaccountsFuturesAccountV2 = () => {
	const name = "Get Summary of Sub-accounts Futures Account V2 (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// 1:USDT Margined Futures, 2:COIN Margined Futures
		futuresType : INT
		// default:1
		page? : INT
		// default:10, max:20
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"futureAccountSummaryResp" : {
		"totalInitialMargin" :  NumberString , // "9.83137400"  
		"totalMaintenanceMargin" :  NumberString , // "0.41568700"  
		"totalMarginBalance" :  NumberString , // "23.03235621"  
		"totalOpenOrderInitialMargin" :  NumberString , // "9.00000000"  
		"totalPositionInitialMargin" :  NumberString , // "0.83137400"  
		"totalUnrealizedProfit" :  NumberString , // "0.03219710"  
		"totalWalletBalance" :  NumberString , // "22.15879444"  
		"asset" :  string , // "USD"  //The sum of BUSD and USDT
	 
		"subAccountList" :[		
	 {
				"email" :  string , // "123@test.com"  
				"totalInitialMargin" :  NumberString , // "9.00000000"  
				"totalMaintenanceMargin" :  NumberString , // "0.00000000"  
				"totalMarginBalance" :  NumberString , // "22.12659734"  
				"totalOpenOrderInitialMargin" :  NumberString , // "9.00000000"  
				"totalPositionInitialMargin" :  NumberString , // "0.00000000"  
				"totalUnrealizedProfit" :  NumberString , // "0.00000000"  
				"totalWalletBalance" :  NumberString , // "22.12659734"  
				"asset" :  string , // "USD" //The sum of BUSD and USDT 
				
				},
			| {
				"email" :  string , // "345@test.com"  
				"totalInitialMargin" :  NumberString , // "0.83137400"  
				"totalMaintenanceMargin" :  NumberString , // "0.41568700"  
				"totalMarginBalance" :  NumberString , // "0.90575887"  
				"totalOpenOrderInitialMargin" :  NumberString , // "0.00000000"  
				"totalPositionInitialMargin" :  NumberString , // "0.83137400"  
				"totalUnrealizedProfit" :  NumberString , // "0.03219710"  
				"totalWalletBalance" :  NumberString , // "0.87356177"  
				"asset" :  string , // "USD" 
				
				}
			
			]
		
		}
	
	}
	| {
	"deliveryAccountSummaryResp" : {
		"totalMarginBalanceOfBTC" :  NumberString , // "25.03221121"  
		"totalUnrealizedProfitOfBTC" :  NumberString , // "0.12233410"  
		"totalWalletBalanceOfBTC" :  NumberString , // "22.15879444"  
		"asset" :  string , // "BTC"  
		"subAccountList" :[		
	 {
				"email" :  string , // "123@test.com"  
				"totalMarginBalance" :  NumberString , // "22.12659734"  
				"totalUnrealizedProfit" :  NumberString , // "0.00000000"  
				"totalWalletBalance" :  NumberString , // "22.12659734"  
				"asset" :  string , // "BTC" 
				
				},
			| {
				"email" :  string , // "345@test.com"  
				"totalMarginBalance" :  NumberString , // "0.90575887"  
				"totalUnrealizedProfit" :  NumberString , // "0.03219710"  
				"totalWalletBalance" :  NumberString , // "0.87356177"  
				"asset" :  string , // "BTC" 
				
				}
			
			]
		
		}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-futures-position-risk-of-sub-account-v2-for-master-account

GetFuturesPositionRiskofSubaccountV2 = () => {
	const name = "Get Futures Position-Risk of Sub-account V2 (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		email : STRING
		// 1:USDT Margined Futures, 2:COIN Margined Futures
		futuresType : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"futurePositionRiskVos" : [	
	 {
			"entryPrice" :  NumberString , // "9975.12000"  
			"leverage" :  NumberString , // "50"  // current initial leverage
	 
			"maxNotional" :  NumberString , // "1000000"  // notional value limit of current initial leverage
	 
			"liquidationPrice" :  NumberString , // "7963.54"  
			"markPrice" :  NumberString , // "9973.50770517"  
			"positionAmount" :  NumberString , // "0.010"  
			"symbol" :  string , // "BTCUSDT"  
			"unrealizedProfit" :  NumberString , // "-0.01612295" 
			
			}
		
		]
	
	}
	| {
	"deliveryPositionRiskVos" : [	
	 {
			"entryPrice" :  NumberString , // "9975.12000"  
			"markPrice" :  NumberString , // "9973.50770517"  
			"leverage" :  NumberString , // "20"  
			"isolated" :  string , // "false"  
			"isolatedWallet" :  NumberString , // "9973.50770517"  
			"isolatedMargin" :  NumberString , // "0.00000000"  
			"isAutoAddMargin" :  string , // "false"  
			"positionSide" :  string , // "BOTH"  
			"positionAmount" :  NumberString , // "1.230"  
			"symbol" :  string , // "BTCUSD_201225"  
			"unrealizedProfit" :  NumberString , // "-0.01612295" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#enable-leverage-token-for-sub-account-for-master-account

EnableLeverageTokenforSubaccount = () => {
	const name = "Enable Leverage Token for Sub-account  (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		email : STRING
		// Only true for now
		enableBlvt : BOOLEAN
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"email" :  string , // "123@test.com"  
	"enableBlvt" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-ip-restriction-for-a-sub-account-api-key-for-master-account

GetIPRestrictionforaSubaccountAPIKey = () => {
	const name = "Get IP Restriction for a Sub-account API Key (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/sub-account/subAccountApi/ipRestriction",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		email : STRING
		subAccountApiKey : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"ipRestrict" :  string , // "true"  
	"ipList" : [	
	  string , // "69.210.67.14" 
	 	
	  string , // "8.34.21.10"	
	 
		],
	"updateTime" :  number , // 1636371437000  
	"apiKey" :  string , // "k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#delete-ip-list-for-a-sub-account-api-key-for-master-account

DeleteIPListForaSubaccountAPIKey = () => {
	const name = "Delete IP List For a Sub-account API Key (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		url : "DELETE/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		email : STRING
		subAccountApiKey : STRING
		// Can be added in batches, separated by commas
		ipAddress? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"ipRestrict" :  string , // "true"  
	"ipList" : [	
	  string , // "69.210.67.14" 
	 	
	  string , // "8.34.21.10"	
	 
		],
	"updateTime" :  number , // 1636371437000  
	"apiKey" :  string , // "k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#add-ip-restriction-for-sub-account-api-key-for-master-account

AddIPRestrictionforSubAccountAPIkey = () => {
	const name = "Add IP Restriction for Sub-Account API key (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v2/sub-account/subAccountApi/ipRestriction",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Sub-account email
		email : STRING
		subAccountApiKey : STRING
		// IP Restriction status. 1 = IP Unrestricted. 2 = Restrict access to trusted IPs only.
		status : STRING
		// Insert static IP in batch, separated by commas.
		ipAddress? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"status" :  NumberString , // "2"  
	"ipList" : [	
	  string , // "69.210.67.14" 
	 	
	  string , // "8.34.21.10" 
	  //only return if you open IP restriction and input IP address.
	
		
	 
		],
	"updateTime" :  number , // 1636371437000  
	"apiKey" :  string , // "k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#deposit-assets-into-the-managed-sub-account-for-investor-master-account

DepositAssetsIntoTheManagedSubaccountFA = () => {
	const name = "Deposit Assets Into The Managed Sub-account（For Investor Master Account）"
	const nameType = ""
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		toEmail : STRING
		asset : STRING
		amount : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"tranId" :  number , // 66157362489 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-managed-sub-account-asset-details-for-investor-master-account

QueryManagedSubaccountAssetDetailsFA = () => {
	const name = "Query Managed Sub-account Asset Details（For Investor Master Account）"
	const nameType = ""
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		email : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"coin" :  string , // "INJ"  
		"name" :  string , // "Injective Protocol"  
		"totalBalance" :  NumberString , // "0"  
		"availableBalance" :  NumberString , // "0"  
		"inOrder" :  NumberString , // "0"  
		"btcValue" :  NumberString , // "0" 
		
		},
	| {
		"coin" :  string , // "FILDOWN"  
		"name" :  string , // "FILDOWN"  
		"totalBalance" :  NumberString , // "0"  
		"availableBalance" :  NumberString , // "0"  
		"inOrder" :  NumberString , // "0"  
		"btcValue" :  NumberString , // "0" 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#withdrawl-assets-from-the-managed-sub-account-for-investor-master-account

WithdrawlAssetsFromTheManagedSubaccountFA = () => {
	const name = "Withdrawl Assets From The Managed Sub-account（For Investor Master Account）"
	const nameType = ""
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		fromEmail : STRING
		asset : STRING
		amount : DECIMAL
		// Withdrawals is automatically occur on the transfer date(UTC0). If a date is not selected, the withdrawal occurs right now
		transferDate? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"tranId" :  number , // 66157362489 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-managed-sub-account-snapshot-for-investor-master-account

QueryManagedSubaccountSnapshotFA = () => {
	const name = "Query Managed Sub-account Snapshot（For Investor Master Account）"
	const nameType = ""
	const wight = [{
			name : "IP",
			data : 2400,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/managed-subaccount/accountSnapshot",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		email : STRING
		// &quot;SPOT&quot;, &quot;MARGIN&quot;（cross）, &quot;FUTURES&quot;（UM）
		type : STRING
		startTime? : LONG
		endTime? : LONG
		// min 7, max 30, default 7
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"code" :  number , // 200  // 200 for success; others are error codes
	 
	"msg" :  NumberString , // ""  // error message
	 
	"snapshotVos" :[	
	 {
			"data" :{
				"balances" :[				
	 {
						"asset" :  string , // "BTC"  
						"free" :  NumberString , // "0.09905021"  
						"locked" :  NumberString , // "0.00000000" 
						
						},
					| {
						"asset" :  string , // "USDT"  
						"free" :  NumberString , // "1.89109409"  
						"locked" :  NumberString , // "0.00000000" 
						
						}
					
					],
				"totalAssetOfBtc" :  NumberString , // "0.09942700" 
				
				},
			"type" :  string , // "spot"  
			"updateTime" :  number , // 1576281599000 
			
			}
		
		]
	
	}
	| {
	"code" :  number , // 200  // 200 for success; others are error codes
	 
	"msg" :  NumberString , // ""  // error message
	 
	"snapshotVos" :[	
	 {
			"data" :{
				"marginLevel" :  NumberString , // "2748.02909813"  
				"totalAssetOfBtc" :  NumberString , // "0.00274803"  
				"totalLiabilityOfBtc" :  NumberString , // "0.00000100"  
				"totalNetAssetOfBtc" :  NumberString , // "0.00274750"  
				"userAssets" :[				
	 {
						"asset" :  string , // "XRP"  
						"borrowed" :  NumberString , // "0.00000000"  
						"free" :  NumberString , // "1.00000000"  
						"interest" :  NumberString , // "0.00000000"  
						"locked" :  NumberString , // "0.00000000"  
						"netAsset" :  NumberString , // "1.00000000" 
						
						}
					
					]
				
				},
			"type" :  string , // "margin"  
			"updateTime" :  number , // 1576281599000 
			
			}
		
		]
	
	}
	| {
	"code" :  number , // 200  // 200 for success; others are error codes
	 
	"msg" :  NumberString , // ""  // error message
	 
	"snapshotVos" :[	
	 {
			"data" :{
				"assets" :[				
	 {
						"asset" :  string , // "USDT"  
						"marginBalance" :  NumberString , // "118.99782335"  
						"walletBalance" :  NumberString , // "120.23811389" 
						
						}
					
					],
				"position"  :[				
	 | {
						"entryPrice" :  NumberString , // "7130.41000000"  
						"markPrice" :  NumberString , // "7257.66239673"  
						"positionAmt" :  NumberString , // "0.01000000"  
						"symbol" :  string , // "BTCUSDT"  
						"unRealizedProfit" :  NumberString , // "1.24029054" // Only show the value at the time of opening the position 
						
						}
					
					]
				
				},
			"type" :  string , // "futures"  
			"updateTime" :  number , // 1576281599000 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-managed-sub-account-transfer-log-for-investor-master-account-user_data

QueryManagedSubAccountTransferLog = () => {
	const name = "Query Managed Sub Account Transfer Log (For Investor Master Account)"
	const nameType = "For Investor Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// Managed Sub Account Email
		email : STRING
		// Start Time
		startTime : LONG
		// End Time (The start time and end time interval cannot exceed half a year)
		endTime : LONG
		// Page
		page : INT
		// Limit (Max: 500)
		limit : INT
		// Transfer Direction (FROM/TO)
		transfers? : STRING
		// Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)
		transferFunctionAccountType? : STRING
	}
	type req = {
	managerSubTransferHistoryVos : [	 
	 {
			fromEmail :  string , // "test_0_virtual@kq3kno9imanagedsub.com" 
			fromAccountType :  string , // "SPOT" 
			toEmail :  string , // "wdywl0lddakh@test.com" 
			toAccountType :  string , // "SPOT" 
			asset :  string , // "BNB" 
			amount :  NumberString , // "0.01" 
			scheduledData :  number , // 1679416673000 
			createTime :  number , // 1679416673000 
			status :  string , // "SUCCESS" 
			tranId :  number , // 91077779 
			
			}
	  | {
			fromEmail :  string , // "wdywl0lddakh@test.com" 
			fromAccountType :  string , // "SPOT" 
			toEmail :  string , // "test_0_virtual@kq3kno9imanagedsub.com" 
			toAccountType :  string , // "SPOT" 
			asset :  string , // "BNB" 
			amount :  NumberString , // "1" 
			scheduledData :  number , // 1679416616000 
			createTime :  number , // 1679416616000 
			status :  string , // "SUCCESS" 
			tranId :  number , // 91077676 
			
			}
		
		]
	count :  number , // 2 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-managed-sub-account-transfer-log-for-trading-team-master-account-user_data

QueryManagedSubAccountTransferLog2 = () => {
	const name = "Query Managed Sub Account Transfer Log (For Trading Team Master Account)"
	const nameType = "For Trading Team Master Account"
	const wight = [{
			name : "UID",
			data : 60,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// Managed Sub Account Email
		email : STRING
		// Start Time
		startTime : LONG
		// End Time (The start time and end time interval cannot exceed half a year)
		endTime : LONG
		// Page
		page : INT
		// Limit (Max: 500)
		limit : INT
		// Transfer Direction (FROM/TO)
		transfers? : STRING
		// Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)
		transferFunctionAccountType? : STRING
	}
	type req = {
	managerSubTransferHistoryVos : [	 
	 {
			fromEmail :  string , // "test_0_virtual@kq3kno9imanagedsub.com" 
			fromAccountType :  string , // "SPOT" 
			toEmail :  string , // "wdywl0lddakh@test.com" 
			toAccountType :  string , // "SPOT" 
			asset :  string , // "BNB" 
			amount :  NumberString , // "0.01" 
			scheduledData :  number , // 1679416673000 
			createTime :  number , // 1679416673000 
			status :  string , // "SUCCESS" 
			tranId :  number , // 91077779 
			
			}
		 | {
			fromEmail :  string , // "wdywl0lddakh@test.com" 
			fromAccountType :  string , // "SPOT" 
			toEmail :  string , // "test_0_virtual@kq3kno9imanagedsub.com" 
			toAccountType :  string , // "SPOT" 
			asset :  string , // "BNB" 
			amount :  NumberString , // "1" 
			scheduledData :  number , // 1679416616000 
			createTime :  number , // 1679416616000 
			status :  string , // "SUCCESS" 
			tranId :  number , // 91077676 
			
			}
		
		]
	count :  number , // 2 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-managed-sub-account-futures-asset-details-for-investor-master-account-user_data

QueryManagedSubaccountFuturesAssetDetailsFA = () => {
	const name = "Query Managed Sub-account Futures Asset Details（For Investor Master Account）(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 60,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// Managed Sub Account Email
		email : STRING
	}
	type req = {
	"code" :  NumberString , // "200"  
	"message" :  string , // "OK"  
	"snapshotVos" : [	
	 {
			"type" :  string , // "FUTURES"  
			"updateTime" :  number , // 1672893855394  
			"data" : {
				"assets" : [				
	 {
						"asset" :  string , // "USDT"  
						"marginBalance" :  number , // 100  
						"walletBalance" :  number , // 120 
						
						}
					
					],
				"position" : | [				
	 | {
						"symbol" :  string , // "BTCUSDT"  
						"entryPrice" :  number , // 17000  
						"markPrice" :  number , // 17000  
						"positionAmt" :  number , // 0.0001 
						
						}
					
					]
				
				}
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-managed-sub-account-margin-asset-details-for-investor-master-account-user_data

QueryManagedSubaccountMarginAssetDetails = () => {
	const name = "Query Managed Sub-account Margin Asset Details (For Investor Master Account)"
	const nameType = "For Investor Master Account"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// Managed Sub Account Email
		email : STRING
	}
	type req = {
	marginLevel :  NumberString , // "999" 
	totalAssetOfBtc :  NumberString , // "0" 
	totalLiabilityOfBtc :  NumberString , // "0" 
	totalNetAssetOfBtc :  NumberString , // "0" 
	userAssets :[	
		{
			asset :  string , // "MATIC" 
			borrowed :  NumberString , // "0" 
			free :  NumberString , // "0" 
			interest :  NumberString , // "0" 
			locked :  NumberString , // "0" 
			netAsset :  NumberString , // "0" 
			
			} 
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-sub-account-assets-for-master-account-user_data

QuerySubaccountAssets2 = () => {
	const name = "Query Sub-account Assets (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "UID",
			data : 60,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// Managed Sub Account Email
		email : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"balances" :[	
	 {
			"asset" :  string , // "ADA"  
			"free" :  NumberString , // "10000"  
			"locked" :  NumberString , // "0" 
			
			},
		| {
			"asset" :  string , // "BNB"  
			"free" :  NumberString , // "10003"  
			"locked" :  NumberString , // "0" 
			
			},
		| {
			"asset" :  string , // "BTC"  
			"free" :  NumberString , // "11467.6399"  
			"locked" :  NumberString , // "0" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-managed-sub-account-list-for-investor-user_data

QueryManagedSubaccountList = () => {
	const name = "Query Managed Sub-account List (For Investor)"
	const nameType = "For Investor"
	const wight = [{
			name : "UID",
			data : 60,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// Managed sub-account email
		email? : STRING
		// Default value: 1
		page? : INT
		// Default value: 20, Max value: 20
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	total :  number , // 3 
	managerSubUserInfoVoList : [	 
	 {
			rootUserId :  number , // 1000138475670 
			managersubUserId :  number , // 1000137842513 
			bindParentUserId :  number , // 1000138475669 
			email :  string , // "test_0_virtual@kq3kno9imanagedsub.com" 
			insertTimeStamp :  number , // 1678435149000 
			bindParentEmail :  string , // "wdyw8xsh8pey@test.com" 
			isSubUserEnabled :  boolean , // true 
			isUserActive :  boolean , // true 
			isMarginEnabled :  boolean , // false 
			isFutureEnabled :  boolean , // false 
			isSignedLVTRiskAgreement :  boolean , // false 
			
			} 
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-sub-account-transaction-statistics-for-master-account-user_data

QuerySubaccountTransactionStatistics = () => {
	const name = "Query Sub-account Transaction Statistics (For Master Account)"
	const nameType = "For Master Account"
	const wight = [{
			name : "UID",
			data : 60,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// Sub user email
		email : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"recent30BtcTotal" :  NumberString , // "0"  
	"recent30BtcFuturesTotal" :  NumberString , // "0"  
	"recent30BtcMarginTotal" :  NumberString , // "0"  
	"recent30BusdTotal" :  NumberString , // "0"  
	"recent30BusdFuturesTotal" :  NumberString , // "0"  
	"recent30BusdMarginTotal" :  NumberString , // "0"  
	"tradeInfoVos" :  number , // [] 
	
	}
	| {
	"recent30BtcTotal" :  NumberString , // "0"  
	"recent30BtcFuturesTotal" :  NumberString , // "0"  
	"recent30BtcMarginTotal" :  NumberString , // "0"  
	"recent30BusdTotal" :  NumberString , // "0"  
	"recent30BusdFuturesTotal" :  NumberString , // "0"  
	"recent30BusdMarginTotal" :  NumberString , // "0"  
	"tradeInfoVos" : [	
	 {
			"userId" :  number , // 1000138138384  
			"btc" :  number , // 0  
			"btcFutures" :  number , // 0  
			"btcMargin" :  number , // 0  
			"busd" :  number , // 0  
			"busdFutures" :  number , // 0  
			"busdMargin" :  number , // 0  
			"date" :  number , // 1676851200000 
			
			},
		| {
			"userId" :  number , // 1000138138384  
			"btc" :  number , // 0  
			"btcFutures" :  number , // 0  
			"btcMargin" :  number , // 0  
			"busd" :  number , // 0  
			"busdFutures" :  number , // 0  
			"busdMargin" :  number , // 0  
			"date" :  number , // 1677110400000 
			
			},
		| {
			"userId" :  number , // 1000138138384  
			"btc" :  number , // 0  
			"btcFutures" :  number , // 0  
			"btcMargin" :  number , // 0  
			"busd" :  number , // 0  
			"busdFutures" :  number , // 0  
			"busdMargin" :  number , // 0  
			"date" :  number , // 1677369600000 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-managed-sub-account-deposit-address-for-investor-master-account-user_data

GetManagedSubaccountDepositAddress = () => {
	const name = "Get Managed Sub-account Deposit Address (For Investor Master Account)"
	const nameType = "For Investor Master Account"
	const wight = [{
			name : "UID",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// Sub user email
		email : STRING
		coin : STRING
		// networks can be found in 
		network? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"coin" :  string , // "USDT"  
	"address" :  NumberString , // "0x206c22d833bb0bb2102da6b7c7d4c3eb14bcf73d"  
	"tag" :  NumberString , // ""  
	"url" :  string , // "https://etherscan.io/address/0x206c22d833bb0bb2102da6b7c7d4c3eb14bcf73d" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#market-data-endpoints

TestConnectivity = () => {
	const name = "Test Connectivity"
	const nameType = ""
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/ping",
		HMAC : true,
	}
	type req = {} 
	
}

//https://binance-docs.github.io/apidocs/spot/en#check-server-time

CheckServerTime = () => {
	const name = "Check Server Time"
	const nameType = ""
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/time",
	}
	type req = {
	"serverTime" :  number , // 1499827319559 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#exchange-information

ExchangeInformation = () => {
	const name = "Exchange Information"
	const nameType = ""
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/exchangeInfo",
	}
	// Options Example
	type params = {
		// No parameter : curl -X GET &quot;https://api.binance.com/api/v3/exchangeInfo&quot;
		// symbol : curl -X GET &quot;https://api.binance.com/api/v3/exchangeInfo?symbol=BNBBTC&quot;
		// symbols : curl -X GET &quot;https://api.binance.com/api/v3/exchangeInfo?symbols=%5B%22BNBBTC%22,%22BTCUSDT%22%5D&quot; 
		// permissions : curl -X GET &quot;https://api.binance.com/api/v3/exchangeInfo?permissions=SPOT&quot; 
	}
	type req = {
	"timezone" :  string , // "UTC"  
	"serverTime" :  number , // 1565246363776  
	"rateLimits" : [	
	 {
			//These are defined in the `ENUM definitions` section under `Rate Limiters (rateLimitType)`. 
			//All limits are optional 
			
			}
		
		],
	"exchangeFilters" : | [	//These are the defined filters in the `Filters` section.
	
		//All filters are optional.
	
		
	 
		],
	"symbols" : [	
	 {
			"symbol" :  string , // "ETHBTC"  
			"status" :  string , // "TRADING"  
			"baseAsset" :  string , // "ETH"  
			"baseAssetPrecision" :  number , // 8  
			"quoteAsset" :  string , // "BTC"  
			"quotePrecision" :  number , // 8  
			"quoteAssetPrecision" :  number , // 8  
			"orderTypes" : [			
	  string , // "LIMIT" 
	 			
	  string , // "LIMIT_MAKER" 
	 			
	  string , // "MARKET" 
	 			
	  string , // "STOP_LOSS" 
	 			
	  string , // "STOP_LOSS_LIMIT" 
	 			
	  string , // "TAKE_PROFIT" 
	 			
	  string , // "TAKE_PROFIT_LIMIT"			
	 
				],
			"icebergAllowed" :  boolean , // true  
			"ocoAllowed" :  boolean , // true  
			"quoteOrderQtyMarketAllowed" :  boolean , // true  
			"allowTrailingStop" :  boolean , // false  
			"cancelReplaceAllowed" :  boolean , // false  
			"isSpotTradingAllowed" :  boolean , // true  
			"isMarginTradingAllowed" :  boolean , // true  
			"filters" : [			//These are defined in the Filters section.
	
				//All filters are optional
	
				
	 
				],
			"permissions" : [			
	  string , // "SPOT" 
	 			
	  string , // "MARGIN"			
	 
				],
			"defaultSelfTradePreventionMode" :  string , // "NONE"  
			"allowedSelfTradePreventionModes" : [			
	  string , // "NONE"			
	 
				]
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#order-book

OrderBook = () => {
	const name = "Order Book"
	const nameType = ""
	const wight = [{
			name : "IP",
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/depth",
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// Default 100; max 5000. 
		limit? : INT
	}
	type req = {
	"lastUpdateId" :  number , // 1027024  
	"bids" : [	
	 [		
	  NumberString , // "4.00000000" 
	  // PRICE
	
			
	  NumberString , // "431.00000000" // QTY
	
			
	 
			]
		
		],
	"asks" : [	
	 [		
	  NumberString , // "4.00000200" 
	 		
	  NumberString , // "12.00000000"		
	 
			]
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#recent-trades-list

RecentTradesList = () => {
	const name = "Recent Trades List"
	const nameType = ""
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/trades",
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// Default 500; max 1000.
		limit? : INT
	}
	type req = [
	 {
		"id" :  number , // 28457  
		"price" :  NumberString , // "4.00000100"  
		"qty" :  NumberString , // "12.00000000"  
		"quoteQty" :  NumberString , // "48.000012"  
		"time" :  number , // 1499865549590  
		"isBuyerMaker" :  boolean , // true  
		"isBestMatch" :  boolean , // true 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#old-trade-lookup-market_data

OldTradeLookup = () => {
	const name = "Old Trade Lookup (MARKET_DATA)"
	const nameType = "MARKET_DATA"
	const wight = [{
			name : "IP",
			data : 5,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/historicalTrades",
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// Default 500; max 1000.
		limit? : INT
		// Trade id to fetch from. Default gets most recent trades.
		fromId? : LONG
	}
	type req = [
	 {
		"id" :  number , // 28457  
		"price" :  NumberString , // "4.00000100"  
		"qty" :  NumberString , // "12.00000000"  
		"quoteQty" :  NumberString , // "48.000012"  
		"time" :  number , // 1499865549590  // Trade executed timestamp, as same as `T` in the stream
	 
		"isBuyerMaker" :  boolean , // true  
		"isBestMatch" :  boolean , // true 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#compressed-aggregate-trades-list

CompressedAggregateTradesList = () => {
	const name = "Compressed/Aggregate Trades List"
	const nameType = ""
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/aggTrades",
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// id to get aggregate trades from INCLUSIVE.
		fromId? : LONG
		// Timestamp in ms to get aggregate trades from INCLUSIVE.
		startTime? : LONG
		// Timestamp in ms to get aggregate trades until INCLUSIVE.
		endTime? : LONG
		// Default 500; max 1000.
		limit? : INT
	}
	type req = [
	 {
		"a" :  number , // 26129  // Aggregate tradeId
	 
		"p" :  NumberString , // "0.01633102"  // Price
	 
		"q" :  NumberString , // "4.70443515"  // Quantity
	 
		"f" :  number , // 27781  // First tradeId
	 
		"l" :  number , // 27781  // Last tradeId
	 
		"T" :  number , // 1498793709153  // Timestamp
	 
		"m" :  boolean , // true  // Was the buyer the maker?
	 
		"M" :  boolean , // true // Was the trade the best price match? 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#kline-candlestick-data

KlineCandlestickData = () => {
	const name = "Kline/Candlestick Data"
	const nameType = ""
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/klines",
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		interval : ENUM_interval
		startTime? : LONG
		endTime? : LONG
		// Default 500; max 1000.
		limit? : INT
	}
	type req = [
	 [	
	  number , // 1499040000000 
	  // Kline open time
	
		
	  NumberString , // "0.01634790" 
	  // Open price
	
		
	  NumberString , // "0.80000000" 
	  // High price
	
		
	  NumberString , // "0.01575800" 
	  // Low price
	
		
	  NumberString , // "0.01577100" 
	  // Close price
	
		
	  NumberString , // "148976.11427815" 
	  // Volume
	
		
	  number , // 1499644799999 
	  // Kline Close time
	
		
	  NumberString , // "2434.19055334" 
	  // Quote asset volume
	
		
	  number , // 308 
	  // Number of trades
	
		
	  NumberString , // "1756.87402397" 
	  // Taker buy base asset volume
	
		
	  NumberString , // "28.46694368" 
	  // Taker buy quote asset volume
	
		
	  NumberString , // "0" // Unused field, ignore.
	
		
	 
		]
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#uiklines

UIKlines = () => {
	const name = "UIKlines"
	const nameType = ""
	const wight = [{
			name : "",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/uiKlines",
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		interval : ENUM_interval
		startTime? : LONG
		endTime? : LONG
		// Default 500; max 1000.
		limit? : INT
	}
	type req = [
	 [	
	  number , // 1499040000000 
	  // Kline open time
	
		
	  NumberString , // "0.01634790" 
	  // Open price
	
		
	  NumberString , // "0.80000000" 
	  // High price
	
		
	  NumberString , // "0.01575800" 
	  // Low price
	
		
	  NumberString , // "0.01577100" 
	  // Close price
	
		
	  NumberString , // "148976.11427815" 
	  // Volume
	
		
	  number , // 1499644799999 
	  // Kline close time
	
		
	  NumberString , // "2434.19055334" 
	  // Quote asset volume
	
		
	  number , // 308 
	  // Number of trades
	
		
	  NumberString , // "1756.87402397" 
	  // Taker buy base asset volume
	
		
	  NumberString , // "28.46694368" 
	  // Taker buy quote asset volume
	
		
	  NumberString , // "0" // Unused field. Ignore.
	
		
	 
		]
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#current-average-price

CurrentAveragePrice = () => {
	const name = "Current Average Price"
	const nameType = ""
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/avgPrice",
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
	}
	type req = {
	"mins" :  number , // 5  
	"price" :  NumberString , // "9.35751834" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#24hr-ticker-price-change-statistics

hrTickerPriceChangeStatistics24 = () => {
	const name = "24hr Ticker Price Change Statistics"
	const nameType = ""
	const wight = [{
			name : "IP",
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/ticker/24hr",
	}
	// Name Type Mandatory Description
	type params = {
		symbol? : STRING
		symbols? : STRING
		// Supported values: 
		type? : ENUM_type
	}
	type req = {
	"symbol" :  string , // "BNBBTC"  
	"priceChange" :  NumberString , // "-94.99999800"  
	"priceChangePercent" :  NumberString , // "-95.960"  
	"weightedAvgPrice" :  NumberString , // "0.29628482"  
	"prevClosePrice" :  NumberString , // "0.10002000"  
	"lastPrice" :  NumberString , // "4.00000200"  
	"lastQty" :  NumberString , // "200.00000000"  
	"bidPrice" :  NumberString , // "4.00000000"  
	"bidQty" :  NumberString , // "100.00000000"  
	"askPrice" :  NumberString , // "4.00000200"  
	"askQty" :  NumberString , // "100.00000000"  
	"openPrice" :  NumberString , // "99.00000000"  
	"highPrice" :  NumberString , // "100.00000000"  
	"lowPrice" :  NumberString , // "0.10000000"  
	"volume" :  NumberString , // "8913.30000000"  
	"quoteVolume" :  NumberString , // "15.30000000"  
	"openTime" :  number , // 1499783499040  
	"closeTime" :  number , // 1499869899040  
	"firstId" :  number , // 28385  // First tradeId
	 
	"lastId" :  number , // 28460  // Last tradeId
	 
	"count" :  number , // 76 // Trade count 
	
	}
	| [
	 | {
		"symbol" :  string , // "BNBBTC"  
		"priceChange" :  NumberString , // "-94.99999800"  
		"priceChangePercent" :  NumberString , // "-95.960"  
		"weightedAvgPrice" :  NumberString , // "0.29628482"  
		"prevClosePrice" :  NumberString , // "0.10002000"  
		"lastPrice" :  NumberString , // "4.00000200"  
		"lastQty" :  NumberString , // "200.00000000"  
		"bidPrice" :  NumberString , // "4.00000000"  
		"bidQty" :  NumberString , // "100.00000000"  
		"askPrice" :  NumberString , // "4.00000200"  
		"askQty" :  NumberString , // "100.00000000"  
		"openPrice" :  NumberString , // "99.00000000"  
		"highPrice" :  NumberString , // "100.00000000"  
		"lowPrice" :  NumberString , // "0.10000000"  
		"volume" :  NumberString , // "8913.30000000"  
		"quoteVolume" :  NumberString , // "15.30000000"  
		"openTime" :  number , // 1499783499040  
		"closeTime" :  number , // 1499869899040  
		"firstId" :  number , // 28385  // First tradeId
	 
		"lastId" :  number , // 28460  // Last tradeId
	 
		"count" :  number , // 76 // Trade count 
		
		}
	
	]
	| {
	"symbol" :  string , // "BNBBTC"  // Symbol Name
	 
	"openPrice" :  NumberString , // "99.00000000"  // Opening price of the Interval
	 
	"highPrice" :  NumberString , // "100.00000000"  // Highest price in the interval
	 
	"lowPrice" :  NumberString , // "0.10000000"  // Lowest  price in the interval
	 
	"lastPrice" :  NumberString , // "4.00000200"  // Closing price of the interval
	 
	"volume" :  NumberString , // "8913.30000000"  // Total trade volume (in base asset)
	 
	"quoteVolume" :  NumberString , // "15.30000000"  // Total trade volume (in quote asset)
	 
	"openTime" :  number , // 1499783499040  // Start of the ticker interval
	 
	"closeTime" :  number , // 1499869899040  // End of the ticker interval
	 
	"firstId" :  number , // 28385  // First tradeId considered
	 
	"lastId" :  number , // 28460  // Last tradeId considered
	 
	"count" :  number , // 76 // Total trade count 
	
	}
	| [
	 | {
		"symbol" :  string , // "BNBBTC"  
		"openPrice" :  NumberString , // "99.00000000"  
		"highPrice" :  NumberString , // "100.00000000"  
		"lowPrice" :  NumberString , // "0.10000000"  
		"lastPrice" :  NumberString , // "4.00000200"  
		"volume" :  NumberString , // "8913.30000000"  
		"quoteVolume" :  NumberString , // "15.30000000"  
		"openTime" :  number , // 1499783499040  
		"closeTime" :  number , // 1499869899040  
		"firstId" :  number , // 28385  
		"lastId" :  number , // 28460  
		"count" :  number , // 76 
		
		},
	| {
		"symbol" :  string , // "LTCBTC"  
		"openPrice" :  NumberString , // "0.07000000"  
		"highPrice" :  NumberString , // "0.07000000"  
		"lowPrice" :  NumberString , // "0.07000000"  
		"lastPrice" :  NumberString , // "0.07000000"  
		"volume" :  NumberString , // "11.00000000"  
		"quoteVolume" :  NumberString , // "0.77000000"  
		"openTime" :  number , // 1656908192899  
		"closeTime" :  number , // 1656994592899  
		"firstId" :  number , // 0  
		"lastId" :  number , // 10  
		"count" :  number , // 11 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#symbol-price-ticker

SymbolPriceTicker = () => {
	const name = "Symbol Price Ticker"
	const nameType = ""
	const wight = [{
			name : "IP",
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/ticker/price",
	}
	// Name Type Mandatory Description
	type params = {
		symbol? : STRING
		symbols? : STRING
	}
	type req = {
	"symbol" :  string , // "LTCBTC"  
	"price" :  NumberString , // "4.00000200" 
	
	}
	| [
	 | {
		"symbol" :  string , // "LTCBTC"  
		"price" :  NumberString , // "4.00000200" 
		
		},
	| {
		"symbol" :  string , // "ETHBTC"  
		"price" :  NumberString , // "0.07946600" 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#symbol-order-book-ticker

SymbolOrderBookTicker = () => {
	const name = "Symbol Order Book Ticker"
	const nameType = ""
	const wight = [{
			name : "IP",
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/ticker/bookTicker",
	}
	// Name Type Mandatory Description
	type params = {
		symbol? : STRING
		symbols? : STRING
	}
	type req = {
	"symbol" :  string , // "LTCBTC"  
	"bidPrice" :  NumberString , // "4.00000000"  
	"bidQty" :  NumberString , // "431.00000000"  
	"askPrice" :  NumberString , // "4.00000200"  
	"askQty" :  NumberString , // "9.00000000" 
	
	}
	| [
	 | {
		"symbol" :  string , // "LTCBTC"  
		"bidPrice" :  NumberString , // "4.00000000"  
		"bidQty" :  NumberString , // "431.00000000"  
		"askPrice" :  NumberString , // "4.00000200"  
		"askQty" :  NumberString , // "9.00000000" 
		
		},
	| {
		"symbol" :  string , // "ETHBTC"  
		"bidPrice" :  NumberString , // "0.07946700"  
		"bidQty" :  NumberString , // "9.00000000"  
		"askPrice" :  NumberString , // "100000.00000000"  
		"askQty" :  NumberString , // "1000.00000000" 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#rolling-window-price-change-statistics

Rollingwindowpricechangestatistics = () => {
	const name = "Rolling window price change statistics"
	const nameType = ""
	const wight = [{
			name : "IP",
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/ticker",
	}
	// Name Type Mandatory Description
	type params = {
		symbol : undefined
		symbols : undefined
		// Defaults to 
		windowSize? : ENUM_windowSize
		// Supported values: 
		type? : ENUM_type
	}
	type req = {
	"symbol" :  string , // "BNBBTC"  
	"priceChange" :  NumberString , // "-8.00000000"  // Absolute price change
	 
	"priceChangePercent" :  NumberString , // "-88.889"  // Relative price change in percent
	 
	"weightedAvgPrice" :  NumberString , // "2.60427807"  // QuoteVolume / Volume
	 
	"openPrice" :  NumberString , // "9.00000000"  
	"highPrice" :  NumberString , // "9.00000000"  
	"lowPrice" :  NumberString , // "1.00000000"  
	"lastPrice" :  NumberString , // "1.00000000"  
	"volume" :  NumberString , // "187.00000000"  
	"quoteVolume" :  NumberString , // "487.00000000"  // Sum of (price * volume) for all trades
	 
	"openTime" :  number , // 1641859200000  // Open time for ticker window
	 
	"closeTime" :  number , // 1642031999999  // Current Time of the Request
	 
	"firstId" :  number , // 0  // Trade IDs
	 
	"lastId" :  number , // 60  
	"count" :  number , // 61 // Number of trades in the interval 
	
	}
	| [
	 | {
		"symbol" :  string , // "BTCUSDT"  
		"priceChange" :  NumberString , // "-154.13000000"  // Absolute price change
	 
		"priceChangePercent" :  NumberString , // "-0.740"  // Relative price change in percent
	 
		"weightedAvgPrice" :  NumberString , // "20677.46305250"  // QuoteVolume / Volume
	 
		"openPrice" :  NumberString , // "20825.27000000"  
		"highPrice" :  NumberString , // "20972.46000000"  
		"lowPrice" :  NumberString , // "20327.92000000"  
		"lastPrice" :  NumberString , // "20671.14000000"  
		"volume" :  NumberString , // "72.65112300"  
		"quoteVolume" :  NumberString , // "1502240.91155513"  // Sum of (price * volume) for all trades
	 
		"openTime" :  number , // 1655432400000  // Open time for ticker window
	 
		"closeTime" :  number , // 1655446835460  // Close time for ticker window
	 
		"firstId" :  number , // 11147809  // Trade IDs
	 
		"lastId" :  number , // 11149775  
		"count" :  number , // 1967 // Number of trades in the interval 
		
		},
	| {
		"symbol" :  string , // "BNBBTC"  
		"priceChange" :  NumberString , // "0.00008530"  
		"priceChangePercent" :  NumberString , // "0.823"  
		"weightedAvgPrice" :  NumberString , // "0.01043129"  
		"openPrice" :  NumberString , // "0.01036170"  
		"highPrice" :  NumberString , // "0.01049850"  
		"lowPrice" :  NumberString , // "0.01033870"  
		"lastPrice" :  NumberString , // "0.01044700"  
		"volume" :  NumberString , // "166.67000000"  
		"quoteVolume" :  NumberString , // "1.73858301"  
		"openTime" :  number , // 1655432400000  
		"closeTime" :  number , // 1655446835460  
		"firstId" :  number , // 2351674  
		"lastId" :  number , // 2352034  
		"count" :  number , // 361 
		
		}
	
	]
	| {
	"symbol" :  string , // "LTCBTC"  
	"openPrice" :  NumberString , // "0.10000000"  
	"highPrice" :  NumberString , // "2.00000000"  
	"lowPrice" :  NumberString , // "0.10000000"  
	"lastPrice" :  NumberString , // "2.00000000"  
	"volume" :  NumberString , // "39.00000000"  
	"quoteVolume" :  NumberString , // "13.40000000"  // Sum of (price * volume) for all trades
	 
	"openTime" :  number , // 1656986580000  // Open time for ticker window
	 
	"closeTime" :  number , // 1657001016795  // Close time for ticker window
	 
	"firstId" :  number , // 0  // Trade IDs
	 
	"lastId" :  number , // 34  
	"count" :  number , // 35 // Number of trades in the interval 
	
	}
	| [
	 | {
		"symbol" :  string , // "BNBBTC"  
		"openPrice" :  NumberString , // "0.10000000"  
		"highPrice" :  NumberString , // "2.00000000"  
		"lowPrice" :  NumberString , // "0.10000000"  
		"lastPrice" :  NumberString , // "2.00000000"  
		"volume" :  NumberString , // "39.00000000"  
		"quoteVolume" :  NumberString , // "13.40000000"  // Sum of (price * volume) for all trades
	 
		"openTime" :  number , // 1656986880000  // Open time for ticker window
	 
		"closeTime" :  number , // 1657001297799  // Close time for ticker window
	 
		"firstId" :  number , // 0  // Trade IDs
	 
		"lastId" :  number , // 34  
		"count" :  number , // 35 // Number of trades in the interval 
		
		},
	| {
		"symbol" :  string , // "LTCBTC"  
		"openPrice" :  NumberString , // "0.07000000"  
		"highPrice" :  NumberString , // "0.07000000"  
		"lowPrice" :  NumberString , // "0.07000000"  
		"lastPrice" :  NumberString , // "0.07000000"  
		"volume" :  NumberString , // "33.00000000"  
		"quoteVolume" :  NumberString , // "2.31000000"  
		"openTime" :  number , // 1656986880000  
		"closeTime" :  number , // 1657001297799  
		"firstId" :  number , // 0  
		"lastId" :  number , // 32  
		"count" :  number , // 33 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#live-subscribing-unsubscribing-to-streams

LiveSubscribingUnsubscribingtostreams = () => {
	const name = "Live Subscribing/Unsubscribing to streams"
	const nameType = ""
	const wight = []
	type req = {
	"result" :  number , // null  
	"id" :  number , // 1 
	
	}
	| {
	"result" :  number , // null  
	"id" :  number , // 312 
	
	}
	| {
	"result" : [	
	  string , // "btcusdt@aggTrade"	
	 
		],
	"id" :  number , // 3 
	
	}
	| {
	"result" :  number , // null  
	"id" :  number , // 5 
	
	}
	| {
	"result" :  boolean , // true  // Indicates that combined is set to true.
	 
	"id" :  number , // 2 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#aggregate-trade-streams

AggregateTradeStreams = () => {
	const name = "Aggregate Trade Streams"
	const nameType = ""
	const wight = []
	type req = {
	"e" :  string , // "aggTrade"  // Event type
	 
	"E" :  number , // 123456789  // Event time
	 
	"s" :  string , // "BNBBTC"  // Symbol
	 
	"a" :  number , // 12345  // Aggregate trade ID
	 
	"p" :  NumberString , // "0.001"  // Price
	 
	"q" :  NumberString , // "100"  // Quantity
	 
	"f" :  number , // 100  // First trade ID
	 
	"l" :  number , // 105  // Last trade ID
	 
	"T" :  number , // 123456785  // Trade time
	 
	"m" :  boolean , // true  // Is the buyer the market maker?
	 
	"M" :  boolean , // true // Ignore 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#trade-streams

TradeStreams = () => {
	const name = "Trade Streams"
	const nameType = ""
	const wight = []
	type req = {
	"e" :  string , // "trade"  // Event type
	 
	"E" :  number , // 123456789  // Event time
	 
	"s" :  string , // "BNBBTC"  // Symbol
	 
	"t" :  number , // 12345  // Trade ID
	 
	"p" :  NumberString , // "0.001"  // Price
	 
	"q" :  NumberString , // "100"  // Quantity
	 
	"b" :  number , // 88  // Buyer order ID
	 
	"a" :  number , // 50  // Seller order ID
	 
	"T" :  number , // 123456785  // Trade time
	 
	"m" :  boolean , // true  // Is the buyer the market maker?
	 
	"M" :  boolean , // true // Ignore 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#kline-candlestick-streams

KlineCandlestickStreams = () => {
	const name = "Kline/Candlestick Streams"
	const nameType = ""
	const wight = []
	type req = {
	"e" :  string , // "kline"  // Event type
	 
	"E" :  number , // 123456789  // Event time
	 
	"s" :  string , // "BNBBTC"  // Symbol
	 
	"k" : {
		"t" :  number , // 123400000  // Kline start time
	 
		"T" :  number , // 123460000  // Kline close time
	 
		"s" :  string , // "BNBBTC"  // Symbol
	 
		"i" :  string , // "1m"  // Interval
	 
		"f" :  number , // 100  // First trade ID
	 
		"L" :  number , // 200  // Last trade ID
	 
		"o" :  NumberString , // "0.0010"  // Open price
	 
		"c" :  NumberString , // "0.0020"  // Close price
	 
		"h" :  NumberString , // "0.0025"  // High price
	 
		"l" :  NumberString , // "0.0015"  // Low price
	 
		"v" :  NumberString , // "1000"  // Base asset volume
	 
		"n" :  number , // 100  // Number of trades
	 
		"x" :  boolean , // false  // Is this kline closed?
	 
		"q" :  NumberString , // "1.0000"  // Quote asset volume
	 
		"V" :  NumberString , // "500"  // Taker buy base asset volume
	 
		"Q" :  NumberString , // "0.500"  // Taker buy quote asset volume
	 
		"B" :  NumberString , // "123456" // Ignore 
		
		}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#individual-symbol-mini-ticker-stream

IndividualSymbolMiniTickerStream = () => {
	const name = "Individual Symbol Mini Ticker Stream"
	const nameType = ""
	const wight = []
	type req = {
	"e" :  string , // "24hrMiniTicker"  // Event type
	 
	"E" :  number , // 123456789  // Event time
	 
	"s" :  string , // "BNBBTC"  // Symbol
	 
	"c" :  NumberString , // "0.0025"  // Close price
	 
	"o" :  NumberString , // "0.0010"  // Open price
	 
	"h" :  NumberString , // "0.0025"  // High price
	 
	"l" :  NumberString , // "0.0010"  // Low price
	 
	"v" :  NumberString , // "10000"  // Total traded base asset volume
	 
	"q" :  NumberString , // "18" // Total traded quote asset volume 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#all-market-mini-tickers-stream

AllMarketMiniTickersStream = () => {
	const name = "All Market Mini Tickers Stream"
	const nameType = ""
	const wight = []
	type req = [
	 {
		// Same as &lt;symbol&gt;@miniTicker payload 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#individual-symbol-ticker-streams

IndividualSymbolTickerStreams = () => {
	const name = "Individual Symbol Ticker Streams"
	const nameType = ""
	const wight = []
	type req = {
	"e" :  string , // "24hrTicker"  // Event type
	 
	"E" :  number , // 123456789  // Event time
	 
	"s" :  string , // "BNBBTC"  // Symbol
	 
	"p" :  NumberString , // "0.0015"  // Price change
	 
	"P" :  NumberString , // "250.00"  // Price change percent
	 
	"w" :  NumberString , // "0.0018"  // Weighted average price
	 
	"x" :  NumberString , // "0.0009"  // First trade(F)-1 price (first trade before the 24hr rolling window)
	 
	"c" :  NumberString , // "0.0025"  // Last price
	 
	"Q" :  NumberString , // "10"  // Last quantity
	 
	"b" :  NumberString , // "0.0024"  // Best bid price
	 
	"B" :  NumberString , // "10"  // Best bid quantity
	 
	"a" :  NumberString , // "0.0026"  // Best ask price
	 
	"A" :  NumberString , // "100"  // Best ask quantity
	 
	"o" :  NumberString , // "0.0010"  // Open price
	 
	"h" :  NumberString , // "0.0025"  // High price
	 
	"l" :  NumberString , // "0.0010"  // Low price
	 
	"v" :  NumberString , // "10000"  // Total traded base asset volume
	 
	"q" :  NumberString , // "18"  // Total traded quote asset volume
	 
	"O" :  number , // 0  // Statistics open time
	 
	"C" :  number , // 86400000  // Statistics close time
	 
	"F" :  number , // 0  // First trade ID
	 
	"L" :  number , // 18150  // Last trade Id
	 
	"n" :  number , // 18151 // Total number of trades 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#all-market-tickers-stream

AllMarketTickersStream = () => {
	const name = "All Market Tickers Stream"
	const nameType = ""
	const wight = []
	type req = [
	 {
		// Same as &lt;symbol&gt;@ticker payload 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#individual-symbol-rolling-window-statistics-streams

IndividualSymbolRollingWindowStatisticsStreams = () => {
	const name = "Individual Symbol Rolling Window Statistics Streams"
	const nameType = ""
	const wight = []
	type req = {
	"e" :  string , // "1hTicker"  // Event type
	 
	"E" :  number , // 123456789  // Event time
	 
	"s" :  string , // "BNBBTC"  // Symbol
	 
	"p" :  NumberString , // "0.0015"  // Price change
	 
	"P" :  NumberString , // "250.00"  // Price change percent
	 
	"o" :  NumberString , // "0.0010"  // Open price
	 
	"h" :  NumberString , // "0.0025"  // High price
	 
	"l" :  NumberString , // "0.0010"  // Low price
	 
	"c" :  NumberString , // "0.0025"  // Last price
	 
	"w" :  NumberString , // "0.0018"  // Weighted average price
	 
	"v" :  NumberString , // "10000"  // Total traded base asset volume
	 
	"q" :  NumberString , // "18"  // Total traded quote asset volume
	 
	"O" :  number , // 0  // Statistics open time
	 
	"C" :  number , // 86400000  // Statistics close time
	 
	"F" :  number , // 0  // First trade ID
	 
	"L" :  number , // 18150  // Last trade Id
	 
	"n" :  number , // 18151 // Total number of trades 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#all-market-rolling-window-statistics-streams

AllMarketRollingWindowStatisticsStreams = () => {
	const name = "All Market Rolling Window Statistics Streams"
	const nameType = ""
	const wight = []
	type req = [
	 {
		// Same as &lt;symbol&gt;@ticker_&lt;window-size&gt; payload, 
		// one for each symbol updated within the interval. 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#individual-symbol-book-ticker-streams

IndividualSymbolBookTickerStreams = () => {
	const name = "Individual Symbol Book Ticker Streams"
	const nameType = ""
	const wight = []
	type req = {
	"u" :  number , // 400900217  // order book updateId
	 
	"s" :  string , // "BNBUSDT"  // symbol
	 
	"b" :  NumberString , // "25.35190000"  // best bid price
	 
	"B" :  NumberString , // "31.21000000"  // best bid qty
	 
	"a" :  NumberString , // "25.36520000"  // best ask price
	 
	"A" :  NumberString , // "40.66000000" // best ask qty 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#partial-book-depth-streams

PartialBookDepthStreams = () => {
	const name = "Partial Book Depth Streams"
	const nameType = ""
	const wight = []
	type req = {
	"lastUpdateId" :  number , // 160  // Last update ID
	 
	"bids" : [ // Bids to be updated
	
		
	 [		
	  NumberString , // "0.0024" 
	  // Price level to be updated
	
			
	  NumberString , // "10" // Quantity
	
			
	 
			]
		
		],
	"asks" : [ // Asks to be updated
	
		
	 [		
	  NumberString , // "0.0026" 
	  // Price level to be updated
	
			
	  NumberString , // "100" // Quantity
	
			
	 
			]
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#diff-depth-stream

Diff_DepthStream = () => {
	const name = "Diff_ Depth Stream"
	const nameType = ""
	const wight = []
	type req = {
	"e" :  string , // "depthUpdate"  // Event type
	 
	"E" :  number , // 123456789  // Event time
	 
	"s" :  string , // "BNBBTC"  // Symbol
	 
	"U" :  number , // 157  // First update ID in event
	 
	"u" :  number , // 160  // Final update ID in event
	 
	"b" : [ // Bids to be updated
	
		
	 [		
	  NumberString , // "0.0024" 
	  // Price level to be updated
	
			
	  NumberString , // "10" // Quantity
	
			
	 
			]
		
		],
	"a" : [ // Asks to be updated
	
		
	 [		
	  NumberString , // "0.0026" 
	  // Price level to be updated
	
			
	  NumberString , // "100" // Quantity
	
			
	 
			]
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#how-to-manage-a-local-order-book-correctly

Howtomanagealocalorderbookcorrectly = () => {
	const name = "How to manage a local order book correctly"
	const nameType = ""
	const wight = []
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#spot-account-trade

TestNewOrder = () => {
	const name = "Test New Order (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/api/v3/order/test",
		HMAC : true,
	}
	type req = {} 
	
}

//https://binance-docs.github.io/apidocs/spot/en#new-order-trade

NewOrder = () => {
	const name = "New Order  (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 1,
		} ,
		{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/api/v3/order",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		side : ENUM_side
		type : ENUM_type
		timeInForce? : ENUM_timeInForce
		quantity? : DECIMAL
		quoteOrderQty? : DECIMAL
		price? : DECIMAL
		// A unique id among open orders. Automatically generated if not sent.
		newClientOrderId? : STRING
		strategyId? : INT
		// The value cannot be less than 
		strategyType? : INT
		// Used with 
		stopPrice? : DECIMAL
		// Used with 
		trailingDelta? : LONG
		// Used with 
		icebergQty? : DECIMAL
		// Set the response JSON. 
		newOrderRespType? : ENUM_newOrderRespType
		// The allowed enums is dependent on what is configured on the symbol. The possible supported values are 
		selfTradePreventionMode? : ENUM_selfTradePreventionMode
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"symbol" :  string , // "BTCUSDT"  
	"orderId" :  number , // 28  
	"orderListId" :  number , // 1  //Unless OCO, value will be -1
	 
	"clientOrderId" :  string , // "6gCrw2kRUAF9CvJDGP16IP"  
	"transactTime" :  number , // 1507725176595 
	
	}
	| {
	"symbol" :  string , // "BTCUSDT"  
	"orderId" :  number , // 28  
	"orderListId" :  number , // 1  //Unless OCO, value will be -1
	 
	"clientOrderId" :  string , // "6gCrw2kRUAF9CvJDGP16IP"  
	"transactTime" :  number , // 1507725176595  
	"price" :  NumberString , // "0.00000000"  
	"origQty" :  NumberString , // "10.00000000"  
	"executedQty" :  NumberString , // "10.00000000"  
	"cummulativeQuoteQty" :  NumberString , // "10.00000000"  
	"status" :  string , // "FILLED"  
	"timeInForce" :  string , // "GTC"  
	"type" :  string , // "MARKET"  
	"side" :  string , // "SELL"  
	"workingTime" :  number , // 1507725176595  
	"selfTradePreventionMode" :  string , // "NONE" 
	
	}
	| {
	"symbol" :  string , // "BTCUSDT"  
	"orderId" :  number , // 28  
	"orderListId" :  number , // 1  //Unless OCO, value will be -1
	 
	"clientOrderId" :  string , // "6gCrw2kRUAF9CvJDGP16IP"  
	"transactTime" :  number , // 1507725176595  
	"price" :  NumberString , // "0.00000000"  
	"origQty" :  NumberString , // "10.00000000"  
	"executedQty" :  NumberString , // "10.00000000"  
	"cummulativeQuoteQty" :  NumberString , // "10.00000000"  
	"status" :  string , // "FILLED"  
	"timeInForce" :  string , // "GTC"  
	"type" :  string , // "MARKET"  
	"side" :  string , // "SELL"  
	"workingTime" :  number , // 1507725176595  
	"selfTradePreventionMode" :  string , // "NONE"  
	"fills" : [	
	 {
			"price" :  NumberString , // "4000.00000000"  
			"qty" :  NumberString , // "1.00000000"  
			"commission" :  NumberString , // "4.00000000"  
			"commissionAsset" :  string , // "USDT"  
			"tradeId" :  number , // 56 
			
			},
		| {
			"price" :  NumberString , // "3999.00000000"  
			"qty" :  NumberString , // "5.00000000"  
			"commission" :  NumberString , // "19.99500000"  
			"commissionAsset" :  string , // "USDT"  
			"tradeId" :  number , // 57 
			
			},
		| {
			"price" :  NumberString , // "3998.00000000"  
			"qty" :  NumberString , // "2.00000000"  
			"commission" :  NumberString , // "7.99600000"  
			"commissionAsset" :  string , // "USDT"  
			"tradeId" :  number , // 58 
			
			},
		| {
			"price" :  NumberString , // "3997.00000000"  
			"qty" :  NumberString , // "1.00000000"  
			"commission" :  NumberString , // "3.99700000"  
			"commissionAsset" :  string , // "USDT"  
			"tradeId" :  number , // 59 
			
			},
		| {
			"price" :  NumberString , // "3995.00000000"  
			"qty" :  NumberString , // "1.00000000"  
			"commission" :  NumberString , // "3.99500000"  
			"commissionAsset" :  string , // "USDT"  
			"tradeId" :  number , // 60 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#cancel-order-trade

CancelOrder = () => {
	const name = "Cancel Order (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		url : "DELETE/api/v3/order",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		orderId? : LONG
		origClientOrderId? : STRING
		// Used to uniquely identify this cancel. Automatically generated by default.
		newClientOrderId? : STRING
		// Supported values: 
		cancelRestrictions? : ENUM_cancelRestrictions
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"symbol" :  string , // "LTCBTC"  
	"origClientOrderId" :  string , // "myOrder1"  
	"orderId" :  number , // 4  
	"orderListId" :  number , // 1  //Unless part of an OCO, the value will always be -1.
	 
	"clientOrderId" :  string , // "cancelMyOrder1"  
	"price" :  NumberString , // "2.00000000"  
	"origQty" :  NumberString , // "1.00000000"  
	"executedQty" :  NumberString , // "0.00000000"  
	"cummulativeQuoteQty" :  NumberString , // "0.00000000"  
	"status" :  string , // "CANCELED"  
	"timeInForce" :  string , // "GTC"  
	"type" :  string , // "LIMIT"  
	"side" :  string , // "BUY"  
	"selfTradePreventionMode" :  string , // "NONE" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#cancel-all-open-orders-on-a-symbol-trade

CancelallOpenOrdersonaSymbol = () => {
	const name = "Cancel all Open Orders on a Symbol (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		url : "DELETE/api/v3/openOrders",
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"symbol" :  string , // "BTCUSDT"  
		"origClientOrderId" :  string , // "E6APeyTJvkMvLMYMqu1KQ4"  
		"orderId" :  number , // 11  
		"orderListId" :  number , // 1  
		"clientOrderId" :  string , // "pXLV6Hz6mprAcVYpVMTGgx"  
		"price" :  NumberString , // "0.089853"  
		"origQty" :  NumberString , // "0.178622"  
		"executedQty" :  NumberString , // "0.000000"  
		"cummulativeQuoteQty" :  NumberString , // "0.000000"  
		"status" :  string , // "CANCELED"  
		"timeInForce" :  string , // "GTC"  
		"type" :  string , // "LIMIT"  
		"side" :  string , // "BUY"  
		"selfTradePreventionMode" :  string , // "NONE" 
		
		},
	| {
		"symbol" :  string , // "BTCUSDT"  
		"origClientOrderId" :  string , // "A3EF2HCwxgZPFMrfwbgrhv"  
		"orderId" :  number , // 13  
		"orderListId" :  number , // 1  
		"clientOrderId" :  string , // "pXLV6Hz6mprAcVYpVMTGgx"  
		"price" :  NumberString , // "0.090430"  
		"origQty" :  NumberString , // "0.178622"  
		"executedQty" :  NumberString , // "0.000000"  
		"cummulativeQuoteQty" :  NumberString , // "0.000000"  
		"status" :  string , // "CANCELED"  
		"timeInForce" :  string , // "GTC"  
		"type" :  string , // "LIMIT"  
		"side" :  string , // "BUY"  
		"selfTradePreventionMode" :  string , // "NONE" 
		
		},
	| {
		"orderListId" :  number , // 1929  
		"contingencyType" :  string , // "OCO"  
		"listStatusType" :  string , // "ALL_DONE"  
		"listOrderStatus" :  string , // "ALL_DONE"  
		"listClientOrderId" :  string , // "2inzWQdDvZLHbbAmAozX2N"  
		"transactionTime" :  number , // 1585230948299  
		"symbol" :  string , // "BTCUSDT"  
		"orders" : [		
	 {
				"symbol" :  string , // "BTCUSDT"  
				"orderId" :  number , // 20  
				"clientOrderId" :  string , // "CwOOIPHSmYywx6jZX77TdL" 
				
				},
			| {
				"symbol" :  string , // "BTCUSDT"  
				"orderId" :  number , // 21  
				"clientOrderId" :  string , // "461cPg51vQjV3zIMOXNz39" 
				
				}
			
			],
		"orderReports" : | [		
	 | {
				"symbol" :  string , // "BTCUSDT"  
				"origClientOrderId" :  string , // "CwOOIPHSmYywx6jZX77TdL"  
				"orderId" :  number , // 20  
				"orderListId" :  number , // 1929  
				"clientOrderId" :  string , // "pXLV6Hz6mprAcVYpVMTGgx"  
				"price" :  NumberString , // "0.668611"  
				"origQty" :  NumberString , // "0.690354"  
				"executedQty" :  NumberString , // "0.000000"  
				"cummulativeQuoteQty" :  NumberString , // "0.000000"  
				"status" :  string , // "CANCELED"  
				"timeInForce" :  string , // "GTC"  
				"type" :  string , // "STOP_LOSS_LIMIT"  
				"side" :  string , // "BUY"  
				"stopPrice" :  NumberString , // "0.378131"  
				"icebergQty" :  NumberString , // "0.017083"  
				"selfTradePreventionMode" :  string , // "NONE" 
				
				},
			| {
				"symbol" :  string , // "BTCUSDT"  
				"origClientOrderId" :  string , // "461cPg51vQjV3zIMOXNz39"  
				"orderId" :  number , // 21  
				"orderListId" :  number , // 1929  
				"clientOrderId" :  string , // "pXLV6Hz6mprAcVYpVMTGgx"  
				"price" :  NumberString , // "0.008791"  
				"origQty" :  NumberString , // "0.690354"  
				"executedQty" :  NumberString , // "0.000000"  
				"cummulativeQuoteQty" :  NumberString , // "0.000000"  
				"status" :  string , // "CANCELED"  
				"timeInForce" :  string , // "GTC"  
				"type" :  string , // "LIMIT_MAKER"  
				"side" :  string , // "BUY"  
				"icebergQty" :  NumberString , // "0.639962"  
				"selfTradePreventionMode" :  string , // "NONE" 
				
				}
			
			]
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-order-user_data

QueryOrder = () => {
	const name = "Query Order (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 2,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/order",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		orderId? : LONG
		origClientOrderId? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"symbol" :  string , // "LTCBTC"  
	"orderId" :  number , // 1  
	"orderListId" :  number , // 1  //Unless OCO, value will be -1
	 
	"clientOrderId" :  string , // "myOrder1"  
	"price" :  NumberString , // "0.1"  
	"origQty" :  NumberString , // "1.0"  
	"executedQty" :  NumberString , // "0.0"  
	"cummulativeQuoteQty" :  NumberString , // "0.0"  
	"status" :  string , // "NEW"  
	"timeInForce" :  string , // "GTC"  
	"type" :  string , // "LIMIT"  
	"side" :  string , // "BUY"  
	"stopPrice" :  NumberString , // "0.0"  
	"icebergQty" :  NumberString , // "0.0"  
	"time" :  number , // 1499827319559  
	"updateTime" :  number , // 1499827319559  
	"isWorking" :  boolean , // true  
	"workingTime" :  number , // 1499827319559  
	"origQuoteOrderQty" :  NumberString , // "0.000000"  
	"selfTradePreventionMode" :  string , // "NONE" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#cancel-an-existing-order-and-send-a-new-order-trade

CancelanExistingOrderandSendaNewOrder = () => {
	const name = "Cancel an Existing Order and Send a New Order (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/api/v3/order/cancelReplace",
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		side : ENUM_side
		type : ENUM_type
		// The allowed values are: 
		cancelReplaceMode : ENUM_cancelReplaceMode
		timeInForce? : ENUM_timeInForce
		quantity? : DECIMAL
		quoteOrderQty? : DECIMAL
		price? : DECIMAL
		// Used to uniquely identify this cancel. Automatically generated by default.
		cancelNewClientOrderId? : STRING
		// Either the 
		cancelOrigClientOrderId? : STRING
		// Either the 
		cancelOrderId? : LONG
		// Used to identify the new order.
		newClientOrderId? : STRING
		strategyId? : INT
		// The value cannot be less than 
		strategyType? : INT
		stopPrice? : DECIMAL
		trailingDelta? : LONG
		icebergQty? : DECIMAL
		// Allowed values: 
		newOrderRespType? : ENUM_newOrderRespType
		// The allowed enums is dependent on what is configured on the symbol. The possible supported values are 
		selfTradePreventionMode? : ENUM_selfTradePreventionMode
		// Supported values: 
		cancelRestrictions? : ENUM_cancelRestrictions
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = //Both the cancel order placement and new order placement succeeded. 
	{
	"cancelResult" :  string , // "SUCCESS"  
	"newOrderResult" :  string , // "SUCCESS"  
	"cancelResponse" : {
		"symbol" :  string , // "BTCUSDT"  
		"origClientOrderId" :  string , // "DnLo3vTAQcjha43lAZhZ0y"  
		"orderId" :  number , // 9  
		"orderListId" :  number , // 1  
		"clientOrderId" :  string , // "osxN3JXAtJvKvCqGeMWMVR"  
		"price" :  NumberString , // "0.01000000"  
		"origQty" :  NumberString , // "0.000100"  
		"executedQty" :  NumberString , // "0.00000000"  
		"cummulativeQuoteQty" :  NumberString , // "0.00000000"  
		"status" :  string , // "CANCELED"  
		"timeInForce" :  string , // "GTC"  
		"type" :  string , // "LIMIT"  
		"side" :  string , // "SELL"  
		"selfTradePreventionMode" :  string , // "NONE" 
		
		},
	"newOrderResponse" : | {
		"symbol" :  string , // "BTCUSDT"  
		"orderId" :  number , // 10  
		"orderListId" :  number , // 1  
		"clientOrderId" :  string , // "wOceeeOzNORyLiQfw7jd8S"  
		"transactTime" :  number , // 1652928801803  
		"price" :  NumberString , // "0.02000000"  
		"origQty" :  NumberString , // "0.040000"  
		"executedQty" :  NumberString , // "0.00000000"  
		"cummulativeQuoteQty" :  NumberString , // "0.00000000"  
		"status" :  string , // "NEW"  
		"timeInForce" :  string , // "GTC"  
		"type" :  string , // "LIMIT"  
		"side" :  string , // "BUY"  
		"workingTime" :  number , // 1669277163808  
		"fills" :  number , // [], 
		"selfTradePreventionMode" :  string , // "NONE" 
		
		}
	
	}
	| {
	"code" :  number , // 2022  
	"msg" :  string , // "Order cancel-replace failed."  
	"data" : {
		"cancelResult" :  string , // "FAILURE"  
		"newOrderResult" :  string , // "NOT_ATTEMPTED"  
		"cancelResponse" : {
			"code" :  number , // 2011  
			"msg" :  string , // "Unknown order sent." 
			
			},
		"newOrderResponse" :  number , // null 
		
		}
	
	}
	| {
	"code" :  number , // 2021  
	"msg" :  string , // "Order cancel-replace partially failed."  
	"data" : {
		"cancelResult" :  string , // "SUCCESS"  
		"newOrderResult" :  string , // "FAILURE"  
		"cancelResponse" : {
			"symbol" :  string , // "BTCUSDT"  
			"origClientOrderId" :  string , // "86M8erehfExV8z2RC8Zo8k"  
			"orderId" :  number , // 3  
			"orderListId" :  number , // 1  
			"clientOrderId" :  string , // "G1kLo6aDv2KGNTFcjfTSFq"  
			"price" :  NumberString , // "0.006123"  
			"origQty" :  NumberString , // "10000.000000"  
			"executedQty" :  NumberString , // "0.000000"  
			"cummulativeQuoteQty" :  NumberString , // "0.000000"  
			"status" :  string , // "CANCELED"  
			"timeInForce" :  string , // "GTC"  
			"type" :  string , // "LIMIT_MAKER"  
			"side" :  string , // "SELL"  
			"selfTradePreventionMode" :  string , // "NONE" 
			
			},
		"newOrderResponse" : | {
			"code" :  number , // 2010  
			"msg" :  string , // "Order would immediately match and take." 
			
			}
		
		}
	
	}
	| {
	"code" :  number , // 2021  
	"msg" :  string , // "Order cancel-replace partially failed."  
	"data" : {
		"cancelResult" :  string , // "FAILURE"  
		"newOrderResult" :  string , // "SUCCESS"  
		"cancelResponse" : {
			"code" :  number , // 2011  
			"msg" :  string , // "Unknown order sent." 
			
			},
		"newOrderResponse" : | {
			"symbol" :  string , // "BTCUSDT"  
			"orderId" :  number , // 11  
			"orderListId" :  number , // 1  
			"clientOrderId" :  string , // "pfojJMg6IMNDKuJqDxvoxN"  
			"transactTime" :  number , // 1648540168818 
			
			}
		
		}
	
	}
	| {
	"code" :  number , // 2022  
	"msg" :  string , // "Order cancel-replace failed."  
	"data" : {
		"cancelResult" :  string , // "FAILURE"  
		"newOrderResult" :  string , // "FAILURE"  
		"cancelResponse" : {
			"code" :  number , // 2011  
			"msg" :  string , // "Unknown order sent." 
			
			},
		"newOrderResponse" : | {
			"code" :  number , // 2010  
			"msg" :  string , // "Order would immediately match and take." 
			
			}
		
		}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#current-open-orders-user_data

CurrentOpenOrders = () => {
	const name = "Current Open Orders (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/openOrders",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"symbol" :  string , // "LTCBTC"  
		"orderId" :  number , // 1  
		"orderListId" :  number , // 1  //Unless OCO, the value will always be -1
	 
		"clientOrderId" :  string , // "myOrder1"  
		"price" :  NumberString , // "0.1"  
		"origQty" :  NumberString , // "1.0"  
		"executedQty" :  NumberString , // "0.0"  
		"cummulativeQuoteQty" :  NumberString , // "0.0"  
		"status" :  string , // "NEW"  
		"timeInForce" :  string , // "GTC"  
		"type" :  string , // "LIMIT"  
		"side" :  string , // "BUY"  
		"stopPrice" :  NumberString , // "0.0"  
		"icebergQty" :  NumberString , // "0.0"  
		"time" :  number , // 1499827319559  
		"updateTime" :  number , // 1499827319559  
		"isWorking" :  boolean , // true  
		"workingTime" :  number , // 1499827319559  
		"origQuoteOrderQty" :  NumberString , // "0.000000"  
		"selfTradePreventionMode" :  string , // "NONE" 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#all-orders-user_data

AllOrders = () => {
	const name = "All Orders (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/allOrders",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		orderId? : LONG
		startTime? : LONG
		endTime? : LONG
		// Default 500; max 1000.
		limit? : INT
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"symbol" :  string , // "LTCBTC"  
		"orderId" :  number , // 1  
		"orderListId" :  number , // 1  //Unless OCO, the value will always be -1
	 
		"clientOrderId" :  string , // "myOrder1"  
		"price" :  NumberString , // "0.1"  
		"origQty" :  NumberString , // "1.0"  
		"executedQty" :  NumberString , // "0.0"  
		"cummulativeQuoteQty" :  NumberString , // "0.0"  
		"status" :  string , // "NEW"  
		"timeInForce" :  string , // "GTC"  
		"type" :  string , // "LIMIT"  
		"side" :  string , // "BUY"  
		"stopPrice" :  NumberString , // "0.0"  
		"icebergQty" :  NumberString , // "0.0"  
		"time" :  number , // 1499827319559  
		"updateTime" :  number , // 1499827319559  
		"isWorking" :  boolean , // true  
		"origQuoteOrderQty" :  NumberString , // "0.000000"  
		"workingTime" :  number , // 1499827319559  
		"selfTradePreventionMode" :  string , // "NONE" 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#new-oco-trade

NewOCO = () => {
	const name = "New OCO (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 2,
		} ,
		{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/api/v3/order/oco",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// A unique Id for the entire orderList
		listClientOrderId? : STRING
		side : ENUM_side
		quantity : DECIMAL
		// A unique Id for the limit order
		limitClientOrderId? : STRING
		limitStrategyId? : INT
		// The value cannot be less than 
		limitStrategyType? : INT
		price : DECIMAL
		limitIcebergQty? : DECIMAL
		trailingDelta? : LONG
		// A unique Id for the stop loss/stop loss limit leg
		stopClientOrderId? : STRING
		stopPrice : DECIMAL
		stopStrategyId? : INT
		// The value cannot be less than 
		stopStrategyType? : INT
		// If provided, 
		stopLimitPrice? : DECIMAL
		stopIcebergQty? : DECIMAL
		// Valid values are 
		stopLimitTimeInForce? : ENUM_stopLimitTimeInForce
		// Set the response JSON.
		newOrderRespType? : ENUM_newOrderRespType
		// The allowed enums is dependent on what is configured on the symbol. The possible supported values are 
		selfTradePreventionMode? : ENUM_selfTradePreventionMode
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"orderListId" :  number , // 0  
	"contingencyType" :  string , // "OCO"  
	"listStatusType" :  string , // "EXEC_STARTED"  
	"listOrderStatus" :  string , // "EXECUTING"  
	"listClientOrderId" :  string , // "JYVpp3F0f5CAG15DhtrqLp"  
	"transactionTime" :  number , // 1563417480525  
	"symbol" :  string , // "LTCBTC"  
	"orders" : [	
	 {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 2  
			"clientOrderId" :  string , // "Kk7sqHb9J6mJWTMDVW7Vos" 
			
			},
		| {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 3  
			"clientOrderId" :  string , // "xTXKaGYd4bluPVp78IVRvl" 
			
			}
		
		],
	"orderReports" : | [	
	 | {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 2  
			"orderListId" :  number , // 0  
			"clientOrderId" :  string , // "Kk7sqHb9J6mJWTMDVW7Vos"  
			"transactTime" :  number , // 1563417480525  
			"price" :  NumberString , // "0.000000"  
			"origQty" :  NumberString , // "0.624363"  
			"executedQty" :  NumberString , // "0.000000"  
			"cummulativeQuoteQty" :  NumberString , // "0.000000"  
			"status" :  string , // "NEW"  
			"timeInForce" :  string , // "GTC"  
			"type" :  string , // "STOP_LOSS"  
			"side" :  string , // "BUY"  
			"stopPrice" :  NumberString , // "0.960664"  
			"workingTime" :  number , // 1  
			"selfTradePreventionMode" :  string , // "NONE" 
			
			},
		| {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 3  
			"orderListId" :  number , // 0  
			"clientOrderId" :  string , // "xTXKaGYd4bluPVp78IVRvl"  
			"transactTime" :  number , // 1563417480525  
			"price" :  NumberString , // "0.036435"  
			"origQty" :  NumberString , // "0.624363"  
			"executedQty" :  NumberString , // "0.000000"  
			"cummulativeQuoteQty" :  NumberString , // "0.000000"  
			"status" :  string , // "NEW"  
			"timeInForce" :  string , // "GTC"  
			"type" :  string , // "LIMIT_MAKER"  
			"side" :  string , // "BUY"  
			"workingTime" :  number , // 1563417480525  
			"selfTradePreventionMode" :  string , // "NONE" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#cancel-oco-trade

CancelOCO = () => {
	const name = "Cancel OCO (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// Either 
		orderListId? : LONG
		// Either 
		listClientOrderId? : STRING
		// Used to uniquely identify this cancel. Automatically generated by default
		newClientOrderId? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"orderListId" :  number , // 0  
	"contingencyType" :  string , // "OCO"  
	"listStatusType" :  string , // "ALL_DONE"  
	"listOrderStatus" :  string , // "ALL_DONE"  
	"listClientOrderId" :  string , // "C3wyj4WVEktd7u9aVBRXcN"  
	"transactionTime" :  number , // 1574040868128  
	"symbol" :  string , // "LTCBTC"  
	"orders" : [	
	 {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 2  
			"clientOrderId" :  string , // "pO9ufTiFGg3nw2fOdgeOXa" 
			
			},
		| {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 3  
			"clientOrderId" :  string , // "TXOvglzXuaubXAaENpaRCB" 
			
			}
		
		],
	"orderReports" : | [	
	 | {
			"symbol" :  string , // "LTCBTC"  
			"origClientOrderId" :  string , // "pO9ufTiFGg3nw2fOdgeOXa"  
			"orderId" :  number , // 2  
			"orderListId" :  number , // 0  
			"clientOrderId" :  string , // "unfWT8ig8i0uj6lPuYLez6"  
			"price" :  NumberString , // "1.00000000"  
			"origQty" :  NumberString , // "10.00000000"  
			"executedQty" :  NumberString , // "0.00000000"  
			"cummulativeQuoteQty" :  NumberString , // "0.00000000"  
			"status" :  string , // "CANCELED"  
			"timeInForce" :  string , // "GTC"  
			"type" :  string , // "STOP_LOSS_LIMIT"  
			"side" :  string , // "SELL"  
			"stopPrice" :  NumberString , // "1.00000000"  
			"selfTradePreventionMode" :  string , // "NONE" 
			
			},
		| {
			"symbol" :  string , // "LTCBTC"  
			"origClientOrderId" :  string , // "TXOvglzXuaubXAaENpaRCB"  
			"orderId" :  number , // 3  
			"orderListId" :  number , // 0  
			"clientOrderId" :  string , // "unfWT8ig8i0uj6lPuYLez6"  
			"price" :  NumberString , // "3.00000000"  
			"origQty" :  NumberString , // "10.00000000"  
			"executedQty" :  NumberString , // "0.00000000"  
			"cummulativeQuoteQty" :  NumberString , // "0.00000000"  
			"status" :  string , // "CANCELED"  
			"timeInForce" :  string , // "GTC"  
			"type" :  string , // "LIMIT_MAKER"  
			"side" :  string , // "SELL"  
			"selfTradePreventionMode" :  string , // "NONE" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-oco-user_data

QueryOCO = () => {
	const name = "Query OCO (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 2,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/orderList",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Either 
		orderListId? : LONG
		// Either 
		origClientOrderId? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"orderListId" :  number , // 27  
	"contingencyType" :  string , // "OCO"  
	"listStatusType" :  string , // "EXEC_STARTED"  
	"listOrderStatus" :  string , // "EXECUTING"  
	"listClientOrderId" :  string , // "h2USkA5YQpaXHPIrkd96xE"  
	"transactionTime" :  number , // 1565245656253  
	"symbol" :  string , // "LTCBTC"  
	"orders" : [	
	 {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 4  
			"clientOrderId" :  string , // "qD1gy3kc3Gx0rihm9Y3xwS" 
			
			},
		| {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 5  
			"clientOrderId" :  string , // "ARzZ9I00CPM8i3NhmU9Ega" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-all-oco-user_data

QueryallOCO = () => {
	const name = "Query all OCO (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/allOrderList",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// If supplied, neither 
		fromId? : LONG
		startTime? : LONG
		endTime? : LONG
		// Default Value: 500; Max Value: 1000
		limit? : INT
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"orderListId" :  number , // 29  
		"contingencyType" :  string , // "OCO"  
		"listStatusType" :  string , // "EXEC_STARTED"  
		"listOrderStatus" :  string , // "EXECUTING"  
		"listClientOrderId" :  string , // "amEEAXryFzFwYF1FeRpUoZ"  
		"transactionTime" :  number , // 1565245913483  
		"symbol" :  string , // "LTCBTC"  
		"orders" : [		
	 {
				"symbol" :  string , // "LTCBTC"  
				"orderId" :  number , // 4  
				"clientOrderId" :  string , // "oD7aesZqjEGlZrbtRpy5zB" 
				
				},
			| {
				"symbol" :  string , // "LTCBTC"  
				"orderId" :  number , // 5  
				"clientOrderId" :  string , // "Jr1h6xirOxgeJOUuYQS7V3" 
				
				}
			
			]
		
		},
	| {
		"orderListId" :  number , // 28  
		"contingencyType" :  string , // "OCO"  
		"listStatusType" :  string , // "EXEC_STARTED"  
		"listOrderStatus" :  string , // "EXECUTING"  
		"listClientOrderId" :  string , // "hG7hFNxJV6cZy3Ze4AUT4d"  
		"transactionTime" :  number , // 1565245913407  
		"symbol" :  string , // "LTCBTC"  
		"orders" : [		
	 {
				"symbol" :  string , // "LTCBTC"  
				"orderId" :  number , // 2  
				"clientOrderId" :  string , // "j6lFOfbmFMRjTYA7rRJ0LP" 
				
				},
			| {
				"symbol" :  string , // "LTCBTC"  
				"orderId" :  number , // 3  
				"clientOrderId" :  string , // "z0KCjOdditiLS5ekAFtK81" 
				
				}
			
			]
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-open-oco-user_data

QueryOpenOCO = () => {
	const name = "Query Open OCO (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 3,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/openOrderList",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"orderListId" :  number , // 31  
		"contingencyType" :  string , // "OCO"  
		"listStatusType" :  string , // "EXEC_STARTED"  
		"listOrderStatus" :  string , // "EXECUTING"  
		"listClientOrderId" :  string , // "wuB13fmulKj3YjdqWEcsnp"  
		"transactionTime" :  number , // 1565246080644  
		"symbol" :  string , // "LTCBTC"  
		"orders" : [		
	 {
				"symbol" :  string , // "LTCBTC"  
				"orderId" :  number , // 4  
				"clientOrderId" :  string , // "r3EH2N76dHfLoSZWIUw1bT" 
				
				},
			| {
				"symbol" :  string , // "LTCBTC"  
				"orderId" :  number , // 5  
				"clientOrderId" :  string , // "Cv1SnyPD3qhqpbjpYEHbd2" 
				
				}
			
			]
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#account-information-user_data

AccountInformation = () => {
	const name = "Account Information (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/account",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"makerCommission" :  number , // 15  
	"takerCommission" :  number , // 15  
	"buyerCommission" :  number , // 0  
	"sellerCommission" :  number , // 0  
	"commissionRates" : {
		"maker" :  NumberString , // "0.00150000"  
		"taker" :  NumberString , // "0.00150000"  
		"buyer" :  NumberString , // "0.00000000"  
		"seller" :  NumberString , // "0.00000000" 
		
		},
	"canTrade" :  boolean , // true  
	"canWithdraw" :  boolean , // true  
	"canDeposit" :  boolean , // true  
	"brokered" :  boolean , // false  
	"requireSelfTradePrevention" :  boolean , // false  
	"updateTime" :  number , // 123456789  
	"accountType" :  string , // "SPOT"  
	"balances" : [	
	 {
			"asset" :  string , // "BTC"  
			"free" :  NumberString , // "4723846.89208129"  
			"locked" :  NumberString , // "0.00000000" 
			
			},
		| {
			"asset" :  string , // "LTC"  
			"free" :  NumberString , // "4763368.68006011"  
			"locked" :  NumberString , // "0.00000000" 
			
			}
		
		],
	"permissions" : | [	
	  string , // "SPOT"	
	 
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#account-trade-list-user_data

AccountTradeList = () => {
	const name = "Account Trade List (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/myTrades",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// This can only be used in combination with 
		orderId? : LONG
		startTime? : LONG
		endTime? : LONG
		// TradeId to fetch from. Default gets most recent trades.
		fromId? : LONG
		// Default 500; max 1000.
		limit? : INT
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"symbol" :  string , // "BNBBTC"  
		"id" :  number , // 28457  
		"orderId" :  number , // 100234  
		"orderListId" :  number , // 1  //Unless OCO, the value will always be -1
	 
		"price" :  NumberString , // "4.00000100"  
		"qty" :  NumberString , // "12.00000000"  
		"quoteQty" :  NumberString , // "48.000012"  
		"commission" :  NumberString , // "10.10000000"  
		"commissionAsset" :  string , // "BNB"  
		"time" :  number , // 1499865549590  
		"isBuyer" :  boolean , // true  
		"isMaker" :  boolean , // false  
		"isBestMatch" :  boolean , // true 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-current-order-count-usage-trade

QueryCurrentOrderCountUsage = () => {
	const name = "Query Current Order Count Usage (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "IP",
			data : 20,
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/rateLimit/order",
	}
	// Name Type Mandatory Description
	type params = {
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"rateLimitType" :  string , // "ORDERS"  
		"interval" :  string , // "SECOND"  
		"intervalNum" :  number , // 10  
		"limit" :  number , // 10000  
		"count" :  number , // 0 
		
		},
	| {
		"rateLimitType" :  string , // "ORDERS"  
		"interval" :  string , // "DAY"  
		"intervalNum" :  number , // 1  
		"limit" :  number , // 20000  
		"count" :  number , // 0 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-prevented-matches-user_data

QueryPreventedMatches = () => {
	const name = "Query Prevented Matches (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
		}
	]
	const address = {
		type : "GET",
		url : "/api/v3/myPreventedMatches",
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		preventedMatchId? : LONG
		orderId? : LONG
		fromPreventedMatchId? : LONG
		// Default: 
		limit? : INT
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"symbol" :  string , // "BTCUSDT"  
		"preventedMatchId" :  number , // 1  
		"takerOrderId" :  number , // 5  
		"makerOrderId" :  number , // 3  
		"tradeGroupId" :  number , // 1  
		"selfTradePreventionMode" :  string , // "EXPIRE_MAKER"  
		"price" :  NumberString , // "1.100000"  
		"makerPreventedQuantity" :  NumberString , // "1.300000"  
		"transactTime" :  number , // 1669101687094 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#margin-account-trade

CrossMarginAccountTransfer = () => {
	const name = "Cross Margin Account Transfer (MARGIN)"
	const nameType = "MARGIN"
	const wight = [{
			name : "IP",
			data : 600,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/margin/transfer",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// The asset being transferred, e.g., BTC
		asset : STRING
		// The amount to be transferred
		amount : DECIMAL
		// 1: transfer from main account to cross margin account 2: transfer from cross margin account to main account
		type : INT
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	//transaction id 
	"tranId" :  number , // 100000001 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#margin-account-borrow-margin

MarginAccountBorrow = () => {
	const name = "Margin Account Borrow (MARGIN)"
	const nameType = "MARGIN"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/margin/loan",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset : STRING
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		// isolated symbol
		symbol? : STRING
		amount : DECIMAL
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	//transaction id 
	"tranId" :  number , // 100000001 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#margin-account-repay-margin

MarginAccountRepay = () => {
	const name = "Margin Account Repay (MARGIN)"
	const nameType = "MARGIN"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/margin/repay",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset : STRING
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		// isolated symbol
		symbol? : STRING
		amount : DECIMAL
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	//transaction id 
	"tranId" :  number , // 100000001 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-margin-asset-market_data

QueryMarginAsset = () => {
	const name = "Query Margin Asset (MARKET_DATA)"
	const nameType = "MARKET_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/asset",
	}
	// Name Type Mandatory Description
	type params = {
		asset : STRING
	}
	type req = {
	"assetFullName" :  string , // "Binance Coin"  
	"assetName" :  string , // "BNB"  
	"isBorrowable" :  boolean , // false  
	"isMortgageable" :  boolean , // true  
	"userMinBorrow" :  NumberString , // "0.00000000"  
	"userMinRepay" :  NumberString , // "0.00000000" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-cross-margin-pair-market_data

QueryCrossMarginPair = () => {
	const name = "Query Cross Margin Pair (MARKET_DATA)"
	const nameType = "MARKET_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/pair",
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
	}
	type req = {
	"id" :  number , // 323355778339572400  
	"symbol" :  string , // "BTCUSDT"  
	"base" :  string , // "BTC"  
	"quote" :  string , // "USDT"  
	"isMarginTrade" :  boolean , // true  
	"isBuyAllowed" :  boolean , // true  
	"isSellAllowed" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-all-margin-assets-market_data

GetAllMarginAssets = () => {
	const name = "Get All Margin Assets (MARKET_DATA)"
	const nameType = "MARKET_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/allAssets",
	}
	type req = [
	 {
		"assetFullName" :  string , // "USD coin"  
		"assetName" :  string , // "USDC"  
		"isBorrowable" :  boolean , // true  
		"isMortgageable" :  boolean , // true  
		"userMinBorrow" :  NumberString , // "0.00000000"  
		"userMinRepay" :  NumberString , // "0.00000000" 
		
		},
	| {
		"assetFullName" :  string , // "BNB-coin"  
		"assetName" :  string , // "BNB"  
		"isBorrowable" :  boolean , // true  
		"isMortgageable" :  boolean , // true  
		"userMinBorrow" :  NumberString , // "1.00000000"  
		"userMinRepay" :  NumberString , // "0.00000000" 
		
		},
	| {
		"assetFullName" :  string , // "Tether"  
		"assetName" :  string , // "USDT"  
		"isBorrowable" :  boolean , // true  
		"isMortgageable" :  boolean , // true  
		"userMinBorrow" :  NumberString , // "1.00000000"  
		"userMinRepay" :  NumberString , // "0.00000000" 
		
		},
	| {
		"assetFullName" :  string , // "etherum"  
		"assetName" :  string , // "ETH"  
		"isBorrowable" :  boolean , // true  
		"isMortgageable" :  boolean , // true  
		"userMinBorrow" :  NumberString , // "0.00000000"  
		"userMinRepay" :  NumberString , // "0.00000000" 
		
		},
	| {
		"assetFullName" :  string , // "Bitcoin"  
		"assetName" :  string , // "BTC"  
		"isBorrowable" :  boolean , // true  
		"isMortgageable" :  boolean , // true  
		"userMinBorrow" :  NumberString , // "0.00000000"  
		"userMinRepay" :  NumberString , // "0.00000000" 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-all-cross-margin-pairs-market_data

GetAllCrossMarginPairs = () => {
	const name = "Get All Cross Margin Pairs (MARKET_DATA)"
	const nameType = "MARKET_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/allPairs",
	}
	type req = [
	 {
		"base" :  string , // "BNB"  
		"id" :  number , // 351637150141315861  
		"isBuyAllowed" :  boolean , // true  
		"isMarginTrade" :  boolean , // true  
		"isSellAllowed" :  boolean , // true  
		"quote" :  string , // "BTC"  
		"symbol" :  string , // "BNBBTC" 
		
		},
	| {
		"base" :  string , // "TRX"  
		"id" :  number , // 351637923235429141  
		"isBuyAllowed" :  boolean , // true  
		"isMarginTrade" :  boolean , // true  
		"isSellAllowed" :  boolean , // true  
		"quote" :  string , // "BTC"  
		"symbol" :  string , // "TRXBTC" 
		
		},
	| {
		"base" :  string , // "XRP"  
		"id" :  number , // 351638112213990165  
		"isBuyAllowed" :  boolean , // true  
		"isMarginTrade" :  boolean , // true  
		"isSellAllowed" :  boolean , // true  
		"quote" :  string , // "BTC"  
		"symbol" :  string , // "XRPBTC" 
		
		},
	| {
		"base" :  string , // "ETH"  
		"id" :  number , // 351638524530850581  
		"isBuyAllowed" :  boolean , // true  
		"isMarginTrade" :  boolean , // true  
		"isSellAllowed" :  boolean , // true  
		"quote" :  string , // "BTC"  
		"symbol" :  string , // "ETHBTC" 
		
		},
	| {
		"base" :  string , // "BNB"  
		"id" :  number , // 376870400832855109  
		"isBuyAllowed" :  boolean , // true  
		"isMarginTrade" :  boolean , // true  
		"isSellAllowed" :  boolean , // true  
		"quote" :  string , // "USDT"  
		"symbol" :  string , // "BNBUSDT" 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-margin-priceindex-market_data

QueryMarginPriceIndex = () => {
	const name = "Query Margin PriceIndex (MARKET_DATA)"
	const nameType = "MARKET_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/priceIndex",
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
	}
	type req = {
	"calcTime" :  number , // 1562046418000  
	"price" :  NumberString , // "0.00333930"  
	"symbol" :  string , // "BNBBTC" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#margin-account-new-order-trade

MarginAccountNewOrder = () => {
	const name = "Margin Account New Order (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 6,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/margin/order",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		// BUY
		side : ENUM_side
		type : ENUM_type
		quantity? : DECIMAL
		quoteOrderQty? : DECIMAL
		price? : DECIMAL
		// Used with 
		stopPrice? : DECIMAL
		// A unique id among open orders. Automatically generated if not sent.
		newClientOrderId? : STRING
		// Used with 
		icebergQty? : DECIMAL
		// Set the response JSON. ACK, RESULT, or FULL; MARKET and LIMIT order types default to FULL, all other orders default to ACK.
		newOrderRespType? : ENUM_newOrderRespType
		// NO_SIDE_EFFECT, MARGIN_BUY, AUTO_REPAY; default NO_SIDE_EFFECT.
		sideEffectType? : ENUM_sideEffectType
		// GTC,IOC,FOK
		timeInForce? : ENUM_timeInForce
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"symbol" :  string , // "BTCUSDT"  
	"orderId" :  number , // 28  
	"clientOrderId" :  string , // "6gCrw2kRUAF9CvJDGP16IP"  
	"isIsolated" :  boolean , // true  // if isolated margin
	 
	"transactTime" :  number , // 1507725176595 
	
	}
	| {
	"symbol" :  string , // "BTCUSDT"  
	"orderId" :  number , // 28  
	"clientOrderId" :  string , // "6gCrw2kRUAF9CvJDGP16IP"  
	"transactTime" :  number , // 1507725176595  
	"price" :  NumberString , // "1.00000000"  
	"origQty" :  NumberString , // "10.00000000"  
	"executedQty" :  NumberString , // "10.00000000"  
	"cummulativeQuoteQty" :  NumberString , // "10.00000000"  
	"status" :  string , // "FILLED"  
	"timeInForce" :  string , // "GTC"  
	"type" :  string , // "MARKET"  
	"isIsolated" :  boolean , // true  // if isolated margin
	 
	"side" :  string , // "SELL" 
	
	}
	| {
	"symbol" :  string , // "BTCUSDT"  
	"orderId" :  number , // 28  
	"clientOrderId" :  string , // "6gCrw2kRUAF9CvJDGP16IP"  
	"transactTime" :  number , // 1507725176595  
	"price" :  NumberString , // "1.00000000"  
	"origQty" :  NumberString , // "10.00000000"  
	"executedQty" :  NumberString , // "10.00000000"  
	"cummulativeQuoteQty" :  NumberString , // "10.00000000"  
	"status" :  string , // "FILLED"  
	"timeInForce" :  string , // "GTC"  
	"type" :  string , // "MARKET"  
	"side" :  string , // "SELL"  
	"marginBuyBorrowAmount" :  number , // 5  // will not return if no margin trade happens
	 
	"marginBuyBorrowAsset" :  string , // "BTC"  // will not return if no margin trade happens
	 
	"isIsolated" :  boolean , // true  // if isolated margin
	 
	"fills" : [	
	 {
			"price" :  NumberString , // "4000.00000000"  
			"qty" :  NumberString , // "1.00000000"  
			"commission" :  NumberString , // "4.00000000"  
			"commissionAsset" :  string , // "USDT" 
			
			},
		| {
			"price" :  NumberString , // "3999.00000000"  
			"qty" :  NumberString , // "5.00000000"  
			"commission" :  NumberString , // "19.99500000"  
			"commissionAsset" :  string , // "USDT" 
			
			},
		| {
			"price" :  NumberString , // "3998.00000000"  
			"qty" :  NumberString , // "2.00000000"  
			"commission" :  NumberString , // "7.99600000"  
			"commissionAsset" :  string , // "USDT" 
			
			},
		| {
			"price" :  NumberString , // "3997.00000000"  
			"qty" :  NumberString , // "1.00000000"  
			"commission" :  NumberString , // "3.99700000"  
			"commissionAsset" :  string , // "USDT" 
			
			},
		| {
			"price" :  NumberString , // "3995.00000000"  
			"qty" :  NumberString , // "1.00000000"  
			"commission" :  NumberString , // "3.99500000"  
			"commissionAsset" :  string , // "USDT" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#margin-account-cancel-order-trade

MarginAccountCancelOrder = () => {
	const name = "Margin Account Cancel Order (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		url : "DELETE/sapi/v1/margin/order",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		orderId? : LONG
		origClientOrderId? : STRING
		// Used to uniquely identify this cancel. Automatically generated by default.
		newClientOrderId? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"symbol" :  string , // "LTCBTC"  
	"isIsolated" :  boolean , // true  // if isolated margin
	 
	"orderId" :  NumberString , // "28"  
	"origClientOrderId" :  string , // "myOrder1"  
	"clientOrderId" :  string , // "cancelMyOrder1"  
	"price" :  NumberString , // "1.00000000"  
	"origQty" :  NumberString , // "10.00000000"  
	"executedQty" :  NumberString , // "8.00000000"  
	"cummulativeQuoteQty" :  NumberString , // "8.00000000"  
	"status" :  string , // "CANCELED"  
	"timeInForce" :  string , // "GTC"  
	"type" :  string , // "LIMIT"  
	"side" :  string , // "SELL" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#margin-account-cancel-all-open-orders-on-a-symbol-trade

MarginAccountCancelallOpenOrdersonaSymbol = () => {
	const name = "Margin Account Cancel all Open Orders on a Symbol (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		url : "DELETE/sapi/v1/margin/openOrders",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"symbol" :  string , // "BTCUSDT"  
		"isIsolated" :  boolean , // true  // if isolated margin
	 
		"origClientOrderId" :  string , // "E6APeyTJvkMvLMYMqu1KQ4"  
		"orderId" :  number , // 11  
		"orderListId" :  number , // 1  
		"clientOrderId" :  string , // "pXLV6Hz6mprAcVYpVMTGgx"  
		"price" :  NumberString , // "0.089853"  
		"origQty" :  NumberString , // "0.178622"  
		"executedQty" :  NumberString , // "0.000000"  
		"cummulativeQuoteQty" :  NumberString , // "0.000000"  
		"status" :  string , // "CANCELED"  
		"timeInForce" :  string , // "GTC"  
		"type" :  string , // "LIMIT"  
		"side" :  string , // "BUY" 
		
		},
	| {
		"symbol" :  string , // "BTCUSDT"  
		"isIsolated" :  boolean , // false  // if isolated margin
	 
		"origClientOrderId" :  string , // "A3EF2HCwxgZPFMrfwbgrhv"  
		"orderId" :  number , // 13  
		"orderListId" :  number , // 1  
		"clientOrderId" :  string , // "pXLV6Hz6mprAcVYpVMTGgx"  
		"price" :  NumberString , // "0.090430"  
		"origQty" :  NumberString , // "0.178622"  
		"executedQty" :  NumberString , // "0.000000"  
		"cummulativeQuoteQty" :  NumberString , // "0.000000"  
		"status" :  string , // "CANCELED"  
		"timeInForce" :  string , // "GTC"  
		"type" :  string , // "LIMIT"  
		"side" :  string , // "BUY" 
		
		},
	| {
		"orderListId" :  number , // 1929  
		"contingencyType" :  string , // "OCO"  
		"listStatusType" :  string , // "ALL_DONE"  
		"listOrderStatus" :  string , // "ALL_DONE"  
		"listClientOrderId" :  string , // "2inzWQdDvZLHbbAmAozX2N"  
		"transactionTime" :  number , // 1585230948299  
		"symbol" :  string , // "BTCUSDT"  
		"isIsolated" :  boolean , // true  // if isolated margin
	 
		"orders" : [		
	 {
				"symbol" :  string , // "BTCUSDT"  
				"orderId" :  number , // 20  
				"clientOrderId" :  string , // "CwOOIPHSmYywx6jZX77TdL" 
				
				},
			| {
				"symbol" :  string , // "BTCUSDT"  
				"orderId" :  number , // 21  
				"clientOrderId" :  string , // "461cPg51vQjV3zIMOXNz39" 
				
				}
			
			],
		"orderReports" : | [		
	 | {
				"symbol" :  string , // "BTCUSDT"  
				"origClientOrderId" :  string , // "CwOOIPHSmYywx6jZX77TdL"  
				"orderId" :  number , // 20  
				"orderListId" :  number , // 1929  
				"clientOrderId" :  string , // "pXLV6Hz6mprAcVYpVMTGgx"  
				"price" :  NumberString , // "0.668611"  
				"origQty" :  NumberString , // "0.690354"  
				"executedQty" :  NumberString , // "0.000000"  
				"cummulativeQuoteQty" :  NumberString , // "0.000000"  
				"status" :  string , // "CANCELED"  
				"timeInForce" :  string , // "GTC"  
				"type" :  string , // "STOP_LOSS_LIMIT"  
				"side" :  string , // "BUY"  
				"stopPrice" :  NumberString , // "0.378131"  
				"icebergQty" :  NumberString , // "0.017083" 
				
				},
			| {
				"symbol" :  string , // "BTCUSDT"  
				"origClientOrderId" :  string , // "461cPg51vQjV3zIMOXNz39"  
				"orderId" :  number , // 21  
				"orderListId" :  number , // 1929  
				"clientOrderId" :  string , // "pXLV6Hz6mprAcVYpVMTGgx"  
				"price" :  NumberString , // "0.008791"  
				"origQty" :  NumberString , // "0.690354"  
				"executedQty" :  NumberString , // "0.000000"  
				"cummulativeQuoteQty" :  NumberString , // "0.000000"  
				"status" :  string , // "CANCELED"  
				"timeInForce" :  string , // "GTC"  
				"type" :  string , // "LIMIT_MAKER"  
				"side" :  string , // "BUY"  
				"icebergQty" :  NumberString , // "0.639962" 
				
				}
			
			]
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-cross-margin-transfer-history-user_data

GetCrossMarginTransferHistory = () => {
	const name = "Get Cross Margin Transfer History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/transfer",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset? : STRING
		// Transfer Type: ROLL_IN, ROLL_OUT
		type? : STRING
		startTime? : LONG
		endTime? : LONG
		// Currently querying page. Start from 1. Default:1
		current? : LONG
		// Default:10 Max:100
		size? : LONG
		// Default: 
		archived? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [	
	 {
			"amount" :  NumberString , // "0.10000000"  
			"asset" :  string , // "BNB"  
			"status" :  string , // "CONFIRMED"  
			"timestamp" :  number , // 1566898617  
			"txId" :  number , // 5240372201  
			"type" :  string , // "ROLL_IN" 
			
			},
		| {
			"amount" :  NumberString , // "5.00000000"  
			"asset" :  string , // "USDT"  
			"status" :  string , // "CONFIRMED"  
			"timestamp" :  number , // 1566888436  
			"txId" :  number , // 5239810406  
			"type" :  string , // "ROLL_OUT" 
			
			},
		| {
			"amount" :  NumberString , // "1.00000000"  
			"asset" :  string , // "EOS"  
			"status" :  string , // "CONFIRMED"  
			"timestamp" :  number , // 1566888403  
			"txId" :  number , // 5239808703  
			"type" :  string , // "ROLL_IN" 
			
			}
		
		],
	"total" :  number , // 3 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-loan-record-user_data

QueryLoanRecord = () => {
	const name = "Query Loan Record (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/loan",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset : STRING
		// isolated symbol
		isolatedSymbol? : STRING
		// the tranId in POST /sapi/v1/margin/loan
		txId? : LONG
		startTime? : LONG
		endTime? : LONG
		// Currently querying page. Start from 1. Default:1
		current? : LONG
		// Default:10 Max:100
		size? : LONG
		// Default: 
		archived? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [	
	 {
			"isolatedSymbol" :  string , // "BNBUSDT"  // isolated symbol, will not be returned for crossed margin
	 
			"txId" :  number , // 12807067523  
			"asset" :  string , // "BNB"  
			"principal" :  NumberString , // "0.84624403"  
			"timestamp" :  number , // 1555056425000  
			"status" :  string , // "CONFIRMED" //one of PENDING (pending execution), CONFIRMED (successfully loaned), FAILED (execution failed, nothing happened to your account); 
			
			}
		
		],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-repay-record-user_data

QueryRepayRecord = () => {
	const name = "Query Repay Record (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/repay",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset : STRING
		// isolated symbol
		isolatedSymbol? : STRING
		// return of /sapi/v1/margin/repay
		txId? : LONG
		startTime? : LONG
		endTime? : LONG
		// Currently querying page. Start from 1. Default:1
		current? : LONG
		// Default:10 Max:100
		size? : LONG
		// Default: 
		archived? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [	
	 {
			"isolatedSymbol" :  string , // "BNBUSDT"  // isolated symbol, will not be returned for crossed margin
	 
			"amount" :  NumberString , // "14.00000000"  //Total amount repaid
	 
			"asset" :  string , // "BNB"  
			"interest" :  NumberString , // "0.01866667"  //Interest repaid
	 
			"principal" :  NumberString , // "13.98133333"  //Principal repaid
	 
			"status" :  string , // "CONFIRMED"  //one of PENDING (pending execution), CONFIRMED (successfully execution), FAILED (execution failed, nothing happened to your account)
	 
			"timestamp" :  number , // 1563438204000  
			"txId" :  number , // 2970933056 
			
			}
		
		],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-interest-history-user_data

GetInterestHistory = () => {
	const name = "Get Interest History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/interestHistory",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset? : STRING
		// isolated symbol
		isolatedSymbol? : STRING
		startTime? : LONG
		endTime? : LONG
		// Currently querying page. Start from 1. Default:1
		current? : LONG
		// Default:10 Max:100
		size? : LONG
		// Default: 
		archived? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [	
	 {
			"txId" :  number , // 1352286576452864727  
			"interestAccuredTime" :  number , // 1672160400000  
			"asset" :  string , // "USDT"  
			"rawAsset" :  string ,// will not be returned for isolated margin
			"principal" :  NumberString , // "45.3313"  
			"interest" :  NumberString , // "0.00024995"  
			"interestRate" :  NumberString , // "0.00013233"  
			"type" :  string , // "ON_BORROW"  
			"isolatedSymbol" :  string , // "BNBUSDT" // isolated symbol, will not be returned for crossed margin       
			
			}
		
		],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-force-liquidation-record-user_data

GetForceLiquidationRecord = () => {
	const name = "Get Force Liquidation Record (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/forceLiquidationRec",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		startTime? : LONG
		endTime? : LONG
		isolatedSymbol? : STRING
		// Currently querying page. Start from 1. Default:1
		current? : LONG
		// Default:10 Max:100
		size? : LONG
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [	
	 {
			"avgPrice" :  NumberString , // "0.00388359"  
			"executedQty" :  NumberString , // "31.39000000"  
			"orderId" :  number , // 180015097  
			"price" :  NumberString , // "0.00388110"  
			"qty" :  NumberString , // "31.39000000"  
			"side" :  string , // "SELL"  
			"symbol" :  string , // "BNBBTC"  
			"timeInForce" :  string , // "GTC"  
			"isIsolated" :  boolean , // true  
			"updatedTime" :  number , // 1558941374745 
			
			}
		
		],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-cross-margin-account-details-user_data

QueryCrossMarginAccountDetails = () => {
	const name = "Query Cross Margin Account Details (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/account",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"borrowEnabled" :  boolean , // true  
	"marginLevel" :  NumberString , // "11.64405625"  
	"totalAssetOfBtc" :  NumberString , // "6.82728457"  
	"totalLiabilityOfBtc" :  NumberString , // "0.58633215"  
	"totalNetAssetOfBtc" :  NumberString , // "6.24095242"  
	"tradeEnabled" :  boolean , // true  
	"transferEnabled" :  boolean , // true  
	"userAssets" : [	
	 {
			"asset" :  string , // "BTC"  
			"borrowed" :  NumberString , // "0.00000000"  
			"free" :  NumberString , // "0.00499500"  
			"interest" :  NumberString , // "0.00000000"  
			"locked" :  NumberString , // "0.00000000"  
			"netAsset" :  NumberString , // "0.00499500" 
			
			},
		| {
			"asset" :  string , // "BNB"  
			"borrowed" :  NumberString , // "201.66666672"  
			"free" :  NumberString , // "2346.50000000"  
			"interest" :  NumberString , // "0.00000000"  
			"locked" :  NumberString , // "0.00000000"  
			"netAsset" :  NumberString , // "2144.83333328" 
			
			},
		| {
			"asset" :  string , // "ETH"  
			"borrowed" :  NumberString , // "0.00000000"  
			"free" :  NumberString , // "0.00000000"  
			"interest" :  NumberString , // "0.00000000"  
			"locked" :  NumberString , // "0.00000000"  
			"netAsset" :  NumberString , // "0.00000000" 
			
			},
		| {
			"asset" :  string , // "USDT"  
			"borrowed" :  NumberString , // "0.00000000"  
			"free" :  NumberString , // "0.00000000"  
			"interest" :  NumberString , // "0.00000000"  
			"locked" :  NumberString , // "0.00000000"  
			"netAsset" :  NumberString , // "0.00000000" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-margin-account-39-s-order-user_data

QueryMarginAccountsOrder = () => {
	const name = "Query Margin Accounts Order (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/order",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		orderId? : LONG
		origClientOrderId? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"clientOrderId" :  string , // "ZwfQzuDIGpceVhKW5DvCmO"  
	"cummulativeQuoteQty" :  NumberString , // "0.00000000"  
	"executedQty" :  NumberString , // "0.00000000"  
	"icebergQty" :  NumberString , // "0.00000000"  
	"isWorking" :  boolean , // true  
	"orderId" :  number , // 213205622  
	"origQty" :  NumberString , // "0.30000000"  
	"price" :  NumberString , // "0.00493630"  
	"side" :  string , // "SELL"  
	"status" :  string , // "NEW"  
	"stopPrice" :  NumberString , // "0.00000000"  
	"symbol" :  string , // "BNBBTC"  
	"isIsolated" :  boolean , // true  
	"time" :  number , // 1562133008725  
	"timeInForce" :  string , // "GTC"  
	"type" :  string , // "LIMIT"  
	"updateTime" :  number , // 1562133008725 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-margin-account-39-s-open-orders-user_data

QueryMarginAccountsOpenOrders = () => {
	const name = "Query Margin Accounts Open Orders (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/openOrders",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol? : STRING
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"clientOrderId" :  string , // "qhcZw71gAkCCTv0t0k8LUK"  
		"cummulativeQuoteQty" :  NumberString , // "0.00000000"  
		"executedQty" :  NumberString , // "0.00000000"  
		"icebergQty" :  NumberString , // "0.00000000"  
		"isWorking" :  boolean , // true  
		"orderId" :  number , // 211842552  
		"origQty" :  NumberString , // "0.30000000"  
		"price" :  NumberString , // "0.00475010"  
		"side" :  string , // "SELL"  
		"status" :  string , // "NEW"  
		"stopPrice" :  NumberString , // "0.00000000"  
		"symbol" :  string , // "BNBBTC"  
		"isIsolated" :  boolean , // true  
		"time" :  number , // 1562040170089  
		"timeInForce" :  string , // "GTC"  
		"type" :  string , // "LIMIT"  
		"updateTime" :  number , // 1562040170089 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-margin-account-39-s-all-orders-user_data

QueryMarginAccountsAllOrders = () => {
	const name = "Query Margin Accounts All Orders (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 200,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/allOrders",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		orderId? : LONG
		startTime? : LONG
		endTime? : LONG
		// Default 500; max 500.
		limit? : INT
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"clientOrderId" :  string , // "D2KDy4DIeS56PvkM13f8cP"  
		"cummulativeQuoteQty" :  NumberString , // "0.00000000"  
		"executedQty" :  NumberString , // "0.00000000"  
		"icebergQty" :  NumberString , // "0.00000000"  
		"isWorking" :  boolean , // false  
		"orderId" :  number , // 41295  
		"origQty" :  NumberString , // "5.31000000"  
		"price" :  NumberString , // "0.22500000"  
		"side" :  string , // "SELL"  
		"status" :  string , // "CANCELED"  
		"stopPrice" :  NumberString , // "0.18000000"  
		"symbol" :  string , // "BNBBTC"  
		"isIsolated" :  boolean , // false  
		"time" :  number , // 1565769338806  
		"timeInForce" :  string , // "GTC"  
		"type" :  string , // "TAKE_PROFIT_LIMIT"  
		"updateTime" :  number , // 1565769342148 
		
		},
	| {
		"clientOrderId" :  string , // "gXYtqhcEAs2Rn9SUD9nRKx"  
		"cummulativeQuoteQty" :  NumberString , // "0.00000000"  
		"executedQty" :  NumberString , // "0.00000000"  
		"icebergQty" :  NumberString , // "1.00000000"  
		"isWorking" :  boolean , // true  
		"orderId" :  number , // 41296  
		"origQty" :  NumberString , // "6.65000000"  
		"price" :  NumberString , // "0.18000000"  
		"side" :  string , // "SELL"  
		"status" :  string , // "CANCELED"  
		"stopPrice" :  NumberString , // "0.00000000"  
		"symbol" :  string , // "BNBBTC"  
		"isIsolated" :  boolean , // false  
		"time" :  number , // 1565769348687  
		"timeInForce" :  string , // "GTC"  
		"type" :  string , // "LIMIT"  
		"updateTime" :  number , // 1565769352226 
		
		},
	| {
		"clientOrderId" :  string , // "duDq1BqohhcMmdMs9FSuDy"  
		"cummulativeQuoteQty" :  NumberString , // "0.39450000"  
		"executedQty" :  NumberString , // "2.63000000"  
		"icebergQty" :  NumberString , // "0.00000000"  
		"isWorking" :  boolean , // true  
		"orderId" :  number , // 41297  
		"origQty" :  NumberString , // "2.63000000"  
		"price" :  NumberString , // "0.00000000"  
		"side" :  string , // "SELL"  
		"status" :  string , // "FILLED"  
		"stopPrice" :  NumberString , // "0.00000000"  
		"symbol" :  string , // "BNBBTC"  
		"isIsolated" :  boolean , // false  
		"time" :  number , // 1565769358139  
		"timeInForce" :  string , // "GTC"  
		"type" :  string , // "MARKET"  
		"updateTime" :  number , // 1565769358139 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#margin-account-new-oco-trade

MarginAccountNewOCO = () => {
	const name = "Margin Account New OCO (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 6,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/margin/order/oco",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		// A unique Id for the entire orderList
		listClientOrderId? : STRING
		side : ENUM_side
		quantity : DECIMAL
		// A unique Id for the limit order
		limitClientOrderId? : STRING
		price : DECIMAL
		limitIcebergQty? : DECIMAL
		// A unique Id for the stop loss/stop loss limit leg
		stopClientOrderId? : STRING
		stopPrice : DECIMAL
		// If provided, 
		stopLimitPrice? : DECIMAL
		stopIcebergQty? : DECIMAL
		// Valid values are 
		stopLimitTimeInForce? : ENUM_stopLimitTimeInForce
		// Set the response JSON.
		newOrderRespType? : ENUM_newOrderRespType
		// NO_SIDE_EFFECT, MARGIN_BUY, AUTO_REPAY; default NO_SIDE_EFFECT.
		sideEffectType? : ENUM_sideEffectType
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"orderListId" :  number , // 0  
	"contingencyType" :  string , // "OCO"  
	"listStatusType" :  string , // "EXEC_STARTED"  
	"listOrderStatus" :  string , // "EXECUTING"  
	"listClientOrderId" :  string , // "JYVpp3F0f5CAG15DhtrqLp"  
	"transactionTime" :  number , // 1563417480525  
	"symbol" :  string , // "LTCBTC"  
	"marginBuyBorrowAmount" :  NumberString , // "5"  // will not return if no margin trade happens
	 
	"marginBuyBorrowAsset" :  string , // "BTC"  // will not return if no margin trade happens
	 
	"isIsolated" :  boolean , // false  // if isolated margin
	 
	"orders" : [	
	 {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 2  
			"clientOrderId" :  string , // "Kk7sqHb9J6mJWTMDVW7Vos" 
			
			},
		| {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 3  
			"clientOrderId" :  string , // "xTXKaGYd4bluPVp78IVRvl" 
			
			}
		
		],
	"orderReports" : | [	
	 | {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 2  
			"orderListId" :  number , // 0  
			"clientOrderId" :  string , // "Kk7sqHb9J6mJWTMDVW7Vos"  
			"transactTime" :  number , // 1563417480525  
			"price" :  NumberString , // "0.000000"  
			"origQty" :  NumberString , // "0.624363"  
			"executedQty" :  NumberString , // "0.000000"  
			"cummulativeQuoteQty" :  NumberString , // "0.000000"  
			"status" :  string , // "NEW"  
			"timeInForce" :  string , // "GTC"  
			"type" :  string , // "STOP_LOSS"  
			"side" :  string , // "BUY"  
			"stopPrice" :  NumberString , // "0.960664" 
			
			},
		| {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 3  
			"orderListId" :  number , // 0  
			"clientOrderId" :  string , // "xTXKaGYd4bluPVp78IVRvl"  
			"transactTime" :  number , // 1563417480525  
			"price" :  NumberString , // "0.036435"  
			"origQty" :  NumberString , // "0.624363"  
			"executedQty" :  NumberString , // "0.000000"  
			"cummulativeQuoteQty" :  NumberString , // "0.000000"  
			"status" :  string , // "NEW"  
			"timeInForce" :  string , // "GTC"  
			"type" :  string , // "LIMIT_MAKER"  
			"side" :  string , // "BUY" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#margin-account-cancel-oco-trade

MarginAccountCancelOCO = () => {
	const name = "Margin Account Cancel OCO (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 1,
		}
	]
	const address = {
		url : "DELETE/sapi/v1/margin/orderList",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		// Either 
		orderListId? : LONG
		// Either 
		listClientOrderId? : STRING
		// Used to uniquely identify this cancel. Automatically generated by default
		newClientOrderId? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"orderListId" :  number , // 0  
	"contingencyType" :  string , // "OCO"  
	"listStatusType" :  string , // "ALL_DONE"  
	"listOrderStatus" :  string , // "ALL_DONE"  
	"listClientOrderId" :  string , // "C3wyj4WVEktd7u9aVBRXcN"  
	"transactionTime" :  number , // 1574040868128  
	"symbol" :  string , // "LTCBTC"  
	"isIsolated" :  boolean , // false  // if isolated margin
	 
	"orders" : [	
	 {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 2  
			"clientOrderId" :  string , // "pO9ufTiFGg3nw2fOdgeOXa" 
			
			},
		| {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 3  
			"clientOrderId" :  string , // "TXOvglzXuaubXAaENpaRCB" 
			
			}
		
		],
	"orderReports" : | [	
	 | {
			"symbol" :  string , // "LTCBTC"  
			"origClientOrderId" :  string , // "pO9ufTiFGg3nw2fOdgeOXa"  
			"orderId" :  number , // 2  
			"orderListId" :  number , // 0  
			"clientOrderId" :  string , // "unfWT8ig8i0uj6lPuYLez6"  
			"price" :  NumberString , // "1.00000000"  
			"origQty" :  NumberString , // "10.00000000"  
			"executedQty" :  NumberString , // "0.00000000"  
			"cummulativeQuoteQty" :  NumberString , // "0.00000000"  
			"status" :  string , // "CANCELED"  
			"timeInForce" :  string , // "GTC"  
			"type" :  string , // "STOP_LOSS_LIMIT"  
			"side" :  string , // "SELL"  
			"stopPrice" :  NumberString , // "1.00000000" 
			
			},
		| {
			"symbol" :  string , // "LTCBTC"  
			"origClientOrderId" :  string , // "TXOvglzXuaubXAaENpaRCB"  
			"orderId" :  number , // 3  
			"orderListId" :  number , // 0  
			"clientOrderId" :  string , // "unfWT8ig8i0uj6lPuYLez6"  
			"price" :  NumberString , // "3.00000000"  
			"origQty" :  NumberString , // "10.00000000"  
			"executedQty" :  NumberString , // "0.00000000"  
			"cummulativeQuoteQty" :  NumberString , // "0.00000000"  
			"status" :  string , // "CANCELED"  
			"timeInForce" :  string , // "GTC"  
			"type" :  string , // "LIMIT_MAKER"  
			"side" :  string , // "SELL" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-margin-account-39-s-oco-user_data

QueryMarginAccountsOCO = () => {
	const name = "Query Margin Accounts OCO (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/orderList",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		// mandatory for isolated margin, not supported for cross margin
		symbol? : STRING
		// Either 
		orderListId? : LONG
		// Either 
		origClientOrderId? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"orderListId" :  number , // 27  
	"contingencyType" :  string , // "OCO"  
	"listStatusType" :  string , // "EXEC_STARTED"  
	"listOrderStatus" :  string , // "EXECUTING"  
	"listClientOrderId" :  string , // "h2USkA5YQpaXHPIrkd96xE"  
	"transactionTime" :  number , // 1565245656253  
	"symbol" :  string , // "LTCBTC"  
	"isIsolated" :  boolean , // false  // if isolated margin
	 
	"orders" : [	
	 {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 4  
			"clientOrderId" :  string , // "qD1gy3kc3Gx0rihm9Y3xwS" 
			
			},
		| {
			"symbol" :  string , // "LTCBTC"  
			"orderId" :  number , // 5  
			"clientOrderId" :  string , // "ARzZ9I00CPM8i3NhmU9Ega" 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-margin-account-39-s-all-oco-user_data

QueryMarginAccountsallOCO = () => {
	const name = "Query Margin Accounts all OCO (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 200,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/allOrderList",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		// mandatory for isolated margin, not supported for cross margin
		symbol? : STRING
		// If supplied, neither 
		fromId? : LONG
		startTime? : LONG
		endTime? : LONG
		// Default Value: 500; Max Value: 1000
		limit? : INT
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"orderListId" :  number , // 29  
		"contingencyType" :  string , // "OCO"  
		"listStatusType" :  string , // "EXEC_STARTED"  
		"listOrderStatus" :  string , // "EXECUTING"  
		"listClientOrderId" :  string , // "amEEAXryFzFwYF1FeRpUoZ"  
		"transactionTime" :  number , // 1565245913483  
		"symbol" :  string , // "LTCBTC"  
		"isIsolated" :  boolean , // true  // if isolated margin
	 
		"orders" : [		
	 {
				"symbol" :  string , // "LTCBTC"  
				"orderId" :  number , // 4  
				"clientOrderId" :  string , // "oD7aesZqjEGlZrbtRpy5zB" 
				
				},
			| {
				"symbol" :  string , // "LTCBTC"  
				"orderId" :  number , // 5  
				"clientOrderId" :  string , // "Jr1h6xirOxgeJOUuYQS7V3" 
				
				}
			
			]
		
		},
	| {
		"orderListId" :  number , // 28  
		"contingencyType" :  string , // "OCO"  
		"listStatusType" :  string , // "EXEC_STARTED"  
		"listOrderStatus" :  string , // "EXECUTING"  
		"listClientOrderId" :  string , // "hG7hFNxJV6cZy3Ze4AUT4d"  
		"transactionTime" :  number , // 1565245913407  
		"symbol" :  string , // "LTCBTC"  
		"orders" : [		
	 {
				"symbol" :  string , // "LTCBTC"  
				"orderId" :  number , // 2  
				"clientOrderId" :  string , // "j6lFOfbmFMRjTYA7rRJ0LP" 
				
				},
			| {
				"symbol" :  string , // "LTCBTC"  
				"orderId" :  number , // 3  
				"clientOrderId" :  string , // "z0KCjOdditiLS5ekAFtK81" 
				
				}
			
			]
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-margin-account-39-s-open-oco-user_data

QueryMarginAccountsOpenOCO = () => {
	const name = "Query Margin Accounts Open OCO (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/openOrderList",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		// mandatory for isolated margin, not supported for cross margin
		symbol? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"orderListId" :  number , // 31  
		"contingencyType" :  string , // "OCO"  
		"listStatusType" :  string , // "EXEC_STARTED"  
		"listOrderStatus" :  string , // "EXECUTING"  
		"listClientOrderId" :  string , // "wuB13fmulKj3YjdqWEcsnp"  
		"transactionTime" :  number , // 1565246080644  
		"symbol" :  string , // "LTCBTC"  
		"isIsolated" :  boolean , // false  // if isolated margin
	 
		"orders" : [		
	 {
				"symbol" :  string , // "LTCBTC"  
				"orderId" :  number , // 4  
				"clientOrderId" :  string , // "r3EH2N76dHfLoSZWIUw1bT" 
				
				},
			| {
				"symbol" :  string , // "LTCBTC"  
				"orderId" :  number , // 5  
				"clientOrderId" :  string , // "Cv1SnyPD3qhqpbjpYEHbd2" 
				
				}
			
			]
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-margin-account-39-s-trade-list-user_data

QueryMarginAccountsTradeList = () => {
	const name = "Query Margin Accounts Trade List (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/myTrades",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		orderId? : LONG
		startTime? : LONG
		endTime? : LONG
		// TradeId to fetch from. Default gets most recent trades.
		fromId? : LONG
		// Default 500; max 1000.
		limit? : INT
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"commission" :  NumberString , // "0.00006000"  
		"commissionAsset" :  string , // "BTC"  
		"id" :  number , // 34  
		"isBestMatch" :  boolean , // true  
		"isBuyer" :  boolean , // false  
		"isMaker" :  boolean , // false  
		"orderId" :  number , // 39324  
		"price" :  NumberString , // "0.02000000"  
		"qty" :  NumberString , // "3.00000000"  
		"symbol" :  string , // "BNBBTC"  
		"isIsolated" :  boolean , // false  
		"time" :  number , // 1561973357171 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-max-borrow-user_data

QueryMaxBorrow = () => {
	const name = "Query Max Borrow (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 50,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/maxBorrowable",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset : STRING
		// isolated symbol
		isolatedSymbol? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"amount" :  NumberString , // "1.69248805"  // account's currently max borrowable amount with sufficient system availability
	 
	"borrowLimit" :  NumberString , // "60" // max borrowable amount limited by the account level 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-max-transfer-out-amount-user_data

QueryMaxTransferOutAmount = () => {
	const name = "Query Max Transfer-Out Amount (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 50,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/maxTransferable",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset : STRING
		// isolated symbol
		isolatedSymbol? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"amount" :  NumberString , // "3.59498107" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-summary-of-margin-account-user_data

GetSummaryofMarginaccount = () => {
	const name = "Get Summary of Margin account (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/tradeCoeff",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"normalBar" :  NumberString , // "1.5"  
	"marginCallBar" :  NumberString , // "1.3"  
	"forceLiquidationBar" :  NumberString , // "1.1" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#isolated-margin-account-transfer-margin

IsolatedMarginAccountTransfer = () => {
	const name = "Isolated Margin Account Transfer (MARGIN)"
	const nameType = "MARGIN"
	const wight = [{
			name : "UID",
			data : 600,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// asset,such as BTC
		asset : STRING
		symbol : STRING
		// &quot;SPOT&quot;, &quot;ISOLATED_MARGIN&quot;
		transFrom : STRING
		// &quot;SPOT&quot;, &quot;ISOLATED_MARGIN&quot;
		transTo : STRING
		amount : DECIMAL
		// No more than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	//transaction id 
	"tranId" :  number , // 100000001 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-isolated-margin-transfer-history-user_data

GetIsolatedMarginTransferHistory = () => {
	const name = "Get Isolated Margin Transfer History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		asset? : STRING
		symbol : STRING
		// &quot;SPOT&quot;, &quot;ISOLATED_MARGIN&quot;
		transFrom? : STRING
		// &quot;SPOT&quot;, &quot;ISOLATED_MARGIN&quot;
		transTo? : STRING
		startTime? : LONG
		endTime? : LONG
		// Current page, default 1
		current? : LONG
		// Default 10, max 100
		size? : LONG
		// Default: 
		archived? : STRING
		// No more than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [	
	 {
			"amount" :  NumberString , // "0.10000000"  
			"asset" :  string , // "BNB"  
			"status" :  string , // "CONFIRMED"  
			"timestamp" :  number , // 1566898617000  
			"txId" :  number , // 5240372201  
			"transFrom" :  string , // "SPOT"  
			"transTo" :  string , // "ISOLATED_MARGIN" 
			
			},
		| {
			"amount" :  NumberString , // "5.00000000"  
			"asset" :  string , // "USDT"  
			"status" :  string , // "CONFIRMED"  
			"timestamp" :  number , // 1566888436123  
			"txId" :  number , // 5239810406  
			"transFrom" :  string , // "ISOLATED_MARGIN"  
			"transTo" :  string , // "SPOT" 
			
			}
		
		],
	"total" :  number , // 2 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-isolated-margin-account-info-user_data

QueryIsolatedMarginAccountInfo = () => {
	const name = "Query Isolated Margin Account Info (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// Max 5 symbols can be sent; separated by &quot;,&quot;. e.g. &quot;BTCUSDT,BNBUSDT,ADAUSDT&quot;
		symbols? : STRING
		// No more than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"assets" :[	
	 {
			"baseAsset" : 
			{
				"asset" :  string , // "BTC"  
				"borrowEnabled" :  boolean , // true  
				"borrowed" :  NumberString , // "0.00000000"  
				"free" :  NumberString , // "0.00000000"  
				"interest" :  NumberString , // "0.00000000"  
				"locked" :  NumberString , // "0.00000000"  
				"netAsset" :  NumberString , // "0.00000000"  
				"netAssetOfBtc" :  NumberString , // "0.00000000"  
				"repayEnabled" :  boolean , // true  
				"totalAsset" :  NumberString , // "0.00000000" 
				
				},
			"quoteAsset" : 
			| {
				"asset" :  string , // "USDT"  
				"borrowEnabled" :  boolean , // true  
				"borrowed" :  NumberString , // "0.00000000"  
				"free" :  NumberString , // "0.00000000"  
				"interest" :  NumberString , // "0.00000000"  
				"locked" :  NumberString , // "0.00000000"  
				"netAsset" :  NumberString , // "0.00000000"  
				"netAssetOfBtc" :  NumberString , // "0.00000000"  
				"repayEnabled" :  boolean , // true  
				"totalAsset" :  NumberString , // "0.00000000" 
				
				},
			"symbol" :  string , // "BTCUSDT"  
			"isolatedCreated" :  boolean , // true  
			"enabled" :  boolean , // true  // true-enabled, false-disabled
	 
			"marginLevel" :  NumberString , // "0.00000000"  
			"marginLevelStatus" :  string , // "EXCESSIVE"  // "EXCESSIVE", "NORMAL", "MARGIN_CALL", "PRE_LIQUIDATION", "FORCE_LIQUIDATION"
	 
			"marginRatio" :  NumberString , // "0.00000000"  
			"indexPrice" :  NumberString , // "10000.00000000"  
			"liquidatePrice" :  NumberString , // "1000.00000000"  
			"liquidateRate" :  NumberString , // "1.00000000"  
			"tradeEnabled" :  boolean , // true 
			
			}
		
		],
	"totalAssetOfBtc" :  NumberString , // "0.00000000"  
	"totalLiabilityOfBtc" :  NumberString , // "0.00000000"  
	"totalNetAssetOfBtc" :  NumberString , // "0.00000000" 
	
	}
	| {
	"assets" :[	
	 {
			"baseAsset" : 
			{
				"asset" :  string , // "BTC"  
				"borrowEnabled" :  boolean , // true  
				"borrowed" :  NumberString , // "0.00000000"  
				"free" :  NumberString , // "0.00000000"  
				"interest" :  NumberString , // "0.00000000"  
				"locked" :  NumberString , // "0.00000000"  
				"netAsset" :  NumberString , // "0.00000000"  
				"netAssetOfBtc" :  NumberString , // "0.00000000"  
				"repayEnabled" :  boolean , // true  
				"totalAsset" :  NumberString , // "0.00000000" 
				
				},
			"quoteAsset" : 
			| {
				"asset" :  string , // "USDT"  
				"borrowEnabled" :  boolean , // true  
				"borrowed" :  NumberString , // "0.00000000"  
				"free" :  NumberString , // "0.00000000"  
				"interest" :  NumberString , // "0.00000000"  
				"locked" :  NumberString , // "0.00000000"  
				"netAsset" :  NumberString , // "0.00000000"  
				"netAssetOfBtc" :  NumberString , // "0.00000000"  
				"repayEnabled" :  boolean , // true  
				"totalAsset" :  NumberString , // "0.00000000" 
				
				},
			"symbol" :  string , // "BTCUSDT"  
			"isolatedCreated" :  boolean , // true  
			"enabled" :  boolean , // true  // true-enabled, false-disabled
	 
			"marginLevel" :  NumberString , // "0.00000000"  
			"marginLevelStatus" :  string , // "EXCESSIVE"  // "EXCESSIVE", "NORMAL", "MARGIN_CALL", "PRE_LIQUIDATION", "FORCE_LIQUIDATION"
	 
			"marginRatio" :  NumberString , // "0.00000000"  
			"indexPrice" :  NumberString , // "10000.00000000"  
			"liquidatePrice" :  NumberString , // "1000.00000000"  
			"liquidateRate" :  NumberString , // "1.00000000"  
			"tradeEnabled" :  boolean , // true 
			
			}
		
		]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#disable-isolated-margin-account-trade

DisableIsolatedMarginAccount = () => {
	const name = "Disable Isolated Margin Account (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 300,
		}
	]
	const address = {
		url : "DELETE/sapi/v1/margin/isolated/account",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// No more than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"success" :  boolean , // true  
	"symbol" :  string , // "BTCUSDT" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#enable-isolated-margin-account-trade

EnableIsolatedMarginAccount = () => {
	const name = "Enable Isolated Margin Account (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 300,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/margin/isolated/account",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// No more than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"success" :  boolean , // true  
	"symbol" :  string , // "BTCUSDT" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-enabled-isolated-margin-account-limit-user_data

QueryEnabledIsolatedMarginAccountLimit = () => {
	const name = "Query Enabled Isolated Margin Account Limit (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/isolated/accountLimit",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// No more than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"enabledAccount" :  number , // 5  
	"maxAccount" :  number , // 20 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-isolated-margin-symbol-user_data

QueryIsolatedMarginSymbol = () => {
	const name = "Query Isolated Margin Symbol (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// No more than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"symbol" :  string , // "BTCUSDT"  
	"base" :  string , // "BTC"  
	"quote" :  string , // "USDT"  
	"isMarginTrade" :  boolean , // true  
	"isBuyAllowed" :  boolean , // true  
	"isSellAllowed" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-all-isolated-margin-symbol-user_data

GetAllIsolatedMarginSymbol = () => {
	const name = "Get All Isolated Margin Symbol(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// No more than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"base" :  string , // "BNB"  
		"isBuyAllowed" :  boolean , // true  
		"isMarginTrade" :  boolean , // true  
		"isSellAllowed" :  boolean , // true  
		"quote" :  string , // "BTC"  
		"symbol" :  string , // "BNBBTC" 
		
		},
	| {
		"base" :  string , // "TRX"  
		"isBuyAllowed" :  boolean , // true  
		"isMarginTrade" :  boolean , // true  
		"isSellAllowed" :  boolean , // true  
		"quote" :  string , // "BTC"  
		"symbol" :  string , // "TRXBTC" 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#toggle-bnb-burn-on-spot-trade-and-margin-interest-user_data

ToggleBNBBurnOnSpotTradeAndMarginInterest = () => {
	const name = "Toggle BNB Burn On Spot Trade And Margin Interest (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// &quot;true&quot; or &quot;false&quot;; Determines whether to use BNB to pay for trading fees on SPOT
		spotBNBBurn? : STRING
		// &quot;true&quot; or &quot;false&quot;; Determines whether to use BNB to pay for margin loan&#39;s interest
		interestBNBBurn? : STRING
		// No more than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"spotBNBBurn" :  boolean , // true  
	"interestBNBBurn" :  boolean , // false 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-bnb-burn-status-user_data

GetBNBBurnStatus = () => {
	const name = "Get BNB Burn Status (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// No more than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"spotBNBBurn" :  boolean , // true  
	"interestBNBBurn" :  boolean , // false 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-margin-interest-rate-history-user_data

QueryMarginInterestRateHistory = () => {
	const name = "Query Margin Interest Rate History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		asset : STRING
		// Default: user&#39;s vip level
		vipLevel? : INT
		// Default: 7 days ago
		startTime? : LONG
		// Default: present. Maximum range: 1 months.
		endTime? : LONG
		// No more than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"asset" :  string , // "BTC"  
		"dailyInterestRate" :  NumberString , // "0.00025000"  
		"timestamp" :  number , // 1611544731000  
		"vipLevel" :  number , // 1 
		
		},
	| {
		"asset" :  string , // "BTC"  
		"dailyInterestRate" :  NumberString , // "0.00035000"  
		"timestamp" :  number , // 1610248118000  
		"vipLevel" :  number , // 1 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-cross-margin-fee-data-user_data

QueryCrossMarginFeeData = () => {
	const name = "Query Cross Margin Fee Data (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
		}
	]
	// Name Type Mandatory Description
	type params = {
		// User&#39;s current specific margin data will be returned if vipLevel is omitted
		vipLevel? : INT
		coin? : STRING
		// No more than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"vipLevel" :  number , // 0  
		"coin" :  string , // "BTC"  
		"transferIn" :  boolean , // true  
		"borrowable" :  boolean , // true  
		"dailyInterest" :  NumberString , // "0.00026125"  
		"yearlyInterest" :  NumberString , // "0.0953"  
		"borrowLimit" :  NumberString , // "180"  
		"marginablePairs" : [		
	  string , // "BNBBTC" 
	 		
	  string , // "TRXBTC" 
	 		
	  string , // "ETHBTC" 
	 		
	  string , // "BTCUSDT"		
	 
			]
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-isolated-margin-fee-data-user_data

QueryIsolatedMarginFeeData = () => {
	const name = "Query Isolated Margin Fee Data (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
		}
	]
	// Name Type Mandatory Description
	type params = {
		// User&#39;s current specific margin data will be returned if vipLevel is omitted
		vipLevel? : INT
		symbol? : STRING
		// No more than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"vipLevel" :  number , // 0  
		"symbol" :  string , // "BTCUSDT"  
		"leverage" :  NumberString , // "10"  
		"data" : [		
	 {
				"coin" :  string , // "BTC"  
				"dailyInterest" :  NumberString , // "0.00026125"  
				"borrowLimit" :  NumberString , // "270" 
				
				},
			| {
				"coin" :  string , // "USDT"  
				"dailyInterest" :  NumberString , // "0.000475"  
				"borrowLimit" :  NumberString , // "2100000" 
				
				}
			
			]
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-isolated-margin-tier-data-user_data

QueryIsolatedMarginTierData = () => {
	const name = "Query Isolated Margin Tier Data (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		// All margin tier data will be returned if tier is omitted
		tier? : INTEGER
		// No more than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"symbol" :  string , // "BTCUSDT"  
		"tier" :  number , // 1  
		"effectiveMultiple" :  NumberString , // "10"  
		"initialRiskRatio" :  NumberString , // "1.111"  
		"liquidationRiskRatio" :  NumberString , // "1.05"  
		"baseAssetMaxBorrowable" :  NumberString , // "9"  
		"quoteAssetMaxBorrowable" :  NumberString , // "70000" 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-current-margin-order-count-usage-trade

QueryCurrentMarginOrderCountUsage = () => {
	const name = "Query Current Margin Order Count Usage (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "IP",
			data : 20,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/rateLimit/order",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;，default &quot;FALSE&quot;
		isIsolated? : STRING
		// isolated symbol, mandatory for isolated margin
		symbol? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
		"rateLimitType" :  string , // "ORDERS"  
		"interval" :  string , // "SECOND"  
		"intervalNum" :  number , // 10  
		"limit" :  number , // 10000  
		"count" :  number , // 0 
		
		},
	| {
		"rateLimitType" :  string , // "ORDERS"  
		"interval" :  string , // "DAY"  
		"intervalNum" :  number , // 1  
		"limit" :  number , // 20000  
		"count" :  number , // 0 
		
		}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#margin-dustlog-user_data

MarginDustlog = () => {
	const name = "Margin Dustlog (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = []
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/dribblet",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		startTime? : LONG
		endTime? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"total" :  number , // 8  //Total counts of exchange
	 
	"userAssetDribblets" : [	
	 {
			"operateTime" :  number , // 1615985535000  
			"totalTransferedAmount" :  NumberString , // "0.00132256"  // Total transfered BNB amount for this exchange.
	 
			"totalServiceChargeAmount" :  NumberString , // "0.00002699"  //Total service charge amount for this exchange.
	 
			"transId" :  number , // 45178372831  
			"userAssetDribbletDetails" : [ //Details of  this exchange.
	
				
	 {
					"transId" :  number , // 4359321  
					"serviceChargeAmount" :  NumberString , // "0.000009"  
					"amount" :  NumberString , // "0.0009"  
					"operateTime" :  number , // 1615985535000  
					"transferedAmount" :  NumberString , // "0.000441"  
					"fromAsset" :  string , // "USDT" 
					
					},
				| {
					"transId" :  number , // 4359321  
					"serviceChargeAmount" :  NumberString , // "0.00001799"  
					"amount" :  NumberString , // "0.0009"  
					"operateTime" :  number , // 1615985535000  
					"transferedAmount" :  NumberString , // "0.00088156"  
					"fromAsset" :  string , // "ETH" 
					
					}
				
				]
			
			},
		| {
			"operateTime" :  number , // 1616203180000  
			"totalTransferedAmount" :  NumberString , // "0.00058795"  
			"totalServiceChargeAmount" :  NumberString , // "0.000012"  
			"transId" :  number , // 4357015  
			"userAssetDribbletDetails" : [			
	 {
					"transId" :  number , // 4357015  
					"serviceChargeAmount" :  NumberString , // "0.00001"  
					"amount" :  NumberString , // "0.001"  
					"operateTime" :  number , // 1616203180000  
					"transferedAmount" :  NumberString , // "0.00049"  
					"fromAsset" :  string , // "USDT" 
					
					},
				| {
					"transId" :  number , // 4357015  
					"serviceChargeAmount" :  NumberString , // "0.000002"  
					"amount" :  NumberString , // "0.0001"  
					"operateTime" :  number , // 1616203180000  
					"transferedAmount" :  NumberString , // "0.00009795"  
					"fromAsset" :  string , // "ETH" 
					
					}
				
				]
			
			}
		
		]
	
	}
	 
	
}

//https://binance-docs.github.io/apidocs/spot/en#cross-margin-collateral-ratio-market_data

Crossmargincollateralratio = () => {
	const name = "Cross margin collateral ratio (MARKET_DATA)"
	const nameType = "MARKET_DATA"
	const wight = [{
			name : "IP",
			data : 100,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/crossMarginCollateralRatio",
		HMAC : true,
	}
	type req = [
	 {
	"collaterals" : [	
	 {
			"minUsdValue" :  NumberString , // "0"  
			"maxUsdValue" :  NumberString , // "13000000"  
			"discountRate" :  NumberString , // "1" 
			
			},
		| {
			"minUsdValue" :  NumberString , // "13000000"  
			"maxUsdValue" :  NumberString , // "20000000"  
			"discountRate" :  NumberString , // "0.975" 
			
			},
		| {
			"minUsdValue" :  NumberString , // "20000000"  
			"discountRate" :  NumberString , // "0" 
			
			}
		
		],
	"assetNames" : | [	
	  string , // "BNX"	
	 
		]
	
	},
	| {
	"collaterals" : [	
	 {
			"minUsdValue" :  NumberString , // "0"  
			"discountRate" :  NumberString , // "1" 
			
			}
		
		],
	"assetNames" : | [	
	  string , // "BTC" 
	 	
	  string , // "BUSD" 
	 	
	  string , // "ETH" 
	 	
	  string , // "USDT"	
	 
		]
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-small-liability-exchange-coin-list-user_data

GetSmallLiabilityExchangeCoinList = () => {
	const name = "Get Small Liability Exchange Coin List (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 100,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/exchange-small-liability",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"asset" :  string , // "ETH"  
	"interest" :  NumberString , // "0.00083334"  
	"principal" :  NumberString , // "0.001"  
	"liabilityAsset" :  string , // "USDT"  
	"liabilityQty" :  number , // 0.3552 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#small-liability-exchange-margin

SmallLiabilityExchange = () => {
	const name = "Small Liability Exchange (MARGIN)"
	const nameType = "MARGIN"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/margin/exchange-small-liability",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// The assets list of small liability exchange， Example: assetNames = BTC,ETH
		assetNames : ARRAY
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#get-small-liability-exchange-history-user_data

GetSmallLiabilityExchangeHistory = () => {
	const name = "Get Small Liability Exchange History  (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 100,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/exchange-small-liability-history",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Currently querying page. Start from 1. Default:1
		current : INT
		// Default:10, Max:100
		size : INT
		// Default: 30 days from current timestamp
		startTime? : LONG
		// Default: present timestamp
		endTime? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"total" :  number , // 1  
	"rows" : [
	 {
		"asset" :  string , // "ETH"  
		"amount" :  NumberString , // "0.00083434"  
		"targetAsset" :  string , // "BUSD"  
		"targetAmount" :  NumberString , // "1.37576819"  
		"bizType" :  string , // "EXCHANGE_SMALL_LIABILITY"  
		"timestamp" :  number , // 1672801339253 
		
		}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-a-future-hourly-interest-rate-user_data

Getafuturehourlyinterestrate = () => {
	const name = "Get a future hourly interest rate  (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 100,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/margin/next-hourly-interest-rate",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// List of assets, separated by commas, up to 20
		assets : String
		// for isolated margin or not, &quot;TRUE&quot;, &quot;FALSE&quot;
		isIsolated : Boolean
	}
	type req = [
	 {
	"asset" :  string , // "BTC"  
	"nextHourlyInterestRate" :  NumberString , // "0.00000571" 
	
	},
	| {
	"asset" :  string , // "ETH"  
	"nextHourlyInterestRate" :  NumberString , // "0.00000578" 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#listen-key-spot

LISTENKEY = () => {
	const name = "LISTEN KEY (SPOT)"
	const nameType = "SPOT"
	const wight = [{
			name : "",
			data : 1,
		}
	]
	const address = {
		url : "DELETE/api/v3/userDataStream",
	}
	// Name Type Mandatory Description
	type params = {
		listenKey : STRING
	}
	type req = {
	"listenKey" :  string , // "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1" 
	
	}
	{} 
	{} 
	
}

//https://binance-docs.github.io/apidocs/spot/en#listen-key-margin

LISTENKEY2 = () => {
	const name = "LISTEN KEY (MARGIN)"
	const nameType = "MARGIN"
	const wight = [{
			name : "",
			data : 1,
		}
	]
	const address = {
		url : "DELETE/sapi/v1/userDataStream",
	}
	// Name Type Mandatory Description
	type params = {
		listenKey : STRING
	}
	type req = {
	 "listenKey" :  string , // "T3ee22BIYuWqmvne0HNq2A2WsFlEtLhvWCtItw6ffhhdmjifQ2tRbuKkTHhr" 
	}
	{} 
	{} 
	
}

//https://binance-docs.github.io/apidocs/spot/en#listen-key-isolated-margin

LISTENKEY22 = () => {
	const name = "LISTEN KEY (ISOLATED MARGIN)"
	const nameType = "ISOLATED MARGIN"
	const wight = [{
			name : "",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		symbol : STRING
		listenKey : STRING
	}
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#payload-account-update

Payload_AccountUpdate = () => {
	const name = "Payload_ Account Update"
	const nameType = ""
	const wight = []
	type req = {
	"e" :  string , // "outboundAccountPosition"  //Event type
	 
	"E" :  number , // 1564034571105  //Event Time
	 
	"u" :  number , // 1564034571073  //Time of last account update
	 
	"B" : [ //Balances Array
	
	
	 {
		"a" :  string , // "ETH"  //Asset
	 
		"f" :  NumberString , // "10000.000000"  //Free
	 
		"l" :  NumberString , // "0.000000" //Locked 
		
		}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#payload-balance-update

Payload_BalanceUpdate = () => {
	const name = "Payload_ Balance Update"
	const nameType = ""
	const wight = []
	type req = {
	"e" :  string , // "balanceUpdate"  //Event Type
	 
	"E" :  number , // 1573200697110  //Event Time
	 
	"a" :  string , // "BTC"  //Asset
	 
	"d" :  NumberString , // "100.00000000"  //Balance Delta
	 
	"T" :  number , // 1573200697068 //Clear Time 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#payload-order-update

Payload_OrderUpdate = () => {
	const name = "Payload_ Order Update"
	const nameType = ""
	const wight = []
	type req = {
	"e" :  string , // "executionReport"  // Event type
	 
	"E" :  number , // 1499405658658  // Event time
	 
	"s" :  string , // "ETHBTC"  // Symbol
	 
	"c" :  string , // "mUvoqJxFIILMdfAW5iGSOW"  // Client order ID
	 
	"S" :  string , // "BUY"  // Side
	 
	"o" :  string , // "LIMIT"  // Order type
	 
	"f" :  string , // "GTC"  // Time in force
	 
	"q" :  NumberString , // "1.00000000"  // Order quantity
	 
	"p" :  NumberString , // "0.10264410"  // Order price
	 
	"P" :  NumberString , // "0.00000000"  // Stop price
	 
	"F" :  NumberString , // "0.00000000"  // Iceberg quantity
	 
	"g" :  number , // 1  // OrderListId
	 
	"C" :  NumberString , // ""  // Original client order ID; This is the ID of the order being canceled
	 
	"x" :  string , // "NEW"  // Current execution type
	 
	"X" :  string , // "NEW"  // Current order status
	 
	"r" :  string , // "NONE"  // Order reject reason; will be an error code.
	 
	"i" :  number , // 4293153  // Order ID
	 
	"l" :  NumberString , // "0.00000000"  // Last executed quantity
	 
	"z" :  NumberString , // "0.00000000"  // Cumulative filled quantity
	 
	"L" :  NumberString , // "0.00000000"  // Last executed price
	 
	"n" :  NumberString , // "0"  // Commission amount
	 
	"N" :  number , // null  // Commission asset
	 
	"T" :  number , // 1499405658657  // Transaction time
	 
	"t" :  number , // 1  // Trade ID
	 
	"I" :  number , // 8641984  // Ignore
	 
	"w" :  boolean , // true  // Is the order on the book?
	 
	"m" :  boolean , // false  // Is this trade the maker side?
	 
	"M" :  boolean , // false  // Ignore
	 
	"O" :  number , // 1499405658657  // Order creation time
	 
	"Z" :  NumberString , // "0.00000000"  // Cumulative quote asset transacted quantity
	 
	"Y" :  NumberString , // "0.00000000"  // Last quote asset transacted quantity (i.e. lastPrice * lastQty)
	 
	"Q" :  NumberString , // "0.00000000"  // Quote Order Quantity
	 
	"W" :  number , // 1499405658657  // Working Time; This is only visible if the order has been placed on the book.
	 
	"V" :  string , // "NONE" // selfTradePreventionMode 
	
	}
	| {
	"e" :  string , // "listStatus"  //Event Type
	 
	"E" :  number , // 1564035303637  //Event Time
	 
	"s" :  string , // "ETHBTC"  //Symbol
	 
	"g" :  number , // 2  //OrderListId
	 
	"c" :  string , // "OCO"  //Contingency Type
	 
	"l" :  string , // "EXEC_STARTED"  //List Status Type
	 
	"L" :  string , // "EXECUTING"  //List Order Status
	 
	"r" :  string , // "NONE"  //List Reject Reason
	 
	"C" :  string , // "F4QN4G8DlFATFlIUQ0cjdD"  //List Client Order ID
	 
	"T" :  number , // 1564035303625  //Transaction Time
	 
	"O" : [ //An array of objects
	
	
	 {
		"s" :  string , // "ETHBTC"  //Symbol
	 
		"i" :  number , // 17  // orderId
	 
		"c" :  string , // "AJYsMjErWJesZvqlJCTUgL" //ClientOrderId 
		
		},
	| {
		"s" :  string , // "ETHBTC"  
		"i" :  number , // 18  
		"c" :  string , // "bfYPSQdLoqAJeNrOr9adzq" 
		
		}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-flexible-product-list-user_data

GetFlexibleProductList = () => {
	const name = "Get Flexible Product List (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/lending/daily/product/list",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// &quot;ALL&quot;, &quot;SUBSCRIBABLE&quot;, &quot;UNSUBSCRIBABLE&quot;; Default: &quot;ALL&quot;
		status? : ENUM_status
		asset? : STRING
		// &quot;ALL&quot;, &quot;TRUE&quot;; Default: &quot;ALL&quot;
		featured? : STRING
		// Current query page. Default: 1, Min: 1
		current? : LONG
		// Default: 50, Max: 100
		size? : LONG
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"asset" :  string , // "BTC"  
	"avgAnnualInterestRate" :  NumberString , // "0.05000000" 
	"tierAnnualInterestRate" : {
		"0-5BTC" :  number , // 0.05  
		"5-10BTC" :  number , // 0.03  
		"&gt;10BTC" :  number , // 0.01 
		
		},
	"canPurchase" :  boolean , // true  
	"canRedeem" :  boolean , // true  
	"dailyInterestPerThousand" :  NumberString , // "0.00685000"  //abandoned
	 
	"featured" :  boolean , // true  
	"minPurchaseAmount" :  NumberString , // "0.01000000"  
	"productId" :  string , // "BTC001"  
	"purchasedAmount" :  NumberString , // "16.32467016"  
	"status" :  string , // "PURCHASING"  //PREHEATING: Warming up; PURCHASING: Subscribing; END: Finish
	 
	"upLimit" :  NumberString , // "200.00000000"  
	"upLimitPerUser" :  NumberString , // "5.00000000" 
	
	},
	| {
	"asset" :  string , // "BUSD"  
	"avgAnnualInterestRate" :  NumberString , // "0.01228590"  
	"tierAnnualInterestRate" :  NumberString , // ""  
	"canPurchase" :  boolean , // true  
	"canRedeem" :  boolean , // true  
	"dailyInterestPerThousand" :  NumberString , // "0.03836000"  //abandoned
	 
	"featured" :  boolean , // true  
	"minPurchaseAmount" :  NumberString , // "0.10000000"  
	"productId" :  string , // "BUSD001"  
	"purchasedAmount" :  NumberString , // "10.38932339"  
	"status" :  string , // "PURCHASING"  //PREHEATING: Warming up; PURCHASING: Subscribing; END: Finish
	 
	"upLimit" :  NumberString , // "100000.00000000"  
	"upLimitPerUser" :  NumberString , // "50000.00000000" 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-left-daily-purchase-quota-of-flexible-product-user_data

GetLeftDailyPurchaseQuotaofFlexibleProduct = () => {
	const name = "Get Left Daily Purchase Quota of Flexible Product (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/lending/daily/userLeftQuota",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		productId : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"asset" :  string , // "BUSD"  
	"leftQuota" :  NumberString , // "50000.00000000" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#purchase-flexible-product-user_data

PurchaseFlexibleProduct = () => {
	const name = "Purchase Flexible Product (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/lending/daily/purchase",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		productId : STRING
		amount : DECIMAL
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"purchaseId" :  number , // 40607 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-left-daily-redemption-quota-of-flexible-product-user_data

GetLeftDailyRedemptionQuotaofFlexibleProduct = () => {
	const name = "Get Left Daily Redemption Quota of Flexible Product (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/lending/daily/userRedemptionQuota",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		productId : STRING
		// &quot;FAST&quot;, &quot;NORMAL&quot;
		type : ENUM_type
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"asset" :  string , // "USDT"  
	"dailyQuota" :  NumberString , // "10000000.00000000"  
	"leftQuota" :  NumberString , // "0.00000000"  
	"minRedemptionAmount" :  NumberString , // "0.10000000" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#redeem-flexible-product-user_data

RedeemFlexibleProduct = () => {
	const name = "Redeem Flexible Product (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/lending/daily/redeem",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		productId : STRING
		amount : DECIMAL
		// &quot;FAST&quot;
		type : ENUM_type
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {} 
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-flexible-product-position-user_data

GetFlexibleProductPosition = () => {
	const name = "Get Flexible Product Position (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/lending/daily/token/position",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset? : STRING
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"tierAnnualInterestRate" : {
		"0-5BTC" :  number , // 0.05  
		"5-10BTC" :  number , // 0.03  
		"&gt;10BTC" :  number , // 0.01 
		
		},
	"annualInterestRate" :  NumberString , // "0.02599895"  
	"asset" :  string , // "USDT"  
	"avgAnnualInterestRate" :  NumberString , // "0.02599895"  
	"canRedeem" :  boolean , // true  
	"dailyInterestRate" :  NumberString , // "0.00007123"  
	"freeAmount" :  NumberString , // "75.46000000"  
	"freezeAmount" :  NumberString , // "0.00000000"  // abandoned
	 
	"lockedAmount" :  NumberString , // "0.00000000"  // abandoned
	 
	"productId" :  string , // "USDT001"  
	"productName" :  string , // "USDT"  
	"redeemingAmount" :  NumberString , // "0.00000000"  
	"todayPurchasedAmount" :  NumberString , // "0.00000000"  
	"totalAmount" :  NumberString , // "75.46000000"  
	"totalInterest" :  NumberString , // "0.22759183" 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-fixed-and-activity-project-list-user_data

GetFixedandActivityProjectList = () => {
	const name = "Get Fixed and Activity Project List(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/lending/project/list",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset? : STRING
		// &quot;ACTIVITY&quot;, &quot;CUSTOMIZED_FIXED&quot;
		type : ENUM_type
		// &quot;ALL&quot;, &quot;SUBSCRIBABLE&quot;, &quot;UNSUBSCRIBABLE&quot;; default &quot;ALL&quot;
		status? : ENUM_status
		// default &quot;true&quot;
		isSortAsc? : BOOLEAN
		// &quot;START_TIME&quot;, &quot;LOT_SIZE&quot;, &quot;INTEREST_RATE&quot;, &quot;DURATION&quot;; default &quot;START_TIME&quot;
		sortBy? : ENUM_sortBy
		// Currently querying page. Start from 1. Default:1
		current? : LONG
		// Default:10, Max:100
		size? : LONG
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"asset" :  string , // "USDT"  
	"displayPriority" :  number , // 1  
	"duration" :  number , // 90  
	"interestPerLot" :  NumberString , // "1.35810000"  
	"interestRate" :  NumberString , // "0.05510000"  
	"lotSize" :  NumberString , // "100.00000000"  
	"lotsLowLimit" :  number , // 1  
	"lotsPurchased" :  number , // 74155  
	"lotsUpLimit" :  number , // 80000  
	"maxLotsPerUser" :  number , // 2000  
	"needKyc" :  boolean , // false  
	"projectId" :  string , // "CUSDT90DAYSS001"  
	"projectName" :  string , // "USDT"  
	"status" :  string , // "PURCHASING"  
	"type" :  string , // "CUSTOMIZED_FIXED"  
	"withAreaLimitation" :  boolean , // false 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#purchase-fixed-activity-project-user_data

PurchaseFixedActivityProject = () => {
	const name = "Purchase Fixed/Activity Project  (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/lending/customizedFixed/purchase",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		projectId : STRING
		lot : LONG
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"purchaseId" :  NumberString , // "18356" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-fixed-activity-project-position-user_data

GetFixedActivityProjectPosition = () => {
	const name = "Get Fixed/Activity Project Position (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/lending/project/position/list",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset? : STRING
		projectId? : STRING
		// &quot;HOLDING&quot;, &quot;REDEEMED&quot;
		status? : ENUM_status
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"asset" :  string , // "USDT"  
	"canTransfer" :  boolean , // true  
	"createTimestamp" :  number , // 1587010770000  
	"duration" :  number , // 14  
	"endTime" :  number , // 1588291200000  
	"interest" :  NumberString , // "0.19950000"  
	"interestRate" :  NumberString , // "0.05201250"  
	"lot" :  number , // 1  
	"positionId" :  number , // 51724  
	"principal" :  NumberString , // "100.00000000"  
	"projectId" :  string , // "CUSDT14DAYSS001"  
	"projectName" :  string , // "USDT"  
	"purchaseTime" :  number , // 1587010771000  
	"redeemDate" :  string , // "2020-05-01"  
	"startTime" :  number , // 1587081600000  
	"status" :  string , // "HOLDING"  
	"type" :  string , // "CUSTOMIZED_FIXED" 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#lending-account-user_data

LendingAccount = () => {
	const name = "Lending Account (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/lending/union/account",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"positionAmountVos" : [
	 {
		"amount" :  NumberString , // "75.46000000"  
		"amountInBTC" :  NumberString , // "0.01044819"  
		"amountInUSDT" :  NumberString , // "75.46000000"  
		"asset" :  string , // "USDT" 
		
		},
	| {
		"amount" :  NumberString , // "1.67072036"  
		"amountInBTC" :  NumberString , // "0.00023163"  
		"amountInUSDT" :  NumberString , // "1.67289230"  
		"asset" :  string , // "BUSD" 
		
		}
	
	],
	"totalAmountInBTC" :  NumberString , // "0.01067982"  
	"totalAmountInUSDT" :  NumberString , // "77.13289230"  
	"totalFixedAmountInBTC" :  NumberString , // "0.00000000"  
	"totalFixedAmountInUSDT" :  NumberString , // "0.00000000"  
	"totalFlexibleInBTC" :  NumberString , // "0.01067982"  
	"totalFlexibleInUSDT" :  NumberString , // "77.13289230" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-purchase-record-user_data

GetPurchaseRecord = () => {
	const name = "Get Purchase Record (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/lending/union/purchaseRecord",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// &quot;DAILY&quot; for flexible, &quot;ACTIVITY&quot; for activity, &quot;CUSTOMIZED_FIXED&quot; for fixed
		lendingType : ENUM_lendingType
		asset? : STRING
		startTime? : LONG
		endTime? : LONG
		// Currently querying page. Start from 1. Default:1
		current? : LONG
		// Default:10, Max:100
		size? : LONG
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"amount" :  NumberString , // "100.00000000"  
	"asset" :  string , // "USDT"  
	"createTime" :  number , // 1575018510000  
	"lendingType" :  string , // "DAILY"  
	"productName" :  string , // "USDT"  
	"purchaseId" :  number , // 26055  
	"status" :  string , // "SUCCESS" 
	
	}
	
	]
	| [
	 | {
	"amount" :  NumberString , // "100.00000000"  
	"asset" :  string , // "USDT"  
	"createTime" :  number , // 1575018453000  
	"lendingType" :  string , // "ACTIVITY"  
	"lot" :  number , // 1  
	"productName" :  string , // "【Special】USDT 7D (8%)"  
	"purchaseId" :  number , // 36857  
	"status" :  string , // "SUCCESS" 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-redemption-record-user_data

GetRedemptionRecord = () => {
	const name = "Get Redemption Record (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/lending/union/redemptionRecord",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// &quot;DAILY&quot; for flexible, &quot;ACTIVITY&quot; for activity, &quot;CUSTOMIZED_FIXED&quot; for fixed
		lendingType : ENUM_lendingType
		asset? : STRING
		startTime? : LONG
		endTime? : LONG
		// Currently querying page. Start from 1. Default:1
		current? : LONG
		// Default:10, Max:100
		size? : LONG
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"amount" :  NumberString , // "10.54000000"  
	"asset" :  string , // "USDT"  
	"createTime" :  number , // 1577257222000  
	"principal" :  NumberString , // "10.54000000"  
	"projectId" :  string , // "USDT001"  
	"projectName" :  string , // "USDT"  
	"status" :  string , // "PAID"  
	"type" :  string , // "FAST" 
	
	}
	
	]
	| [
	 | {
	"amount" :  NumberString , // "0.07070000"  
	"asset" :  string , // "USDT"  
	"createTime" :  number , // 1566200161000  
	"interest" :  NumberString , // "0.00070000"  
	"principal" :  NumberString , // "0.07000000"  
	"projectId" :  string , // "test06"  
	"projectName" :  string , // "USDT 1 day (10% anniualized)"  
	"startTime" :  number , // 1566198000000  
	"status" :  string , // "PAID" 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-interest-history-user_data-2

GetInterestHistory2 = () => {
	const name = "Get Interest History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/lending/union/interestHistory",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// &quot;DAILY&quot; for flexible, &quot;ACTIVITY&quot; for activity, &quot;CUSTOMIZED_FIXED&quot; for fixed
		lendingType : ENUM_lendingType
		asset? : STRING
		startTime? : LONG
		endTime? : LONG
		// Currently querying page. Start from 1. Default:1
		current? : LONG
		// Default:10, Max:100
		size? : LONG
		// The value cannot be greater than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"asset" :  string , // "BUSD"  
	"interest" :  NumberString , // "0.00006408"  
	"lendingType" :  string , // "DAILY"  
	"productName" :  string , // "BUSD"  
	"time" :  number , // 1577233578000 
	
	},
	| {
	"asset" :  string , // "USDT"  
	"interest" :  NumberString , // "0.00687654"  
	"lendingType" :  string , // "DAILY"  
	"productName" :  string , // "USDT"  
	"time" :  number , // 1577233562000 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#change-fixed-activity-position-to-daily-position-user_data

ChangeFixedActivityPositiontoDailyPosition = () => {
	const name = "Change Fixed/Activity Position to Daily Position(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/lending/positionChanged",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		projectId : STRING
		lot : LONG
		// for fixed position
		positionId? : LONG
		// no more than 
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"dailyPurchaseId" :  number , // 862290  
	"success" :  boolean , // true  
	"time" :  number , // 1577233578000 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-staking-product-list-user_data

GetStakingProductList = () => {
	const name = "Get Staking Product List(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/staking/productList",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// &quot;STAKING&quot; for Locked Staking, &quot;F_DEFI&quot; for flexible DeFi Staking, &quot;L_DEFI&quot; for locked DeFi Staking
		product : ENUM_product
		asset? : STRING
		// Currently querying page. Start from 1. Default:1
		current? : LONG
		// Default:10, Max:100
		size? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"projectId" :  string , // "Axs*90"  
	"detail" : {
		"asset" :  string , // "AXS"  //Lock up asset
	 
		"rewardAsset" :  string , // "AXS"  //Earn Asset
	 
		"duration" :  number , // 90  //Lock period(days)
	 
		"renewable" :  boolean , // true  //Project supports renewal
	 
		"apy" :  NumberString , // "1.2069" 
		
		},
	"quota" : | {
		"totalPersonalQuota" :  NumberString , // "2"  //Total Personal quota
	 
		"minimum" :  NumberString , // "0.001" //Minimum amount per order 
		
		}
	
	},
	| {
	"projectId" :  string , // "Fio*90"  
	"detail" : {
		"asset" :  string , // "FIO"  
		"rewardAsset" :  string , // "FIO"  
		"duration" :  number , // 90  
		"renewable" :  boolean , // true  
		"apy" :  NumberString , // "1.0769" 
		
		},
	"quota" : | {
		"totalPersonalQuota" :  NumberString , // "600"  
		"minimum" :  NumberString , // "0.1" 
		
		}
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#purchase-staking-product-user_data

PurchaseStakingProduct = () => {
	const name = "Purchase Staking Product(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/staking/purchase",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// &quot;STAKING&quot; for Locked Staking, &quot;F_DEFI&quot; for flexible DeFi Staking, &quot;L_DEFI&quot; for locked DeFi Staking
		product : ENUM_product
		productId : STRING
		amount : DECIMAL
		// true or false, default false. Active if product is &quot;STAKING&quot; or &quot;L_DEFI&quot;
		renewable? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"positionId" :  NumberString , // "12345"  
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#redeem-staking-product-user_data

RedeemStakingProduct = () => {
	const name = "Redeem Staking Product(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/staking/redeem",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// &quot;STAKING&quot; for Locked Staking, &quot;F_DEFI&quot; for flexible DeFi Staking, &quot;L_DEFI&quot; for locked DeFi Staking
		product : ENUM_product
		// &quot;1234&quot;, Mandatory if product is &quot;STAKING&quot; or &quot;L_DEFI&quot;
		positionId? : STRING
		productId : STRING
		// Mandatory if product is &quot;F_DEFI&quot;
		amount? : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-staking-product-position-user_data

GetStakingProductPosition = () => {
	const name = "Get Staking Product Position(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/staking/position",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// &quot;STAKING&quot; for Locked Staking, &quot;F_DEFI&quot; for flexible DeFi Staking, &quot;L_DEFI&quot; for locked DeFi Staking
		product : ENUM_product
		productId? : STRING
		asset? : STRING
		// Currently querying the page. Start from 1. Default:1
		current? : LONG
		// Default:10, Max:100
		size? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"positionId" :  NumberString , // "123123"  //Staking position ID
	 
	"projectId" :  string , // "Axs*90"  //Staking project ID
	 
	"asset" :  string , // "AXS"  //Locked asset 
	 
	"amount" :  NumberString , // "122.09202928"  //Locked Amount
	 
	"purchaseTime" :  NumberString , // "1646182276000"  //Subscription time
	 
	"duration" :  NumberString , // "60"  //Lock period(days) 
	 
	"accrualDays" :  NumberString , // "4"  //Accrue days
	 
	"rewardAsset" :  string , // "AXS"  //Earned asset
	 
	"APY" :  NumberString , // "0.2032"  
	"rewardAmt" :  NumberString , // "5.17181528"  //Earned amount
	 
	"extraRewardAsset" :  string , // "BNB"  //Rewards assets of extra staking type 
	 
	"extraRewardAPY" :  NumberString , // "0.0203"  //APY of extra staking type
	 
	"estExtraRewardAmt" :  NumberString , // "5.17181528"  //Rewards of extra staking type, distribute when order expires
	 
	"nextInterestPay" :  NumberString , // "1.29295383"  //Next estimated interest payment
	 
	"nextInterestPayDate" :  NumberString , // "1646697600000"  //Next interest payment date
	 
	"payInterestPeriod" :  NumberString , // "1"  //Interest cycle
	 
	"redeemAmountEarly" :  NumberString , // "2802.24068892"  //Early redemption amount
	 
	"interestEndDate" :  NumberString , // "1651449600000"  //Interest accrual end date
	 
	"deliverDate" :  NumberString , // "1651536000000"  //Redemption arrival time
	 
	"redeemPeriod" :  NumberString , // "1"  //Redemption interval
	 
	"redeemingAmt" :  NumberString , // "232.2323"  //Amount under redemption
	 
	"partialAmtDeliverDate" :  NumberString , // "1651536000000"  //Arrival time of partial redemption amount of order
	 
	"canRedeemEarly" :  boolean , // true  //When it is true, early redemption can be operated 
	 
	"renewable": true ,  //When it is true, auto staking can be operated 
	"type" :  string , // "AUTO"  //Order type is auto-staking or normal
	 
	"status" :  string , // "HOLDING" 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-staking-history-user_data

GetStakingHistory = () => {
	const name = "Get Staking History(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/staking/stakingRecord",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// &quot;STAKING&quot; for Locked Staking, &quot;F_DEFI&quot; for flexible DeFi Staking, &quot;L_DEFI&quot; for locked DeFi Staking
		product : ENUM_product
		// &quot;SUBSCRIPTION&quot;, &quot;REDEMPTION&quot;, &quot;INTEREST&quot;
		txnType : ENUM_txnType
		asset? : STRING
		startTime? : LONG
		endTime? : LONG
		// Currently querying the page. Start from 1. Default:1
		current? : LONG
		// Default:10, Max:100
		size? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"positionId" :  NumberString , // "123123"  
	"time" :  number , // 1575018510000  
	"asset" :  string , // "BNB"  
	"project" :  string , // "BSC"  //DeFi Staking’s project 
	 
	"amount" :  NumberString , // "21312.23223"  
	"lockPeriod" :  NumberString , // "30"  
	"deliverDate" :  NumberString , // "1575018510000"  //Redemption date
	 
	"type" :  string , // "AUTO"  // display only for subscription
	 
	"status" :  string , // "success" 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#set-auto-staking-user_data

SetAutoStaking = () => {
	const name = "Set Auto Staking(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/staking/setAutoStaking",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// &quot;STAKING&quot; for Locked Staking,  &quot;L_DEFI&quot; for locked DeFi Staking
		product : ENUM_product
		positionId : STRING
		// true or false
		renewable : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-personal-left-quota-of-staking-product-user_data

GetPersonalLeftQuotaofStakingProduct = () => {
	const name = "Get Personal Left Quota of Staking Product(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/staking/personalLeftQuota",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// &quot;STAKING&quot; for Locked Staking, &quot;F_DEFI&quot; for flexible DeFi Staking, &quot;L_DEFI&quot; for locked DeFi Staking
		product : ENUM_product
		productId : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"leftPersonalQuota" :  NumberString , // "1000" // User left quota 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#acquiring-algorithm-market_data

AcquiringAlgorithm = () => {
	const name = "Acquiring Algorithm (MARKET_DATA)"
	const nameType = "MARKET_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	type req = {
	"code" :  number , // 0  
	"msg" :  NumberString , // ""  
	"data" : [
	 {
		"algoName" :  string , // "sha256"  //  Algorithm name
	 
		"algoId" :  number , // 1  // Algorithm ID
	 
		"poolIndex" :  number , // 0  // Sequence 
	 
		"unit" :  string , // "h/s" //   Unit 
		
		}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#acquiring-coinname-market_data

AcquiringCoinName = () => {
	const name = "Acquiring CoinName (MARKET_DATA)"
	const nameType = "MARKET_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	type req = {
	"code" :  number , // 0  
	"msg" :  NumberString , // ""  
	"data" : [
	 {
		"coinName" :  string , // "BTC"  //  Currencyname
	 
		"coinId" :  number , // 1  // id
	 
		"poolIndex" :  number , // 0  // Sort
	 
		"algoId" :  number , // 1  // Algorithm
	 
		"algoName" :  string , // "sha256" //Name of algorithm 
		
		}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#request-for-detail-miner-list-user_data

RequestforDetailMinerList = () => {
	const name = "Request for Detail Miner List (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 5,
		}
	]
	type req = {
	"code" :  number , // 0  
	"msg" :  NumberString , // ""  
	"data" : [
	 {
		"workerName" :  string , // "bhdc1.16A10404B"  //Mining Account name
	 
		"type" :  string , // "H_hashrate"  // Type of hourly hashrate
	 
		"hashrateDatas" : [		
	 {
				"time" :  number , // 1587902400000  //  Time
	 
				"hashrate" :  NumberString , // "0"  // Hashrate
	 
				"reject" :  number , // 0 //Rejection Rate 
				
				},
			| {
				"time" :  number , // 1587906000000  
				"hashrate" :  NumberString , // "0"  
				"reject" :  number , // 0 
				
				}
			
			]
		
		},
	| {
		"workerName" :  string , // "bhdc1.16A10404B"  //Mining Account name
	 
		"type" :  string , // "D_hashrate"  //Type of daily hashrate
	 
		"hashrateDatas" : [		
	 {
				"time" :  number , // 1587902400000  //  Time
	 
				"hashrate" :  NumberString , // "0"  // Hashrate 
	 
				"reject" :  number , // 0 //Rejection Rate 
				
				},
			| {
				"time" :  number , // 1587906000000  
				"hashrate" :  NumberString , // "0"  
				"reject" :  number , // 0 
				
				}
			
			]
		
		}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#request-for-miner-list-user_data

RequestforMinerList = () => {
	const name = "Request for Miner List (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 5,
		}
	]
	type req = {
	"code" :  number , // 0  
	"msg" :  NumberString , // ""  
	"data" : {
	"workerDatas" : [	
	 {
			"workerId" :  NumberString , // "1420554439452400131"  //Miner ID
	 
			"workerName" :  string , // "2X73"  //Miner's name  
	 
			"status" :  number , // 3  // Status：1 valid, 2 invalid, 3 no longer valid
	 
			"hashRate" :  number , // 0  // Real-time rate
	 
			"dayHashRate" :  number , // 0  //24H Hashrate
	 
			"rejectRate" :  number , // 0  //Real-time Rejection Rate
	 
			"lastShareTime" :  number , // 1587712919000 // Last submission time  
			
			},
		| {
			"workerId" :  NumberString , // "7893926126382807951"  
			"workerName" :  string , // "AZDC1.1A10101"  
			"status" :  number , // 2  
			"hashRate" :  number , // 29711247541680  
			"dayHashRate" :  number , // 12697781298013.66  
			"rejectRate" :  number , // 0  
			"lastShareTime" :  number , // 1587969727000 
			
			}
		
		],
	"totalNum" :  number , // 18530  // Total amount
	 
	"pageSize" :  number , // 20 // Rows per page 
	
	}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#earnings-list-user_data

EarningsList = () => {
	const name = "Earnings List(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 5,
		}
	]
	type req = {
	"code" :  number , // 0  
	"msg" :  NumberString , // ""  
	"data" : {
	"accountProfits" : [	
	 {
			"time" :  number , // 1586188800000  // Mining date
	 
			"type" :  number , // 31  // 0:Mining Wallet,5:Mining Address,7:Pool Savings,8:Transferred,31:Income Transfer ,32:Hashrate Resale-Mining Wallet 33:Hashrate Resale-Pool Savings
	 
			"hashTransfer" :  number , // null  // Transferred Hashrate
	 
			"transferAmount" :  number , // null  // Transferred Income   
	 
			"dayHashRate" :  number , // 129129903378244  // Daily Hashrate
	 
			"profitAmount" :  number , // 8.6083060304  //Earnings Amount
	 
			"coinName" :  string , // "BTC"  // Coin Type
	 
			"status" :  number , // 2 //Status：0:Unpaid， 1:Paying  2：Paid 
			
			},
		| {
			"time" :  number , // 1607529600000  
			"coinName" :  string , // "BTC"  
			"type" :  number , // 0  
			"dayHashRate" :  number , // 9942053925926  
			"profitAmount" :  number , // 0.85426469  
			"hashTransfer" :  number , // 200000000000  
			"transferAmount" :  number , // 0.02180958  
			"status" :  number , // 2 
			
			},
		| {
			"time" :  number , // 1607443200000  
			"coinName" :  string , // "BTC"  
			"type" :  number , // 31  
			"dayHashRate" :  number , // 200000000000  
			"profitAmount" :  number , // 0.02905916  
			"hashTransfer" :  number , // null  
			"transferAmount" :  number , // null  
			"status" :  number , // 2 
			
			}
		
		],
	"totalNum" :  number , // 3  // Total Rows
	 
	"pageSize" :  number , // 20 // Rows per page 
	
	}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#extra-bonus-list-user_data

ExtraBonusList = () => {
	const name = "Extra Bonus List (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 5,
		}
	]
	type req = {
	"code" :  number , // 0  
	"msg" :  NumberString , // ""  
	"data" : {
	"otherProfits" : [	
	 {
			"time" :  number , // 1607443200000  // Mining date
	 
			"coinName" :  string , // "BTC"  // Coin Name
	 
			"type" :  number , // 4  // 1: Merged Mining， 2: Activity Bonus, 3:Rebate 4:Smart Pool 6:Income Transfer 7:Pool Savings
	 
			"profitAmount" :  number , // 0.0011859  //Amount
	 
			"status" :  number , // 2 //Status：0:Unpaid， 1:Paying  2：Paid 
			
			}
		
		],
	"totalNum" :  number , // 3  // Total Rows
	 
	"pageSize" :  number , // 20 // Rows per page 
	
	}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#hashrate-resale-list-user_data

HashrateResaleList = () => {
	const name = "Hashrate Resale List (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 5,
		}
	]
	type req = {
	"code" :  number , // 0  
	"msg" :  NumberString , // ""  
	"data" : {
	"configDetails" : [	
	 {
			"configId" :  number , // 168  // Mining ID
	 
			"poolUsername" :  NumberString , // "123"  //Transfer out of subaccount
	 
			"toPoolUsername" :  string , // "user1"  //  Transfer into subaccount
	 
			"algoName" :  string , // "Ethash"  // Transfer algorithm
	 
			"hashRate" :  number , // 5000000  //  Transferred Hashrate quantity
	 
			"startDay" :  number , // 20201210  // Start date
	 
			"endDay" :  number , // 20210405  //End date
	 
			"status" :  number , // 1 //Status：0 Processing，1：Cancelled，2：Terminated  
			
			},
		| {
			"configId" :  number , // 166  
			"poolUsername" :  string , // "pop"  
			"toPoolUsername" :  NumberString , // "111111"  
			"algoName" :  string , // "Ethash"  
			"hashRate" :  number , // 3320000  
			"startDay" :  number , // 20201226  
			"endDay" :  number , // 20201227  
			"status" :  number , // 0 
			
			}
		
		],
	"totalNum" :  number , // 21  
	"pageSize" :  number , // 200 
	
	}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#hashrate-resale-detail-user_data

HashrateResaleDetail = () => {
	const name = "Hashrate Resale Detail (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 5,
		}
	]
	// type req = {
	// "code" :  number , // 0  
	// "msg" :  NumberString , // ""  
	// "data" : {
	// "profitTransferDetails" :  number , // [{ 
	// "poolUsername" :  string , // "test4001"  // Transfer out of sub-account
	// 
	// "toPoolUsername" :  string , // "pop"  // Transfer into subaccount
	// 
	// "algoName" :  string , // "sha256"  // Transfer algorithm
	// 
	// "hashRate" :  number , // 200000000000  // Transferred Hashrate quantity
	// 
	// "day" :  number , // 20201213  // Transfer date
	// 
	// "amount" :  number , // 0.2256872  // Transferred income
	// 
	// "coinName" :  string , // "BTC" // Coin Name 
	//
	// }
	// | {
	// "poolUsername" :  string , // "test4001"  
	// "toPoolUsername" :  string , // "pop"  
	// "algoName" :  string , // "sha256"  
	// "hashRate" :  number , // 200000000000  
	// "day" :  number , // 20201213  
	// "amount" :  number , // 0.2256872  
	// "coinName" :  string , // "BTC" 
	//
	// }
	//
	// ],
	// "totalNum" :  number , // 8  
	// "pageSize" :  number , // 200 
	//
	// }
	//
	// }
	
}

//https://binance-docs.github.io/apidocs/spot/en#hashrate-resale-request-user_data

HashrateResaleRequest = () => {
	const name = "Hashrate Resale Request (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 5,
		}
	]
	type req = {
	"code" :  number , // 0  
	"msg" :  NumberString , // ""  
	"data" :  number , // 171 // Mining Account 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#cancel-hashrate-resale-configuration-user_data

Cancelhashrateresaleconfiguration = () => {
	const name = "Cancel hashrate resale configuration(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 5,
		}
	]
	type req = {
	"code" :  number , // 0  
	"msg" :  NumberString , // ""  
	"data" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#statistic-list-user_data

StatisticList = () => {
	const name = "Statistic List (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 5,
		}
	]
	type req = {
	"code" :  number , // 0  
	"msg" :  NumberString , // ""  
	"data" : {
	"fifteenMinHashRate" :  NumberString , // "457835490067496409.00000000"  // 15 mins hashrate
	 
	"dayHashRate" :  NumberString , // "214289268068874127.65000000"  //  24H Hashrate
	 
	"validNum" :  number , // 0  // Effective quantity
	 
	"invalidNum" :  number , // 17562  // Invalid quantity
	 
	"profitToday" :{
	 // Today's estimate 
	"BTC" :  NumberString , // "0.00314332"  
	"BSV" :  NumberString , // "56.17055953"  
	"BCH" :  NumberString , // "106.61586001" 
	
	},
	"profitYesterday"   :{
	 //  Yesterday's earnings 
	"BTC" :  NumberString , // "0.00314332"  
	"BSV" :  NumberString , // "56.17055953"  
	"BCH" :  NumberString , // "106.61586001" 
	
	},
	"userName" :  string , // "test"  // Mining account
	 
	"unit" :  string , // "h/s"  //  Hashrate unit
	 
	"algo" :  string , // "sha256" // Algorithm 
	
	}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#account-list-user_data

AccountList = () => {
	const name = "Account List (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 5,
		}
	]
	type req = {
	"code" :  number , // 0  
	"msg" :  NumberString , // ""  
	"data" : [
	 {
	"type" :  string , // "H_hashrate"  //Type of hourly hashrate
	 
	"userName" :  string , // "test"  // Mining account
	 
	"list" : [
	 {
		"time" :  number , // 1585267200000  // Time
	 
		"hashrate" :  NumberString , // "0.00000000"  // Hashrate
	 
		"reject" :  NumberString , // "0.00000000" //Rejection Rate 
		
		},
	| {
		"time" :  number , // 1585353600000  
		"hashrate" :  NumberString , // "0.00000000"  
		"reject" :  NumberString , // "0.00000000" 
		
		}
	
	]
	
	},
	| {
	"type" :  string , // "D_hashrate"  //Type of daily hashrate
	 
	"userName" :  string , // "test"  // Mining account
	 
	"list" : [
	 {
		"time" :  number , // 1587906000000  // Time
	 
		"hashrate" :  NumberString , // "0.00000000"  // Hashrate
	 
		"reject" :  NumberString , // "0.00000000" //Rejection Rate 
		
		},
	| {
		"time" :  number , // 1587909600000  
		"hashrate" :  NumberString , // "0.00000000"  
		"reject" :  NumberString , // "0.00000000" 
		
		}
	
	]
	
	}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#mining-account-earning-user_data

MiningAccountEarning = () => {
	const name = "Mining Account Earning (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 5,
		}
	]
	type req = {
	"code" :  number , // 0  
	"msg" :  NumberString , // ""  
	"data" : {
	"accountProfits" : [
	 {
	"time" :  number , // 1607443200000  
	"coinName" :  string , // "BTC"  // Coin
	 
	"type" :  number , // 2  // 0:Referral 1：Refund 2：Rebate
	 
	"puid" :  number , // 59985472  //Sub-account id
	 
	"subName" :  string , // "vdvaghani"  //Mining account
	 
	"amount" :  number , // 0.09186957 //Amount 
	
	}
	
	],
	"totalNum" :  number , // 3  // Total records
	 
	"pageSize" :  number , // 20 // Size of one page 
	
	}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#futures

NewFutureAccountTransfer = () => {
	const name = "New Future Account Transfer (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// The asset being transferred, e.g., USDT
		asset : STRING
		// The amount to be transferred
		amount : DECIMAL
		type : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"tranId" :  number , // 100000001 //transaction id 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-future-account-transaction-history-list-user_data

GetFutureAccountTransactionHistoryList = () => {
	const name = "Get Future Account Transaction History List (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	// Name Type Mandatory Description
	type params = {
		asset? : STRING
		startTime : LONG
		endTime? : LONG
		// Currently querying page. Start from 1. Default:1
		current? : LONG
		// Default:10 Max:100
		size? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [
	 {
	"asset" :  string , // "USDT"  
	"tranId" :  number , // 100000001  
	"amount" :  NumberString , // "40.84624400"  
	"type" :  NumberString , // "1"  // one of 1( from spot to USDT-Ⓜ), 2( from USDT-Ⓜ to spot), 3( from spot to COIN-Ⓜ), and 4( from COIN-Ⓜ to spot)
	 
	"timestamp" :  number , // 1555056425000  
	"status" :  string , // "CONFIRMED" //one of PENDING (pending to execution), CONFIRMED (successfully transfered), FAILED (execution failed, nothing happened to your account); 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#cross-collateral-borrow-history-user_data

CrossCollateralBorrowHistory = () => {
	const name = "Cross-Collateral Borrow History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	// Name Type Mandatory Description
	type params = {
		coin? : STRING
		startTime? : LONG
		endTime? : LONG
		// default 500, max 1000
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" :[
	 {
	"confirmedTime" :  number , // 1582540328433  
	"coin" :  string , // "USDT"  
	"collateralRate" :  NumberString , // "0.89991001"  // collateralLevel
	 
	"leftTotal" :  NumberString , // "4.5"  
	"leftPrincipal" :  NumberString , // "4.5"  
	"deadline" :  number , // 4736102399000  
	"collateralCoin" :  string , // "BUSD"  
	"collateralAmount" :  NumberString , // "5.0"  
	"orderStatus" :  string , // "PENDING"  
	"borrowId" :  NumberString , // "438648398970089472" 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#cross-collateral-repayment-history-user_data

CrossCollateralRepaymentHistory = () => {
	const name = "Cross-Collateral Repayment History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	// Name Type Mandatory Description
	type params = {
		coin? : STRING
		startTime? : LONG
		endTime? : LONG
		// default 500, max 1000
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" :[
	 {
	"coin" :  string , // "USDT"  
	"amount" :  NumberString , // "1.68"  
	"collateralCoin" :  string , // "BUSD"  
	"repayType" :  string , // "NORMAL"  // "COLLATERAL" for collateral repayment
	 
	"releasedCollateral" :  NumberString , // "1.80288889"  
	"price" :  NumberString , // "1.001"  // Loan/collateral exchange rate
	 
	"repayCollateral" :  NumberString , // "10010"  // Only for collateral repayment
	 
	"confirmedTime" :  number , // 1582781327575  
	"updateTime" :  number , // 1582794387516  // time
	 
	"status" :  string , // "PENDING"  
	"repayId" :  NumberString , // "439659223998894080" 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#cross-collateral-wallet-v2-user_data

CrossCollateralWalletV2 = () => {
	const name = "Cross-Collateral Wallet V2 (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"totalCrossCollateral" :  NumberString , // "5.8238577133"  
	"totalBorrowed" :  NumberString , // "5.07000000"  
	"totalInterest" :  NumberString , // "0.0"  // New for interest collection
	 
	"interestFreeLimit" :  NumberString , // "100000"  // New for interest free limit
	 
	"asset" :  string , // "USD"  // New for USD value
	 
	"crossCollaterals" :[
	 {
	"loanCoin" :  string , // "USDT"  
	"collateralCoin" :  string , // "BUSD"  
	"locked" :  NumberString , // "5.82211108"  
	"loanAmount" :  NumberString , // "5.07"  
	"currentCollateralRate" :  NumberString , // "0.87168984"  // collateralLevel
	 
	"interestFreeLimitUsed" :  NumberString , // "5.07"  // New for interest free limit
	 
	"principalForInterest" :  NumberString , // "0.0"  // New for interest collection
	 
	"interest" :  NumberString , // "0.0" // New for interest collection 
	
	},
	| {
	"loanCoin" :  string , // "BUSD"  
	"collateralCoin" :  string , // "BTC"  
	"locked" :  NumberString , // "0"  
	"loanAmount" :  NumberString , // "0"  
	"currentCollateralRate" :  NumberString , // "0"  // collateralLevel
	 
	"interestFreeLimitUsed" :  NumberString , // "0"  // New for interest free limit
	 
	"principalForInterest" :  NumberString , // "0.0"  // New for interest collection
	 
	"interest" :  NumberString , // "0.0" // New for interest collection 
	
	}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#adjust-cross-collateral-ltv-history-user_data

AdjustCrossCollateralLTVHistory = () => {
	const name = "Adjust Cross-Collateral LTV History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	// Name Type Mandatory Description
	type params = {
		loanCoin? : STRING
		collateralCoin? : STRING
		startTime? : LONG
		endTime? : LONG
		// default 500, max 1000
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" :[
	 {
	"amount" :  NumberString , // ".17398184"  
	"collateralCoin" :  string , // "BUSD"  
	"coin" :  string , // "USDT"  
	"preCollateralRate" :  NumberString , // "0.87054861"  
	"afterCollateralRate" :  NumberString , // "0.89736451"  
	"direction" :  string , // "REDUCED"  
	"status" :  string , // "COMPLETED"  
	"adjustTime" :  number , // 1583978243588 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#cross-collateral-liquidation-history-user_data

CrossCollateralLiquidationHistory = () => {
	const name = "Cross-Collateral Liquidation History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 10,
		}
	]
	// Name Type Mandatory Description
	type params = {
		loanCoin? : STRING
		collateralCoin? : STRING
		startTime? : LONG
		endTime? : LONG
		// default 500, max 1000
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" :[
	 {
	"collateralAmountForLiquidation" :  NumberString , // "10.12345678"  
	"collateralCoin" :  string , // "BUSD"  
	"forceLiquidationStartTime" :  number , // 1583978243588  
	"coin" :  string , // "USDT"  
	"restCollateralAmountAfterLiquidation" :  NumberString , // "15.12345678"  
	"restLoanAmount" :  NumberString , // "11.12345678"  
	"status" :  string , // "PENDING" 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#cross-collateral-interest-history-user_data

CrossCollateralInterestHistory = () => {
	const name = "Cross-Collateral Interest History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		collateralCoin? : STRING
		startTime? : LONG
		endTime? : LONG
		// Currently querying page. Start from 1. Default:1
		current? : LONG
		// Default:500 Max:1000
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" :[
	 {
	"collateralCoin" :  string , // "BUSD"  
	"interestCoin" :  string , // "USDT"  
	"interest" :  NumberString , // "2.354"  
	"interestFreeLimitUsed" :  NumberString , // "0"  // New for interest free limit
	 
	"principalForInterest" :  NumberString , // "10000"  
	"interestRate" :  NumberString , // "0.002"  
	"time" :  number , // 1582794387516 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#volume-participation-vp-new-order-trade

VolumeParticipation = () => {
	const name = "Volume Participation(VP)"
	const nameType = "VP"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/algo/futures/newOrderVp",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Trading symbol eg. BTCUSDT
		symbol : STRING
		// Trading side ( BUY or SELL )
		side : ENUM_side
		// Default 
		positionSide? : ENUM_positionSide
		// Quantity of base asset; The notional (
		quantity : DECIMAL
		// Represent the relative speed of the current execution; ENUM: LOW, MEDIUM, HIGH
		urgency : ENUM_urgency
		// A unique id among Algo orders (length should be 32 characters)， If it is not sent, we will give default value
		clientAlgoId? : STRING
		// &quot;true&quot; or &quot;false&quot;. Default &quot;false&quot;; Cannot be sent in Hedge Mode; Cannot be sent when you open a position
		reduceOnly? : BOOLEAN
		// Limit price of the order; If it is not sent, will place order by market price by default
		limitPrice? : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"clientAlgoId" :  string , // "00358ce6a268403398bd34eaa36dffe7"  
	"success" :  boolean , // true  
	"code" :  number , // 0  
	"msg" :  string , // "OK" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#time-weighted-average-price-twap-new-order-trade

TimeWeightedAveragePrice = () => {
	const name = "Time-Weighted Average Price(Twap)"
	const nameType = "Twap"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/algo/futures/newOrderTwap",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Trading symbol eg. BTCUSDT
		symbol : STRING
		// Trading side ( BUY or SELL )
		side : ENUM_side
		// Default 
		positionSide? : ENUM_positionSide
		// Quantity of base asset; The notional (
		quantity : DECIMAL
		// Duration for TWAP orders in seconds. [300, 86400];Less than 5min =&gt; defaults to 5 min; Greater than 24h =&gt; defaults to 24h
		duration : LONG
		// A unique id among Algo orders (length should be 32 characters)， If it is not sent, we will give default value
		clientAlgoId? : STRING
		// &quot;true&quot; or &quot;false&quot;. Default &quot;false&quot;; Cannot be sent in Hedge Mode; Cannot be sent when you open a position
		reduceOnly? : BOOLEAN
		// Limit price of the order; If it is not sent, will place order by market price by default
		limitPrice? : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"clientAlgoId" :  string , // "65ce1630101a480b85915d7e11fd5078"  
	"success" :  boolean , // true  
	"code" :  number , // 0  
	"msg" :  string , // "OK" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#cancel-algo-order-trade

CancelAlgoOrder = () => {
	const name = "Cancel Algo Order (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		url : "DELETE/sapi/v1/algo/futures/order",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// eg. 14511
		algoId : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"algoId" :  number , // 14511  
	"success" :  boolean , // true  
	"code" :  number , // 0  
	"msg" :  string , // "OK" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-current-algo-open-orders-user_data

QueryCurrentAlgoOpenOrders = () => {
	const name = "Query Current Algo Open Orders (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/algo/futures/openOrders",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"total" :  number , // 1  
	"orders" : [
	 {
	"algoId" :  number , // 14517  
	"symbol" :  string , // "ETHUSDT"  
	"side" :  string , // "SELL"  
	"positionSide" :  string , // "SHORT"  
	"totalQty" :  NumberString , // "5.000"  
	"executedQty" :  NumberString , // "0.000"  
	"executedAmt" :  NumberString , // "0.00000000"  
	"avgPrice" :  NumberString , // "0.00"  
	"clientAlgoId" :  string , // "d7096549481642f8a0bb69e9e2e31f2e"  
	"bookTime" :  number , // 1649756817004  
	"endTime" :  number , // 0  
	"algoStatus" :  string , // "WORKING"  
	"algoType" :  string , // "VP"  
	"urgency" :  string , // "LOW" 
	
	}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-historical-algo-orders-user_data

QueryHistoricalAlgoOrders = () => {
	const name = "Query Historical Algo Orders (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/algo/futures/historicalOrders",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Trading symbol eg. BTCUSDT
		symbol? : STRING
		// BUY or SELL
		side? : ENUM_side
		// in milliseconds  eg.1641522717552
		startTime? : LONG
		// in milliseconds  eg.1641522526562
		endTime? : LONG
		// Default is 1
		page? : INT
		// MIN 1, MAX 100; Default 100
		pageSize? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"total" :  number , // 1  
	"orders" : [
	 {
	"algoId" :  number , // 14518  
	"symbol" :  string , // "BNBUSDT"  
	"side" :  string , // "BUY"  
	"positionSide" :  string , // "BOTH"  
	"totalQty" :  NumberString , // "100.00"  
	"executedQty" :  NumberString , // "0.00"  
	"executedAmt" :  NumberString , // "0.00000000"  
	"avgPrice" :  NumberString , // "0.000"  
	"clientAlgoId" :  string , // "acacab56b3c44bef9f6a8f8ebd2a8408"  
	"bookTime" :  number , // 1649757019503  
	"endTime" :  number , // 1649757088101  
	"algoStatus" :  string , // "CANCELLED"  
	"algoType" :  string , // "VP"  
	"urgency" :  string , // "LOW" 
	
	}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-sub-orders-user_data

QuerySubOrders = () => {
	const name = "Query Sub Orders (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/algo/futures/subOrders",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		algoId : LONG
		// Default is 1
		page? : INT
		// MIN 1, MAX 100; Default 100
		pageSize? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"total" :  number , // 1  
	"executedQty" :  NumberString , // "1.000"  
	"executedAmt" :  NumberString , // "3229.44000000"  
	"subOrders" : [
	 {
	"algoId" :  number , // 13723  
	"orderId" :  number , // 8389765519993908929  
	"orderStatus" :  string , // "FILLED"  
	"executedQty" :  NumberString , // "1.000"  
	"executedAmt" :  NumberString , // "3229.44000000"  
	"feeAmt" :  NumberString , // "-1.61471999"  
	"feeAsset" :  string , // "USDT"  
	"bookTime" :  number , // 1649319001964  
	"avgPrice" :  NumberString , // "3229.44"  
	"side" :  string , // "SELL"  
	"symbol" :  string , // "ETHUSDT"  
	"subId" :  number , // 1  
	"timeInForce" :  string , // "IMMEDIATE_OR_CANCEL"  
	"origQty" :  NumberString , // "1.000" 
	
	}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#time-weighted-average-price-twap-new-order-trade-2

TimeWeightedAveragePrice2 = () => {
	const name = "Time-Weighted Average Price (Twap)"
	const nameType = "Twap"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/algo/spot/newOrderTwap",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Trading symbol eg. BTCUSDT
		symbol : STRING
		// Trading side ( BUY or SELL )
		side : ENUM_side
		// Quantity of base asset; The notional (quantity * last price(base asset)) must be more than the equivalent of 1,000 USDT and less than the equivalent of 100,000 USDT
		quantity : DECIMAL
		// Duration for TWAP orders in seconds. [300, 86400]
		duration : LONG
		// A unique id among Algo orders (length should be 32 characters)， If it is not sent, we will give default value
		clientAlgoId? : STRING
		// Limit price of the order; If it is not sent, will place order by market price by default
		limitPrice? : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"clientAlgoId" :  string , // "65ce1630101a480b85915d7e11fd5078"  
	"success" :  boolean , // true  
	"code" :  number , // 0  
	"msg" :  string , // "OK" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#cancel-algo-order-trade-2

CancelAlgoOrder2 = () => {
	const name = "Cancel Algo Order (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		url : "DELETE/sapi/v1/algo/spot/order",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// eg. 14511
		algoId : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"algoId" :  number , // 14511  
	"success" :  boolean , // true  
	"code" :  number , // 0  
	"msg" :  string , // "OK" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-current-algo-open-orders-user_data-2

QueryCurrentAlgoOpenOrders2 = () => {
	const name = "Query Current Algo Open Orders (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/algo/spot/openOrders",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"total" :  number , // 1  
	"orders" : [
	 {
	"algoId" :  number , // 14517  
	"symbol" :  string , // "ETHUSDT"  
	"side" :  string , // "SELL"  
	"totalQty" :  NumberString , // "5.000"  
	"executedQty" :  NumberString , // "0.000"  
	"executedAmt" :  NumberString , // "0.00000000"  
	"avgPrice" :  NumberString , // "0.00"  
	"clientAlgoId" :  string , // "d7096549481642f8a0bb69e9e2e31f2e"  
	"bookTime" :  number , // 1649756817004  
	"endTime" :  number , // 0  
	"algoStatus" :  string , // "WORKING"  
	"algoType" :  string , // "TWAP"  
	"urgency" :  string , // "LOW" 
	
	}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-historical-algo-orders-user_data-2

QueryHistoricalAlgoOrders2 = () => {
	const name = "Query Historical Algo Orders (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/algo/spot/historicalOrders",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Trading symbol eg. BTCUSDT
		symbol? : STRING
		// BUY or SELL
		side? : ENUM_side
		// in milliseconds  eg.1641522717552
		startTime? : LONG
		// in milliseconds  eg.1641522526562
		endTime? : LONG
		// Default is 1
		page? : INT
		// MIN 1, MAX 100; Default 100
		pageSize? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"total" :  number , // 1  
	"orders" : [
	 {
	"algoId" :  number , // 14518  
	"symbol" :  string , // "BNBUSDT"  
	"side" :  string , // "BUY"  
	"totalQty" :  NumberString , // "100.00"  
	"executedQty" :  NumberString , // "0.00"  
	"executedAmt" :  NumberString , // "0.00000000"  
	"avgPrice" :  NumberString , // "0.000"  
	"clientAlgoId" :  string , // "acacab56b3c44bef9f6a8f8ebd2a8408"  
	"bookTime" :  number , // 1649757019503  
	"endTime" :  number , // 1649757088101  
	"algoStatus" :  string , // "CANCELLED"  
	"algoType" :  string , // "VP"  
	"urgency" :  string , // "LOW" 
	
	}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-sub-orders-user_data-2

QuerySubOrders2 = () => {
	const name = "Query Sub Orders (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/algo/spot/subOrders",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		algoId : LONG
		// Default is 1
		page? : INT
		// MIN 1, MAX 100; Default 100
		pageSize? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"total" :  number , // 1  
	"executedQty" :  NumberString , // "1.000"  
	"executedAmt" :  NumberString , // "3229.44000000"  
	"subOrders" : [
	 {
	"algoId" :  number , // 13723  
	"orderId" :  number , // 8389765519993908929  
	"orderStatus" :  string , // "FILLED"  
	"executedQty" :  NumberString , // "1.000"  
	"executedAmt" :  NumberString , // "3229.44000000"  
	"feeAmt" :  NumberString , // "-1.61471999"  
	"feeAsset" :  string , // "USDT"  
	"bookTime" :  number , // 1649319001964  
	"avgPrice" :  NumberString , // "3229.44"  
	"side" :  string , // "SELL"  
	"symbol" :  string , // "ETHUSDT"  
	"subId" :  number , // 1  
	"timeInForce" :  string , // "IMMEDIATE_OR_CANCEL"  
	"origQty" :  NumberString , // "1.000" 
	
	}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-classic-portfolio-margin-account-info-user_data

GetClassicPortfolioMarginAccountInfo = () => {
	const name = "Get Classic Portfolio Margin Account Info (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/portfolio/account",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"uniMMR" :  NumberString , // "5167.92171923"  // Classic Portfolio margin account maintenance margin rate
	 
	"accountEquity" :  NumberString , // "122607.35137903"  // Account equity, unit：USD
	 
	"actualEquity" :  NumberString , // "142607.35137903"  // Actual equity, unit：USD
	 
	"accountMaintMargin" :  NumberString , // "23.72469206"  // Classic Portfolio margin account maintenance margin, unit：USD
	 
	"accountStatus" :  string , // "NORMAL" // Classic Portfolio margin account status:"NORMAL", "MARGIN_CALL", "SUPPLY_MARGIN", "REDUCE_ONLY", "ACTIVE_LIQUIDATION", "FORCE_LIQUIDATION", "BANKRUPTED" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#classic-portfolio-margin-collateral-rate-market_data

ClassicPortfolioMarginCollateralRate = () => {
	const name = "Classic Portfolio Margin Collateral Rate (MARKET_DATA)"
	const nameType = "MARKET_DATA"
	const wight = [{
			name : "IP",
			data : 50,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/portfolio/collateralRate",
	}
	type req = [
	 {
	"asset" :  string , // "USDC"  
	"collateralRate" :  NumberString , // "1.0000" 
	
	},
	| {
	"asset" :  string , // "BUSD"  
	"collateralRate" :  NumberString , // "1.0000" 
	
	},
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-classic-portfolio-margin-bankruptcy-loan-amount-user_data

QueryClassicPortfolioMarginBankruptcyLoanAmount = () => {
	const name = "Query Classic Portfolio Margin Bankruptcy Loan Amount (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 500,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/portfolio/pmLoan",
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"asset" :  string , // "BUSD"  
	"amount" :  NumberString , // "579.45"  // portfolio margin bankruptcy loan amount in BUSD
	 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#classic-portfolio-margin-bankruptcy-loan-repay

ClassicPortfolioMarginBankruptcyLoanRepay = () => {
	const name = "Classic Portfolio Margin Bankruptcy Loan Repay"
	const nameType = ""
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/portfolio/repay",
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"tranId" :  number , // 58203331886213504 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-classic-portfolio-margin-interest-history-user_data

QueryClassicPortfolioMarginInterestHistory = () => {
	const name = "Query Classic Portfolio Margin Interest History(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 50,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/portfolio/interest-history",
	}
	// Name Type Mandatory Description
	type params = {
		asset? : STRING
		startTime? : LONG
		endTime? : LONG
		// Default:10 Max:100
		size? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"asset" :  string , // "USDT"  
	"interest" :  NumberString , // "24.4440"  //interest amount
	 
	"interestAccruedTime" :  number , // 1670227200000  
	"interestRate" :  NumberString , // "0.0001164"  //daily interest rate
	 
	"principal" :  NumberString , // "210000"  
	"type" :  string , // "um_negative_balance" 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-portfolio-margin-asset-index-price-market_data

QueryPortfolioMarginAssetIndexPrice = () => {
	const name = "Query Portfolio Margin Asset Index Price (MARKET_DATA)"
	const nameType = "MARKET_DATA"
	const wight = [{
			name : "IP",
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/portfolio/asset-index-price",
	}
	// Name Type Mandatory Description
	type params = {
		asset? : STRING
	}
	type req = [
	 {
	"asset" :  string , // "BTC"  
	"assetIndexPrice" :  NumberString , // "28251.9136906"  // in USD
	 
	"time" :  number , // 1683518338121 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#fund-auto-collection-trade

FundAutocollection = () => {
	const name = "Fund Auto-collection (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/portfolio/auto-collection",
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"msg" :  string , // "success" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#bnb-transfer-trade

BNBtransfer = () => {
	const name = "BNB transfer (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/portfolio/bnb-transfer",
	}
	// Name Type Mandatory Description
	type params = {
		amount : DECIMAL
		// &quot;TO_UM&quot;,&quot;FROM_UM&quot;
		transferSide : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"tranId" :  number , // 100000001 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#blvt-endpoints

GetBLVTInfo = () => {
	const name = "Get BLVT Info (MARKET_DATA)"
	const nameType = "MARKET_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// BTCDOWN, BTCUP
		tokenName? : STRING
	}
	type req = [
	 {
	"tokenName" :  string , // "BTCDOWN"  
	"description" :  string , // "3X Short Bitcoin Token"  
	"underlying" :  string , // "BTC"  
	"tokenIssued" :  NumberString , // "717953.95"  
	"basket" :  string , // "-821.474 BTCUSDT Futures"  
	"currentBaskets" :[
	 {
	"symbol" :  string , // "BTCUSDT"  
	"amount" :  NumberString , // "-1183.984"  
	"notionalValue" :  NumberString , // "-22871089.96704" 
	
	}
	
	],
	"nav" :  NumberString , // "4.79"  
	"realLeverage" :  NumberString , // "-2.316"  
	"fundingRate" :  NumberString , // "0.001020"  
	"dailyManagementFee" :  NumberString , // "0.0001"  
	"purchaseFeePct" :  NumberString , // "0.0010"  
	"dailyPurchaseLimit" :  NumberString , // "100000.00"  
	"redeemFeePct" :  NumberString , // "0.0010"  
	"dailyRedeemLimit" :  NumberString , // "1000000.00"  
	"timestamp" :  number , // 1583127900000 
	
	},
	| {
	"tokenName" :  string , // "LINKUP"  
	"description" :  string , // "3X LONG ChainLink Token"  
	"underlying" :  string , // "LINK"  
	"tokenIssued" :  NumberString , // "163846.99"  
	"basket" :  string , // "417288.870 LINKUSDT Futures"  
	"currentBaskets" :[
	 {
	"symbol" :  string , // "LINKUSDT"  
	"amount" :  NumberString , // "1640883.83"  
	"notionalValue" :  NumberString , // "22596611.22293" 
	
	}
	
	],
	"nav" :  NumberString , // "9.60"  
	"realLeverage" :  NumberString , // "2.597"  
	"fundingRate" :  NumberString , // "-0.000917"  
	"dailyManagementFee" :  NumberString , // "0.0001"  
	"purchaseFeePct" :  NumberString , // "0.0010"  
	"dailyPurchaseLimit" :  NumberString , // "100000.00"  
	"redeemFeePct" :  NumberString , // "0.0010"  
	"dailyRedeemLimit" :  NumberString , // "1000000.00"  
	"timestamp" :  number , // 1583127900000 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#historical-blvt-nav-kline-candlestick

HistoricalBLVTNAVKlineCandlestick = () => {
	const name = "Historical BLVT NAV Kline/Candlestick"
	const nameType = ""
	const wight = []
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#subscribe-blvt-user_data

SubscribeBLVT = () => {
	const name = "Subscribe BLVT (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// BTCDOWN, BTCUP
		tokenName : STRING
		// spot balance
		cost : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"id" :  number , // 123  
	"status" :  string , // "S"  // S, P, and F for "success", "pending", and "failure"
	 
	"tokenName" :  string , // "LINKUP"  
	"amount" :  NumberString , // "0.95590905"  // subscribed token amount
	 
	"cost" :  NumberString , // "9.99999995"  // subscription cost in usdt
	 
	"timestamp" :  number , // 1600249972899 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-subscription-record-user_data

QuerySubscriptionRecord = () => {
	const name = "Query Subscription Record (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// BTCDOWN, BTCUP
		tokenName? : STRING
		id? : LONG
		startTime? : LONG
		endTime? : LONG
		// default 1000, max 1000
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"id" :  number , // 1  
	"tokenName" :  string , // "LINKUP"  
	"amount" :  NumberString , // "0.54216292"  // Subscription amount
	 
	"nav" :  NumberString , // "18.42621386"  // NAV price of subscription 
	 
	"fee" :  NumberString , // "0.00999000"  // Subscription fee in usdt
	 
	"totalCharge" :  NumberString , // "9.99999991"  // Subscription cost in usdt
	 
	"timestamp" :  number , // 1599127217916 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#redeem-blvt-user_data

RedeemBLVT = () => {
	const name = "Redeem BLVT (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// BTCDOWN, BTCUP
		tokenName : STRING
		amount : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"id" :  number , // 123  
	"status" :  string , // "S"  // S, P, and F for "success", "pending", and "failure"
	 
	"tokenName" :  string , // "LINKUP"  
	"redeemAmount" :  NumberString , // "0.95590905"  // Redemption token amount
	 
	"amount" :  NumberString , // "10.05022099"  // Redemption value in usdt
	 
	"timestamp" :  number , // 1600250279614 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-redemption-record-user_data

QueryRedemptionRecord = () => {
	const name = "Query Redemption Record (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// BTCDOWN, BTCUP
		tokenName? : STRING
		id? : LONG
		startTime? : LONG
		endTime? : LONG
		// default 1000, max 1000
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"id" :  number , // 1  
	"tokenName" :  string , // "LINKUP"  
	"amount" :  NumberString , // "0.54216292"  // Redemption amount
	 
	"nav" :  NumberString , // "18.36345064"  // NAV of redemption
	 
	"fee" :  NumberString , // "0.00995598"  // Reemption fee
	 
	"netProceed" :  NumberString , // "9.94602604"  // Net redemption value in usdt
	 
	"timestamp" :  number , // 1599128003050 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-blvt-user-limit-info-user_data

GetBLVTUserLimitInfo = () => {
	const name = "Get BLVT User Limit Info (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	// Name Type Mandatory Description
	type params = {
		// BTCDOWN, BTCUP
		tokenName? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"tokenName" :  string , // "LINKUP"  
	"userDailyTotalPurchaseLimit" :  NumberString , // "1000"  // USDT
	 
	"userDailyTotalRedeemLimit" :  NumberString , // "1000" // USDT 
	
	},
	| {
	"tokenName" :  string , // "LINKDOWN"  
	"userDailyTotalPurchaseLimit" :  NumberString , // "1000"  // USDT
	 
	"userDailyTotalRedeemLimit" :  NumberString , // "50000" // USDT 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#websocket-blvt-info-streams

WebsocketBLVTInfoStreams = () => {
	const name = "Websocket BLVT Info Streams"
	const nameType = ""
	const wight = []
	type req = {
	"e" :  string , // "nav"  // Event type
	 
	"E" :  number , // 1600245286355  // Event time
	 
	"s" :  string , // "TRXDOWN"  // BLVT name
	 
	"m" :  number , // 74164.75496502663  // Token issued
	 
	"b" :[ // Baskets
	
	
	 {
	"s" :  string , // "TRXUSDT"  // futures symbol
	 
	"n" :  number , // 87988261 // position 
	
	}
	
	],
	"n" :  number , // 14.78454447  // BLVT NAV
	 
	"l" :  number , // 2.1786579638117898  // Real leverage
	 
	"t" :  number , // 3  // Target leverage
	 
	"f" :  number , // 0.0048925 // Funding ratio 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#websocket-blvt-nav-kline-candlestick-streams

WebsocketBLVTNAVKlineCandlestickStreams = () => {
	const name = "Websocket BLVT NAV Kline/Candlestick Streams"
	const nameType = ""
	const wight = []
	type req = {
	"e" :  string , // "kline"  // Event name
	 
	"E" :  number , // 1600243159447  // Event time
	 
	"s" :  string , // "TRXDOWN"  // BLVT name
	 
	"k" :{
	"t" :  number , // 1600243140000  // Kline start time
	 
	"T" :  number , // 1600243199999  // Kline close time
	 
	"s" :  string , // "TRXDOWN"  // BLVT name
	 
	"i" :  string , // "1m"  // Interval
	 
	"f" :  number , // 1600243140484  // First NAV update time
	 
	"L" :  number , // 1600243159424  // Last NAV update time
	 
	"o" :  NumberString , // "14.56800297"  // Open NAV price
	 
	"c" :  NumberString , // "14.59766270"  // CLose NAV price
	 
	"h" :  NumberString , // "14.63325437"  // Highest NAV price
	 
	"l" :  NumberString , // "14.56207102"  // Lowest NAV price
	 
	"v" :  NumberString , // "2.22524220"  // Real leverage
	 
	"n" :  number , // 33  // Number of NAV update
	 
	"x" :  boolean , // false  // Ignore
	 
	"q" :  NumberString , // "0"  // Ignore
	 
	"V" :  NumberString , // "73.42663923"  // Ignore
	 
	"Q" :  NumberString , // "0"  // Ignore
	 
	"B" :  NumberString , // "0" // Ignore 
	
	}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#list-all-swap-pools-market_data

ListAllSwapPools = () => {
	const name = "List All Swap Pools (MARKET_DATA)"
	const nameType = "MARKET_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/bswap/pools",
		HMAC : true,
	}
	type req = [
	 {
	"poolId" :  number , // 2  
	"poolName" :  string , // "BUSD/USDT"  
	"assets" : [
	  string , // "BUSD" 
	 
	  string , // "USDT"
	 
	]
	
	},
	| {
	"poolId" :  number , // 3  
	"poolName" :  string , // "BUSD/DAI"  
	"assets" : [
	  string , // "BUSD" 
	 
	  string , // "DAI"
	 
	]
	
	},
	| {
	"poolId" :  number , // 4  
	"poolName" :  string , // "USDT/DAI"  
	"assets" : [
	  string , // "USDT" 
	 
	  string , // "DAI"
	 
	]
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-liquidity-information-of-a-pool-user_data

Getliquidityinformationofapool = () => {
	const name = "Get liquidity information of a pool (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/bswap/liquidity",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		poolId? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"poolId" :  number , // 2  
	"poolNmae" :  string , // "BUSD/USDT"  
	"updateTime" :  number , // 1565769342148  
	"liquidity" : {
	"BUSD" :  number , // 100000315.79  
	"USDT" :  number , // 99999245.54 
	
	},
	"share" : | {
	"shareAmount" :  number , // 12415  
	"sharePercentage" :  number , // 0.00006207  
	"asset" : {
	"BUSD" :  number , // 6207.02  
	"USDT" :  number , // 6206.95 
	
	}
	
	}
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#add-liquidity-trade

AddLiquidity = () => {
	const name = "Add Liquidity (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/bswap/liquidityAdd",
		HMAC : true,
	}
	type req = {
	"operationId" :  number , // 12341 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#remove-liquidity-trade

RemoveLiquidity = () => {
	const name = "Remove Liquidity (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/bswap/liquidityRemove",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		poolId : LONG
		type : STRING
		// Mandatory for single asset removal
		asset? : LIST
		shareAmount : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"operationId" :  number , // 12341 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-liquidity-operation-record-user_data

GetLiquidityOperationRecord = () => {
	const name = "Get Liquidity Operation Record (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/bswap/liquidityOps",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		operationId? : LONG
		poolId? : LONG
		operation? : ENUM_operation
		startTime? : LONG
		endTime? : LONG
		// default 3, max 100
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"operationId" :  number , // 12341  
	"poolId" :  number , // 2  
	"poolName" :  string , // "BUSD/USDT"  
	"operation" :  string , // "ADD"  // "ADD" or "REMOVE"
	 
	"status" :  number , // 1  // 0: pending, 1: success, 2: failed 
	 
	"updateTime" :  number , // 1565769342148  
	"shareAmount" :  NumberString , // "10.1" 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#request-quote-user_data

RequestQuote = () => {
	const name = "Request Quote (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 150,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/bswap/quote",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		quoteAsset : STRING
		baseAsset : STRING
		quoteQty : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"quoteAsset" :  string , // "USDT"  
	"baseAsset" :  string , // "BUSD"  
	"quoteQty" :  number , // 300000  
	"baseQty" :  number , // 299975  
	"price" :  number , // 1.00008334  
	"slippage" :  number , // 0.00007245  
	"fee" :  number , // 120 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#swap-trade

Swap = () => {
	const name = "Swap (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/bswap/swap",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		quoteAsset : STRING
		baseAsset : STRING
		quoteQty : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"swapId" :  number , // 2314 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-swap-history-user_data

GetSwapHistory = () => {
	const name = "Get Swap History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/bswap/swap",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		swapId? : LONG
		startTime? : LONG
		endTime? : LONG
		// 0: pending for swap, 1: success, 2: failed
		status? : INT
		quoteAsset? : STRING
		baseAsset? : STRING
		// default 3, max 100
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"swapId" :  number , // 2314  
	"swapTime" :  number , // 1565770342148  
	"status" :  number , // 0  // 0: pending, 1: success, 2: failed 
	 
	"quoteAsset" :  string , // "USDT"  
	"baseAsset" :  string , // "BUSD"  
	"quoteQty" :  number , // 300000  
	"baseQty" :  number , // 299975  
	"price" :  number , // 1.00008334  
	"fee" :  number , // 120 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-pool-configure-user_data

GetPoolConfigure = () => {
	const name = "Get Pool Configure (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 150,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/bswap/poolConfigure",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		poolId? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"poolId" :  number , // 2  
	"poolNmae" :  string , // "BUSD/USDT"  
	"updateTime" :  number , // 1565769342148  
	"liquidity" : {
		"constantA" :  number , // 2000  //"NA" if pool is an innovation pool
		 
		"minRedeemShare" :  number , // 0.1  
		"slippageTolerance" :  number , // 0.2 //The swap proceeds only when the slippage is within the set range 
		
		},
	"assetConfigure"  :{
		"BUSD" : {
		"minAdd" :  number , // 10  
		"maxAdd" :  number , // 20  
		"minSwap" :  number , // 10  
		"maxSwap" :  number , // 30 
	
	},
	"USDT" : | {
		"minAdd" :  number , // 10  
		"maxAdd" :  number , // 20  
		"minSwap" :  number , // 10  
		"maxSwap" :  number , // 30 
	
	}
	
	}
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#add-liquidity-preview-user_data

AddLiquidityPreview = () => {
	const name = "Add Liquidity Preview (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 150,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/bswap/addLiquidityPreview",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		poolId : LONG
		// &quot;SINGLE&quot; for adding a single token;&quot;COMBINATION&quot; for adding dual tokens
		type : STRING
		quoteAsset : STRING
		quoteQty : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"quoteAsset" :  string , // "USDT"  
	"baseAsset" :  string , // "BUSD"  //Display when type is "COMBINATION"
	 
	"quoteAmt" :  number , // 300000  
	"baseAmt" :  number , // 299975  // Display when type is "COMBINATION" 
	 
	"price" :  number , // 1.00008334  
	"share" :  number , // 1.23  
	"slippage" :  number , // 0.00007245  //Display when type is "SINGLE" 
	 
	"fee" :  number , // 120  //Display when type is "SINGLE" 
	 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#remove-liquidity-preview-user_data

RemoveLiquidityPreview = () => {
	const name = "Remove Liquidity Preview (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 150,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/bswap/removeLiquidityPreview",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		poolId : LONG
		// Type is &quot;SINGLE&quot;, remove and obtain a single token;Type is &quot;COMBINATION&quot;, remove and obtain dual token.
		type : STRING
		quoteAsset : STRING
		shareAmount : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"quoteAsset" :  string , // "USDT"  
	"baseAsset" :  string , // "BUSD"  //Display when type is "COMBINATION" 
	 
	"quoteAmt" :  number , // 300000  
	"baseAmt" :  number , // 299975  //Display when type is "COMBINATION" 
	 
	"price" :  number , // 1.00008334  
	"slippage" :  number , // 0.00007245  //Display when type is "SINGLE" 
	 
	"fee" :  number , // 120 //Display when type is "SINGLE"  
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-unclaimed-rewards-record-user_data

GetUnclaimedRewardsRecord = () => {
	const name = "Get Unclaimed Rewards Record  (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 1000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/bswap/unclaimedRewards",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// 0: Swap rewards,1:Liquidity rewards, default to 0
		type? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"totalUnclaimedRewards" : {
	"BUSD" :  number , // 100000315.79  
	"BNB" :  number , // 0.00000001  
	"USDT" :  number , // 0.00000002 
	
	},
	"details"   :{
	"BNB/USDT" :{
	"BUSD" :  number , // 100000315.79  
	"USDT" :  number , // 0.00000002 
	
	},
	"BNB/BTC"  :{
	"BNB" :  number , // 0.00000001 
	
	}
	
	}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#claim-rewards-trade

ClaimRewards = () => {
	const name = "Claim Rewards (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 1000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/bswap/claimRewards",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// 0: Swap rewards,1:Liquidity rewards, default to 0
		type? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-claimed-history-user_data

GetClaimedHistory = () => {
	const name = "Get Claimed History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 1000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/bswap/claimedHistory",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		poolId? : LONG
		assetRewards? : STRING
		// 0: Swap rewards,1:Liquidity rewards, default to 0
		type? : INT
		startTime? : LONG
		endTime? : LONG
		// Default 3, max 100
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"poolId" :  number , // 52  
	"poolName" :  string , // "BNB/USDT"  
	"assetRewards" :  string , // "BNB"  
	"claimTime" :  number , // 1565769342148  
	"claimAmount" :  number , // 0.00000023  
	"status" :  number , // 1 // 0: pending, 1: success 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#websocket-pool-price-streams

WebsocketPoolpriceStreams = () => {
	const name = "Websocket Pool price Streams"
	const nameType = ""
	const wight = []
	type req = {
	"quoteAsset" :  string , // "BTC"  
	"quoteSize" :  NumberString , // "15.57778974"  
	"baseAsset" :  string , // "DYDX"  
	"baseSize" :  NumberString , // "212296.96891500"  
	"poolId" :  number , // 121  
	"poolName" :  string , // "DYDX/BTC"  
	"marginPrice" :  NumberString , // "0.00007338"  
	"timestamp" :  number , // 1685413319098 
	
	}
	| {
	"type" :  string , // "COMMAND"  
	"data" :  string , // "SUCCESS"  
	"subType" :  string , // "SUBSCRIBE"  
	"code" :  NumberString , // "00000000" 
	
	}
	| {
	"type" :  string , // "COMMAND"  
	"data" :  string , // "SUCCESS"  
	"subType" :  string , // "UNSUBSCRIBE"  
	"code" :  NumberString , // "00000000" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#fiat-endpoints

GetFiatDepositWithdrawHistory = () => {
	const name = "Get Fiat Deposit/Withdraw History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 90000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/fiat/orders",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// 0-deposit,1-withdraw
		transactionType : STRING
		beginTime? : LONG
		endTime? : LONG
		// default 1
		page? : INT
		// default 100, max 500
		rows? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"code" :  NumberString , // "000000"  
	"message" :  string , // "success"  
	"data" : [
	 {
	"orderNo" :  string , // "7d76d611-0568-4f43-afb6-24cac7767365"  
	"fiatCurrency" :  string , // "BRL"  
	"indicatedAmount" :  NumberString , // "10.00"  
	"amount" :  NumberString , // "10.00"  
	"totalFee" :  NumberString , // "0.00"  // Trade fee
	 
	"method" :  string , // "BankAccount"  // Trade method
	 
	"status" :  string , // "Expired"  // Processing, Failed, Successful, Finished, Refunding, Refunded, Refund Failed, Order Partial credit Stopped
	 
	"createTime" :  number , // 1626144956000  
	"updateTime" :  number , // 1626400907000 
	
	}
	
	],
	"total" :  number , // 1  
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-fiat-payments-history-user_data

GetFiatPaymentsHistory = () => {
	const name = "Get Fiat Payments History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/fiat/payments",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// 0-buy,1-sell
		transactionType : STRING
		beginTime? : LONG
		endTime? : LONG
		// default 1
		page? : INT
		// default 100, max 500
		rows? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"code" :  NumberString , // "000000"  
	"message" :  string , // "success"  
	"data" : [
	 {
	"orderNo" :  string , // "353fca443f06466db0c4dc89f94f027a"  
	"sourceAmount" :  NumberString , // "20.0"  // Fiat trade amount
	 
	"fiatCurrency" :  string , // "EUR"  // Fiat token
	 
	"obtainAmount" :  NumberString , // "4.462"  // Crypto trade amount
	 
	"cryptoCurrency" :  string , // "LUNA"  // Crypto token
	 
	"totalFee" :  NumberString , // "0.2"  // Trade fee
	 
	"price" :  NumberString , // "4.437472"  
	"status" :  string , // "Failed"  // Processing, Completed, Failed, Refunded
	 
	"paymentMethod" :  string , // "Credit Card"  
	"createTime" :  number , // 1624529919000  
	"updateTime" :  number , // 1624529919000 
	
	}
	
	],
	"total" :  number , // 1  
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#c2c-endpoints

GetC2CTradeHistory = () => {
	const name = "Get C2C Trade History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/c2c/orderMatch/listUserOrderHistory",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// BUY, SELL
		tradeType : STRING
		startTimestamp? : LONG
		endTimestamp? : LONG
		// default 1
		page? : INT
		// default 100, max 100
		rows? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"code" :  NumberString , // "000000"  
	"message" :  string , // "success"  
	"data" : [
	 {
	"orderNumber" :  NumberString , // "20219644646554779648"  
	"advNo" :  NumberString , // "11218246497340923904"  
	"tradeType" :  string , // "SELL"  
	"asset" :  string , // "BUSD"  
	"fiat" :  string , // "CNY"  
	"fiatSymbol" :  string , // "￥"  
	"amount" :  NumberString , // "5000.00000000"  // Quantity (in Crypto)
	 
	"totalPrice" :  NumberString , // "33400.00000000"  
	"unitPrice" :  NumberString , // "6.68"  // Unit Price (in Fiat)
	 
	"orderStatus" :  string , // "COMPLETED"  // PENDING, TRADING, BUYER_PAYED, DISTRIBUTING, COMPLETED, IN_APPEAL, CANCELLED, CANCELLED_BY_SYSTEM
	 
	"createTime" :  number , // 1619361369000  
	"commission" :  NumberString , // "0"  // Transaction Fee (in Crypto)
	 
	"counterPartNickName" :  string , // "ab***"  
	"advertisementRole" :  string , // "TAKER" 
	
	}
	
	],
	"total" :  number , // 1  
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#vip-loans-endpoints

GetVIPLoanOngoingOrders = () => {
	const name = "Get VIP Loan Ongoing Orders (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 400,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/loan/vip/ongoing/orders",
	}
	// Name Type Mandatory Description
	type params = {
		orderId? : LONG
		collateralAccountId? : LONG
		loanCoin? : STRING
		collateralCoin? : STRING
		// Currently querying page. Start from 1, Default:1, Max: 1000.
		current? : LONG
		// Default: 10, Max: 100
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [
	 {
	"orderId" :  number , // 100000001  
	"loanCoin" :  string , // "BUSD"  
	"totalDebt" :  NumberString , // "10000"  
	"residualInterest" :  NumberString , // "10.27687923"  
	"collateralAccountId" :  NumberString , // "12345678"  
	 "23456789"  
	"collateralCoin" :  string , // "BNB,BTC,ETH"  
	"totalCollateralValueAfterHaircut" :  NumberString , // "25000.27565492"  
	"lockedCollateralValue" :  NumberString , // "25000.27565492"  
	"currentLTV" :  NumberString , // "0.57"  
	"expirationTime" :  number , // 1575018510000 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#vip-loan-repay-trade

VIPLoanRepay = () => {
	const name = "VIP Loan Repay (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 6000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/loan/vip/repay",
	}
	// Name Type Mandatory Description
	type params = {
		orderId : LONG
		amount : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"loanCoin" :  string , // "BUSD"  
	"repayAmount" :  NumberString , // "200.5"  
	"remainingPrincipal" :  NumberString , // "100.5"  
	"remainingInterest" :  NumberString , // "0"  
	"collateralCoin" :  string , // "BNB,BTC,ETH"  
	"currentLTV" :  NumberString , // "0.25"  
	"repayStatus" :  string , // "Repaid" // Repaid, Repaying, Failed 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-vip-loan-repayment-history-user_data

GetVIPLoanRepaymentHistory = () => {
	const name = "Get VIP Loan Repayment History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 400,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/loan/vip/repay/history",
	}
	// Name Type Mandatory Description
	type params = {
		orderId? : LONG
		loanCoin? : STRING
		startTime? : LONG
		endTime? : LONG
		// Currently querying page. Start from 1, Default:1, Max: 1000
		current? : LONG
		// Default: 10, Max: 100
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [
	 {
	"loanCoin" :  string , // "BUSD"  
	"repayAmount" :  NumberString , // "10000"  
	"collateralCoin" :  string , // "BNB,BTC,ETH"  
	"repayStatus" :  string , // "Repaid"  // Repaid, Repaying, Failed
	 
	"repayTime" :  NumberString , // "1575018510000"  
	"orderId" :  NumberString , // "756783308056935434" 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#check-locked-value-of-vip-collateral-account-user_data

CheckLockedValueofVIPCollateralAccount = () => {
	const name = "Check Locked Value of VIP Collateral Account (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 6000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/loan/vip/collateral/account",
	}
	// Name Type Mandatory Description
	type params = {
		orderId? : LONG
		collateralAccountId? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [
	 {
	"collateralAccountId" :  NumberString , // "12345678"  
	"collateralCoin" :  string , // "BNB,BTC,ETH"  
	"collateralValue" :  NumberString , // "500.27565492" // locked collateral value shown in USD value 
	
	}
	
	] 
	| [
	   {
	"collateralAccountId" :  NumberString , // "23456789"  
	"collateralCoin" :  string , // "BNB,BTC,ETH"  
	"collateralValue" :  NumberString , // "25000.238752" // locked collateral value shown in USD value 
	
	}
	
	],
	"total" :  number , // 2 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#crypto-loans-endpoints

GetCryptoLoansIncomeHistory = () => {
	const name = "Get Crypto Loans Income History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 6000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/loan/income",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		asset? : STRING
		// All types will be returned by default. Enum：
		type? : STRING
		startTime? : LONG
		endTime? : LONG
		// default 20, max 100
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"asset" :  string , // "BUSD"  
	"type" :  string , // "borrowIn"  
	"amount" :  NumberString , // "100"  
	"timestamp" :  number , // 1633771139847  
	"tranId" :  NumberString , // "80423589583" 
	
	},
	| {
	"asset" :  string , // "BUSD"  
	"type" :  string , // "borrowIn"  
	"amount" :  NumberString , // "100"  
	"timestamp" :  number , // 1634638371496  
	"tranId" :  NumberString , // "81685123491" 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#borrow-crypto-loan-borrow-trade

BorrowCryptoLoanBorrow = () => {
	const name = "Borrow - Crypto Loan Borrow (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 6000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/loan/borrow",
	}
	// Name Type Mandatory Description
	type params = {
		loanCoin : STRING
		// Mandatory when collateralAmount is empty
		loanAmount? : DECIMAL
		collateralCoin : STRING
		// Mandatory when loanAmount is empty
		collateralAmount? : DECIMAL
		// 7/30 days
		loanTerm : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"loanCoin" :  string , // "BUSD"  
	"loanAmount" :  NumberString , // "100.5"  
	"collateralCoin" :  string , // "BNB"  
	"collateralAmount" :  NumberString , // "50.5"  
	"hourlyInterestRate" :  NumberString , // "0.001234"  
	"orderId" :  NumberString , // "100000001" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#borrow-get-loan-borrow-history-user_data

BorrowGetLoanBorrowHistory = () => {
	const name = "Borrow - Get Loan Borrow History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 400,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/loan/borrow/history",
	}
	// Name Type Mandatory Description
	type params = {
		// orderId in 
		orderId? : LONG
		loanCoin? : STRING
		collateralCoin? : STRING
		startTime? : LONG
		endTime? : LONG
		// Current querying page. Start from 1; default: 1; max: 1000.
		current? : LONG
		// Default: 10; max: 100.
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [
	 {
	"orderId" :  number , // 100000001  
	"loanCoin" :  string , // "BUSD"  
	"initialLoanAmount" :  NumberString , // "10000"  
	"hourlyInterestRate" :  NumberString , // "0.000057" 
	"loanTerm" :  NumberString , // "7" 
	"collateralCoin" :  string , // "BNB"  
	"initialCollateralAmount" :  NumberString , // "49.27565492" 
	"borrowTime" :  number , // 1575018510000 
	"status" :  string , // "Repaid" // Accruing_Interest, Overdue, Liquidating, Repaying, Repaid, Liquidated, Pending, Failed 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#borrow-get-loan-ongoing-orders-user_data

BorrowGetLoanOngoingOrders = () => {
	const name = "Borrow - Get Loan Ongoing Orders (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 300,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/loan/ongoing/orders",
	}
	// Name Type Mandatory Description
	type params = {
		// orderId in 
		orderId? : LONG
		loanCoin? : STRING
		collateralCoin? : STRING
		// Current querying page. Start from 1; default: 1; max: 1000
		current? : LONG
		// Default: 10; max: 100
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [
	 {
	"orderId" :  number , // 100000001  
	"loanCoin" :  string , // "BUSD"  
	"totalDebt" :  NumberString , // "10000"  
	"residualInterest" :  NumberString , // "10.27687923" 
	"collateralCoin" :  string , // "BNB"  
	"collateralAmount" :  NumberString , // "49.27565492" 
	"currentLTV" :  NumberString , // "0.57" 
	"expirationTime" :  number , // 1575018510000 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#repay-crypto-loan-repay-trade

RepayCryptoLoanRepay = () => {
	const name = "Repay - Crypto Loan Repay (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 6000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/loan/repay",
	}
	// Name Type Mandatory Description
	type params = {
		orderId : LONG
		amount : DECIMAL
		// Default: 1. 1 for &quot;repay with borrowed coin&quot;; 2 for &quot;repay with collateral&quot;.
		type? : INT
		// Default: TRUE. TRUE: Return extra collateral to spot account; FALSE: Keep extra collateral in the order.
		collateralReturn? : BOOLEAN
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"loanCoin" :  string , // "BUSD" 
	"remainingPrincipal" :  NumberString , // "100.5" 
	"remainingInterest" :  NumberString , // "0" 
	"collateralCoin" :  string , // "BNB" 
	"remainingCollateral" :  NumberString , // "5.253" 
	"currentLTV" :  NumberString , // "0.25" 
	"repayStatus" :  string , // "Repaid" // Repaid, Repaying 
	
	}
	| {
	"loanCoin" :  string , // "BUSD" 
	"collateralCoin" :  string , // "BNB" 
	"repayStatus" :  string , // "Repaying" // Repaid, Repaying 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#repay-get-loan-repayment-history-user_data

RepayGetLoanRepaymentHistory = () => {
	const name = "Repay - Get Loan Repayment History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 400,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/loan/repay/history",
	}
	// Name Type Mandatory Description
	type params = {
		orderId? : LONG
		loanCoin? : STRING
		collateralCoin? : STRING
		startTime? : LONG
		endTime? : LONG
		// Current querying page. Start from 1; default: 1; max: 1000
		current? : LONG
		// Default: 10; max: 100
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [
	 {
	"loanCoin" :  string , // "BUSD"  
	"repayAmount" :  NumberString , // "10000"  
	"collateralCoin" :  string , // "BNB"  
	"collateralUsed" :  NumberString , // "0" 
	"collateralReturn" :  NumberString , // "49.27565492" 
	"repayType" :  NumberString , // "1" // 1 for "repay with borrowed coin", 2 for "repay with collateral" 
	"repayStatus" :  string , // "Repaid" // Repaid, Repaying, Failed 
	"repayTime" :  number , // 1575018510000 
	"orderId" :  number , // 756783308056935434 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#adjust-ltv-crypto-loan-adjust-ltv-trade

AdjustLTVCryptoLoanAdjustLTV = () => {
	const name = "Adjust LTV - Crypto Loan Adjust LTV (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 6000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/loan/adjust/ltv",
	}
	// Name Type Mandatory Description
	type params = {
		orderId : LONG
		amount : DECIMAL
		// &quot;ADDITIONAL&quot;, &quot;REDUCED&quot;
		direction : ENUM_direction
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"loanCoin" :  string , // "BUSD"  
	"collateralCoin" :  string , // "BNB"  
	"direction" :  string , // "ADDITIONAL"  
	"amount" :  NumberString , // "5.235"  
	"currentLTV" :  NumberString , // "0.52" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#adjust-ltv-get-loan-ltv-adjustment-history-user_data

AdjustLTVGetLoanLTVAdjustmentHistory = () => {
	const name = "Adjust LTV - Get Loan LTV Adjustment History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 400,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/loan/ltv/adjustment/history",
	}
	// Name Type Mandatory Description
	type params = {
		orderId? : LONG
		loanCoin? : STRING
		collateralCoin? : STRING
		startTime? : LONG
		endTime? : LONG
		// Current querying page. Start from 1; default: 1; max: 1000
		current? : LONG
		// Default: 10; max: 100
		limit? : LONG
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [
	 {
	"loanCoin" :  string , // "BUSD"  
	"collateralCoin" :  string , // "BNB"  
	"direction" :  string , // "ADDITIONAL"  
	"amount" :  NumberString , // "5.235"  
	"preLTV" :  NumberString , // "0.78"  
	"afterLTV" :  NumberString , // "0.56"  
	"adjustTime" :  number , // 1575018510000  
	"orderId" :  number , // 756783308056935434 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-loanable-assets-data-user_data

GetLoanableAssetsData = () => {
	const name = "Get Loanable Assets Data (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 400,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/loan/loanable/data",
	}
	// Name Type Mandatory Description
	type params = {
		loanCoin? : STRING
		// Default: user&#39;s vip level. Send &quot;-1&quot; to check specified configuration
		vipLevel? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [
	 {
	"loanCoin" :  string , // "BUSD"  
	"_7dHourlyInterestRate" :  NumberString , // "0.00000491"  
	"_7dDailyInterestRate" :  NumberString , // "0.000118"  
	"_14dHourlyInterestRate" :  NumberString , // "0.00000491"  
	"_14dDailyInterestRate" :  NumberString , // "0.000118"  
	"_30dHourlyInterestRate" :  NumberString , // "0.00000567"  
	"_30dDailyInterestRate" :  NumberString , // "0.000136"  
	"_90dHourlyInterestRate" :  NumberString , // "0.00000596"  
	"_90dDailyInterestRate" :  NumberString , // "0.000143"  
	"_180dHourlyInterestRate" :  NumberString , // "0.00000631"  
	"_180dDailyInterestRate" :  NumberString , // "0.000151"  
	"minLimit" :  NumberString , // "100" 
	"maxLimit" :  NumberString , // "1000000" 
	"vipLevel" :  number , // 1 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-collateral-assets-data-user_data

GetCollateralAssetsData = () => {
	const name = "Get Collateral Assets Data (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 400,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/loan/collateral/data",
	}
	// Name Type Mandatory Description
	type params = {
		collateralCoin? : STRING
		// Default: user&#39;s vip level. Send &quot;-1&quot; to check specified configuration
		vipLevel? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [
	 {
	"collateralCoin" :  string , // "BNB"  
	"initialLTV" :  NumberString , // "0.65"  
	"marginCallLTV" :  NumberString , // "0.75"  
	"liquidationLTV" :  NumberString , // "0.83"  
	"maxLimit" :  NumberString , // "1000000" 
	"vipLevel" :  number , // 1 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#check-collateral-repay-rate-user_data

CheckCollateralRepayRate = () => {
	const name = "Check Collateral Repay Rate (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 6000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/loan/repay/collateral/rate",
	}
	// Name Type Mandatory Description
	type params = {
		loanCoin : STRING
		collateralCoin : STRING
		// repay amount of loanCoin
		repayAmount : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"loanlCoin" :  string , // "BUSD"  
	"collateralCoin" :  string , // "BNB"  
	"repayAmount" :  NumberString , // "1000"  
	"rate" :  NumberString , // "300.36781234" // rate of collateral coin/loan coin 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#crypto-loan-customize-margin-call-trade

CryptoLoanCustomizeMarginCall = () => {
	const name = "Crypto Loan Customize Margin Call (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 6000,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/loan/customize/margin_call",
	}
	// Name Type Mandatory Description
	type params = {
		// Mandatory when collateralCoin is empty. Send either orderId or collateralCoin, if both parameters are sent, take orderId only.
		orderId? : LONG
		// Mandatory when orderID is empty. Send either orderId or collateralCoin, if both parameters are sent, take orderId only.
		collateralCoin? : STRING
		marginCall : DECIMAL
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"rows" : [
	 {
	"orderId" :  NumberString , // "100000001" 
	"collateralCoin" :  string , // "BNB" 
	"preMarginCall" :  NumberString , // "0.8" 
	"afterMarginCall" :  NumberString , // "0.7" 
	"customizeTime" :  number , // 1575018510000 
	
	}
	
	],
	"total" :  number , // 1 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#pay-endpoints

GetPayTradeHistory = () => {
	const name = "Get Pay Trade History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/pay/transactions",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		startTime? : LONG
		endTime? : LONG
		// default 100, max 100
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"code" :  NumberString , // "000000"  
	"message" :  string , // "success"  
	"data" : [
	 {
	"orderType" :  string , // "C2C"  // Enum：PAY(C2B Merchant Acquiring Payment), PAY_REFUND(C2B Merchant Acquiring Payment,refund), C2C(C2C Transfer Payment),CRYPTO_BOX(Crypto box), CRYPTO_BOX_RF(Crypto Box, refund), C2C_HOLDING(Transfer to new Binance user), C2C_HOLDING_RF(Transfer to new Binance user,refund), PAYOUT(B2C Disbursement Payment), REMITTANCE（Send cash)
	 
	"transactionId" :  string , // "M_P_71505104267788288"  
	"transactionTime" :  number , // 1610090460133  //trade timestamp
	 
	"amount" :  NumberString , // "23.72469206"  //order amount(up to 8 decimal places), positive is income, negative is expenditure
	 
	"currency" :  string , // "BNB"  
	"walletType" :  number , // 1  //main wallet type, 1 for funding wallet, 2 for spot wallet, 3 for fiat wallet, 4 or 6 for card payment, 5 for earn wallet
	 
	"walletTypes" : [ 
	  number , // 1 
	  
	  number , // 2 
	 
	],
	 //array format，there are multiple values when using combination payment 
	"fundsDetail" : [ // details
	
	
	 {
		"currency" :  string , // "USDT"  //asset
	 
		"amount" :  NumberString , // "1.2"  
		"walletAssetCost" :[ //details of asset cost per wallet
	
			
	 {
	 "1" :  NumberString , // "0.6" 
				},
			| {
	 "2" :  NumberString , // "0.6" 
				}
			
			]
		
		},
	| {
		"currency" :  string , // "ETH"  
		"amount" :  NumberString , // "0.0001"  
		"walletAssetCost" :[		
	 {
	 "1" :  NumberString , // "0.00005" 
				},
			| {
	 "2" :  NumberString , // "0.00005" 
				}
			
			]
		
		}
	
	],
	"payerInfo"  :{
	"name" :  string , // "Jack"  //nickname or merchant name
	 
	"type" :  string , // "USER"  //account type，USER for personal，MERCHANT for merchant
	 
	"binanceId" :  NumberString , // "12345678"  //binance uid
	 
	"accountId" :  NumberString , // "67736251" //binance pay id 
	
	},
	"receiverInfo"  :{
	"name" :  string , // "Alan"  //nickname or merchant name
	 
	"type" :  string , // "MERCHANT"  //account type，USER for personal，MERCHANT for merchant
	 
	"email" :  string , // "alan@binance.com"  //email
	 
	"binanceId" :  NumberString , // "34355667"  //binance uid
	 
	"accountId" :  NumberString , // "21326891"  //binance pay id
	 
	"countryCode" :  NumberString , // "1"  //International area code
	 
	"phoneNumber" :  NumberString , // "8057651210"  
	"mobileCode" :  string , // "US"  //country code
	 
	"extend" :[ //extension field
	
		
	  string , // "institutionName" 
	  number , // : 
	  NumberString , // "" 
	 	
	  string , // "cardNumber" 
	  number , // : 
	  NumberString , // "" 
	 	
	  string , // "digitalWalletId" 
	  number , // : 
	  NumberString , // ""	
	 
		]
	
	}
	
	}
	
	],
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#list-all-convert-pairs

ListAllConvertPairs = () => {
	const name = "List All Convert Pairs"
	const nameType = ""
	const wight = [{
			name : "IP",
			data : 3000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/convert/exchangeInfo",
	}
	// Name Type Mandatory Description
	type params = {
		// User spends coin
		fromAsset : STRING
		// User receives coin
		toAsset : STRING
	}
	type req = [
	 {
	"fromAsset" :  string , // "BTC"  
	"toAsset" :  string , // "USDT"  
	"fromAssetMinAmount" :  NumberString , // "0.0004"  
	"fromAssetMaxAmount" :  NumberString , // "50"  
	"toAssetMinAmount" :  NumberString , // "20"  
	"toAssetMaxAmount" :  NumberString , // "2500000" 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#query-order-quantity-precision-per-asset-user_data

Queryorderquantityprecisionperasset = () => {
	const name = "Query order quantity precision per asset (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 100,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/convert/assetInfo",
	}
	// Name Type Mandatory Description
	type params = {
		// The value cannot be greater than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = [
	 {
	"asset" :  string , // "BTC"  
	"fraction" :  number , // 8 
	
	},
	| {
	"asset" :  string , // "SHIB"  
	"fraction" :  number , // 2 
	
	}
	
	]
	
}

//https://binance-docs.github.io/apidocs/spot/en#send-quote-request-user_data

Sendquoterequest = () => {
	const name = "Send quote request (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 200,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/convert/getQuote",
	}
	// Name Type Mandatory Description
	type params = {
		fromAsset : STRING
		toAsset : STRING
		// When specified, it is the amount you will be debited after the conversion
		fromAmount : DECIMAL
		// When specified, it is the amount you will be credited after the conversion
		toAmount : DECIMAL
		// SPOT or FUNDING. Default is SPOT
		walletType? : ENUM_walletType
		// 10s, 30s, 1m, 2m, default 10s
		validTime? : ENUM_validTime
		// The value cannot be greater than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"quoteId" :  NumberString , // "12415572564"  
	"ratio" :  NumberString , // "38163.7"  
	"inverseRatio" :  NumberString , // "0.0000262"  
	"validTimestamp" :  number , // 1623319461670  
	"toAmount" :  NumberString , // "3816.37"  
	"fromAmount" :  NumberString , // "0.1" 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#accept-quote-trade

AcceptQuote = () => {
	const name = "Accept Quote (TRADE)"
	const nameType = "TRADE"
	const wight = [{
			name : "UID",
			data : 500,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/convert/acceptQuote",
	}
	// Name Type Mandatory Description
	type params = {
		quoteId : STRING
		// The value cannot be greater than 60000
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"orderId" :  NumberString , // "933256278426274426"  
	"createTime" :  number , // 1623381330472  
	"orderStatus" :  string , // "PROCESS" //PROCESS/ACCEPT_SUCCESS/SUCCESS/FAIL 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#order-status-user_data

Orderstatus = () => {
	const name = "Order status (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 100,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/convert/orderStatus",
	}
	// Name Type Mandatory Description
	type params = {
		// Either orderId or quoteId is required
		orderId? : STRING
		// Either orderId or quoteId is required
		quoteId? : STRING
	}
	type req = {
	"orderId" :  number , // 933256278426274426  
	"orderStatus" :  string , // "SUCCESS"  
	"fromAsset" :  string , // "BTC"  
	"fromAmount" :  NumberString , // "0.00054414"  
	"toAsset" :  string , // "USDT"  
	"toAmount" :  NumberString , // "20"  
	"ratio" :  NumberString , // "36755"  
	"inverseRatio" :  NumberString , // "0.00002721"  
	"createTime" :  number , // 1623381330472 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-convert-trade-history-user_data

GetConvertTradeHistory = () => {
	const name = "Get Convert Trade History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/convert/tradeFlow",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		startTime : LONG
		endTime : LONG
		// Default 100, Max 1000
		limit? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"list" : [
	 {
	"quoteId" :  string , // "f3b91c525b2644c7bc1e1cd31b6e1aa6"  
	"orderId" :  number , // 940708407462087195  
	"orderStatus" :  string , // "SUCCESS"  // order status
	 
	"fromAsset" :  string , // "USDT"  // from asset
	 
	"fromAmount" :  NumberString , // "20"  // from amount
	 
	"toAsset" :  string , // "BNB"  // to asset
	 
	"toAmount" :  NumberString , // "0.06154036"  // to amount
	 
	"ratio" :  NumberString , // "0.00307702"  // price ratio
	 
	"inverseRatio" :  NumberString , // "324.99"  // inverse price 
	 
	"createTime" :  number , // 1624248872184 
	
	}
	
	],
	"startTime" :  number , // 1623824139000  
	"endTime" :  number , // 1626416139000  
	"limit" :  number , // 100  
	"moreData" :  boolean , // false 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#rebate-endpoints

GetSpotRebateHistoryRecords = () => {
	const name = "Get Spot Rebate History Records (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 12000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/rebate/taxQuery",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		startTime? : LONG
		endTime? : LONG
		// Default 1
		page? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"status" :  string , // "OK"  
	"type" :  string , // "GENERAL"  
	"code" :  NumberString , // "000000000"  
	"data" : {
	"page" :  number , // 1  // current page
	 
	"totalRecords" :  number , // 2  // total records
	 
	"totalPageNum" :  number , // 1  // total pages
	 
	"data" : [
	 {
	"asset" :  string , // "USDT"  // rebate asset
	 
	"type" :  number , // 1  // rebate type：1 is commission rebate，2 is referral kickback
	 
	"amount" :  NumberString , // "0.0001126"  
	"updateTime" :  number , // 1637651320000 
	
	},
	| {
	"asset" :  string , // "ETH"  
	"type" :  number , // 1  
	"amount" :  NumberString , // "0.00000056"  
	"updateTime" :  number , // 1637928379000 
	
	}
	
	]
	
	}
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#nft-endpoints

GetNFTTransactionHistory = () => {
	const name = "Get NFT Transaction History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/nft/history/transactions",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// 0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee
		orderType : INT
		startTime? : LONG
		endTime? : LONG
		// Default 50, Max 50
		limit? : INT
		// Default 1
		page? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"total" :  number , // 2  //total records
	 
	"list" : [
	 {
	"orderNo" :  string , // "1_470502070600699904"  // 0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee
	 
	"tokens" : [
	 {
		"network" :  string , // "BSC"  // NFT Network
	 
		"tokenId" :  NumberString , // "216000000496"  // NFT Token ID
	 
		"contractAddress" :  string , // "MYSTERY_BOX0000087" // NFT Contract Address 
		
		}
	
	],
	"tradeTime" :  number , // 1626941236000  
	"tradeAmount" :  NumberString , // "19.60000000"  
	"tradeCurrency" :  string , // "BNB" 
	
	},
	| {
	"orderNo" :  string , // "1_488306442479116288"  
	"tokens" : [
	 {
		"network" :  string , // "BSC"  
		"tokenId" :  NumberString , // "132900000007"  
		"contractAddress" :  NumberString , // "0xAf12111a592e408DAbC740849fcd5e68629D9fb6" 
		
		}
	
	],
	"tradeTime" :  number , // 1631186130000  
	"tradeAmount" :  NumberString , // "192.00000000"  
	"tradeCurrency" :  string , // "BNB" 
	
	}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-nft-deposit-history-user_data

GetNFTDepositHistory = () => {
	const name = "Get NFT Deposit History(USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/nft/history/deposit",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		startTime? : LONG
		endTime? : LONG
		// Default 50, Max 50
		limit? : INT
		// Default 1
		page? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"total" :  number , // 2  
	"list" : [
	 {
	"network" :  string , // "ETH"  // NFT Network
	 
	"txID" :  number , // null  // Transaction ID
	 
	"contractAdrress" :  NumberString , // "0xe507c961ee127d4439977a61af39c34eafee0dc6"  // NFT Contract Address
	 
	"tokenId" :  NumberString , // "10014"  // NFT Token ID
	 
	"timestamp" :  number , // 1629986047000 
	
	},
	| {
	"network" :  string , // "BSC"  
	"txID" :  number , // null  
	"contractAdrress" :  NumberString , // "0x058451b463bab04f52c0799d55c4094f507acfa9"  
	"tokenId" :  NumberString , // "10016"  
	"timestamp" :  number , // 1630083581000 
	
	}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-nft-withdraw-history-user_data

GetNFTWithdrawHistory = () => {
	const name = "Get NFT Withdraw History (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/nft/history/withdraw",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		startTime? : LONG
		endTime? : LONG
		// Default 50, Max 50
		limit? : INT
		// Default 1
		page? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"total" :  number , // 178  
	"list" : [
	 {
	"network" :  string , // "ETH"  
	"txID" :  NumberString , // "0x2be5eed31d787fdb4880bc631c8e76bdfb6150e137f5cf1732e0416ea206f57f"  
	"contractAdrress" :  NumberString , // "0xe507c961ee127d4439977a61af39c34eafee0dc6"  // NFT Contract Address
	 
	"tokenId" :  NumberString , // "1000001247"  // NFT Token ID
	 
	"timestamp" :  number , // 1633674433000  
	"fee" :  number , // 0.1  // Withdraw Fee
	 
	"feeAsset" :  string , // "ETH" // Asset 
	
	},
	| {
	"network" :  string , // "ETH"  
	"txID" :  NumberString , // "0x3b3aea5c0a4faccd6f306641e6deb9713ab229ac233be3be227f580311e4362a"  
	"contractAdrress" :  NumberString , // "0xe507c961ee127d4439977a61af39c34eafee0dc6"  
	"tokenId" :  NumberString , // "40000030"  
	"timestamp" :  number , // 1633677022000  
	"fee" :  number , // 0.1  
	"feeAsset" :  string , // "ETH" 
	
	}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#get-nft-asset-user_data

GetNFTAsset = () => {
	const name = "Get NFT Asset (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "UID",
			data : 3000,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/nft/user/getAsset",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Default 50, Max 50
		limit? : INT
		// Default 1
		page? : INT
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"total" :  number , // 347  
	"list" : [
	 {
	"network" :  string , // "BSC"  // NFT Network
	 
	"contractAddress" :  string , // "REGULAR11234567891779"  // NFT Contract Address
	 
	"tokenId" :  NumberString , // "100900000017" // NFT Token ID 
	
	},
	| {
	"network" :  string , // "BSC"  
	"contractAddress" :  string , // "SSMDQ8W59"  
	"tokenId" :  NumberString , // "200500000011" 
	
	},
	| {
	"network" :  string , // "BSC"  
	"contractAddress" :  string , // "SSMDQ8W59"  
	"tokenId" :  NumberString , // "200500000019" 
	
	}
	
	]
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#create-a-single-token-gift-card-user_data

Createasingletokengiftcard = () => {
	const name = "Create a single-token gift card (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/giftcard/createCode",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// The token type contained in the Binance Gift Card
		token : STRING
		// The amount of the token contained in the Binance Gift Card
		amount : DOUBLE
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"code" :  NumberString , // "000000"  
	"message" :  string , // "success"  
	"data" : {
	"referenceNo" :  NumberString , // "0033002327977405"  // Gift Card Number
	 
	"code" :  string , // "AOGANK3NB4GIT3C6" // Redemption Code 
	
	},
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#create-a-dual-token-gift-card-fixed-value-discount-feature-trade

Createadualtokengiftcard = () => {
	const name = "Create a dual-token gift card (fixed value, discount feature)"
	const nameType = "fixed value, discount feature"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/giftcard/buyCode",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// The token you want to pay, example: BUSD
		baseToken : STRING
		// The token you want to buy, example: BNB. If faceToken = baseToken, it&#39;s the same as createCode endpoint.
		faceToken : STRING
		// The base token asset quantity, example : 1.002
		baseTokenAmount : DOUBLE
		// Stablecoin-denominated card discount percentage, Example: 1 for 1% discount. Scale should be less than 6.
		discount? : DOUBLE
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"code" :  NumberString , // "000000"  
	"message" :  string , // "success"  
	"data" : {
	"referenceNo" :  NumberString , // "0033002327977405"  
	"code" :  string , // "AOGANK3NB4GIT3C6" 
	
	},
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#redeem-a-binance-gift-card-user_data

RedeemaBinanceGiftCard = () => {
	const name = "Redeem a Binance Gift Card (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "POST",
		url : "/sapi/v1/giftcard/redeemCode",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Redemption code of Binance Gift Card to be redeemed, supports both Plaintext &amp; Encrypted code.
		code : STRING
		// Each external unique ID represents a unique user on the partner platform. The function helps you to identify the redemption behavior of different users, such as redemption frequency and amount. It also helps risk and limit control of a single account, such as daily limit on redemption volume, frequency, and incorrect number of entries. This will also prevent a single user account reach the partner&#39;s daily redemption limits. We strongly recommend you to use this feature and transfer us the User ID of your users if you have different users redeeming Binance Gift Cards on your platform. To protect user data privacy, you may choose to transfer the user id in any desired format (max. 400 characters).
		externalUid? : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"code" :  NumberString , // "000000"  
	"message" :  string , // "success"  
	"data" :{
	"referenceNo" :  NumberString , // "0033002328060227"  
	"identityNo" :  NumberString , // "10317392647411060736"  
	"token" :  string , // "BNB"  
	"amount" :  NumberString , // "0.00000001" 
	
	},
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#verify-binance-gift-card-by-gift-card-number-user_data

VerifyBinanceGiftCardbyGiftCardNumber = () => {
	const name = "Verify Binance Gift Card by Gift Card Number (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/giftcard/verify",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// Enter the Gift Card Number
		referenceNo : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"code" :  NumberString , // "000000"  
	"message" :  string , // "success"  
	"data" : {
	"valid" :  boolean , // true  
	"token" :  string , // "BNB"  // coin
	 
	"amount" :  NumberString , // "0.00000001" // amount 
	
	},
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#fetch-rsa-public-key-user_data

FetchRSAPublicKey = () => {
	const name = "Fetch RSA Public Key (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/giftcard/cryptography/rsa-public-key",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"code" :  NumberString , // "000000"  
	"message" :  string , // "success"  
	"data" :  string , // "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXBBVKLAc1GQ5FsIFFqOHrPTox5noBONIKr+IAedTR9FkVxq6e65updEbfdhRNkMOeYIO2i0UylrjGC0X8YSoIszmrVHeV0l06Zh1oJuZos1+7N+WLuz9JvlPaawof3GUakTxYWWCa9+8KIbLKsoKMdfS96VT+8iOXO3quMGKUmQIDAQAB"  
	"success" :  boolean , // true 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#fetch-token-limit-user_data

FetchTokenLimit = () => {
	const name = "Fetch Token Limit (USER_DATA)"
	const nameType = "USER_DATA"
	const wight = [{
			name : "IP",
			data : 1,
		}
	]
	const address = {
		type : "GET",
		url : "/sapi/v1/giftcard/buyCode/token-limit",
		HMAC : true,
	}
	// Name Type Mandatory Description
	type params = {
		// The token you want to pay, example: BUSD
		baseToken : STRING
		recvWindow? : LONG
		timestamp : LONG
	}
	type req = {
	"code" :  NumberString , // "000000"  
	"message" :  string , // "success"  
	"data" : [
	 {
	"coin" :  string , // "BNB"  
	"fromMin" :  NumberString , // "0.01"  
	"fromMax" :  NumberString , // "1" 
	
	}
	
	],
	"success" :  boolean , // true 
	
	}
	| {
	"code" :  number , // 1121  
	"msg" :  string , // "Invalid symbol." 
	
	}
	
}

//https://binance-docs.github.io/apidocs/spot/en#10xx-general-server-or-network-issues
//
// 10xxGeneralServerorNetworkissues = () => {
// 	const name = "10xx - General Server or Network issues"
// 	const nameType = ""
// 	const wight = []
// 	type req = {}
// }
//
// //https://binance-docs.github.io/apidocs/spot/en#11xx-2xxx-request-issues
//
// 11xx2xxxRequestissues = () => {
// 	const name = "11xx - 2xxx Request issues"
// 	const nameType = ""
// 	const wight = []
// 	type req = {}
// }
//
// //https://binance-docs.github.io/apidocs/spot/en#3xxx-5xxx-sapi-specific-issues
//
// 3xxx5xxxSAPIspecificissues = () => {
// 	const name = "3xxx-5xxx SAPI-specific issues"
// 	const nameType = ""
// 	const wight = []
// 	type req = {}
// }
//
// //https://binance-docs.github.io/apidocs/spot/en#6xxx-savings-issues
//
// 6XXXSavingsIssues = () => {
// 	const name = "6XXX - Savings Issues"
// 	const nameType = ""
// 	const wight = []
// 	type req = {}
// }
//
// //https://binance-docs.github.io/apidocs/spot/en#70xx-futures
//
// 70xxFutures = () => {
// 	const name = "70xx - Futures"
// 	const nameType = ""
// 	const wight = []
// 	type req = {}
// }
//
// //https://binance-docs.github.io/apidocs/spot/en#20xxx-futures-spot-algo
//
// 20xxxFuturesSpotAlgo = () => {
// 	const name = "20xxx - Futures/Spot Algo"
// 	const nameType = ""
// 	const wight = []
// 	type req = {}
// }
//
// //https://binance-docs.github.io/apidocs/spot/en#filter-failures
//
// Filterfailures = () => {
// 	const name = "Filter failures"
// 	const nameType = ""
// 	const wight = []
// 	type req = {}
// }
//
// //https://binance-docs.github.io/apidocs/spot/en#10xxx-crypto-loans
//
// 10xxxCryptoLoans = () => {
// 	const name = "10xxx - Crypto Loans"
// 	const nameType = ""
// 	const wight = []
// 	type req = {}
// }
//
// //https://binance-docs.github.io/apidocs/spot/en#13xxx-blvt
//
// 13xxxBLVT = () => {
// 	const name = "13xxx - BLVT"
// 	const nameType = ""
// 	const wight = []
// 	type req = {}
// }
//
// //https://binance-docs.github.io/apidocs/spot/en#12xxx-liquid-swap
//
// 12xxxLiquidSwap = () => {
// 	const name = "12xxx - Liquid Swap"
// 	const nameType = ""
// 	const wight = []
// 	type req = {}
// }
//
// //https://binance-docs.github.io/apidocs/spot/en#18xxx-binance-code
//
// 18xxxBinanceCode = () => {
// 	const name = "18xxx - Binance Code"
// 	const nameType = ""
// 	const wight = []
// 	type req = {}
// }
//
// //https://binance-docs.github.io/apidocs/spot/en#21xxx-portfolio-margin-account
//
// 21xxxPortfolioMarginAccount = () => {
// 	const name = "21xxx - Portfolio Margin Account"
// 	const nameType = ""
// 	const wight = []
// 	type req = {}
// }

//https://binance-docs.github.io/apidocs/spot/en#order-rejection-issues

OrderRejectionIssues = () => {
	const name = "Order Rejection Issues"
	const nameType = ""
	const wight = []
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#errors-regarding-post-api-v3-order-cancelreplace

ErrorsregardingPOSTapiv3ordercancelReplace = () => {
	const name = "Errors regarding POST /api/v3/order/cancelReplace"
	const nameType = ""
	const wight = []
	type req = {}
}

//https://binance-docs.github.io/apidocs/spot/en#notes

RequestParameters = () => {
	const name = "Request Parameters"
	const nameType = ""
	const wight = []
	type req = {}
}


}    

export interface ISimplePrice {
    [key: string]: {
        usd: number
    }
}

export interface ICoinList {
    id: string
    symbol: string
    name: string
    platforms: {
        [key: string]: string
    }
}

export interface ICoinMarketList {
    id: string
    name: string
    image: string
    current_price: number
}

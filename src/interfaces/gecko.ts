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

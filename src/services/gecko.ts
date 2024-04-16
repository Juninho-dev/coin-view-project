import api from "@/services/api"
import { ICoinMarketList, ISimplePrice } from "@/interfaces/gecko";

export const getSimplePriceByIds = async (ids: string[]) => {
    const { data } = await api.get<ISimplePrice>("/simple/price", {
        params: {
            ids: ids.join(","),
            vs_currencies: "usd",
        },
    })

    return data
}

export const getCoinMarketList = async (vs_currency: string[]) => {
    const { data } = await api.get<ICoinMarketList[]>("/coins/markets", {
        params: { vs_currency: vs_currency.join(",") },
    })

    return data
}

export const getCoinDataById = async (id: string) => {
    const { data } = await api.get(`/coins/${id}`)

    return data
}

import api from "@/services/api"
import { ICoinList, ISimplePrice } from "@/interfaces/gecko";

export const getSimplePriceByIds = async (ids: string[]) => {
    const { data } = await api.get<ISimplePrice>("/simple/price", {
        params: {
            ids: ids.join(","),
            vs_currencies: "usd",
        },
    })

    return data
}

export const getCoinList = async () => {
    const { data } = await api.get<ICoinList[]>("/coins/list")

    return data
}

export const getCoinDataById = async (id: string) => {
    const { data } = await api.get(`/coins/${id}`)

    return data
}

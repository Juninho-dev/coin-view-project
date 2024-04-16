import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_GECKO_API_URL,
    headers: {
        "x-cg-demo-api-key": import.meta.env.GECKO_API_KEY,
    },
})

export default api

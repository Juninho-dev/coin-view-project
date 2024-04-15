import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_GECKO_API_URL,
})

export default api

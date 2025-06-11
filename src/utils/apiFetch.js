import { API } from "../constants/api"

export const FindPopularTvShows = async () => {
    try {
        const apiData = await fetch(`${API.BASE_URL}/3/tv/popular?api_key=${API.KEY}`)
        const response = await apiData.json()
        return response
    } catch(error) {
        console.error(`Error: ${error}`)
        return {}
    }
}
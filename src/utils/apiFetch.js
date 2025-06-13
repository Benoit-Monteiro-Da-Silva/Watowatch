import { API } from "../constants/api"

export const findPopularTvShows = async () => {
    try {
        const apiData = await fetch(`${API.BASE_URL}/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY_PARAM}`)
        const response = await apiData.json()
        return response
    } catch(error) {
        console.error(`Error: ${error}`)
        return {}
    }
}

export const findRecommandations = async (id) => {
    try {
        const apiData = await fetch(`${API.BASE_URL}/3/tv/${id}/recommendations?api_key=${import.meta.env.VITE_API_KEY_PARAM}`)
        const response = await apiData.json()
        return response
    } catch(error) {
        console.error(`Error: ${error}`)
        return {}
    }
}

export const findTvShow = async (id) => {
    try {
        const apiData = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_API_KEY_PARAM}&append_to_response=credits`)
        const response = await apiData.json()
        return response
    } catch(error) {
        console.error(`Error: ${error}`)
        return {}
    }
}
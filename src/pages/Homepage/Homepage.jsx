import { useState, useEffect } from "react"
import { CardList } from "../../components/CardList/CardList"
import { findPopularTvShows, findRecommandations } from "../../utils/apiFetch"
import { Preview } from "../../components/Preview/Preview"
import { API } from "../../constants/api"

export function Homepage() {
    const [currentShow, setCurrentShow] = useState(null)
    const [recommendations, setRecommendations] = useState([])

    const loadMostPopular = async () => {
        const popularsData = await findPopularTvShows()
        const mostPopular = popularsData.results[0]
        setCurrentShow(mostPopular)
    }

    const loadRecommendations = async (id) => {
        const currentRecommendationsData = await findRecommandations(id)
        const currentRecommendations = currentRecommendationsData.results
        setRecommendations(currentRecommendations)
    }

    useEffect(() => {
        loadMostPopular()
    }, [])

    useEffect(() => {
        if (currentShow) {
            loadRecommendations(currentShow.id)
        }
    }, [currentShow])

    return(
        currentShow &&
        <>
            <Preview 
                title={currentShow.name} 
                description={currentShow.overview}
                image={`${API.POSTER_BASE_URL}${currentShow.backdrop_path}`}
                evaluation={currentShow.vote_average}/>
            <h3>You may also like:</h3>
            <CardList list={recommendations}/>
        </>
    )
}
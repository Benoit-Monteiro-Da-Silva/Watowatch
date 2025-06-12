import { useState, useEffect } from "react"
import { CardList } from "../../components/CardList/CardList"
import { findPopularTvShows, findRecommandations } from "../../utils/apiFetch"
import { Preview } from "../../components/Preview/Preview"
import { API } from "../../constants/api"
import style from "./Homepage.module.css"

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
        currentShow && recommendations.length !==0 &&
        <div className={style.homepage}>
            <Preview 
                title={currentShow.name} 
                description={currentShow.overview}
                evaluation={currentShow.vote_average}/>
            <div className={style.imgContainer}>
                <img src={`${API.POSTER_BASE_URL}${currentShow.backdrop_path}`} alt=''/>
            </div>
            <div className={style.recommendations}>
                <h3>You may also like:</h3>
                <CardList list={recommendations}/>
            </div>
        </div>
    )
}
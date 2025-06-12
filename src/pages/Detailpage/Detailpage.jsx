import { useState, useEffect } from "react"
import { useParams, Link } from "react-router"
import { findTvShow } from "../../utils/apiFetch"
import { Preview } from "../../components/Preview/Preview"
import { API } from "../../constants/api"
import { ROUTES } from "../../constants/routes"
import style from "./Detailpage.module.css"
import { InfoLabelList } from "../../components/InfoLabelList/InfoLabelList"
import { InfoLabel } from "../../components/InfoLabel/InfoLabel"

export function Detailpage() {
    const [currentShow, setCurrentShow] = useState(null)
    const {id} = useParams()

    const loadCurrentShow = async (id) => {
        const currentShowData = await findTvShow(id)
        setCurrentShow(currentShowData)
    }

    useEffect(() => {
        loadCurrentShow(id)
    }, [])

    const formatShowInfoList = currentShow ? [
        {
            label: "Status",
            value: currentShow.status,
        },
        {
            label: "First Air Date",
            value: currentShow.first_air_date,
        },
        {
            label: "Last Air Date",
            value: currentShow.last_air_date,
        },
        {
            label: "Number of Seasons",
            value: currentShow.number_of_seasons,
        },
        {
            label: "Number of Episodes",
            value: currentShow.number_of_episodes,
        },
        {
            label: "Network",
            value: currentShow.networks[0].name,
        },
    ] : []

    return(
        currentShow && 
        <div className={style.detailPage}>
            <Link to={ROUTES.HOME} className={style.link}>Back to home</Link>
            <div className={style.imgContainer}>
                <img src={`${API.POSTER_BASE_URL}${currentShow.backdrop_path}`} alt=''/>
            </div>
            <Preview 
                title={currentShow.name}
                description={currentShow.overview}
                evaluation={currentShow.vote_average}/>
            <h2>Created by</h2>
            <InfoLabel value={currentShow.created_by[0].name}/>
            <h2>Show Info</h2>
            <InfoLabelList list={formatShowInfoList}/>
            <h2>Main Cast</h2>
        </div>
    )
}
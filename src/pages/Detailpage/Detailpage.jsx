import { useState, useEffect } from "react"
import { useParams, Link } from "react-router"
import { findTvShow } from "../../utils/apiFetch"
import { Preview } from "../../components/Preview/Preview"
import { API } from "../../constants/api"
import { ROUTES } from "../../constants/routes"
import style from "./Detailpage.module.css"

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

    return(
        currentShow && <>
            <Link to={ROUTES.HOME} className={style.link}>Back to home</Link>
            <Preview 
                title={currentShow.name}
                description={currentShow.overview}
                image={`${API.POSTER_BASE_URL}${currentShow.backdrop_path}`}
                evaluation={currentShow.vote_average}/>
        </>
    )
}
import { useState, useEffect } from "react"
import { CardList } from "../../components/CardList/CardList"
import { FindPopularTvShows } from "../../utils/apiFetch"

export function Homepage() {
    const [data, setData] = useState([])

    const loadTvShows = async () => {
        const tvShows = await FindPopularTvShows()
        setData(tvShows.results)
    }

    useEffect(() => {
        loadTvShows()
    }, [])

    return(
        <CardList list={data}/>
    )
}
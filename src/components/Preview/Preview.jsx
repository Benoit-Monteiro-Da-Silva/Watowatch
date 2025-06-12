import { useParams } from "react-router"


export function Preview({title, description, evaluation}) {
    const {id} = useParams()
    const stars = (evaluation / 2).toFixed(1)

    return(
        <div>
            {id ? <h1>{title}</h1> : <h2>{title}</h2> }
            <p>{stars}/5</p>
            <p>{description}</p>
        </div>
    )
}
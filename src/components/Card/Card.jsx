import { Link } from "react-router"
import { ROUTES } from "../../constants/routes"


export function Card({id, title, image}) {
    return(
        <Link to={ROUTES.DETAIL.replace(":id", id)}>
            <div>
                <img src={image}/>
            </div>
            <p>{title}</p>
        </Link>
    )
}
import { Link } from "react-router"
import { ROUTES } from "../../constants/routes"
import style from "./Card.module.css"

export function Card({id, title, image}) {
    return(
        <Link to={ROUTES.DETAIL.replace(":id", id)} className={style.link}>
            <div className={style.imgContainer}>
                <img src={image}/>
            </div>
            <p>{title}</p>
        </Link>
    )
}
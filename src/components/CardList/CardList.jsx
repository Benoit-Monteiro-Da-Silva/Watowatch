import { Card } from "../Card/Card"
import { API } from "../../constants/api"
import style from "./CardList.module.css"

export function CardList({list}) {
    return(
        <ul className={style.list}>
            {list.map(item => (
                <li key={item.id}>
                    <Card 
                        id={item.id} 
                        title={item.name} 
                        image={`${API.THUMBNAIL_BASE_URL}${item.backdrop_path}`}/>
                </li>
            ))}
        </ul>
    )
}
import { Card } from "../Card/Card"
import { API } from "../../constants/api"

export function CardList({list}) {
    return(
        <ul>
            {list.map(item => (
                <li>
                    <Card title={item.name} image={`${API.THUMBNAIL_BASE_URL}${item.poster_path}`}/>
                </li>
            ))}
        </ul>
    )
}
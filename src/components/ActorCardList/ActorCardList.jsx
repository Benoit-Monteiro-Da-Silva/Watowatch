import { ActorCard } from "../ActorCard/ActorCard";
import { API } from "../../constants/api";

export function ActorCardList({list}) {
    return(
        <ul>
            {list.map(item => (
                <li key={item.id}>
                    <ActorCard 
                        name={item.name} 
                        character={item.character} 
                        image={`${API.THUMBNAIL_BASE_URL}${item.profile_path}`}/>
                </li>
            ))}
        </ul>
    )
}
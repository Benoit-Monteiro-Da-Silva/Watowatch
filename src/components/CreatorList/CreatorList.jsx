import { InfoLabel } from "../InfoLabel/InfoLabel";

export function CreatorList({list}) {
    return(
        <ul>
            {list.map(item => (
                <li key={item.id}>
                    <InfoLabel value={item.name}/>
                </li>
            ))}
        </ul>
    )
}
import { InfoLabel } from "../InfoLabel/InfoLabel"


export function InfoLabelList({list}) {
    return(
        <ul>
            {list.map(item => (
                <li key={item.label}>
                    <InfoLabel
                        label={item.label} 
                        value={item.value}/>
                </li>
            ))}
        </ul>
    )
}
export function InfoLabel({label, value}) {
    return(
        <div>
            {label && <span>{label}: </span>}
            {value && <span>{value}</span>}
        </div>
    )
}
export function Card({image, title}) {
    return(
        <div>
            <div>
                <img src={image}/>
            </div>
            <p>{title}</p>
        </div>
    )
}
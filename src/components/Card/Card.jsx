export function Card({id, title, image}) {
    return(
        <div>
            <div>
                <img src={image}/>
            </div>
            <p>{title}</p>
        </div>
    )
}
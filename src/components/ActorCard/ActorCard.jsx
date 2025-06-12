export function ActorCard({name, character, image}) {
    return(
        <div>
            <div>
                <img src={image}/>
            </div>
            <p>{name}</p>
            <p>{character}</p>
        </div>
    )
}
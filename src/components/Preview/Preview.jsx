import style from "./Preview.module.css"

export function Preview({id, title, description, image, evaluation}) {
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={style.imgContainer}>
                <img src={image}/>
            </div>
        </div>
    )
}
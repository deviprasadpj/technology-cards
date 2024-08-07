import './index.css'

const CardItem = (props) => {
    const {cardDetails} = props
    const {technologyName, description, imgUrl, className} = cardDetails

    return (
        <li className={`${className} card-container`}>
            <h1 className="card-title">{technologyName}</h1>
            <p className="card-description">{description}</p>
            <div className="img-container">
                <img src={imgUrl} className="card-img" alt={title}/>
            </div>
        </li>
    )

}

export default CardItem

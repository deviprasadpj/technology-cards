import './index.css'

const CardItem = (props) => {
    const {cardDetails} = props
    const {technologyName, description, imgUrl, className} = cardDetails

    return (
        <li className={`${className} card-container`}>
            <h1 className="technology-name">{technologyName}</h1>
            <p className="card-description">{description}</p>
            <img src={imgUrl} className="avatar" alt="avatar"/>
        </li>
    )

}

export default CardItem
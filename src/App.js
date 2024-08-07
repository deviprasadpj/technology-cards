import './App.css';
import CardItem from './components/CardItem'

const cardDetailsList = [
  {
    uniqueId:1,
    technologyName: "Data Scientist",
    description: "Data Scientists gather and analyze large sets of structured and unstructured data",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/data-scientist-img.png",
    className: "card-1",
  },
  {
    uniqueId:2,
    technologyName: "IOT Developer",
    description: "Data Scientists gather and analyze large sets of structured and unstructured data",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/iot-developer-img.png",
    className: "card-2",
  },
  {
    uniqueId:3,
    technologyName: "VR Developer",
    description: "Data Scientists gather and analyze large sets of structured and unstructured data",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/vr-developer-img.png",
    className: "card-3",
  },
  {
    uniqueId: 4,
    technologyName: "ML Engieneer",
    description: "Data Scientists gather and analyze large sets of structured and unstructured data",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png",
    className: "card-4",
  },
]
const App = () => (
  <div className="app-container">
    <div className="cards-list-container">
      <h1 className="heading">Learn 4.0 technologies </h1>
      <p className="description">Ger trained by Alumni of IIT's and top companies like Amazon, Microsoft, Intel, etc.
        directly involved in Product Development.
      </p>
      <ul className="cards-list">
        {cardDetailsList.map(eachItem => (
          <CardItem cardDetails={eachItem} key={eachItem.uniqueId} />
        ))}
      </ul>
    </div>
  </div>
)
export default App;

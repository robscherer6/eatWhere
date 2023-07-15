import Food from '../images/food.png'
import Star from '../images/star.png'
function Card(props) {
  return (
    <div className="card">
      <img src={Food} alt="food" className="card-image"/>
      <div className="card-stats">
        <img src={Star} alt="star" className="card--star"/>
        <span>{props.rating}</span>
        <span>(6) • </span>
        <span>{props.type_of_food}</span>
      </div>
      <p>{props.name}</p>
      <p><span className="bold">$$</span></p>
    </div>
  )
}

export default Card
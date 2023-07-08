import Food from '../images/food.png'
import Star from '../images/star.png'
function Card() {
  return (
    <div className="card">
      <img src={Food} alt="food" className="card-image"/>
      <div className="card-stats">
        <img src={Star} alt="star" className="card--star"/>
        <span>5.0</span>
        <span>(6) • </span>
        <span>Frederick, MD</span>
      </div>
      <p>Lazy Fish</p>
      <p><span className="bold">$$</span></p>
    </div>
  )
}

export default Card
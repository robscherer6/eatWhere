import Food from '../images/food.png'
import Star from '../images/star.png'

function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
      <img src={Food} alt="food" className="card-image"/>
      <div className="card-stats">
        <img src={Star} alt="star" className="card--star"/>
        <span>&nbsp; {props.rating} &nbsp;</span>
        <span>({props.reviewCount}) • </span>
        <span>{props.foodType}</span>
      </div>
      <p>{props.name}</p>
      <div>
        <a href={props.website} className="active">Website</a>
      </div>
      <p><span className="bold">$$</span></p>
    </div>
  )
}

export default Card
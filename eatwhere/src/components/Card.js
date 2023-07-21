import Food from '../images/food.png'
import Star from '../images/star.png'

function Card(props) {
  return (
    <div className="card">
      {props.rest.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
      <img src={Food} alt="food" className="card-image"/>
      <div className="card-stats">
        <img src={Star} alt="star" className="card--star"/>
        <span>&nbsp; {props.rest.rating} &nbsp;</span>
        <span>({props.rest.reviewCount}) • </span>
        <span>{props.rest.type_of_food}</span>
      </div>
      <p>{props.rest.name}</p>
      <div>
        <a href={props.rest.website} className="active">Website</a>
      </div>
      <p><span className="bold">$$</span></p>
    </div>
  )
}

export default Card
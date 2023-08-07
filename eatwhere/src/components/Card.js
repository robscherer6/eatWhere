//import Food from '../images/food.png'
import Star from '../images/star.png'
import restaurantData from '../data/restaurantData'


function Card() {

  return (
    restaurantData.map((rest) => ( 
        <div className="card">
          {rest.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
          <img src={rest.image} alt="food" className="card-image" /><div className="card-stats">
          <img src={Star} alt="star" className="card--star" />
          <span>&nbsp; {rest.rating} &nbsp;</span>
          <span>({rest.reviewCount}) • </span>
          <span>{rest.type_of_food}</span>
          </div><p>{rest.name}</p><div>
            <a href={rest.website} className="active">Website</a>
          </div><p><span className="bold">$$</span></p>
      </div>
      ))
  )
}

export default Card



      

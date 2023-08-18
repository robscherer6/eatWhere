import React from "react"
//import Food from '../images/food.png'
import restaurantData from '../data/restaurantData'
//import Star from './components/Star'


function Card(props) {
  const [restaurants, setRestaurants] = React.useState(restaurantData);

  const restaurantElements = restaurants.map((rest) => ( 
    <div className="card" key={rest._id.$oid}>
       {rest.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
       <img src={rest.image} alt="food" className="card-image" /><div className="card-stats">
         {/* <Star isFilled={props.isFilled}/> */}
       <span>&nbsp; {rest.rating} &nbsp;</span>
       <span>({rest.reviewCount}) • </span>
       <span>{rest.type_of_food}</span>
       </div><p>{rest.name}</p><div>
         <a href={rest.website} className="active">Website</a>
       </div><p><span className="bold">$$</span></p>
    </div>
  ))

  return (
    <main>
      {restaurantElements}
    </main>
  )
}

export default Card





      

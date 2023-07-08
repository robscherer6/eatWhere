import Food from '../images/food.png'
function Card() {
  return (
    <div className="card">
      <img src={Food} alt="food" className="food-image"/>
      <h6>Rating</h6>
      <h6>Title</h6>
      <h6>Price</h6>
    </div>
  )
}

export default Card
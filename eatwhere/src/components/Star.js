import React from 'react'
//import Star from '../images/star.png'


function Star(props) {
  const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"

  return (
    <img src={`..images/${starIcon}`}
    className="card--favorite" alt=""/>
  )
}

export default Star
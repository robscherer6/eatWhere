import React from 'react';
import Card from './Card'

function Search (props) {


  const [status, showRestaurants] = React.useState(false)

  function handleClick(e) {
    e.preventDefault();
    showRestaurants(!status)
  }



  return (
    <div className='container'>
      <main>
        <form className="form">
          <input type="text" name="name" className='form-input'></input>
          <button className="form-button" onClick={handleClick}>Search {status ? <div className='restaurant-data'>
            <Card/> </div> : ''}</button>
        </form>
      </main>
    </div>
  )
}

export default Search

 
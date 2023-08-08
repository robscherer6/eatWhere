import React from 'react';
import Card from './Card'

function Search (props) {


  const [status, showRestaurants] = React.useState(false)

  function handleClick(e) {
    e.preventDefault();
    showRestaurants(!status)
    
    // setStatus((oldValue) => {
    //   if (oldValue === "Search") {
    //     setStatus('Searching...')
    //   } else {
    //     setStatus('Search')
    //   }
    // })
  }



  return (
    <div className='container'>

      <main>
        <form className="form">
    
          <button className="form-button" onClick={handleClick}>{status ? <div className='restaurant-data'>
            <Card />
      </div> : <button>Login</button>}</button>

        </form>
      </main>

      <div className='restaurant-data'>
            <Card />
      </div>

    </div>
  )
}

export default Search
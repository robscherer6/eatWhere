import React from 'react';
import Card from './Card'

function Search (props) {


  const [status, setStatus] = React.useState(false)

  function handleClick(e) {
    e.preventDefault();
    setStatus(!status)
    
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
            {/* <input type="text" className="form-input" placeholder="Restaurant Name"/>
            <input type="text" className="form-input" placeholder="Distance"/> */}
          <button className="form-button" onClick={handleClick}>{status}</button>

        </form>
      </main>
      <div className='restaurant-data'>
            <Card />
      </div>
    </div>
  )
}

export default Search
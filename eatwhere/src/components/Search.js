import React from 'react'

function Search () {
  const [isOpenOnMonday, setIsOpenOnMonday] = React.useState("Yes")
        
  function handleClick(e) {
    e.preventDefault();
    if (setIsOpenOnMonday("No")) {
      setIsOpenOnMonday("Yes")
    }
  }

  return (
    <main>
      <form className="form">
          <input type="text" className="form-input" placeholder="Restaurant Name"/>
          <input type="text" className="form-input" placeholder="Distance"/>
        <button className="form-button" onClick={handleClick}>{isOpenOnMonday}</button>
      </form>
    </main>
  )
}

export default Search
function Search () {

  const things = ['thing1', 'thing2']
  const mapThings = things.map((thing) => {
    return (
      <p>
        thing = {thing}
      </p>

    )
  })

  function handleClick(e) {
    e.preventDefault();
    things.push(`thing${things.length + 1}`)
    console.log(things)
  }

  return (
    <main>
      <form className="form">
          <input type="text" className="form-input" placeholder="Restaurant Name"/>
          <input type="text" className="form-input" placeholder="Distance"/>
        <button className="form-button" onClick={handleClick}>Search</button>
      </form>
      {mapThings}
    </main>
  )
}

export default Search
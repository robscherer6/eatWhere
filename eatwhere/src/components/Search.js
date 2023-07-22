function Search () {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('hello from submit')
  }
  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
          <input type="text" className="form-input" placeholder="Restaurant Name"/>
          <input type="text" className="form-input" placeholder="Distance"/>
        <button className="form-button">Search</button>
      </form>
    </main>
  )
}

export default Search
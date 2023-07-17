function Main() {
  const factors = ['Distance', 'Type of Food', 'Decor', 'Rating']
  return (
    <main>
      <h1 className="main--title">Recommendations: </h1>
      <ul className='list'>
        {factors.map(factor => <li>{factor}</li>)}
      </ul>
    </main>
  )
}

export default Main
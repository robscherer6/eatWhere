import Navbar from './components/Navbar'
import Main from './components/Main'
import Hero from './components/Hero'
import Card from './components/Card'
import Search from './components/Search'
import restaurantData from './data/restaurantData'

function App() {

  const restaurants = restaurantData.map((rest) => {
    return (
            <Card
              key={rest.id}
              rest = {rest}
            />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Search />
      <section className="restaurants">
        {restaurants}
      </section>

    </div>
  )
}

export default App

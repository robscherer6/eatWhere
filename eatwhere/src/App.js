import Navbar from './components/Navbar'
import Main from './components/Main'
import Hero from './components/Hero'
import Card from './components/Card'
import Contact from './components/Contact'
import img from './images/lazyFish.png'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Card />
      <Contact
        img={img}
        name="Lazy Fish"
        phone="(240) 372-1234"
        email="lazyfish@lazy.com"
      />
      <Contact
        img="./images/lazyFish.png"
        name="Summitra"
        phone="(555) 555-1234"
        email="summitra@summitra.com"
      />
      <Contact
        img="./images/lazyFish.png"
        name="McDonalds"
        phone="(123) 555-1234"
        email="mcdonalds@mcdonalds.com"
      />
      <Contact
        img="./images/lazyFish.png"
        name="Chipotle"
        phone="(555) 123-1234"
        email="chipotle@chipotle.com"
      />
    </div>
  )
}

export default App
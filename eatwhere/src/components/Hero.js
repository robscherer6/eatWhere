import Pics from '../images/hero.png'
function Hero() {
  return (
    <section className="hero">
      <img src={Pics} alt="Group" className="hero--photo"/>
      <h3 className="hero--header">Take the frustration out of chosing where to eat
        each night</h3>
    </section>
  )
}

export default Hero
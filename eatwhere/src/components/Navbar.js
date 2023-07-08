import Logo from '../images/OM-logo.png'

function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="Logo" className="nav--icon" />
      <h3 className="nav--title">eatWhere</h3>
      <h4 className="nav--option">Help Me Choose</h4>
    </nav>
  )
}

export default Navbar

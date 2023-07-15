function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} alt="" className="lazy-pic"/>
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="" alt="phone" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="" alt="email" />
        <p>{props.email}</p>
      </div>
    </div>
  )
}

export default Contact
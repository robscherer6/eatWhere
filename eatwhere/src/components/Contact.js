function Contact({img, name, phone, email}) {
  return (
    <div className="contact-card">
      <img src={img} alt="" className="lazy-pic"/>
      <h3>{name}</h3>
      <div className="info-group">
        <img src="" alt="phone" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src="" alt="email" />
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Contact
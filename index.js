function Header() {
  return (
    <header className="header">
      <nav className='nav'>
        <img src="./react-logo.png" alt="" className='nav-logo'/>
          <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </nav>
    </header>
  )
}



function Footer() {
  return (
    <div>
      <footer className='footer'>
        © 2023 Scherer development. All rights reserved.
      </footer>
    </div>
  )
}

function Content() {
  return (
    <div>
      <h1>Reasons I am excited to learn React</h1>
        <ol className='ordered-list'>
          <li>I need to use it for my personal portfolio project</li>
          <li>I believe it will make me more employable</li>
          <li>It is always exciting learning new things</li>
        </ol>
    </div>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

// const page = (
//   <div>
//     <h1 className='header'>eatWhere</h1>
//     <ul>
//       <li>About</li>
//       <li>Pricing</li>
//       <li>Contact</li>
//     </ul>
//   </div>
// )

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

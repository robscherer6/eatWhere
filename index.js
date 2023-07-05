function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" alt="" width='40px'/>
      </nav>
    </header>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <h1>Reasons I am excited to learn React</h1>
      <ol>
        <li>I need to use it for my personal portfolio project</li>
        <li>I believe it will make me more employable</li>
        <li>It is always exciting learning new things</li>
      </ol>
      <footer>
        © 2023 Scherer development. All rights reserved.
      </footer>
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

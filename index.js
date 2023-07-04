// function MainContent () {
//   return (
//       <h1>eatWhere</h1>
//   )
// }

// let h1 = document.createElement('h1');
// h1.className = 'header';
// h1.textContent = 'Hello, React!';
// console.log(h1);

const navbar = (
  <nav>
    <h1 className='header'>eatWhere</h1>
    <ul>
      <li>About</li>
      <li>Pricing</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(
  navbar,
  document.getElementById('root')
);

const page = (
  <div>
    <img src="./react-logo.png" alt="" width='40px'/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)

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
  page,
  document.getElementById('root')
);

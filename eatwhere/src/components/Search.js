import React from 'react';

function Search () {
  const [search, setStatus] = React.useState("Search")

  function handleClick(e) {
    e.preventDefault();
    setStatus((oldValue) => {
      if (oldValue === "Search") {
        setStatus('Searching...')
      } else {
        setStatus('Search')
      }
    })
  }

  return (
    <main>
      <form className="form">
          <input type="text" className="form-input" placeholder="Restaurant Name"/>
          <input type="text" className="form-input" placeholder="Distance"/>
        <button className="form-button" onClick={handleClick}>{search}</button>
      </form>
    </main>
  )
}

export default Search

// function MyComponent() {
//   const [data, setData] = useState([]);



//   return (
//     <div>
//       <h1>API Data</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
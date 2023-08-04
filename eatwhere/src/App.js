import Navbar from './components/Navbar'
import Main from './components/Main'
import Hero from './components/Hero'
import Card from './components/Card'
import Search from './components/Search'
import Thing from './components/Thing'
import restaurantData from './data/restaurantData'
//import React, {useState,useEffect} from 'react';

function App() {
  const restaurants = restaurantData.map((rest) => {
    return (
            <Card
              key={rest.id}
              rest = {rest}
            />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Search />
      <Thing />
      <section className="restaurants">
        {restaurants}
      </section>
    </div>
  )
}

export default App


// const [data, setData]= useState([]);

// const getData=()=>{
//   fetch('../data.json'
//   ,{
//     headers : {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//      }
//   }
//   )
//     .then(function(response){
//       //console.log(response)
//       return response.json();
//     })
//     .then(function(myJson) {
//       //console.log(myJson);
//       setData(myJson);
//     });
// }

// useEffect(()=>{
//   getData()
// }, [])

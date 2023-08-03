import React, { useState, useEffect } from 'react';

function Search () {
  const [isOpenOnMonday, setIsOpenOnMonday] = React.useState("Yes")
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
        
  function handleClick(e) {
    e.preventDefault();
    fetchData();
  }

  return (
    <main>
      <form className="form">
          <input type="text" className="form-input" placeholder="Restaurant Name"/>
          <input type="text" className="form-input" placeholder="Distance"/>
        <button className="form-button" onClick={handleClick}>{isOpenOnMonday}</button>
      </form>
    </main>
  )
}

export default Search

function MyComponent() {
  const [data, setData] = useState([]);



  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
//import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'

ReactDOM.render (
  <App />,
  document.getElementById('root')
)

const fetch = require('node-fetch');

const url = 'https://the-fork-the-spoon.p.rapidapi.com/sale-type-menu/list?id_restaurant=522995&locale=en_US';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '712b47486fmsh49a364b513ca73dp1d0a33jsn7b21a5dd1328',
    'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
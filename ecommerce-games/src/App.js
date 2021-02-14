import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Items from './components/Items';
import Cart from './components/Cart';


function App() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [visibility, setVisibility] = useState('false');
  
  const getData = () => {
    fetch('products.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(function(response) {
      console.log(response)
      return response.json();
    })
    .then(function(theJson) {
      console.log(theJson);
      setData(theJson)
    });
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App">
      <Header />
      <Items data={data} />
      <Cart visibility={visibility} setVisibility={setVisibility}/>
    </div>
  );
}

export default App;

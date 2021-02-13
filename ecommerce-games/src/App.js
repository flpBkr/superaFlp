import './App.css';
import { useState, useEffect } from 'react';
import Items from './components/Items';
import Cart from './components/Cart';

function App() {
  const [data, setData] = useState([]);

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

  // showCart() {
  //   alert('Hello!');
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Game Store</h1>
      </header>

      <Items data={data} />

      <Cart />
    </div>
  );
}

export default App;

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

  const { products } = data;
  console.log("cartItems", cartItems);
  
  const onAdd = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if(exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1} : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }])
    }
  };

  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header />
      <Items 
        data={data} 
        products={products}
        onAdd={onAdd}
      />
      <Cart 
        visibility={visibility} 
        setVisibility={setVisibility}
        onAdd={onAdd}
        onRemove={onRemove}
        cartItems={cartItems}
      />
      {/* <div>{shipping}</div> */}
    </div>
  );
}

export default App;

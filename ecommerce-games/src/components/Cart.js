import { useState } from 'react';
import '../App.css';

// className={
//   (typeof weather.main != "undefined")
//     ? ((weather.main.temp > 16)
//       ? "app warm"
//       : "app")
//     : "app"
//   }>

const Cart = ({data}) => {
  const [visibility, setVisibility] = useState('false');
  return (
    <aside className={(visibility === 'false') ? 'cart-box' : 'cart-box cart-box-open'}>
      <button className='close-cart' onClick={() => setVisibility('false')}>X</button>
        <section onClick={() => setVisibility('true')}>
        <h4 className='cart-title'>
          <span className='cart-icon'></span>
          Carrinho
        </h4>
        <div>
          <button className='remove-product'>X</button>
          Product 1
          <p>Subtotal:</p>
        </div>
        <p>Frete:</p>
        <p>Total: R$500,00</p>
      </section>
    </aside>
  );
}

export default Cart;


import '../App.css';

const Cart = ({data, visibility, setVisibility, onAdd, cartItems}) => {
  return (
    <aside className={(visibility === 'false') ? 'cart-box' : 'cart-box cart-box-open'}>
      <button className='close-cart btn btn-outline-dark btn-sm' onClick={() => setVisibility('false')}>X</button>
      <div onClick={() => setVisibility('true')}>
        <h4 className='cart-title'>
          <span className='cart-icon'></span>
          Carrinho
        </h4>

        <div>
          { cartItems.length === 0 && <div>O carrinho está vazio.</div>}
        </div>

        {cartItems.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>
              <button onClick={() => onAdd(item)}>+</button>
            </div>
            <div>
              {item.qty} x R${item.price.toFixed(2)}
            </div>
          </div>
        ))}

      </div>
    </aside>
  );
}

export default Cart;


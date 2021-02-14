import '../App.css';

const Cart = ({data, visibility, setVisibility, onAdd, onRemove, cartItems}) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const itemsNum = cartItems.reduce((a, c) => a + c.qty, 0);
  let shippingPrice = itemsNum * 10;
  let totalPrice = itemsPrice + shippingPrice;
  if (totalPrice > 250) {
    totalPrice -= shippingPrice;
    shippingPrice = 0;
  };
  
  return (
    <aside className={(visibility === 'false') ? 'cart-box' : 'cart-box cart-box-open'}>
      <button className='close-cart btn btn-dark btn-sm' onClick={() => setVisibility('false')}>X</button>
      <div onClick={() => setVisibility('true')} className='cart-box-click'>
        <h5 className='cart-title'>
          <div className='cart-icon'>
          </div>
          { itemsNum > 0 ? <span className='cart-number'>{itemsNum}</span> : '' }
          <span className='cart-title-text'>Carrinho</span>
        </h5>

        <div>
          { cartItems.length === 0 && <div>O carrinho está vazio.</div>}
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className='cart-product'>
            <img 
              src={'assets/'+ item.image} 
              className='cart-product-img img-thumbnail' 
              alt='Product thumbnail'
            />

            <div className='cart-product-info'>
              <div className='cart-product-name'>{item.name}</div>
              <div className='cart-item-qty'>
                {item.qty} item(s) x R${item.price.toFixed(2)}
              </div>
            </div>

            <div className='cart-qty-buttons'>
              <button 
                className='cart-add btn btn-outline-success' 
                onClick={() => onAdd(item)}
              >
                +
              </button>
              <button 
                className='cart-remove btn btn-outline-danger' 
                onClick={() => onRemove(item)}
              >
                -
              </button>
            </div>


          </div>
        ))}

        {cartItems.length !== 0 && (
          <div>
            <hr></hr>
            <div>
              <div>Subtotal</div>
              <div>R${itemsPrice.toFixed(2)}</div>
            </div>
            <div>
              <div>Frete</div>
              <div>R${shippingPrice.toFixed(2)}</div>
            </div>
            <div>
              <div><strong>Total</strong></div>
              <div><strong>R${totalPrice.toFixed(2)}</strong></div>
            </div>
          </div>
        )}
      </div>


    </aside>
  );
}

export default Cart;


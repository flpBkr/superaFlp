import '../App.css';

const Cart = ({data, visibility, setVisibility, onAdd, onRemove, cartItems}) => {
  return (
    <aside className={(visibility === 'false') ? 'cart-box' : 'cart-box cart-box-open'}>
      <button className='close-cart btn btn-dark btn-sm' onClick={() => setVisibility('false')}>X</button>
      <div onClick={() => setVisibility('true')}>
        <h4 className='cart-title'>
          <span className='cart-icon'></span>
          Carrinho
        </h4>

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

      </div>
    </aside>
  );
}

export default Cart;


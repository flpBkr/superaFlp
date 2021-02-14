import '../App.css';

const Cart = ({data, visibility, setVisibility}) => {
  return (
    <aside className={(visibility === 'false') ? 'cart-box' : 'cart-box cart-box-open'}>
      <button className='close-cart btn btn-outline-dark btn-sm' onClick={() => setVisibility('false')}>X</button>
        <section onClick={() => setVisibility('true')}>
        <h4 className='cart-title'>
          <span className='cart-icon'></span>
          Carrinho
        </h4>
        <div>
          <button className='remove-product btn btn-outline-dark btn-sm'>X</button>
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


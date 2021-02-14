import '../App.css';
import SortButtons from './SortButtons';

const Items = ({data, onAdd}) => {
  return (
    <main>
      <div className='offset-sm-1 col-sm-10 '>
        <SortButtons />
      
        <section className='products-box'>
          <div className='row'>
            {data && data.length>0 && data.map((item) =>
              <div className='col-sm-4 col-lg-3'>
                <div className='product card'>
                  <img src={'assets/'+ item.image} className='card-img-top' alt='product'/>
                  <h4 className='product-name'>{item.name}</h4>
                  <p>Preço: R$ {item.price}</p>
                  <p>{item.score} like(s)</p>
                  <div className='count-buttons-box'>
                    <button 
                      className='btn btn-outline-success' 
                      onClick={() => onAdd(item)}
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Items;

